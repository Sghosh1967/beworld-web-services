"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showThemeToggle?: boolean;
  navItems: { label: string; href: string }[];
}

export default function Header({ showThemeToggle = false, navItems }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    if (isDark) {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }, [isDark]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="container">
        <div className="logo">
          <Image
            src="/images/beworldlogo.png"
            alt="BeWorld Logo"
            width={120}
            height={60}
            style={{ height: "60px", width: "auto" }}
            priority
          />
        </div>
        <ul className={`nav-links${mobileOpen ? " mobile-open" : ""}`}>
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ) : (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
          {showThemeToggle && (
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                {isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"}{" "}
                <span>{isDark ? "Light" : "Dark"}</span>
              </button>
            </li>
          )}
        </ul>
        <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </nav>
    </header>
  );
}
