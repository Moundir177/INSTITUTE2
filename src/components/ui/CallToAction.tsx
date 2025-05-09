"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundClassName?: string;
  className?: string;
}

export function CallToAction({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundClassName = "bg-gradient-to-r from-ukblue to-ukblue/80",
  className,
}: CallToActionProps) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      <div className={`py-12 px-8 sm:px-12 ${backgroundClassName}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-silver-200 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              href={primaryButtonHref}
              className="bg-gold-500 hover:bg-gold-600 min-w-[160px]"
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="outline"
                href={secondaryButtonHref}
                className="border-white text-white hover:bg-white/10 min-w-[160px]"
              >
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 