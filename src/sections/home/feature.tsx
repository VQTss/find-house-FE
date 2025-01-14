import React from "react";
import infoImg from "../../assets/img/rb_3180.png"
const Feature: React.FC = () => {
    return (

        <div className="flex flex-col items-between gap-20 mt-20">

            <div className="flex flex-row justify-around">
                <div className="max-w-[20rem]">
                    <h1 className="text-xl font-bold">Feature</h1>
                    <p className="text-gray-500">Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.</p>
                    <div>
                        <button className="rounded-full py-2 px-4 bg-blue-500 text-white">Try it</button>
                        <button className="rounded-full py-2 px-4  text-blue-500">learn more</button>
                    </div>
                </div>
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
            </div>
            <div className="flex flex-row justify-around">
                <img className="w-auto h-[10rem]" src={infoImg} alt="" />
                <div className="max-w-[20rem]">
                    <h1 className="text-xl font-bold">Feature</h1>
                    <p className="text-gray-500">Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.</p>
                    <div>
                        <button className="rounded-full py-2 px-4 bg-blue-500 text-white">Try it</button>
                        <button className="rounded-full py-2 px-4  text-blue-500">learn more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature;