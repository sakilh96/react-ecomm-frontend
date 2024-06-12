import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    // console.log('props',props.component);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.userReducers.userToken)
    useEffect(()=>{
        if(isAuthenticated == null){
            navigate('/');
        }
    })
    
    return (
        <>
        { props.component !== 0 ?  <props.component/> : '' }
       
        <Outlet/>
        </>
      
    )
    
}

export default ProtectedRoute;