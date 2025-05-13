"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const { t, isRTL } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkblue text-white dark:bg-dark-background">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className={isRTL ? 'rtl text-right' : ''}>
            <div className="flex items-center mb-4">
              <FaGraduationCap className={`h-8 w-8 text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <div>
                <h3 className="text-xl font-bold">Greenwich</h3>
                <p className="text-xs text-gray-300">UNITED KINGDOM</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A premier educational institution dedicated to providing world-class education and professional courses.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className={isRTL ? 'rtl text-right' : ''}>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('common.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  {t('services.educational')}
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="text-gray-300 hover:text-gold transition-colors">
                  {t('services.corporate')}
                </Link>
              </li>
              <li>
                <Link href="/services#research" className="text-gray-300 hover:text-gold transition-colors">
                  {t('services.research')}
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="text-gray-300 hover:text-gold transition-colors">
                  {t('services.support')}
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="text-gray-300 hover:text-gold transition-colors">
                  {t('common.certificate')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Explore */}
          <div className={isRTL ? 'rtl text-right' : ''}>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('common.courses')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses?category=Business" className="text-gray-300 hover:text-gold transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Computer+Science" className="text-gray-300 hover:text-gold transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Data+Science" className="text-gray-300 hover:text-gold transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Design" className="text-gray-300 hover:text-gold transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-gold transition-colors">
                  {t('course.view_all')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className={isRTL ? 'rtl text-right' : ''}>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('common.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="text-gray-300">123 Academic Street, London, UK</span>
              </li>
              <li className="flex items-center">
                <FaPhone className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="text-gray-300">info@greenwich.uk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-brand-blue-800 py-6">
        <div className="container-custom">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'rtl' : ''}`}>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Greenwich. {t('footer.rights_reserved')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy_policy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 