"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const { t, isRTL } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Create NavLinks with translations
  const NavLinks = [
    { name: t("common.home"), href: "/" },
    { name: t("common.about"), href: "/about" },
    { name: t("common.services"), href: "/services" },
    { name: t("common.courses"), href: "/courses" },
    { name: t("common.certificate"), href: "/certificate" },
    { name: t("common.testimonials"), href: "/testimonials" },
    { name: t("common.news_events"), href: "/news-events" },
    { name: t("common.faq"), href: "/faq" },
    { name: t("common.contact"), href: "/contact" },
  ];

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
      className={`bg-white dark:bg-dark-card border-b border-brand-gray-200 dark:border-dark-border sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg dark:shadow-dark-background/30' : 'shadow-sm dark:shadow-dark-background/10'}`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GraduationCap className="h-8 w-8 text-darkblue group-hover:text-gradient-to-r from-darkblue to-gold" />
          </motion.div>
          <div className={`flex flex-col ${isRTL ? 'mr-2' : 'ml-2'}`}>
            <span className="text-xl font-bold text-darkblue group-hover:text-gray transition-colors duration-300">Greenwich</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                href={link.href}
                className={`text-sm font-medium hover:text-darkblue dark:hover:text-gold transition-colors relative ${
                  isActive(link.href) ? "text-darkblue dark:text-gold" : "text-gray-600 dark:text-dark-text-secondary"
                }`}
              >
                <span className="relative px-1 py-2">
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-brand-gold-400 dark:from-dark-highlight dark:to-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Login Button and Theme/Language Selectors */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector className="mr-2" />
          <ThemeToggle className="mr-4 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full" />
          <Link href="/login" className="inline-flex transform hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-300 items-center font-semibold text-sm text-darkblue dark:text-dark-text-primary border-2 border-darkblue dark:border-dark-primary dark:hover:bg-dark-primary dark:hover:bg-opacity-20 hover:bg-brand-blue-100 px-4 py-2 rounded-md">
            {t("common.login")}
          </Link>
          <Link href="/profile" className="inline-flex transform hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-300 items-center font-semibold text-sm bg-gradient-to-r from-darkblue to-brand-blue-600 dark:from-dark-primary dark:to-dark-primary hover:from-brand-blue-600 hover:to-darkblue text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md">
            {t("common.profile")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageSelector />
          <ThemeToggle className="hover:bg-gray-100 dark:hover:bg-dark-card rounded-full" />
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-600 dark:text-dark-text-secondary hover:text-darkblue dark:hover:text-dark-text-primary focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-brand-gray-200 overflow-hidden"
          >
            <div className="container-custom py-4">
              <div className="space-y-1">
                {NavLinks.map((link) => (
                  <div key={link.name} className="py-2">
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md ${
                        isActive(link.href)
                          ? "text-darkblue bg-brand-blue-50"
                          : "text-gray-600 hover:text-darkblue hover:bg-brand-blue-50"
                      }`}
                      onClick={handleMobileLinkClick}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-brand-gray-200">
                <div className="flex items-center space-x-3 mt-4">
                  <ThemeToggle className="hover:bg-gray-100 dark:hover:bg-dark-card rounded-full" />
                  <Link
                    href="/login"
                    className="flex-1 text-center font-medium text-sm px-4 py-2 border border-darkblue text-darkblue hover:bg-brand-blue-50 rounded-md"
                    onClick={handleMobileLinkClick}
                  >
                    {t("common.login")}
                  </Link>
                  <Link
                    href="/profile"
                    className="flex-1 text-center font-medium text-sm px-4 py-2 bg-darkblue text-white hover:bg-brand-blue-600 rounded-md"
                    onClick={handleMobileLinkClick}
                  >
                    {t("common.profile")}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 