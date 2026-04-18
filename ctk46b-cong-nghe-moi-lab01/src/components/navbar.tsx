"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/skills", label: "Kỹ năng" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/85 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/85">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-emerald-600 dark:text-emerald-400"
          >
            Trần Ngọc Hưng
          </Link>

          <div className="hidden items-center gap-5 text-sm font-medium md:flex md:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-emerald-200 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:ring-slate-600 dark:hover:bg-slate-800"
              aria-label="Chuyển chế độ sáng/tối"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-violet-600 dark:hidden"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.752 15.002A9 9 0 0 1 9.013 2.264 1 1 0 0 0 7.829 1.08a11 11 0 1 0 14.108 14.108 1 1 0 0 0-1.185-1.186Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 text-orange-400 dark:block"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm10-8a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM4 12a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm14.95 6.536a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707ZM6.757 6.343A1 1 0 0 1 8.17 7.757l-.707.707A1 1 0 0 1 6.05 7.05l.707-.707Zm12.9-1.414a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM7.464 17.536a1 1 0 0 1 0 1.414l-.707.707A1 1 0 0 1 5.343 18.243l.707-.707a1 1 0 0 1 1.414 0Z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-emerald-200 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:ring-slate-600 dark:hover:bg-slate-800 md:hidden"
              aria-label="Mở menu điều hướng"
              aria-expanded={isMenuOpen}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-emerald-700 dark:text-emerald-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "grid" : "hidden"} mt-3 gap-1 md:hidden`}
        >
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
