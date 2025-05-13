"use client";

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';

export default function CoursesPage() {
  const { t, isRTL } = useTranslation();
  
  return (
    <>
      <Hero
        title={t('course.explore')}
        description={t('course.discover')}
        imageSrc="/images/courses-hero.jpg"
        imageAlt="Students in a classroom at Royal Academy UK"
        primaryButtonText={t('course.browse_all')}
        primaryButtonHref="#courses-section"
        secondaryButtonText={t('course.contact_admissions')}
        secondaryButtonHref="/contact"
        pattern={true}
      />

      <Section
        title={t('course.categories')}
        subtitle={t('course.explore_subject')}
        background="light"
        pattern={true}
      >
        {/* Course categories content here */}
        <div className="text-center">
          <p className={`text-lg text-gray-600 ${isRTL ? 'rtl' : 'ltr'}`}>
            {t('course.explore_subject')}
          </p>
        </div>
      </Section>
      
      <Section
        id="courses-section"
        title={t('common.courses')}
        subtitle={t('course.discover')}
      >
        {/* Course listings content here */}
        <div className="text-center">
          <p className={`text-lg text-gray-600 ${isRTL ? 'rtl' : 'ltr'}`}>
            {t('course.discover')}
          </p>
        </div>
      </Section>
    </>
  );
} 