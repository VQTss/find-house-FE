
import React from 'react'
import "./input.css"

interface InputRawProps {
    title: string;
    type?: string;
    placeholder?: string;
    className?: string;
}
const InputRaw: React.FC<InputRawProps> = ({ title, type, placeholder, className }) => {
    return (
        <div className='container'>
            <label >{title}</label>
            <input className={`inputRaw ${className}`} placeholder={placeholder} type={type} />
        </div>
    )
}

export default InputRaw