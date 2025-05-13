"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard3D } from "@/components/ui/GlassCard3D";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ShinyText } from "@/components/ui/ShinyText";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { useTranslation } from "@/hooks/useTranslation";
import { useAnimationConfig } from "@/hooks/useAnimationConfig";
import { FaCheckCircle, FaSearch, FaDownload, FaTimesCircle, FaLock, FaShieldAlt, 
  FaBarcode, FaGraduationCap, FaCertificate, FaAward, FaBriefcase, 
  FaUserGraduate, FaGlobeEurope, FaArrowRight } from "react-icons/fa";

interface CertificateResult {
  status: 'valid' | 'invalid' | null;
  data?: {
    studentName: string;
    courseName: string;
    issueDate: string;
    certificateID: string;
    registrationNumber: string;
  };
  message?: string;
}

export default function CertificateVerificationPage() {
  const { t, isRTL } = useTranslation();
  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<CertificateResult>({ status: null });
  const featuredRef = useRef(null);
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 });
  
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificateId(e.target.value);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      if (certificateId === 'RA-2023-00123' || certificateId === '2023-MBA-00456') {
        setVerificationResult({
          status: 'valid',
          data: {
            studentName: 'Alexander Johnson',
            courseName: 'Master of Business Administration',
            issueDate: 'June 15, 2023',
            certificateID: certificateId,
            registrationNumber: 'STU2023-4567',
          }
        });
      } else {
        setVerificationResult({
          status: 'invalid',
          message: 'Certificate ID not found in our records. Please check the ID and try again.'
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section with Advanced Design */}
      <div className="relative min-h-[70vh] bg-gradient-to-b from-darkblue via-darkblue-lighter to-darkblue overflow-hidden">
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
        
        <div className="container-custom relative z-10 pt-32 pb-20 min-h-[70vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero content */}
            <div>
              <motion.div
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                  Trusted Credentials
                </span>
                  
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Verify Your <br />
                  <ShinyText 
                    text="Greenwich Certificates"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Our secure verification system ensures the authenticity and integrity of all certificates issued by Greenwich.
                </p>
              </motion.div>
            </div>
            
            {/* Hero verification panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Verify Certificate</h2>
                <p className="text-blue-100 mb-6">
                  Enter your Certificate ID to verify its authenticity and access your certificate details.
                </p>
                
                <form onSubmit={handleVerify}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="certificateId" className="block text-blue-100 mb-2 text-sm">
                        Certificate ID
                      </label>
                      <input
                        type="text"
                        id="certificateId"
                        value={certificateId}
                        onChange={handleInputChange}
                        placeholder="e.g., RA-2023-00123"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-blue-300/50"
                        required
                      />
                      <p className="text-xs text-blue-200/70 mt-2">Try demo IDs: RA-2023-00123 or 2023-MBA-00456</p>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="secondary"
                      disabled={isLoading}
                      className="w-full py-3 shadow-lg"
                      icon={isLoading ? undefined : <FaSearch />}
                    >
                      {isLoading ? 'Verifying...' : 'Verify Certificate'}
                    </Button>
                  </div>
                </form>
                
                {verificationResult.status && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className={`mt-6 p-4 rounded-lg ${
                      verificationResult.status === 'valid'
                        ? 'bg-green-500/20 border border-green-500/30'
                        : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <div className="flex items-start">
                      {verificationResult.status === 'valid' ? (
                        <FaCheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                      ) : (
                        <FaTimesCircle className="w-5 h-5 text-red-400 mt-1 mr-3 flex-shrink-0" />
                      )}
                      
                      <div>
                        <h3 className={`text-sm font-semibold mb-1 ${
                          verificationResult.status === 'valid'
                            ? 'text-green-300'
                            : 'text-red-300'
                        }`}>
                          {verificationResult.status === 'valid'
                            ? 'Certificate is Valid'
                            : 'Verification Failed'}
                        </h3>
                        
                        {verificationResult.status === 'valid' && verificationResult.data ? (
                          <p className="text-sm text-blue-100">
                            Certificate belongs to {verificationResult.data.studentName}
                          </p>
                        ) : (
                          <p className="text-sm text-blue-100">
                            {verificationResult.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <FaShieldAlt className="w-4 h-4 text-blue-300 mr-2" />
                    <span className="text-sm text-blue-200">Secure Verification</span>
                  </div>
                  <div>
                    <Link href="#details" className="text-sm text-gold hover:text-gold/80 transition flex items-center">
                      Learn more <FaArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "50K+", label: "Certificates Issued" },
                { number: "100%", label: "Verification Accuracy" },
                { number: "24/7", label: "Online Verification" },
                { number: "Global", label: "Recognition" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/10" />
          </div>
        )}
      </div>
      
      {/* Certificate Details Section */}
      <Section id="details" className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 z-0"></div>
        <ParallaxBackground className="opacity-5" />
        
        <div className="container-custom py-16 md:py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
              Comprehensive Verification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue dark:text-white mb-4">
              Understanding Your Certificate
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Our certificates are designed with multiple security features to ensure authenticity and prevent forgery. Each certificate includes a unique identifier that can be verified through our secure system.
            </p>
          </div>
          
          {verificationResult.status === 'valid' && verificationResult.data ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-xl border border-gray-200 dark:border-dark-border mb-16"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Certificate preview */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/images/certificate-template.jpg"
                      alt="Certificate Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <div className="text-xs uppercase tracking-wider opacity-70 mb-1">Verified Certificate</div>
                        <div className="font-bold">{verificationResult.data.studentName}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<FaDownload />}
                      className="text-sm"
                    >
                      Download Certificate
                    </Button>
                  </div>
                </div>
                
                {/* Certificate details */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-darkblue dark:text-white mb-6">
                    Certificate Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Student Name</div>
                      <div className="font-medium text-gray-900 dark:text-white text-lg">{verificationResult.data.studentName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Qualification</div>
                      <div className="font-medium text-gray-900 dark:text-white text-lg">{verificationResult.data.courseName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issue Date</div>
                      <div className="font-medium text-gray-900 dark:text-white">{verificationResult.data.issueDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Certificate ID</div>
                      <div className="font-medium text-gray-900 dark:text-white">{verificationResult.data.certificateID}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Registration Number</div>
                      <div className="font-medium text-gray-900 dark:text-white">{verificationResult.data.registrationNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</div>
                      <div className="font-medium text-green-600 dark:text-green-400 flex items-center">
                        <FaCheckCircle className="mr-2 h-4 w-4" /> Verified & Authentic
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <div className="flex items-start">
                      <FaShieldAlt className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">Security Verification</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          This certificate has been verified using our secure blockchain technology. 
                          It includes a digital signature that cannot be tampered with or forged.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="mb-16"></div>
          )}
          
          {/* Certificate Types */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificateTypes.slice(0, 3).map((type, i) => (
                <GlassCard3D
                  key={i}
                  title={type.title}
                  description={type.description}
                  icon={<type.icon className="w-6 h-6 text-darkblue dark:text-blue-400" />}
                  badge={`Duration: ${type.duration}`}
                  badgeColor="blue"
                  glowColor="rgba(74, 111, 255, 0.4)"
                  className="h-full"
                />
              ))}
            </div>
          </div>
          
          {/* How it works */}
          <div className="mb-20" ref={featuredRef}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-4">
                How Certificate Verification Works
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Our certificate verification process is simple, secure, and reliable. Follow these steps to verify your certificate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaBarcode className="w-6 h-6 text-darkblue dark:text-blue-400" />,
                  title: "Find Your Certificate ID",
                  description: "Locate the unique Certificate ID on your physical certificate or academic transcript. You can also scan the QR code if available."
                },
                {
                  icon: <FaSearch className="w-6 h-6 text-darkblue dark:text-blue-400" />,
                  title: "Enter ID for Verification",
                  description: "Enter the Certificate ID in the verification form at the top of this page and click the 'Verify' button to check its authenticity."
                },
                {
                  icon: <FaCheckCircle className="w-6 h-6 text-darkblue dark:text-blue-400" />,
                  title: "View Verification Results",
                  description: "Review the verification results which will show the certificate's validity and details if it's authentic."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border shadow-lg relative"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-darkblue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 bg-brand-blue-100 dark:bg-dark-primary/20 rounded-full flex items-center justify-center mb-4 ml-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-darkblue dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
                Common Questions
              </span>
              <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {certificateFaqs.slice(0, 3).map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2 text-darkblue dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="md"
                href="/faq"
              >
                View All FAQs
              </Button>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-darkblue to-darkblue-lighter py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Advance Your Career?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Explore our accredited courses and earn internationally recognized certificates that open doors to new opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    href="/courses"
                    className="px-8"
                  >
                    Explore Courses
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="/contact"
                    className="px-8 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
const certificateTypes = [
  {
    icon: FaGraduationCap,
    title: "Professional Certificate",
    description: "Demonstrates competency in a specific professional field or skill set, ideal for career advancement or specialization.",
    duration: "3-6 months"
  },
  {
    icon: FaAward,
    title: "Executive Certificate",
    description: "Advanced certification for professionals seeking leadership roles, covering high-level management and strategic skills.",
    duration: "6-12 months"
  },
  {
    icon: FaCertificate,
    title: "Diploma",
    description: "Comprehensive credential covering in-depth knowledge in a particular field, equivalent to a significant educational achievement.",
    duration: "12-18 months"
  },
  {
    icon: FaUserGraduate,
    title: "Postgraduate Certificate",
    description: "Advanced academic certification for those with prior degrees, focusing on specialized knowledge and research skills.",
    duration: "6-12 months"
  },
  {
    icon: FaBriefcase,
    title: "Industry Certification",
    description: "Specialized credentials aligned with specific industry standards and requirements, often including practical assessments.",
    duration: "3-9 months"
  },
  {
    icon: FaGlobeEurope,
    title: "Global Competency Certificate",
    description: "Certification demonstrating cross-cultural competence and global business understanding for international careers.",
    duration: "3-6 months"
  }
];

const certificateFaqs = [
  {
    question: "How can I verify the authenticity of a Royal Academy UK certificate?",
    answer: "You can verify any Royal Academy UK certificate through our online verification portal by entering the unique certificate ID, scanning the QR code on the certificate, or contacting our verification department directly."
  },
  {
    question: "What happens if I lose my certificate?",
    answer: "If you lose your physical certificate, you can request a replacement through our student portal or by contacting our administrative office. A replacement fee may apply. Your digital certificate will always be available in your student account."
  },
  {
    question: "Are Royal Academy UK certificates recognized internationally?",
    answer: "Yes, our certificates are recognized by employers and educational institutions worldwide. We maintain accreditation from leading national and international accreditation bodies to ensure the global recognition of our programs."
  },
  {
    question: "How long does it take to receive my certificate after completing a course?",
    answer: "Digital certificates are typically issued within 2-3 weeks after successful completion of all course requirements and final assessments. Physical certificates are mailed within 4-6 weeks to your registered address."
  },
  {
    question: "Can employers verify my certificate directly?",
    answer: "Yes, employers can verify the authenticity of your certificate through our employer verification portal using your certificate ID or by contacting our verification department directly."
  }
]; 