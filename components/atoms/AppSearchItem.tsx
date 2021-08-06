import { ChangeEvent, FC } from 'react';
// icons
import { SearchIcon, XIcon } from '@heroicons/react/outline';

interface AppSearchItemProps {
  withSearch?: boolean;
  isSearch?: boolean;
  type?: string;
  title: string;
  placeholder: string;
  active: boolean;
  value: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onClear: () => void;
  onSearch?: () => void;
}

const AppSearchItem: FC<AppSearchItemProps> = ({
  withSearch,
  isSearch,
  type,
  title,
  placeholder,
  active,
  value,
  onChange,
  onFocus,
  onBlur,
  onClear,
  onSearch,
}) => {
  return (
    <button
      className={`flex items-center rounded-full hover:bg-gray-200 hover:bg-opacity-40 ${
        active && 'shadow-arround hover:bg-white'
      }`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className={`flex flex-col flex-grow ${
          withSearch && 'min-w-[120px]'
        } pl-7 pr-3 text-left`}
      >
        <span className="font-bold text-xs text-gray-500 tracking-wider">{title}</span>
        {type === 'inputText' ? (
          <input
            type="text"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className="w-full text-sm text-gray-500 placeholder-gray-300 bg-transparent outline-none"
          />
        ) : (
          <span className="text-sm text-gray-300">{value || placeholder}</span>
        )}
      </div>

      {/* clear icon */}
      <div
        className={`flex items-center h-8 ${!withSearch && 'border-r border-gray-200'}`}
      >
        <div
          role="button"
          tabIndex={0}
          className={`${
            active && value ? 'opacity-100' : 'opacity-0'
          } flex items-center pr-3`}
          onClick={onClear}
        >
          <XIcon className="h-6 p-1 bg-gray-200 bg-opacity-60 hover:bg-opacity-100 rounded-full" />
        </div>
      </div>

      {withSearch && (
        <div
          role="button"
          tabIndex={0}
          className={`flex items-center justify-center m-2 ml-0 px-3 h-12 ${
            isSearch ? 'w-auto' : 'w-12'
          } ${isSearch && 'saturate-200'} rounded-full bg-primary  hover:saturate-200`}
          onClick={onSearch}
        >
          <SearchIcon className="h-5 text-white" />
          <span
            className={`${
              isSearch ? 'inline-block' : 'hidden'
            } ml-2 font-medium text-white`}
          >
            Search
          </span>
        </div>
      )}
    </button>
  );
};

export default AppSearchItem;