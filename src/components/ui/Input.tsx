import { cn } from "@/lib/utils";
import * as Form from "@radix-ui/react-form";
import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const inputVariants = cva(
  "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50",
  {
    variants: {
      inputSize: {
        default: "h-10",
        sm: "h-8 px-2 text-sm",
        lg: "h-12 px-4",
      },
      error: {
        true: "border-red-500 focus:ring-red-500/50",
      },
    },
    defaultVariants: {
      inputSize: "default",
      error: false,
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  error?: string;
  required?: boolean;
  name: string;
  formField?: boolean;
  size?: VariantProps<typeof inputVariants>["inputSize"];
}

export function Input({
  label,
  error,
  required = false,
  className = "",
  name,
  formField = false,
  size,
  ...props
}: InputProps) {
  const inputElement = (
    <input
      className={cn(
        inputVariants({ inputSize: size, error: !!error, className })
      )}
      required={required}
      name={name}
      {...props}
    />
  );

  if (formField) {
    return (
      <Form.Field name={name} className="space-y-2">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-sm font-medium">{label}</Form.Label>
          {error && (
            <Form.Message className="text-xs text-red-500">
              {error}
            </Form.Message>
          )}
        </div>
        <Form.Control asChild>{inputElement}</Form.Control>
      </Form.Field>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      {inputElement}
    </div>
  );
}
