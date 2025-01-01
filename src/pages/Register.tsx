import React from "react";
import { Button, Form, Input, Checkbox } from 'antd';
import { Link } from "react-router-dom";

const Register: React.FC = () => {

    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center gap-20">
            <div className="bg-white p-16 rounded-xl shadow-lg">
                <h2 className="text-[24px] font-semibold mb-8 uppercase">Begin your journey</h2>
                <Form
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <div className="flex gap-5">
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            className="font-semibold w-full"
                            rules={[{ required: true, message: "Please enter your first name!" }]}
                        >
                            <Input placeholder="Enter your first name" />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            label="Last Name"
                            className="font-semibold w-full"
                            rules={[{ required: true, message: "Please enter your last name!" }]}
                        >
                            <Input placeholder="Enter your last name" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="email"
                        label="Email"
                        className="font-semibold"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Please enter a valid email address!"
                            },
                        ]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        className="font-semibold"
                        rules={[
                            { required: true, message: "Please enter your password!" },
                            { min: 6, message: "Password must be at least 6 characters!" },
                        ]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item name="agreement" valuePropName="checked">
                        <Checkbox>
                            By signing up, I agree with the <a href="#">Terms of Use & Privacy Policy</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full py-5 font-semibold bg-blue-500 text-white"
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div className="flex gap-5 justify-center items-center">
                    <i className="fa-brands fa-facebook text-[18px] text-blue-500"></i>
                    <i className="fa-brands fa-google text-[18px] text-red-500"></i>
                    <i className="fa-brands fa-apple text-[20px]"></i>
                </div>
                <div className="">
                    <p className="text-center mt-5">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold text-[40px] uppercase">Come join us</h1>
                <div className="w-[500px] mt-10">
                    <div className="flex items-center gap-3 my-3">
                        <i className="fa-solid fa-stopwatch text-4xl text-green-500"></i>
                        <p className="m-0">
                            Learn at your own pace and access educational resources anytime
                        </p>
                    </div>
                    <div className="flex items-center gap-3 my-8">
                        <i className="fa-solid fa-cloud text-4xl text-indigo-500"></i>
                        <p className="m-0">
                            Explore articles, tutorials, and guides on diverse subjects
                        </p>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                        <i className="fa-solid fa-earth-oceania text-4xl text-red-500"></i>
                        <p className="m-0">
                            Engage with a community of learners and share insights
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Register;
