import React from "react";
import { ButtonPrimary } from "../components/Button";

const box = "border-2 bg-gray-300 border-black px-2 py-3 rounded-lg"
const title = "font-bold text-center"
const Layout: React.FC = () => {

    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimary title={"Button"} type="full" />
                    <label>Full</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="large" />
                    <label>Large</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="medium" />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="small" />
                    <label>Small</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimary title={"Button"} type="full" />
                    <label>Full</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="large" />
                    <label>Large</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="medium" />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="small" />
                    <label>Small</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimary title={"Button"} type="full" />
                    <label>Full</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="large" />
                    <label>Large</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="medium" />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimary title={"Button"} type="small" />
                    <label>Small</label>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default Layout;