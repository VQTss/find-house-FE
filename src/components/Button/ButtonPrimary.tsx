import ButtonRaw from "./ButtonRaw";
import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonProps {
    title: string;
    color?: string;
    width?: string; // optional prop
    height?: string; // optional prop
    background?: string; // optional prop
}

// Component ButtonPrimaryRaw
const ButtonPrimaryRaw: React.FC<ButtonProps> = ({ title, color = "white", width = "400px", height = "40px", background = "bg-gradient-to-r from-purple-400 to-purple-800" }) => {
    return (
        <ButtonRaw title={title} color={color} width={width} height={height} background={background} />
    );
}

// Các button variants
const ButtonPrimaryFull: React.FC<{ title: string; color: string }> = ({ title, color }) => {
    return <ButtonPrimaryRaw title={title} width={"320px"} height={"50px"} color={color} />;
};

const ButtonPrimaryLarge: React.FC<{ title: string; color: string }> = ({ title, color }) => {
    return <ButtonPrimaryRaw title={title} width={"160px"} height={"60px"} color={color} />;
};

const ButtonPrimaryMedium: React.FC<{ title: string; color: string }> = ({ title, color }) => {
    return <ButtonPrimaryRaw title={title} width={"120px"} height={"50px"} color={color} />;
};

const ButtonPrimarySmall: React.FC<{ title: string; color: string }> = ({ title, color }) => {
    return <ButtonPrimaryRaw title={title} width={"80px"} height={"40px"} color={color} />;
};

export { ButtonPrimaryFull, ButtonPrimaryLarge, ButtonPrimaryMedium, ButtonPrimarySmall };
