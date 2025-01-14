import React from "react";
import { ButtonCustom } from "../components/Button/index";

const box = "border-2 bg-gray-300 border-black px-2 py-3 rounded-lg"
const title = "font-bold text-center"
const Layout: React.FC = () => {

    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className={box}>
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
                    <ButtonCustom title={"Button"} size="large" type="primary" />
                    <label>Primary</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="danger" />
                    <label>danger</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="disabled" />
                    <label>disabled</label>
                    <br />
                    <ButtonCustom title={"Button"} size="large" type="bg-green-500" color="red-500" />
                    <label>custom button</label>
                    <br />
                </div>
                <div className={box}>
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
            </div>
        </div>
    )
}

export default Layout;