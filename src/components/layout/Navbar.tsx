"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "#", 
    dropdown: true,
    items: [
      { name: "Educational Services", href: "/services" },
      { name: "Corporate Training", href: "/services#corporate" },
      { name: "Research & Development", href: "/services#research" },
      { name: "Student Support", href: "/services#support" }
    ]
  },
  { name: "Courses", href: "/courses" },
  { name: "Certificate", href: "/certificate" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "News & Events", href: "/news-events" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href) && href !== '#';
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white border-b border-silver-200 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GraduationCap className="h-8 w-8 text-ukblue group-hover:text-gradient-to-r from-ukblue to-ukred" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-ukblue group-hover:text-ukred transition-colors duration-300">Royal Academy</span>
            <span className="text-xs text-silver-600 tracking-wider">UNITED KINGDOM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <div key={link.name} className="relative" ref={link.dropdown ? dropdownRef : undefined}>
              {link.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`text-sm font-medium flex items-center hover:text-ukblue transition-colors relative ${
                      isActive(link.href) ? "text-ukblue" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-silver-200"
                        style={{ 
                          background: "linear-gradient(to bottom, white, #f9fafb)",
                          borderTop: "3px solid #00247D"
                        }}
                      >
                        <div className="py-2">
                          {link.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-silver-50 hover:text-ukblue transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="flex items-center"
                              >
                                {item.name}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium hover:text-ukblue transition-colors relative ${
                    isActive(link.href) ? "text-ukblue" : "text-gray-600"
                  }`}
                >
                  <span className="relative px-1 py-2">
                    {link.name}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="inline-flex transform hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-300 items-center font-semibold text-sm text-ukblue border-2 border-ukblue hover:bg-ukblue/10 px-4 py-2 rounded-md">
            Login
          </Link>
          <Link href="/profile" className="inline-flex transform hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-300 items-center font-semibold text-sm bg-gradient-to-r from-ukblue to-ukblue/90 hover:from-ukblue/90 hover:to-ukblue text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-600 hover:text-ukblue focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-silver-200 overflow-hidden shadow-lg"
          >
            <div className="container-custom py-4 space-y-1">
              {NavLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center justify-between w-full py-3 px-4 rounded-lg text-left ${
                          openDropdown === link.name
                            ? "bg-silver-50 text-ukblue"
                            : "text-gray-600"
                        }`}
                      >
                        <span className="text-base font-medium">{link.name}</span>
                        <motion.span
                          animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1 mt-1"
                          >
                            {link.items?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 px-4 text-sm text-gray-600 hover:text-ukblue rounded-lg"
                                onClick={handleMobileLinkClick}
                              >
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                  {item.name}
                                </motion.div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-lg text-base font-medium ${
                        isActive(link.href)
                          ? "bg-gradient-to-r from-ukblue/10 to-transparent text-ukblue"
                          : "text-gray-600 hover:bg-silver-50 hover:text-ukblue"
                      }`}
                      onClick={handleMobileLinkClick}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link 
                  href="/login" 
                  className="py-2.5 px-4 text-center rounded-lg border-2 border-ukblue text-ukblue font-medium text-sm"
                  onClick={handleMobileLinkClick}
                >
                  Login
                </Link>
                <Link 
                  href="/profile" 
                  className="py-2.5 px-4 text-center rounded-lg bg-gradient-to-r from-ukblue to-ukblue/90 text-white font-medium text-sm shadow-sm"
                  onClick={handleMobileLinkClick}
                >
                  Profile
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 