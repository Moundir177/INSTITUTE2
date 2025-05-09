"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  FaChevronDown, 
  FaSearch, 
  FaGlobe, 
  FaUniversity, 
  FaGraduationCap 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  variant?: "standard" | "transparent" | "minimal";
  logoSrc?: string;
  fixed?: boolean;
  showSearchButton?: boolean;
  className?: string;
}

export function Navigation({
  variant = "standard",
  logoSrc = "https://placehold.co/160x60/00247d/ffffff?text=Royal+Academy",
  fixed = false,
  showSearchButton = true,
  className = "",
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Detect scroll for transparent header
  useEffect(() => {
    if (variant === "transparent") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [variant]);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);
  
  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  // Variant styling
  const getVariantClasses = () => {
    if (variant === "transparent") {
      return isScrolled
        ? "bg-white text-gray-800 shadow-md" 
        : "bg-transparent text-white";
    } 
    else if (variant === "minimal") {
      return "bg-white text-gray-800 border-b border-silver-200";
    }
    else {
      return "bg-white text-gray-800 shadow-md";
    }
  };
  
  return (
    <header 
      className={`w-full ${fixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative'} transition-all duration-300 ${getVariantClasses()} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-0">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 py-4">
            <Image
              src={logoSrc}
              alt="Royal Academy UK"
              width={160}
              height={60}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`px-3 py-6 flex items-center text-sm font-medium hover:text-ukblue hover:bg-silver-50 transition-colors ${
                          pathname.startsWith(item.href) ? "text-ukblue" : ""
                        }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        {item.name}
                        <FaChevronDown className="ml-1 h-3 w-3" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg overflow-hidden z-10 border-t-2 border-ukblue"
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <div className="py-2">
                              {item.dropdown?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className={`block px-4 py-3 text-sm hover:bg-silver-50 hover:text-ukblue transition-colors ${
                                    pathname === dropdownItem.href
                                      ? "bg-silver-50 text-ukblue"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center">
                                    {dropdownItem.icon && (
                                      <span className="mr-3 text-ukblue/80">
                                        {dropdownItem.icon}
                                      </span>
                                    )}
                                    <div>
                                      <div className="font-medium">{dropdownItem.name}</div>
                                      {dropdownItem.description && (
                                        <p className="text-xs text-gray-500 mt-0.5">
                                          {dropdownItem.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-6 inline-block text-sm font-medium hover:text-ukblue hover:bg-silver-50 transition-colors ${
                        pathname === item.href ? "text-ukblue" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {showSearchButton && (
              <button 
                className="p-2 rounded-full hover:bg-silver-50 transition-colors"
                aria-label="Search"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            )}
            
            <Link 
              href="/apply" 
              className="ml-4 bg-ukblue text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-ukblue/90 transition-colors"
            >
              Apply Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {showSearchButton && (
              <button 
                className="p-2 rounded-full hover:bg-silver-50 transition-colors mr-2"
                aria-label="Search"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            )}
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-silver-50 focus:outline-none"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-between">
                <span 
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-current transition duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden border-t border-silver-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-silver-100 last:border-b-0">
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`w-full text-left px-3 py-4 flex justify-between items-center text-sm font-medium hover:text-ukblue transition-colors ${
                          pathname.startsWith(item.href) ? "text-ukblue" : ""
                        }`}
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        {item.name}
                        <FaChevronDown 
                          className={`ml-1 h-3 w-3 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-silver-50/70 rounded-lg ml-2 mr-2 mb-2 overflow-hidden"
                          >
                            {item.dropdown?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-4 py-3 text-sm hover:bg-silver-100 transition-colors ${
                                  pathname === dropdownItem.href
                                    ? "text-ukblue"
                                    : "text-gray-700"
                                }`}
                              >
                                <div className="flex items-center">
                                  {dropdownItem.icon && (
                                    <span className="mr-3 text-ukblue/80">
                                      {dropdownItem.icon}
                                    </span>
                                  )}
                                  <div>
                                    <div className="font-medium">{dropdownItem.name}</div>
                                    {dropdownItem.description && (
                                      <p className="text-xs text-gray-500 mt-0.5">
                                        {dropdownItem.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-4 text-sm font-medium hover:text-ukblue transition-colors ${
                        pathname === item.href ? "text-ukblue" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-2 pb-4">
                <Link 
                  href="/apply" 
                  className="w-full block text-center bg-ukblue text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-ukblue/90 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Navigation data
const navItems = [
  {
    name: "About",
    href: "/about",
    dropdown: [
      {
        name: "Our History",
        href: "/about/history",
        description: "The story of Royal Academy UK since 1832",
        icon: <FaUniversity size={16} />,
      },
      {
        name: "Mission & Values",
        href: "/about/mission",
        description: "Our guiding principles and vision",
        icon: <FaUniversity size={16} />,
      },
      {
        name: "Leadership",
        href: "/about/leadership",
        description: "Meet our executive team and board",
        icon: <FaUniversity size={16} />,
      },
      {
        name: "Campus Locations",
        href: "/about/campus",
        description: "Our facilities across the UK",
        icon: <FaUniversity size={16} />,
      },
    ],
  },
  {
    name: "Academics",
    href: "/programs",
    dropdown: [
      {
        name: "Undergraduate Programs",
        href: "/programs/undergraduate",
        description: "Bachelor's degrees and certificates",
        icon: <FaGraduationCap size={16} />,
      },
      {
        name: "Graduate Programs",
        href: "/programs/graduate",
        description: "Master's and doctoral degrees",
        icon: <FaGraduationCap size={16} />,
      },
      {
        name: "Faculties & Departments",
        href: "/faculties",
        description: "Academic divisions and research areas",
        icon: <FaGraduationCap size={16} />,
      },
      {
        name: "Academic Calendar",
        href: "/calendar",
        description: "Key dates and schedules",
        icon: <FaGraduationCap size={16} />,
      },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    dropdown: [
      {
        name: "How to Apply",
        href: "/admissions/apply",
        description: "Application process and requirements",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Tuition & Fees",
        href: "/admissions/tuition",
        description: "Costs and payment information",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Financial Aid",
        href: "/admissions/financial-aid",
        description: "Scholarships and funding opportunities",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "International Students",
        href: "/admissions/international",
        description: "Information for students from abroad",
        icon: <FaGlobe size={16} />,
      },
    ],
  },
  {
    name: "Student Life",
    href: "/student-life",
    dropdown: [
      {
        name: "Housing & Dining",
        href: "/student-life/housing",
        description: "Residence halls and meal plans",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Clubs & Activities",
        href: "/student-life/clubs",
        description: "Student organizations and events",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Health & Wellness",
        href: "/student-life/health",
        description: "Support services and resources",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Campus Facilities",
        href: "/student-life/facilities",
        description: "Libraries, labs, and recreation",
        icon: <FaGlobe size={16} />,
      },
    ],
  },
  {
    name: "Research",
    href: "/research",
    dropdown: [
      {
        name: "Research Initiatives",
        href: "/research/initiatives",
        description: "Our key research priorities",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Centers & Institutes",
        href: "/research/centers",
        description: "Specialized research facilities",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Publications",
        href: "/research/publications",
        description: "Academic journals and papers",
        icon: <FaGlobe size={16} />,
      },
      {
        name: "Partnerships",
        href: "/research/partnerships",
        description: "Industry and academic collaborations",
        icon: <FaGlobe size={16} />,
      },
    ],
  },
  {
    name: "News & Events",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]; 