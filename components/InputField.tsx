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
    className="bg-white h-[30px] bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 font-normal border-2 border-white-600 rounded-lg focus:outline-none focus:border-red-500 resize-none"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
