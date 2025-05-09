"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FloatingElements } from "@/components/ui/FloatingElements";

// Example page template - use this as a reference for all pages
export default function PageTemplate() {
  // Example breadcrumbs - modify for each page
  const breadcrumbs = [
    { label: "Category", href: "/category" },
    { label: "Page Title", href: "/category/page-title" }
  ];

  return (
    <>
      {/* 
        Page Header Component
        - Use on all pages for consistent styling
        - Options:
          - variant: "light" | "dark" | "gradient"
          - size: "sm" | "md" | "lg"
          - pattern: true | false
          - centered: true | false
      */}
      <PageHeader
        title="Page Title"
        description="This is a description of the page content. It should be concise and informative, providing context for the visitor."
        breadcrumbs={breadcrumbs}
        variant="gradient"
        size="md"
      />

      {/* 
        Main Content Sections
        - Each section should use the Section component
        - Apply consistent spacing and styling
        - Options:
          - background: "white" | "light" | "dark" | "primary" | "gradient"
          - pattern: true | false (adds decorative background)
          - animate: true | false (adds scroll animations)
      */}
      <Section
        title="Primary Content Section"
        subtitle="Use sections to organize your page content logically. Each section should focus on a specific topic or purpose."
        background="white"
        pattern={true}
        animate={true}
      >
        {/* Use grid layouts consistently across all pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* 
            Card Component - use consistently for grid items
            - Options:
              - variant: "default" | "bordered" | "elevated" | "accent" | "glass"
              - badge: optional highlighted text
          */}
          <Card
            title="Card Component"
            description="Use cards consistently to present information in a clear, scannable format."
            variant="elevated"
            badge="Featured"
            imageSrc="/images/example-1.jpg"
            href="#"
          />

          <Card
            title="Consistent Styling"
            description="Maintaining consistent visual elements helps establish a professional brand identity."
            variant="bordered"
            imageSrc="/images/example-2.jpg"
            href="#"
          />

          <Card
            title="Enhanced UI"
            description="All components include subtle animations and visual enhancements."
            variant="accent"
            imageSrc="/images/example-3.jpg"
            href="#"
          />
        </div>
      </Section>

      {/* Secondary Content Section - using alternative background */}
      <Section 
        background="light"
        pattern={true}
        animate={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Secondary Section Content
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 mb-6"
            >
              This is an example of a two-column section layout that can be used for features, benefits, or other content that works well with an image.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button variant="gradient" icon={<span>→</span>}>
                Call To Action
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <div className="aspect-video relative">
              <Image
                src="/images/example-large.jpg"
                alt="Example illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-silver-200 mb-8 max-w-2xl mx-auto">
            Use a consistent call-to-action section at the end of each page to encourage users to take the next step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" size="lg">
              Primary Action
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Secondary Action
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
} 