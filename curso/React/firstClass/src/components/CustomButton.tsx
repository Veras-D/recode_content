import React, { useState } from 'react';

interface CustomButtonProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const sayHallo = (event: React.MouseEvent<HTMLButtonElement>): void => {
  alert('Hallo!');
  console.log("Event:", event);
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Click Me!",
  bgColor = "blue",
  textColor = "white",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const customBorder: React.CSSProperties = {
    backgroundColor: isHovered ? 'darkblue' : bgColor,
    color: textColor,
    border: 'none',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button 
      style={customBorder}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={sayHallo}
    >
      {text}
    </button>
  )
};

export default CustomButton;
