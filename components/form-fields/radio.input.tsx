import React from 'react';

const RadioInput = () => {
  return (
    <div>
      <div>
        <input
          type="radio"
          name="hs-default-radio"
          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-default-radio"
        />
        <label
          htmlFor="hs-default-radio"
          className="text-sm text-gray-500 ms-2 dark:text-gray-400"
        >
          Default radio
        </label>
      </div>

      <div className="flex">
        <input
          type="radio"
          name="hs-default-radio"
          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-checked-radio"
          checked
        />
        <label
          htmlFor="hs-checked-radio"
          className="text-sm text-gray-500 ms-2 dark:text-gray-400"
        >
          Checked radio
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
