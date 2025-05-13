"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassCard3D } from "@/components/ui/GlassCard3D";
import { ShinyText } from "@/components/ui/ShinyText";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { FaBook, FaLaptop, FaUsers, FaGlobe, FaChalkboardTeacher, FaCertificate, FaBuilding, FaHandshake, FaGraduationCap, FaAward } from "react-icons/fa";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesPage() {
  const { t, isRTL } = useTranslation();
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });
  
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
                  Comprehensive Support
                </span>
                  
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Our<br />
                  <ShinyText 
                    text="Premium Services"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Discover the comprehensive range of educational services offered by Royal Academy UK to support your academic and professional journey.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="#main-services" 
                    className="px-8 py-3.5 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
                  >
                    Explore Services
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
                    src="/images/services-hero.jpg"
                    alt="Royal Academy UK Services"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
                </div>
      
                {/* Floating card - Satisfaction */}
                <motion.div
                  className="absolute -top-6 -left-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Satisfaction</h3>
                      <p className="text-2xl font-bold text-darkblue">97%</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating card - Quality */}
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
                      <h3 className="text-sm font-semibold text-gray-800">Quality Rating</h3>
                      <p className="text-lg font-bold text-darkblue">Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/10" />
          </div>
        )}
      </div>

      {/* Main Services */}
      <div id="main-services" ref={featuredRef} className="relative overflow-hidden bg-white dark:bg-dark-background pt-20 pb-24">
        <ParallaxBackground className="opacity-5" />
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue dark:text-white mb-4">
              Educational Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Explore our core services designed to enhance your learning experience and support your academic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  imageAlt={service.title}
                  variant="elevated"
                  href={service.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="relative bg-gradient-to-b from-darkblue-lighter to-darkblue py-20 overflow-hidden">
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/5" />
          </div>
        )}
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
              Student Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Services
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100">
              We're committed to supporting your success throughout your educational journey with these specialized services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard3D
                  title={service.title}
                  description={service.description}
                  icon={<service.icon className="w-6 h-6 text-gold" />}
                  variant="dark"
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Services */}
      <Section
        title="Corporate Services"
        subtitle="Partner with Royal Academy UK to develop your organization's talent and capabilities"
        background="white"
        pattern={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-darkblue dark:text-white">Custom Training Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Royal Academy UK offers tailored corporate training programs to help businesses develop their workforce and address specific organizational needs. Our expert faculty works closely with your team to design and deliver customized training solutions that align with your strategic objectives.
            </p>
            <div className="space-y-4">
              {corporateServices.map((service, index) => (
                <div key={service} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{service}</p>
                </div>
              ))}
            </div>
            <Button href="/contact" variant="primary">Request Corporate Services</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/corporate-training.jpg"
              alt="Corporate training session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      {/* Service Process */}
      <Section
        title="Our Service Process"
        subtitle="How we deliver exceptional educational experiences"
        background="light"
      >
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-silver-200 dark:bg-dark-border -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white dark:bg-dark-card p-6 rounded-lg border border-silver-200 dark:border-dark-border shadow-sm text-center"
              >
                <div className="w-16 h-16 mx-auto bg-darkblue rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold border-4 border-white dark:border-dark-card">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-darkblue dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        background="white"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-silver-200 dark:border-dark-border"
            >
              <h3 className="text-lg font-semibold mb-3 text-darkblue dark:text-blue-300">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-300 mb-4">Don't see your question? Contact our support team for assistance.</p>
          <Button href="/contact" variant="primary">Contact Support</Button>
        </div>
      </Section>
      
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our comprehensive educational services and how we can support your academic journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                className="px-8"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/courses"
                className="px-8 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
              >
                Explore Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Data
const mainServices = [
  {
    title: "Academic Programs",
    description: "Discover our diverse range of undergraduate, postgraduate, and doctoral programs designed to prepare you for success in your chosen field.",
    image: "/images/classroom.jpg",
    href: "/courses",
    icon: <FaGraduationCap className="h-6 w-6" />
  },
  {
    title: "Start and Improve Your Business (SIYB)",
    description: "Comprehensive business development training programs certified by the International Labour Organization (ILO).",
    image: "/images/business.jpg",
    href: "/services/siyb",
    icon: <FaBuilding className="h-6 w-6" />
  },
  {
    title: "Professional Training",
    description: "Enhance your skills and advance your career with our specialized professional development courses and workshops.",
    image: "/images/data-science.jpg",
    href: "/services/professional-training",
    icon: <FaLaptop className="h-6 w-6" />
  },
  {
    title: "Cultural Exchange",
    description: "Broaden your horizons through our international exchange programs, language courses, and cultural immersion experiences.",
    image: "/images/featured-testimonial.jpg",
    href: "/services/cultural-exchange",
    icon: <FaGlobe className="h-6 w-6" />
  },
  {
    title: "Student Support",
    description: "Access comprehensive support services including academic advising, career counseling, and personal development resources.",
    image: "/images/student-affairs.jpg",
    href: "/services/student-support",
    icon: <FaUsers className="h-6 w-6" />
  },
  {
    title: "Certification Programs",
    description: "Earn internationally recognized certifications that validate your expertise and enhance your employability in the global job market.",
    image: "/images/certificate-hero.jpg",
    href: "/certificate",
    icon: <FaCertificate className="h-6 w-6" />
  }
];

// Data for support services
const supportServices = [
  {
    title: "Academic Advising",
    description: "Personalized guidance to help you navigate your academic journey and make informed decisions.",
    icon: FaGraduationCap
  },
  {
    title: "Library Resources",
    description: "Access to extensive digital and physical learning materials, research databases, and study spaces.",
    icon: FaBook
  },
  {
    title: "Technology Support",
    description: "Technical assistance and access to state-of-the-art computing resources and software.",
    icon: FaLaptop
  },
  {
    title: "Student Wellbeing",
    description: "Comprehensive support services for your mental health, physical wellbeing, and personal development.",
    icon: FaUsers
  }
];

// Corporate services
const corporateServices = [
  "Executive Education Programs",
  "Custom Corporate Training",
  "Consulting Services",
  "Leadership Development",
  "Industry Partnerships",
  "Research Collaboration"
];

// Service process steps
const serviceProcess = [
  {
    title: "Consultation",
    description: "We begin with understanding your specific needs and goals through personalized consultation."
  },
  {
    title: "Customization",
    description: "Our expert team develops tailored solutions designed to address your unique requirements."
  },
  {
    title: "Delivery",
    description: "We provide high-quality educational services through various formats and channels."
  },
  {
    title: "Ongoing Support",
    description: "We offer continuous assistance, follow-up, and resources to ensure your success."
  }
];

// FAQs
const faqs = [
  {
    question: "What student support services are available?",
    answer: "We offer a comprehensive range of support services including academic advising, career counseling, library resources, technology support, and wellbeing services to ensure all aspects of your educational journey are supported."
  },
  {
    question: "How can I access online learning resources?",
    answer: "All enrolled students receive access to our online learning platform where you can access course materials, virtual classrooms, digital libraries, and interactive learning tools using your student credentials."
  },
  {
    question: "Do you offer corporate training programs?",
    answer: "Yes, we provide customized corporate training solutions tailored to meet the specific needs of organizations. These include executive education, leadership development, specialized technical training, and team-building programs."
  },
  {
    question: "Can international students access all services?",
    answer: "Absolutely. International students have full access to all services, plus additional specialized support including visa assistance, cultural integration programs, language support, and international student advising."
  },
  {
    question: "How do I request academic accommodations?",
    answer: "Students requiring academic accommodations should contact our Student Support Services office. We provide a confidential process for requesting and implementing appropriate accommodations based on documented needs."
  }
]; 