"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-full focus:outline-none ${className}`}
      aria-label={theme === 'dark' ? t('theme.switch_to_light') : t('theme.switch_to_dark')}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: 1
        }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative"
      >
        <div className="relative transition-all duration-300">
          {theme === 'dark' ? (
            <div className="relative">
              <Sun size={20} className="text-gold transition-all" />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-yellow-300/20 animate-pulse" />
              </motion.div>
            </div>
          ) : (
            <div className="relative">
              <Moon size={20} className="text-darkblue transition-all" />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-darkblue/10 animate-pulse" />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
      
      <span className="sr-only">
        {theme === 'dark' ? t('theme.switch_to_light') : t('theme.switch_to_dark')}
      </span>
    </motion.button>
  );
}; 