import React from "react";

import leftImg from "../assets/img/Container 1.png";
import Oauth from "../sections/register/oauth";
import Form from "../sections/register/form"
const Register: React.FC = () => {

    return (
        <div className="flex flex-row m-0">
            <div className="h-window overflow-hidden hidden xl:block">
                <img className="w-full h-full object-cover" src={leftImg} alt="background" />
            </div>
            <div className="flex-grow gap-1">
                <Oauth />
                <div className="flex-row gap-5 flex justify-center">
                    <span className="border-t-2 border-gray-500 w-32 inline-block"></span>
                    <p className="border-gray-500 inline relative top-[-10px]">or</p>
                    <span className="border-t-2 border-gray-500 w-32 inline-block"></span>
                </div>
                <Form />
            </div>

        </div>
    )
};



export default Register;
