import React, { forwardRef } from "react";
import { Info, Search } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  isSearch?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, helperText, className, isSearch = true, ...props }, ref) => {
    return (
      <div className="w-full mb-5">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {isSearch ? (
            <Search
              size={18}
              className="absolute text-primary left-3 top-1/2 -translate-y-1/2"
            />
          ) : (
            ""
          )}

          <input
            placeholder="Search for Courses"
            ref={ref}
            className={`w-full ${
              isSearch ? "pl-10" : ""
            } rounded-md border p-4 text-sm hover:border-gold focus:outline-none  ${
              error
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 focus:border-gold focus:ring-gold"
            } ${className || ""} `}
            {...props}
          />
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Info className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {(helperText || error) && (
          <p
            className={`mt-1 text-xs ${
              error ? "text-red-600" : "text-gray-500"
            } `}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
