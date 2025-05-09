"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaBook, FaLaptop, FaUsers, FaGlobe, FaChalkboardTeacher, FaCertificate, FaBuilding, FaHandshake } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        description="Discover the comprehensive range of educational services offered by Royal Academy UK to support your academic and professional journey."
        imageSrc="/images/services-hero.jpg"
        imageAlt="Students using Royal Academy UK services"
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
      />

      {/* Main Services */}
      <Section
        title="Educational Services"
        subtitle="Explore our core services designed to enhance your learning experience"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                title={service.title}
                description={service.description}
                imageSrc={service.image}
                imageAlt={service.title}
                variant="elevated"
              >
                <div className="mt-4">
                  <Button href={service.href} variant="primary" fullWidth>
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Support Services */}
      <Section
        title="Student Support Services"
        subtitle="We're committed to supporting your success throughout your educational journey"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-silver-200 hover:border-ukblue transition-colors"
            >
              <div className="w-12 h-12 bg-ukblue/10 rounded-full flex items-center justify-center mb-4 text-ukblue">
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Corporate Services */}
      <Section
        title="Corporate Services"
        subtitle="Partner with Royal Academy UK to develop your organization's talent and capabilities"
        background="ukblue"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Custom Training Solutions</h3>
            <p className="text-silver-300">
              Royal Academy UK offers tailored corporate training programs to help businesses develop their workforce and address specific organizational needs. Our expert faculty works closely with your team to design and deliver customized training solutions that align with your strategic objectives.
            </p>
            <div className="space-y-4">
              {corporateServices.map((service, index) => (
                <div key={service} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-white">{service}</p>
                </div>
              ))}
            </div>
            <Button href="/contact" variant="accent">Request Corporate Services</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/corporate-training.jpg"
              alt="Corporate training session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      {/* Service Process */}
      <Section
        title="Our Service Process"
        subtitle="How we deliver exceptional educational experiences"
      >
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-silver-200 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white p-6 rounded-lg border border-silver-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 mx-auto bg-ukblue rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold border-4 border-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        background="gray"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-3 text-ukblue">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Don't see your question? Contact our support team for assistance.</p>
          <Button href="/contact" variant="primary">Contact Support</Button>
        </div>
      </Section>
    </>
  );
}

// Data
const mainServices = [
  {
    title: "Academic Programs",
    description: "Comprehensive degree and certificate programs designed to prepare you for career success across various industries.",
    image: "/images/academic-programs.jpg",
    href: "/courses"
  },
  {
    title: "Professional Development",
    description: "Short courses and workshops for professionals looking to enhance their skills or transition to new roles.",
    image: "/images/professional-development.jpg",
    href: "/courses"
  },
  {
    title: "Online Learning",
    description: "Flexible digital learning experiences that allow you to study at your own pace from anywhere in the world.",
    image: "/images/online-learning.jpg",
    href: "/courses"
  },
  {
    title: "Research Opportunities",
    description: "Collaborate with leading academics on cutting-edge research projects across various disciplines.",
    image: "/images/research.jpg",
    href: "/about"
  },
  {
    title: "Career Services",
    description: "Comprehensive career guidance, job placement assistance, and networking opportunities with industry partners.",
    image: "/images/career-services.jpg",
    href: "/contact"
  },
  {
    title: "International Exchange",
    description: "Study abroad opportunities and international partnerships with prestigious institutions worldwide.",
    image: "/images/international.jpg",
    href: "/about"
  }
];

const supportServices = [
  {
    icon: FaBook,
    title: "Academic Advising",
    description: "Personalized guidance to help you navigate your academic journey and achieve your educational goals."
  },
  {
    icon: FaLaptop,
    title: "Technology Support",
    description: "Access to cutting-edge technology resources and technical assistance for all your learning needs."
  },
  {
    icon: FaUsers,
    title: "Counseling Services",
    description: "Confidential counseling to support your mental health and overall wellbeing throughout your studies."
  },
  {
    icon: FaGlobe,
    title: "International Support",
    description: "Specialized assistance for international students, including visa guidance and cultural adaptation."
  },
  {
    icon: FaChalkboardTeacher,
    title: "Tutoring Services",
    description: "Additional academic support through one-on-one and group tutoring sessions across all subjects."
  },
  {
    icon: FaCertificate,
    title: "Certification Prep",
    description: "Targeted preparation for industry certification exams to enhance your professional credentials."
  },
  {
    icon: FaBuilding,
    title: "Housing Assistance",
    description: "Help finding suitable accommodation options near our campus for both domestic and international students."
  },
  {
    icon: FaHandshake,
    title: "Alumni Network",
    description: "Lifelong access to our global alumni community for networking, mentorship, and professional development."
  }
];

const corporateServices = [
  "Customized training programs aligned with your organizational goals",
  "Leadership and management development workshops",
  "Technical skills training for specific industry needs",
  "Team building and communication enhancement programs",
  "Change management and organizational development consulting",
  "Executive education and C-suite development",
  "Industry-specific certification preparation"
];

const serviceProcess = [
  {
    title: "Assessment",
    description: "We begin by understanding your specific educational needs and goals through comprehensive assessment."
  },
  {
    title: "Customization",
    description: "Our expert team develops tailored learning plans and programs designed to meet your unique requirements."
  },
  {
    title: "Implementation",
    description: "We deliver high-quality educational experiences through engaging and interactive methodologies."
  },
  {
    title: "Evaluation",
    description: "Regular assessment ensures effectiveness and continuous improvement of our educational services."
  }
];

const faqs = [
  {
    question: "What types of courses does Royal Academy UK offer?",
    answer: "Royal Academy UK offers a wide range of academic programs, professional development courses, and specialized certifications across business, technology, healthcare, arts, and more. Our courses are available in various formats including full-time, part-time, and online options."
  },
  {
    question: "Are Royal Academy UK's certificates recognized internationally?",
    answer: "Yes, our certificates and qualifications are recognized by employers and educational institutions worldwide. We maintain accreditation from leading national and international accreditation bodies to ensure the quality and recognition of our programs."
  },
  {
    question: "How can I apply for a course at Royal Academy UK?",
    answer: "You can apply for our courses through our online application portal available on our website. Simply select your desired program, complete the application form, and submit the required documentation. Our admissions team will guide you through the process."
  },
  {
    question: "Does Royal Academy UK offer financial assistance?",
    answer: "Yes, we offer various financial assistance options including scholarships, grants, and payment plans. Eligibility criteria vary by program, and we encourage interested applicants to contact our financial aid office for detailed information."
  },
  {
    question: "What student support services are available?",
    answer: "We provide comprehensive support services including academic advising, career counseling, technology support, mental health services, tutoring, and more. Our dedicated student services team is committed to ensuring your success throughout your educational journey."
  }
]; 