import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => (
  <div>
    <h1>Authentication</h1>
    <Outlet />
  </div>
);

export default AuthLayout;
