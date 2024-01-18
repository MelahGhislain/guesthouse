'use client';

import React, { FC } from 'react';

type TextAreaInputProps = {
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  label?: string;
  rows?: number;
};

const TextAreaInput: FC<TextAreaInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  rows,
}) => {
  return (
    <span>
      {label && (
        <label className="block text-lg font-medium mb-2 dark:text-white">{label}</label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none text-gray-500"
        placeholder={placeholder}
        rows={rows ?? 3}
      />
    </span>
  );
};

export default TextAreaInput;
