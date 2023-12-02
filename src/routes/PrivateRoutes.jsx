import React, { useContext } from "react";
import { mainContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(mainContext);

  const location = useLocation();
  if (loading) {
    return <p>Loading______________________________</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname} />;
};

export default PrivateRoutes;
