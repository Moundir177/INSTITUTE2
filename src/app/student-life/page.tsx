"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaUsers, FaGlobe, FaCalendarAlt, FaBuilding, FaBookOpen, FaCoffee } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyText } from "@/components/ui/ShinyText";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { EventCard } from "@/components/ui/EventCard";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCard } from "@/components/ui/StatCard";
import { CallToAction } from "@/components/ui/CallToAction";
import { ImageGallery } from "@/components/ui/ImageGallery";

export default function StudentLifePage() {
  const [activeTab, setActiveTab] = useState<'accommodation'|'clubs'|'events'|'support'>('accommodation');
  
  return (
    <>
      <Hero
        title="Student Life"
        description="Experience a vibrant campus community and world-class facilities at Royal Academy UK"
        imageSrc="https://placehold.co/1920x1080/00247d/ffffff?text=Student+Life"
        imageAlt="Students enjoying campus life at Royal Academy UK"
        primaryButtonText="Campus Housing"
        primaryButtonHref="#accommodation"
        secondaryButtonText="Student Activities"
        secondaryButtonHref="#student-activities"
      />
      
      {/* Student Experience Overview */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <ShinyText
                  text="A Thriving Campus Community"
                  tagName="h2"
                  size="3xl"
                  gradient="royal"
                  className="mb-6"
                />
                <p className="text-gray-600 mb-8">
                  At Royal Academy UK, student life extends far beyond the classroom. Our vibrant campus community offers countless opportunities to connect, grow, and create lasting memories during your academic journey.
                </p>
                
                <div className="space-y-5 mb-8">
                  {studentLifeHighlights.map((highlight, index) => (
                    <div key={index} className="flex">
                      <div className="w-12 h-12 rounded-full bg-silver-100 flex items-center justify-center mr-4 flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{highlight.title}</h3>
                        <p className="text-gray-600 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="primary" href="#student-activities">
                  Explore Student Activities
                </Button>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://placehold.co/800x600/00247d/ffffff?text=Campus+Activities"
                        alt="Students at campus event"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://placehold.co/800x1200/00247d/ffffff?text=Student+Clubs"
                        alt="Student club activities"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://placehold.co/800x1200/00247d/ffffff?text=Campus+Life"
                        alt="Students relaxing on campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://placehold.co/800x600/00247d/ffffff?text=Student+Sports"
                        alt="Students playing sports"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Campus Statistics */}
      <Section background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Campus By The Numbers"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus community with endless opportunities for learning, growth, and connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value={200}
              label="Student Clubs & Societies"
              icon={<FaUsers />}
            />
            <StatCard
              value={30}
              label="International Students"
              symbol="%"
              icon={<FaGlobe />}
            />
            <StatCard
              value={500}
              label="Campus Events Per Year"
              icon={<FaCalendarAlt />}
            />
            <StatCard
              value={16}
              label="Residential Halls"
              icon={<FaBuilding />}
            />
          </div>
        </div>
      </Section>
      
      {/* Accommodation Section */}
      <Section id="accommodation" background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Campus Accommodation"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience comfortable, convenient, and safe living options designed to enhance your university experience
            </p>
          </div>
          
          {/* Accommodation Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {['accommodation', 'clubs', 'events', 'support'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-ukblue text-white"
                      : "bg-white text-gray-700 hover:bg-silver-100"
                  }`}
                >
                  {tab === 'accommodation' ? 'Housing' : 
                   tab === 'clubs' ? 'Clubs & Societies' : 
                   tab === 'events' ? 'Events & Activities' : 'Student Support'}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              {/* Housing Tab Content */}
              {activeTab === 'accommodation' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {accommodationOptions.map((option, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="rounded-lg overflow-hidden border border-silver-200 h-full">
                          <div className="relative h-48">
                            <Image
                              src={option.image}
                              alt={option.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="font-bold text-lg mb-2">{option.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Type:</span>
                                <span className="font-medium">{option.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-medium">{option.location}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Cost:</span>
                                <span className="font-medium">{option.cost}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="primary" href="/accommodation">
                      View All Housing Options
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Clubs Tab Content */}
              {activeTab === 'clubs' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {studentClubs.map((club, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="flex bg-silver-50 p-5 rounded-lg">
                          <div className="w-16 h-16 bg-ukblue/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            {club.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">{club.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{club.description}</p>
                            <div className="flex items-center text-sm text-ukblue">
                              <span className="bg-ukblue/10 px-2 py-0.5 rounded text-xs font-medium">{club.members} members</span>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="primary" href="/clubs-societies">
                      Explore All Clubs & Societies
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Events Tab Content */}
              {activeTab === 'events' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {campusEvents.map((event, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <EventCard
                          title={event.title}
                          description={event.description}
                          date={event.date}
                          location={event.location}
                          image={event.image}
                          href="/events/details"
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="primary" href="/events">
                      View All Campus Events
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Support Tab Content */}
              {activeTab === 'support' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {studentSupport.map((support, index) => (
                      <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="bg-silver-50 rounded-lg p-6">
                          <div className="w-12 h-12 rounded-full bg-ukblue/10 flex items-center justify-center mb-4">
                            {support.icon}
                          </div>
                          <h3 className="font-bold text-lg mb-2">{support.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{support.description}</p>
                          <Button 
                            variant="outline" 
                            href={support.link} 
                            className="w-full justify-center text-sm"
                          >
                            Learn More
                          </Button>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="primary" href="/student-support">
                      Explore All Support Services
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Student Activities */}
      <div id="student-activities">
        <ParallaxBackground
          backgroundImage="https://placehold.co/1920x1080/00247d/ffffff?text=Student+Activities"
          overlay="gradient"
          height="min-h-[500px]"
        >
          <div className="container-custom py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal>
                  <span className="inline-block bg-gold-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                    STUDENT EXPERIENCE
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    A Campus Alive with Activity
                  </h2>
                  <p className="text-silver-300 mb-6">
                    With over 200 student-led clubs and societies, regular cultural events, and vibrant social activities, there's always something happening at Royal Academy UK.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-medium mb-1">Student Union</h3>
                      <p className="text-silver-300 text-sm">
                        Our active Student Union organizes events, advocates for student interests, and supports clubs and societies across campus.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-medium mb-1">Sports & Recreation</h3>
                      <p className="text-silver-300 text-sm">
                        From competitive varsity teams to casual intramural leagues, our sports program offers opportunities for athletes at all levels.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-medium mb-1">Arts & Culture</h3>
                      <p className="text-silver-300 text-sm">
                        Express your creativity through music ensembles, theater productions, art exhibitions, and cultural festivals throughout the year.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="bg-gold-500 hover:bg-gold-600"
                    href="/student-activities"
                  >
                    Discover Student Activities
                  </Button>
                </ScrollReveal>
              </div>
              
              <div className="relative flex justify-center">
                <ScrollReveal direction="right">
                  <div className="grid grid-cols-3 gap-4">
                    {activityImages.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="relative h-32 lg:h-40 rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ParallaxBackground>
      </div>
      
      {/* Campus Facilities */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="World-Class Campus Facilities"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our modern campus offers state-of-the-art facilities designed to enhance your learning experience and support your daily life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusFacilities.map((facility, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <FacilityCard
                  name={facility.name}
                  description={facility.description}
                  features={facility.features}
                  image={facility.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Student Testimonials */}
      <Section background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Student Testimonials"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their experiences at Royal Academy UK
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TestimonialCard
                  name={testimonial.name}
                  program={testimonial.program}
                  year={testimonial.year}
                  image={testimonial.image}
                  quote={testimonial.quote}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Campus Life Gallery */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Life at Royal Academy UK"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore moments from our vibrant campus life through our student gallery
            </p>
          </div>
          
          <ScrollReveal>
            <ImageGallery
              images={galleryImages}
              columns={3}
              gap="md"
              aspectRatio="mixed"
              rounded="lg"
            />
          </ScrollReveal>
        </div>
      </Section>
      
      {/* International Student Experience */}
      <Section background="ukblue" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block bg-gold-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  INTERNATIONAL EXPERIENCE
                </span>
                <h2 className="text-3xl font-bold text-white mb-6">
                  A Truly Global Campus
                </h2>
                <p className="text-silver-300 mb-6">
                  With students from over 100 countries, Royal Academy UK offers a rich multicultural environment that fosters global connections and cross-cultural understanding.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                      <FaGlobe />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">International Student Support</h3>
                      <p className="text-silver-300 text-sm">Specialized services including visa advice, cultural adjustment support, and language resources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                      <FaUsers />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Cultural Societies</h3>
                      <p className="text-silver-300 text-sm">Join one of our many cultural societies to celebrate traditions and connect with students from similar backgrounds</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                      <FaCalendarAlt />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">International Celebrations</h3>
                      <p className="text-silver-300 text-sm">Regular cultural events and celebrations showcasing the diversity of our student community</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  className="bg-gold-500 hover:bg-gold-600"
                  href="/international-students"
                >
                  International Student Guide
                </Button>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://placehold.co/800x600/00247d/ffffff?text=International+Students"
                    alt="International students on campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="text-2xl font-bold mb-2">30%</p>
                      <p>International students from 100+ countries</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Final Call to Action */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <CallToAction
            title="Ready to Join Our Vibrant Campus Community?"
            description="Apply now to experience all that Royal Academy UK has to offer. Our admissions team is ready to guide you through the application process."
            primaryButtonText="Apply Now"
            primaryButtonHref="/admissions/apply"
            secondaryButtonText="Schedule a Campus Tour"
            secondaryButtonHref="/campus-tour"
            backgroundClassName="bg-gradient-to-r from-ukblue via-ukblue/90 to-ukred/70"
          />
        </div>
      </Section>
    </>
  );
}

// Data
const studentLifeHighlights = [
  {
    icon: <FaUsers className="text-ukblue text-xl" />,
    title: "Diverse Community",
    description: "Connect with students from over 100 countries and all walks of life in our inclusive campus environment."
  },
  {
    icon: <FaGraduationCap className="text-ukblue text-xl" />,
    title: "Academic Integration",
    description: "Extend your learning beyond the classroom through academic societies, study groups, and research opportunities."
  },
  {
    icon: <FaGlobe className="text-ukblue text-xl" />,
    title: "Global Experiences",
    description: "Take advantage of study abroad programs, international internships, and global partnerships."
  },
  {
    icon: <FaCalendarAlt className="text-ukblue text-xl" />,
    title: "Vibrant Events Calendar",
    description: "Enjoy a packed schedule of cultural celebrations, guest lectures, performances, and social gatherings."
  }
];

const accommodationOptions = [
  {
    name: "Lancaster Hall",
    description: "Modern residence hall located in the heart of campus, offering convenient access to academic buildings and campus facilities.",
    type: "University Residence",
    location: "Central Campus",
    cost: "£160-£200 per week",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Lancaster+Hall"
  },
  {
    name: "Victoria Court",
    description: "Contemporary apartment-style living with private kitchens and shared common spaces, ideal for upper-level students.",
    type: "Student Apartments",
    location: "East Campus",
    cost: "£180-£220 per week",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Victoria+Court"
  },
  {
    name: "Global Village",
    description: "Intercultural living community designed to foster international friendships and cross-cultural understanding.",
    type: "Themed Housing",
    location: "West Campus",
    cost: "£150-£190 per week",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Global+Village"
  }
];

const studentClubs = [
  {
    icon: <FaGlobe className="text-ukblue text-xl" />,
    name: "International Students Association",
    description: "Cultural exchange events, support for international students, and global awareness initiatives.",
    members: 350
  },
  {
    icon: <FaGraduationCap className="text-ukblue text-xl" />,
    name: "Business & Entrepreneurship Society",
    description: "Workshops, networking events, and startup competitions for aspiring business leaders.",
    members: 280
  },
  {
    icon: <FaUsers className="text-ukblue text-xl" />,
    name: "Debate Club",
    description: "Regular debates on contemporary issues with opportunities to compete in national tournaments.",
    members: 120
  },
  {
    icon: <FaCalendarAlt className="text-ukblue text-xl" />,
    name: "Arts & Performance Collective",
    description: "Creative outlet for visual artists, musicians, actors, and dancers with regular showcases.",
    members: 200
  }
];

const campusEvents = [
  {
    title: "Welcome Week Festival",
    description: "A week of events, activities, and socializing to kick off the new academic year.",
    date: "September 15-22",
    location: "Main Campus Quad",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Welcome+Week"
  },
  {
    title: "Cultural Diversity Fair",
    description: "Celebration of international cultures featuring food, performances, and exhibitions.",
    date: "October 10",
    location: "Student Union Building",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Cultural+Fair"
  },
  {
    title: "Career & Internship Expo",
    description: "Connect with employers and explore career opportunities across various industries.",
    date: "November 5",
    location: "Business School Atrium",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Career+Expo"
  }
];

const studentSupport = [
  {
    icon: <FaGraduationCap className="text-ukblue text-xl" />,
    title: "Academic Support Center",
    description: "Personalized tutoring, study skills workshops, and writing assistance for all students.",
    link: "/academic-support"
  },
  {
    icon: <FaUsers className="text-ukblue text-xl" />,
    title: "Wellbeing Services",
    description: "Confidential counseling, mental health resources, and wellness programs to support student health.",
    link: "/wellbeing"
  },
  {
    icon: <FaGlobe className="text-ukblue text-xl" />,
    title: "International Student Office",
    description: "Specialized support for international students including visa guidance and cultural adjustment.",
    link: "/international-office"
  },
  {
    icon: <FaCalendarAlt className="text-ukblue text-xl" />,
    title: "Career Development Center",
    description: "Career counseling, job search strategies, interview preparation, and alumni networking.",
    link: "/career-center"
  }
];

const activityImages = [
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+1",
    alt: "Students participating in campus activity"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+2",
    alt: "Student club event"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+3",
    alt: "Campus celebration"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+4",
    alt: "Student performance"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+5",
    alt: "Sports competition"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Activity+6",
    alt: "Student volunteering"
  }
];

const campusFacilities = [
  {
    name: "University Library",
    description: "Our flagship library offers extensive print and digital resources, study spaces, and specialized research services.",
    features: [
      "Over 1 million print volumes",
      "24/7 study spaces during term time",
      "Research consultation services",
      "Digital media lab"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Library"
  },
  {
    name: "Sports & Fitness Center",
    description: "State-of-the-art facilities for fitness, recreation, and competitive sports.",
    features: [
      "Olympic-sized swimming pool",
      "Multi-purpose sports hall",
      "Modern fitness suite with personal trainers",
      "Outdoor playing fields"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Sports+Center"
  },
  {
    name: "Student Union Building",
    description: "The hub of student life offering social spaces, services, and resources for student organizations.",
    features: [
      "Student-run café and restaurant",
      "Event spaces and meeting rooms",
      "Student advice center",
      "Club and society offices"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Student+Union"
  },
  {
    name: "Technology Resource Center",
    description: "Cutting-edge technology resources and support for all students.",
    features: [
      "Computer labs with specialized software",
      "Equipment loan service",
      "Technology workshops and training",
      "IT support helpdesk"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Tech+Center"
  },
  {
    name: "Health & Wellness Center",
    description: "Comprehensive healthcare services and wellness resources on campus.",
    features: [
      "Primary healthcare clinic",
      "Mental health counseling",
      "Nutrition services",
      "Wellness workshops and programs"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Health+Center"
  },
  {
    name: "Arts & Performance Spaces",
    description: "Dedicated facilities for creative expression and cultural events.",
    features: [
      "400-seat performance theater",
      "Art gallery and exhibition space",
      "Music practice rooms",
      "Film and media production studio"
    ],
    image: "https://placehold.co/800x600/00247d/ffffff?text=Arts+Center"
  }
];

const studentTestimonials = [
  {
    name: "Emily Chen",
    program: "BSc in Computer Science",
    year: "2023",
    image: "https://placehold.co/400x400/00247d/ffffff?text=Emily+C",
    quote: "The student life at Royal Academy UK has been as enriching as the academic experience. Through the coding society, I've made lasting friendships and even secured an internship through a connection I made at one of our hackathons."
  },
  {
    name: "Mohammed Al-Farsi",
    program: "MBA",
    year: "2022",
    image: "https://placehold.co/400x400/00247d/ffffff?text=Mohammed+A",
    quote: "As an international student, I was nervous about adjusting to life in the UK. The international student support services and the global community on campus made my transition seamless and enjoyable."
  },
  {
    name: "Sophie Williams",
    program: "MA in International Relations",
    year: "2023",
    image: "https://placehold.co/400x400/00247d/ffffff?text=Sophie+W",
    quote: "Living in university accommodation was a highlight of my experience. I met people from all over the world, and the convenient location meant I could fully immerse myself in campus activities while focusing on my studies."
  },
  {
    name: "James Taylor",
    program: "BSc in Biology",
    year: "2022",
    image: "https://placehold.co/400x400/00247d/ffffff?text=James+T",
    quote: "Balancing academics with my passion for sports has been possible thanks to the excellent athletic facilities and supportive coaching staff. Representing the university in national competitions has been a dream come true."
  }
];

const galleryImages = [
  {
    src: "https://placehold.co/800x800/00247d/ffffff?text=Campus+Life+1",
    alt: "Students studying in the library",
    caption: "Academic Excellence"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Campus+Life+2",
    alt: "Sports event on campus",
    caption: "Sports & Recreation"
  },
  {
    src: "https://placehold.co/800x1000/00247d/ffffff?text=Campus+Life+3",
    alt: "Cultural celebration",
    caption: "Cultural Diversity"
  },
  {
    src: "https://placehold.co/800x800/00247d/ffffff?text=Campus+Life+4",
    alt: "Student club activity",
    caption: "Student Clubs"
  },
  {
    src: "https://placehold.co/800x600/00247d/ffffff?text=Campus+Life+5",
    alt: "Performance at student theater",
    caption: "Arts & Performance"
  },
  {
    src: "https://placehold.co/800x800/00247d/ffffff?text=Campus+Life+6",
    alt: "Campus dining",
    caption: "Campus Dining"
  }
]; 