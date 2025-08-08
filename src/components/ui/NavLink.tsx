import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinkVariants = cva("transition-colors", {
	variants: {
		variant: {
			default: "text-foreground hover:text-primary",
			primary: "text-primary hover:text-primary/80",
			accent: "text-accent hover:text-accent/80",
		},
		active: {
			true: "font-medium",
		},
	},
	defaultVariants: {
		variant: "default",
		active: false,
	},
});

interface NavLinkProps extends VariantProps<typeof navLinkVariants> {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export function NavLink({
	href,
	children,
	className = "",
	variant,
	active,
}: NavLinkProps) {
	return (
		<Link
			href={href}
			className={cn(navLinkVariants({ variant, active, className }))}
		>
			{children}
		</Link>
	);
}
