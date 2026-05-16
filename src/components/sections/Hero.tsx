import React from 'react';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, Calculator, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0F1E] overflow-hidden">
      {/* ─── Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,106,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-[#D4AF6A]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[15%] right-[5%] w-[45%] h-[45%] bg-[#D4AF6A]/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '-7s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#D4AF6A]/5 rounded-full blur-[180px] animate-pulse-slow"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 600 Q 400 550 800 400 T 1600 200" stroke="#D4AF6A" strokeWidth="1" fill="none" />
          <path d="M 0 700 Q 600 650 1100 450 T 2000 250" stroke="#D4AF6A" strokeWidth="0.5" fill="none" strokeDasharray="4,4" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0F1E] to-transparent"></div>
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col items-start gap-7">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4AF6A]/5" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#D4AF6A] uppercase">
                NISM Certified • ARN Holder • SEBI Registered
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Your Wealth Deserves<br />
              <span className="text-[#D4AF6A]">Expert Guidance</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-light">
              We help salaried professionals and families across India start their mutual fund journey with clarity, confidence, and zero jargon.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="btn-gold bg-[#D4AF6A] text-black py-3.5 px-8 rounded-full font-semibold text-[15px] transition-all hover:opacity-90 active:scale-95 text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="text-center py-3 px-7 rounded-full font-semibold text-[15px] text-[#D4AF6A] transition-all hover:opacity-80 active:scale-95"
                style={{ border: '2px solid #D4AF6A', background: 'transparent' }}
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8 pt-8 w-full" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {["15+ Years Experience", "NISM VA Certified", "AMFI Registered"].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0" />
                  <span className="text-xs md:text-sm text-[#9CA3AF] font-medium whitespace-nowrap">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Desktop Cards */}
          <div className="hidden lg:block relative h-[520px]">
            {/* SIP Calculator */}
            <div className="absolute top-0 left-0 w-60 bg-[#111827] p-5 rounded-xl animate-bob-slow z-20" style={{ border: '1px solid rgba(212,175,106,0.15)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF6A]/10 flex items-center justify-center">
                  <Calculator size={16} className="text-[#D4AF6A]" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">SIP Tool</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-[9px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Monthly</div>
                  <div className="text-sm font-semibold text-white">₹5,000</div>
                </div>
                <div>
                  <div className="text-[9px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Returns</div>
                  <div className="text-sm font-semibold text-white">12%</div>
                </div>
              </div>
              <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="text-[9px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Estimated Corpus</div>
                <div className="text-2xl font-bold text-[#D4AF6A]">₹11.6L</div>
                <div className="text-[8px] text-[#9CA3AF] mt-1 italic">*After 10 Years</div>
              </div>
            </div>

            {/* Portfolio Growth */}
            <div className="absolute top-[25%] right-0 w-64 bg-[#111827] p-5 rounded-xl animate-bob-medium z-30" style={{ border: '1px solid rgba(212,175,106,0.15)' }}>
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Live Portfolio</div>
                  <div className="text-base font-bold text-white leading-none">Wealth Tracker</div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold">
                  <TrendingUp size={10} />+18.4%
                </div>
              </div>
              <div className="h-20 w-full flex items-end gap-1.5">
                {[35, 50, 40, 70, 65, 90, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#D4AF6A]/10 to-[#D4AF6A]/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[9px] text-[#9CA3AF] font-bold uppercase tracking-widest">
                <span>Jan 2026</span><span>May 2026</span>
              </div>
            </div>

            {/* SIP Activated */}
            <div className="absolute bottom-0 left-[10%] w-60 bg-[#111827] p-5 rounded-xl animate-bob-fast z-10" style={{ border: '1px solid rgba(212,175,106,0.15)' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center" style={{ border: '1px solid rgba(34,197,94,0.2)' }}>
                  <ShieldCheck size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">SIP Activated</div>
                  <div className="text-[10px] text-green-500 font-medium">Auto-pay setup done</div>
                </div>
              </div>
              <div className="mt-4 pt-4 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex justify-between text-xs">
                  <span className="text-[#9CA3AF]">Amount</span>
                  <span className="text-white font-semibold">₹5,000 / mo</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#9CA3AF]">Next Installment</span>
                  <span className="text-white font-semibold">01 June</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
