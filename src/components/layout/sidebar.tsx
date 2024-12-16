// src/components/layout/Sidebar.tsx
"use client";

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
  const pathname = usePathname();

  return (
    <div className="flex justify-center p-4">
      <div className="inline-flex bg-gray-900 text-indigo-500 rounded-xl transition-all duration-300">
        <nav className="flex-1">
          <ul className="flex p-2 space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center transform translate-y-1.5 p-1 rounded-lg hover:bg-gray-800 relative group",
                    pathname === item.href &&
                      "bg-gray-800 font-semibold transform -translate-y-0.4"
                  )}
                >
                  <item.icon size={20} />
                  <span
                    className={cn(
                      "ml-2 absolute left-full top-1/2 transform -translate-y-20 bg-gray-800 text-indigo-500 px-2 py-1 rounded opacity-0 transition-opacity duration-200 whitespace-nowrap",
                      pathname === item.href
                        ? "opacity-100 static transform-none ml-2"
                        : "group-hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </span>
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
