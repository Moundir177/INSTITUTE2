"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'particles' | 'wave' | 'mesh';
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  primaryColor?: string;
  secondaryColor?: string;
  children?: React.ReactNode;
}

export function AnimatedBackground({
  variant = 'gradient',
  className = '',
  intensity = 'medium',
  primaryColor = '#00247D', // darkblue
  secondaryColor = '#4A6FFF',
  children
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation
  useEffect(() => {
    if (variant !== 'particles' || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent element
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const intensityFactor = intensity === 'light' ? 0.5 : intensity === 'strong' ? 1.5 : 1;
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000) * intensityFactor;
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      // Draw connections between close particles
      const connectionDistance = 100 * intensityFactor;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `${primaryColor}${Math.floor((1 - distance / connectionDistance) * 40).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, intensity, primaryColor, secondaryColor]);
  
  // Wave SVG background variant
  const renderWaveBackground = () => {
    const intensityValue = intensity === 'light' ? 0.5 : intensity === 'strong' ? 1.5 : 1;
    const numberOfWaves = 3;
    const waves = [];
    
    for (let i = 0; i < numberOfWaves; i++) {
      const opacity = 0.1 - (i * 0.03);
      const animationDelay = i * 0.5;
      const translateY = 10 + (i * 5);
      
      waves.push(
        <motion.path
          key={i}
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,234.7C672,235,768,213,864,202.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={i % 2 === 0 ? primaryColor : secondaryColor}
          opacity={opacity * intensityValue}
          initial={{ translateY: translateY * -1 }}
          animate={{ 
            translateY: [translateY * -1, 0, translateY * -1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: animationDelay
          }}
        />
      );
    }
    
    return (
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        {waves}
      </svg>
    );
  };

  // Mesh gradient blob animation
  const renderMeshGradient = () => {
    const intensityFactor = intensity === 'light' ? 0.5 : intensity === 'strong' ? 1.5 : 1;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full opacity-30 blur-[80px] bg-gradient-to-r from-blue-600 to-indigo-600"
          animate={{
            x: [0, 100 * intensityFactor, 0],
            y: [0, 50 * intensityFactor, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-30 blur-[100px] bg-gradient-to-l from-purple-600 to-blue-600"
          animate={{
            x: [0, -100 * intensityFactor, 0],
            y: [0, -50 * intensityFactor, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full opacity-20 blur-[80px] bg-gradient-to-tr from-cyan-500 to-blue-600"
          animate={{
            x: [0, -50 * intensityFactor, 0],
            y: [0, 100 * intensityFactor, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    );
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background variants */}
      {variant === 'gradient' && (
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br from-${primaryColor} to-${secondaryColor} opacity-${intensity === 'light' ? '70' : intensity === 'strong' ? '95' : '85'}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue-400/20 via-transparent to-transparent"></div>
        </div>
      )}
      
      {variant === 'particles' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      )}
      
      {variant === 'wave' && renderWaveBackground()}
      
      {variant === 'mesh' && renderMeshGradient()}
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 