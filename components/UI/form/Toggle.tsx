import { UseFormRegisterReturn } from "react-hook-form";
import { forwardRef } from "react";
import { Info } from "lucide-react";

type ToggleProps = {
  id: string;
  label: string;
  description?: string;
  disabled?: boolean;
} & UseFormRegisterReturn;

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ id, label, description, disabled, ...register }, ref) => {
    return (
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <label htmlFor={id} className="text-sm font-medium text-gray-900">
              {label}
            </label>
            <div className="group cursor-pointer z-20">
              <Info className="text-secondary" size={10} />
              {description && (
                <p className="hidden absolute top-0  bg-white border shadow-md rounded-md p-2 group-hover:block  text-xs text-gray-500">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            disabled={disabled}
            className="sr-only peer"
            {...register}
          />
          <div
            className={`w-11 h-6 bg-gray-200 rounded-full  ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            } peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
        </label>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
