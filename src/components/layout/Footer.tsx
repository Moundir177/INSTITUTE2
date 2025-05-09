"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would call an API
      setSubscribed(true);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };
  
  return (
    <footer className="bg-ukblue text-white">
      {/* Newsletter Section */}
      <div className="border-b border-ukblue-dark">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-silver-300 mb-0">Stay updated with our latest news, events, and offers.</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none text-gray-800"
                    required
                    disabled={subscribed}
                  />
                  {subscribed && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-90 rounded-lg text-white font-medium">
                      Thank you for subscribing!
                    </div>
                  )}
                </div>
                <Button type="submit" variant="accent" disabled={subscribed}>
                  <span className="flex items-center">
                    Subscribe <FaArrowRight className="ml-2" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Royal Academy</span>
                <span className="text-xs text-silver-300 tracking-wider">UNITED KINGDOM</span>
              </div>
            </Link>
            <p className="text-silver-300 text-sm mt-4">
              Providing world-class education and professional courses in the United Kingdom since 1995.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-silver-300 hover:text-gold-500 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-gold-500 transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-gold-500 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-gold-500 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-silver-300 hover:text-gold-500 transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-ukred pb-2 inline-block">Quick Links</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              <li>
                <Link href="/" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Services
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> News & Events
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Testimonials
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Certificate
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-ukred pb-2 inline-block">Policies & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Student Handbook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Campus Map
                </Link>
              </li>
              <li>
                <Link href="#" className="text-silver-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-gold-500 mr-1.5">›</span> Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-ukred pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300 text-sm">
                    123 Royal Avenue<br />
                    London, United Kingdom<br />
                    Postal Code: SW1A 1AA
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300 text-sm mb-1">General Inquiries:</p>
                  <a href="mailto:info@royalacademyuk.com" className="text-silver-100 hover:text-gold-500 text-sm">
                    info@royalacademyuk.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300 text-sm mb-1">Call Us:</p>
                  <a href="tel:+442071234567" className="text-silver-100 hover:text-gold-500 text-sm">
                    +44 20 7123 4567
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ffffff20] mt-12 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-silver-300 text-sm">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} Royal Academy UK. All Rights Reserved.</p>
              <p className="mt-1">
                Registered in England and Wales under company number 12345678.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy-policy" className="text-silver-300 hover:text-white">Privacy</Link>
              <span className="text-silver-600">|</span>
              <Link href="/refund-policy" className="text-silver-300 hover:text-white">Refunds</Link>
              <span className="text-silver-600">|</span>
              <Link href="#" className="text-silver-300 hover:text-white">Terms</Link>
              <span className="text-silver-600">|</span>
              <Link href="#" className="text-silver-300 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 