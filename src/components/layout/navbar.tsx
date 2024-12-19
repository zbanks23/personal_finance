"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  ScrollText,
  PieChart,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: ChartNoAxesCombined, label: "Investments", href: "/investments" },
  { icon: ScrollText, label: "Transactions", href: "/transactions" },
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: PieChart, label: "Budget", href: "/budget" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center p-4">
      <nav className=" bg-gray-900 text-indigo-500 rounded-full transition-all duration-300">
        <ul className="flex p-2 space-x-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-2 rounded-3xl hover:bg-gray-800 relative group",
                  pathname === item.href && "bg-gray-800"
                )}
              >
                <item.icon size={20} />
                <span
                  className={cn(
                    "static text-indigo-500 px-1 py-1 opacity-100 transition-opacity text-xl duration-200 whitespace-nowrap",
                    pathname === item.href && "bg-gray-800"
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
  );
};

export default Navbar;
