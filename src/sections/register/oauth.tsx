import React from "react";
import messageImd from "../../assets/img/Image 6.png"

const Oauth: React.FC = () => {
    return (
        <div className="flex flex-col items-center flex-grow py-10">
            <img src={messageImd} alt="message image" />
            <h1 className="font-bold text-3xl">Nice to see you !</h1>
            <div className="flex flex-col gap-5">
                <button className="px-8 py-3 w-80  text-red-500 border-2 border-red-500 rounded-full hover:bg-red-200 hover:text-white ">
                    <i className="fa-brands fa-google-plus-g mr-8 text-xl"></i>Sign up with Google
                </button>
                <button className="px-8 py-3 w-80  text-blue-500 border-2 border-blue-700 rounded-full hover:bg-blue-200 hover:text-white ">
                    <i className="fa-brands fa-facebook mr-8 text-xl"></i>Sign up with Facebook
                </button>
                <button className="px-8 py-3 w-80  text-black-500 border-2 border-black rounded-full hover:bg-black hover:text-white ">
                    <i className="fa-brands fa-microsoft mr-8 text-xl"></i>Sign up with Microsoft
                </button>
            </div>
        </div>
    );
};

export default Oauth;