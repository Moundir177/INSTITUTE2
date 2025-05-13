"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard3D } from "@/components/ui/GlassCard3D";
import { ShinyText } from "@/components/ui/ShinyText";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { FaGraduationCap, FaAward, FaGlobe, FaUniversity, FaChartLine, FaUsers, 
  FaHandshake, FaBookReader, FaChalkboardTeacher, FaLightbulb, 
  FaSeedling, FaBalanceScale } from "react-icons/fa";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";

export default function AboutPage() {
  const { t, isRTL } = useTranslation();
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.2 });
  
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  
  // Stats data
  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "250+", label: "Expert Faculty" },
    { number: "25,000+", label: "Alumni Worldwide" },
    { number: "98%", label: "Employment Rate" }
  ];
  
  // Timeline events
  const timelineEvents = [
    {
      year: "1995",
      title: "Foundation",
      description: "Royal Academy UK was established with a vision to provide world-class education."
    },
    {
      year: "2005",
      title: "International Expansion",
      description: "Opened our doors to international students and established global partnerships."
    },
    {
      year: "2010",
      title: "Research Excellence",
      description: "Recognized for outstanding contributions to research and innovation."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched online learning platforms and expanded digital resources."
    },
    {
      year: "2020",
      title: "Next Generation Campus",
      description: "Inaugurated our state-of-the-art campus with cutting-edge facilities."
    }
  ];
  
  // Core values
  const coreValues = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-gold" />,
      title: "Excellence",
      description: "We strive for the highest standards in teaching, research, and institutional practices."
    },
    {
      icon: <FaBalanceScale className="w-6 h-6 text-gold" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our academic and administrative endeavors."
    },
    {
      icon: <FaGlobe className="w-6 h-6 text-gold" />,
      title: "Global Perspective",
      description: "We embrace diversity and prepare students for a globally interconnected world."
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-gold" />,
      title: "Collaboration",
      description: "We foster partnerships and teamwork to achieve collective goals and innovations."
    },
    {
      icon: <FaSeedling className="w-6 h-6 text-gold" />,
      title: "Innovation",
      description: "We encourage creative thinking and novel approaches to education and research."
    },
    {
      icon: <FaUsers className="w-6 h-6 text-gold" />,
      title: "Community",
      description: "We build an inclusive environment where everyone feels valued and supported."
    }
  ];
  
  // Leadership team
  const leadershipTeam = [
    {
      name: "Dr. Margaret Williams",
      title: "President",
      image: "/images/ceo.jpg",
      bio: "Dr. Williams brings over 25 years of experience in higher education leadership."
    },
    {
      name: "Prof. James Chen",
      title: "Vice President, Academic Affairs",
      image: "/images/academic-director.jpg",
      bio: "Leading our academic excellence initiatives and curriculum development."
    },
    {
      name: "Dr. Sophia Rodriguez",
      title: "Dean of Research",
      image: "/images/research-director.jpg",
      bio: "Driving innovation and research collaborations across disciplines."
    },
    {
      name: "Mr. Robert Johnson",
      title: "Chief Operations Officer",
      image: "/images/coo.jpg",
      bio: "Ensuring operational excellence and sustainable institutional growth."
    }
  ];
  
  return (
    <>
      {/* Hero Section with Advanced Design */}
      <div className="relative min-h-[75vh] bg-gradient-to-b from-darkblue via-darkblue-lighter to-darkblue overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {!shouldReduceMotion && (
            <>
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-pattern.png')] bg-repeat opacity-5"></div>
              <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
              <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
            </>
          )}
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20 min-h-[75vh] flex flex-col justify-center">
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
                  About <br />
                  <ShinyText 
                    text="Royal Academy UK"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Discover our rich history, mission, values, and the passionate people behind our institution's commitment to educational excellence.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="#mission" 
                    className="px-8 py-3.5 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
                  >
                    Our Mission
                  </Button>
                    
                  <Button 
                    variant="outline" 
                    size="lg" 
                    href="/contact" 
                    className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-3.5 text-base font-medium"
                  >
                    Contact Us
                  </Button>
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
                    src="/images/about-hero.jpg"
                    alt="Greenwich Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating card - History */}
                <motion.div
                  className="absolute -top-6 -left-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaUniversity className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Established</h3>
                      <p className="text-2xl font-bold text-darkblue">1995</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating card - Ranking */}
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
                      <h3 className="text-sm font-semibold text-gray-800">Recognition</h3>
                      <p className="text-lg font-bold text-darkblue">Award Winning</p>
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
          
          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/10" />
          </div>
        )}
      </div>
      
      {/* Mission & Vision Section */}
      <div id="mission" ref={missionRef} className="relative overflow-hidden bg-white dark:bg-dark-background pt-20 pb-24">
        <ParallaxBackground className="opacity-5" />
        
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={isRTL ? 'rtl text-right' : ''}
            >
              <span className="inline-block px-4 py-1.5 mb-6 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
                Our Purpose
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-darkblue dark:text-white">
                Mission & Vision
              </h2>
              
              <div className="bg-gradient-to-r from-gold/20 to-gold/5 border-l-4 border-gold p-4 mb-6 rounded-r-lg">
                <p className="text-xl italic text-gray-700 dark:text-white">
                  "To provide transformative education that empowers students to become leaders who make a positive impact on society."
                </p>
              </div>
              
              <p className="text-gray-600 mb-4 dark:text-gray-300 text-lg">
                At Royal Academy UK, we are dedicated to fostering an environment where innovation, critical thinking, and practical skills converge to create well-rounded graduates ready to meet global challenges.
              </p>
              
              <p className="text-gray-600 mb-8 dark:text-gray-300">
                Our vision is to be a leading educational institution recognized worldwide for academic excellence, impactful research, and graduates who are catalysts for positive change in their communities.
              </p>
              
              <Button
                variant="primary"
                href="/philosophy"
                className="px-6"
              >
                Our Educational Philosophy
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isMissionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-darkblue/80 backdrop-blur-sm rounded-lg transform -rotate-3 scale-[0.97]"></div>
                <Image
                  src="/images/campus-main.jpg"
                  alt="Royal Academy UK Main Building"
                  fill
                  className="object-cover rounded-lg shadow-lg transform rotate-3 scale-105"
                />
              </div>
              
              {/* Overlay badge */}
              <div className="absolute -top-5 -right-5 bg-white dark:bg-dark-card rounded-full p-3 shadow-lg">
                <FaGraduationCap className="text-gold w-8 h-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section */}
      <div ref={valuesRef} className="relative bg-gradient-to-b from-darkblue-lighter to-darkblue py-20 overflow-hidden">
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/5" />
          </div>
        )}
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-white font-medium">
              These principles guide everything we do, from how we teach to how we engage with our community and the wider world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard3D
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  variant="dark"
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <Section
        title="Our Journey"
        subtitle="The evolution of Royal Academy UK through the years"
        background="white"
        className="py-20"
      >
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue-200 dark:bg-dark-border"></div>
          
          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''} ${isRTL ? 'rtl' : ''}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                <h3 className="text-xl font-bold text-darkblue dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white dark:bg-dark-card rounded-full border-4 border-brand-blue-500 dark:border-dark-primary flex items-center justify-center shadow-lg">
                <span className="font-bold text-darkblue dark:text-white text-lg">{event.year}</span>
              </div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Leadership Team */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue dark:text-white mb-4">
              Leadership
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Our experienced leadership team is committed to maintaining the highest standards of academic excellence and institutional integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/90 via-darkblue/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sm text-blue-100">{leader.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-darkblue to-darkblue-lighter py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our community of scholars, innovators, and leaders shaping the future of education and society.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/courses"
                className="px-8"
              >
                Explore Programs
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="px-8 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 