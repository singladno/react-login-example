import React, { useContext } from "react";
import { AuthContext } from "@/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute: React.FC = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <>{children}</> : <Navigate to="/login" />;
};
