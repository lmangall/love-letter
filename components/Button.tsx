import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="flex bg-pink-500 bg-opacity-70 hover:bg-pink-500 px-4 py-2 w-full text-white font-bold rounded hover:bg-pink-600 transition duration-150 m-4"
  >
    {children}
  </button>
);

export default Button;
