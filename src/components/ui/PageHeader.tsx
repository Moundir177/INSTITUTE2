"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShinyText } from "./ShinyText";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundPattern?: "dots" | "grid" | "waves" | "circles" | "none";
  centered?: boolean;
  size?: "sm" | "md" | "lg";
  titleGradient?: "royal" | "gold" | "silver" | "none";
  className?: string;
}

export function PageHeader({
  title,
  description,
  backgroundPattern = "dots",
  centered = true,
  size = "md",
  titleGradient = "royal",
  className = "",
}: PageHeaderProps) {
  // Size classes
  const sizeClasses = {
    sm: {
      container: "py-8",
      title: "text-2xl",
      description: "text-sm max-w-xl",
    },
    md: {
      container: "py-12",
      title: "text-3xl",
      description: "text-base max-w-2xl",
    },
    lg: {
      container: "py-16",
      title: "text-4xl",
      description: "text-lg max-w-3xl",
    },
  };

  // Background pattern classes
  const patternClasses = {
    dots: "bg-silver-100 bg-[radial-gradient(#00247D11_1px,transparent_1px)] [background-size:20px_20px]",
    grid: "bg-silver-100 bg-[linear-gradient(to_right,#00247D10_1px,transparent_1px),linear-gradient(to_bottom,#00247D10_1px,transparent_1px)] [background-size:20px_20px]",
    waves: "bg-silver-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMjQ3RDEwIj48cGF0aCBkPSJNMTI4MCAxNDBWMFM5OTMuNDYgMTQwIDY0MCAxMzkgMCAwIDAgMHYxNDB6Ii8+PC9nPjwvc3ZnPg==')]",
    circles: "bg-silver-100 bg-[radial-gradient(circle_at_center,#00247D10_0,#00247D05_40%,transparent_60%)]",
    none: "bg-silver-100",
  };

  return (
    <header 
      className={`relative overflow-hidden ${patternClasses[backgroundPattern]} ${sizeClasses[size].container} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`${centered ? 'text-center mx-auto' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {titleGradient !== "none" ? (
              <ShinyText
                text={title}
                tagName="h1"
                size={sizeClasses[size].title.replace("text-", "") as any}
                gradient={titleGradient}
                className="mb-4"
              />
            ) : (
              <h1 className={`font-bold ${sizeClasses[size].title} text-gray-900 mb-4`}>
                {title}
              </h1>
            )}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-gray-600 ${sizeClasses[size].description} ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </header>
  );
} 