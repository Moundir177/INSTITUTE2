"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { StudentReviews } from '@/components/ui/StudentReviews';
import { EventCountdown } from '@/components/ui/EventCountdown';
import { CourseComparison } from '@/components/ui/CourseComparison';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionDivider } from '@/components/ui/SectionDivider';

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

export default function ShowcasePage() {
  // Set target date for countdown to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  
  return (
    <>
      <PageHeader
        title="Component Showcase"
        description="Explore our newly enhanced UI components"
        backgroundPattern="dots"
        size="lg"
      />
      
      <main>
        <Section
          title="Enhanced Card Components"
          subtitle="Our cards now support new styling options, badges, and smooth animations"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Standard Card"
              description="This is a standard card with the default styling"
              imageSrc="/images/courses/course1.jpg"
              href="/courses/web-development"
              variant="flat"
            />
            
            <Card 
              title="Elevated Card with Badge"
              description="This card features elevation effect and a badge"
              imageSrc="/images/courses/course2.jpg"
              href="/courses/data-science"
              variant="elevated"
              badge="New"
              badgeColor="blue"
            />
            
            <Card 
              title="Gradient Card"
              description="This card uses a beautiful gradient background for emphasis"
              imageSrc="/images/courses/course3.jpg"
              href="/courses/design"
              variant="gradient"
              badge="Popular"
              badgeColor="gold"
            />
          </div>
        </Section>
        
        <SectionDivider />
        
        <Section
          title="Event Countdown Timer"
          subtitle="Create urgency with animated countdown timers for enrollments and events"
          background="light"
        >
          <div className="max-w-4xl mx-auto">
            <EventCountdown 
              targetDate={targetDate}
              title="Summer Enrollment Closing Soon"
              subtitle="Secure your place in our summer programs before registration ends"
              variant="primary"
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <EventCountdown 
                targetDate={targetDate}
                title="Webinar Starting In"
                subtitle="Join our free webinar on career opportunities"
                variant="light"
              />
              
              <EventCountdown 
                targetDate={targetDate}
                title="Scholarship Deadline"
                subtitle="Apply for our merit scholarship before time runs out"
                variant="gradient"
              />
            </div>
          </div>
        </Section>
        
        <SectionDivider />
        
        <Section
          title="Student Reviews"
          subtitle="Our new review component allows prospective students to filter testimonials by course category"
        >
          <StudentReviews showFilters={true} />
        </Section>
        
        <SectionDivider />
        
        <Section
          title="Course Comparison"
          subtitle="Help students make informed decisions with our interactive course comparison tool"
          background="light"
        >
          <CourseComparison 
            features={features}
            courses={courses}
          />
        </Section>
        
        <SectionDivider />
        
        <Section
          title="How to Use These Components"
          subtitle="Implementation guidelines for developers"
        >
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <h3>Component Integration</h3>
            <p>
              All components featured on this page can be easily integrated into any page of the website.
              They are fully responsive and support both light and dark modes.
            </p>
            
            <h3>Card Component</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
              {`<Card 
  title="Course Title"
  description="Course description goes here"
  imageSrc="/path/to/image.jpg"
  href="/link/to/course"
  variant="elevated"  // Options: flat, elevated, bordered, gradient
  badge="New"         // Optional badge text
  badgeColor="blue"   // Options: blue, gold, green, red, purple
/>`}
            </pre>
            
            <h3>Student Reviews Component</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
              {`<StudentReviews 
  limit={6}          // Number of reviews to display
  showFilters={true} // Whether to show category filters
/>`}
            </pre>
            
            <h3>Event Countdown Component</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
              {`<EventCountdown 
  targetDate={new Date("2023-12-31")}
  title="Custom Title"
  subtitle="Custom subtitle text"
  variant="primary"  // Options: primary, dark, light, gradient
/>`}
            </pre>
            
            <h3>Course Comparison Component</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
              {`<CourseComparison 
  features={featuresArray}
  courses={coursesArray}
  title="Optional Custom Title"
  subtitle="Optional custom subtitle"
/>`}
            </pre>
          </div>
        </Section>
      </main>
    </>
  );
} 