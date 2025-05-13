"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SectionDivider } from "./SectionDivider";

interface FooterProps {
  variant?: "standard" | "minimal" | "dark";
  showNewsletter?: boolean;
  className?: string;
}

export function Footer({ 
  variant = "standard",
  showNewsletter = true,
  className = ""
}: FooterProps) {
  const year = new Date().getFullYear();
  
  // Define variant classes
  const variantStyles = {
    standard: {
      background: "bg-white",
      text: "text-gray-600",
      heading: "text-gray-900",
      border: "border-brand-gray-200",
      hover: "hover:text-darkblue",
      divider: "lightgray"
    },
    minimal: {
      background: "bg-lightgray",
      text: "text-gray-600",
      heading: "text-gray-900",
      border: "border-brand-gray-200",
      hover: "hover:text-darkblue",
      divider: "white"
    },
    dark: {
      background: "bg-darkblue",
      text: "text-lightgray",
      heading: "text-white",
      border: "border-brand-blue-800",
      hover: "hover:text-gold",
      divider: "darkblue"
    }
  };
  
  const styles = variantStyles[variant];
  
  return (
    <footer className={`${styles.background} ${className}`}>
      {variant !== "minimal" && showNewsletter && (
        <>
          <div className="border-b border-brand-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-xl font-bold ${styles.heading} mb-2`}>
                    Stay Connected
                  </h3>
                  <p className={`${styles.text}`}>
                    Subscribe to our newsletter for the latest news and events
                  </p>
                </div>
                <div>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-md border border-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-darkblue/20"
                    />
                    <button
                      type="submit"
                      className="bg-darkblue text-white px-5 py-2 rounded-md font-medium hover:bg-brand-blue-600 transition duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              {variant === "dark" ? (
                <Image 
                  src="https://placehold.co/200x80/ffffff/012169?text=Royal+Academy" 
                  alt="Royal Academy UK" 
                  width={200} 
                  height={80} 
                />
              ) : (
                <Image 
                  src="https://placehold.co/200x80/012169/ffffff?text=Royal+Academy" 
                  alt="Royal Academy UK" 
                  width={200} 
                  height={80} 
                />
              )}
            </Link>
            <p className={`${styles.text} mb-4`}>
              Royal Academy UK is committed to academic excellence, innovative research, and creating a transformative educational experience for students from around the world.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<FaFacebookF />} variant={variant} href="#" />
              <SocialIcon icon={<FaTwitter />} variant={variant} href="#" />
              <SocialIcon icon={<FaInstagram />} variant={variant} href="#" />
              <SocialIcon icon={<FaLinkedinIn />} variant={variant} href="#" />
              <SocialIcon icon={<FaYoutube />} variant={variant} href="#" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className={`text-lg font-semibold ${styles.heading} mb-4`}>
              Explore
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`${styles.text} ${styles.hover} transition duration-300`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Academics */}
          <div className="md:col-span-2">
            <h3 className={`text-lg font-semibold ${styles.heading} mb-4`}>
              Academics
            </h3>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`${styles.text} ${styles.hover} transition duration-300`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Student Life */}
          <div className="md:col-span-2">
            <h3 className={`text-lg font-semibold ${styles.heading} mb-4`}>
              Student Life
            </h3>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`${styles.text} ${styles.hover} transition duration-300`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className={`text-lg font-semibold ${styles.heading} mb-4`}>
              Contact
            </h3>
            <address className={`${styles.text} not-italic`}>
              <p className="mb-2">123 University Avenue</p>
              <p className="mb-2">London, UK SW1A 1AA</p>
              <p className="mb-2">
                <Link 
                  href="tel:+442012345678" 
                  className={`${styles.hover}`}
                >
                  +44 20 1234 5678
                </Link>
              </p>
              <p>
                <Link 
                  href="mailto:info@royalacademy.uk" 
                  className={`${styles.hover}`}
                >
                  info@royalacademy.uk
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={`border-t ${styles.border} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className={`${styles.text} text-sm mb-4 md:mb-0`}>
              © {year} Royal Academy UK. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy-policy" className={`${styles.text} ${styles.hover}`}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={`${styles.text} ${styles.hover}`}>
                Terms of Service
              </Link>
              <Link href="/accessibility" className={`${styles.text} ${styles.hover}`}>
                Accessibility
              </Link>
              <Link href="/sitemap" className={`${styles.text} ${styles.hover}`}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for social icons
function SocialIcon({ 
  icon, 
  variant, 
  href 
}: { 
  icon: React.ReactNode; 
  variant: "standard" | "minimal" | "dark"; 
  href: string;
}) {
  const bgColor = variant === "dark" ? "bg-brand-blue-800 hover:bg-brand-blue-700" : "bg-brand-gray-100 hover:bg-brand-gray-200";
  const textColor = variant === "dark" ? "text-white" : "text-darkblue";
  
  return (
    <a 
      href={href}
      className={`${bgColor} ${textColor} w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

// Navigation link data
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Faculties", href: "/faculties" },
  { label: "Research", href: "/research" },
  { label: "Library", href: "/library" },
  { label: "Academic Calendar", href: "/calendar" },
];

const studentLinks = [
  { label: "Student Life", href: "/student-life" },
  { label: "Housing", href: "/housing" },
  { label: "Campus Activities", href: "/activities" },
  { label: "Career Services", href: "/careers" },
  { label: "Support Services", href: "/support" },
]; 