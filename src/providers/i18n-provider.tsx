"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

// Create a helper function to load messages
async function loadMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale '${locale}'`, error);
    // Fallback to English if the requested locale is unavailable
    return (await import('../../messages/en.json')).default;
  }
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const { language } = useTheme();
  const [messages, setMessages] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      setLoading(true);
      const msgs = await loadMessages(language);
      setMessages(msgs);
      setLoading(false);
    }
    
    fetchMessages();
  }, [language]);

  // Show a minimal loading state
  if (loading || !messages) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <NextIntlClientProvider locale={language} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 