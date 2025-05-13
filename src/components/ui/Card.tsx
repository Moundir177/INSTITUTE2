import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  footer?: React.ReactNode;
  variant?: "flat" | "elevated" | "bordered" | "gradient";
  className?: string;
  badge?: string;
  badgeColor?: "blue" | "gold" | "green" | "red" | "purple";
}

export const Card = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  href,
  footer,
  variant = "flat",
  className = "",
  badge,
  badgeColor = "blue",
}: CardProps) => {
  const badgeColors = {
    blue: "bg-blue-100 text-blue-800",
    gold: "bg-amber-100 text-amber-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    purple: "bg-purple-100 text-purple-800",
  };

  const variants = {
    flat: "bg-white dark:bg-dark-card",
    elevated: "bg-white dark:bg-dark-card shadow-md hover:shadow-lg transition-shadow duration-300",
    bordered: "bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border",
    gradient: "bg-gradient-to-br from-darkblue/90 to-darkblue-600 text-white",
  };

  const cardContent = (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl overflow-hidden ${variants[variant]} ${className}`}
    >
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          {badge && (
            <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${badgeColors[badgeColor]}`}>
              {badge}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${variant === "gradient" ? "text-white" : "text-gray-800 dark:text-dark-text-primary"}`}>
          {title}
        </h3>
        <p className={`mb-4 ${variant === "gradient" ? "text-white/90" : "text-gray-600 dark:text-dark-text-secondary"}`}>
          {description}
        </p>
        {footer && <div className="mt-auto">{footer}</div>}
        {href && !footer && (
          <div className={`flex items-center font-medium ${variant === "gradient" ? "text-white" : "text-darkblue"}`}>
            <span>Learn more</span>
            <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}; 