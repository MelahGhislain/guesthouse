'use client';

import React, { FC } from 'react';
type SelectInputProps = {
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  list?: string[];
  label?: string;
};

const SelectInput: FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  list,
}) => {
  return (
    <span>
      {label && (
        <label className="block text-lg font-medium mb-2 dark:text-white">{label}</label>
      )}
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        id="hs-select-label"
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-500"
      >
        <option selected></option>
        {list?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </span>
  );
};

export default SelectInput;
