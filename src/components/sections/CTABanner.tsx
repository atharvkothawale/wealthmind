import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const CTABanner = () => {
  return (
    <section 
      id="cta" 
      className="relative overflow-hidden bg-[#0A0F1E] py-24 md:py-28"
      style={{
        borderTop: '1px solid rgba(212,175,106,0.2)',
        borderBottom: '1px solid rgba(212,175,106,0.2)'
      }}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="w-[80%] h-[80%] bg-[#D4AF6A]/5 blur-[120px] rounded-full mx-auto"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
            Get Started Today
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Start Your <br className="hidden md:block" />
          Investment Journey?
        </h2>

        {/* Subtext */}
        <p className="text-[#9CA3AF] text-base md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Book a free 30-minute consultation. No commitment, no jargon &mdash; just clarity.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            style={{
              backgroundColor: '#D4AF6A',
              color: '#000',
              border: 'none',
              outline: 'none',
              padding: '14px 32px',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '15px',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none'
            }}
            className="w-full sm:w-auto transition-all hover:opacity-90 active:scale-95"
          >
            Book Free Consultation
          </Link>
          
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: '#D4AF6A',
              border: '2px solid #D4AF6A',
              outline: 'none',
              padding: '12px 32px',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
            className="w-full sm:w-auto transition-all hover:bg-[#D4AF6A]/5 active:scale-95"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
