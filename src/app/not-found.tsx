"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { GraduationCap } from "lucide-react";
import { FaHome, FaSearch, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-140px)] flex items-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="h-24 w-24 text-ukblue"/>
            </motion.div>
          </div>
          
          <h1 className="text-7xl font-bold text-ukblue mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto">
            The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="primary" 
              href="/" 
              className="flex items-center justify-center"
            >
              <FaHome className="mr-2" /> Back to Home
            </Button>
            <Button 
              variant="outline" 
              href="/contact" 
              className="flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Contact Support
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-silver-200">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <FaSearch className="text-gold-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Browse Courses</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore our wide range of educational courses.
              </p>
              <Link href="/courses" className="text-ukblue font-medium text-sm hover:underline">
                View Courses
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-silver-200">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <FaQuestionCircle className="text-gold-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find answers to commonly asked questions.
              </p>
              <Link href="/faq" className="text-ukblue font-medium text-sm hover:underline">
                View FAQ
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-silver-200">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-gold-600" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get in touch with our support team.
              </p>
              <Link href="/contact" className="text-ukblue font-medium text-sm hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
} 