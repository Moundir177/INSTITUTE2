"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaQuoteLeft, FaStar, FaPlay, FaPause } from "react-icons/fa";

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filterTestimonials = (category: string) => {
    if (category === "All") return allTestimonials;
    return allTestimonials.filter(testimonial => testimonial.category === category);
  };
  
  const filteredTestimonials = filterTestimonials(activeCategory);
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Student Success Stories"
        description="Discover how Royal Academy UK has transformed the lives and careers of our students around the world."
        imageSrc="/images/testimonials-hero.jpg"
        imageAlt="Royal Academy UK students celebrating graduation"
        primaryButtonText="Read Testimonials"
        primaryButtonHref="#testimonials"
      />
      
      {/* Category Filters */}
      <Section background="white" className="py-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-ukblue text-white"
                  : "bg-silver-100 text-gray-700 hover:bg-silver-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>
      
      {/* Written Testimonials */}
      <Section
        id="testimonials"
        title="What Our Students Say"
        subtitle="Real stories from real students who have experienced the Royal Academy UK difference"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-6 relative">
                <FaQuoteLeft className="absolute top-6 left-6 text-ukblue/10 text-4xl" />
                <div className="mt-4 relative z-10">
                  <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                      <div className="flex text-gold-500 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-silver-50 border-t border-silver-100">
                <span className="text-xs font-medium bg-gold-100 text-gold-800 px-2 py-1 rounded-full">
                  {testimonial.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Video Testimonials */}
      <Section
        title="Video Testimonials"
        subtitle="Watch our students share their experiences in their own words"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 bg-ukblue/90 hover:bg-ukblue text-white rounded-full flex items-center justify-center transition-colors">
                    <FaPlay className="ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                      <Image 
                        src={video.avatar} 
                        alt={video.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{video.name}</p>
                      <p className="text-xs text-gray-500">{video.course}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{video.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Featured Testimonial */}
      <Section background="ukblue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <FaQuoteLeft className="text-gold-400 text-6xl mx-auto mb-6" />
            <blockquote className="text-white text-2xl md:text-3xl italic font-light leading-relaxed mb-8">
              "My experience at Royal Academy UK completely transformed my career path. The supportive faculty, cutting-edge curriculum, and industry connections helped me secure my dream job within weeks of graduation."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 mr-4">
                <Image 
                  src="/images/featured-testimonial.jpg" 
                  alt="Sarah Williams"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white">Sarah Williams</h4>
                <p className="text-silver-300">Business Administration, Class of 2022</p>
                <p className="text-gold-400 text-sm mt-1">Now at: Global Financial Services, London</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Submit Your Story */}
      <Section
        title="Share Your Story"
        subtitle="Been a student at Royal Academy UK? We'd love to hear about your experience"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-silver-200">
          <div className="p-8">
            <p className="text-gray-600 mb-6 text-center">
              Your testimonial could inspire future students to embark on their educational journey with us. 
              Share your experience and become part of our success stories.
            </p>
            <div className="text-center">
              <Button variant="primary" href="/contact" className="px-8">
                Submit Your Testimonial
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
const categories = ["All", "Business", "Technology", "Design", "Healthcare", "Languages", "Marketing"];

