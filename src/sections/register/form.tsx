
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button.tsx";

const Form: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }
    return (
        <div className="flex flex-col items-center flex-grow">
            <form className="flex flex-col">
                <label className="text-lg font-bold">Sign up with your email</label>
                <br />
                <input type="text" placeholder="email@gmail.com" className="bg-gray-300 placeholder-gray-500 text-black px-8 py-3 mb-3 w-80 rounded-full" />
                <p className="text-sm text-gray-600 ">
                    By continuing, you agree to our
                    <a href="#" className="text-blue-500 font-bold hover:underline cursor-pointer"> Terms & Conditions </a>
                    <br />
                    and
                    <a href="#" className="text-blue-500 font-bold hover:underline cursor-pointer"> Privacy Policy </a>
                </p>
                <Button title="Continue" />
                <p className="self-center text-gray-600 text-sm">Existing member? <a className="hover:underline cursor-pointer text-blue-400 font-bold" onClick={() => handleClick()}>Sign in</a></p>
            </form>
        </div>
    );
};

export default Form;