import React from 'react'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps>= ({label, onClick}) => {
  return (
    <button className='bg-blue-600 rounded-lg px-3 py-2 gap-3'
     onClick={onClick}>{label}</button>
  )
}

export default Button