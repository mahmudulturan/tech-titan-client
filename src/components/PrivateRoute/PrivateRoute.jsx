import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const locate = useLocation();
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }

  if (user) {
    return children;
  }
  return <Navigate state={locate.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;
