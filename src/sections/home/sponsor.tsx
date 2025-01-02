import React from "react";
import infoImg from "../../assets/img/rb_3180.png"
const Sponsor: React.FC = () => {
    return (

        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-gray-500">Trusted by</h1>

            <div className="flex flex-row items-between">
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
            </div>
        </div>
    );
};

export default Sponsor;