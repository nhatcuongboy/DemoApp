import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const allReducer = combineReducers({
    loginReducer, registerReducer
});

export default allReducer;