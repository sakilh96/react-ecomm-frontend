import { connect } from "react-redux";
import { getLoginToken } from "../actions/LoginAction";
import LoginComponent from "../../components/LoginComponent";

const mapStateToProps = state => ({
    data: state.userToken,
})

const mapDispatchtoProps = dispatch => ({
    getUserLoginToken:token => dispatch(getLoginToken(token)),
})

export default connect(mapStateToProps,mapDispatchtoProps )(LoginComponent)