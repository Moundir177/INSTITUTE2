"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Royal Academy UK"
        description="Learn about our rich history, mission, values, and the team behind our prestigious institution."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Royal Academy UK Building"
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Courses"
        secondaryButtonHref="/courses"
        imagePosition="left"
      />

      {/* Our Story */}
      <Section
        title="Our Story"
        subtitle="A legacy of excellence in education spanning over two decades"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="prose max-w-none"
          >
            <p className="text-gray-700 mb-4">
              Founded in 1995, Royal Academy UK began as a small institution dedicated to providing quality business education to aspiring professionals. Over the years, we have grown into one of the country's most respected educational institutions, expanding our course offerings across multiple disciplines.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey has been marked by a commitment to academic excellence, innovation, and student success. We have consistently evolved our teaching methodologies and curriculum to reflect the changing needs of industries and ensure our students receive the most relevant and up-to-date education.
            </p>
            <p className="text-gray-700">
              Today, with thousands of successful graduates working in various sectors globally, we continue to uphold our founding principles while embracing new challenges and opportunities in the educational landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/history.jpg"
              alt="Royal Academy UK through the years"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission and Values */}
      <Section
        title="Our Mission & Values"
        subtitle="Guiding principles that drive everything we do"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-silver-200 rounded-lg p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-100 rounded-full opacity-50" />
            <h3 className="text-2xl font-bold mb-6 text-ukblue">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              At Royal Academy UK, our mission is to provide exceptional educational experiences that empower individuals to reach their full potential and make meaningful contributions to society. We strive to:
            </p>
            <ul className="space-y-3 text-gray-700 list-disc pl-5">
              <li>Deliver high-quality, industry-relevant education</li>
              <li>Foster a culture of innovation and continuous learning</li>
              <li>Prepare students for successful careers in a global economy</li>
              <li>Promote ethical leadership and social responsibility</li>
              <li>Create an inclusive environment that celebrates diversity</li>
            </ul>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-white border border-silver-200 rounded-lg p-6 hover:border-ukblue transition-colors"
                >
                  <div className="w-12 h-12 bg-silver-100 rounded-full flex items-center justify-center mb-4 text-gold-500 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section
        title="Our Leadership Team"
        subtitle="Meet the dedicated professionals guiding our institution"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                title={member.name}
                description={member.position}
                imageSrc={member.photo}
                imageAlt={member.name}
                variant="bordered"
              >
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Accreditations */}
      <Section
        title="Our Accreditations"
        subtitle="Royal Academy UK is recognized by leading accreditation bodies worldwide"
      >
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src={accreditation.logo}
                  alt={accreditation.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">{accreditation.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

// Data
const coreValues = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from academic delivery to student support."
  },
  {
    title: "Integrity",
    description: "We uphold ethical principles and transparency in all our operations and relationships."
  },
  {
    title: "Innovation",
    description: "We embrace change and continuously seek new and better ways to educate and inspire."
  },
  {
    title: "Inclusivity",
    description: "We celebrate diversity and create an environment where everyone feels valued and respected."
  }
];

const leadershipTeam = [
  {
    name: "Dr. Jonathan Blackwell",
    position: "President & CEO",
    photo: "/images/ceo.jpg",
    bio: "With over 25 years of experience in higher education, Dr. Blackwell has led Royal Academy UK to become a premier institution recognized globally."
  },
  {
    name: "Prof. Elizabeth Mitchell",
    position: "Academic Director",
    photo: "/images/academic-director.jpg",
    bio: "A renowned scholar with extensive experience in curriculum development and academic excellence across multiple disciplines."
  },
  {
    name: "Mr. Robert Chambers",
    position: "Chief Operations Officer",
    photo: "/images/coo.jpg",
    bio: "Bringing corporate expertise to education, Mr. Chambers ensures operational efficiency and strategic growth."
  },
  {
    name: "Dr. Sophia Reynolds",
    position: "Director of Research",
    photo: "/images/research-director.jpg",
    bio: "Leading our research initiatives, Dr. Reynolds has published extensively in educational methodology and innovation."
  },
  {
    name: "Ms. Diana Patel",
    position: "Director of Student Affairs",
    photo: "/images/student-affairs.jpg",
    bio: "Dedicated to creating exceptional student experiences and ensuring comprehensive support services."
  },
  {
    name: "Mr. James Wilson",
    position: "International Relations Director",
    photo: "/images/international-director.jpg",
    bio: "Developing global partnerships and ensuring Royal Academy UK maintains its international prestige and reach."
  }
];

const accreditations = [
  {
    name: "Quality Assurance Agency for Higher Education (QAA)",
    logo: "/images/qaa-logo.jpg"
  },
  {
    name: "British Accreditation Council (BAC)",
    logo: "/images/bac-logo.jpg"
  },
  {
    name: "International Association of Universities (IAU)",
    logo: "/images/iau-logo.jpg"
  },
  {
    name: "European Association for Quality Assurance (ENQA)",
    logo: "/images/enqa-logo.jpg"
  },
  {
    name: "Association of MBAs (AMBA)",
    logo: "/images/amba-logo.jpg"
  }
]; 