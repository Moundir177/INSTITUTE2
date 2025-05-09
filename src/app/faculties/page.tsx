"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaGraduationCap, FaFlask, FaBookOpen, FaAward } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyText } from "@/components/ui/ShinyText";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export default function FacultiesPage() {
  return (
    <>
      <Hero
        title="Our Faculties"
        description="Discover our academic departments and the distinguished faculty leading them"
        imageSrc="https://placehold.co/1920x1080/00247d/ffffff?text=Faculty"
        imageAlt="Royal Academy UK campus with faculty buildings"
        primaryButtonText="Meet Our Faculty"
        primaryButtonHref="#faculty-list"
        secondaryButtonText="Research Areas"
        secondaryButtonHref="#research"
      />
      
      {/* Faculty Overview */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <ShinyText
                  text="Academic Excellence Across Disciplines"
                  tagName="h2"
                  size="3xl"
                  gradient="royal"
                  className="mb-6"
                />
                <p className="text-gray-600 mb-8">
                  Royal Academy UK is organized into six primary faculties, each representing a center of excellence in teaching, research, and innovation. Our academic structure fosters both disciplinary depth and interdisciplinary collaboration.
                </p>
                
                <div className="space-y-4 mb-8">
                  {facultyStats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-silver-100 flex items-center justify-center mr-4">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-ukblue">{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="primary" href="#faculty-list">
                  Explore Our Faculties
                </Button>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="right">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://placehold.co/800x600/00247d/ffffff?text=Faculty+Excellence"
                    alt="Faculty members in discussion"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gold-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold">35+</div>
                    <div className="text-sm">Research Centers</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Faculty List */}
      <Section id="faculty-list" background="silver-50" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Our Academic Faculties"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each faculty brings together distinguished scholars, innovative researchers, and dedicated educators united by a passion for excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faculties.map((faculty, index) => (
              <ScrollReveal key={faculty.id} delay={index * 0.1}>
                <GlassCard
                  href={`/faculties/${faculty.id}`}
                  className="h-full"
                  hoverEffect="lift"
                >
                  <div className="relative h-48 -mx-5 -mt-5 mb-6 rounded-t-lg overflow-hidden">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-xl">{faculty.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{faculty.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Departments:</span>
                      <span className="font-medium">{faculty.departments}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Programs:</span>
                      <span className="font-medium">{faculty.programs}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Faculty Members:</span>
                      <span className="font-medium">{faculty.facultyMembers}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-ukblue font-medium">Dean: {faculty.dean}</span>
                    <span className="text-gray-600 text-sm">View Details →</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Featured Faculty Member */}
      <ParallaxBackground
        backgroundImage="https://placehold.co/1920x1080/00247d/ffffff?text=Faculty+Leadership"
        overlay="gradient"
        height="min-h-[500px]"
      >
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block bg-gold-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  FACULTY SPOTLIGHT
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Professor Elizabeth Reynolds
                </h2>
                <p className="text-silver-300 mb-6">
                  Professor Reynolds serves as the Dean of the Faculty of Science & Technology and leads pioneering research in quantum computing applications for climate modeling.
                </p>
                <div className="text-silver-300 space-y-2 mb-6">
                  <div className="flex items-center">
                    <FaGraduationCap className="mr-2" />
                    <span>PhD in Theoretical Physics, Cambridge University</span>
                  </div>
                  <div className="flex items-center">
                    <FaAward className="mr-2" />
                    <span>Royal Society Fellow, National Science Medal Recipient</span>
                  </div>
                  <div className="flex items-center">
                    <FaBookOpen className="mr-2" />
                    <span>Author of "Quantum Solutions for a Changing Planet"</span>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  className="bg-gold-500 hover:bg-gold-600"
                  href="/faculty/reynolds"
                >
                  View Profile
                </Button>
              </ScrollReveal>
            </div>
            
            <div className="flex justify-center">
              <ScrollReveal direction="right">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src="https://placehold.co/400x400/00247d/ffffff?text=Prof.+Reynolds"
                    alt="Professor Elizabeth Reynolds"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxBackground>
      
      {/* Research Highlights */}
      <Section id="research" background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Research Excellence"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty lead groundbreaking research initiatives that address global challenges and expand the boundaries of knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchHighlights.map((research, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-silver-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full text-white mb-4 ${research.categoryColor}`}>
                      {research.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{research.title}</h3>
                    <p className="text-gray-600 mb-4">{research.description}</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={research.leaderImage}
                          alt={research.leaderName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{research.leaderName}</p>
                        <p className="text-gray-600 text-sm">{research.leaderTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="primary" href="/research">
              Explore All Research
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Join Our Faculty */}
      <Section background="ukblue" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-white mb-6">Join Our Academic Community</h2>
                <p className="text-silver-300 mb-6">
                  Royal Academy UK is always seeking exceptional scholars, researchers, and practitioners to join our prestigious faculty. We offer a dynamic and supportive environment for academic careers with opportunities for research, teaching excellence, and global collaboration.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <FaUsers size={14} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Collaborative Environment</h3>
                      <p className="text-silver-300 text-sm">Work alongside world-class colleagues in a supportive academic community</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <FaFlask size={14} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Research Support</h3>
                      <p className="text-silver-300 text-sm">Access to substantial research funding, state-of-the-art facilities, and administrative support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <FaGraduationCap size={14} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Teaching Excellence</h3>
                      <p className="text-silver-300 text-sm">Opportunity to teach and mentor exceptional students from around the world</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="primary" 
                    className="bg-gold-500 hover:bg-gold-600"
                    href="/careers"
                  >
                    View Open Positions
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    href="/contact"
                  >
                    Contact HR Department
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="https://placehold.co/600x800/00247d/ffffff?text=Join+Our+Faculty"
                    alt="Faculty meeting"
                    fill
                    className="object-cover"
                  />
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
const facultyStats = [
  {
    icon: <FaUsers className="text-ukblue text-xl" />,
    value: "450+",
    label: "Academic Faculty Members"
  },
  {
    icon: <FaGraduationCap className="text-ukblue text-xl" />,
    value: "72%",
    label: "Hold PhDs from Top-Tier Universities"
  },
  {
    icon: <FaAward className="text-ukblue text-xl" />,
    value: "120+",
    label: "Research Awards in the Last 5 Years"
  },
  {
    icon: <FaBookOpen className="text-ukblue text-xl" />,
    value: "2,500+",
    label: "Publications in Peer-Reviewed Journals"
  }
];

const faculties = [
  {
    id: "business-economics",
    name: "Business & Economics",
    description: "A powerhouse for business education and economic research, with strong industry connections and a focus on sustainable and ethical business practices.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Business",
    departments: 5,
    programs: 12,
    facultyMembers: 65,
    dean: "Prof. James Wilson"
  },
  {
    id: "science-technology",
    name: "Science & Technology",
    description: "Home to cutting-edge research in computer science, engineering, and the natural sciences with exceptional laboratory facilities and industry partnerships.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Science",
    departments: 7,
    programs: 15,
    facultyMembers: 85,
    dean: "Prof. Elizabeth Reynolds"
  },
  {
    id: "arts-humanities",
    name: "Arts & Humanities",
    description: "Celebrating human creativity and critical thinking across literature, philosophy, history, languages, and creative arts with a global perspective.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Arts",
    departments: 6,
    programs: 10,
    facultyMembers: 70,
    dean: "Prof. David Chen"
  },
  {
    id: "social-sciences",
    name: "Social Sciences",
    description: "Addressing complex social challenges through rigorous research in psychology, sociology, political science, and international relations.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Social+Sciences",
    departments: 5,
    programs: 8,
    facultyMembers: 60,
    dean: "Prof. Sarah Okonkwo"
  },
  {
    id: "medicine-health",
    name: "Medicine & Health Sciences",
    description: "Advancing healthcare through innovative research, clinical excellence, and interdisciplinary approaches to global health challenges.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Medicine",
    departments: 8,
    programs: 14,
    facultyMembers: 95,
    dean: "Prof. Robert Kim"
  },
  {
    id: "law",
    name: "Law",
    description: "Preparing the next generation of legal professionals through rigorous education in domestic and international law with opportunities for practical experience.",
    image: "https://placehold.co/800x600/00247d/ffffff?text=Law",
    departments: 3,
    programs: 6,
    facultyMembers: 45,
    dean: "Prof. Helen Patel"
  }
];

const researchHighlights = [
  {
    category: "Climate Science",
    categoryColor: "bg-green-600",
    title: "Climate Resilience in Urban Environments",
    description: "Developing innovative approaches to enhance urban resilience to climate change impacts through sustainable infrastructure and policy frameworks.",
    leaderName: "Dr. Michael Stevens",
    leaderTitle: "Professor of Environmental Engineering",
    leaderImage: "https://placehold.co/400x400/00247d/ffffff?text=Dr.+Stevens"
  },
  {
    category: "Artificial Intelligence",
    categoryColor: "bg-purple-600",
    title: "Ethical AI in Healthcare Decision-Making",
    description: "Investigating frameworks for ensuring ethical implementation of AI systems in clinical settings, with emphasis on transparency and bias mitigation.",
    leaderName: "Dr. Aisha Rahman",
    leaderTitle: "Associate Professor of Computer Science",
    leaderImage: "https://placehold.co/400x400/00247d/ffffff?text=Dr.+Rahman"
  },
  {
    category: "Public Health",
    categoryColor: "bg-red-600",
    title: "Global Pandemic Preparedness Systems",
    description: "Analyzing international response mechanisms to infectious disease outbreaks and developing improved frameworks for future pandemic preparedness.",
    leaderName: "Prof. Thomas Chen",
    leaderTitle: "Chair of Global Health Studies",
    leaderImage: "https://placehold.co/400x400/00247d/ffffff?text=Prof.+Chen"
  },
  {
    category: "Economic Policy",
    categoryColor: "bg-ukblue",
    title: "Inclusive Economic Growth Strategies",
    description: "Researching policy approaches that promote economic growth while addressing inequality and ensuring benefits are widely distributed across society.",
    leaderName: "Dr. Elena Rodriguez",
    leaderTitle: "Professor of Economics",
    leaderImage: "https://placehold.co/400x400/00247d/ffffff?text=Dr.+Rodriguez"
  }
]; 