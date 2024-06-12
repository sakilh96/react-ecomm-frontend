import { connect } from "react-redux";
import ProductsComponent from "../../components/products/ProductsComponent";

const mapStateToProps = state => ({
    data: state
})

const mapDispatchtoProps = dispatch => ({
      
})

export default connect(mapStateToProps,mapDispatchtoProps)(ProductsComponent)