import React from "react";

interface SelectFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  value,
  onChange,
  options,
}) => (
  <select
    className="bg-white bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 w-[240px] text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize-none mb-2"
    value={value}
    onChange={onChange}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectField;
