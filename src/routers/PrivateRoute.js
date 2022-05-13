import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  localStorage.setItem("lastPath", location.pathname + location.search);

  return user.logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
