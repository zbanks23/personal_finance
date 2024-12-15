// src/components/layout/Sidebar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  WalletMinimal,
  ScrollText,
  PieChart,
  ChartNoAxesCombined,
  Settings,
  ChevronLeft,
  ChevronRight,
  GripHorizontal,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: WalletMinimal, label: "Income", href: "/income" },
  { icon: ScrollText, label: "Transactions", href: "/transactions" },
  { icon: PieChart, label: "Budget", href: "/budget" },
  { icon: ChartNoAxesCombined, label: "Investments", href: "/investments" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="p-4 h-screen">
      <div
        className={cn(
          "flex flex-row h-full bg-gray-900 text-indigo-500 rounded-xl transition-all duration-300",
          isCollapsed ? "w-16" : "w-60"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <h1 className="text-xl font-bold">Finance Tracker</h1>
          )}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              {isCollapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>
            <div className="drag-handle cursor-move p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              <GripHorizontal size={20} />
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 rounded-lg hover:bg-gray-800",
                    pathname === item.href && "bg-gray-800 font-semibold",
                    isCollapsed ? "justify-center" : "space-x-3"
                  )}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
