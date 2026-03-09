'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#specializations', label: 'Specializations' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#F7E0E4]/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo-2-nobg.png" alt="Aura Women's Health Clinic" width={80} height={80} className="object-contain" />
          <span className="text-xl font-bold text-[#1A5C5C]">Dr. Shradha Vohra</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#1A5C5C] hover:text-[#134A4A] font-medium transition after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#134A4A] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1A5C5C] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#134A4A] transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1A5C5C] hover:text-[#134A4A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F7E0E4] border-t px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#1A5C5C] hover:text-[#134A4A] font-medium transition border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center bg-[#1A5C5C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#134A4A] transition"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
