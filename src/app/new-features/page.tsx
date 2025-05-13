"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { StudentReviews } from '@/components/ui/StudentReviews';
import { EventCountdown } from '@/components/ui/EventCountdown';
import { CourseComparison } from '@/components/ui/CourseComparison';
import { Button } from '@/components/ui/Button';

// Sample data for the course comparison
const features = [
  { id: 'cert', name: 'Certification', description: 'Receive an accredited certificate upon completion' },
  { id: 'mentor', name: 'Mentorship', description: 'One-on-one mentorship with industry experts' },
  { id: 'projects', name: 'Real Projects', description: 'Work on real-world projects for your portfolio' },
  { id: 'career', name: 'Career Support', description: 'Get job placement assistance and career guidance' },
  { id: 'community', name: 'Community Access', description: 'Join our exclusive community of professionals' },
];

const courses = [
  {
    id: 'basic',
    name: 'Foundation Course',
    price: '£499',
    duration: '3 months',
    level: 'Beginner',
    description: 'Perfect for those just starting their journey',
    features: { cert: true, mentor: false, projects: true, career: false, community: true },
    buttonText: 'Enroll Now',
    buttonLink: '/courses/foundation'
  },
  {
    id: 'advanced',
    name: 'Advanced Program',
    price: '£899',
    duration: '6 months',
    level: 'Intermediate',
    description: 'Take your skills to the next level',
    features: { cert: true, mentor: true, projects: true, career: false, community: true },
    popular: true,
    buttonText: 'Enroll Now',
    buttonLink: '/courses/advanced'
  },
  {
    id: 'pro',
    name: 'Professional Track',
    price: '£1,299',
    duration: '9 months',
    level: 'Advanced',
    description: 'Comprehensive training for industry professionals',
    features: { cert: true, mentor: true, projects: true, career: true, community: true },
    buttonText: 'Enroll Now',
    buttonLink: '/courses/professional'
  }
];

export default function NewFeaturesPage() {
  // Set target date for countdown to 14 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);
  
  return (
    <main>
      <Section
        title="Royal Academy UK - New Features"
        subtitle="Explore our enhanced website components and features"
      >
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Welcome to our new features showcase. We've enhanced our website with new components to improve your experience and provide more information about our educational offerings.
          </p>
          <Button href="/showcase" variant="primary">View Full Component Showcase</Button>
        </div>
      </Section>
      
      <Section
        title="Enhanced Course Cards"
        subtitle="Our courses now feature improved cards with badges and interactive elements"
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Web Development"
            description="Master front-end and back-end technologies to build modern web applications"
            imageSrc="/images/courses/course1.jpg"
            href="/courses/web-development"
            variant="flat"
          />
          
          <Card 
            title="Data Science"
            description="Learn advanced analytics and machine learning techniques for data-driven insights"
            imageSrc="/images/courses/course2.jpg"
            href="/courses/data-science"
            variant="elevated"
            badge="New"
            badgeColor="blue"
          />
          
          <Card 
            title="UX/UI Design"
            description="Create beautiful, intuitive user interfaces with modern design principles"
            imageSrc="/images/courses/course3.jpg"
            href="/courses/design"
            variant="gradient"
            badge="Popular"
            badgeColor="gold"
          />
        </div>
      </Section>
      
      <Section
        title="Enrollment Countdown"
        subtitle="Don't miss out on our upcoming courses - enrollment closing soon"
      >
        <div className="max-w-4xl mx-auto">
          <EventCountdown 
            targetDate={targetDate}
            title="Autumn Semester Registration"
            subtitle="Classes begin in September - Limited places available"
            variant="primary"
          />
        </div>
      </Section>
      
      <Section
        title="Student Success Stories"
        subtitle="Hear what our graduates have to say about their experience"
        background="light"
      >
        <StudentReviews limit={3} showFilters={true} />
      </Section>
      
      <Section
        title="Course Comparison"
        subtitle="Find the perfect course that matches your goals and requirements"
      >
        <CourseComparison 
          features={features}
          courses={courses}
        />
      </Section>
    </main>
  );
} 