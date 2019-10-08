import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import allReducer from './reducers/index';
import LoginContainer from './containers/loginContainer';
import RegisterContainer from './containers/registerContainer';

const middewares = [
  thunkMiddleware
];

const store = createStore(
  allReducer,
  applyMiddleware(...middewares)
);

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <RegisterContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}
