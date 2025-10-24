"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardLinks } from "@/src/core/constants/dashboard";

function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-3 md:grid-cols-1 h-fit text-center md:border border-dark-200 rounded-[10px] overflow-hidden">
      {dashboardLinks.map((link) => (
        <div
          key={link.id}
          className={`md:px-2 transition-all duration-150 ease-in ${
            pathname === link.href
              ? "text-primary border-b-2 border-primary md:border-0"
              : "text-dark-900 hover:text-primary border-b border-dark-200 md:border-0"
          } ${pathname === link.href ? "md:bg-primary-200" : ""}`}
        >
          <Link
            href={link.href}
            className={`flex gap-x-2 items-center justify-center md:justify-start pb-2 text-xs md:text-sm md:py-3
            md:border-b md:border-dark-200 lg:pr-1 ${
              link.id === 3 ? "md:border-b-0" : ""
            }  `}
          >
            {link.iconBold}
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default DashboardSidebar;
