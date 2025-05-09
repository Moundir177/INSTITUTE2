"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FaGraduationCap, FaCertificate, FaUsers, FaGlobe, FaCalendarAlt, FaNewspaper, FaQuoteRight, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  return (
    <>
      {/* Hero Section with Parallax Scroll Effect */}
      <div className="relative h-screen">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 z-10 flex items-center"
        >
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="bg-ukblue text-white px-4 py-1 text-sm font-medium rounded-full inline-block mb-4">
                Royal Academy UK
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Excellence in Education Since 1995
              </h1>
              <p className="text-xl text-white mb-8 drop-shadow-md">
                Providing world-class education and professional courses to shape the leaders of tomorrow. Join our prestigious institution in the heart of the United Kingdom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" href="/courses">
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg" href="/about" className="border-white text-white hover:bg-white/10">
                  About Us
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/campus.jpg"
            alt="Royal Academy UK Campus"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-ukblue/90 to-ukblue/70" />
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          >
            <a href="#features" className="text-white flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <Section 
        id="features"
        title="Why Choose Royal Academy UK"
        subtitle="We're committed to providing quality education with a focus on excellence, innovation, and student success"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Popular Courses */}
      <Section
        title="Our Popular Courses"
        subtitle="Discover our most sought-after courses designed to prepare you for success"
          >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <motion.div
              key={course.title}
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
                href={course.href}
                variant="elevated"
                footer={
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ukblue">{course.price}</span>
                    <span className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded-full">{course.duration}</span>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/courses" variant="primary" size="lg">View All Courses</Button>
        </div>
      </Section>

      {/* Statistics with Counter Animation */}
      <Section background="ukblue">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">{stat.value}</div>
              <div className="text-silver-300 uppercase text-sm tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Content Section */}
      <Section>
        <div ref={featuredRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News & Events */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isFeaturedInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-silver-200"
          >
            <div className="relative h-48">
          <Image
                src="/images/news-events-hero.jpg"
                alt="News and Events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center text-white mb-2">
                  <FaNewspaper className="mr-2" />
                  <h3 className="text-xl font-bold">Latest News & Events</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                {latestNews.map((item, index) => (
                  <div key={item.id} className="flex gap-4 items-start pb-4 border-b border-silver-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-silver-50 rounded flex flex-col items-center justify-center text-xs">
                        <span className="font-bold text-ukblue">{item.date.split(" ")[0]}</span>
                        <span className="text-gray-500">{item.date.split(" ")[1]}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 line-clamp-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm line-clamp-1">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/news-events" className="inline-flex items-center text-ukblue font-medium hover:text-ukblue/80">
                View All News & Events
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </motion.div>
          
          {/* Student Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isFeaturedInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="p-6 bg-white rounded-xl shadow-md h-full border border-silver-200">
              <div className="flex items-center mb-6">
                <FaQuoteRight className="text-xl text-gold-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Student Testimonials</h3>
              </div>
              <TestimonialCarousel 
                testimonials={testimonials} 
                variant="light"
                className="mb-6"
              />
              <div className="text-center">
                <Link href="/testimonials" className="inline-flex items-center text-ukblue font-medium hover:text-ukblue/80">
                  Read More Success Stories
                  <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Upcoming Events Slider */}
      <Section 
        title="Upcoming Events" 
        subtitle="Join us for these exciting upcoming events and activities"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-48">
          <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-ukblue text-white text-xs px-3 py-1 rounded-full">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-silver-50 rounded-lg flex flex-col items-center justify-center text-ukblue">
                    <span className="text-sm font-bold">{event.date.month}</span>
                    <span className="text-lg font-bold">{event.date.day}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FaCalendarAlt size={12} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                <Button variant="outline" href={event.href} className="w-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/news-events#events" variant="primary">
            View All Events
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gold" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-gray-800">Join Royal Academy UK today and take the first step towards a successful future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/courses" variant="primary" size="lg">Browse Courses</Button>
            <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
    </div>
      </Section>
    </>
  );
}

// Data
const features = [
  {
    icon: FaGraduationCap,
    title: "Expert Faculty",
    description: "Learn from industry-leading professionals with years of experience in their fields."
  },
  {
    icon: FaCertificate,
    title: "Recognized Certification",
    description: "Our certificates are recognized by top employers and institutions worldwide."
  },
  {
    icon: FaUsers,
    title: "Supportive Community",
    description: "Join a diverse and inclusive community of learners and professionals."
  },
  {
    icon: FaGlobe,
    title: "Global Opportunities",
    description: "Access to international job placements and networking opportunities."
  }
];

const popularCourses = [
  {
    title: "Business Administration",
    description: "Comprehensive course covering all aspects of business management and leadership.",
    image: "/images/business.jpg",
    price: "£2,500",
    duration: "6 Months",
    href: "/courses/business-administration"
  },
  {
    title: "Digital Marketing",
    description: "Master the latest digital marketing strategies, tools, and techniques.",
    image: "/images/marketing.jpg",
    price: "£1,800",
    duration: "4 Months",
    href: "/courses/digital-marketing"
  },
  {
    title: "Data Science & Analytics",
    description: "Learn to analyze complex data sets and derive meaningful insights.",
    image: "/images/data-science.jpg",
    price: "£3,200",
    duration: "8 Months",
    href: "/courses/data-science"
  }
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "15,000+", label: "Alumni Worldwide" },
  { value: "95%", label: "Employment Rate" },
  { value: "100+", label: "Industry Partners" }
];

const testimonials = [
  {
    id: "t1",
    name: "Emma Thompson",
    avatar: "/images/avatar1.jpg",
    text: "Studying at Royal Academy UK was the best decision of my career. The courses are excellent and the support from faculty is outstanding.",
    role: "Marketing Manager",
    company: "Global Media Ltd"
  },
  {
    id: "t2",
    name: "James Wilson",
    avatar: "/images/avatar2.jpg",
    text: "The practical approach to learning at Royal Academy UK prepared me for real-world challenges in my industry.",
    role: "Senior Developer",
    company: "Tech Solutions Inc"
  },
  {
    id: "t3",
    name: "Sarah Johnson",
    avatar: "/images/avatar3.jpg",
    text: "The networking opportunities and industry connections I made through Royal Academy UK were invaluable to launching my career.",
    role: "Data Analyst",
    company: "Financial Services Group"
  }
];

const latestNews = [
  {
    id: "news-1",
    title: "Royal Academy UK Ranks Among Top 20 Educational Institutions",
    summary: "In the latest national rankings, Royal Academy UK has been recognized as one of the top 20 educational institutions.",
    date: "May 10 2023"
  },
  {
    id: "news-2",
    title: "New Partnership with Global Tech Company",
    summary: "Strategic partnership established to provide enhanced internship and employment opportunities for students.",
    date: "Apr 28 2023"
  },
  {
    id: "news-3",
    title: "Academy Launches New Scholarship Program",
    summary: "A new scholarship program has been launched to support talented international students.",
    date: "Apr 15 2023"
  }
];

const upcomingEvents = [
  {
    id: "event-1",
    title: "Digital Marketing Workshop",
    description: "A comprehensive hands-on workshop covering the fundamentals of digital marketing strategies.",
    date: { month: "Jun", day: "15" },
    time: "10:00 AM - 2:00 PM",
    category: "Workshop",
    image: "/images/digital-marketing-workshop.jpg",
    href: "/news-events/event-1"
  },
  {
    id: "event-2",
    title: "Business Leadership Seminar",
    description: "Join industry leaders for an insightful seminar on effective leadership strategies.",
    date: { month: "Jun", day: "22" },
    time: "2:00 PM - 5:00 PM",
    category: "Seminar",
    image: "/images/leadership-seminar.jpg",
    href: "/news-events/event-2"
  },
  {
    id: "event-3",
    title: "Summer Open Day 2023",
    description: "Explore our campus, meet faculty members, and learn about our programs during our annual Open Day.",
    date: { month: "Jul", day: "08" },
    time: "9:00 AM - 4:00 PM",
    category: "Open Day",
    image: "/images/open-day.jpg",
    href: "/news-events/event-3"
  }
];
