"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContentLayout } from "@/components/ui/ContentLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShinyText } from "@/components/ui/ShinyText";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGlobe,
  FaUniversity,
  FaGraduationCap,
  FaUserGraduate,
  FaBookOpen
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Royal Academy UK"
        description="Get in touch with our departments and offices to learn more about our programs, admissions, or campus life."
        backgroundPattern="grid"
        size="lg"
      />
      
      <SectionDivider variant="angle" color="silver-50" />
      
      {/* Contact Information */}
      <Section background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="How Can We Help You?"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you're a prospective student, alumni, or community member, our team is here to assist you with any questions or inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard className="h-full p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-ukblue/10 rounded-full flex items-center justify-center text-ukblue mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        href={card.link}
                        className="w-full justify-center"
                      >
                        {card.buttonText}
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
      
      <SectionDivider variant="curve" color="white" />
      
      {/* Contact Form & Map */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <ContentLayout
            title="Send Us a Message"
            subtitle="GET IN TOUCH"
            description="Please fill out the form below and we'll get back to you as soon as possible."
            imageSrc="https://placehold.co/800x600/00247d/ffffff?text=Campus+Map"
            imagePosition="right"
            imageStyle="rounded"
            variation={1}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-md border border-silver-300 focus:outline-none focus:ring-2 focus:ring-ukblue/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 rounded-md border border-silver-300 focus:outline-none focus:ring-2 focus:ring-ukblue/20"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-silver-300 focus:outline-none focus:ring-2 focus:ring-ukblue/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-silver-300 focus:outline-none focus:ring-2 focus:ring-ukblue/20"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="programs">Academic Programs</option>
                  <option value="financial">Financial Aid</option>
                  <option value="campus">Campus Visits</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-silver-300 focus:outline-none focus:ring-2 focus:ring-ukblue/20"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the <a href="/privacy" className="text-ukblue hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <div>
                <Button variant="primary" className="mt-2">
                  Submit Message
                </Button>
              </div>
            </form>
          </ContentLayout>
        </div>
      </Section>
      
      <SectionDivider variant="wave" color="ukblue" flip={true} />
      
      {/* Visit Us */}
      <Section background="ukblue" className="py-16 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Visit Our Campus"
              tagName="h2"
              size="3xl"
              gradient="gold"
              className="mb-4"
            />
            <p className="text-silver-300 max-w-3xl mx-auto">
              Experience Royal Academy UK in person with a campus tour or by attending one of our events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusLocations.map((location, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold mb-3">{location.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                      <p>{location.address}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <FaPhone className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                      <p>{location.phone}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <FaEnvelope className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                      <p>{location.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-silver-300 mb-4">
                    <p>
                      <span className="font-medium">Hours:</span> {location.hours}
                    </p>
                    <p>
                      <span className="font-medium">Tours:</span> {location.tours}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    href={location.mapsLink}
                    className="w-full justify-center border-white text-white hover:bg-white/10"
                  >
                    View on Map
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
      
      <SectionDivider variant="wave" color="white" />
      
      {/* FAQ Section */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <FAQ
            title="Frequently Asked Questions"
            description="Find answers to common questions about contacting and visiting Royal Academy UK."
            items={faqItems}
            variant="bordered"
            columns={2}
          />
        </div>
      </Section>
    </>
  );
}

// Data
const contactCards = [
  {
    title: "Admissions Office",
    description: "For prospective students and application inquiries.",
    icon: <FaUserGraduate size={24} />,
    buttonText: "Contact Admissions",
    link: "/contact/admissions",
  },
  {
    title: "Academic Affairs",
    description: "For current students and academic program inquiries.",
    icon: <FaGraduationCap size={24} />,
    buttonText: "Contact Academics",
    link: "/contact/academics",
  },
  {
    title: "International Office",
    description: "For international student inquiries and visa support.",
    icon: <FaGlobe size={24} />,
    buttonText: "Contact International",
    link: "/contact/international",
  },
  {
    title: "Alumni Relations",
    description: "For alumni inquiries and staying connected.",
    icon: <FaBookOpen size={24} />,
    buttonText: "Contact Alumni",
    link: "/contact/alumni",
  },
];

const campusLocations = [
  {
    name: "Main Campus",
    address: "123 University Avenue, London SW1A 1AA",
    phone: "+44 20 1234 5678",
    email: "info@royalacademy.uk",
    hours: "Monday-Friday: 9:00am - 5:00pm",
    tours: "Daily at 10:00am and 2:00pm",
    mapsLink: "https://maps.google.com",
  },
  {
    name: "North Campus",
    address: "45 Scholar Street, Manchester M1 1AA",
    phone: "+44 20 2345 6789",
    email: "north@royalacademy.uk",
    hours: "Monday-Friday: 8:30am - 4:30pm",
    tours: "Monday, Wednesday, Friday at 11:00am",
    mapsLink: "https://maps.google.com",
  },
  {
    name: "Medical Campus",
    address: "78 Health Road, Birmingham B1 1AA",
    phone: "+44 20 3456 7890",
    email: "medical@royalacademy.uk",
    hours: "Monday-Friday: 9:00am - 5:00pm",
    tours: "By appointment only",
    mapsLink: "https://maps.google.com",
  },
];

const faqItems = [
  {
    question: "How can I schedule a campus tour?",
    answer: "Campus tours are available daily at scheduled times. You can book a tour through our online booking system, or by contacting the Admissions Office directly at tours@royalacademy.uk or +44 20 1234 5678."
  },
  {
    question: "What is the best way to contact specific departments?",
    answer: "The best way to contact specific departments is through their dedicated email addresses, which can be found on our directory page. Alternatively, you can call our main switchboard at +44 20 1234 5678 and ask to be connected."
  },
  {
    question: "How long does it typically take to receive a response to an inquiry?",
    answer: "We strive to respond to all inquiries within 2 business days. During peak times (such as application deadlines), response times may be slightly longer. If your matter is urgent, please indicate this in the subject line of your email."
  },
  {
    question: "Is there parking available for visitors?",
    answer: "Yes, visitor parking is available at all our campuses. Main Campus and North Campus have dedicated visitor parking lots, while Medical Campus offers validated parking in the adjacent parking structure. Please request a parking pass from the security office upon arrival."
  },
  {
    question: "How do I request information about a specific program?",
    answer: "You can request program-specific information by completing our online inquiry form, selecting the program you're interested in, and providing your contact details. A program representative will follow up with more information."
  },
  {
    question: "Can I meet with a faculty member during my visit?",
    answer: "Yes, meetings with faculty members can be arranged with advance notice. Please contact the specific department or faculty member at least two weeks prior to your visit to schedule an appointment."
  }
]; 