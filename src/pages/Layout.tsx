import React from "react";
import { ButtonCustom } from "../components/button/index";
import InputRaw from "../components/input/InputRaw";

const box = "border-2 bg-gray-300 border-black px-2 py-3 rounded-lg"
const title = "font-bold text-center"
const row = "flex flex-row justify-between my-3"
const Layout: React.FC = () => {

    return (
        <div>
            <div className={row}>
                <div className={box}>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-t-0 border-black rounded-full"></span>
                    <h1 className={title}>size</h1>
                    <ButtonCustom title={"Button"} size="full" />
                    <label>Full</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" />
                    <label>Large</label>
                    <br />
                    <ButtonCustom title={"Button"} size="medium" />
                    <label>Medium</label>
                    <br />
                    <ButtonCustom title={"Button"} size="small" />
                    <label>Small</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>Type</h1>
                    <ButtonCustom title={"Button"} size="large" type="hightlight" />
                    <label>Primary</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="danger" />
                    <label>danger</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="neutral" />
                    <label>neural</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="disabled" />
                    <label>disabled</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>State</h1>
                    <ButtonCustom title={"Button"} size="large" type="hightlight" />
                    <label>Default</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="custom" className="bg-purple-800" />
                    <label>Hover</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="custom" className="bg-purple-100" />
                    <label>Clicked</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="disabled" />
                    <label>disabled</label>
                    <br />
                </div>
            </div>
            <div className={row}>
                <div className={box}>
                    <InputRaw title="input" />
                </div>
            </div>
        </div>
    )
}

export default Layout;