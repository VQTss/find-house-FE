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
const ButtonRawTemplate: React.FC<{ title: string; color: string; size: string; type: string }> = ({ title, color, size, type }) => {
  let background
  switch (type) {
    case "primary": {
      background = "bg-gradient-to-r from-purple-400 to-purple-800"
      break
    }
    case "danger": {
      background = "bg-gradient-to-r from-red-600 to-red-800"
      break
    }
    case "disabled": {
      background = "bg-gray-400"
      color = "gray-600"
      break
    }
    default: {
      background = type && type.trim() !== "" ? type : "bg-gray-300"
      break
    }
  }
  console.log(background)
  if (size === "full") {
    return <ButtonRawFull title={title} color={color} background={background} />
  }
  else if (size === "large") {
    return <ButtonRawLarge title={title} color={color} background={background} />
  }
  if (size === "medium") {
    return <ButtonRawMedium title={title} color={color} background={background} />
  }
  if (size === "small") {
    return <ButtonRawSmall title={title} color={color} background={background} />
  }
}

export default ButtonRawTemplate;
