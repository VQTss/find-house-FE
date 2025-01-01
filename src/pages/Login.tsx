import React, { useState } from "react";
import { Button, Input, Form, message, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../assets/img/rb_3180.png'
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-16 bg-white rounded-lg shadow-lg">
        <div className="flex gap-5">
          <h1 className="font-semibold text-[40px] uppercase">Welcome back</h1>
          <i className="fa-solid fa-hands-clapping text-[40px]"></i>
        </div>
        <p className='text-[20px] text-gray-400'>Log in your account</p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <div className="flex justify-between">
            <Checkbox>
              Remember me
            </Checkbox>
            <Link to='#' className='text-blue-500'>Forgot password ?</Link>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-5 font-semibold bg-blue-500 text-white mt-3"
            loading={loading}
          >
            Login
          </Button>
          <div className="">
            <p className="text-center mt-5">Don't have an account? <Link to="/login" className="text-blue-500">Sign up here</Link></p>
          </div>

        </Form>
      </div>
      <div className="w-[500px]">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
