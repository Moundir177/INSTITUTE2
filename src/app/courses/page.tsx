"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShinyText } from "@/components/ui/ShinyText";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { FaClock, FaGraduationCap, FaFilter, FaSearch, FaTimes, FaStar, FaUsers, FaLaptop, FaUserGraduate, FaBalanceScale, FaCheckCircle, FaPoundSign, FaHeart, FaRegHeart, FaBookmark, FaEye, FaCalendarAlt, FaChalkboardTeacher, FaCertificate, FaListUl, FaHistory, FaFire, FaAward } from "react-icons/fa";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";
import { useTranslation } from "@/hooks/useTranslation";

// Sample Data
const categories = [
  {
    name: "Business",
    image: "/images/category-business.jpg",
    courseCount: 15,
    students: 1200,
    level: "All Levels"
  },
  {
    name: "Computer Science",
    image: "/images/category-cs.jpg",
    courseCount: 12,
    students: 900,
    level: "All Levels"
  },
  {
    name: "Data Science",
    image: "/images/category-data.jpg",
    courseCount: 8,
    students: 750,
    level: "Intermediate"
  },
  {
    name: "Design",
    image: "/images/category-design.jpg",
    courseCount: 10,
    students: 850,
    level: "All Levels"
  },
  {
    name: "Marketing",
    image: "/images/category-marketing.jpg",
    courseCount: 9,
    students: 780,
    level: "Beginner"
  },
  {
    name: "International Relations",
    image: "/images/category-relations.jpg",
    courseCount: 6,
    students: 450,
    level: "Advanced"
  },
  {
    name: "Healthcare",
    image: "/images/category-healthcare.jpg",
    courseCount: 8,
    students: 630,
    level: "All Levels"
  },
  {
    name: "Language Studies",
    image: "/images/category-language.jpg",
    courseCount: 14,
    students: 1100,
    level: "All Levels"
  },
  {
    name: "SIYB",
    image: "/images/category-siyb.jpg",
    courseCount: 5,
    students: 980,
    level: "All Levels"
  },
  {
    name: "Professional Development",
    image: "/images/category-professional.jpg",
    courseCount: 7,
    students: 720,
    level: "Advanced"
  }
];

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  category: string;
  format: string;
  difficulty: string;
  rating: number;
  students: number;
  popularity: number;
  trending?: boolean;
}

const courses: Course[] = [
  {
    id: "mba-executive",
    title: "Executive MBA",
    description: "Designed for experienced professionals seeking to enhance their leadership capabilities and strategic thinking. This comprehensive program combines theoretical knowledge with practical applications.",
    image: "/images/course-business.jpg",
    price: 15000,
    duration: "12 Months",
    category: "Business",
    format: "Hybrid",
    difficulty: "Advanced",
    rating: 4.8,
    students: 245,
    popularity: 98,
    trending: true
  },
  {
    id: "comp-science-ai",
    title: "Computer Science & AI",
    description: "Master the fundamentals of Computer Science with a focus on artificial intelligence and machine learning algorithms. Includes hands-on projects and industry case studies.",
    image: "/images/course-computer-science.jpg",
    price: 14000,
    duration: "12 Months",
    category: "Computer Science",
    format: "Online",
    difficulty: "Intermediate",
    rating: 4.7,
    students: 189,
    popularity: 95,
    trending: true
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Visualization",
    description: "Learn to analyze complex datasets and create compelling visualizations to communicate insights effectively. Covers statistical methods, Python, R, and visualization tools.",
    image: "/images/data-science.jpg",
    price: 10000,
    duration: "6 Months",
    category: "Data Science",
    format: "Online",
    difficulty: "Intermediate",
    rating: 4.6,
    students: 210,
    popularity: 90
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    description: "Become a proficient full stack developer with expertise in both frontend and backend technologies. Includes HTML, CSS, JavaScript, React, Node.js, and database management.",
    image: "/images/course-computer-science.jpg",
    price: 9500,
    duration: "6 Months",
    category: "Computer Science",
    format: "Online",
    difficulty: "Beginner",
    rating: 4.8,
    students: 230,
    popularity: 93,
    trending: true
  },
  // Start and Improve Your Business (SIYB) Programs
  {
    id: "siyb-find-business-idea",
    title: "Find a Successful Business Idea",
    description: "Designed for potential entrepreneurs looking to establish a business or enter the business field, seeking to acquire leadership and entrepreneurial skills and test promising ideas.",
    image: "/images/business-idea.jpg",
    price: 2500,
    duration: "4 Weeks",
    category: "SIYB",
    format: "Hybrid",
    difficulty: "Beginner",
    rating: 4.9,
    students: 315,
    popularity: 97,
    trending: true
  },
  {
    id: "siyb-start-business",
    title: "Start Your Business",
    description: "For individuals with a business idea who want to bring it to life. Provides practical steps to start and create an action plan for the proposed project.",
    image: "/images/start-business.jpg",
    price: 3000,
    duration: "6 Weeks",
    category: "SIYB",
    format: "Hybrid",
    difficulty: "Beginner",
    rating: 4.8,
    students: 280,
    popularity: 96
  },
  {
    id: "siyb-improve-business",
    title: "Improve Your Business Management",
    description: "For business owners or managers who want to improve their business operations and management skills, covering key areas like marketing, inventory, HR, and financial management.",
    image: "/images/improve-business.jpg",
    price: 3500,
    duration: "8 Weeks",
    category: "SIYB",
    format: "Hybrid",
    difficulty: "Intermediate",
    rating: 4.7,
    students: 240,
    popularity: 94
  },
  {
    id: "siyb-expand-business",
    title: "Develop and Expand Your Business",
    description: "For business owners looking to enhance and expand their operations. Learn to set ambitious goals, develop effective business strategies, and identify growth opportunities.",
    image: "/images/expand-business.jpg",
    price: 4000,
    duration: "10 Weeks",
    category: "SIYB",
    format: "Hybrid",
    difficulty: "Advanced",
    rating: 4.8,
    students: 190,
    popularity: 92
  },
  {
    id: "trainer-consultants",
    title: "Trainer and Consultant Program (PMT/TOT)",
    description: "Leverage your expertise to serve businesses and economic institutions. Gain ILO certification and access to all training resources including manuals, PowerPoint presentations, and case studies.",
    image: "/images/trainer-program.jpg",
    price: 5000,
    duration: "12 Weeks",
    category: "Professional Development",
    format: "Hybrid",
    difficulty: "Advanced",
    rating: 4.9,
    students: 120,
    popularity: 89
  }
];

