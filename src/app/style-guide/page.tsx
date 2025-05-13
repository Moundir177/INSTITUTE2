"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { 
  FaSun, FaMoon, FaPalette, FaFont, FaSquare, 
  FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle
} from "react-icons/fa";

export default function StyleGuidePage() {
  const { theme } = useTheme();
  
  return (
    <>
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Royal Academy UK Style Guide
            </motion.h1>
            <p className="text-xl text-brand-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              This page showcases the design system and components used throughout the Royal Academy UK website, including dark mode.
            </p>
            
            <div className="flex justify-center mt-6">
              <ThemeToggle className="scale-150 p-4 border border-brand-gray-200 dark:border-dark-border rounded-full hover:bg-brand-gray-100 dark:hover:bg-dark-card" />
              <span className="ml-3 font-medium text-lg">Current theme: <span className="text-darkblue dark:text-dark-highlight">{theme === 'dark' ? 'Dark' : 'Light'}</span></span>
            </div>
          </div>
          
          {/* Color Palette */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FaPalette className="mr-2 text-darkblue dark:text-dark-highlight" />
              Color Palette
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Primary Colors */}
              <div className="space-y-3">
                <div className="h-24 bg-darkblue dark:bg-dark-primary rounded-lg shadow-md"></div>
                <p className="font-medium">Primary Blue</p>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary">Light: #012169<br />Dark: #1F3E7C</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-gold dark:bg-dark-highlight rounded-lg shadow-md"></div>
                <p className="font-medium">Gold</p>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary">Light: #D4AF37<br />Dark: #C49A2F</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-gray dark:bg-dark-text-muted rounded-lg shadow-md"></div>
                <p className="font-medium">Grey</p>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary">Light: #6E7F80<br />Dark: #4A5056</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-24 bg-lightgray dark:bg-dark-card rounded-lg shadow-md"></div>
                <p className="font-medium">Light Grey / Card</p>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary">Light: #E0E0E0<br />Dark: #1E2028</p>
              </div>
            </div>
          </div>
          
          {/* Typography */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FaFont className="mr-2 text-darkblue dark:text-dark-highlight" />
              Typography
            </h2>
            
            <div className="space-y-6 bg-white dark:bg-dark-card p-6 rounded-lg border border-brand-gray-200 dark:border-dark-border">
              <div>
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 36px/2.25rem, Bold</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold">Heading 2</h2>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 30px/1.875rem, Bold</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold">Heading 3</h3>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 24px/1.5rem, Bold</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold">Heading 4</h4>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 20px/1.25rem, Semibold</p>
              </div>
              
              <div>
                <p className="text-base">Body Text - This is regular body text for paragraphs and general content. The standard text should be clear, readable, and properly contrasted against the background in both light and dark modes.</p>
                <p className="text-sm text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 16px/1rem, Regular</p>
              </div>
              
              <div>
                <p className="text-sm">Small Text - Used for captions, footnotes, and less important information.</p>
                <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary mt-1">Font: Geist Sans, 14px/0.875rem, Regular</p>
              </div>
            </div>
          </div>
          
          {/* Components */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <FaSquare className="mr-2 text-darkblue dark:text-dark-highlight" />
              Components
            </h2>
            
            {/* Buttons */}
            <div className="mb-10 bg-white dark:bg-dark-card p-6 rounded-lg border border-brand-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2 text-center">
                  <Button variant="primary">Primary Button</Button>
                  <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary">Primary</p>
                </div>
                
                <div className="space-y-2 text-center">
                  <Button variant="outline">Outline Button</Button>
                  <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary">Outline</p>
                </div>
                
                <div className="space-y-2 text-center">
                  <Button variant="secondary">Secondary Button</Button>
                  <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary">Secondary</p>
                </div>
                
                <div className="space-y-2 text-center">
                  <Button variant="accent">Accent Button</Button>
                  <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary">Accent</p>
                </div>
                
                <div className="space-y-2 text-center">
                  <Button disabled>Disabled Button</Button>
                  <p className="text-xs text-brand-gray-600 dark:text-dark-text-secondary">Disabled</p>
                </div>
              </div>
            </div>
            
            {/* Cards */}
            <div className="mb-10 bg-white dark:bg-dark-card p-6 rounded-lg border border-brand-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-semibold mb-4">Cards</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-dark-card border border-brand-gray-200 dark:border-dark-border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Basic Card</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">A simple card for displaying information in both light and dark mode.</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-card border border-brand-gray-200 dark:border-dark-border rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-darkblue dark:bg-dark-primary h-32"></div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Card with Image</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Card with an image header section.</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-card border border-brand-gray-200 dark:border-dark-border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Interactive Card</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">A card with an interactive button.</p>
                    <Button variant="primary" size="sm">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alerts */}
            <div className="mb-10 bg-white dark:bg-dark-card p-6 rounded-lg border border-brand-gray-200 dark:border-dark-border">
              <h3 className="text-xl font-semibold mb-4">Alerts</h3>
              
              <div className="space-y-4">
                <div className="bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 rounded">
                  <div className="flex items-start">
                    <FaCheck className="text-green-500 dark:text-green-400 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-400">Success Alert</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Your application has been successfully submitted.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-4 rounded">
                  <div className="flex items-start">
                    <FaTimes className="text-red-500 dark:text-red-400 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-red-800 dark:text-red-400">Error Alert</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">There was an error processing your request.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-100 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4 rounded">
                  <div className="flex items-start">
                    <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-400 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-400">Warning Alert</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">Your account subscription will expire in 3 days.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4 rounded">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-blue-500 dark:text-blue-400 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-400">Information Alert</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Classes will be suspended on April 15 due to a staff meeting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dark Mode Specific Design */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <div className="flex items-center mr-2">
                <FaSun className="text-darkblue rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                <FaMoon className="absolute text-dark-highlight rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </div>
              Theme Mode Comparison
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border border-brand-gray-200 rounded-lg shadow-sm">
                <h3 className="font-semibold flex items-center mb-3"><FaSun className="text-gold mr-2" /> Light Mode</h3>
                <p className="text-gray-600 mb-4">The light mode uses brighter, contrast-friendly colors with a white background to provide a clean, professional look.</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-brand-blue-50 rounded border border-brand-blue-100">
                    <p className="text-darkblue">Primary Text in Light Mode</p>
                  </div>
                  <div className="p-3 bg-brand-gold-50 rounded border border-brand-gold-100">
                    <p className="text-brand-gold-800">Secondary Text in Light Mode</p>
                  </div>
                  <div className="p-3 bg-lightgray rounded">
                    <p className="text-gray-700">Background surfaces in Light Mode</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-dark-card border border-dark-border rounded-lg shadow-md">
                <h3 className="font-semibold text-dark-text-primary flex items-center mb-3"><FaMoon className="text-dark-highlight mr-2" /> Dark Mode</h3>
                <p className="text-dark-text-secondary mb-4">The dark mode uses deeper colors with careful contrast adjustments to reduce eye strain while maintaining brand identity.</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-dark-primary/20 rounded border border-dark-primary/30">
                    <p className="text-dark-highlight">Primary Text in Dark Mode</p>
                  </div>
                  <div className="p-3 bg-dark-highlight/10 rounded border border-dark-highlight/20">
                    <p className="text-dark-highlight">Secondary Text in Dark Mode</p>
                  </div>
                  <div className="p-3 bg-dark-background rounded">
                    <p className="text-dark-text-secondary">Background surfaces in Dark Mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 