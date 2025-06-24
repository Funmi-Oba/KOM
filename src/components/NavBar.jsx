"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6  flex justify-between items-center h-16">
        {/* Logo / Ministry Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/kom.png" 
            alt="Kayode Olawoye Ministries Logo"
            width={120}
            height={40}
            className="h-25 top-0 w-auto object-contain"
            priority
          />
        </Link>
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#6A00A3] ">
          <li>
            <Link
              href="/"
              className="block hover:text-white hover:bg-[#6A00A3] px-3 py-3 rounded transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-white hover:bg-[#6A00A3] px-3 py-3 rounded transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/sermons"
              className="block hover:text-white hover:bg-[#6A00A3] px-3 py-3 rounded transition"
            >
              Sermons
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="block hover:text-white hover:bg-[#6A00A3] px-3 py-3 rounded transition"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="block hover:text-white hover:bg-[#6A00A3] px-3 py-3 rounded transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              className="block bg-[#6A00A3] text-white hover:bg-[#52007c] font-semibold px-4 py-2 rounded-full transition"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#6A00A3]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-40 h-[calc(100vh-4rem) bg-white z-40 px-6 py-8 rounded-l-lg shadow-lg overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 text-[#6A00A3] text-base font-medium">
              <li className="hover:text-white hover:bg-[#6A00A3] px-3 py-2 rounded transition">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-white hover:bg-[#6A00A3] px-3 py-2 rounded transition">
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:text-white hover:bg-[#6A00A3] px-3 py-2 rounded transition">
                <Link href="/sermons" onClick={() => setMenuOpen(false)}>
                  Sermons
                </Link>
              </li>
              <li className="hover:text-white hover:bg-[#6A00A3] px-3 py-2 rounded transition">
                <Link href="/events" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>

              <li className="hover:text-white hover:bg-[#6A00A3] px-3 py-2 rounded transition">
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className=" bg-[#6A00A3] text-white hover:bg-[#52007c] font-semibold px-4 py-2 rounded-full transition">
                <Link href="/donate">Donate</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
