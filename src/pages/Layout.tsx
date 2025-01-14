import React from "react";
import { ButtonPrimaryFull, ButtonPrimaryLarge, ButtonPrimaryMedium, ButtonPrimarySmall } from "../components/Button";

const box = "border-2 bg-gray-300 border-black px-2 py-3 rounded-lg"
const title = "font-bold text-center"
const Layout: React.FC = () => {

    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimaryFull title={"Button"} />
                    <label>Full</label>
                    <br />
                    <ButtonPrimaryLarge title={"Button"} />
                    <label>Large</label>
                    <br />
                    <ButtonPrimaryMedium title={"Button"} />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimarySmall title={"Button"} />
                    <label>Small</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimaryFull title={"Button"} />
                    <label>Full</label>
                    <br />
                    <ButtonPrimaryLarge title={"Button"} />
                    <label>Large</label>
                    <br />
                    <ButtonPrimaryMedium title={"Button"} />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimarySmall title={"Button"} />
                    <label>Small</label>
                    <br />
                </div>
                <div className={box}>
                    <h1 className={title}>size</h1>
                    <ButtonPrimaryFull title={"Button"} />
                    <label>Full</label>
                    <br />
                    <ButtonPrimaryLarge title={"Button"} />
                    <label>Large</label>
                    <br />
                    <ButtonPrimaryMedium title={"Button"} />
                    <label>Medium</label>
                    <br />
                    <ButtonPrimarySmall title={"Button"} />
                    <label>Small</label>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default Layout;