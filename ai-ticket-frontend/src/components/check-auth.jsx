import React from "react";
import { Navigate } from "react-router-dom";

function CheckAuth({ children, protectedRoute }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (protectedRoute && !token) return <Navigate to="/login" replace />;
  if (!protectedRoute && token) return <Navigate to="/" replace />;
  
  return children;
}

export default CheckAuth;
