import * as React from "react";

import clsx from "clsx";
import { cn } from "@/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassNames?: string;
  labelClassName?: string;
  hasError?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      hasError,
      labelClassName,
      containerClassNames,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative w-full", containerClassNames)}>
        <div className="relative">
          <textarea
            id={`${props.id}-textarea`}
            placeholder=" "
            className={clsx(
              "default-input peer block rounded w-full border-2 border-gray-400 shadow-sm sm:text-sm p-4 ",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "focus:border-main focus:outline-none",

              { "border-error focus:border-error": hasError }
            )}
            ref={ref}
            {...props}
          />
          <label
            id={`${props.id}-label`}
            htmlFor={`${props.id}-textarea`}
            className={cn(
              clsx(
                "absolute top-6 -translate-y-1/2 left-4",
                "block transition-all duration-300 ease-out text-gray-500 px-2",
                "pointer-events-none peer-focus:text-main peer-focus:-translate-y-9 peer-focus:bg-white",
                { "text-error peer-focus:text-error": hasError }
              ),
              labelClassName
            )}
          >
            {label}
          </label>
        </div>
      </div>
    );
  }
);

TextArea.displayName = "Textarea";

export { TextArea };
