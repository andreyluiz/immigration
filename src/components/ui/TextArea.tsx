import * as Form from "@radix-ui/react-form";
import { cva, type VariantProps } from "class-variance-authority";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
	"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]",
	{
		variants: {
			inputSize: {
				default: "min-h-[120px]",
				sm: "min-h-[80px] text-sm",
				lg: "min-h-[160px]",
			},
			error: {
				true: "border-red-500 focus:ring-red-500/50",
			},
		},
		defaultVariants: {
			inputSize: "default",
			error: false,
		},
	},
);

interface TextAreaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
	label: string;
	error?: string;
	required?: boolean;
	name: string;
	formField?: boolean;
	size?: VariantProps<typeof textareaVariants>["inputSize"];
}

export function TextArea({
	label,
	error,
	required = false,
	className = "",
	name,
	formField = false,
	size,
	...props
}: TextAreaProps) {
	const textareaElement = (
		<textarea
			className={cn(
				textareaVariants({ inputSize: size, error: !!error, className }),
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
				<Form.Control asChild>{textareaElement}</Form.Control>
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
			{textareaElement}
		</div>
	);
}
