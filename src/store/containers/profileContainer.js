import { connect } from "react-redux";
import ProfileComponent from "../../components/ProfileComponent";

const mapStateToProps = state => ({
    data: state,
})


const mapDispatchtoProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchtoProps)(ProfileComponent)
