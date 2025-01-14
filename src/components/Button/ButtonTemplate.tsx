import ButtonRawTemplate from "./ButtonRaw";
import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonProps {
    title: string;
    color?: string;
    type?: string;
    background?: string; // optional prop
}

// Component ButtonPrimaryRaw
const ButtonPrimary: React.FC<ButtonProps> = ({ title, color = "white", background = "bg-gradient-to-r from-purple-400 to-purple-800", type = "full" }) => {
    return (
        <ButtonRawTemplate title={title} color={color} background={background} type={type} />
    );
}


export { ButtonPrimary };
