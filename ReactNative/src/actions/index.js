import * as ActionTypes from './types';
import axios from 'axios';

// PLAIN OBJECT
export const login = (username, password) => {
  //alert('user: '+username);
  return {
    type: ActionTypes.LOGIN,
    username: username,
    password: password
  }
}

// Cac ham Async dung de xu ly du lieu frontend (Client)
export const loginAsync = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_LOGIN_PENDING
    });

    axios.post('https://us-central1-fullproject-d5a8b.cloudfunctions.net/login', { username: username, password: password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_SUCCESS,
          user: response.data.user,
          loginStatus: response.data.user.length > 0
        });
        if (response.data.user.length > 0) {
          alert(`Info: ${JSON.stringify(response.data.user)}`);
        }
        else {
          alert('Login faild');
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_ERROR,
          error: error
        });
        alert(`Error: ${JSON.stringify(error)}`);
      });
  };
}

export const registerAsync = (username, password, fullname) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_REGISTER_PENDING
    });

    axios.post('https://us-central1-fullproject-d5a8b.cloudfunctions.net/register', { username: username, password: password, fullname: fullname })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_REGISTER_SUCCESS,
          registerStatus: response.data.ok,
          error: response.data.error
        });
        if (response.data.ok) {
          alert('Register success');
        }
        else {
          alert('Register faild. Message: ' + response.data.message);
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.AUTH_REGISTER_ERROR,
          error: error
        });
        alert(`Error: ${JSON.stringify(error)}`);
      });
  };
}
