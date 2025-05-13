"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Theme = 'light' | 'dark';
type Language = 'en' | 'fr' | 'ar';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const router = useRouter();
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if localStorage theme exists
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no stored theme, check system preference
      setTheme('dark');
    }

    // Check if localStorage language exists
    const storedLanguage = localStorage.getItem('language') as Language | null;
    
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setIsRTL(storedLanguage === 'ar');
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr' || browserLang === 'ar') {
        setLanguage(browserLang as Language);
        setIsRTL(browserLang === 'ar');
      }
    }
  }, []);
  
  // Update document when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Update document direction when language changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Update RTL status based on language
    const newIsRTL = language === 'ar';
    setIsRTL(newIsRTL);
    
    // Set direction attribute on html element
    if (newIsRTL) {
      root.setAttribute('dir', 'rtl');
      root.classList.add('rtl');
    } else {
      root.setAttribute('dir', 'ltr');
      root.classList.remove('rtl');
    }
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    
    // Refresh the page to apply language changes
    // This is a simple approach, in a real app you might want to use Next.js's 
    // internationalization routing to change the locale without a full refresh
    router.refresh();
  };
  
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      language, 
      setLanguage: handleSetLanguage, 
      isRTL 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
} 