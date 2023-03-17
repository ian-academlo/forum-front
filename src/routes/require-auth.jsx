import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default RequireAuth;
