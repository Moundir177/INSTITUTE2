"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaClock, FaGraduationCap, FaFilter, FaSearch, FaTimes } from "react-icons/fa";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Filter courses based on selections
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesDuration = selectedDuration === "All" || course.duration === selectedDuration;
    const matchesFormat = selectedFormat === "All" || course.format === selectedFormat;
    
    return matchesSearch && matchesCategory && matchesDuration && matchesFormat;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedDuration("All");
    setSelectedFormat("All");
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Explore Our Courses"
        description="Discover a wide range of courses designed to help you achieve your academic and professional goals."
        imageSrc="/images/courses-hero.jpg"
        imageAlt="Students in a classroom at Royal Academy UK"
        primaryButtonText="Browse All Courses"
        primaryButtonHref="#courses-section"
        secondaryButtonText="Contact Admissions"
        secondaryButtonHref="/contact"
      />

      {/* Featured Categories */}
      <Section
        title="Course Categories"
        subtitle="Explore our diverse range of subject areas"
        background="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedCategory(category.name);
                document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all border border-silver-200">
                <div className="relative h-40 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ukblue/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white text-lg font-semibold">{category.name}</h3>
                    <p className="text-silver-100 text-sm">{category.courseCount} courses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Course Listing */}
      <Section
        id="courses-section"
        title="Our Courses"
        subtitle="Find the perfect course for your educational journey"
      >
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all"
              />
            </div>
            
            {/* Filter Toggle on Mobile */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 py-3 border border-silver-200 rounded-lg bg-white text-gray-700 hover:bg-silver-50 transition-colors"
              >
                <FaFilter />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              {/* Duration Filter */}
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
              >
                <option value="All">All Durations</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
              
              {/* Format Filter */}
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
              >
                <option value="All">All Formats</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              
              {/* Clear Filters */}
              {(selectedCategory !== "All" || selectedDuration !== "All" || selectedFormat !== "All" || searchTerm !== "") && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 border border-silver-200 rounded-lg bg-white text-gray-700 hover:bg-silver-50 transition-colors flex items-center gap-2"
                >
                  <FaTimes size={16} />
                  Clear
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden space-y-4 mb-6"
            >
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
                >
                  <option value="All">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
                >
                  <option value="All">All Durations</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="12 Months">12 Months</option>
                </select>
              </div>
              
              {/* Format Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
                >
                  <option value="All">All Formats</option>
                  <option value="Online">Online</option>
                  <option value="In-person">In-person</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              
              {/* Clear Filters */}
              {(selectedCategory !== "All" || selectedDuration !== "All" || selectedFormat !== "All" || searchTerm !== "") && (
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg bg-white text-gray-700 hover:bg-silver-50 transition-colors flex items-center justify-center gap-2"
                >
                  <FaTimes size={16} />
                  Clear All Filters
                </button>
              )}
            </motion.div>
          )}
          
          {/* Results count */}
          <div className="text-gray-600 text-sm">
            Showing {filteredCourses.length} of {courses.length} courses
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedDuration !== "All" && ` for ${selectedDuration}`}
            {selectedFormat !== "All" && ` in ${selectedFormat} format`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
        
        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  title={course.title}
                  description={course.description}
                  imageSrc={course.image}
                  imageAlt={course.title}
                  variant="elevated"
                  href={`/courses/${course.id}`}
                  footer={
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-ukblue">{course.price}</span>
                      <div className="flex gap-3">
                        <span className="text-xs flex items-center gap-1">
                          <FaClock className="text-gold-500" />
                          {course.duration}
                        </span>
                        <span className="text-xs flex items-center gap-1">
                          <FaGraduationCap className="text-gold-500" />
                          {course.format}
                        </span>
                      </div>
                    </div>
                  }
                >
                  <div className="flex items-center mt-2 mb-4">
                    <span className="px-2 py-1 bg-silver-100 text-xs rounded-full text-gray-700">
                      {course.category}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">😕</div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any courses matching your current filters. Try adjusting your search criteria.
            </p>
            <Button onClick={clearFilters} variant="primary">
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="ukblue" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Not Sure Which Course to Choose?</h2>
          <p className="text-lg mb-8 text-silver-300">
            Our academic advisors are here to help you find the perfect course that aligns with your goals and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Get Personalized Advice
            </Button>
            <Button href="/certificate" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Our Certifications
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
const categories = [
  {
    name: "Business",
    image: "/images/business-category.jpg",
    courseCount: 12
  },
  {
    name: "Technology",
    image: "/images/technology-category.jpg",
    courseCount: 10
  },
  {
    name: "Design",
    image: "/images/design-category.jpg",
    courseCount: 8
  },
  {
    name: "Healthcare",
    image: "/images/healthcare-category.jpg",
    courseCount: 7
  },
  {
    name: "Languages",
    image: "/images/languages-category.jpg",
    courseCount: 6
  },
  {
    name: "Marketing",
    image: "/images/marketing-category.jpg",
    courseCount: 9
  },
  {
    name: "Finance",
    image: "/images/finance-category.jpg",
    courseCount: 5
  },
  {
    name: "Personal Development",
    image: "/images/personal-dev-category.jpg",
    courseCount: 4
  }
];

const courses = [
  {
    id: "business-admin",
    title: "Business Administration",
    description: "Comprehensive course covering all aspects of business management and leadership.",
    image: "/images/business.jpg",
    price: "£2,500",
    duration: "6 Months",
    format: "Hybrid",
    category: "Business"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master the latest digital marketing strategies, tools, and techniques.",
    image: "/images/marketing.jpg",
    price: "£1,800",
    duration: "3 Months",
    format: "Online",
    category: "Marketing"
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Learn to analyze complex data sets and derive meaningful insights.",
    image: "/images/data-science.jpg",
    price: "£3,200",
    duration: "12 Months",
    format: "In-person",
    category: "Technology"
  },
  {
    id: "graphic-design",
    title: "Graphic Design Fundamentals",
    description: "Develop essential skills in visual communication and design principles.",
    image: "/images/graphic-design.jpg",
    price: "£1,600",
    duration: "3 Months",
    format: "Hybrid",
    category: "Design"
  },
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    description: "Build dynamic websites and applications with front-end and back-end technologies.",
    image: "/images/web-dev.jpg",
    price: "£2,800",
    duration: "6 Months",
    format: "Online",
    category: "Technology"
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management",
    description: "Prepare for leadership roles in healthcare organizations with this comprehensive program.",
    image: "/images/healthcare-management.jpg",
    price: "£2,300",
    duration: "6 Months",
    format: "In-person",
    category: "Healthcare"
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Learn strategies to build brand presence and engagement across social platforms.",
    image: "/images/social-media.jpg",
    price: "£1,500",
    duration: "3 Months",
    format: "Online",
    category: "Marketing"
  },
  {
    id: "project-management",
    title: "Project Management Professional",
    description: "Master methodologies and best practices for successful project delivery.",
    image: "/images/project-management.jpg",
    price: "£2,200",
    duration: "6 Months",
    format: "Hybrid",
    category: "Business"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Create engaging user experiences with modern interface design principles.",
    image: "/images/ui-ux.jpg",
    price: "£2,100",
    duration: "3 Months",
    format: "Online",
    category: "Design"
  },
  {
    id: "english-business",
    title: "Business English",
    description: "Enhance your professional communication skills in English for the global workplace.",
    image: "/images/business-english.jpg",
    price: "£1,400",
    duration: "3 Months",
    format: "Hybrid",
    category: "Languages"
  },
  {
    id: "accounting-finance",
    title: "Accounting & Finance",
    description: "Develop essential financial management and accounting skills for business success.",
    image: "/images/accounting.jpg",
    price: "£2,600",
    duration: "6 Months",
    format: "In-person",
    category: "Finance"
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    description: "Build the skills and confidence to lead teams effectively in any organization.",
    image: "/images/leadership.jpg",
    price: "£1,900",
    duration: "3 Months",
    format: "Hybrid",
    category: "Personal Development"
  }
]; 