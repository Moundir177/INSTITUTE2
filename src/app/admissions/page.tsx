"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaFileAlt, FaGraduationCap, FaUsers, FaCheckCircle, FaUniversity, FaGlobe } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShinyText } from "@/components/ui/ShinyText";
import { useTranslation } from '@/hooks/useTranslation';

export default function AdmissionsPage() {
  const { t, isRTL } = useTranslation();
  const [activeTab, setActiveTab] = useState<'undergraduate'|'graduate'|'international'>('undergraduate');
  
  // Admission steps
  const admissionSteps = [
    {
      title: "Research Programs",
      description: "Explore our range of undergraduate, postgraduate, and professional programs to find the right fit for your academic and career goals.",
      icon: <FaUniversity className="w-6 h-6 text-white" />
    },
    {
      title: "Check Requirements",
      description: "Review the academic, language, and other requirements for your chosen program to ensure you meet the eligibility criteria.",
      icon: <FaCheckCircle className="w-6 h-6 text-white" />
    },
    {
      title: "Prepare Documents",
      description: "Gather all required documents, including academic transcripts, recommendation letters, personal statement, and proof of language proficiency.",
      icon: <FaFileAlt className="w-6 h-6 text-white" />
    },
    {
      title: "Submit Application",
      description: "Complete and submit your application through our online portal before the relevant deadline for your chosen intake.",
      icon: <FaGraduationCap className="w-6 h-6 text-white" />
    },
    {
      title: "Interview (if required)",
      description: "Some programs require an interview or additional assessment. Prepare thoroughly if you're invited to this stage.",
      icon: <FaGlobe className="w-6 h-6 text-white" />
    }
  ];
  
  // Key dates
  const keyDates = [
    {
      title: "Undergraduate Applications",
      dates: [
        { term: "Fall 2024", deadline: "March 31, 2024" },
        { term: "Spring 2025", deadline: "October 31, 2024" }
      ]
    },
    {
      title: "Postgraduate Applications",
      dates: [
        { term: "Fall 2024", deadline: "May 31, 2024" },
        { term: "Spring 2025", deadline: "November 30, 2024" }
      ]
    },
    {
      title: "Professional Programs",
      dates: [
        { term: "Summer 2024", deadline: "April 15, 2024" },
        { term: "Fall 2024", deadline: "August 15, 2024" }
      ]
    }
  ];

  return (
    <>
      <Hero
        title="Admissions"
        description="Begin your journey at Royal Academy UK and transform your future"
        imageSrc="/images/admissions-hero.jpg"
        imageAlt="Students at Royal Academy UK campus"
        primaryButtonText="Apply Now"
        primaryButtonHref="/admissions/apply"
        secondaryButtonText="Request Information"
        secondaryButtonHref="/contact"
        pattern={true}
      />
      
      {/* Why Choose Us */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText 
              text="Why Choose Royal Academy UK" 
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join a prestigious institution with a rich heritage of academic excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-silver-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-ukblue/10 rounded-full flex items-center justify-center mb-4">
                  <FaGraduationCap className="text-ukblue text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Consistently ranked among the top universities with world-class faculty and research opportunities
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-silver-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-ukblue/10 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-ukblue text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Global Community</h3>
                <p className="text-gray-600">
                  Join a diverse student body representing over 100 countries and build lifelong international connections
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-silver-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-ukblue/10 rounded-full flex items-center justify-center mb-4">
                  <FaFileAlt className="text-ukblue text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovative Curriculum</h3>
                <p className="text-gray-600">
                  Forward-thinking programs designed to prepare you for the evolving demands of your chosen field
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="bg-silver-50 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-ukblue/10 rounded-full flex items-center justify-center mb-4">
                  <FaCalendarAlt className="text-ukblue text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Career Success</h3>
                <p className="text-gray-600">
                  96% of our graduates secure employment or further study within six months of graduation
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Application Process */}
      <Section id="apply" background="ukblue" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-silver-300 max-w-3xl mx-auto">
              We've simplified our application process to help you focus on showcasing your strengths and achievements
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['undergraduate', 'graduate', 'international'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-white text-ukblue"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Students
                </button>
              ))}
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-silver-500/30 -translate-x-1/2"></div>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-silver-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                variant="primary" 
                className="bg-gold-500 hover:bg-gold-600 text-white"
                href="https://apply.royalacademyuk.edu"
              >
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Key Dates */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText 
              text="Key Admission Dates" 
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mark these important dates on your calendar to ensure your application is submitted on time
            </p>
          </div>
          
          <div className="overflow-hidden bg-silver-50 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-6 text-ukblue">Undergraduate Programs</h3>
                <div className="space-y-6">
                  {keyDates[0].dates.map((date, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                          <span className="text-sm font-medium text-gray-500">{date.term}</span>
                          <span className="text-lg font-bold text-ukblue">{date.deadline}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{date.title}</h4>
                        <p className="text-gray-600 text-sm">{date.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-ukblue text-white">
                <h3 className="font-bold text-2xl mb-6">Graduate Programs</h3>
                <div className="space-y-6">
                  {keyDates[1].dates.map((date, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                          <span className="text-sm font-medium text-gray-500">{date.term}</span>
                          <span className="text-lg font-bold text-ukblue">{date.deadline}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{date.title}</h4>
                        <p className="text-silver-300 text-sm">{date.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Requirements Section */}
      <Section background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
                <p className="text-gray-600 mb-8">
                  Our admissions process is designed to identify motivated students with strong academic potential and extracurricular achievements who will contribute to our vibrant community.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-ukblue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Academic Excellence</h3>
                      <p className="text-gray-600 text-sm">Strong academic record with competitive grades in relevant subjects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-ukblue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Personal Statement</h3>
                      <p className="text-gray-600 text-sm">Compelling essay demonstrating motivation, achievements, and fit with your chosen program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-ukblue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Letters of Recommendation</h3>
                      <p className="text-gray-600 text-sm">Two academic references from teachers or professors familiar with your work</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCheckCircle className="text-ukblue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Extracurricular Activities</h3>
                      <p className="text-gray-600 text-sm">Evidence of leadership, community involvement, and accomplishments outside the classroom</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href="/programs">
                    Explore Programs
                  </Button>
                  <Button variant="outline" href="/contact">
                    Contact Admissions
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://placehold.co/800x600/00247d/ffffff?text=Admission+Requirements"
                    alt="Students in the admission process"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <h3 className="font-bold text-lg mb-2">Application Timeline</h3>
                  <p className="text-gray-600 text-sm mb-4">Most applications are processed within 4-6 weeks of submission. Early applications are encouraged.</p>
                  <div className="flex items-center text-sm text-ukblue font-medium">
                    <FaCalendarAlt className="mr-2" />
                    <span>Next Deadline: 15 January</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
const undergraduateDates = [
  {
    month: "OCT",
    day: "15",
    title: "Early Decision Deadline",
    description: "Priority consideration for scholarships and competitive programs"
  },
  {
    month: "JAN",
    day: "15",
    title: "Regular Application Deadline",
    description: "Final deadline for most undergraduate programs"
  },
  {
    month: "MAR",
    day: "31",
    title: "Admission Decisions Released",
    description: "All applicants notified of their admission status"
  },
  {
    month: "MAY",
    day: "1",
    title: "Confirmation Deadline",
    description: "Deadline to accept your offer and pay the enrollment deposit"
  }
];

const graduateDates = [
  {
    month: "DEC",
    day: "1",
    title: "Early Application Deadline",
    description: "First round consideration for all graduate programs"
  },
  {
    month: "FEB",
    day: "15",
    title: "Regular Application Deadline",
    description: "Final deadline for most master's programs"
  },
  {
    month: "APR",
    day: "15",
    title: "Admission Decisions",
    description: "All applicants notified of their admission status"
  },
  {
    month: "JUN",
    day: "1",
    title: "Enrollment Confirmation",
    description: "Deadline to confirm enrollment and submit deposit"
  }
]; 