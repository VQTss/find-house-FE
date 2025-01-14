import { message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentL from "../sections/Login/ContentL";
import ContentR from "../sections/Login/ContentR";
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values.username === "admin" && values.password === "password") {
        message.success("Login successful!");
        navigate('/')

      } else {
        message.error("Invalid credentials!");
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center ">
      <ContentL />
      <ContentR />
    </div>
  );
};

export default Login;
