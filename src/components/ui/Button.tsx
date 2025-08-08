import { Icon } from "@iconify/react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"px-4 py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				primary: "bg-primary text-white hover:bg-primary/90",
				secondary: "bg-secondary text-white hover:bg-secondary/90",
				accent: "bg-accent text-white hover:bg-accent/90",
			},
			size: {
				default: "h-10",
				sm: "h-8 px-3 text-sm",
				lg: "h-12 px-6",
			},
			fullWidth: {
				true: "w-full",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
			fullWidth: false,
		},
	},
);

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
	loadingText?: string;
	asChild?: boolean;
}

export function Button({
	children,
	variant,
	size,
	fullWidth,
	isLoading = false,
	loadingText = "Loading...",
	className = "",
	disabled,
	asChild,
	...props
}: ButtonProps) {
	const buttonContent = isLoading ? (
		<span className="flex items-center justify-center gap-2">
			<Icon icon="mdi:loading" className="animate-spin" />
			{loadingText}
		</span>
	) : (
		children
	);

	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(buttonVariants({ variant, size, fullWidth, className }))}
			disabled={disabled || isLoading}
			{...props}
		>
			{buttonContent}
		</Comp>
	);
}
