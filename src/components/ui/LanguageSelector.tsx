"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Language options
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];
  
  // Find current language
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Handle language change
  const handleLanguageChange = (langCode: 'en' | 'fr' | 'ar') => {
    setLanguage(langCode);
    setIsOpen(false);
  };
  
  return (
    <div 
      className={`relative ${className}`}
      ref={dropdownRef}
    >
      <button
        className="flex items-center space-x-1 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-dark-card transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 mr-1" />
        <span>{currentLanguage.flag}</span>
        <span className="mx-1 text-sm">{currentLanguage.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-1 w-40 bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-dark-border z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-dark-border/30 ${
                    language === lang.code ? 'bg-brand-blue-50 dark:bg-dark-primary/20 text-darkblue dark:text-dark-highlight font-medium' : 'text-gray-700 dark:text-dark-text-secondary'
                  }`}
                  onClick={() => handleLanguageChange(lang.code as 'en' | 'fr' | 'ar')}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 