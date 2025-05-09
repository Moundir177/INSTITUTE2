"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'mixed';
  className?: string;
  lightbox?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export function ImageGallery({
  images,
  columns = 3,
  gap = 'md',
  aspectRatio = 'mixed',
  className = '',
  lightbox = true,
  rounded = 'lg',
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };
  
  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };
  
  const aspectRatioClass = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    mixed: '',
  };
  
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };
  
  const getAspectRatio = (index: number) => {
    if (aspectRatio === 'mixed') {
      // Alternate between different aspect ratios for visual variety
      const patterns = ['aspect-square', 'aspect-video', 'aspect-[3/4]', 'aspect-[9/16]'];
      return patterns[index % patterns.length];
    }
    return aspectRatioClass[aspectRatio];
  };
  
  return (
    <>
      <div className={`grid ${columnClass[columns]} ${gapClass[gap]} ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative overflow-hidden ${getAspectRatio(index)} ${roundedClass[rounded]} cursor-pointer`}
            onClick={() => lightbox && setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white p-2 text-sm">
                {image.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              {images[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                  {images[selectedImage].caption}
                </div>
              )}
              
              <button 
                className="absolute top-4 right-4 text-white w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              
              {selectedImage > 0 && (
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                >
                  ‹
                </button>
              )}
              
              {selectedImage < images.length - 1 && (
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 