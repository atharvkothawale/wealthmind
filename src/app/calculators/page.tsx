import React from 'react';
import SipCalculator from '@/components/calculator/SipCalculator';

export default function CalculatorsPage() {
  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-8 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
              Financial Tools
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Investment Calculators</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#D4AF6A', margin: '0 auto 24px' }}></div>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Plan your financial future with precision using our advanced SIP, Lumpsum, and SWP calculators.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SipCalculator />
        </div>
      </section>
    </main>
  );
}