const allTestimonials = [
  {
    id: "t1",
    name: "Emma Thompson",
    avatar: "/images/avatar1.jpg",
    text: "Studying at Royal Academy UK was the best decision of my career. The courses are excellent and the support from faculty is outstanding. I highly recommend their Business Administration program.",
    course: "MBA in International Business",
    category: "Business"
  },
  {
    id: "t2",
    name: "James Wilson",
    avatar: "/images/avatar2.jpg",
    text: "The practical approach to learning at Royal Academy UK prepared me for real-world challenges in my industry. The digital marketing course gave me skills I use daily in my career.",
    course: "Digital Marketing Professional",
    category: "Marketing"
  },
  {
    id: "t3",
    name: "Sarah Johnson",
    avatar: "/images/avatar3.jpg",
    text: "The networking opportunities and industry connections I made through Royal Academy UK were invaluable to launching my career. I secured a job before even completing my course.",
    course: "Data Science Certificate",
    category: "Technology"
  },
  {
    id: "t4",
    name: "Michael Chen",
    avatar: "/images/avatar4.jpg",
    text: "As an international student, I found Royal Academy UK to be incredibly welcoming and supportive. The language support services helped me excel in my studies despite English not being my first language.",
    course: "Advanced English for Business",
    category: "Languages"
  },
  {
    id: "t5",
    name: "Olivia Rodriguez",
    avatar: "/images/avatar5.jpg",
    text: "The healthcare management program gave me a comprehensive understanding of both clinical and administrative aspects of healthcare. This dual perspective has been crucial in my role as a department manager.",
    course: "Healthcare Management",
    category: "Healthcare"
  },
  {
    id: "t6",
    name: "David Kim",
    avatar: "/images/avatar6.jpg",
    text: "The UI/UX design course at Royal Academy UK is exceptional. The curriculum is current with industry standards, and the projects we completed formed an impressive portfolio that helped me land multiple job offers.",
    course: "UI/UX Design",
    category: "Design"
  },
  {
    id: "t7",
    name: "Elizabeth Nduka",
    avatar: "/images/avatar7.jpg",
    text: "Royal Academy UK's flexible learning options allowed me to continue working while studying. The online resources and supportive faculty made balancing work and education manageable.",
    course: "Project Management",
    category: "Business"
  },
  {
    id: "t8",
    name: "Robert Martinez",
    avatar: "/images/avatar8.jpg",
    text: "The cybersecurity program provided hands-on experience with the latest tools and techniques. The knowledge I gained was immediately applicable to my job, and I've since been promoted twice.",
    course: "Cybersecurity Specialist",
    category: "Technology"
  },
  {
    id: "t9",
    name: "Sophia Lee",
    avatar: "/images/avatar9.jpg",
    text: "The graphic design course exceeded my expectations. The instructors are industry professionals who provided real-world insights and valuable feedback on our projects.",
    course: "Graphic Design Fundamentals",
    category: "Design"
  }
];

const videoTestimonials = [
  {
    id: "v1",
    name: "Thomas Anderson",
    avatar: "/images/video-avatar1.jpg",
    title: "How Royal Academy UK Changed My Career Path",
    description: "Thomas shares his journey from a corporate job to becoming a successful entrepreneur after completing our Business Innovation course.",
    thumbnail: "/images/video-thumb1.jpg",
    duration: "4:32",
    course: "Business Innovation & Entrepreneurship"
  },
  {
    id: "v2",
    name: "Priya Sharma",
    avatar: "/images/video-avatar2.jpg",
    title: "From Novice to Professional Developer",
    description: "Priya discusses how she transitioned from a non-technical background to becoming a full-stack developer through our comprehensive program.",
    thumbnail: "/images/video-thumb2.jpg",
    duration: "5:18",
    course: "Full-Stack Web Development"
  },
  {
    id: "v3",
    name: "Mark Johnson",
    avatar: "/images/video-avatar3.jpg",
    title: "International Student Experience at Royal Academy UK",
    description: "Mark talks about his experience moving from Australia to study in the UK and how the academy supported his transition.",
    thumbnail: "/images/video-thumb3.jpg",
    duration: "3:47",
    course: "International Business Relations"
  },
  {
    id: "v4",
    name: "Aisha Mohammed",
    avatar: "/images/video-avatar4.jpg",
    title: "How I Secured My Dream Job Through Royal Academy UK",
    description: "Aisha explains how the career services and networking events at Royal Academy UK helped her land a position at a top marketing agency.",
    thumbnail: "/images/video-thumb4.jpg",
    duration: "6:05",
    course: "Strategic Marketing Management"
  }
]; 