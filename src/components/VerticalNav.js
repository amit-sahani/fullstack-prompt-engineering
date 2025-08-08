"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import htmlElementsContent from "@/data/htmlElementsContent.json";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// Define the navigation structure for the HTML journey
const htmlNav = [
  { label: "HTML Overview", href: "/tech-journeys/html" },
  { label: "HTML Basics", href: "/tech-journeys/html/basics" },
  {
    label: "HTML Elements",
    href: "/tech-journeys/html/elements",
    children: Object.keys(htmlElementsContent).map((slug) => ({
      label: htmlElementsContent[slug].heading || slug,
      href: `/tech-journeys/html/elements/${slug}`,
    })),
  },
  { label: "HTML Attributes", href: "/tech-journeys/html/attributes" },
  { label: "HTML Examples", href: "/tech-journeys/html/examples" },
  { label: "HTML Quiz", href: "/tech-journeys/html/quiz" },
];

export default function VerticalNav({ nav = htmlNav }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openElements, setOpenElements] = useState(() => {
    // Open if on elements page or any nested element page
    return pathname.startsWith("/tech-journeys/html/elements");
  });

  const handleElementsClick = (e, href) => {
    e.preventDefault();
    setOpenElements((prev) => {
      // If closing, just close
      if (prev) return false;
      // If opening, navigate if not already on the elements page
      if (pathname !== href) {
        router.push(href);
      }
      return true;
    });
  };

  return (
    <nav className="w-64 min-h-screen px-2 py-4 bg-gradient-to-b from-[#232946]/80 to-[#181C2B]/90 border-r border-[#FFD700]/20 shadow-2xl backdrop-blur-lg">
      <ul className="space-y-0.5">
        {nav.map((item, idx) => {
          if (item.label === "HTML Elements") {
            const isActive =
              pathname === item.href ||
              pathname.startsWith("/tech-journeys/html/elements/");
            return (
              <>
                {idx !== 0 && (
                  <div className="flex items-center my-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 via-[#FFD700]/10 to-transparent" />
                  </div>
                )}
                <li key={item.label}>
                  <button
                    className={`w-full text-left rounded px-2 py-1.5 text-base font-semibold tracking-wide flex items-center justify-between transition-colors transition-shadow transition-border duration-200 shadow-sm
                      ${
                        isActive
                          ? "bg-gradient-to-r from-[#FFD700]/70 to-[#F4E2D8]/70 text-[#232946] shadow-lg border-l-2 border-[#FFD700]"
                          : "text-[#FFD700] hover:bg-[#FFD700]/10 hover:text-[#FFD700] border-l-2 border-transparent"
                      }
                    `}
                    onClick={(e) => handleElementsClick(e, item.href)}
                    aria-expanded={openElements}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                    </span>
                    <span className="ml-2 text-xs">
                      {openElements ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                  </button>
                  {openElements && (
                    <ul className="ml-2 mt-1 space-y-1 border-l border-[#FFD700]/20 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded px-2 py-1 text-sm font-medium transition-colors transition-shadow transition-border duration-200 mb-0.5
                              ${
                                pathname === child.href
                                  ? "bg-gradient-to-r from-[#FFD700]/80 to-[#F4E2D8]/80 text-[#232946] shadow border-l-2 border-[#FFD700]"
                                  : "text-[#FFE9A7] hover:bg-[#FFD700]/10 hover:text-[#FFD700] border-l-2 border-transparent"
                              }
                            `}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </>
            );
          }
          // All other nav items
          return (
            <>
              {idx !== 0 && (
                <div className="flex items-center my-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 via-[#FFD700]/10 to-transparent" />
                </div>
              )}
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded px-2 py-1.5 text-base font-semibold tracking-wide transition-colors transition-shadow transition-border duration-200 shadow-sm
                        ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-[#FFD700]/70 to-[#F4E2D8]/70 text-[#232946] shadow-lg border-l-2 border-[#FFD700]"
                            : "text-[#FFD700] hover:bg-[#FFD700]/10 hover:text-[#FFD700] border-l-2 border-transparent"
                        }
                      `}
                >
                  {item.label}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
}
