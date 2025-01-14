import ButtonRawTemplate from "./ButtonRaw";
import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonCustomProps {
    title: string;
    color?: string;
    type?: string;
    size?: string; // optional prop
}

// Component ButtonPrimaryRaw
const ButtonCustom: React.FC<ButtonCustomProps> = ({ title, color = "white", size = "full", type = "primary" }) => {
    return (
        <ButtonRawTemplate title={title} color={color} size={size} type={type} />
    );
}


export { ButtonCustom };
