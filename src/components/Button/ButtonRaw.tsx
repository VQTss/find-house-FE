import React from 'react';

// Định nghĩa kiểu cho các props
interface ButtonRawProps {
  title: string;
  color?: string; // Màu sắc mặc định là 'black'
  width: string | number; // Chiều rộng có thể là chuỗi hoặc số
  height: string | number; // Chiều cao có thể là chuỗi hoặc số
  background?: string; // Màu nền tùy chọn
}

const ButtonRaw: React.FC<ButtonRawProps> = ({ title, color = "black", width = "400px", height = "40px", background = "" }) => {
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

export default ButtonRaw;
