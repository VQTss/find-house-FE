
import React from 'react'

const Input = ({ title, type, placeholder }) => {
    return (
        <div className="flex flex-col">
            <label className="relative left-3 top-7 font-bold">{title}</label>
            <input type={type} placeholder={placeholder} className="placeholder-gray-400 px-3 pt-8 pb-2 w-80 rounded-lg bg-gray-200" />
        </div>
    )
}

export default Input