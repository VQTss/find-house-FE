import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonRawProps {
  title: string;
  color?: string; // Màu sắc mặc định là 'black'
  width: string | number; // Chiều rộng có thể là chuỗi hoặc số
  height: string | number; // Chiều cao có thể là chuỗi hoặc số
  background?: string; // Màu nền tùy chọn
}

const ButtonRaw: React.FC<ButtonRawProps> = ({ title, color = "black", width = "400px", height = "40px", background = "bg-gray-300" }) => {
  return (
    <button
      type="button"
      className={`hover:cursor-pointer mx-2 my-3 px-3 py-3 rounded-full text-center text-${color} ${background}`}
      style={{ width: width, height: height }}
    >
      {title}
    </button>
  );
};


// Các button variants
const ButtonRawFull: React.FC<{ title: string; color: string; background: string }> = ({ title, color, background }) => {
  return <ButtonRaw title={title} width={"320px"} height={"50px"} color={color} background={background} />;
};

const ButtonRawLarge: React.FC<{ title: string; color: string; background: string }> = ({ title, color, background }) => {
  return <ButtonRaw title={title} width={"160px"} height={"50px"} color={color} background={background} />;
};

const ButtonRawMedium: React.FC<{ title: string; color: string; background: string }> = ({ title, color, background }) => {
  return <ButtonRaw title={title} width={"120px"} height={"50px"} color={color} background={background} />;
};

const ButtonRawSmall: React.FC<{ title: string; color: string; background: string }> = ({ title, color, background }) => {
  return <ButtonRaw title={title} width={"80px"} height={"40px"} color={color} background={background} />;
};

//ham de chon button theo type 
const ButtonRawTemplate: React.FC<{ title: string; color: string; background: string; type: string }> = ({ title, color, background, type }) => {
  if (type === "full") {
    return <ButtonRawFull title={title} color={color} background={background} />
  }
  else if (type === "large") {
    return <ButtonRawLarge title={title} color={color} background={background} />
  }
  if (type === "medium") {
    return <ButtonRawMedium title={title} color={color} background={background} />
  }
  if (type === "small") {
    return <ButtonRawSmall title={title} color={color} background={background} />
  }
}

export default ButtonRawTemplate;
