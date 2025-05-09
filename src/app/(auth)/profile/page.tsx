"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaUser, FaEdit, FaCertificate, FaGraduationCap, FaCalendarAlt, FaCreditCard, FaSignOutAlt, FaBell } from "react-icons/fa";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "/images/avatar1.jpg",
    role: "Student",
    joinDate: "January 2023",
    courses: [
      {
        id: "business-admin",
        title: "Business Administration",
        progress: 75,
        startDate: "Feb 15, 2023",
        endDate: "Aug 15, 2023",
        image: "/images/business.jpg",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        progress: 40,
        startDate: "Apr 10, 2023",
        endDate: "Jul 10, 2023",
        image: "/images/marketing.jpg",
      },
    ],
    certificates: [
      {
        id: "cert-001",
        title: "Introduction to Project Management",
        issueDate: "December 2022",
        image: "/images/certificate-sample.jpg",
      },
    ],
    payments: [
      {
        id: "pay-001",
        course: "Business Administration",
        amount: "£2,500",
        date: "Jan 30, 2023",
        status: "Paid",
      },
      {
        id: "pay-002",
        course: "Digital Marketing",
        amount: "£1,800",
        date: "Mar 15, 2023",
        status: "Paid",
      },
    ],
  };

  return (
    <Section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-silver-200 overflow-hidden">
              {/* Profile Summary */}
              <div className="p-6 text-center border-b border-silver-200">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow"
                  />
                  <button className="absolute bottom-0 right-0 bg-ukblue text-white p-1 rounded-full">
                    <FaEdit size={14} />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <div className="mt-2 inline-block bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full">
                  {user.role}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Member since {user.joinDate}
                </p>
              </div>

              {/* Navigation */}
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${
                        activeTab === "profile"
                          ? "bg-ukblue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaUser className="mr-3" />
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("courses")}
                      className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${
                        activeTab === "courses"
                          ? "bg-ukblue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaGraduationCap className="mr-3" />
                      My Courses
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("certificates")}
                      className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${
                        activeTab === "certificates"
                          ? "bg-ukblue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaCertificate className="mr-3" />
                      Certificates
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("payments")}
                      className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${
                        activeTab === "payments"
                          ? "bg-ukblue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaCreditCard className="mr-3" />
                      Payments
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("notifications")}
                      className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${
                        activeTab === "notifications"
                          ? "bg-ukblue text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaBell className="mr-3" />
                      Notifications
                    </button>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-silver-200">
                  <button
                    className="w-full text-left px-4 py-3 rounded-md flex items-center text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FaSignOutAlt className="mr-3" />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-silver-200 overflow-hidden">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FaEdit size={14} />
                      Edit Profile
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                        <p className="text-gray-800 font-medium">{user.name}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Email Address</h4>
                        <p className="text-gray-800 font-medium">{user.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Phone Number</h4>
                        <p className="text-gray-800 font-medium">+44 20 7123 4567</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Address</h4>
                        <p className="text-gray-800 font-medium">123 Main Street, London, UK</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Student ID</h4>
                        <p className="text-gray-800 font-medium">RA-2023-45678</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Date of Birth</h4>
                        <p className="text-gray-800 font-medium">May 12, 1995</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-silver-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-silver-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Password</h4>
                          <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                        </div>
                        <Button variant="outline">Change Password</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-silver-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-500">Add an extra layer of security</p>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-silver-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Email Notifications</h4>
                          <p className="text-sm text-gray-500">Manage your email preferences</p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Courses Tab */}
              {activeTab === "courses" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">My Courses</h3>
                    <Button variant="primary" href="/courses">
                      Browse More Courses
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {user.courses.map((course) => (
                      <div
                        key={course.id}
                        className="border border-silver-200 rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
                      >
                        <div className="md:w-1/4 relative h-48 md:h-auto">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {course.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <FaCalendarAlt className="mr-2" />
                            {course.startDate} - {course.endDate}
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">
                                Progress
                              </span>
                              <span className="text-sm font-medium text-gray-700">
                                {course.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-silver-200 rounded-full h-2.5">
                              <div
                                className="bg-ukblue h-2.5 rounded-full"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Button variant="primary" href={`/courses/${course.id}`}>
                              Continue Learning
                            </Button>
                            <Button variant="outline">Course Materials</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {user.courses.length === 0 && (
                    <div className="text-center py-12 bg-silver-50 rounded-lg">
                      <FaGraduationCap size={48} className="mx-auto text-silver-400 mb-4" />
                      <h4 className="text-xl font-medium text-gray-700 mb-2">No Courses Yet</h4>
                      <p className="text-gray-500 mb-6">
                        You haven't enrolled in any courses yet. Browse our catalog to get started on your learning journey.
                      </p>
                      <Button variant="primary" href="/courses">
                        Browse Courses
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === "certificates" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">My Certificates</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {user.certificates.map((certificate) => (
                      <div
                        key={certificate.id}
                        className="border border-silver-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-48">
                          <Image
                            src={certificate.image}
                            alt={certificate.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4 text-white">
                            <div className="text-xs font-medium mb-1">Issued: {certificate.issueDate}</div>
                            <h4 className="text-lg font-semibold">{certificate.title}</h4>
                          </div>
                        </div>
                        <div className="p-4 bg-white flex justify-between">
                          <Button variant="outline" className="text-sm">
                            View Certificate
                          </Button>
                          <Button variant="outline" className="text-sm">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {user.certificates.length === 0 && (
                    <div className="text-center py-12 bg-silver-50 rounded-lg">
                      <FaCertificate size={48} className="mx-auto text-silver-400 mb-4" />
                      <h4 className="text-xl font-medium text-gray-700 mb-2">No Certificates Yet</h4>
                      <p className="text-gray-500 mb-6">
                        You haven't earned any certificates yet. Complete your courses to earn certificates.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === "payments" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Payment History</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-silver-200">
                      <thead className="bg-silver-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-silver-200">
                        {user.payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{payment.course}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{payment.date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{payment.amount}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {payment.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-ukblue hover:text-ukblue/80">
                                View Receipt
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {user.payments.length === 0 && (
                    <div className="text-center py-12 bg-silver-50 rounded-lg">
                      <FaCreditCard size={48} className="mx-auto text-silver-400 mb-4" />
                      <h4 className="text-xl font-medium text-gray-700 mb-2">No Payment History</h4>
                      <p className="text-gray-500 mb-6">
                        You don't have any payment records yet.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
                    <Button variant="outline">Mark All as Read</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-ukblue bg-ukblue/5 rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">Course Update: Business Administration</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            New course materials have been added to your Business Administration course.
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="text-xs text-ukblue hover:underline">View Course</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-xs text-gray-500 hover:underline">Mark as Read</button>
                      </div>
                    </div>

                    <div className="p-4 border-l-4 border-gray-300 rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">Payment Confirmation</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Your payment for Digital Marketing course has been successfully processed.
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">2 days ago</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="text-xs text-ukblue hover:underline">View Receipt</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-xs text-gray-500 hover:underline">Mark as Read</button>
                      </div>
                    </div>

                    <div className="p-4 border-l-4 border-gray-300 rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">Welcome to Royal Academy UK</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Thank you for joining Royal Academy UK. We're excited to have you as a student.
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">Jan 30, 2023</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="text-xs text-ukblue hover:underline">View Message</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-xs text-gray-500 hover:underline">Mark as Read</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 