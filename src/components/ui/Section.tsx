"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'light' | 'dark' | 'gradient' | 'white';
  pattern?: boolean;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  background = 'white',
  pattern = false,
  className = '',
  id,
}) => {
  const { isRTL } = useTheme();
  
  const getBackgroundClasses = () => {
    switch (background) {
      case 'light':
        return 'bg-brand-blue-50 dark:bg-dark-card';
      case 'dark':
        return 'bg-darkblue text-white dark:bg-dark-background';
      case 'gradient':
        return 'bg-gradient-to-r from-darkblue to-brand-blue-600 text-white dark:from-dark-primary dark:to-darkblue';
      default:
        return 'bg-white dark:bg-dark-background';
    }
  };
  
  return (
    <section 
      id={id}
      className={`py-16 md:py-20 relative overflow-hidden ${getBackgroundClasses()} ${className}`}
    >
      {/* Optional Pattern Background */}
      {pattern && (
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/images/pattern.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 100px',
          }}
        />
      )}
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  background === 'dark' || background === 'gradient' ? 'text-white' : 'text-gray-800 dark:text-dark-text-primary'
                } ${isRTL ? 'rtl' : ''}`}
              >
                {title}
              </motion.h2>
            )}
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-xl max-w-3xl mx-auto ${
                  background === 'dark' || background === 'gradient' 
                    ? 'text-white/80' 
                    : 'text-gray-600 dark:text-dark-text-secondary'
                } ${isRTL ? 'rtl' : ''}`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        {/* Section Content */}
        <div className={isRTL ? 'rtl' : ''}>
          {children}
        </div>
      </div>
    </section>
  );
}; 