"use client";

import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";
import { ShinyText } from "./ShinyText";
import { ScrollReveal } from "./ScrollReveal";
import { EventCard } from "./EventCard";
import { FacilityCard } from "./FacilityCard";
import { TestimonialCard } from "./TestimonialCard";
import { StatCard } from "./StatCard";
import { CallToAction } from "./CallToAction";
import { FaGraduationCap, FaUsers, FaGlobe, FaCalendarAlt } from "react-icons/fa";

/**
 * Royal Academy UK Design System
 * 
 * This component serves as a visual guide for maintaining consistent design
 * across the Royal Academy UK website. It documents colors, typography, spacing,
 * and UI components used throughout the site.
 */
export function DesignSystem() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-12">Royal Academy UK Design System</h1>
      
      {/* Color Palette */}
      <Section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Color Palette</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ColorSwatch name="UK Blue" hex="#00247D" className="bg-ukblue" />
              <ColorSwatch name="UK Red" hex="#CF142B" className="bg-ukred" />
              <ColorSwatch name="UK White" hex="#FFFFFF" className="bg-ukwhite border border-silver-200" textColor="text-gray-800" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Gold Shades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              <ColorSwatch name="Gold 300" hex="#FFD966" className="bg-gold-300" textColor="text-gray-800" />
              <ColorSwatch name="Gold 400" hex="#FFCD33" className="bg-gold-400" textColor="text-gray-800" />
              <ColorSwatch name="Gold 500" hex="#FFC000" className="bg-gold-500" textColor="text-gray-800" />
              <ColorSwatch name="Gold 600" hex="#CC9A00" className="bg-gold-600" textColor="text-white" />
              <ColorSwatch name="Gold 700" hex="#997300" className="bg-gold-700" textColor="text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Silver Shades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              <ColorSwatch name="Silver 100" hex="#E9ECEF" className="bg-silver-100" textColor="text-gray-800" />
              <ColorSwatch name="Silver 200" hex="#DEE2E6" className="bg-silver-200" textColor="text-gray-800" />
              <ColorSwatch name="Silver 300" hex="#CED4DA" className="bg-silver-300" textColor="text-gray-800" />
              <ColorSwatch name="Silver 400" hex="#ADB5BD" className="bg-silver-400" textColor="text-gray-800" />
              <ColorSwatch name="Silver 500" hex="#8D98A5" className="bg-silver-500" textColor="text-white" />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Typography */}
      <Section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Headings</h3>
            <div className="space-y-4 bg-white p-6 rounded-xl">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
                <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Heading 2</h2>
                <p className="text-sm text-gray-500 mt-1">text-3xl font-bold</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Heading 3</h3>
                <p className="text-sm text-gray-500 mt-1">text-2xl font-bold</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Heading 4</h4>
                <p className="text-sm text-gray-500 mt-1">text-xl font-bold</p>
              </div>
              <div>
                <h5 className="text-lg font-bold text-gray-900">Heading 5</h5>
                <p className="text-sm text-gray-500 mt-1">text-lg font-bold</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Body Text</h3>
            <div className="space-y-6 bg-white p-6 rounded-xl">
              <div>
                <p className="text-base text-gray-800">
                  Default body text used for most content. It should be easy to read and have sufficient contrast.
                </p>
                <p className="text-sm text-gray-500 mt-1">text-base text-gray-800</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Small text used for secondary information, captions, or supportive content.
                </p>
                <p className="text-sm text-gray-500 mt-1">text-sm text-gray-600</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Extra small text used for legal text, footnotes, or very supplementary information.
                </p>
                <p className="text-sm text-gray-500 mt-1">text-xs text-gray-500</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Special Text</h3>
            <div className="space-y-6 bg-white p-6 rounded-xl">
              <div>
                <ShinyText text="Royal Academy UK" size="2xl" gradient="royal" />
                <p className="text-sm text-gray-500 mt-1">ShinyText component with "royal" gradient</p>
              </div>
              <div>
                <ShinyText text="Gold Highlight" size="xl" gradient="gold" />
                <p className="text-sm text-gray-500 mt-1">ShinyText component with "gold" gradient</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Buttons */}
      <Section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Buttons</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4 bg-white p-6 rounded-xl">
              <div className="space-y-2">
                <Button variant="primary">Primary Button</Button>
                <p className="text-sm text-gray-500">variant="primary"</p>
              </div>
              
              <div className="space-y-2">
                <Button variant="secondary">Secondary Button</Button>
                <p className="text-sm text-gray-500">variant="secondary"</p>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline">Outline Button</Button>
                <p className="text-sm text-gray-500">variant="outline"</p>
              </div>
              
              <div className="space-y-2">
                <Button variant="gradient">Gradient Button</Button>
                <p className="text-sm text-gray-500">variant="gradient"</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Button Contexts</h3>
            <div className="flex flex-wrap gap-4 bg-ukblue p-6 rounded-xl">
              <Button variant="primary" className="bg-gold-500 hover:bg-gold-600">Gold Button</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Light Outline</Button>
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">Transparent Button</Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Cards and Components */}
      <Section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Cards and Components</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Glass Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <h4 className="font-bold text-lg mb-2">Glass Card Example</h4>
                <p className="text-sm text-gray-600">
                  Glass cards provide a modern, translucent UI element with a subtle blur effect.
                </p>
              </GlassCard>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Event Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EventCard
                title="Sample Event Title"
                description="This is a sample event description showcasing the EventCard component's design and layout."
                date="May 15, 2024"
                time="2:00 PM"
                location="Main Campus Auditorium"
                image="https://placehold.co/800x600/00247d/ffffff?text=Sample+Event"
                href="#"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Facility Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FacilityCard
                name="Sample Facility"
                description="This showcase demonstrates the FacilityCard component with its gradient overlay and feature list."
                features={[
                  "Modern equipment and technology",
                  "Accessible 24/7 for students",
                  "Dedicated staff support",
                  "Centrally located on campus"
                ]}
                image="https://placehold.co/800x600/00247d/ffffff?text=Sample+Facility"
                icon={<FaGraduationCap />}
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Testimonial Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard
                name="John Smith"
                program="BSc Computer Science"
                year="2023"
                image="https://placehold.co/400x400/00247d/ffffff?text=JS"
                quote="The TestimonialCard component provides a consistent way to showcase student experiences and feedback across the website."
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stat Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                value={200}
                label="Student Clubs"
                icon={<FaUsers />}
              />
              <StatCard
                value={30}
                label="International Students"
                symbol="%"
                icon={<FaGlobe />}
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Call to Action</h3>
            <CallToAction
              title="Sample Call to Action"
              description="This component provides a consistent way to prompt users to take action across the website."
              primaryButtonText="Primary Action"
              primaryButtonHref="#"
              secondaryButtonText="Secondary Action"
              secondaryButtonHref="#"
            />
          </div>
        </div>
      </Section>
      
      {/* Spacing and Layout */}
      <Section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Spacing and Layout</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Section Spacing</h3>
            <div className="space-y-4 bg-white p-6 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Standard section padding:</strong> py-16 (4rem top and bottom)
              </p>
              <p className="text-sm text-gray-600">
                <strong>Content container:</strong> max-w-7xl mx-auto
              </p>
              <p className="text-sm text-gray-600">
                <strong>Grid gap:</strong> gap-6 or gap-8 for most grid layouts
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Responsive Breakpoints</h3>
            <div className="space-y-4 bg-white p-6 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Mobile:</strong> Default styles
              </p>
              <p className="text-sm text-gray-600">
                <strong>Small screens (sm):</strong> 640px and above
              </p>
              <p className="text-sm text-gray-600">
                <strong>Medium screens (md):</strong> 768px and above
              </p>
              <p className="text-sm text-gray-600">
                <strong>Large screens (lg):</strong> 1024px and above
              </p>
              <p className="text-sm text-gray-600">
                <strong>Extra large screens (xl):</strong> 1280px and above
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Helper component for color swatches
function ColorSwatch({ name, hex, className, textColor = "text-white" }: { 
  name: string; 
  hex: string; 
  className: string;
  textColor?: string;
}) {
  return (
    <div className={`h-24 rounded-lg ${className} p-4 flex flex-col justify-between`}>
      <div className={`font-medium ${textColor}`}>{name}</div>
      <div className={`text-sm ${textColor}`}>{hex}</div>
    </div>
  );
} 