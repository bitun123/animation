"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Compass, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]); 
const logoRef = useRef<HTMLAnchorElement | null>(null);   
const btnRef = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const links = itemRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );

      const tl = gsap.timeline({ delay: 0.3 });

      // Logo first
      tl.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
      })

        .from(
          links,
          {
            opacity: 0,
            y: -20,
            stagger: 0.2, // 🔥 stagger here
            duration: 0.4,
          },
          "-=0.2",
        )

        // Button last
        .from(
          btnRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
          },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Locations", href: "#" },
    { name: "Rooms", href: "#" },
    { name: "Experiences", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className=" w-full z-50 px-9 lg:px-4 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-2 text-white z-50"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-yellow-200" />
          </div>
          <span className="text-xl font-semibold tracking-tight uppercase text-black ">
            Harmont
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-black/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
          {navLinks.map((link, index) => (
            <Link
              ref={(el) => (itemRefs.current[index] = el)}
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-black/80 hover:text-gray-500 transition-colors group"
            >
              {index === 0 && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-200 rounded-full" />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div ref={btnRef} className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="#"
              className="bg-[#FDF0A5] hover:bg-[#FBE87F] text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg"
            >
              Book Now
            </Link>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[101] text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-white hover:text-yellow-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#FDF0A5] text-black px-12 py-4 rounded-full text-xl font-bold"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
