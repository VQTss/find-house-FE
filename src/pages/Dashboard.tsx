import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
        <div className='flex gap-2'>
            <div className="w-64 bg-blue-500 h-screen flex flex-col gap-5">
                <div className="bg-white mx-auto my-5 rounded-full w-40 h-40 text-center"></div>
                <div className="flex flex-col gap-10 mx-5 text-lg text-white">
                    <div className="">
                        <i className="fa-solid fa-house "></i>
                        <Link to='/' className='mx-3 font-semibold'>Home</Link>
                    </div>
                    <div className="">
                    <i className="fa-solid fa-table-columns"></i>
                        <Link to='/dashboard' className='mx-3 font-semibold'>Dashboard</Link>
                    </div>
                    <div className="">
                    <i className="fa-regular fa-comments"></i>
                        <Link to='#' className='mx-3 font-semibold'>Messages</Link>
                    </div>
                    <div className="">
                    <i className="fa-solid fa-gear"></i>
                        <Link to='#' className='mx-3 font-semibold'>Settings</Link>
                    </div>



                </div>
            </div>
            <div className="content">
                <p>Dashboard content goes here</p>
            </div>
        </div>
    )
};

export default Dashboard;
