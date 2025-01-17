import { ButtonRawTemplate } from "./ButtonRaw";
import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonCustomProps {
    title: string;// title of button
    color?: string;// text - color
    type?: string;// hightlight || danger || neural || disabled
    size?: string; // full | large || medium || small
    className?: string;// add custom css in this prop
}

// Component ButtonPrimaryRaw
const ButtonCustom: React.FC<ButtonCustomProps> = ({ title, color = "white", size = "full", type = "hightlight", className = "" }) => {
    return (
        <ButtonRawTemplate title={title} color={color} size={size} type={type} className={className} />
    );
}


export { ButtonCustom };
