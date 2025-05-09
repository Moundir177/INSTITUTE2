"use client";

import React from "react";
import { DesignSystem } from "@/components/ui/DesignSystem";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContentLayout } from "@/components/ui/ContentLayout";
import { Button } from "@/components/ui/Button";
import { ShinyText } from "@/components/ui/ShinyText";

export default function StyleGuidePage() {
  return (
    <>
      <PageHeader
        title="Royal Academy UK Style Guide"
        description="This page serves as a comprehensive reference for the design system, components, and visual language used across the Royal Academy UK website."
        backgroundPattern="grid"
        size="lg"
      />
      
      <SectionDivider variant="angle" color="silver-50" />
      
      <Section background="silver-50">
        <DesignSystem />
      </Section>
      
      <SectionDivider variant="wave" color="white" flip={true} />
      
      {/* ContentLayout Examples */}
      <Section background="white" className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShinyText
              text="Content Layout Examples"
              tagName="h2"
              size="3xl"
              gradient="royal"
              className="mb-4"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              The ContentLayout component provides consistent ways to display content and images across the website
            </p>
          </div>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-center">Variation 1: Standard Side-by-Side</h3>
              <ContentLayout
                title="Standard Content Layout"
                subtitle="Variation 1"
                description="This standard layout places content and image side by side. It's ideal for most content sections where you want to balance visual elements with text."
                imageSrc="https://placehold.co/800x600/00247d/ffffff?text=Standard+Layout"
                imagePosition="right"
                imageStyle="default"
                variation={1}
              >
                <Button variant="primary">Learn More</Button>
              </ContentLayout>
            </div>
            
            <SectionDivider variant="dots" color="silver-100" height="sm" />
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-center">Variation 2: Overlapping Elements</h3>
              <ContentLayout
                title="Overlapping Content Layout"
                subtitle="Variation 2"
                description="This layout creates visual interest by overlapping a content box with the image. It's perfect for highlighting important information or creating a more dynamic visual hierarchy."
                imageSrc="https://placehold.co/800x600/00247d/ffffff?text=Overlapping+Layout"
                imagePosition="left"
                variation={2}
              >
                <Button variant="outline">Explore More</Button>
              </ContentLayout>
            </div>
            
            <SectionDivider variant="dots" color="silver-100" height="sm" />
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-center">Variation 3: Offset Background</h3>
              <ContentLayout
                title="Offset Background Layout"
                subtitle="Variation 3"
                description="This creative layout uses an offset background and tilted image for a modern, dynamic feel. It works well for showcasing special features or highlighting premium content."
                imageSrc="https://placehold.co/800x800/00247d/ffffff?text=Offset+Layout"
                imagePosition="right"
                variation={3}
              >
                <Button variant="primary" className="mt-4">Discover More</Button>
              </ContentLayout>
            </div>
          </div>
        </div>
      </Section>
      
      <SectionDivider variant="angle" color="ukblue" height="sm" />
      
      <Section background="ukblue" className="py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-silver-200">
            For any design-related questions, please contact the web development team.
          </p>
        </div>
      </Section>
    </>
  );
} 