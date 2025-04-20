import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

const logoVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "gap-1",
      default: "gap-2",
      lg: "gap-3",
    },
    variant: {
      default: "text-primary",
      white: "text-white",
      accent: "text-accent",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  title?: string;
  imageSize?: number;
  className?: string;
}

export function Logo({
  title = "European Immigration",
  imageSize = 40,
  className,
  size,
  variant,
}: LogoProps) {
  return (
    <div className={cn(logoVariants({ size, variant, className }))}>
      <Image src="/logo.webp" alt="Logo" width={imageSize} height={imageSize} />
      <span className="text-xl font-bold">{title}</span>
    </div>
  );
}
