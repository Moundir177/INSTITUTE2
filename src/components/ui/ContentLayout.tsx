"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  imagePosition?: "left" | "right";
  imageStyle?: "default" | "angled" | "rounded" | "circular";
  variation?: 1 | 2 | 3;
  className?: string;
}

export function ContentLayout({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Content image",
  children,
  imagePosition = "right",
  imageStyle = "default",
  variation = 1,
  className = "",
}: ContentLayoutProps) {
  // Define image style classes
  const imageStyleClasses = {
    default: "rounded-lg overflow-hidden",
    angled: "rounded-lg transform rotate-2 overflow-hidden shadow-xl",
    rounded: "rounded-2xl overflow-hidden shadow-lg",
    circular: "rounded-full overflow-hidden",
  };
  
  // For variation 1: Standard side-by-side content and image
  if (variation === 1) {
    return (
      <div className={`w-full ${className}`}>
        <div className={`grid grid-cols-1 ${imageSrc ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          <div className={imagePosition === "left" && imageSrc ? "lg:order-1" : ""}>
            <ScrollReveal>
              {subtitle && (
                <span className="text-sm font-medium text-ukblue uppercase tracking-wider mb-2 block">
                  {subtitle}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <div className="text-gray-600 mb-6 space-y-4">
                {typeof description === "string" ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
              {children}
            </ScrollReveal>
          </div>
          
          {imageSrc && (
            <div className={imagePosition === "left" ? "lg:order-0" : ""}>
              <ScrollReveal direction={imagePosition === "left" ? "left" : "right"}>
                <div className={imageStyleClasses[imageStyle]}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // For variation 2: Image with overlapping content box
  if (variation === 2 && imageSrc) {
    return (
      <div className={`w-full relative ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className={`lg:col-span-8 ${imagePosition === "left" ? "lg:order-1" : "lg:order-0"}`}>
            <ScrollReveal>
              <div className="relative">
                <div className={imageStyleClasses.rounded}>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className={`lg:col-span-6 ${
            imagePosition === "left" 
              ? "lg:order-0 lg:-mr-12" 
              : "lg:order-1 lg:-ml-12"
          } lg:z-10 self-center`}>
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                {subtitle && (
                  <span className="text-sm font-medium text-ukblue uppercase tracking-wider mb-2 block">
                    {subtitle}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
                <div className="text-gray-600 mb-6 space-y-4">
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )}
                </div>
                {children}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    );
  }
  
  // For variation 3: Content with background and image offset
  if (variation === 3) {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative">
          <div className="lg:w-2/3 bg-silver-50 rounded-2xl p-8 lg:p-12">
            <ScrollReveal>
              {subtitle && (
                <span className="text-sm font-medium text-ukblue uppercase tracking-wider mb-2 block">
                  {subtitle}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <div className="text-gray-600 mb-6 space-y-4">
                {typeof description === "string" ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
              {children}
            </ScrollReveal>
          </div>
          
          {imageSrc && (
            <div className={`hidden lg:block lg:absolute ${
              imagePosition === "left" 
                ? "left-0 -translate-x-1/3" 
                : "right-0 translate-x-1/3"
            } top-1/2 -translate-y-1/2 w-1/2`}>
              <ScrollReveal direction={imagePosition === "left" ? "left" : "right"}>
                <div className={`${imageStyleClasses.angled} ${
                  imagePosition === "right" ? "rotate-2" : "-rotate-2"
                }`}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Default fallback
  return (
    <div className={`w-full ${className}`}>
      <ScrollReveal>
        {subtitle && (
          <span className="text-sm font-medium text-ukblue uppercase tracking-wider mb-2 block">
            {subtitle}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <div className="text-gray-600 mb-6 space-y-4">
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            description
          )}
        </div>
        {children}
      </ScrollReveal>
    </div>
  );
} 