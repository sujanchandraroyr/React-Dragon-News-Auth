import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"


const Privateroutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)

    if(loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user) {
        return children;
    }
    
        return <Navigate state={location.pathname} to="/login"></Navigate>
};

Privateroutes.propTypes = {
    children: PropTypes.node
}

export default Privateroutes;