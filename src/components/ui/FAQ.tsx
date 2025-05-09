"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { ShinyText } from "./ShinyText";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  maxOpened?: number;
  variant?: "boxed" | "simple" | "bordered";
  columns?: 1 | 2;
  className?: string;
}

export function FAQ({
  items,
  title,
  description,
  maxOpened = -1, // -1 means no limit
  variant = "boxed",
  columns = 1,
  className = "",
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      // If item is already open, close it
      if (prevOpenItems.includes(index)) {
        return prevOpenItems.filter((i) => i !== index);
      }
      
      // If maxOpened is set and we're at the limit, replace the oldest opened item
      if (maxOpened > 0 && prevOpenItems.length >= maxOpened) {
        const newOpenItems = [...prevOpenItems];
        newOpenItems.shift(); // Remove the oldest item
        return [...newOpenItems, index];
      }
      
      // Otherwise just add the new item
      return [...prevOpenItems, index];
    });
  };
  
  // Determine if an item is open
  const isItemOpen = (index: number) => openItems.includes(index);
  
  // Get variant-specific classes
  const getVariantClasses = () => {
    switch (variant) {
      case "simple":
        return {
          container: "divide-y divide-silver-200",
          item: "py-6",
          question: "text-lg font-medium text-gray-900",
          answer: "mt-4 text-gray-600",
          icon: "text-ukblue",
        };
      case "bordered":
        return {
          container: "space-y-4",
          item: "border border-silver-300 rounded-lg p-5 hover:border-ukblue/50 transition-colors",
          question: "text-lg font-medium text-gray-900",
          answer: "mt-4 text-gray-600",
          icon: "text-ukblue",
        };
      case "boxed":
      default:
        return {
          container: "space-y-4",
          item: "bg-white shadow-sm hover:shadow-md rounded-lg transition-shadow",
          question: "text-lg font-medium text-gray-900",
          answer: "mt-4 text-gray-600",
          icon: "text-ukblue",
        };
    }
  };
  
  const variantClasses = getVariantClasses();
  
  return (
    <div className={className}>
      {/* Header */}
      {(title || description) && (
        <div className="mb-10 text-center">
          {title && (
            <ShinyText
              text={title}
              tagName="h2"
              gradient="royal"
              size="3xl"
              className="mb-4"
            />
          )}
          {description && (
            <p className="text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      
      {/* FAQ Items */}
      <div className={`grid grid-cols-1 ${columns === 2 ? 'lg:grid-cols-2 lg:gap-x-8' : ''} gap-y-4`}>
        <div className={`${variantClasses.container} ${columns === 2 ? 'lg:col-span-1' : 'col-span-full'}`}>
          {items.slice(0, columns === 2 ? Math.ceil(items.length / 2) : items.length).map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={isItemOpen(index)}
              onClick={() => toggleItem(index)}
              variant={variant}
              variantClasses={variantClasses}
            />
          ))}
        </div>
        
        {columns === 2 && items.length > 1 && (
          <div className={variantClasses.container}>
            {items.slice(Math.ceil(items.length / 2)).map((item, index) => {
              const actualIndex = index + Math.ceil(items.length / 2);
              return (
                <FAQItem
                  key={actualIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={isItemOpen(actualIndex)}
                  onClick={() => toggleItem(actualIndex)}
                  variant={variant}
                  variantClasses={variantClasses}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// Individual FAQ item component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  variant,
  variantClasses,
}: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  variant: "boxed" | "simple" | "bordered";
  variantClasses: {
    container: string;
    item: string;
    question: string;
    answer: string;
    icon: string;
  };
}) {
  return (
    <div className={variantClasses.item}>
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={variantClasses.question}>{question}</span>
        <span 
          className={`${variantClasses.icon} ml-4 p-1 rounded-full flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown />
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={variantClasses.answer}>
              {typeof answer === "string" ? (
                <p>{answer}</p>
              ) : (
                answer
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 