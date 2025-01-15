import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonRawProps {
  title: string;
  color?: string; // Màu sắc mặc định là 'black'
  width: string | number; // Chiều rộng có thể là chuỗi hoặc số
  height: string | number; // Chiều cao có thể là chuỗi hoặc số
  background?: string; // Màu nền tùy chọn
  option?: string
}

const ButtonRaw: React.FC<ButtonRawProps> = ({ title, color = "black", width = "400px", height = "40px", background = "bg-purple-600", option = "" }) => {
  return (
    <button
      type="button"
      className={`hover:cursor-pointer mx-2 my-3 px-3 py-3 rounded-full text-center text-${color} ${background} ${option}`}
      style={{ width: width, height: height }}
    >
      {title}
    </button>
  );
};

const typeDefault = "hightlight"
//ham de chon button theo type 
const ButtonRawTemplate: React.FC<{ title: string; color: string; size: string; type: string; option: string }> = ({ title, color, size, type = "hightlight", option }) => {
  let background
  switch (type) {
    case "hightlight": {
      background = "bg-purple-600"
      option = "hover:bg-purple-800 active:bg-purple-100 transition-all duration-300 ease-in-out"
      break
    }
    case "danger": {
      background = "bg-red-600 "
      option = "hover:bg-red-800 active:bg-red-100 transition-all duration-300 ease-in-out"
      break
    }

    case "neutral": {
      background = "bg-gray-500 "
      option = "hover:bg-gray-700 active:bg-gray-100 transition-all duration-300 ease-in-out"
      color = "black"
      break
    }

    case "disabled": {
      background = "bg-gray-400"
      color = "gray-600"
      break
    }
    default: {
      background = type && type.trim() !== "" ? type : "bg-purple-600"
      break
    }
  }
  if (size === "full") {
    return <ButtonRaw title={title} width={"320px"} height={"50px"} color={color} background={background} option={option} />;
  }
  else if (size === "large") {
    return <ButtonRaw title={title} width={"160px"} height={"50px"} color={color} background={background} option={option} />;
  }
  if (size === "medium") {
    return <ButtonRaw title={title} width={"120px"} height={"50px"} color={color} background={background} option={option} />;
  }
  if (size === "small") {
    return <ButtonRaw title={title} width={"80px"} height={"40px"} color={color} background={background} option={option} />;
  }
}

export { ButtonRawTemplate, typeDefault };
