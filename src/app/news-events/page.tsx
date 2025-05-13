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
        description="Stay updated with the latest news, upcoming events, and announcements from Greenwich."
        imageSrc="/images/news-events-hero.jpg"
        imageAlt="Greenwich event"
        primaryButtonText="View Upcoming Events"
        primaryButtonHref="#events"
        secondaryButtonText="Latest News"
        secondaryButtonHref="#news"
      />

      {/* Search and Filters Section */}
      <Section background="light" className="py-12">
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
                alt="Greenwich Graduation Ceremony"
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
        subtitle="Mark your calendar for these exciting events at Greenwich"
        background="light"
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
                className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-dark-border h-full flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-ukblue text-white text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="flex-grow p-6">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{event.description}</p>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaCalendarAlt className="mr-2 text-ukblue dark:text-ukblue-lighter" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaClock className="mr-2 text-ukblue dark:text-ukblue-lighter" />
                      <span>{new Date(event.date).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true
                      })} - {new Date(event.endDate).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true
                      })}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaMapMarkerAlt className="mr-2 text-ukblue dark:text-ukblue-lighter" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-dark-card-hover p-4 border-t border-gray-100 dark:border-dark-border">
                  <Button
                    variant="outline"
                    size="sm"
                    href={`/events/${event.id}`}
                    className="text-ukblue dark:text-ukblue-lighter w-full justify-center"
                  >
                    Event Details
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
        subtitle="Stay informed about the latest happenings at Greenwich"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-dark-border h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.featured && (
                  <div className="absolute top-3 left-3 bg-gold-400 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-ukblue text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="flex-grow p-6">
                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>
                <div className="mt-auto flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaCalendarAlt className="mr-2 text-ukblue dark:text-ukblue-lighter" />
                  <span>{new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-dark-card-hover p-4 border-t border-gray-100 dark:border-dark-border">
                <Button
                  variant="outline"
                  size="sm"
                  href={`/news/${item.id}`}
                  className="text-ukblue dark:text-ukblue-lighter w-full justify-center"
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academy Achievements */}
      <Section
        title="Academy Achievements"
        subtitle="Recent highlights and accomplishments of Greenwich"
        background="dark"
        className="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-silver-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Subscribe to Newsletter */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <FaNewspaper className="text-gold-400 text-5xl mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-silver-300 mb-8">
              Stay informed about upcoming events, latest news, and exclusive updates from Greenwich.
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
    </>
  );
}

// Data
const events = [
  {
    id: "e1",
    title: "Open Day: Explore Greenwich Campus",
    description: "Join us for an informative and interactive campus tour. Meet faculty, current students, and explore our facilities.",
    date: "2023-07-10T10:00:00",
    endDate: "2023-07-10T15:00:00",
    location: "Main Campus",
    category: "Open Day",
    image: "/images/open-day.jpg",
    featured: true
  },
  {
    id: "e2",
    title: "Business Leadership Seminar",
    description: "A half-day seminar featuring industry leaders sharing insights on emerging business trends and leadership strategies.",
    date: "2023-07-15T14:00:00",
    endDate: "2023-07-15T17:30:00",
    location: "Business School Auditorium",
    category: "Seminar",
    image: "/images/leadership-seminar.jpg"
  },
  {
    id: "e3",
    title: "Annual Graduation Ceremony",
    description: "Celebrating the achievements of our 2023 graduates with keynote speakers, award presentations, and a reception.",
    date: "2023-07-20T10:00:00",
    endDate: "2023-07-20T15:00:00",
    location: "Main Campus Hall",
    category: "Ceremony",
    image: "/images/graduation-ceremony.jpg"
  },
  {
    id: "e4",
    title: "Digital Marketing Workshop",
    description: "Learn the latest digital marketing techniques in this hands-on workshop led by industry professionals.",
    date: "2023-08-05T09:30:00",
    endDate: "2023-08-05T16:30:00",
    location: "Technology Center, Room 305",
    category: "Workshop",
    image: "/images/digital-marketing-workshop.jpg"
  },
  {
    id: "e5",
    title: "International Student Orientation",
    description: "A special welcome event for our new international students, featuring campus tours, information sessions, and networking opportunities.",
    date: "2023-08-28T10:00:00",
    endDate: "2023-08-28T14:00:00",
    location: "Student Union Building",
    category: "Orientation",
    image: "/images/event-1.jpg"
  },
  {
    id: "e6",
    title: "Research Symposium: Sustainability",
    description: "A day of presentations and discussions on cutting-edge research in sustainability and environmental sciences.",
    date: "2023-09-15T09:00:00",
    endDate: "2023-09-15T17:00:00",
    location: "Science Building Auditorium",
    category: "Conference",
    image: "/images/event-2.jpg"
  }
];

const news = [
  {
    id: "n1",
    title: "Greenwich Achieves Top 50 Ranking in Global Education Index",
    summary: "We're proud to announce that Greenwich has been recognized among the top 50 institutions worldwide in the latest Global Education Index.",
    date: "2023-06-15",
    category: "Achievements",
    image: "/images/classroom.jpg",
    featured: true
  },
  {
    id: "n2",
    title: "New AI Research Center Opening in Fall 2023",
    summary: "Greenwich is launching a state-of-the-art AI Research Center this fall, thanks to a £5 million investment and partnerships with leading tech companies.",
    date: "2023-06-08",
    category: "Research",
    image: "/images/data-science.jpg"
  },
  {
    id: "n3",
    title: "Faculty Member Wins Prestigious Research Award",
    summary: "Professor Sarah Chen from our Computer Science department has been awarded the prestigious Innovation in Technology Award for her work on sustainable computing solutions.",
    date: "2023-05-22",
    category: "Faculty",
    image: "/images/academic-director.jpg"
  },
  {
    id: "n4",
    title: "International Scholarship Program Expanded",
    summary: "Greenwich is expanding its international scholarship offerings, with 50 new fully-funded positions available for the upcoming academic year.",
    date: "2023-05-10",
    category: "Admissions",
    image: "/images/event-3.jpg"
  },
  {
    id: "n5",
    title: "Greenwich Students Win National Business Competition",
    summary: "A team of five MBA students from Greenwich took first place in the National Business Strategy Competition, beating teams from 30 other top institutions.",
    date: "2023-04-28",
    category: "Student Success",
    image: "/images/business.jpg"
  },
  {
    id: "n6",
    title: "New Sustainable Campus Initiative Launched",
    summary: "Greenwich has launched a comprehensive sustainability initiative aimed at achieving carbon neutrality by 2030 and implementing eco-friendly practices across all campus operations.",
    date: "2023-04-15",
    category: "Campus",
    image: "/images/campus.jpg"
  }
];

const achievements = [
  {
    title: "Top 50 Global Ranking",
    description: "Recognized among the world's leading educational institutions",
    icon: <FaAward className="h-12 w-12 text-gold" />
  },
  {
    title: "95% Graduate Employment",
    description: "Our graduates secure positions within 6 months of graduation",
    icon: <FaGraduationCap className="h-12 w-12 text-gold" />
  },
  {
    title: "25,000+ Alumni Network",
    description: "A global community of successful Greenwich graduates",
    icon: <FaUsers className="h-12 w-12 text-gold" />
  }
]; 