import * as React from "react";

import clsx from "clsx";
import { cn } from "@/utils/cn";
import { CheckIcon } from "@radix-ui/react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassNames?: string;

  labelClassName?: string;
  hasError?: boolean;
  isValid?: boolean;
  withIconBefore?: boolean;
  withIconAfter?: boolean;
  IconBefore?: React.ElementType;
  IconAfter?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      hasError,
      isValid,
      withIconBefore,
      withIconAfter,
      IconBefore,
      IconAfter,
      containerClassNames,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative w-full", containerClassNames)}>
        <div className="relative">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex gap-2">
            {withIconBefore && IconBefore && (
              <IconBefore className="text-gray-500 " />
            )}
          </div>
          <input
            id={`${props.id}-input`}
            placeholder=" "
            className={clsx(
              "default-input peer block rounded w-full border-2 border-gray-400 shadow-sm sm:text-sm p-4 h-12",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "focus:border-blue-500 focus:outline-none",
              { "!pl-10": withIconBefore },
              { "border-error focus:border-error": hasError }
            )}
            ref={ref}
            {...props}
          />
          <label
            id={`${props.id}-label`}
            htmlFor={`${props.id}-input`}
            className={cn(
              clsx(
                "absolute top-1/2 -translate-y-1/2  left-4",
                "block transition-all duration-300 ease-out text-gray-500 px-2",
                "pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-9 peer-focus:bg-white",
                {
                  " -translate-y-9 bg-white": isValid || hasError,
                },
                { "text-error peer-focus:text-error": hasError },
                { "left-10": withIconBefore }
              ),
              labelClassName
            )}
          >
            {label}
          </label>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2">
            {!withIconAfter && isValid && (
              <CheckIcon className="text-green-600 w-5 h-6" />
            )}
            {withIconAfter && IconAfter && IconAfter}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
