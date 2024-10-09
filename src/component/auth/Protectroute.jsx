import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protectroute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default Protectroute;

//created auth folder inside the component and create the protected route file
//in this added the user children and redirect
//is user is not login it redirect to login else children
