import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ConcertsHome from "../pages/ConcertsHome";
import City from "../pages/City";
import Trending from "../pages/Trending";
import AuthLayout from "../components/auth/AuthLayout";
import PrivateRoute from "../components/auth/PrivateRoute";
import Test from "../pages/Test";

const AppRouter: React.FC = () => (
  <Routes>
    {/* Public Routes */}
    <Route index element={<Home />} />
    <Route path="about" element={<About />} >
        <Route path="test" element={<Test />} />
    </Route>

    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    {/* Private Routes */}
    <Route
      path="dashboard"
      element={
        // <PrivateRoute>
          <Dashboard />
        // </PrivateRoute>
      }
    />

    {/* Concerts Nested Routes */}
    <Route path="concerts">
      <Route index element={<ConcertsHome />} />
      <Route path=":city" element={<City />} />
      <Route path="trending" element={<Trending />} />
    </Route>

    {/* Fallback Route */}
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
);

export default AppRouter;
