import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, loginAsync} from '../actions';

const mapStateToProps = (state) => ({
    // loading: state.loginReducer.loading,
    // username: state.loginReducer.user,
    // password: state.loginReducer.pass,
    // loginStatus: state.loginReducer.loginStatus,
    loading: state.loginReducer.loading,
    user: state.loginReducer.user,
    loginStatus: state.loginReducer.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password)),
    loginAsync: (username, password) => dispatch(loginAsync(username, password))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;