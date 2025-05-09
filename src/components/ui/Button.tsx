import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className,
  icon,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-ukblue text-white hover:bg-ukblue/90 focus:ring-ukblue/20 shadow-sm hover:shadow-md",
    secondary: "bg-ukred text-white hover:bg-ukred/90 focus:ring-ukred/20 shadow-sm hover:shadow-md",
    accent: "bg-gold-500 text-black hover:bg-gold-400 focus:ring-gold-300/40 shadow-sm hover:shadow-md",
    outline: "border-2 border-ukblue text-ukblue hover:bg-ukblue/10 focus:ring-ukblue/20",
    gradient: "bg-gradient-to-r from-ukblue via-ukblue to-ukred text-white hover:brightness-110 focus:ring-ukblue/20 shadow-md hover:shadow-lg",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 rounded",
    md: "text-sm px-4 py-2 rounded-md",
    lg: "text-base px-6 py-3 rounded-md",
  };

  const baseClasses = "font-semibold transition-all duration-300 focus:outline-none focus:ring-4 inline-flex items-center justify-center transform hover:-translate-y-0.5 active:translate-y-0";
  
  const classes = twMerge(
    clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? "w-full" : "",
      className
    )
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
} 