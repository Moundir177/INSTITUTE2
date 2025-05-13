"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface GlassCard3DProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  badge?: string;
  badgeColor?: 'blue' | 'gold' | 'green' | 'purple' | 'red';
  className?: string;
  glowColor?: string;
  variant?: 'light' | 'dark';
  children?: React.ReactNode;
}

export function GlassCard3D({
  title,
  description,
  icon,
  imageSrc,
  imageAlt = 'Card image',
  href,
  badge,
  badgeColor = 'blue',
  className = '',
  glowColor = 'rgba(74, 111, 255, 0.4)',
  variant = 'light',
  children
}: GlassCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  // For smooth motion
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXMotionValue = useMotionValue(0);
  const rotateYMotionValue = useMotionValue(0);
  const springRotateX = useSpring(rotateXMotionValue, springConfig);
  const springRotateY = useSpring(rotateYMotionValue, springConfig);

  const badgeColors = {
    blue: "bg-blue-400/30 text-blue-500 border border-blue-400/30 backdrop-blur-sm",
    gold: "bg-amber-400/30 text-amber-500 border border-amber-400/30 backdrop-blur-sm",
    green: "bg-green-400/30 text-green-500 border border-green-400/30 backdrop-blur-sm",
    purple: "bg-purple-400/30 text-purple-500 border border-purple-400/30 backdrop-blur-sm", 
    red: "bg-red-400/30 text-red-500 border border-red-400/30 backdrop-blur-sm",
  };

  const glassStyle = 
    variant === 'light' 
      ? 'bg-white/30 border border-white/50 text-gray-800 backdrop-blur-md'
      : 'bg-gray-900/70 border border-gray-800/30 text-white backdrop-blur-md';
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (values from -0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    // Set rotation values based on mouse position
    // Multiplying by 20 for more pronounced effect (adjust as needed)
    setRotateX(-mouseY * 10); 
    setRotateY(mouseX * 10);
    
    // Set mouse position for highlight effect
    setMouseX(mouseX);
    setMouseY(mouseY);
    
    // Update motion values
    rotateXMotionValue.set(-mouseY * 10);
    rotateYMotionValue.set(mouseX * 10);
  };
  
  const handleMouseLeave = () => {
    // Reset rotation
    setRotateX(0);
    setRotateY(0);
    rotateXMotionValue.set(0);
    rotateYMotionValue.set(0);
  };

  // For highlight effect
  const highlightOpacity = useTransform(
    [springRotateX, springRotateY],
    ([latestRotateX, latestRotateY]) => {
      const maxRotate = Math.max(Math.abs(latestRotateX as number), Math.abs(latestRotateY as number));
      return (maxRotate / 10) * 0.15; // Adjust opacity based on rotation
    }
  );
  
  const highlightTranslateX = useTransform(
    springRotateY,
    (latestRotateY) => -(latestRotateY as number) * 10
  );
  
  const highlightTranslateY = useTransform(
    springRotateX,
    (latestRotateX) => (latestRotateX as number) * 10
  );
  
  const cardContent = (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden p-1 rounded-xl shadow-lg ${glassStyle} ${className} perspective-1000 transform-gpu`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Inner content with glass effect */}
      <div className="relative h-full rounded-lg overflow-hidden">
        {/* Gradient highlight effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: highlightOpacity,
            background: `radial-gradient(circle at ${(mouseX + 0.5) * 100}% ${(mouseY + 0.5) * 100}%, ${glowColor} 0%, transparent 50%)`,
            translateX: highlightTranslateX,
            translateY: highlightTranslateY,
          }}
        />
        
        {/* Image */}
        {imageSrc && (
          <div className="relative h-48">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            {/* Badge */}
            {badge && (
              <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${badgeColors[badgeColor]}`}>
                {badge}
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {/* Icon */}
          {icon && !imageSrc && (
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
              {icon}
            </div>
          )}
          
          <h3 className={`text-xl font-semibold mb-2 ${variant === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
          
          <p className={`mb-4 ${variant === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
            {description}
          </p>
          
          {children}
        </div>
      </div>
    </motion.div>
  );
  
  // Wrap with link if href is provided
  if (href) {
    return (
      <div className="block">
        <Link href={href} className="block">
          {React.cloneElement(cardContent, {href: undefined})}
        </Link>
      </div>
    );
  }
  
  return cardContent;
} 