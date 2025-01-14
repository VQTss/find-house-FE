import React from "react";
import infoImg from "../../assets/img/rb_3180.png"
const Footer: React.FC = () => {
    return (

        <div className="flex flex-col items-around gap-20 mt-20">
            <div className="flex items-start flex-row justify-around">
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <div>
                    <h1 className="font-bold">Product</h1>
                    <p className="text-gray-500 mb-1"> Feature</p>
                    <p className="text-gray-500 mb-1"> Feature</p>

                </div>
                <div>
                    <h1 className="font-bold">Resource</h1>
                    <p className="text-gray-500 mb-1"> Feature</p>
                    <p className="text-gray-500 mb-1"> Feature</p>
                    <p className="text-gray-500 mb-1"> Feature</p>
                    <p className="text-gray-500 mb-1"> Feature</p>
                </div>
                <div>
                    <h1 className="font-bold">Company</h1>
                    <p className="text-gray-500 mb-1"> Feature</p>
                    <p className="text-gray-500 mb-1"> Feature</p>
                </div>
                <div>
                    <h1 className="font-bold text-blue-500"> Subcribe to our newsletetter</h1>
                    <p className="text-gray-500 mb-1"> whatever something</p>
                    <div className="flex flex-row">
                        <input className="pl-2 border border-blue-500 rounded placeholder:text-sm h-8 w-64" placeholder="input ypur email" type="text" />
                        <span className=" rounded flex bg-blue-500 text-white h-8 px-4 text-center items-center justify-center"> subcribe </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;