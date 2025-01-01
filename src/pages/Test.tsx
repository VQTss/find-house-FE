import React from "react";
import { Outlet } from "react-router-dom";

const Test: React.FC = () => (
  <div>
    <h1>Test Page</h1>
    {/* Render nested routes */}
    <Outlet />
  </div>
);

export default Test;
