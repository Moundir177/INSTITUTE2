import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { I18nProvider } from "@/providers/i18n-provider";
import { PerformanceToggle } from "@/components/ui/PerformanceToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greenwich | Premier Education Institute",
  description: "Greenwich - Providing world-class education and professional courses in the United Kingdom",
  keywords: ["education", "UK institute", "courses", "professional certification", "greenwich"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark:bg-dark-background dark:text-dark-text-primary transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            
            {/* Performance toggle in fixed position */}
            <div className="fixed bottom-4 right-4 z-40">
              <PerformanceToggle />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
