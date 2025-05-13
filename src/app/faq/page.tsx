"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ShinyText } from '@/components/ui/ShinyText';
import { FloatingElements } from '@/components/ui/FloatingElements';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { 
  ChevronDown, ChevronUp, Search, 
  BookOpen, GraduationCap, Home, Globe, CreditCard, Users 
} from 'lucide-react';
import { useAnimationConfig } from '@/hooks/useAnimationConfig';
import { FaArrowRight, FaCheck, FaGraduationCap, FaQuestionCircle, FaUniversity } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const { t, isRTL } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });

  // FAQ categories with icons
  const categories = [
    { id: 'all', name: 'All Questions', icon: <FaQuestionCircle /> },
    { id: 'admissions', name: 'Admissions', icon: <GraduationCap /> },
    { id: 'courses', name: 'Courses & Programs', icon: <BookOpen /> },
    { id: 'fees', name: 'Fees & Funding', icon: <CreditCard /> },
    { id: 'accommodation', name: 'Accommodation', icon: <Home /> },
    { id: 'international', name: 'International Students', icon: <Globe /> },
  ];

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: 'What are the entry requirements for undergraduate programs?',
      answer: 'Entry requirements vary by program, but generally include completed secondary education with good grades, English language proficiency (IELTS 6.5 or equivalent), and sometimes program-specific requirements such as portfolio or interview. For detailed requirements, please check the specific course page or contact our admissions team.',
      category: 'admissions'
    },
    {
      question: 'How do I apply for a scholarship?',
      answer: 'Scholarship applications are typically submitted alongside your program application. Visit our Scholarships page to view available options, eligibility criteria, and application deadlines. Most scholarships require academic excellence, and some may have additional requirements such as leadership experience or financial need assessment.',
      category: 'fees'
    },
    {
      question: 'Can I transfer credits from another university?',
      answer: 'Yes, we accept transfer credits from accredited institutions. The number of credits that can be transferred depends on the similarity of the courses to our curriculum and your academic performance. Submit official transcripts and course descriptions to our admissions team for evaluation.',
      category: 'admissions'
    },
    {
      question: 'How long does it take to complete a master\'s program?',
      answer: 'Most master\'s programs at Greenwich take 1-2 years to complete when studied full-time. Part-time options typically take 2-3 years. Some specialized programs may have different durations. Check the specific program page for detailed information.',
      category: 'courses'
    },
    {
      question: 'Are there payment plans available for tuition fees?',
      answer: 'Yes, we offer various payment plans to help make education more accessible. Options include installment plans (typically 2-3 payments per academic year), monthly payment plans, and employer sponsorship arrangements. Contact our finance office to discuss the options available to you.',
      category: 'fees'
    },
    {
      question: 'What accommodation options are available for students?',
      answer: 'We offer several accommodation options including on-campus residence halls, university-managed apartments, and assistance with finding private rentals. On-campus housing is guaranteed for first-year undergraduate students who apply by the priority deadline. Graduate students typically live in our apartment complexes or off-campus housing.',
      category: 'accommodation'
    },
    {
      question: 'Is there support for international students with visa applications?',
      answer: 'Yes, our International Student Services office provides comprehensive support with visa applications, including documentation guidance, visa interview preparation, and assistance throughout the process. Once accepted, you\'ll receive detailed instructions and personalized support from our dedicated advisors.',
      category: 'international'
    },
    {
      question: 'Can I work while studying?',
      answer: 'International students on a Tier 4 (Student) visa can typically work up to 20 hours per week during term time and full-time during holidays. However, work restrictions vary based on your visa type and level of study. Our career services can help you find suitable part-time opportunities that complement your studies.',
      category: 'international'
    },
    {
      question: 'What career services are available to students?',
      answer: 'Our Career Development Center offers comprehensive services including one-on-one career counseling, resume and cover letter reviews, interview preparation, networking events, job fairs, and access to our online job portal. We also arrange industry visits and have strong connections with employers across various sectors.',
      category: 'courses'
    },
    {
      question: 'Are there opportunities for internships or work placements?',
      answer: 'Yes, many of our programs include internship or work placement components. Our industry partnerships team works to secure quality opportunities for students. Additionally, our career services office can help you find internships that align with your career goals, even if they\'re not a formal part of your program.',
      category: 'courses'
    },
    {
      question: 'How do I access health services as a student?',
      answer: 'All enrolled students have access to our on-campus health center which provides primary care, mental health services, and health education. International students are covered by the National Health Service (NHS) if their course lasts six months or longer. We also offer a student health insurance plan for those who may need additional coverage.',
      category: 'international'
    },
    {
      question: 'What financial aid options are available?',
      answer: 'We offer various financial aid options including merit-based scholarships, need-based grants, work-study programs, and student loans. International students are eligible for many of our scholarships. Additionally, we can help you explore external funding sources and government aid programs that might be available to you.',
      category: 'fees'
    }
  ];

  // Filter FAQs based on search query and category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Count FAQs by category
  const categoryCount = categories.map(category => {
    if (category.id === 'all') {
      return { ...category, count: faqItems.length };
    }
    return {
      ...category,
      count: faqItems.filter(item => item.category === category.id).length
    };
  });

  return (
    <>
      {/* Hero Section with Advanced Design */}
      <div className="relative min-h-[60vh] bg-gradient-to-b from-darkblue via-darkblue-lighter to-darkblue overflow-hidden">
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
        
        <div className="container-custom relative z-10 pt-32 pb-20 min-h-[60vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero content */}
            <div>
              <motion.div
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                  Knowledge Center
                </span>
                  
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Frequently<br />
                  <ShinyText 
                    text="Asked Questions"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Find answers to common questions about our programs, admissions process, student life, and more.
                </p>
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
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/faq-hero.jpg"
                    alt="Students at Greenwich"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -left-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaQuestionCircle className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Questions</h3>
                      <p className="text-2xl font-bold text-darkblue">{faqItems.length}</p>
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
      
      {/* Search Bar - Prominent Position */}
      <div className="relative z-20 bg-white dark:bg-dark-background py-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto -mt-20 bg-white dark:bg-dark-card shadow-xl rounded-xl p-6 border border-brand-gray-200 dark:border-dark-border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-card dark:text-dark-text-primary"
                    placeholder="Search for questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Button
                variant="primary"
                className="whitespace-nowrap"
                onClick={() => setSearchQuery('')}
              >
                {searchQuery ? 'Clear Search' : 'Search FAQs'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main FAQ Content */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-brand-gray-200 dark:border-dark-border sticky top-24">
              <h3 className="text-xl font-bold text-darkblue dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categoryCount.map(category => (
                  <button
                    key={category.id}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-darkblue text-white dark:bg-dark-primary' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-card dark:border dark:border-dark-border dark:text-dark-text-secondary dark:hover:bg-dark-border/50'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="flex items-center">
                      <span className="w-5 h-5 mr-2">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20' 
                        : 'bg-gray-200 dark:bg-dark-border'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 border-t border-gray-200 dark:border-dark-border pt-6">
                <h3 className="text-xl font-bold text-darkblue dark:text-white mb-4">Need More Help?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Can't find what you're looking for? Our support team is ready to assist you.</p>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  href="/contact"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
          
          {/* FAQ Accordions */}
          <div className="lg:col-span-3" ref={featuredRef}>
            <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-6">
              {activeCategory === 'all' 
                ? 'All Questions' 
                : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            
            {searchQuery && (
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} found for "{searchQuery}"
              </p>
            )}
            
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden ${isRTL ? 'rtl text-right' : ''}`}
                  >
                    <button
                      className={`flex justify-between items-center w-full p-5 text-left transition-colors ${
                        openIndex === index
                          ? 'bg-darkblue bg-opacity-5 dark:bg-dark-card'
                          : 'bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-card/80'
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex items-start">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                          openIndex === index
                            ? 'bg-darkblue text-white'
                            : 'bg-gray-200 dark:bg-dark-border text-gray-700 dark:text-gray-300'
                        }`}>
                          <span className="text-xs font-bold">{index + 1}</span>
                        </span>
                        <span className={`font-medium ${
                          openIndex === index
                            ? 'text-darkblue dark:text-blue-400'
                            : 'text-gray-800 dark:text-white'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className={`h-5 w-5 ${
                          openIndex === index
                            ? 'text-darkblue dark:text-blue-400'
                            : 'text-gray-500 dark:text-gray-400'
                        }`} />
                      </div>
                    </button>
                    
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-5 bg-gray-50 dark:bg-dark-card/50 border-t border-gray-200 dark:border-dark-border"
                      >
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                          <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-dark-border rounded-full text-xs mr-2">
                            {categories.find(cat => cat.id === faq.category)?.name}
                          </span>
                          <span>Was this answer helpful?</span>
                          <button className="ml-2 px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md flex items-center text-xs hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                            <FaCheck className="mr-1" /> Yes
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-dark-card/50 rounded-xl border border-gray-200 dark:border-dark-border">
                <div className="w-16 h-16 bg-gray-200 dark:bg-dark-border rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  We couldn't find any questions matching your search. Please try different keywords or browse all categories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Browse All FAQs
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>
      
      {/* Popular Topics */}
      <Section background="white">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
            Quick Access
          </span>
          <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-4">
            Popular Topics
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore commonly searched topics and find the information you need quickly
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Admissions Process",
              description: "Step-by-step guide to applying for our programs, from preparation to acceptance",
              icon: <FaGraduationCap className="text-darkblue" />,
              link: "/admissions"
            },
            {
              title: "Financial Aid & Scholarships",
              description: "Information about tuition, fees, scholarships, and payment options",
              icon: <CreditCard className="text-darkblue" />,
              link: "/financial-aid"
            },
            {
              title: "Student Life",
              description: "Discover campus facilities, activities, clubs, events, and student support services",
              icon: <Users className="text-darkblue" />,
              link: "/student-life"
            },
            {
              title: "Academic Programs",
              description: "Browse our wide range of undergraduate, graduate, and professional programs",
              icon: <BookOpen className="text-darkblue" />,
              link: "/courses"
            },
            {
              title: "International Students",
              description: "Essential information for international applicants, including visa requirements",
              icon: <Globe className="text-darkblue" />,
              link: "/international"
            },
            {
              title: "Campus Facilities",
              description: "Explore our state-of-the-art facilities, libraries, labs, and accommodation options",
              icon: <FaUniversity className="text-darkblue" />,
              link: "/campus"
            }
          ].map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-blue-50 dark:bg-dark-primary/20 rounded-lg flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-darkblue dark:text-white mb-2">{topic.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{topic.description}</p>
                <a
                  href={topic.link}
                  className="inline-flex items-center text-darkblue hover:text-brand-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Learn more <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our dedicated support team is ready to assist you with any inquiries you may have about our programs, admissions process, or student life.
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
                href="/request-info"
                className="px-8 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
              >
                Request Information
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 