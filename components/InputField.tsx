import React from "react";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    className="bg-white bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 w-[240px] text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize-none mb-2"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
