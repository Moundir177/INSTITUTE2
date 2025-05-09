"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaChevronDown, FaChevronUp, FaSearch, FaGraduationCap, FaCreditCard, FaGlobeAmericas, FaUserGraduate, FaCalendarAlt, FaQuestion } from "react-icons/fa";

// FAQ Interface
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  // Toggle FAQ item
  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  // Filter FAQs based on category and search
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = 
      searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(faqItems.map(item => item.category)))];
  
  return (
    <>
      <Section className="pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Find answers to the most common questions about Royal Academy UK, our programs, admissions process, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for questions..."
                className="w-full pl-12 pr-4 py-4 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 shadow-sm"
              />
            </div>
            {searchQuery && (
              <p className="text-left mt-2 text-gray-500">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-ukblue text-white"
                    : "bg-silver-100 text-gray-700 hover:bg-silver-200"
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Questions */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-silver-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-ukblue">
                      {openItems.includes(faq.id) ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-silver-200 bg-silver-50">
                          <p className="text-gray-600">{faq.answer}</p>
                          
                          {/* Category Badge */}
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs font-medium bg-silver-200 text-gray-700 px-2 py-1 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-silver-50 rounded-lg">
              <FaQuestion size={48} className="mx-auto text-silver-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any questions matching your search criteria.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                variant="primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </Section>
      
      {/* Still Have Questions */}
      <Section background="ukblue" className="mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-silver-300 mb-8">
            If you couldn't find the answer to your question, feel free to reach out to our support team.
            We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" href="/contact">
              Contact Support
            </Button>
            <Button variant="outline" href="/about" className="border-white text-white hover:bg-white/10">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Helper function to get category icon
function getCategoryIcon(category: string) {
  const icons = {
    "All": null,
    "Admissions": <FaUserGraduate className="inline mr-2" />,
    "Programs": <FaGraduationCap className="inline mr-2" />,
    "Fees & Funding": <FaCreditCard className="inline mr-2" />,
    "International Students": <FaGlobeAmericas className="inline mr-2" />,
    "Campus Life": <FaCalendarAlt className="inline mr-2" />,
  };
  
  return icons[category as keyof typeof icons] || null;
}

// FAQ Data
const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the entry requirements for your programs?",
    answer: "Entry requirements vary by program. Generally, undergraduate programs require A-levels or equivalent qualifications, while postgraduate programs require a bachelor's degree in a relevant field. Specific requirements for each program can be found on the respective course pages. We also consider relevant work experience for certain programs.",
    category: "Admissions"
  },
  {
    id: "faq-2",
    question: "How do I apply for a program at Royal Academy UK?",
    answer: "To apply for a program, visit our website and navigate to the desired course page. Click on the 'Apply Now' button to begin the application process. You'll need to create an account, complete the application form, and upload required documents such as academic transcripts, personal statement, and references. Our admissions team will review your application and communicate the decision via email.",
    category: "Admissions"
  },
  {
    id: "faq-3",
    question: "What is the application deadline?",
    answer: "Application deadlines vary by program and intake. For most undergraduate programs, the main application deadline is January 15th for September entry. Postgraduate program deadlines typically range from February to June for September entry. We recommend applying early as popular programs may fill quickly. Some programs also offer January intake with application deadlines in October.",
    category: "Admissions"
  },
  {
    id: "faq-4",
    question: "Do you offer online or distance learning options?",
    answer: "Yes, we offer several programs in flexible formats including fully online and blended learning options. Our online programs maintain the same high standards as our on-campus offerings and are taught by the same faculty. These programs are ideal for working professionals or international students who cannot attend in-person classes. Visit our 'Online Learning' section for more details on available programs.",
    category: "Programs"
  },
  {
    id: "faq-5",
    question: "How long do your programs typically take to complete?",
    answer: "Program duration varies: undergraduate degrees typically take 3-4 years of full-time study; master's programs range from 1-2 years full-time; professional certificates can be completed in 3-6 months; and doctoral programs typically take 3-5 years. Many programs offer part-time options that extend these timeframes to accommodate working professionals.",
    category: "Programs"
  },
  {
    id: "faq-6",
    question: "What accreditations does Royal Academy UK hold?",
    answer: "Royal Academy UK is accredited by the Quality Assurance Agency for Higher Education (QAA) and holds institutional accreditation from the British Accreditation Council (BAC). Many of our professional programs have additional accreditations from relevant industry bodies such as the Association of MBAs (AMBA), the Chartered Management Institute (CMI), and other professional organizations specific to each field of study.",
    category: "Programs"
  },
  {
    id: "faq-7",
    question: "What tuition fees can I expect to pay?",
    answer: "Tuition fees vary by program level and type. For the 2023-2024 academic year, undergraduate programs for UK/EU students range from £9,250 to £12,500 per year, while international student fees range from £14,000 to £20,000 per year. Postgraduate program fees range from £11,000 to £25,000 for the entire program. Professional certificate programs typically cost between £1,500 and £5,000. Please check specific program pages for exact fee information.",
    category: "Fees & Funding"
  },
  {
    id: "faq-8",
    question: "Are scholarships or financial aid available?",
    answer: "Yes, we offer various scholarships and financial aid options. Merit-based scholarships are available for exceptional academic achievement, ranging from 10% to 50% of tuition fees. Need-based grants are available for students demonstrating financial need. We also offer specific scholarships for international students and those from underrepresented backgrounds. Additionally, eligible UK students can access government loans. Visit our 'Scholarships & Funding' page for application details and deadlines.",
    category: "Fees & Funding"
  },
  {
    id: "faq-9",
    question: "What payment plans are available for tuition fees?",
    answer: "We offer flexible payment options including installment plans that allow students to pay their tuition in 2-3 payments throughout the academic year. A small administrative fee may apply for installment plans. For some professional programs, we also offer 'pay-as-you-learn' options where payment is made module by module. Early payment discounts of 2-5% are available for full upfront payment of annual fees. Contact our finance office for specific details about payment options for your program.",
    category: "Fees & Funding"
  },
  {
    id: "faq-10",
    question: "Do you provide visa assistance for international students?",
    answer: "Yes, our International Student Office provides comprehensive visa support services. Once you've received your offer letter, our dedicated visa advisors will guide you through the Student Visa application process, provide necessary documentation, and offer advice on preparing for your visa interview. We also conduct pre-arrival webinars to help international students understand UK immigration requirements and prepare all necessary documentation for a smooth arrival.",
    category: "International Students"
  },
  {
    id: "faq-11",
    question: "Is English language proficiency required for international students?",
    answer: "Yes, international students whose first language is not English must demonstrate English language proficiency. We accept IELTS (Academic) with a minimum overall score of 6.5 (with no component below 6.0), TOEFL iBT with a minimum score of 90, or Cambridge English: Advanced (CAE) with a minimum grade of C. Some programs may have higher requirements. If you don't meet these requirements, we offer pre-sessional English courses that can help you reach the necessary level before your academic program begins.",
    category: "International Students"
  },
  {
    id: "faq-12",
    question: "Is accommodation available for students?",
    answer: "Yes, we offer various accommodation options for both undergraduate and postgraduate students. First-year undergraduate students are guaranteed university accommodation if they apply by the deadline. Options include traditional halls of residence, shared student apartments, and studio flats. Prices range from £125 to £250 per week, depending on the type of accommodation and location. All university accommodations include utilities, internet, and basic contents insurance. We also have a housing office that can assist students in finding private accommodation options.",
    category: "Campus Life"
  },
  {
    id: "faq-13",
    question: "What facilities are available on campus?",
    answer: "Our main campus features state-of-the-art facilities including a modern library with 24/7 access during term time, specialized computer labs, a student center with dining options, a health center, counseling services, and extensive sports facilities including a gym, swimming pool, and various courts and pitches. We also have dedicated quiet study spaces, group work areas, and specialized facilities relevant to specific programs such as design studios, science laboratories, and business simulation rooms.",
    category: "Campus Life"
  },
  {
    id: "faq-14",
    question: "Are there opportunities for internships or work experience?",
    answer: "Yes, we place strong emphasis on practical experience. Many programs include integrated work placements or internship opportunities. Our Career Services department maintains relationships with over 500 employers and helps students secure relevant work experience. For certain programs, we offer a sandwich year option allowing students to work in industry for a full year as part of their degree. Additionally, we host regular employer networking events, career fairs, and workshops to help students connect with potential employers.",
    category: "Programs"
  },
  {
    id: "faq-15",
    question: "What support services are available for students with disabilities?",
    answer: "Our Disability Support Services provides comprehensive assistance for students with physical disabilities, learning differences, mental health conditions, and other health issues. Services include academic accommodations, assistive technology, note-taking support, extended time for examinations, accessible housing options, and personal support workers when needed. We recommend contacting the Disability Support Services team before beginning your program to ensure appropriate accommodations are in place from the start of your studies.",
    category: "Campus Life"
  }
]; 