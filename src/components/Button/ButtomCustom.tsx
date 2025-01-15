import { ButtonRawTemplate, typeDefault } from "./ButtonRaw";
import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonCustomProps {
    title: string;
    color?: string;
    type?: string;
    size?: string; // optional prop
    option?: string;
}

// Component ButtonPrimaryRaw
const ButtonCustom: React.FC<ButtonCustomProps> = ({ title, color = "white", size = "full", type = typeDefault, option = "" }) => {
    return (
        <ButtonRawTemplate title={title} color={color} size={size} type={type} option={option} />
    );
}


export { ButtonCustom };
