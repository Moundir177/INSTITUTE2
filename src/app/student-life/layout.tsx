"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";

export default function StudentLifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout
      navVariant="standard"
      footerVariant="standard"
      fixedNav={true}
    >
      {children}
    </MainLayout>
  );
} 