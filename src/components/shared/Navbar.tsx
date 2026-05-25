"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education & Experience", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <nav
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="text-white font-bold text-sm tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.15 }}
          >
            Mohssine En-naqqach
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <motion.button
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-xs text-white/50 hover:text-white/90 tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/[0.04] cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-4 text-2xl font-bold text-white/70 hover:text-white transition-colors border-b border-white/[0.05]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
