import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.userReducers.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;
