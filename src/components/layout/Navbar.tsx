"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Calculators", href: "/calculators" },
  { name: "Knowledge Hub", href: "/knowledge-hub" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        borderBottom: scrolled ? '1px solid #1F2937' : '1px solid transparent',
      }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#0A0F1E]/90 backdrop-blur-md" : "bg-[#0A0F1E]"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">WealthMind</span>
            <span className="text-xl md:text-2xl font-bold text-[#D4AF6A] tracking-tight">Finserve</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#D4AF6A]",
                  pathname === link.href ? "text-[#D4AF6A]" : "text-[#9CA3AF]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button
                style={{
                  backgroundColor: '#D4AF6A',
                  color: '#000',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                className="transition-all hover:opacity-90 active:scale-95"
              >
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
              className="text-[#9CA3AF] hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-[#0A0F1E] transition-all duration-300 overflow-hidden z-40",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ borderBottom: isOpen ? '1px solid #1F2937' : 'none' }}
      >
        <div className="px-6 pt-2 pb-8 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-4 text-base font-medium transition-colors",
                pathname === link.href ? "text-[#D4AF6A]" : "text-[#9CA3AF] hover:text-[#D4AF6A]"
              )}
              style={{ borderBottom: '1px solid #1F2937' }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button
                style={{
                  width: '100%',
                  backgroundColor: '#D4AF6A',
                  color: '#000',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
                className="transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Book Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
