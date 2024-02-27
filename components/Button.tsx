import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-pink-500 bg-opacity-70 hover:bg-pink-500 w-[500px] px-4 py-2 text-white font-bold rounded hover:bg-pink-700 transition duration-300 mt-4"
  >
    {children}
  </button>
);

export default Button;
