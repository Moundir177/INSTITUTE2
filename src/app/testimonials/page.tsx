"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaQuoteRight, FaStar, FaStarHalfAlt, FaGraduationCap, FaBriefcase, FaGlobe } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  program: string;
  graduationYear: string;
  quote: string;
  image: string;
  rating: number;
  featured?: boolean;
  category: 'undergraduate' | 'postgraduate' | 'professional' | 'international';
}

export default function TestimonialsPage() {
  const { t, isRTL } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Testimonial categories
  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'undergraduate', name: 'Undergraduate', icon: <FaGraduationCap /> },
    { id: 'postgraduate', name: 'Postgraduate', icon: <FaGraduationCap /> },
    { id: 'professional', name: 'Professional Courses', icon: <FaBriefcase /> },
    { id: 'international', name: 'International Students', icon: <FaGlobe /> },
  ];
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Emma Thompson',
      role: 'Marketing Director',
      company: 'Global Media Ltd',
      program: 'Master of Business Administration',
      graduationYear: '2021',
      quote: 'Greenwich transformed my career trajectory. The MBA program provided me with the strategic thinking skills and global business perspective that I use daily in my role. The professors brought real-world experience into the classroom, and the network I built has been invaluable. I secured my current position before graduation thanks to the career services team.',
      image: '/images/avatar1.jpg',
      rating: 5,
      featured: true,
      category: 'postgraduate'
    },
    {
      id: '2',
      name: 'James Wilson',
      role: 'Software Engineer',
      company: 'Tech Innovations',
      program: 'BSc Computer Science',
      graduationYear: '2022',
      quote: 'The hands-on approach to learning at Greenwich prepared me perfectly for the tech industry. The cutting-edge curriculum, combined with practical projects and internship opportunities, gave me a competitive edge. The dedicated faculty were always available to provide guidance, and the state-of-the-art facilities allowed me to experiment with the latest technologies.',
      image: '/images/avatar2.jpg',
      rating: 5,
      category: 'undergraduate'
    },
    {
      id: '3',
      name: 'Sarah Ahmed',
      role: 'Policy Advisor',
      company: 'International Affairs Institute',
      program: 'MA International Relations',
      graduationYear: '2020',
      quote: 'Studying at Greenwich provided me with a global perspective that has been essential in my diplomatic career. The diverse student body and internationally recognized faculty created a rich learning environment where different viewpoints were respected and explored. The emphasis on critical thinking and practical application of theories prepared me for the complexities of international policy work.',
      image: '/images/avatar3.jpg',
      rating: 4.5,
      featured: true,
      category: 'postgraduate'
    },
    {
      id: '4',
      name: 'David Chen',
      role: 'Financial Analyst',
      company: 'Global Banking Group',
      program: 'Professional Certificate in Financial Analysis',
      graduationYear: '2023',
      quote: 'The Professional Certificate in Financial Analysis at Greenwich exceeded my expectations. As a working professional, I appreciated the flexible schedule and the immediately applicable skills I gained. The program perfectly balanced theoretical knowledge with practical case studies, and the industry connections provided valuable networking opportunities that helped me secure a promotion.',
      image: '/images/avatar4.jpg',
      rating: 5,
      category: 'professional'
    },
    {
      id: '5',
      name: 'Maria Rodriguez',
      role: 'PhD Candidate',
      company: 'University of Barcelona',
      program: 'BSc Biochemistry',
      graduationYear: '2019',
      quote: "Coming from Spain to study at Greenwich was one of the best decisions I've made. The international student support services made my transition seamless, from visa assistance to housing arrangements. The quality of education and research opportunities were exceptional, which helped me secure a fully-funded PhD position after graduation.",
      image: '/images/avatar5.jpg',
      rating: 5,
      category: 'international'
    },
    {
      id: '6',
      name: 'John Okafor',
      role: 'Entrepreneur',
      company: 'Tech Solutions Africa',
      program: 'MSc Innovation and Entrepreneurship',
      graduationYear: '2018',
      quote: 'Greenwich fostered my entrepreneurial spirit and gave me the tools to build my own company. The practical approach to learning, mentorship programs, and access to startup incubators were instrumental in transforming my business idea into reality. The diverse perspectives from classmates around the world helped me develop a global mindset that shapes my business strategy today.',
      image: '/images/avatar6.jpg',
      rating: 4.5,
      category: 'international'
    },
    {
      id: '7',
      name: 'Sophie Taylor',
      role: 'Human Resources Manager',
      company: 'Retail Enterprises',
      program: 'Professional Certificate in HR Management',
      graduationYear: '2022',
      quote: 'The HR Management certificate program at Greenwich allowed me to upskill while continuing my career. The curriculum was current and relevant, focusing on emerging trends in the field. The faculty were industry professionals who shared valuable insights from their experience. I was able to implement new strategies at my workplace immediately, which led to a promotion within six months of completing the program.',
      image: '/images/avatar7.jpg',
      rating: 4,
      category: 'professional'
    },
    {
      id: '8',
      name: 'Alex Johnson',
      role: 'Digital Marketing Specialist',
      company: 'Creative Agency',
      program: 'BSc Marketing',
      graduationYear: '2021',
      quote: 'My undergraduate experience at Greenwich was transformative. The marketing program perfectly balanced theoretical foundations with practical applications, including real client projects and industry placements. The campus life was vibrant, with numerous clubs and societies that enhanced my university experience. The career support services were excellent, helping me secure my first role before graduation.',
      image: '/images/avatar8.jpg',
      rating: 5,
      category: 'undergraduate'
    }
  ];
  
  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeFilter);
  
  // Featured testimonials
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);
  
  // Render rating stars
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-gold" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-gold" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300 dark:text-gray-600" />);
    }
    
    return stars;
  };

  return (
    <>
      <Hero
        title="Student Success Stories"
        description="Hear from our graduates about their experiences and achievements"
        imageSrc="/images/testimonials-hero.jpg"
        imageAlt="Greenwich Graduates"
        pattern={true}
      />
      
      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <Section background="dark">
          <h2 className={`text-3xl font-bold mb-12 text-center text-white ${isRTL ? 'rtl' : ''}`}>
            Featured Success Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 ${isRTL ? 'rtl text-right' : ''}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-1">
                      {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                    </p>
                    <p className="text-white/70 text-sm mb-2">
                      {testimonial.program}, Class of {testimonial.graduationYear}
                    </p>
                    <div className="flex">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <FaQuoteRight className="absolute top-0 left-0 text-white/10 text-4xl" />
                  <p className="text-white/90 pt-8 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
      
      {/* Testimonial Filters */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center text-darkblue dark:text-dark-text-primary ${isRTL ? 'rtl' : ''}`}>
            Hear From Our Students
          </h2>
          
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isRTL ? 'rtl' : ''}`}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-darkblue text-white dark:bg-dark-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-card dark:text-dark-text-secondary dark:hover:bg-dark-border/50'
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-dark-card p-6 rounded-lg shadow-md border border-gray-200 dark:border-dark-border h-full flex flex-col ${isRTL ? 'rtl text-right' : ''}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-darkblue dark:text-dark-highlight">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                      {testimonial.program}
                    </p>
                    <div className="flex mt-1">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4">
                    "{testimonial.quote.length > 150 
                      ? `${testimonial.quote.substring(0, 150)}...` 
                      : testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                  <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                    <span className="font-medium">{testimonial.role}</span>
                    {testimonial.company ? ` at ${testimonial.company}` : ''}
                  </p>
                  <p className="text-gray-500 dark:text-dark-text-muted text-sm">
                    Class of {testimonial.graduationYear}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-dark-text-secondary">
                No testimonials found for this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </Section>
      
      {/* Share Your Story */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={isRTL ? 'rtl' : ''}
          >
            <h2 className="text-3xl font-bold mb-4 text-darkblue dark:text-dark-text-primary">
              Share Your Success Story
            </h2>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-8">
              Are you a Greenwich graduate with a story to tell? We'd love to hear about your experience and achievements since graduation. Your journey could inspire future students.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/share-your-story"
            >
              Submit Your Story
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
} 