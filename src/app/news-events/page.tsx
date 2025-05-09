"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaNewspaper, FaGraduationCap, FaAward, FaUsers, FaSearch } from "react-icons/fa";

export default function NewsEventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  // Filter events based on selections
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesMonth = selectedMonth === "All" || new Date(event.date).toLocaleString('default', { month: 'long' }) === selectedMonth;
    
    return matchesSearch && matchesCategory && matchesMonth;
  });

  // Filter news based on search
  const filteredNews = news.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedMonth("All");
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="News & Events"
        description="Stay updated with the latest news, upcoming events, and announcements from Royal Academy UK."
        imageSrc="/images/news-events-hero.jpg"
        imageAlt="Royal Academy UK event"
        primaryButtonText="View Upcoming Events"
        primaryButtonHref="#events"
        secondaryButtonText="Latest News"
        secondaryButtonHref="#news"
      />

      {/* Search and Filters Section */}
      <Section background="gray" className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              {/* Search */}
              <div className="relative w-full">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search news and events..."
                  className="w-full pl-10 pr-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Event Category Filter */}
              <div className="flex-1">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
                >
                  <option value="All">All Categories</option>
                  <option value="Workshop">Workshops</option>
                  <option value="Seminar">Seminars</option>
                  <option value="Conference">Conferences</option>
                  <option value="Open Day">Open Days</option>
                  <option value="Webinar">Webinars</option>
                  <option value="Ceremony">Ceremonies</option>
                </select>
              </div>
              
              {/* Month Filter */}
              <div className="flex-1">
                <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select
                  id="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-4 py-3 border border-silver-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ukblue/30 transition-all bg-white"
                >
                  <option value="All">All Months</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
            
            {/* Clear Filters */}
            {(selectedCategory !== "All" || selectedMonth !== "All" || searchTerm !== "") && (
              <div className="text-center">
                <button
                  onClick={clearFilters}
                  className="text-ukblue hover:text-ukblue/80 text-sm font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Featured Event */}
      <Section className="pt-8 pb-12">
        <div className="bg-gradient-to-r from-ukblue/90 to-ukblue/70 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-400 text-white mb-4">
                Featured Event
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Annual Graduation Ceremony 2023</h2>
              <p className="text-silver-200 mb-6">
                Join us for our prestigious annual graduation ceremony celebrating the achievements of our 2023 graduates. 
                The event will feature keynote speakers from industry and academia, award presentations, and networking opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <FaCalendarAlt className="text-gold-400" />
                  <span>July 15, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaClock className="text-gold-400" />
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaMapMarkerAlt className="text-gold-400" />
                  <span>Main Campus Hall</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto order-1 lg:order-2">
              <Image
                src="/images/graduation-ceremony.jpg"
                alt="Royal Academy UK Graduation Ceremony"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section
        id="events"
        title="Upcoming Events"
        subtitle="Mark your calendar for these exciting events at Royal Academy UK"
        background="gray"
      >
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-ukblue text-white text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-silver-50 rounded-lg flex flex-col items-center justify-center text-ukblue">
                      <span className="text-sm font-bold">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaClock size={12} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <FaMapMarkerAlt size={12} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <Button variant="outline" href={`/events/${event.id}`} className="w-full">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any events matching your current filters. Try adjusting your search criteria.
            </p>
            <Button onClick={clearFilters} variant="primary">
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Latest News */}
      <Section
        id="news"
        title="Latest News"
        subtitle="Stay updated with the latest developments at Royal Academy UK"
      >
        {filteredNews.length > 0 ? (
          <>
            {/* Featured News Item */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={news[0].image}
                    alt={news[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800 mb-4">
                    Featured News
                  </span>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {news[0].date} | <FaNewspaper className="mx-2" /> {news[0].source}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{news[0].title}</h2>
                  <p className="text-gray-600 mb-6">{news[0].summary}</p>
                  <Button variant="primary" href={`/news/${news[0].id}`}>
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Other News Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredNews.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    title={item.title}
                    description={item.summary}
                    imageSrc={item.image}
                    imageAlt={item.title}
                    href={`/news/${item.id}`}
                    variant="bordered"
                    footer={
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{item.date}</span>
                        <span>{item.source}</span>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-semibold mb-2">No news found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any news matching your search. Try a different search term.
            </p>
            <Button onClick={() => setSearchTerm("")} variant="primary">
              Clear Search
            </Button>
          </div>
        )}
      </Section>

      {/* Subscribe to Newsletter */}
      <Section background="ukblue">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <FaNewspaper className="text-gold-400 text-5xl mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-silver-300 mb-8">
              Stay informed about upcoming events, latest news, and exclusive updates from Royal Academy UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              />
              <Button variant="accent">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Academy Achievements */}
      <Section
        title="Academy Achievements"
        subtitle="Recent highlights and accomplishments of Royal Academy UK"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 bg-white p-6 rounded-lg shadow-sm border border-silver-200"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center text-gold-800">
                  <achievement.icon size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" href="/about">
            Learn More About Our Academy
          </Button>
        </div>
      </Section>
    </>
  );
}

// Data
const events = [
  {
    id: "event-1",
    title: "Introduction to Digital Marketing Workshop",
    description: "A comprehensive hands-on workshop covering the fundamentals of digital marketing, including SEO, social media, and content marketing strategies.",
    date: "2023-06-15",
    time: "10:00 AM - 2:00 PM",
    location: "Room 302, Main Building",
    category: "Workshop",
    image: "/images/digital-marketing-workshop.jpg"
  },
  {
    id: "event-2",
    title: "Business Leadership Seminar",
    description: "Join industry leaders for an insightful seminar on effective leadership strategies for the modern business environment.",
    date: "2023-06-22",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    category: "Seminar",
    image: "/images/leadership-seminar.jpg"
  },
  {
    id: "event-3",
    title: "Summer Open Day 2023",
    description: "Explore our campus, meet faculty members, and learn about our programs during our annual Summer Open Day event.",
    date: "2023-07-08",
    time: "9:00 AM - 4:00 PM",
    location: "Main Campus",
    category: "Open Day",
    image: "/images/open-day.jpg"
  },
  {
    id: "event-4",
    title: "Data Science and AI Conference",
    description: "A two-day conference featuring keynote speakers, panel discussions, and workshops focused on the latest trends in data science and artificial intelligence.",
    date: "2023-07-20",
    time: "9:00 AM - 5:00 PM",
    location: "Technology Center",
    category: "Conference",
    image: "/images/data-science-conference.jpg"
  },
  {
    id: "event-5",
    title: "Future of Education Webinar",
    description: "An online discussion about emerging trends, challenges, and innovations in education with experts from around the world.",
    date: "2023-06-30",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    category: "Webinar",
    image: "/images/education-webinar.jpg"
  },
  {
    id: "event-6",
    title: "Healthcare Innovation Summit",
    description: "Explore cutting-edge innovations in healthcare management, patient care, and medical technology at this comprehensive summit.",
    date: "2023-08-05",
    time: "10:00 AM - 4:00 PM",
    location: "Health Sciences Building",
    category: "Conference",
    image: "/images/healthcare-summit.jpg"
  }
];

const news = [
  {
    id: "news-1",
    title: "Royal Academy UK Ranks Among Top 20 Educational Institutions in the UK",
    summary: "In the latest national rankings, Royal Academy UK has been recognized as one of the top 20 educational institutions in the country, highlighting our commitment to excellence in education and student outcomes.",
    content: "",
    date: "May 10, 2023",
    source: "Education Weekly",
    image: "/images/news-rankings.jpg"
  },
  {
    id: "news-2",
    title: "New Partnership with Global Tech Company to Enhance Student Opportunities",
    summary: "Royal Academy UK has established a strategic partnership with a leading global technology company to provide enhanced internship and employment opportunities for students.",
    content: "",
    date: "April 28, 2023",
    source: "Tech Insider",
    image: "/images/news-partnership.jpg"
  },
  {
    id: "news-3",
    title: "Academy Launches New Scholarship Program for International Students",
    summary: "A new scholarship program has been launched to support talented international students pursuing their education at Royal Academy UK, promoting diversity and global perspectives.",
    content: "",
    date: "April 15, 2023",
    source: "Education Times",
    image: "/images/news-scholarship.jpg"
  },
  {
    id: "news-4",
    title: "Royal Academy UK Students Win National Business Competition",
    summary: "A team of business students from Royal Academy UK has won the prestigious National Business Innovation Challenge, showcasing their entrepreneurial skills and innovative thinking.",
    content: "",
    date: "March 22, 2023",
    source: "Business Journal",
    image: "/images/news-competition.jpg"
  },
  {
    id: "news-5",
    title: "Academy Expands Campus with New State-of-the-Art Technology Center",
    summary: "Royal Academy UK has unveiled plans for a new state-of-the-art technology center, expanding our campus facilities to enhance learning experiences in tech-related disciplines.",
    content: "",
    date: "March 10, 2023",
    source: "Construction Today",
    image: "/images/news-expansion.jpg"
  },
  {
    id: "news-6",
    title: "Faculty Member Receives Recognition for Research Excellence",
    summary: "Professor Elizabeth Mitchell, Academic Director at Royal Academy UK, has been awarded the prestigious Research Excellence Award for her contributions to educational methodology.",
    content: "",
    date: "February 28, 2023",
    source: "Academic Review",
    image: "/images/news-faculty.jpg"
  },
  {
    id: "news-7",
    title: "Royal Academy UK Hosts International Education Conference",
    summary: "Last week, our institution successfully hosted the International Education Innovation Conference, bringing together educators and researchers from over 30 countries.",
    content: "",
    date: "February 15, 2023",
    source: "Global Education",
    image: "/images/news-conference.jpg"
  }
];

const achievements = [
  {
    id: "achievement-1",
    icon: FaAward,
    title: "Excellence in Teaching Award 2023",
    description: "Royal Academy UK received the prestigious Excellence in Teaching Award from the Higher Education Council for our innovative teaching methodologies."
  },
  {
    id: "achievement-2",
    icon: FaGraduationCap,
    title: "95% Graduate Employment Rate",
    description: "Our latest graduate survey revealed a 95% employment rate within six months of graduation, placing us among the top institutions for career outcomes."
  },
  {
    id: "achievement-3",
    icon: FaUsers,
    title: "Global Alumni Network Expansion",
    description: "Our alumni network has expanded to over 100 countries, creating a truly global community of Royal Academy UK graduates."
  },
  {
    id: "achievement-4",
    icon: FaNewspaper,
    title: "Research Publications Milestone",
    description: "Our faculty members have published over 500 research papers in leading academic journals during the past academic year."
  }
]; 