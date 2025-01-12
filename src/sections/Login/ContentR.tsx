import React, { useEffect, useState } from "react";
import backGroundRight1 from "../../assets/img/LoginContainer.png"
import backGroundRight2 from "../../assets/img/LoginContainer2.png"
import backGroundRight3 from "../../assets/img/LoginContainer3.png"
import backGroundRight4 from "../../assets/img/LoginContainer4.png"

const ContentR: React.FC = () => {
    const [checked, setChecked] = useState(1)
    const handleOnclick = (num) => {
        setChecked(num)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setChecked(checked => {
                if (checked <= 3) {
                    checked += 1
                    return checked
                }
                else return 1
            })
        }, 3000)
        return () => {
            clearTimeout(timeout);
        }
    }, [checked])

    return (
        <div className="flex flex-col">
            {checked === 1 && <img src={backGroundRight1} alt="background" />}
            {checked === 2 && <img src={backGroundRight2} alt="background" />}
            {checked === 3 && <img src={backGroundRight3} alt="background" />}
            {checked === 4 && <img src={backGroundRight4} alt="background" />}
            <div className="flex flex-row gap-2">
                <input type="radio" className="relative left-1/2 bottom-10 bg-red-500" name="option" checked={1 == checked} onClick={() => handleOnclick(1)} />
                <input type="radio" className="relative left-1/2 bottom-10 bg-red-500" name="option" checked={2 == checked} onClick={() => handleOnclick(2)} />
                <input type="radio" className="relative left-1/2 bottom-10 bg-red-500" name="option" checked={3 == checked} onClick={() => handleOnclick(3)} />
                <input type="radio" className="relative left-1/2 bottom-10 bg-red-500" name="option" checked={4 == checked} onClick={() => handleOnclick(4)} />
            </div>
        </div>
    );
};

export default ContentR;