"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearch, FaGraduationCap, FaClock, FaGlobe, FaStar } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal, ScrollRevealGrid } from "@/components/ui/ScrollReveal";
import { ShinyText } from "@/components/ui/ShinyText";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

// Program interfaces
interface Program {
  id: string;
  title: string;
  degree: string;
  level: "Undergraduate" | "Graduate" | "Doctorate";
  duration: string;
  faculty: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
}

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Filter programs based on search and level filter
  const filteredPrograms = programs
    .filter(program => 
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(program => 
      activeFilter === "All" || program.level === activeFilter
    );
  
  return (
    <>
      <Hero
        title="Academic Programs"
        description="Discover our world-class educational offerings designed to prepare you for success"
        imageSrc="https://placehold.co/1920x1080/00247d/ffffff?text=Academic+Programs"
        imageAlt="Royal Academy UK campus with students"
        primaryButtonText="Explore Programs"
        primaryButtonHref="#programs"
        secondaryButtonText="Apply Now"
        secondaryButtonHref="/admissions"
      />
      
      {/* Programs Overview */}
      <Section 
        background="white" 
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="text-ukblue font-medium">ROYAL ACADEMY UK</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Excellence in Education at Every Level</h2>
                <p className="text-gray-600 mb-8">
                  At Royal Academy UK, we offer a comprehensive range of academic programs designed to cultivate critical thinking, foster innovation, and prepare students for leadership roles across various industries and disciplines.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center mr-4">
                      <FaGraduationCap className="text-ukblue text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Faculty</h3>
                      <p className="text-gray-600 text-sm">Learn from world-renowned scholars and industry leaders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center mr-4">
                      <FaGlobe className="text-ukblue text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Global Perspective</h3>
                      <p className="text-gray-600 text-sm">International focus with exchange opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center mr-4">
                      <FaStar className="text-ukblue text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Accredited Programs</h3>
                      <p className="text-gray-600 text-sm">Internationally recognized qualifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center mr-4">
                      <FaClock className="text-ukblue text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Flexible Learning</h3>
                      <p className="text-gray-600 text-sm">Full-time, part-time, and distance options</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="primary" href="/contact">
                  Request Prospectus
                </Button>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://placehold.co/800x600/00247d/ffffff?text=Royal+Academy+Programs"
                    alt="Students in classroom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="text-xl font-bold mb-2">100+ Academic Programs</p>
                      <p>Across undergraduate, graduate and doctoral levels</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gold-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold">96%</div>
                    <div className="text-sm">Employment Rate</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Program Search and Filter */}
      <Section id="programs" background="silver-50">
        <div className="mb-12">
          <ShinyText
            text="Find Your Perfect Program"
            size="3xl"
            gradient="royal"
            className="text-center mb-6"
          />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Use the search and filters below to explore our comprehensive range of academic programs and find the one that aligns with your interests and career goals.
          </p>
          
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search programs by title, faculty, or keyword..."
                className="w-full py-3 px-5 pl-12 rounded-full border border-silver-300 focus:border-ukblue focus:ring-1 focus:ring-ukblue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver-500" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", "Undergraduate", "Graduate", "Doctorate"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-ukblue text-white"
                    : "bg-white text-gray-700 hover:bg-silver-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Program Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <h3 className="text-xl font-semibold mb-2">No programs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("All");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>
      
      {/* Featured Program */}
      <ParallaxBackground
        backgroundImage="https://placehold.co/1920x1080/00247d/ffffff?text=Featured+Program"
        overlay="gradient"
        height="min-h-[600px]"
      >
        <div className="container-custom h-full flex items-center py-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block bg-gold-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                FEATURED PROGRAM
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                MSc in Sustainable Innovation
              </h2>
              <p className="text-silver-300 mb-6">
                Develop the skills to lead transformative change through our interdisciplinary program focusing on sustainable business practices, innovative technologies, and environmental policy.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white font-medium">Duration</p>
                  <p className="text-silver-300 text-sm">1-2 Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white font-medium">Format</p>
                  <p className="text-silver-300 text-sm">Full/Part-time</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white font-medium">Starts</p>
                  <p className="text-silver-300 text-sm">September</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/programs/sustainable-innovation">
                  Learn More
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20" href="/admissions">
                  Apply Now
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxBackground>
      
      {/* Program Categories */}
      <Section background="white" title="Programs by Faculty" subtitle="Explore our diverse academic offerings across specialized faculties">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => (
            <ScrollReveal key={faculty.name} delay={index * 0.1}>
              <GlassCard
                href={`/faculties/${faculty.slug}`}
                hoverEffect="lift"
                className="h-full"
              >
                <div className="relative h-40 mb-4 overflow-hidden rounded-t-md">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-bold text-xl">{faculty.name}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-3">{faculty.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-ukblue font-medium">{faculty.programs} Programs</span>
                    <span className="text-gray-600">View Faculty →</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>
      
      {/* Admission Process */}
      <Section background="ukblue">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Apply?</h2>
              <p className="text-silver-300 mb-6">
                Taking the next step in your educational journey is simple. Our admissions team is ready to guide you through every step of the process.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Choose Your Program</h3>
                    <p className="text-silver-300 text-sm">Browse our catalog and find the program that matches your career aspirations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Check Requirements</h3>
                    <p className="text-silver-300 text-sm">Review program-specific entry requirements and prepare your documents</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Submit Application</h3>
                    <p className="text-silver-300 text-sm">Complete the online application form and upload required documents</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Await Decision</h3>
                    <p className="text-silver-300 text-sm">Our admissions committee will review your application and contact you with their decision</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="primary" 
                  className="bg-gold-500 hover:bg-gold-600 text-white"
                  href="/admissions"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  href="/contact"
                >
                  Contact Admissions
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="relative">
            <ScrollReveal direction="right">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="https://placehold.co/800x600/00247d/ffffff?text=Admissions"
                  alt="Student receiving acceptance letter"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section 
        background="white"
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our academic programs and admissions process"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-silver-50 rounded-lg overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0 p-1.5 rounded-full bg-silver-200 text-gray-800 group-open:rotate-180 transition-transform">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="primary" href="/contact">Contact Academic Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Program Card Component
function ProgramCard({ program }: { program: Program }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition ${program.featured ? 'ring-2 ring-gold-500' : ''}`}>
      <div className="relative h-48">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
        {program.featured && (
          <div className="absolute top-3 right-3 bg-gold-500 text-xs text-white font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-ukblue/80 text-white text-xs font-medium px-2 py-1 rounded mb-2 inline-block">
            {program.level}
          </span>
          <h3 className="text-white font-bold">{program.title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm">
            <FaGraduationCap className="text-ukblue mr-2" />
            <span>{program.degree}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaClock className="text-ukblue mr-2" />
            <span>{program.duration}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {program.description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full justify-center"
          href={`/programs/${program.id}`}
        >
          View Program
        </Button>
      </div>
    </div>
  );
}

// Data
const programs: Program[] = [
  {
    id: "bsc-computer-science",
    title: "Computer Science",
    degree: "BSc (Hons)",
    level: "Undergraduate",
    duration: "3 Years",
    faculty: "Science & Technology",
    description: "Develop technical knowledge and practical skills in software development, algorithms, artificial intelligence, and computer systems.",
    highlights: [
      "Industry-standard programming languages and tools",
      "Specialized paths in AI, cybersecurity, or software engineering",
      "Industry placement options in Year 2",
      "Final year individual project with industry mentorship"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Computer+Science",
    featured: true
  },
  {
    id: "ba-international-business",
    title: "International Business",
    degree: "BA (Hons)",
    level: "Undergraduate",
    duration: "3 Years",
    faculty: "Business & Economics",
    description: "Gain comprehensive understanding of global business practices, international trade, cross-cultural management, and strategic planning.",
    highlights: [
      "Study abroad options in Year 2",
      "Foreign language component",
      "International internship opportunities",
      "Global case studies and real-world projects"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=International+Business"
  },
  {
    id: "msc-data-science",
    title: "Data Science",
    degree: "MSc",
    level: "Graduate",
    duration: "1 Year",
    faculty: "Science & Technology",
    description: "Master the skills to analyze complex data, develop predictive models, and drive data-informed decision making across industries.",
    highlights: [
      "Machine learning and statistical analysis",
      "Big data technologies",
      "Industry-sponsored projects",
      "Option to specialize in finance, healthcare, or marketing analytics"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Data+Science"
  },
  {
    id: "ma-creative-writing",
    title: "Creative Writing",
    degree: "MA",
    level: "Graduate",
    duration: "1 Year",
    faculty: "Arts & Humanities",
    description: "Refine your craft as a writer through intensive workshops, literary analysis, and mentorship from published authors.",
    highlights: [
      "Small cohort size for personalized feedback",
      "Genres including fiction, poetry, screenwriting, and creative non-fiction",
      "Publishing industry connections",
      "Final portfolio development"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Creative+Writing"
  },
  {
    id: "phd-neuroscience",
    title: "Neuroscience",
    degree: "PhD",
    level: "Doctorate",
    duration: "3-4 Years",
    faculty: "Medicine & Health Sciences",
    description: "Conduct cutting-edge research in neuroscience, from molecular mechanisms to cognitive processes, under the guidance of leading researchers.",
    highlights: [
      "State-of-the-art laboratory facilities",
      "Cross-disciplinary collaboration opportunities",
      "Funding for conference presentations",
      "Publications in high-impact journals"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Neuroscience"
  },
  {
    id: "llb-law",
    title: "Law",
    degree: "LLB (Hons)",
    level: "Undergraduate",
    duration: "3 Years",
    faculty: "Law",
    description: "Build a strong foundation in legal principles, procedures, and critical analysis while developing professional skills for a career in law.",
    highlights: [
      "Qualifying law degree for professional practice",
      "Mooting and legal advocacy competitions",
      "Pro bono legal clinic experience",
      "International law and human rights focus"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Law"
  },
  {
    id: "mba-business-administration",
    title: "Business Administration",
    degree: "MBA",
    level: "Graduate",
    duration: "1-2 Years",
    faculty: "Business & Economics",
    description: "Develop advanced leadership and management skills through a comprehensive curriculum covering strategy, finance, marketing, and operations.",
    highlights: [
      "Flexible full-time or part-time options",
      "Executive speaker series",
      "International study trip",
      "Capstone consulting project with real clients"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=MBA",
    featured: true
  },
  {
    id: "bsc-psychology",
    title: "Psychology",
    degree: "BSc (Hons)",
    level: "Undergraduate",
    duration: "3 Years",
    faculty: "Social Sciences",
    description: "Explore human behavior and mental processes through scientific study, research methods, and psychological theories.",
    highlights: [
      "BPS accredited program",
      "Research laboratory experience",
      "Optional placement year",
      "Specializations in clinical, educational, or organizational psychology"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Psychology"
  },
  {
    id: "phd-sustainable-development",
    title: "Sustainable Development",
    degree: "PhD",
    level: "Doctorate",
    duration: "3-4 Years",
    faculty: "Environmental Studies",
    description: "Lead innovative research addressing global sustainability challenges, environmental policy, climate change, and sustainable resource management.",
    highlights: [
      "Interdisciplinary research approach",
      "Field research funding opportunities",
      "Policy impact focus",
      "International research collaborations"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Sustainable+Development"
  }
];

const faculties = [
  {
    name: "Business & Economics",
    slug: "business-economics",
    description: "World-class business education with focus on global markets, sustainable practices, and entrepreneurial innovation.",
    programs: 12,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Business"
  },
  {
    name: "Science & Technology",
    slug: "science-technology",
    description: "Cutting-edge programs in computer science, data science, engineering, and natural sciences with research opportunities.",
    programs: 15,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Science"
  },
  {
    name: "Arts & Humanities",
    slug: "arts-humanities",
    description: "Creative and critical inquiry across literature, philosophy, history, languages, media studies, and creative arts.",
    programs: 10,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Arts"
  },
  {
    name: "Social Sciences",
    slug: "social-sciences",
    description: "Analytical examination of human behavior, societies, politics, and cultural dynamics through theory and research.",
    programs: 8,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Social+Sciences"
  },
  {
    name: "Medicine & Health Sciences",
    slug: "medicine-health",
    description: "Comprehensive education in healthcare, medical research, public health, and pharmaceutical sciences.",
    programs: 14,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Medicine"
  },
  {
    name: "Law",
    slug: "law",
    description: "Rigorous legal education with opportunities for specialization in international, commercial, or human rights law.",
    programs: 6,
    image: "https://placehold.co/800x600/00247d/ffffff?text=Law"
  }
];

const faqs = [
  {
    question: "What are the general entry requirements for undergraduate programs?",
    answer: "Typical entry requirements include A-levels or equivalent qualifications, personal statement, and sometimes interviews for specific programs. International students may need to provide English language proficiency test scores. Specific program requirements vary, so please check the detailed requirements on each program page."
  },
  {
    question: "Do you offer scholarships or financial aid?",
    answer: "Yes, Royal Academy UK offers a range of scholarships, bursaries, and financial aid packages based on academic merit, financial need, and specific talents. These include the Presidential Scholarship, Academic Excellence Awards, and need-based grants. Visit our Financial Aid page for details on eligibility and application processes."
  },
  {
    question: "Can I transfer credits from another institution?",
    answer: "We accept transfer credits from accredited institutions subject to assessment of course content, learning outcomes, and grades achieved. Transfer students should submit official transcripts and course descriptions as part of their application. Our admissions team will evaluate transferable credits on a case-by-case basis."
  },
  {
    question: "What support services are available to students?",
    answer: "We offer comprehensive support services including academic advising, career counseling, mental health services, disability support, tutoring programs, and writing centers. Our Student Success Center provides personalized guidance to help students excel academically and personally throughout their studies."
  },
  {
    question: "Are there internship or work experience opportunities?",
    answer: "Absolutely. Many of our programs include internship components or optional placement years. Our Career Development Office works with over 500 partner organizations to provide internship and work experience opportunities. Students also benefit from our industry mentorship program and networking events with alumni and employers."
  }
]; 