"use client";

import { useState, useEffect } from 'react';
import { FaBolt, FaFeather } from 'react-icons/fa';

interface PerformanceToggleProps {
  className?: string;
}

export const PerformanceToggle = ({ className = '' }: PerformanceToggleProps) => {
  // Use localStorage to remember user preference
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Load saved preference on component mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('reduced-motion');
    if (savedPreference) {
      setReducedMotion(savedPreference === 'true');
    }
  }, []);
  
  // Update localStorage and apply data attribute when preference changes
  useEffect(() => {
    localStorage.setItem('reduced-motion', reducedMotion.toString());
    
    // Add data attribute to document for CSS selectors
    if (reducedMotion) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
    }
  }, [reducedMotion]);
  
  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };
  
  return (
    <button
      onClick={toggleReducedMotion}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
        reducedMotion 
          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
      } ${className}`}
      aria-label={reducedMotion ? 'Enable animations' : 'Reduce animations for better performance'}
      title={reducedMotion ? 'Animations reduced for better performance' : 'Full animations enabled'}
    >
      {reducedMotion ? (
        <>
          <FaBolt className="text-yellow-500" />
          <span className="text-xs font-medium">Performance Mode</span>
        </>
      ) : (
        <>
          <FaFeather className="text-blue-500" />
          <span className="text-xs font-medium">Standard Mode</span>
        </>
      )}
    </button>
  );
}; 