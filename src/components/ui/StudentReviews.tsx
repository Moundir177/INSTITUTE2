import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaLinkedin } from 'react-icons/fa';

type Review = {
  id: string;
  name: string;
  role: string;
  course: string;
  category: string;
  image: string;
  rating: number;
  content: string;
  date: string;
  linkedIn?: string;
};

const reviews: Review[] = [
  {
    id: '1',
    name: 'James Wilson',
    role: 'Software Engineer',
    course: 'Web Development Bootcamp',
    category: 'technology',
    image: '/images/testimonials/student1.jpg',
    rating: 5,
    content: 'The instructors at Royal Academy UK are world-class professionals. The Web Development Bootcamp was intense but extremely rewarding. I landed a job at a top tech company within weeks of graduating.',
    date: '2023-10-15',
    linkedIn: 'https://linkedin.com/in/jameswilson'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    course: 'Digital Marketing Masterclass',
    category: 'business',
    image: '/images/testimonials/student2.jpg',
    rating: 5,
    content: 'The Digital Marketing course equipped me with cutting-edge strategies that I immediately implemented in my role. The ROI on this education was immediate and substantial.',
    date: '2023-09-22'
  },
  {
    id: '3',
    name: 'Ahmed Hassan',
    role: 'Data Scientist',
    course: 'Machine Learning Specialization',
    category: 'technology',
    image: '/images/testimonials/student3.jpg',
    rating: 4,
    content: 'The depth of knowledge and practical applications taught in the Machine Learning course were impressive. The instructors made complex concepts accessible and engaging.',
    date: '2023-11-03',
    linkedIn: 'https://linkedin.com/in/ahmedhassan'
  },
  {
    id: '4',
    name: 'Emma Clarke',
    role: 'Healthcare Administrator',
    course: 'Healthcare Management',
    category: 'healthcare',
    image: '/images/testimonials/student4.jpg',
    rating: 5,
    content: 'As someone working in healthcare administration, this course provided me with the exact skills I needed to advance in my career. The case studies were particularly valuable.',
    date: '2023-08-17'
  },
  {
    id: '5',
    name: 'Michael Zhang',
    role: 'Finance Analyst',
    course: 'Financial Analysis & Valuation',
    category: 'finance',
    image: '/images/testimonials/student5.jpg',
    rating: 5,
    content: 'The Financial Analysis course exceeded my expectations. The practical exercises using real-world data helped me develop skills I use daily in my role at an investment bank.',
    date: '2023-10-30',
    linkedIn: 'https://linkedin.com/in/michaelzhang'
  },
  {
    id: '6',
    name: 'Priya Patel',
    role: 'UX Designer',
    course: 'User Experience Design',
    category: 'design',
    image: '/images/testimonials/student6.jpg',
    rating: 4,
    content: 'The UX Design program perfectly balanced theory and practice. I built a portfolio of real projects that impressed my current employer during interviews.',
    date: '2023-09-05'
  }
];

interface StudentReviewsProps {
  limit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export const StudentReviews = ({ 
  limit = 6,
  showFilters = true,
  title = "Student Success Stories",
  subtitle = "Hear what our graduates have to say about their experience at Royal Academy UK"
}: StudentReviewsProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'technology', label: 'Technology' },
    { id: 'business', label: 'Business' },
    { id: 'finance', label: 'Finance' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'design', label: 'Design' }
  ];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredReviews(reviews.slice(0, limit));
    } else {
      setFilteredReviews(
        reviews
          .filter(review => review.category === activeFilter)
          .slice(0, limit)
      );
    }
  }, [activeFilter, limit]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-lg`} 
      />
    ));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkblue">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-darkblue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative"
              >
                <FaQuoteLeft className="absolute top-6 right-6 text-gray-200 text-3xl" />
                
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-darkblue">
                    <Image 
                      src={review.image} 
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-700 mb-4">{review.content}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-darkblue font-medium">{review.course}</span>
                  {review.linkedIn && (
                    <a 
                      href={review.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}; 