import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius, width, bgHoverColor}) => {
  return (
    <button 
      type="button" 
      style={{ backgroundColor: bgColor, color, borderRadius }} 
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}

    >
      { text }
    </button>
  )
}

export default Button