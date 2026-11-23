"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('HOME');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActive(name);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  // Optional: automatically update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        if (item.href === '#home') {
          if (scrollPosition < window.innerHeight / 2) {
            setActive('HOME');
            break;
          }
        } else {
          const el = document.querySelector(item.href);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition >= top) {
              setActive(item.name);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-16 relative">
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name, item.href)}
                className={`text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-cyan-400 after:shadow-[0_0_10px_#06b6d4]'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden text-white absolute right-4"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name, item.href)}
                className={`block px-3 py-2 rounded-md text-base uppercase font-medium cursor-pointer ${
                  active === item.name
                    ? 'text-cyan-400 bg-cyan-950/30'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
