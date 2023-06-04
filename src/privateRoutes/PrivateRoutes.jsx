import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
