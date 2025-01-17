import React from 'react';
import "./button.css";

// Định nghĩa kiểu cho các props
interface ButtonRawProps {
  title: string;
  width: number; // Chiều rộng có thể là chuỗi hoặc số
  height: number; // Chiều cao có thể là chuỗi hoặc số
  className?: string
}

const DONVI = "px"
const HIGHLIGHT = "hightlight"
const DANGER = "danger"
const NEURAL = "neural"
const DISABLED = "disabled"

//Button raw
const ButtonRaw: React.FC<ButtonRawProps> = ({ title, width = 400, height = 40, className = "" }) => {
  return (
    <button
      type="button"
      className={`${className} buttonRaw`}
      style={{ width: width + DONVI, height: height + DONVI, borderRadius: height * 50 / 100 + DONVI }}
    >
      {title}
    </button>
  );
};

//Button variant template
const ButtonRawTemplate: React.FC<{ title: string; color: string; size: string; type: string; className: string }> = ({ title, color, size, type = "hightlight", className }) => {

  switch (type) {
    case "hightlight": {
      className = HIGHLIGHT
      break
    }
    case "danger": {
      className = DANGER
      break
    }

    case "neutral": {
      className = NEURAL
      color = "black"
      break
    }

    case "disabled": {
      className = DISABLED
      break
    }
    default: {
      className = HIGHLIGHT
      break
    }
  }
  if (size === "full") {
    return <ButtonRaw title={title} width={320} height={50} className={className} />;
  }
  else if (size === "large") {
    return <ButtonRaw title={title} width={160} height={50} className={className} />;
  }
  if (size === "medium") {
    return <ButtonRaw title={title} width={120} height={50} className={className} />;
  }
  if (size === "small") {
    return <ButtonRaw title={title} width={80} height={40} className={className} />;
  }
}

export { ButtonRawTemplate };
