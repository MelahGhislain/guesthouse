'use client';

import React, { FC } from 'react';

type TextInputProps = {
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
};

const TextInput: FC<TextInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  type,
}) => {
  return (
    <span>
      {label && (
        <label className="block text-lg font-medium mb-2 dark:text-white">{label}</label>
      )}
      <input
        type={type ?? 'text'}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-500"
        placeholder={placeholder}
      />
    </span>
  );
};

export default TextInput;
