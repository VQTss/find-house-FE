
import React from 'react'

const Button = ({ title }) => {
  return (
    <button className="px-8 py-3 mb-3 w-80  text-white bg-blue-400 rounded-full hover:bg-blue-800 ">
      {title}
    </button>
  )
}

export default Button