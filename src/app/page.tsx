"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GlassCard3D } from "@/components/ui/GlassCard3D";
import { Button } from "@/components/ui/Button";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FaGraduationCap, FaCertificate, FaUsers, FaGlobe, FaCalendarAlt, FaNewspaper, FaQuoteRight, FaArrowRight, FaUniversity, FaChalkboardTeacher, FaAward, FaPlay, FaChartLine, FaLaptopCode, FaChartPie, FaPalette, FaBullhorn, FaBalanceScale, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from '@/hooks/useTranslation';
import { StudentReviews } from "@/components/ui/StudentReviews";
import { EventCountdown } from "@/components/ui/EventCountdown";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ShinyText } from "@/components/ui/ShinyText";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";

export default function Home() {
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const { t, isRTL } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  // Set target date to 14 days from now for demo purposes
  const enrollmentDeadline = new Date();
  enrollmentDeadline.setDate(enrollmentDeadline.getDate() + 14);
  
  return (
    <>
      {/* New Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-darkblue via-darkblue-lighter to-darkblue overflow-hidden">
        {/* Clean background elements */}
        <div className="absolute inset-0 z-0">
          {!shouldReduceMotion && (
            <>
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-pattern.png')] bg-repeat opacity-5"></div>
              <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
              <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
            </>
          )}
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20 min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero content */}
            <div>
        <motion.div
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
            >
                <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                  Established 1995
              </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Future at<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">Royal Academy UK</span>
              </h1>
                
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Exceptional education, world-class faculty, and global career opportunities. Join our prestigious institution in the heart of the United Kingdom.
              </p>
                
              <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="/courses" 
                    className="px-8 py-3.5 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
                  >
                  Explore Courses
                </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    href="/virtual-tour" 
                    className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-3.5 text-base font-medium"
                  >
                    <FaPlay className="mr-2 h-3 w-3" /> Virtual Tour
                </Button>
              </div>
                
                <div className="mt-12 flex flex-wrap items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-darkblue overflow-hidden relative">
                        <Image 
                          src={`/images/avatar${i}.jpg`} 
                          alt={`Student ${i}`} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-darkblue flex items-center justify-center text-white text-xs font-medium">
                      +2K
                    </div>
                  </div>
                  <div className="text-blue-100 text-sm">
                    Join <span className="font-semibold">2,000+ students</span> from around the world
                  </div>
          </div>
        </motion.div>
            </div>
            
            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src="/images/campus.jpg"
            alt="Royal Academy UK Campus"
            fill
            className="object-cover"
            priority
          />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
        </div>
                
                {/* Floating card 1 */}
          <motion.div
                  className="absolute -top-6 -left-6 max-w-[200px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Graduation Rate</h3>
                      <p className="text-2xl font-bold text-darkblue">98%</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating card 2 */}
                <motion.div
                  className="absolute -bottom-6 -right-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, 8, 0], x: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gold/20 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaAward className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Global Ranking</h3>
                      <p className="text-2xl font-bold text-darkblue">Top 50</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Accreditation badges */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {['amba-logo.jpg', 'qaa-logo.jpg', 'iau-logo.jpg'].map((logo, i) => (
                    <div key={i} className="w-12 h-12 bg-white rounded-full p-1 shadow-lg">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={`/images/${logo}`}
                          alt={`Accreditation ${i+1}`}
                          fill
                          className="object-cover"
                />
              </div>
                    </div>
                  ))}
                </div>
              </div>
          </motion.div>
          </div>
          
          {/* Scroll indicator */}
          {!shouldReduceMotion && (
            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-blue-100/70"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <Section 
        id="features"
        title="Why Choose Royal Academy UK"
        subtitle="We're committed to providing quality education with a focus on excellence, innovation, and student success"
        background="light"
      >
        <div className="relative overflow-hidden py-12">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent"></div>
            
            <motion.div
              className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-teal-300/20 to-blue-400/30 blur-3xl"
              {...(prefersReducedMotion ? {} : {
                animate:{
                  scale: [1, 1.05, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                },
                transition: {duration: 20, repeat: Infinity, ease: "easeInOut"}
              })}
            />
            
            <svg className="absolute bottom-0 left-0 w-full h-24 text-gray-100 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Main features heading with animation */}
          <motion.div
              initial={fadeInVariants.hidden}
              whileInView={fadeInVariants.visible}
              viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mx-auto mb-3">
              <div className="flex items-center justify-center mb-2">
                <span className="w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mr-2"></span>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Why Choose Us</span>
                <span className="w-10 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full ml-2"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">World-Class Educational Experience</h2>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">Discover the key reasons that make Royal Academy UK the preferred choice for students seeking excellence in higher education.</p>
            </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={fadeInVariants.hidden}
              whileInView={fadeInVariants.visible}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, translateY: -8 }}
            >
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-blue-100 to-transparent rounded-bl-full opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-lg flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <FaGraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Expert Faculty</h3>
                  <p className="text-gray-600">Learn from world-renowned professors and industry leaders with extensive experience and dedication to student success.</p>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        PhD qualified educators
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Industry-experienced instructors
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInVariants.hidden}
              whileInView={fadeInVariants.visible}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, translateY: -8 }}
            >
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100 hover:border-gold transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-gold-100 to-transparent rounded-bl-full opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-400 text-white rounded-lg flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <FaCertificate className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gold transition-colors">Accredited Programs</h3>
                  <p className="text-gray-600">All our courses are internationally accredited and recognized by top employers worldwide for their quality and relevance.</p>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Globally recognized certifications
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Industry-endorsed curricula
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInVariants.hidden}
              whileInView={fadeInVariants.visible}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, translateY: -8 }}
            >
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100 hover:border-purple-200 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-purple-100 to-transparent rounded-bl-full opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 text-white rounded-lg flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <FaUsers className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">Global Network</h3>
                  <p className="text-gray-600">Join a diverse community of students and alumni from over 120 countries around the world, creating lifelong connections.</p>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Alumni network in 120+ countries
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        International exchange opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInVariants.hidden}
              whileInView={fadeInVariants.visible}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, translateY: -8 }}
            >
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden group h-full border border-gray-100 hover:border-green-200 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-green-100 to-transparent rounded-bl-full opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-lg flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <FaChalkboardTeacher className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Modern Facilities</h3>
                  <p className="text-gray-600">Study in state-of-the-art facilities with the latest technology and comfortable learning spaces designed for success.</p>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        High-tech smart classrooms
                      </li>
                      <li className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Advanced research laboratories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={fadeInVariants.hidden}
            whileInView={fadeInVariants.visible}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              href="/about"
              className="group relative overflow-hidden rounded-full bg-darkblue px-8 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              <span className="relative z-10">Learn More About Our Advantages</span>
              <span className="absolute inset-0 bg-gradient-to-r from-darkblue-lighter to-darkblue opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </motion.div>
          
        </div>
      </Section>

      {/* Popular Courses */}
      <Section
        title="Our Popular Courses"
        subtitle="Discover our most sought-after courses designed to prepare you for success"
          >
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-darkblue via-darkblue to-blue-800 z-0"></div>
            <div className="absolute inset-0 opacity-20 z-0">
              <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                <defs>
                  <pattern id="pattern-circles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff" opacity="0.4"></circle>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
              </svg>
            </div>
            
            <div className="relative z-10 px-6 py-16 md:py-24 md:px-12">
              {/* Headline with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 mb-5">
                  <span className="text-white/90 text-sm font-medium">Top-Rated Programs</span>
                  </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Explore Our Elite Courses</h2>
                <p className="max-w-2xl mx-auto text-white/80 text-lg">Choose from our selection of internationally recognized courses taught by leading experts in their fields</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {popularCourses && Array.isArray(popularCourses) ? (
                  popularCourses.map((course, index) => (
                    <CourseCard 
                      key={course.title}
                      course={course}
                      index={index}
              />
                  ))
                ) : (
                  <>
                    <CourseCard 
                      course={{
                        title: "Master of Business Administration",
                        description: "Develop leadership skills and business acumen with our globally recognized MBA program.",
                        image: "/images/business.jpg",
                        href: "/courses/mba",
                        price: "£15,000",
                        duration: "12 Months"
                      }}
                      index={0}
                    />
                    <CourseCard 
                      course={{
                        title: "Data Science & AI",
                        description: "Master the skills of data analysis, machine learning, and artificial intelligence.",
                        image: "/images/data-science.jpg",
                        href: "/courses/data-science",
                        price: "£12,500",
                        duration: "10 Months"
                      }}
                      index={1}
                    />
                    <CourseCard 
                      course={{
                        title: "Digital Marketing",
                        description: "Learn to create and implement effective digital marketing strategies for the modern world.",
                        image: "/images/marketing.jpg",
                        href: "/courses/digital-marketing",
                        price: "£8,750",
                        duration: "6 Months"
                      }}
                      index={2}
                    />
                  </>
                )}
              </div>
              
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  href="/courses"
                  className="bg-white hover:bg-gold text-darkblue hover:text-white font-medium px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  View All Courses <FaArrowRight className="ml-2 inline-block" />
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Course categories */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Browse by Category</h3>
              <p className="text-gray-600">Find your perfect program from our diverse range of disciplines</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {courseCategories.map((category, index) => (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <Link href={category.href} className="block">
                    <div className="aspect-square rounded-xl overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                      <div className={`absolute inset-0 ${category.bgColor} opacity-70`}></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                        <div className="flex flex-col items-center text-center">
                          <span className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full mb-2">
                            {category.icon}
                          </span>
                          <h4 className="text-white font-semibold">{category.name}</h4>
                          <p className="text-white/90 text-sm">{category.courseCount} courses</p>
                        </div>
                      </div>
                    </div>
                  </Link>
            </motion.div>
          ))}
        </div>
          </div>
        </div>
      </Section>

      {/* Statistics with Counter Animation */}
      <Section background="dark">
        <AnimatedBackground
          variant="mesh"
          intensity="medium"
          primaryColor="#000C24"
          secondaryColor="#1E3A8A"
          className="rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-24 -left-24 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GradientBorder variant="gold" className="h-full">
                <div className="bg-darkblue/60 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      25K+
                    </motion.span>
                  </div>
                  <div className="text-gray-300 uppercase text-sm tracking-wider font-medium">STUDENTS</div>
                </div>
              </GradientBorder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GradientBorder variant="royal" className="h-full">
                <div className="bg-darkblue/60 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      150+
                    </motion.span>
        </div>
                  <div className="text-gray-300 uppercase text-sm tracking-wider font-medium">COURSES</div>
                </div>
              </GradientBorder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GradientBorder variant="primary" className="h-full">
                <div className="bg-darkblue/60 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600 mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      98%
                    </motion.span>
                  </div>
                  <div className="text-gray-300 uppercase text-sm tracking-wider font-medium">JOB PLACEMENT</div>
                </div>
              </GradientBorder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GradientBorder variant="gold" className="h-full">
                <div className="bg-darkblue/60 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-600 mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      28
                    </motion.span>
                  </div>
                  <div className="text-gray-300 uppercase text-sm tracking-wider font-medium">YEARS</div>
                </div>
              </GradientBorder>
            </motion.div>
          </div>
        </AnimatedBackground>
      </Section>

      {/* Enrollment Countdown Section */}
      <Section
        title="Next Enrollment Period"
        subtitle="Secure your spot in our upcoming courses before registration closes"
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
          <motion.div
              className="absolute -top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{duration: 15, repeat: Infinity, ease: "easeInOut"}}
            />
            
            <motion.div 
              className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-300/10 to-blue-400/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -10, 0],
              }}
              transition={{duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2}}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <AnimatedBackground 
                variant="wave" 
                intensity="medium" 
                primaryColor="#00247D"
                secondaryColor="#4A6FFF"
                className="rounded-xl p-2 h-full"
              >
                <GlassCard3D
                  variant="dark"
                  glowColor="rgba(74, 111, 255, 0.5)"
                  className="h-full"
                  title="Enrollment Countdown"
                  description="Register for our upcoming semester"
                >
                  <div className="p-6">
                    <div className="mb-6">
                      <ShinyText 
                        text="Autumn Semester Registration" 
                        tagName="h3" 
                        size="xl" 
                        gradient="royal" 
                        className="mb-2"
                      />
                      <p className="text-white text-opacity-90">Classes begin in September - Limited places available</p>
                </div>
                    
                    <EventCountdown 
                      targetDate={enrollmentDeadline}
                      variant="light"
                    />
                    
                    <div className="mt-8 text-center">
                      <GradientBorder variant="royal" className="inline-block">
                        <Button
                          variant="ghost"
                          size="lg"
                          href="/admissions/apply"
                          className="text-white hover:bg-white/10"
                        >
                          Apply Now
                        </Button>
                      </GradientBorder>
              </div>
            </div>
                </GlassCard3D>
              </AnimatedBackground>
                      </div>
            
            <div className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden border border-gray-200/20 h-full bg-white/5 backdrop-blur-sm">
                <div className="p-6 border-b border-gray-200/20">
                  <h3 className="text-xl font-semibold text-white">Featured Courses Opening Soon</h3>
                  <p className="text-gray-300">Explore our most in-demand programs with upcoming enrollment periods</p>
                    </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    {/* Course 1 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-800/30 flex items-center"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-blue-700/30 rounded-md flex items-center justify-center">
                          <FaGraduationCap className="text-blue-400 text-xl" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-white">Master of Business Administration</h4>
                        <div className="flex items-center text-sm mt-1 text-blue-300">
                          <span className="flex items-center mr-3"><FaCalendarAlt className="mr-1" /> 12 Months</span>
                          <span className="flex items-center"><FaUsers className="mr-1" /> 25 Places</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">£15,000</span>
                      </div>
                    </motion.div>
                    
                    {/* Course 2 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="rounded-lg p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/20 border border-purple-800/30 flex items-center"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-purple-700/30 rounded-md flex items-center justify-center">
                          <FaGlobe className="text-purple-400 text-xl" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-white">Data Science & AI</h4>
                        <div className="flex items-center text-sm mt-1 text-purple-300">
                          <span className="flex items-center mr-3"><FaCalendarAlt className="mr-1" /> 10 Months</span>
                          <span className="flex items-center"><FaUsers className="mr-1" /> 20 Places</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">£12,500</span>
                      </div>
                    </motion.div>
                    
                    {/* Course 3 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="rounded-lg p-4 bg-gradient-to-r from-teal-900/40 to-teal-800/20 border border-teal-800/30 flex items-center"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-teal-700/30 rounded-md flex items-center justify-center">
                          <FaAward className="text-teal-400 text-xl" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-white">Digital Marketing</h4>
                        <div className="flex items-center text-sm mt-1 text-teal-300">
                          <span className="flex items-center mr-3"><FaCalendarAlt className="mr-1" /> 6 Months</span>
                          <span className="flex items-center"><FaUsers className="mr-1" /> 30 Places</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="px-2 py-1 bg-teal-600/20 text-teal-300 text-xs rounded-full">£8,750</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200/20 bg-gradient-to-r from-gray-900/40 to-blue-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Ready to take the next step?</p>
                      <p className="text-gray-300 text-sm">Download our program brochure for complete details</p>
                    </div>
                    <Button
                      variant="secondary"
                      size="md"
                      href="/brochure"
                      className="flex items-center"
                    >
                      Download Brochure <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials and Events */}
      <Section
        title="What Our Students Say"
        subtitle="Read what our current students and alumni think about Royal Academy UK"
        background="dark"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatedBackground 
            variant="mesh"
            intensity="medium"
            primaryColor="#001C64"
            secondaryColor="#4A6FFF"
            className="rounded-3xl p-6 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white mb-8">
                    <ShinyText 
                      text="Student Testimonials" 
                      tagName="h3" 
                      size="xl" 
                      gradient="gold" 
                      className="mb-4"
                    />
                    <FaQuoteRight className="text-gold-500 text-4xl mb-4 opacity-30" />
                    <p className="text-lg italic text-gray-200 mb-6">
                      "Studying at Royal Academy UK was one of the best decisions I've ever made. The quality of education, the supportive faculty, and the international environment helped me grow both personally and professionally."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-4 relative">
                        <Image
                          src="/images/avatar1.jpg"
                          alt="Sarah Johnson"
                          width={48}
                          height={48}
                          className="rounded-full border-2 border-gold-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Sarah Johnson</h4>
                        <p className="text-sm text-gray-300">MBA Graduate, 2022</p>
                      </div>
                    </div>
            </div>
          </motion.div>
          
          <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <GradientBorder variant="gold" className="inline-block">
                    <Button
                      variant="ghost"
                      size="md"
                      href="/testimonials"
                      className="text-white hover:bg-white/10"
                    >
                      Read More Testimonials
                    </Button>
                  </GradientBorder>
                </motion.div>
              </div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <GlassCard3D
                  title="Upcoming Open Day"
                  description="Join us for an immersive campus experience. Tour our facilities, meet faculty members, and learn about our programs."
                  imageSrc="/images/open-day.jpg"
                  imageAlt="Campus Open Day"
                  href="/events/open-day"
                  badge="8 June 2023"
                  badgeColor="gold"
                  variant="dark"
                  glowColor="rgba(255, 192, 0, 0.4)"
                >
                  <EventCountdown
                    targetDate={new Date(2023, 5, 8)}
                    variant="light"
                  />
                </GlassCard3D>
              </motion.div>
              </div>
          </AnimatedBackground>
        </motion.div>
      </Section>

      {/* Campus Life */}
      <Section
        title="Campus Life"
        subtitle="Experience a vibrant and dynamic environment that fosters growth and collaboration"
      >
        <div className="relative overflow-hidden py-6">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <svg className="absolute top-0 left-0 w-full h-32 text-blue-50 opacity-20 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="currentColor" fillOpacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,154.7C274.3,171,343,181,411,192C480,203,549,213,617,208C685.7,203,754,181,823,186.7C891.4,192,960,224,1029,234.7C1097.1,245,1166,235,1234,224C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={{ scale: 1.03, translateY: -5 }}
            >
              <GlassCard3D
                title="Student Activities"
                description="Join clubs, sports teams, and cultural events that enrich your educational experience and build lasting connections."
                imageSrc="/images/featured-testimonial.jpg"
                imageAlt="Student activities"
                badge="Extracurricular"
                badgeColor="purple"
                variant="light" 
                glowColor="rgba(132, 90, 223, 0.5)"
              >
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Activities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                      Student government and leadership programs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                      Cultural festivals and international events
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                      Sports teams and fitness facilities
                    </li>
                  </ul>
                </div>
              </GlassCard3D>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="transform-gpu"
              whileHover={{ scale: 1.03, translateY: -5 }}
            >
              <GlassCard3D
                title="Support Services"
                description="Access comprehensive support including academic advising, career counseling, and wellness resources."
                imageSrc="/images/student-affairs.jpg"
                imageAlt="Support services"
                badge="Student Support"
                badgeColor="green"
                variant="light"
                glowColor="rgba(34, 197, 94, 0.5)"
              >
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Services:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      Academic advising and tutoring programs
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      Career development and job placement
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                      Health and counseling services
                    </li>
                  </ul>
                </div>
              </GlassCard3D>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <AnimatedTooltip
              content="Take a virtual tour of our beautiful campus"
              position="top"
              variant="dark"
            >
              <GradientBorder variant="primary" className="inline-block">
                <Button
                  variant="ghost"
                  size="lg"
                  href="/campus-tour"
                  className="flex items-center"
                >
                  <span className="mr-2">🎬</span> Take a Virtual Campus Tour
                </Button>
              </GradientBorder>
            </AnimatedTooltip>
          </motion.div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section
        title="Upcoming Events"
        subtitle="Join us for these exciting events at Royal Academy"
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events && Array.isArray(events) ? events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-darkblue text-white text-xs px-3 py-1 rounded-full">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-lightgray rounded-lg flex flex-col items-center justify-center text-darkblue">
                    <span className="text-sm font-bold">{event.date.month}</span>
                    <span className="text-lg font-bold">{event.date.day}</span>
                  </div>
                  <h3 className="font-bold text-lg">{event.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-2" />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.div>
          )) : (
            // Fallback content if events is not available or not an array
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No upcoming events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="py-20">
        <AnimatedBackground
          variant="particles"
          intensity="medium"
          primaryColor="#00247D"
          secondaryColor="#4A6FFF"
          className="rounded-3xl overflow-hidden"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                className="absolute top-0 right-0 opacity-70 rotate-180"
                animate={{
                  y: [0, -5, 0],
                  rotate: [180, 178, 180]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 md:w-72 md:h-72">
                  <path d="M42.2,-69.8C55.8,-62.8,68.3,-51.5,74.9,-37.2C81.5,-22.9,82.2,-5.7,79.2,10.6C76.2,26.9,69.5,42.3,58.9,56.5C48.3,70.7,33.7,83.7,17.8,85.6C1.9,87.5,-15.4,78.3,-31.3,69.8C-47.2,61.3,-61.7,53.5,-70.4,40.9C-79.1,28.2,-82.1,10.8,-79.5,-5.2C-76.8,-21.1,-68.6,-35.6,-57.2,-43.9C-45.7,-52.2,-31.1,-54.3,-18.1,-61.1C-5.2,-67.9,6.1,-79.4,19.4,-78.8C32.8,-78.3,48.2,-65.6,42.2,-69.8Z" transform="translate(100 100)" fill="rgba(255, 255, 255, 0.07)" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-20 -left-20 opacity-70"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 md:w-80 md:h-80">
                  <path d="M42.5,-76.2C53.9,-68.2,61.5,-52.8,67.1,-38.2C72.6,-23.6,76,-9.7,77.3,5.8C78.5,21.3,77.6,38.3,69.7,51.5C61.9,64.7,47.2,74,31.1,77.1C15,80.1,-2.6,76.9,-18.8,71.5C-35,66.1,-49.7,58.5,-60.9,46.7C-72.1,35,-79.7,19.1,-79.9,3.1C-80.1,-13,-72.8,-29.1,-63.1,-42.1C-53.3,-55.1,-41.1,-65,-27.9,-71.8C-14.8,-78.5,-0.6,-82.2,13.1,-79.9C26.9,-77.7,41.1,-69.5,42.5,-76.2Z" transform="translate(100 100)" fill="rgba(255, 255, 255, 0.07)" />
                </svg>
              </motion.div>
          </div>
            
            <div className="max-w-3xl mx-auto text-center py-16 px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <ShinyText
                  text="Ready to Start Your Journey?"
                  tagName="h2"
                  size="4xl"
                  weight="bold"
                  gradient="gold"
                  direction="diagonal"
                  animated={true}
                  className="mb-6"
                />
              </motion.div>
              
              <motion.p 
                className="text-xl mb-10 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Apply today and take the first step towards a successful future with Royal Academy UK.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <GradientBorder variant="gold" className="inline-block">
                  <Button href="/admissions" variant="ghost" size="lg" className="text-white hover:bg-white/10 font-medium">
                    Apply Now
                  </Button>
                </GradientBorder>
                
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </motion.div>
              
              <motion.div
                className="mt-10 flex flex-wrap justify-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <FaGraduationCap className="text-white" />
        </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">Accredited Programs</h3>
                    <p className="text-white/70 text-sm">Globally recognized degrees</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <FaCertificate className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">Expert Faculty</h3>
                    <p className="text-white/70 text-sm">Learn from industry leaders</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <FaUniversity className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">Modern Campus</h3>
                    <p className="text-white/70 text-sm">State-of-the-art facilities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedBackground>
      </Section>

      {/* Main Program Categories */}
      <Section
        background="light"
        title="Our Specialization Programs"
        subtitle="Discover our comprehensive range of specialized programs designed to meet your educational and professional goals"
      >
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 dark:opacity-10 -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              At Greenwich, we offer three main program categories to help you achieve your academic and professional goals, with specialized courses designed in collaboration with international organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Start and Improve Your Business (SIYB) Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-2xl">
                <div className="h-24 bg-gradient-to-r from-darkblue to-darkblue-lighter relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] bg-repeat opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-500">
                      <path fill="currentColor" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">Start and Improve Your Business</h3>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-dark-card">
                  <div className="mb-4 text-center">
                    <h4 className="text-lg font-semibold text-darkblue mb-2 dark:text-blue-400">برنامج "طوّر و وسّع أعمالك"</h4>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4 dark:text-dark-text-secondary">
                      A comprehensive business development program designed for entrepreneurs and business owners looking to enhance their operations and expand their ventures.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Internationally recognized ILO-certified training</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Business strategy formulation and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Market expansion strategies and business growth</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Business simulation training at various levels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button href="/courses/siyb" variant="primary" className="w-full justify-center">
                    Explore SIYB Programs
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Higher Education Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gold to-amber-500 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-2xl">
                <div className="h-24 bg-gradient-to-r from-amber-600 to-amber-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] bg-repeat opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gold">
                      <path fill="currentColor" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">Higher Education Programs</h3>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-dark-card">
                  <div className="mb-4 text-center">
                    <h4 className="text-lg font-semibold text-amber-700 mb-2 dark:text-gold">برنامج "مدرب و مستشارا"</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PMT / TOT</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4 dark:text-dark-text-secondary">
                      Advanced academic programs designed for professionals seeking to enhance their qualifications and expertise in various disciplines.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">ILO accredited certifications and programs</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Access to comprehensive training materials and resources</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Internationally recognized professional credentials</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Train-the-trainer and consultant development programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button href="/courses/higher-education" variant="secondary" className="w-full justify-center">
                    Explore Higher Education
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Cultural Education Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-2xl">
                <div className="h-24 bg-gradient-to-r from-green-600 to-green-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] bg-repeat opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-green-500">
                      <path fill="currentColor" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">Cultural Education</h3>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-dark-card">
                  <div className="mb-4 text-center">
                    <h4 className="text-lg font-semibold text-green-700 mb-2 dark:text-green-400">برنامج "أوجد فكرة عمل ناجح"</h4>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4 dark:text-dark-text-secondary">
                      Specialized programs focusing on cultural exchange, language studies, and developing a global perspective through immersive educational experiences.
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Idea validation and entrepreneurial mindset development</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Step-by-step implementation plans for business ideas</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Business simulation training (Level 1-4)</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text-secondary text-sm">Entrepreneurship development and leadership skills</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button href="/courses/cultural-education" variant="outline" className="w-full justify-center bg-green-600 hover:bg-green-700 text-white border-0">
                    Explore Cultural Programs
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="/courses"
            className="px-8"
          >
            View All Our Programs
          </Button>
        </div>
      </Section>
    </>
  );
}

// Data for the home page sections
const popularCourses = [
  {
    title: "Master of Business Administration",
    description: "Develop the skills and knowledge needed to excel in today's dynamic business environment.",
    image: "/images/business.jpg",
    href: "/courses/mba",
    price: "£12,500",
    duration: "12 Months"
  },
  {
    title: "Computer Science & AI",
    description: "Learn cutting-edge technologies, programming languages, and artificial intelligence applications.",
    image: "/images/data-science.jpg",
    href: "/courses/computer-science",
    price: "£14,000",
    duration: "12 Months"
  },
  {
    title: "International Relations",
    description: "Understand global politics, diplomacy, and international organizations in today's complex world.",
    image: "/images/marketing.jpg",
    href: "/courses/international-relations",
    price: "£11,800",
    duration: "12 Months"
  }
];

const latestNews = [
  {
    id: "1",
    title: "Royal Academy UK Ranked Top 20 in Global Education Index",
    excerpt: "Our institution has been recognized for excellence in education, research, and student satisfaction in the latest global rankings.",
    date: "15 Oct"
  },
  {
    id: "2",
    title: "New AI Research Center Opening in Spring 2023",
    excerpt: "We're excited to announce the launch of our state-of-the-art AI Research Center, funded by a £5 million investment.",
    date: "28 Sep"
  },
  {
    id: "3",
    title: "International Scholarship Program Expanded for Next Academic Year",
    excerpt: "Royal Academy UK is increasing its scholarship offerings for international students, with 50 new fully-funded positions.",
    date: "10 Sep"
  }
];

const testimonials = [
  {
    name: "Emma Thompson",
    program: "MBA",
    year: "2022",
    image: "/images/testimonial-1.jpg",
    quote: "My experience at Royal Academy UK transformed my career. The world-class faculty and international network opened doors I never thought possible."
  },
  {
    name: "James Wilson",
    program: "Computer Science",
    year: "2021",
    image: "/images/testimonial-2.jpg",
    quote: "The hands-on experience and cutting-edge curriculum prepared me perfectly for the tech industry. I secured a job at a leading tech company before graduation."
  },
  {
    name: "Sarah Ahmed",
    program: "International Relations",
    year: "2022",
    image: "/images/testimonial-3.jpg",
    quote: "Studying at Royal Academy UK provided me with a global perspective and critical skills that set me apart in the diplomatic community."
  }
];

const events = [
  {
    id: "1",
    title: "Technology Innovation Summit",
    description: "Join industry leaders to discuss the future of technology and its impact on society.",
    image: "/images/digital-marketing-workshop.jpg",
    date: { month: "Nov", day: "12" },
    time: "10:00 AM - 4:00 PM",
    category: "Conference"
  },
  {
    id: "2",
    title: "International Students Welcome Day",
    description: "A special orientation event for our international students to connect and learn about campus resources.",
    image: "/images/leadership-seminar.jpg",
    date: { month: "Nov", day: "18" },
    time: "9:30 AM - 2:00 PM",
    category: "Orientation"
  },
  {
    id: "3",
    title: "Business Leadership Masterclass",
    description: "An exclusive workshop with CEO Sarah Johnson on developing effective leadership strategies.",
    image: "/images/graduation-ceremony.jpg",
    date: { month: "Nov", day: "25" },
    time: "2:00 PM - 5:30 PM",
    category: "Workshop"
  }
];

// Define CourseCard component inside the file below all existing code
interface CourseType {
  title: string;
  description: string;
  image: string;
  href: string;
  price: string;
  duration: string;
}

const CourseCard = ({ course, index }: { course: CourseType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/15 h-full flex flex-col transform group-hover:translate-y-[-5px]">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-darkblue px-3 py-1 rounded-full font-medium text-sm">
            {course.duration}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{course.title}</h3>
          <p className="text-white/80 mb-5 flex-grow">{course.description}</p>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-white/90 ml-1 text-sm">5.0</span>
              </div>
              <span className="text-gold font-bold">{course.price}</span>
            </div>
            
            <Link href={course.href}>
              <div className="bg-white/10 hover:bg-white/20 text-white text-center py-3 rounded-lg transition-colors duration-300 font-medium">
                View Course <FaArrowRight className="ml-1 inline-block" size={12} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Course Categories data
const courseCategories = [
  {
    name: "Business",
    href: "/courses/business",
    icon: <FaChartLine className="w-6 h-6" />,
    courseCount: 24,
    bgColor: "bg-blue-700"
  },
  {
    name: "Computer Science",
    href: "/courses/computer-science",
    icon: <FaLaptopCode className="w-6 h-6" />,
    courseCount: 18,
    bgColor: "bg-purple-700"
  },
  {
    name: "Data Science",
    href: "/courses/data-science",
    icon: <FaChartPie className="w-6 h-6" />,
    courseCount: 12,
    bgColor: "bg-green-700"
  },
  {
    name: "Design",
    href: "/courses/design",
    icon: <FaPalette className="w-6 h-6" />,
    courseCount: 15,
    bgColor: "bg-pink-700"
  },
  {
    name: "Marketing",
    href: "/courses/marketing",
    icon: <FaBullhorn className="w-6 h-6" />,
    courseCount: 9,
    bgColor: "bg-yellow-700"
  },
  {
    name: "Law",
    href: "/courses/law",
    icon: <FaBalanceScale className="w-6 h-6" />,
    courseCount: 7,
    bgColor: "bg-red-700"
  }
];
