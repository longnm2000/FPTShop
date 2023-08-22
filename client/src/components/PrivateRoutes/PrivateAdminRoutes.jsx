import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateAdminRoutes() {
  return !!localStorage.getItem("admin_token") ? (
    <Outlet />
  ) : (
    <Navigate to={"/admin/login"} />
  );
}

export default PrivateAdminRoutes;
