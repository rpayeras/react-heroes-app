import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import PropTypes from "prop-types";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return !user.logged ? children : <Navigate to="/marvel" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
