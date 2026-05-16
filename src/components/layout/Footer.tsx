import React from 'react';
import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080D1A] pt-20 pb-10" style={{ borderTop: '1px solid #1F2937' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6 text-left">
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">WealthMind</span>
              <span className="text-xl md:text-2xl font-bold text-[#D4AF6A] tracking-tight">Finserve</span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed font-light">
              Your partner in creating sustainable wealth. We simplify investments for you.
            </p>
            <div className="space-y-1">
              <p className="text-[#D4AF6A] text-xs font-bold tracking-widest uppercase">ARN-48392K</p>
              <p className="text-[#9CA3AF] text-[10px] uppercase font-bold tracking-tighter opacity-70">AMFI Registered Mutual Fund Distributor</p>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Calculators', href: '/calculators' },
                { name: 'Knowledge Hub', href: '/knowledge-hub' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-[#D4AF6A] text-sm transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Privacy Policy', href: '/contact' },
                { name: 'Terms of Service', href: '/contact' },
                { name: 'Disclosures', href: '/contact' },
                { name: 'SEBI Guidelines', href: 'https://www.sebi.gov.in', external: true }
              ].map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#D4AF6A] text-sm transition-colors font-light">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-[#9CA3AF] hover:text-[#D4AF6A] text-sm transition-colors font-light">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-sm text-[#9CA3AF] font-light">
                <MapPin size={18} className="text-[#D4AF6A] shrink-0" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#9CA3AF] font-light">
                <Phone size={18} className="text-[#D4AF6A] shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#9CA3AF] font-light">
                <Mail size={18} className="text-[#D4AF6A] shrink-0" />
                <span className="break-all">contact@wealthmindfinserve.com</span>
              </li>
              <li className="pt-2">
                <button 
                  style={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    border: 'none',
                    outline: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                  className="flex items-center gap-2 transition-all hover:opacity-90 active:scale-95"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[#9CA3AF] text-sm font-light">
            &copy; {new Date().getFullYear()} WealthMind Finserve. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-[10px] md:text-[11px] leading-relaxed max-w-md text-center md:text-right italic opacity-60">
            Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
