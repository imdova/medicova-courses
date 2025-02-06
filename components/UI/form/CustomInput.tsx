import React, { forwardRef } from "react";
import { Info } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`w-full rounded-md border px-3 py-2 text-sm hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold ${
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
            className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500"} `}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
