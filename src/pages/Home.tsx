import React from "react";
import { useNavigate } from "react-router-dom";
import section from "../sections/home"
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="mx-2 mt-1">
      <section.Header />
      <section.Information />
      <section.Sponsor />
      <section.Feature />
      <section.Footer />
      <h2>Welcome to the Home Page!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