interface PopularCombination {
  name: string;
  category: string;
}

const popularCombinations: PopularCombination[] = [
  { name: "Data Science & Business", category: "Data Science" },
  { name: "Web Development & Design", category: "Computer Science" },
  { name: "Marketing & International Business", category: "Marketing" },
  { name: "MBA & Leadership", category: "Business" }
];

const recommendedCourses: string[] = [
  "data-analytics",
  "web-development"
];

export default function CoursesPage() {
  const { t, isRTL } = useTranslation();
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [coursesToCompare, setCoursesToCompare] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const [savedCourses, setSavedCourses] = useState<string[]>([]);
  const [showSavedCoursesOnly, setShowSavedCoursesOnly] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [lastSavedCourse, setLastSavedCourse] = useState<string | null>(null);
  const [previewCourse, setPreviewCourse] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  
  const coursesRef = useRef<HTMLDivElement>(null);
  
  // Mobile filter animation variants
  const filterVariants = {
    hidden: { 
      opacity: shouldReduceMotion ? 0 : 0, 
      height: 0 
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: shouldReduceMotion ? 0.1 : 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.3 }
    }
  };

  // Get min and max prices from all courses
  const minPrice = Math.min(...courses.map(course => course.price));
  const maxPrice = Math.max(...courses.map(course => course.price));

  // Load saved courses and search history from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSavedCourses = localStorage.getItem('savedCourses');
      if (storedSavedCourses) {
        setSavedCourses(JSON.parse(storedSavedCourses));
      }

      const storedSearchHistory = localStorage.getItem('courseSearchHistory');
      if (storedSearchHistory) {
        setSearchHistory(JSON.parse(storedSearchHistory));
      }
    }
  }, []);

  // Save to localStorage when savedCourses changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('savedCourses', JSON.stringify(savedCourses));
    }
  }, [savedCourses]);

  // Save to localStorage when searchHistory changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('courseSearchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  // Check if any filter is applied
  useEffect(() => {
    setIsFilterApplied(
      selectedCategory !== "All" || 
      selectedDuration !== "All" || 
      selectedFormat !== "All" || 
      selectedDifficulty !== "All" ||
      searchTerm !== "" ||
      priceRange[0] > minPrice ||
      priceRange[1] < maxPrice ||
      showSavedCoursesOnly
    );
  }, [selectedCategory, selectedDuration, selectedFormat, selectedDifficulty, searchTerm, priceRange, minPrice, maxPrice, showSavedCoursesOnly]);

  // Handle adding/removing course from saved list
  const toggleSavedCourse = (courseId: string) => {
    if (savedCourses.includes(courseId)) {
      setSavedCourses(savedCourses.filter(id => id !== courseId));
    } else {
      setSavedCourses([...savedCourses, courseId]);
      setLastSavedCourse(courseId);
      setShowSavedToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowSavedToast(false);
      }, 3000);
    }
  };

  // Filter courses based on selections
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesDuration = selectedDuration === "All" || course.duration === selectedDuration;
    const matchesFormat = selectedFormat === "All" || course.format === selectedFormat;
    const matchesDifficulty = selectedDifficulty === "All" || course.difficulty === selectedDifficulty;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesSaved = !showSavedCoursesOnly || savedCourses.includes(course.id);
    
    return matchesSearch && matchesCategory && matchesDuration && matchesFormat && matchesDifficulty && matchesPrice && matchesSaved;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "duration") return parseInt(a.duration) - parseInt(b.duration);
    // Default sort by popularity
    return b.popularity - a.popularity;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll back to top of courses section
    document.getElementById("courses-section")?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedDuration("All");
    setSelectedFormat("All");
    setSelectedDifficulty("All");
    setPriceRange([minPrice, maxPrice]);
    setShowSavedCoursesOnly(false);
  };

  // Handle price range changes
  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  // Toggle course selection for comparison
  const toggleCourseComparison = (courseId: string) => {
    if (coursesToCompare.includes(courseId)) {
      setCoursesToCompare(coursesToCompare.filter(id => id !== courseId));
    } else {
      if (coursesToCompare.length < 3) {
        setCoursesToCompare([...coursesToCompare, courseId]);
      } else {
        // Could show a toast notification here
        alert("You can compare up to 3 courses at a time");
      }
    }
  };

  // Get courses to compare
  const comparisonCourses = courses.filter(course => coursesToCompare.includes(course.id));

  // Clear comparison selection
  const clearComparison = () => {
    setCoursesToCompare([]);
    setCompareMode(false);
    setShowComparisonModal(false);
  };

  // Handle course preview modal
  const openPreview = (courseId: string) => {
    setPreviewCourse(courseId);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setTimeout(() => {
      setPreviewCourse(null);
    }, 300); // Wait for animation to complete
  };

  // Get the course object for the preview
  const courseToPreview = previewCourse ? courses.find(c => c.id === previewCourse) : null;

  // Handle search submission
  const handleSearch = (term: string) => {
    if (term.trim() && !searchHistory.includes(term.trim())) {
      // Add new search term to history, limiting to 5 items
      const newHistory = [term.trim(), ...searchHistory.slice(0, 4)];
      setSearchHistory(newHistory);
    }
    setSearchTerm(term);
    setShowSearchHistory(false);
  };

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
                  Transformative Education
                </span>
                  
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover Our<br />
                  <ShinyText 
                    text="Academic Courses"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Explore our comprehensive range of world-class courses designed to prepare you for success in your academic and professional journey.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="#courses-section" 
                    className="px-8 py-3.5 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
                  >
                    Browse Courses
                  </Button>
                    
                  <Button 
                    variant="outline" 
                    size="lg" 
                    href="/contact" 
                    className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-3.5 text-base font-medium"
                  >
                    Contact Admissions
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
                      +500
                    </div>
                  </div>
                  <div className="text-blue-100 text-sm">
                    Join <span className="font-semibold">500+ students</span> already enrolled this year
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
                    src="/images/courses-hero.jpg"
                    alt="Royal Academy UK Courses"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
                </div>
      
                {/* Floating card - Courses */}
                <motion.div
                  className="absolute -top-6 -left-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Total Courses</h3>
                      <p className="text-2xl font-bold text-darkblue">50+</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating card - Recognition */}
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
                      <h3 className="text-sm font-semibold text-gray-800">Accreditation</h3>
                      <p className="text-lg font-bold text-darkblue">Internationally Recognized</p>
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

      {/* Main Category Section */}
      <div id="categories-section" className="relative overflow-hidden bg-white dark:bg-dark-background pt-20 pb-24">
        <ParallaxBackground className="opacity-5" />
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
              Academic Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue dark:text-white mb-4">
              Course Categories
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Explore our diverse range of subject areas designed to help you excel in your chosen field
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={fadeInVariants.hidden}
                whileInView={fadeInVariants.visible}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.5, 
                  delay: shouldReduceMotion ? 0 : index * 0.05
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedCategory(category.name);
                  document.getElementById("courses-section")?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
                }}
              >
                <div className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-brand-gray-200 dark:border-dark-border h-full flex flex-col relative">
                  <div className="h-40 relative overflow-hidden">
                    <Image 
                      src={category.image} 
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkblue/90 via-darkblue/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <p className="text-sm text-blue-100">{category.courseCount} courses</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Courses Section */}
      <div id="courses-section" ref={coursesRef}>
        <Section
          title="Our Courses" 
          subtitle="Find the perfect course to advance your career"
          background="light"
        >
          {/* Course cards would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={fadeInVariants.hidden}
                whileInView={fadeInVariants.visible}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.4, 
                  delay: shouldReduceMotion ? 0 : index * 0.05 
                }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-brand-gray-200 dark:border-dark-border h-full flex flex-col">
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-darkblue/10 text-darkblue`}>
                        {course.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <div className="flex items-center mr-3">
                        <FaClock className="mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="mr-1" />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                    
                    <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">{course.description}</p>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <div className="font-bold text-darkblue dark:text-blue-300 text-sm">£{course.price.toLocaleString()}</div>
                      <Button
                        variant="primary"
                        href={`/courses/${course.id}`}
                        size="sm"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      currentPage === number
                        ? 'bg-darkblue text-white'
                        : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-border'
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Section>
      </div>
      
      {/* Call to Action */}
      <Section background="gradient" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Advance Your Career?</h2>
          <p className="text-lg text-white/90 mb-8">Our admissions team is ready to help you find the perfect course and guide you through the application process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions" variant="secondary" size="lg">Apply Now</Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Speak to an Advisor</Button>
          </div>
        </div>
      </Section>
    </>
  );
}