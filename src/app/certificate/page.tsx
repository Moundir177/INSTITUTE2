"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaCheckCircle, FaSearch, FaDownload } from "react-icons/fa";

export default function CertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [searchStatus, setSearchStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showExample, setShowExample] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setSearchStatus("loading");
    // Simulate API call
    setTimeout(() => {
      // Demo validation - in real app this would be an API call
      if (certificateId === "RAC-2023-1234" || certificateId === "RAC-2022-5678") {
        setSearchStatus("success");
      } else {
        setSearchStatus("error");
      }
    }, 1500);
  };

  const handleUseExample = () => {
    setCertificateId("RAC-2023-1234");
    setSearchStatus("idle");
    setShowExample(true);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Certificate Verification"
        description="Verify the authenticity of certificates issued by Royal Academy UK through our secure verification system."
        imageSrc="/images/certificate-hero.jpg"
        imageAlt="Royal Academy UK certificate with gold emblem"
        primaryButtonText="Learn About Our Certifications"
        primaryButtonHref="#certificate-info"
      />

      {/* Verification Tool */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-ukblue mb-6">Certificate Verification Tool</h2>
            <p className="text-gray-600 mb-6">
              Enter the unique certificate ID found on your Royal Academy UK certificate to verify its authenticity.
            </p>

            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label htmlFor="certificate-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Certificate ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="certificate-id"
                    placeholder="e.g. RAC-2023-1234"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Don't have a certificate ID?{" "}
                  <button
                    type="button"
                    onClick={handleUseExample}
                    className="text-ukblue hover:underline focus:outline-none"
                  >
                    Use an example ID
                  </button>
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Button type="submit" variant="primary" disabled={searchStatus === "loading"}>
                  {searchStatus === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaSearch />
                      Verify Certificate
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Results */}
            {searchStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 border border-green-200 bg-green-50 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-green-600">
                    <FaCheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Certificate Verified</h3>
                    <p className="text-green-700 mb-4">This certificate has been validated as authentic.</p>
                    <div className="bg-white rounded-lg border border-silver-200 p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Certificate ID</p>
                          <p className="font-medium">{certificateId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Issue Date</p>
                          <p className="font-medium">15 June 2023</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Recipient</p>
                          <p className="font-medium">John Smith</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Course</p>
                          <p className="font-medium">Business Administration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" className="flex items-center gap-2">
                        <FaDownload />
                        Download Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {searchStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 border border-red-200 bg-red-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-red-800 mb-2">Certificate Not Found</h3>
                <p className="text-red-700 mb-4">
                  We couldn't verify the certificate ID you provided. Please check the ID and try again.
                </p>
                <p className="text-sm text-gray-600">
                  If you continue to experience issues, please{" "}
                  <a href="/contact" className="text-ukblue hover:underline">
                    contact our support team
                  </a>{" "}
                  for assistance.
                </p>
              </motion.div>
            )}

            {showExample && searchStatus === "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 border border-ukblue/20 bg-ukblue/5 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-ukblue mb-2">Example Certificate</h3>
                <p className="text-gray-700 mb-4">
                  Click "Verify Certificate" to see a demonstration of our verification system using the example certificate ID.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

      {/* Certificate Information */}
      <Section
        id="certificate-info"
        title="Our Certifications"
        subtitle="Learn about the types of certificates issued by Royal Academy UK"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-ukblue">Internationally Recognized Credentials</h3>
            <p className="text-gray-700">
              At Royal Academy UK, we issue high-quality, secure certificates that are recognized by employers and educational institutions worldwide. Our certification process adheres to strict standards to ensure authenticity and reliability.
            </p>
            <div className="space-y-4">
              {certificateFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-ukblue mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-8 border-white"
          >
            <Image
              src="/images/certificate-sample.jpg"
              alt="Sample Royal Academy UK certificate"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      {/* Certificate Types */}
      <Section
        title="Types of Certificates"
        subtitle="Explore the different certifications offered by Royal Academy UK"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificateTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-silver-200 hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mb-4 text-gold-600">
                  <type.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="border-t border-silver-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Typical Duration:</h4>
                  <p className="text-sm text-gray-600">{type.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Certificate FAQs"
        subtitle="Common questions about our certification process"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {certificateFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm border border-silver-200"
            >
              <h3 className="text-lg font-semibold mb-3 text-ukblue">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="ukblue" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 text-silver-300">
            Earn a prestigious certification from Royal Academy UK and open doors to new opportunities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/courses" variant="accent" size="lg">
              Explore Certification Courses
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Admissions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Data
import { FaGraduationCap, FaCertificate, FaAward, FaBriefcase, FaUserGraduate, FaGlobeEurope } from "react-icons/fa";

const certificateFeatures = [
  {
    title: "Secure & Tamper-Proof",
    description: "Each certificate includes security features to prevent forgery and tampering, ensuring the integrity of your credentials."
  },
  {
    title: "QR Code Verification",
    description: "Certificates include a QR code that allows instant verification of authenticity when scanned."
  },
  {
    title: "Digital & Physical Copies",
    description: "Receive both digital and physical copies of your certificate upon successful completion of your course."
  },
  {
    title: "Employer Verification Portal",
    description: "Employers can easily verify your certificate through our secure online portal using your certificate ID."
  },
  {
    title: "Internationally Recognized",
    description: "Our certificates are recognized by employers and educational institutions worldwide."
  }
];

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