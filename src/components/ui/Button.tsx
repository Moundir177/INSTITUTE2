"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const { isRTL } = useTheme();
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    accent: 'btn-accent',
    ghost: 'bg-transparent hover:bg-white/10 text-current',
  };
  
  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center 
    rounded-md font-medium transition-all duration-200
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'} 
    ${className}
  `;
  
  // Icon rendering based on position
  const renderContent = () => {
    // Adjust icon position for RTL
    const effectiveIconPosition = isRTL ? 
      (iconPosition === 'left' ? 'right' : 'left') : 
      iconPosition;
    
    return (
      <>
        {icon && effectiveIconPosition === 'left' && (
          <span className={`${isRTL ? 'ml-2' : 'mr-2'}`}>{icon}</span>
        )}
        {children}
        {icon && effectiveIconPosition === 'right' && (
          <span className={`${isRTL ? 'mr-2' : 'ml-2'}`}>{icon}</span>
        )}
      </>
    );
  };
  
  // Render button or link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center"
        >
          {renderContent()}
        </motion.span>
      </Link>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {renderContent()}
    </motion.button>
  );
}; 