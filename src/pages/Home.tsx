import React from "react";
import { useNavigate } from "react-router-dom";
import Section_1 from "../sections/home/Section_1"; '../sections/home/Section_1'
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <Section_1 />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
