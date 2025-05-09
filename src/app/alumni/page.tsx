"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaLinkedin, FaTwitter, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaAward, FaQuoteRight, FaFilter } from "react-icons/fa";

// Alumni success stories interface
interface AlumniStory {
  id: string;
  name: string;
  photo: string;
  gradYear: string;
  program: string;
  currentRole: string;
  company: string;
  location: string;
  story: string;
  achievement: string;
  quote?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  category: string;
}

export default function AlumniPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniStory | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter alumni based on category
  const filteredAlumni = alumniStories.filter(alumni => 
    activeCategory === "All" || alumni.category === activeCategory
  );
  
  // Open alumni detail modal
  const openAlumniDetail = (alumni: AlumniStory) => {
    setSelectedAlumni(alumni);
    document.body.style.overflow = "hidden";
  };
  
  // Close alumni detail modal
  const closeAlumniDetail = () => {
    setSelectedAlumni(null);
    document.body.style.overflow = "auto";
  };
  
  return (
    <>
      <Hero
        title="Alumni Success Stories"
        description="Discover how our graduates are making an impact across industries and around the world"
        imageSrc="https://placehold.co/1920x1080/00247d/ffffff?text=Alumni+Hero"
        imageAlt="Royal Academy UK alumni at graduation ceremony"
        primaryButtonText="Explore Stories"
        primaryButtonHref="#stories"
        secondaryButtonText="Join Our Network"
        secondaryButtonHref="/contact"
      />
      
      {/* Alumni Overview */}
      <Section background="gray" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-gold-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25,000+</h3>
              <p className="text-gray-600">Global Alumni Network</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-gold-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Countries Represented</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <FaAward className="text-gold-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Industry Leaders</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Alumni Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Stay connected with fellow graduates, access exclusive resources, and participate in networking events designed specifically for Royal Academy UK alumni.
            </p>
            <Button variant="primary" href="/contact">
              Register Now
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Alumni Stories */}
      <Section
        id="stories"
        title="Meet Our Successful Alumni"
        subtitle="Our graduates have gone on to achieve remarkable success across various industries"
      >
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-ukblue text-white"
                    : "bg-silver-100 text-gray-700 hover:bg-silver-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-ukblue"
            >
              <FaFilter /> More Filters
            </button>
            
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-10 w-64"
                >
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year
                    </label>
                    <select className="w-full px-2 py-1 border border-silver-200 rounded text-sm">
                      <option>All Years</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>Before 2019</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select className="w-full px-2 py-1 border border-silver-200 rounded text-sm">
                      <option>All Industries</option>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>Media</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-ukblue text-white py-1.5 rounded text-sm">
                    Apply Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni, index) => (
            <motion.div
              key={alumni.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer alumni-card"
              onClick={() => openAlumniDetail(alumni)}
            >
              <div className="relative h-64">
                <Image
                  src={alumni.photo}
                  alt={alumni.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">{alumni.name}</h3>
                  <p className="text-silver-300 text-sm">{alumni.currentRole} at {alumni.company}</p>
                </div>
                <div className="absolute top-3 right-3 bg-ukblue text-white text-xs font-medium px-2 py-1 rounded-full">
                  {alumni.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaGraduationCap />
                      <span>{alumni.program} ({alumni.gradYear})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {alumni.socialLinks?.linkedin && (
                      <a
                        href={alumni.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-500 hover:text-ukblue"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    )}
                    {alumni.socialLinks?.twitter && (
                      <a
                        href={alumni.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-500 hover:text-ukblue"
                      >
                        <FaTwitter size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {alumni.story}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaMapMarkerAlt />
                    <span>{alumni.location}</span>
                  </div>
                  <span className="text-ukblue text-sm font-medium">Read more</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Featured Alumni */}
      <Section background="ukblue">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/00247d/ffffff?text=Featured+Alumni"
                alt="Featured Alumni"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-white">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-400 text-white mb-4">
              Featured Alumni
            </span>
            <h2 className="text-3xl font-bold mb-4">Sarah Williams</h2>
            <p className="text-silver-300 mb-1">CEO & Founder, Innovate Solutions</p>
            <p className="text-gold-400 text-sm mb-6">MBA in International Business, Class of 2012</p>
            
            <div className="mb-6">
              <FaQuoteRight className="text-gold-400 text-4xl mb-4" />
              <blockquote className="text-white text-lg italic font-light leading-relaxed">
                "The leadership skills and global perspective I gained at Royal Academy UK have been instrumental in my journey from a corporate role to founding my own company. The academy's emphasis on practical learning and industry connections provided a solid foundation for my entrepreneurial endeavors."
              </blockquote>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Alumni Spotlight Section - Achievements */}
      <Section
        title="Alumni Achievements Spotlight"
        subtitle="Celebrating the exceptional accomplishments of our graduates across various fields"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Achievement Spotlight 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-silver-50 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-ukblue text-white mb-4">
                Research & Innovation
              </span>
              <h3 className="text-xl font-bold mb-2">Breakthrough in Sustainable Energy</h3>
              <p className="text-gray-600 mb-4">
                Dr. Marcus Chen (PhD in Engineering, 2015) led a research team that developed a revolutionary solar panel technology now being implemented in developing countries.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src="https://placehold.co/400x400/00247d/ffffff?text=Dr.+Marcus" 
                    alt="Dr. Marcus Chen" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium text-ukblue">Dr. Marcus Chen</p>
                  <p className="text-xs text-gray-500">PhD in Engineering, 2015</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Achievement Spotlight 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-silver-50 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-400 text-white mb-4">
                Social Impact
              </span>
              <h3 className="text-xl font-bold mb-2">Education for All Initiative</h3>
              <p className="text-gray-600 mb-4">
                Lisa Owusu (MA in Education, 2017) founded a non-profit that has provided access to quality education for over 50,000 children in underserved communities.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src="https://placehold.co/400x400/00247d/ffffff?text=Lisa+O" 
                    alt="Lisa Owusu" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium text-ukblue">Lisa Owusu</p>
                  <p className="text-xs text-gray-500">MA in Education, 2017</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Achievement Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-silver-200 rounded-lg p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-ukblue/10 rounded-full flex items-center justify-center">
                <FaAward className="text-ukblue" />
              </div>
              <h4 className="font-semibold">Fortune 500 Leadership</h4>
            </div>
            <p className="text-sm text-gray-600">
              15+ alumni currently serve as C-level executives at Fortune 500 companies worldwide.
            </p>
          </motion.div>
          
          {/* Achievement Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-silver-200 rounded-lg p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-ukblue/10 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-ukblue" />
              </div>
              <h4 className="font-semibold">Academic Excellence</h4>
            </div>
            <p className="text-sm text-gray-600">
              Our alumni have published over 1,200 research papers in prestigious academic journals.
            </p>
          </motion.div>
          
          {/* Achievement Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-silver-200 rounded-lg p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-ukblue/10 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-ukblue" />
              </div>
              <h4 className="font-semibold">Entrepreneurial Impact</h4>
            </div>
            <p className="text-sm text-gray-600">
              Alumni-founded startups have raised over £500 million in venture capital funding since 2018.
            </p>
          </motion.div>
        </div>
      </Section>
      
      {/* Alumni Events */}
      <Section
        title="Alumni Events & Opportunities"
        subtitle="Stay connected and engaged with exclusive events and opportunities for our alumni"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-silver-50 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <FaBriefcase className="text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
            <p className="text-gray-600 text-sm mb-4">
              Share your expertise with current students and recent graduates through our structured mentorship program.
            </p>
            <Button variant="outline" href="/contact" className="w-full">
              Become a Mentor
            </Button>
          </div>
          
          <div className="bg-silver-50 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <FaGraduationCap className="text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Alumni Webinars</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our monthly webinars featuring alumni speakers sharing insights on industry trends and career development.
            </p>
            <Button variant="outline" href="/news-events" className="w-full">
              Upcoming Webinars
            </Button>
          </div>
          
          <div className="bg-silver-50 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <FaAward className="text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Alumni Awards</h3>
            <p className="text-gray-600 text-sm mb-4">
              Nominate outstanding alumni for our annual achievement awards recognizing excellence across various fields.
            </p>
            <Button variant="outline" href="/contact" className="w-full">
              Submit Nomination
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Alumni FAQ Section */}
      <Section
        title="Alumni FAQ"
        subtitle="Answers to commonly asked questions about our alumni network and benefits"
        background="silver-50"
      >
        <div className="max-w-3xl mx-auto">
          {/* FAQ Item 1 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <details className="group bg-white p-6 rounded-lg shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">How do I join the alumni network?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                All graduates of Royal Academy UK automatically become members of our alumni network. To stay connected and access exclusive benefits, please ensure your contact information is up to date in our alumni database. You can update your details through the alumni portal or by contacting the alumni office.
              </p>
            </details>
          </motion.div>
          
          {/* FAQ Item 2 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <details className="group bg-white p-6 rounded-lg shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">What benefits do alumni receive?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                Alumni benefits include access to networking events, professional development workshops, career services, library resources, discounts on continuing education courses, and the opportunity to mentor current students. Alumni also receive our quarterly newsletter and invitations to exclusive events.
              </p>
            </details>
          </motion.div>
          
          {/* FAQ Item 3 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <details className="group bg-white p-6 rounded-lg shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">How can I volunteer or give back to the institution?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                There are numerous ways to give back, including joining our mentorship program, speaking at campus events, providing internship or job opportunities to current students, participating in recruitment activities, or making a financial contribution to scholarship funds or specific departments.
              </p>
            </details>
          </motion.div>
          
          {/* FAQ Item 4 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <details className="group bg-white p-6 rounded-lg shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">How do I request a transcript or verification of my degree?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                Official transcripts and degree verifications can be requested through our Registrar's Office. You can submit a request online through the alumni portal, by email, or by mail. Please note that there may be a small processing fee for these services, and processing times typically range from 3-5 business days.
              </p>
            </details>
          </motion.div>
          
          {/* FAQ Item 5 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <details className="group bg-white p-6 rounded-lg shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-semibold">Can I access the campus facilities as an alumnus?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                Yes, alumni can access many campus facilities including the library, sports center, and certain research facilities. Some services may require an alumni card or membership fee. Please contact the alumni office for current access policies and to request your alumni identification card.
              </p>
            </details>
          </motion.div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-6">Don't see your question answered?</p>
          <Button variant="primary" href="/contact">
            Contact Alumni Relations
          </Button>
        </div>
      </Section>
      
      {/* Alumni Modal Detail */}
      <AnimatePresence>
        {selectedAlumni && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeAlumniDetail}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 md:h-96">
                <Image
                  src={selectedAlumni.photo}
                  alt={selectedAlumni.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeAlumniDetail}
                  className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  &times;
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedAlumni.name}</h2>
                  <p className="text-silver-300">{selectedAlumni.currentRole} at {selectedAlumni.company}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Graduation</h4>
                    <p className="text-gray-800">{selectedAlumni.program}, {selectedAlumni.gradYear}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-800">{selectedAlumni.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Category</h4>
                    <p className="text-gray-800">{selectedAlumni.category}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Journey After Graduation</h3>
                  <p className="text-gray-600 mb-4">{selectedAlumni.story}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Achievement</h3>
                  <p className="text-gray-600 mb-4">{selectedAlumni.achievement}</p>
                </div>
                
                {selectedAlumni.quote && (
                  <div className="bg-silver-50 p-6 rounded-lg mb-8">
                    <FaQuoteRight className="text-gold-500 text-2xl mb-4" />
                    <blockquote className="text-gray-700 text-lg italic mb-4">
                      "{selectedAlumni.quote}"
                    </blockquote>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {selectedAlumni.socialLinks?.linkedin && (
                      <a
                        href={selectedAlumni.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-ukblue"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {selectedAlumni.socialLinks?.twitter && (
                      <a
                        href={selectedAlumni.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-ukblue"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                  </div>
                  <Button variant="primary" href="/contact">
                    Connect with {selectedAlumni.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Alumni Newsletter Signup */}
      <Section background="ukblue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-silver-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our alumni newsletter to receive updates on events, networking opportunities, alumni stories, and more.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <form className="max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-gold-400 focus:ring-0 bg-white/90 text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-gold-400 focus:ring-0 bg-white/90 text-gray-800"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-gold-400 focus:ring-0 bg-white/90 text-gray-800"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="gradYear" className="sr-only">Graduation Year</label>
                  <select
                    id="gradYear"
                    className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-gold-400 focus:ring-0 bg-white/90 text-gray-800"
                  >
                    <option value="">Graduation Year</option>
                    {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="w-4 h-4 text-gold-500 rounded border-gray-300 focus:ring-gold-400"
                  />
                  <label htmlFor="privacyPolicy" className="ml-2 text-sm text-silver-300">
                    I agree to receive updates and accept the <a href="/privacy-policy" className="text-gold-400 hover:underline">privacy policy</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
            
            <p className="text-silver-400 text-sm mt-6">
              You can unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

// Data
const categories = ["All", "Business", "Technology", "Healthcare", "Education", "Arts", "Engineering"];

const alumniStories: AlumniStory[] = [
  {
    id: "a1",
    name: "James Wilson",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=James+Wilson",
    gradYear: "2018",
    program: "MBA in International Business",
    currentRole: "Senior Marketing Director",
    company: "Global Brands Inc.",
    location: "London, UK",
    story: "After graduating from Royal Academy UK, James joined a leading marketing agency as a strategy consultant. Within three years, he was promoted to team lead and later moved to Global Brands Inc. where he now oversees marketing strategy for their European division.",
    achievement: "Under James's leadership, his team won the Marketing Excellence Award for their innovative campaign that increased market share by 15% in a highly competitive industry.",
    quote: "The international perspective and strategic thinking I developed at Royal Academy UK has been invaluable throughout my career. The case-study approach prepared me for real-world challenges I face daily.",
    socialLinks: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    category: "Business"
  },
  {
    id: "a2",
    name: "Sarah Chen",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Sarah+Chen",
    gradYear: "2020",
    program: "MSc in Computer Science",
    currentRole: "Senior Software Engineer",
    company: "Tech Innovations Ltd",
    location: "Manchester, UK",
    story: "Sarah specialized in artificial intelligence during her studies and completed her final project in collaboration with a leading tech firm. After graduation, she joined Tech Innovations where she leads the development of their AI-powered analytics platform.",
    achievement: "Sarah published two research papers based on her work at Royal Academy UK and has been granted a patent for an algorithm she developed that improves processing efficiency by 40%.",
    socialLinks: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    category: "Technology"
  },
  {
    id: "a3",
    name: "Michael Okonkwo",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Michael+O",
    gradYear: "2017",
    program: "BSc in Healthcare Management",
    currentRole: "Hospital Administrator",
    company: "City General Hospital",
    location: "Birmingham, UK",
    story: "Michael's interest in healthcare systems led him to Royal Academy UK. After graduating, he worked in various administrative roles before being appointed as one of the youngest hospital administrators in the City Hospital network.",
    achievement: "Michael implemented a patient care initiative that reduced wait times by 30% and improved patient satisfaction scores to the highest in the region.",
    quote: "The comprehensive curriculum at Royal Academy UK gave me both theoretical knowledge and practical skills that I apply every day in managing healthcare operations.",
    socialLinks: {
      linkedin: "https://linkedin.com/"
    },
    category: "Healthcare"
  },
  {
    id: "a4",
    name: "Emma Patel",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Emma+Patel",
    gradYear: "2019",
    program: "MA in Education Leadership",
    currentRole: "School Principal",
    company: "Westside Academy",
    location: "Edinburgh, Scotland",
    story: "Emma's passion for educational reform brought her to Royal Academy UK. After completing her master's degree, she worked as a curriculum developer before taking on progressive leadership roles, ultimately becoming principal at Westside Academy.",
    achievement: "Under Emma's leadership, Westside Academy achieved an 'Outstanding' rating from Ofsted and has become a model school for innovative teaching methods.",
    socialLinks: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    category: "Education"
  },
  {
    id: "a5",
    name: "Robert Tanner",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Robert+T",
    gradYear: "2015",
    program: "BFA in Digital Arts",
    currentRole: "Creative Director",
    company: "Visionary Studios",
    location: "Bristol, UK",
    story: "Robert's creative talents flourished at Royal Academy UK, where he specialized in digital media. After graduation, he worked at several design agencies before founding his own studio that now serves clients across Europe.",
    achievement: "Robert's studio has won multiple industry awards for innovative design work, including a prestigious Gold at the European Design Awards.",
    quote: "The technical skills and creative thinking I developed at Royal Academy UK formed the foundation for my success. The faculty pushed me to explore boundaries and find my unique artistic voice.",
    socialLinks: {
      twitter: "https://twitter.com/"
    },
    category: "Arts"
  },
  {
    id: "a6",
    name: "Aisha Mahmood",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Aisha+M",
    gradYear: "2021",
    program: "MEng in Sustainable Engineering",
    currentRole: "Environmental Engineer",
    company: "GreenTech Solutions",
    location: "Leeds, UK",
    story: "Aisha came to Royal Academy UK with a vision to contribute to sustainable development. Her research project on renewable energy systems caught the attention of GreenTech Solutions, where she now leads projects focused on reducing carbon footprints for industrial clients.",
    achievement: "Aisha developed an innovative waste-to-energy system that has been implemented in three manufacturing plants, reducing their energy costs by 25% and significantly decreasing emissions.",
    socialLinks: {
      linkedin: "https://linkedin.com/"
    },
    category: "Engineering"
  },
  {
    id: "a7",
    name: "Thomas Spencer",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Thomas+S",
    gradYear: "2016",
    program: "MSc in Data Science",
    currentRole: "Head of Analytics",
    company: "Finance Forward",
    location: "London, UK",
    story: "Thomas discovered his passion for data analysis while studying at Royal Academy UK. Upon graduation, he joined the analytics team at a major bank before being recruited by Finance Forward to build their data science department from the ground up.",
    achievement: "Thomas developed a predictive model that has saved his company an estimated £2.3 million annually by identifying high-risk transactions with greater accuracy than previous systems.",
    quote: "The rigorous quantitative training I received at Royal Academy UK equipped me with both technical skills and critical thinking abilities that have accelerated my career in fintech.",
    socialLinks: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    category: "Technology"
  },
  {
    id: "a8",
    name: "Olivia Richardson",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Olivia+R",
    gradYear: "2014",
    program: "MBA in Entrepreneurship",
    currentRole: "Founder & CEO",
    company: "EcoStyle",
    location: "Brighton, UK",
    story: "Olivia developed her business plan for a sustainable fashion brand during her MBA at Royal Academy UK. After graduation, she secured seed funding and launched EcoStyle, which has grown into a recognized name in ethical fashion.",
    achievement: "Under Olivia's leadership, EcoStyle has expanded to three countries, employs over 50 people, and has been featured in Vogue for pioneering sustainable practices in the fashion industry.",
    socialLinks: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    category: "Business"
  },
  {
    id: "a9",
    name: "Daniel Kim",
    photo: "https://placehold.co/600x800/00247d/ffffff?text=Daniel+Kim",
    gradYear: "2019",
    program: "MSc in Clinical Psychology",
    currentRole: "Clinical Director",
    company: "Wellbeing Center",
    location: "Cardiff, Wales",
    story: "Daniel's interest in mental health support systems led him to Royal Academy UK. After completing his degree, he worked in various clinical settings before establishing an innovative therapy approach that combines traditional and digital interventions.",
    achievement: "Daniel has published research demonstrating a 40% improvement in treatment outcomes using his integrated therapy method, which is now being adopted by mental health centers across the UK.",
    quote: "My education at Royal Academy UK went beyond theory to emphasize practical applications and innovative approaches. This foundation has allowed me to develop new therapeutic methods that make a real difference in people's lives.",
    socialLinks: {
      linkedin: "https://linkedin.com/"
    },
    category: "Healthcare"
  }
]; 