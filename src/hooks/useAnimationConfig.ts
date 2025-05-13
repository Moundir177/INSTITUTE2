"use client";

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Hook that provides animation configuration based on user preferences
 * and device performance
 */
export const useAnimationConfig = () => {
  const prefersReducedMotion = useReducedMotion();
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false);
  const [userPreference, setUserPreference] = useState<boolean | null>(null);
  
  // Check for user preference in localStorage
  useEffect(() => {
    const savedPreference = localStorage.getItem('reduced-motion');
    if (savedPreference !== null) {
      setUserPreference(savedPreference === 'true');
    }
    
    // Listen for changes to the preference
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'reduced-motion') {
        setUserPreference(e.newValue === 'true');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  // Check for low-end devices and reduce animations if needed
  useEffect(() => {
    // Simple performance check based on device memory (if available)
    const isLowEndDevice = 
      typeof navigator !== 'undefined' && 
      // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
      'deviceMemory' in navigator && 
      // @ts-ignore
      navigator.deviceMemory < 4;
    
    // Number of logical processors can be another indicator
    const hasLimitedCPU = 
      typeof navigator !== 'undefined' && 
      navigator.hardwareConcurrency && 
      navigator.hardwareConcurrency < 4;
    
    setShouldReduceAnimations(isLowEndDevice || hasLimitedCPU || false);
  }, []);
  
  // User preference takes precedence, then system preference, then device capability
  const shouldReduceMotion = 
    userPreference !== null ? userPreference : 
    prefersReducedMotion || shouldReduceAnimations;
  
  // Common animation variants
  const fadeInVariants = {
    hidden: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut" 
      } 
    }
  };
  
  // Staggered animations for lists
  const getStaggeredVariants = (index: number, staggerAmount: number = 0.1) => ({
    hidden: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.5,
        delay: shouldReduceMotion ? 0 : index * staggerAmount,
      } 
    }
  });
  
  // Modal animations
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.2 
      }
    },
    exit: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : 0.2 
      }
    }
  };
  
  // Container variants with staggered children
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };
  
  // Get appropriate scroll behavior
  const getScrollBehavior = (): ScrollBehavior => 
    shouldReduceMotion ? 'auto' : 'smooth';
  
  return {
    shouldReduceMotion,
    fadeInVariants,
    getStaggeredVariants,
    modalVariants,
    containerVariants,
    getScrollBehavior
  };
}; 