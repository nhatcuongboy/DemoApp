import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerAsync} from '../actions';

const mapStateToProps = (state) => ({
    loading: state.registerReducer.loading,
    //user: state.registerReducer.user,
    registerStatus: state.registerReducer.registerStatus,
    error: state.registerReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    registerAsync: (username, password, fullname) => dispatch(registerAsync(username, password, fullname))
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterContainer;