import React from "react";

const Header: React.FC = () => {
    return (
        <div className="flex flex-row justify-between">
            <h2>Logo</h2>
            <div className="flex flex-row gap-5">
                <a className="font-thin text-gray-500" href="#">Feature</a>
                <a className="font-thin text-gray-500" href="#">Pricing</a>
                <a className="font-thin text-gray-500" href="#">About us</a>
                <a className="font-thin text-gray-500" href="#">Blog</a>
            </div>
            <div className="flex flex-row gap-5">
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 ">signIn</button>
                <button className="text-blue-500 rounded px-4 py-2">signUp</button>
            </div>
        </div>
    );
};

export default Header;