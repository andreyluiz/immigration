import { Icon } from "@iconify/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("text-center p-4 rounded-md", {
	variants: {
		type: {
			success: "bg-accent/10 text-accent",
			error: "bg-red-50 text-red-500",
			info: "bg-blue-50 text-blue-500",
			warning: "bg-yellow-50 text-yellow-500",
		},
	},
	defaultVariants: {
		type: "info",
	},
});

interface AlertProps extends VariantProps<typeof alertVariants> {
	title: string;
	message?: string;
	action?: {
		label: string;
		onClick: () => void;
	};
	className?: string;
}

export function Alert({ type, title, message, action, className }: AlertProps) {
	const icons = {
		success: "mdi:check-circle",
		error: "mdi:alert-circle",
		info: "mdi:information",
		warning: "mdi:alert",
	};

	return (
		<div className={cn(alertVariants({ type, className }))}>
			<Icon icon={icons[type || "info"]} className="w-8 h-8 mx-auto mb-2" />
			<p className="font-medium">{title}</p>
			{message && <p className="text-sm mt-1">{message}</p>}
			{action && (
				<button
					type="button"
					onClick={action.onClick}
					className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
				>
					{action.label}
				</button>
			)}
		</div>
	);
}
