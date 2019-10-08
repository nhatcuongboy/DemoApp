// Cloud Function dung de xu ly du lieu backend (sever)
// doc: https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

// api (GET): https://us-central1-fullproject-d5a8b.cloudfunctions.net/getUsers
exports.getUsers = functions.https.onRequest((request, response) => {
  var docs = [];
  db.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });

      response.send(docs);
      return null;
    })
    .catch((exception) => {
      response.status(500).json({ ok: false, error: exception });
    });
});

// api (POST): https://us-central1-fullproject-d5a8b.cloudfunctions.net/login
exports.login = functions.https.onRequest((request, response) => {
  const { username, password } = request.body;
  var docs = [];
  db.collection('users')
    .where('username', '==', username)
    .where('password', '==', password)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      var ok = docs.length > 0;
      response.json({ ok: ok, user: docs });
      return null;
    })
    .catch((exception) => {
      response.json({ ok: false, error: exception });
    });
});


// api (POST): https://us-central1-fullproject-d5a8b.cloudfunctions.net/register
exports.register = functions.https.onRequest((request, response) => {
  var docRef = db.collection('users');
  // body = {
  //   username: request.body.username,
  //   password: request.body.password,
  //   fullName: request.body.fullName,
  // }
  var username = request.body.username;
  var docs = [];
  docRef.where('username', '==', username)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      var exits = docs.length > 0;
      if (exits) {
        response.json({ ok: false, message: 'Username is duplicated' });
        return;
      }
      else {
        docRef.add(request.body).then(result => {
          response.json({
            ok: true
          })
          return null;
        }).catch(exception => {
          response.json({
            ok: false,
            error: exception
          })
        });
      }
      return null;
    })
    .catch((exception) => {
      response.json({ ok: false, error: exception });
      return;
    });

});


// method: 'POST, PUT': const param = request.body.nameofparam
// method: 'GET, PUT, DELETE' : const param = request.query.nameofparam