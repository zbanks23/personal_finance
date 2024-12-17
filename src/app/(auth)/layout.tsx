// src/layout.tsx
"use client";

import React from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default authLayout;
