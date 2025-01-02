import React from "react";
import infoImg from "../../assets/img/rb_3180.png";
const Information: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl">Website heading goes here</h1>
            <p className="text-gray-500">Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.</p>
            <div className="flex flex-row gap-5">
                <button className="w-[7rem] h-[3rem] bg-blue-500 text-white rounded-full"> Join us now</button>
                <button className="w-[7rem] h-[3rem] border   border-blue-500 text-blue rounded-full"> Request</button>
            </div>
            <img className="w-auto h-[30rem]" src={infoImg} alt="" />
        </div>
    );
};

export default Information;