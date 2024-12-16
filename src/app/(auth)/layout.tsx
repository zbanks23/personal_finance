// src/layout.tsx
"use client";

import React from "react";
import Sidebar from "@/components/layout/navbar";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default authLayout;
