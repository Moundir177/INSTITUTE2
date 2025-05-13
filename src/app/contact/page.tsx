"use client";

import React, { useState, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ShinyText } from '@/components/ui/ShinyText';
import { FloatingElements } from '@/components/ui/FloatingElements';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle, 
  FaGlobeEurope, FaBuilding, FaUniversity, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { useAnimationConfig } from '@/hooks/useAnimationConfig';

export default function ContactPage() {
  const { t, isRTL } = useTranslation();
  const { shouldReduceMotion, fadeInVariants, getScrollBehavior } = useAnimationConfig();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulated API call
    setTimeout(() => {
      // In a real application, you would send data to an API
      // For example: await fetch('/api/contact', {method: 'POST', body: JSON.stringify(formData)})
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Section with Advanced Design */}
      <div className="relative min-h-[65vh] bg-gradient-to-b from-darkblue via-darkblue-lighter to-darkblue overflow-hidden">
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
        
        <div className="container-custom relative z-10 pt-32 pb-20 min-h-[65vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero content */}
            <div>
              <motion.div
                initial={fadeInVariants.hidden}
                animate={fadeInVariants.visible}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/20">
                  Get In Touch
                </span>
                  
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  We'd Love To<br />
                  <ShinyText 
                    text="Hear From You"
                    tagName="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white"
                  />
                </h1>
                  
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Have questions about our programs, admissions, or need any assistance? Our team is ready to help you take the next step in your educational journey.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="#contact-form" 
                    className="px-8 py-3.5 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
                  >
                    Contact Us
                  </Button>
                    
                  <Button 
                    variant="outline" 
                    size="lg" 
                    href="/visit" 
                    className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-3.5 text-base font-medium"
                  >
                    Schedule a Visit
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/contact-hero.jpg"
                    alt="Greenwich Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -left-6 max-w-[220px] bg-white rounded-xl p-3 shadow-xl"
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Response Time</h3>
                      <p className="text-lg font-bold text-darkblue">24-48 hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElements className="text-white/10" />
          </div>
        )}
      </div>
      
      {/* Contact Methods Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
              Multiple Ways to Reach Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Choose the most convenient way to get in touch with our various departments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Main Campus",
                details: [
                  "123 Academic Street",
                  "London, SW1A 1AA",
                  "United Kingdom"
                ],
                icon: <FaMapMarkerAlt />,
                link: "https://maps.google.com",
                linkText: "View on Map",
                color: "blue"
              },
              {
                title: "Phone Numbers",
                details: [
                  "General: +44 20 1234 5678",
                  "Admissions: +44 20 1234 5679",
                  "Student Support: +44 20 1234 5680"
                ],
                icon: <FaPhone />,
                link: "tel:+442012345678",
                linkText: "Call Main Line",
                color: "green"
              },
              {
                title: "Email Addresses",
                details: [
                  "info@royalacademy.uk",
                  "admissions@royalacademy.uk",
                  "support@royalacademy.uk"
                ],
                icon: <FaEnvelope />,
                link: "mailto:info@royalacademy.uk",
                linkText: "Send Email",
                color: "purple"
              },
              {
                title: "Office Hours",
                details: [
                  "Monday - Friday: 9:00 AM - 5:00 PM",
                  "Saturday: 10:00 AM - 2:00 PM",
                  "Sunday: Closed"
                ],
                icon: <FaClock />,
                link: "/visit",
                linkText: "Book an Appointment",
                color: "orange"
              },
              {
                title: "International Office",
                details: [
                  "Global Engagement Center",
                  "East Wing, Main Building",
                  "international@royalacademy.uk"
                ],
                icon: <FaGlobeEurope />,
                link: "/international",
                linkText: "International Support",
                color: "teal"
              },
              {
                title: "Media Inquiries",
                details: [
                  "Press Office",
                  "media@royalacademy.uk",
                  "+44 20 1234 5681"
                ],
                icon: <FaBuilding />,
                link: "/media",
                linkText: "Press Resources",
                color: "red"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-dark-border group hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white ${
                    item.color === "blue" ? "bg-darkblue" :
                    item.color === "green" ? "bg-green-600" :
                    item.color === "purple" ? "bg-purple-600" :
                    item.color === "orange" ? "bg-orange-500" :
                    item.color === "teal" ? "bg-teal-600" :
                    "bg-red-600"
                  }`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-darkblue dark:text-white mb-3">{item.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{detail}</li>
                    ))}
                  </ul>
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-darkblue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    {item.linkText} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Contact Form Section */}
      <Section background="light" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-6">How Can We Help You?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you have questions about admission requirements, program details, or campus facilities, we're here to provide the information you need.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-darkblue text-white flex items-center justify-center flex-shrink-0">
                    <FaUniversity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkblue dark:text-white mb-1">Academic Programs</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Questions about our undergraduate, graduate, and professional programs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-darkblue text-white flex items-center justify-center flex-shrink-0">
                    <FaUserGraduate className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkblue dark:text-white mb-1">Admissions & Financial Aid</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Support with applications, requirements, scholarships, and funding options
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-darkblue text-white flex items-center justify-center flex-shrink-0">
                    <FaChalkboardTeacher className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkblue dark:text-white mb-1">Student Services</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Assistance with housing, health services, career development, and campus resources
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-darkblue text-white flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkblue dark:text-white mb-1">Alumni Relations</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Connect with our alumni network, events, benefits, and opportunities
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-darkblue text-white rounded-xl">
                <h3 className="text-xl font-bold mb-3">Emergency Contact</h3>
                <p className="mb-2">
                  For urgent matters requiring immediate attention:
                </p>
                <p className="font-semibold">
                  Emergency Hotline: +44 20 1234 5690
                </p>
                <p className="mt-2 text-sm text-blue-200">
                  Available 24/7 for campus emergencies
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-7 xl:col-span-8" ref={formRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-dark-card rounded-xl shadow-lg border border-gray-200 dark:border-dark-border p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-darkblue dark:text-white">Send Us a Message</h2>
              
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-300 p-6 rounded-lg flex items-start"
                >
                  <FaCheckCircle className="text-green-500 mt-1 mr-4 text-xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Thank you for your message!</h3>
                    <p>We've received your inquiry and will get back to you within 24-48 hours. A confirmation has been sent to your email address.</p>
                  </div>
                </motion.div>
              )}
              
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 text-red-800 dark:text-red-300 p-6 rounded-lg flex items-start"
                >
                  <FaExclamationCircle className="text-red-500 mt-1 mr-4 text-xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">There was a problem sending your message</h3>
                    <p>{error}</p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-background dark:text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-background dark:text-white"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Phone Number <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-background dark:text-white"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-background dark:text-white appearance-none bg-no-repeat"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\" fill=\"%23555\"/></svg>')", backgroundPosition: "right 16px center" }}
                      required
                    >
                      <option value="">Please select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Undergraduate Admissions">Undergraduate Admissions</option>
                      <option value="Graduate Admissions">Graduate Admissions</option>
                      <option value="Financial Aid & Scholarships">Financial Aid & Scholarships</option>
                      <option value="International Students">International Students</option>
                      <option value="Campus Visits">Campus Visits</option>
                      <option value="Faculty Contact">Faculty Contact</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkblue dark:focus:ring-dark-highlight dark:bg-dark-background dark:text-white"
                    placeholder="Please describe how we can help you..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the <a href="/privacy-policy" className="text-darkblue dark:text-blue-400 hover:underline">Privacy Policy</a> and consent to having my data processed as described therein.
                  </label>
                </div>
                
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section background="white" className="pb-0">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 bg-darkblue/10 text-darkblue rounded-full text-sm font-medium backdrop-blur-sm dark:bg-darkblue/30 dark:text-blue-300">
            Visit Us
          </span>
          <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-4">
            Our Location
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
            Located in the heart of London, Greenwich is easily accessible by public transportation. We're just a short walk from Westminster Underground Station.
          </p>
          <div className="inline-flex items-center text-darkblue dark:text-blue-400 font-medium mb-8">
            <FaMapMarkerAlt className="mr-2" />
            123 Academic Street, London, SW1A 1AA, United Kingdom
          </div>
        </div>
        
        <div className="relative h-[500px] rounded-t-lg overflow-hidden shadow-lg border-t border-x border-gray-200 dark:border-dark-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6899754740716!2d-0.12786692380815234!3d51.50748096361937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2s10%20Downing%20St%2C%20London%20SW1A%202AA%2C%20UK!5e0!3m2!1sen!2sus!4v1693310565259!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Greenwich Location"
          ></iframe>
          
          {/* Map overlay with directions */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkblue/90 to-darkblue/40 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Getting Here</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">By Underground</p>
                    <p>Westminster Station (Jubilee, Circle, District lines) - 5 min walk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">By Bus</p>
                    <p>Routes 11, 24, 87, 88 - Stop at Parliament Square</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Parking</p>
                    <p>Limited parking available on campus. Public parking at Q-Park Westminster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 