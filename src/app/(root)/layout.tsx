// src/layout.tsx
"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <Navbar />
      <main className="flex-1 px-4 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
