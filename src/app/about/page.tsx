import type { Metadata } from 'next';
import React from 'react';
import { User, Eye, Heart, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | WealthMind Finserve",
  description: "Meet your NISM certified Mutual Fund Distributor with 15+ years experience serving investors across Maharashtra and India.",
};

export default function AboutPage() {
  const timeline = [
    { year: "2008", title: "Started Career", desc: "Entered the financial markets during one of the most challenging periods in history" },
    { year: "2012", title: "ARN Registration", desc: "Became a registered Mutual Fund Distributor with AMFI" },
    { year: "2018", title: "NISM Certification", desc: "Cleared NISM Series VA Mutual Fund Distributors Certification" },
    { year: "2026", title: "500+ Clients", desc: "Serving investors across pan-India with personalized advice" }
  ];

  const values = [
    { title: "Transparency", icon: <Eye size={28} className="text-[#D4AF6A]" />, desc: "Full disclosure on how I earn and what you invest in" },
    { title: "Client First", icon: <Heart size={28} className="text-[#D4AF6A]" />, desc: "Your financial goals are always the priority, not products" },
    { title: "Long Term Thinking", icon: <TrendingUp size={28} className="text-[#D4AF6A]" />, desc: "Wealth is built over decades, not days" }
  ];

  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-32">
      {/* Section 1 - Hero */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Profile Photo Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[300px] h-[300px] bg-[#111827] rounded-3xl flex items-center justify-center border border-[#1F2937] relative group overflow-hidden">
                <User size={120} className="text-[#D4AF6A]/20 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF6A]/5 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6 w-fit" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
                  About Me
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Your Trusted <span className="text-[#D4AF6A]">Mutual Fund</span> Advisor
              </h1>
              <div style={{ width: '60px', height: '4px', backgroundColor: '#D4AF6A', marginBottom: '24px' }}></div>
              <p className="text-[#9CA3AF] text-base md:text-lg font-light leading-relaxed mb-8">
                With over 15 years of experience in the Indian financial markets, I have helped hundreds of families across Maharashtra and India build sustainable wealth through disciplined mutual fund investing.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                {["NISM VA Certified", "ARN-48392K", "AMFI Registered"].map((pill) => (
                  <span 
                    key={pill} 
                    className="px-4 py-2 rounded-full text-xs font-bold text-[#D4AF6A] uppercase tracking-wider"
                    style={{ border: '1px solid rgba(212,175,106,0.4)', backgroundColor: 'rgba(212,175,106,0.05)' }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - My Story */}
      <section className="bg-[#111827] py-24 border-y border-[#1F2937]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '0 auto 48px' }}></div>
          
          <div className="relative mt-20">
            {/* Desktop Gold Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#D4AF6A]/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#111827] border-2 border-[#D4AF6A] flex items-center justify-center mb-6 relative">
                    <span className="text-[#D4AF6A] font-bold text-sm">{item.year}</span>
                    {/* Pulsing indicator */}
                    <div className="absolute inset-0 rounded-full border border-[#D4AF6A] animate-ping opacity-20"></div>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-[#9CA3AF] text-sm font-light leading-relaxed max-w-[200px] mx-auto md:mx-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Values */}
      <section className="py-24 pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">My Core Values</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '16px auto 0' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, index) => (
              <div 
                key={index}
                style={{ border: '1px solid #1F2937' }}
                className="bg-[#111827] p-10 rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(212,175,106,0.08)]"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF6A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF6A]/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF6A] transition-colors">{v.title}</h3>
                <p className="text-[#9CA3AF] leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
