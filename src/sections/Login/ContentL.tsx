import React from "react";
import Button from "../../components/Button.tsx";
import Input from "../../components/input/InputRaw.tsx";

const ContentL: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center flex-grow py-10">
            <h1 className="text-2xl font-bold">Hello Again!</h1>
            <p className="text-gray-500 text-sm">Enter your credentials to access your account</p>
            <div className="flex flex-row gap-10">
                <button className="px-2 py-1 w-16 text-red-500 border-2 border-red-500 rounded-full bg-red-100 hover:bg-red-300 hover:text-white">
                    <i className="fa-brands fa-google-plus-g text-xl"></i>
                </button>
                <button className="px-2 py-1 w-16 text-blue-500 border-2 border-blue-700 rounded-full bg-blue-100 hover:bg-blue-300 hover:text-white ">
                    <i className="fa-brands fa-facebook text-xl"></i>
                </button>
                <button className="px-2 py-1 w-16 text-black-500 border-2 border-black rounded-full hover:bg-black hover:text-white">
                    <i className="fa-brands fa-microsoft text-xl"></i>
                </button>
            </div>
            <FormLogin />
        </div>
    );
};

const FormLogin: React.FC = () => {
    return (
        <form className="flex flex-col items-center">
            <div className="self-start mt-4 flex flex-row w-full justify-between">
                <div>
                    <input type="checkbox" />
                    <label className="ml-2 text-sm">keep me logged in</label>
                </div>
                <a className="self-end text-sm text-blue-500 cursor-pointer hover:underline mb-3">Forgot password?</a>
            </div>
            <Button title="Login" />
        </form>
    )
}
export default ContentL;