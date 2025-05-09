import React from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "bordered" | "elevated" | "accent" | "glass";
  badge?: string;
}

export function Card({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  href,
  className,
  children,
  footer,
  variant = "default",
  badge
}: CardProps) {
  const variantClasses = {
    default: "bg-white",
    bordered: "bg-white border-2 border-silver-200 hover:border-ukblue/30",
    elevated: "bg-white shadow-md hover:shadow-xl transition-shadow",
    accent: "bg-white border-t-4 border-t-ukblue shadow-md hover:shadow-lg",
    glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg"
  };

  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-ukblue text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
              {badge}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
        {children}
      </div>
      {footer && <div className="px-5 py-3 bg-gray-50 border-t border-silver-200">{footer}</div>}
    </>
  );

  const classes = twMerge(
    clsx(
      "rounded-lg overflow-hidden transition-all duration-300",
      variantClasses[variant],
      href && "hover:scale-[1.02] hover:translate-y-[-4px]",
      className
    )
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {cardContent}
      </Link>
    );
  }

  return <div className={classes}>{cardContent}</div>;
} 