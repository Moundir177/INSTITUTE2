"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  navVariant?: "standard" | "transparent" | "minimal";
  footerVariant?: "standard" | "minimal" | "dark";
  fixedNav?: boolean;
  showNewsletterSignup?: boolean;
  className?: string;
}

export function MainLayout({
  children,
  navVariant = "standard",
  footerVariant = "standard",
  fixedNav = false,
  showNewsletterSignup = true,
  className = "",
}: MainLayoutProps) {
  // Apply padding to the top if the navigation is fixed
  const contentPadding = fixedNav ? "pt-16 md:pt-20" : "";
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation
        variant={navVariant}
        fixed={fixedNav}
        showSearchButton={true}
      />
      
      {/* Main Content */}
      <main className={`flex-grow ${contentPadding} ${className}`}>
        {children}
      </main>
      
      {/* Footer */}
      <Footer
        variant={footerVariant}
        showNewsletter={showNewsletterSignup}
      />
    </div>
  );
} 