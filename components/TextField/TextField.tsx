import React from "react";
import { FaSearch } from "react-icons/fa";

interface TextFieldTypes extends React.HTMLProps<HTMLInputElement> {
  label?: string | any;
  helperText?: string | React.ReactNode;
}

const TextField = ({
  label,
  helperText,
  className,
  ...props
}: TextFieldTypes) => {
  return (
    <div className="relative form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      {props.type === "search" && (
        <div className="absolute top-0 left-2 h-full flex items-center text-gray-300 w-fit">
          <FaSearch />
        </div>
      )}
      <input
        type="text"
        {...props}
        className={`input input-bordered w-full max-w-xs focus:outline-none placeholder:text-gray-300 ${
          props.type === "search" && "pl-8"
        } ${className}`}
      />
      {helperText && (
        <label className="label">
          <span className="label-text-alt">{helperText}</span>
        </label>
      )}
    </div>
  );
};

export default TextField;
