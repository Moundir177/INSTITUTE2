import React, { useState } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type FeatureType = {
  id: string;
  name: string;
  description?: string;
};

type CourseType = {
  id: string;
  name: string;
  price: string;
  duration: string;
  level: string;
  description: string;
  features: Record<string, boolean>;
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

interface CourseComparisonProps {
  title?: string;
  subtitle?: string;
  courses: CourseType[];
  features: FeatureType[];
}

export const CourseComparison = ({
  title = "Compare Our Courses",
  subtitle = "Find the perfect course that matches your goals and requirements",
  courses,
  features
}: CourseComparisonProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  
  // Get feature description by ID
  const getFeatureDescription = (featureId: string): string => {
    const feature = features.find(f => f.id === featureId);
    return feature?.description || '';
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkblue">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Header */}
            <thead>
              <tr>
                <th className="bg-gray-50 border-b border-gray-200 px-6 py-4 text-left w-1/4"></th>
                {courses.map((course) => (
                  <th 
                    key={course.id} 
                    className={`border-b border-gray-200 px-6 py-4 text-center ${
                      course.popular ? 'bg-blue-50 dark:bg-blue-900/10' : 'bg-white'
                    }`}
                  >
                    <div className="relative">
                      {course.popular && (
                        <div className="absolute -top-4 left-0 right-0 mx-auto">
                          <span className="bg-gold text-white text-xs font-bold py-1 px-3 rounded-full shadow-sm">
                            MOST POPULAR
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-darkblue">{course.name}</h3>
                      <p className="text-2xl font-bold mt-2">{course.price}</p>
                      <div className="flex flex-col gap-1 mt-4 text-sm text-gray-600">
                        <p>{course.duration}</p>
                        <p>{course.level}</p>
                      </div>
                      <p className="mt-4 text-sm">{course.description}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Body */}
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td 
                    className="px-6 py-4 font-medium relative"
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-center">
                      {feature.name}
                      {feature.description && (
                        <div className="ml-2 text-gray-400 cursor-help">
                          <FaInfoCircle size={16} />
                          
                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredFeature === feature.id && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 top-full mt-2 z-10 p-3 bg-white rounded-lg shadow-lg border border-gray-200 w-64 text-sm text-gray-600"
                              >
                                {feature.description}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </td>
                  
                  {courses.map((course) => (
                    <td 
                      key={`${course.id}-${feature.id}`} 
                      className={`px-6 py-4 text-center ${
                        course.popular ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                      }`}
                    >
                      {course.features[feature.id] ? (
                        <FaCheck className="mx-auto text-green-500" />
                      ) : (
                        <FaTimes className="mx-auto text-red-400" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* CTA Row */}
              <tr>
                <td className="px-6 py-8 bg-gray-50"></td>
                {courses.map((course) => (
                  <td 
                    key={`${course.id}-cta`} 
                    className={`px-6 py-8 text-center ${
                      course.popular ? 'bg-blue-50 dark:bg-blue-900/10' : 'bg-white'
                    }`}
                  >
                    <motion.a
                      href={course.buttonLink || '/courses'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block px-6 py-3 rounded-full font-medium ${
                        course.popular 
                          ? 'bg-darkblue text-white hover:bg-darkblue/90' 
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      } transition-colors`}
                    >
                      {course.buttonText || 'Learn More'}
                    </motion.a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Example usage:
// const features = [
//   { id: 'cert', name: 'Certification', description: 'Receive an accredited certificate upon completion' },
//   { id: 'mentor', name: 'Mentorship', description: 'One-on-one mentorship with industry experts' },
//   { id: 'projects', name: 'Real Projects', description: 'Work on real-world projects for your portfolio' },
//   { id: 'career', name: 'Career Support', description: 'Get job placement assistance and career guidance' },
//   { id: 'community', name: 'Community Access', description: 'Join our exclusive community of professionals' },
// ];
//
// const courses = [
//   {
//     id: 'basic',
//     name: 'Foundation Course',
//     price: '£499',
//     duration: '3 months',
//     level: 'Beginner',
//     description: 'Perfect for those just starting their journey',
//     features: { cert: true, mentor: false, projects: true, career: false, community: true },
//     buttonText: 'Enroll Now',
//     buttonLink: '/courses/foundation'
//   },
//   {
//     id: 'advanced',
//     name: 'Advanced Program',
//     price: '£899',
//     duration: '6 months',
//     level: 'Intermediate',
//     description: 'Take your skills to the next level',
//     features: { cert: true, mentor: true, projects: true, career: false, community: true },
//     popular: true,
//     buttonText: 'Enroll Now',
//     buttonLink: '/courses/advanced'
//   },
//   {
//     id: 'pro',
//     name: 'Professional Track',
//     price: '£1,299',
//     duration: '9 months',
//     level: 'Advanced',
//     description: 'Comprehensive training for industry professionals',
//     features: { cert: true, mentor: true, projects: true, career: true, community: true },
//     buttonText: 'Enroll Now',
//     buttonLink: '/courses/professional'
//   }
// ]; 