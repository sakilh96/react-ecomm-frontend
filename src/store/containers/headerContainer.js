import { connect } from "react-redux";
import { userLogout } from "../actions/LoginAction";
import Header from "../../components/common/Header";

const mapStateToProps = state => ({
    data: state
});

const mapDispatchtoProps = dispatch => ({
    logoutUser:data => dispatch(userLogout(data))
})

export default connect(mapStateToProps, mapDispatchtoProps)(Header)