import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({children}) => {

    const {currentUser, loading} = useContext(AuthContext);
    const intendedLocation = useLocation();

    if(loading) {
        return <Loading></Loading>
    }

    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" state={{ from: intendedLocation }} replace></Navigate>
};

export default PrivateRoutes;