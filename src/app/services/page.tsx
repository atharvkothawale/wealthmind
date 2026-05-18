import type { Metadata } from 'next';
import React from 'react';
import { TrendingUp, Target, BarChart2, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Services | WealthMind Finserve",
  description: "Mutual Fund Investment, Goal-Based Planning, Portfolio Review and Tax-Saving ELSS solutions tailored to your goals.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Mutual Fund Investment",
      description: "Personalized investment strategies including SIP, Lumpsum, STP, and SWP to grow your wealth steadily with expert guidance.",
      icon: <TrendingUp size={64} className="text-[#D4AF6A]" />,
      bullets: ["SIP Planning", "Lumpsum Investment", "STP Strategies", "SWP Solutions"]
    },
    {
      title: "Goal-Based Planning",
      description: "Align your investments with your life goals like Retirement, Child Education, and Long-term Wealth Creation.",
      icon: <Target size={64} className="text-[#D4AF6A]" />,
      bullets: ["Retirement Planning", "Child Education", "Wealth Creation", "Home Purchase"]
    },
    {
      title: "Portfolio Review",
      description: "Professional analysis and periodic rebalancing of your existing portfolio to ensure it stays on track with your goals.",
      icon: <BarChart2 size={64} className="text-[#D4AF6A]" />,
      bullets: ["Portfolio Analysis", "Performance Review", "Rebalancing Strategy", "Risk Assessment"]
    },
    {
      title: "Tax-Saving (ELSS)",
      description: "Optimize your tax liabilities with expert guidance on ELSS funds and other tax-efficient investment instruments.",
      icon: <Shield size={64} className="text-[#D4AF6A]" />,
      bullets: ["Section 80C Benefits", "3-Year Lock-in", "Market Returns", "Tax Efficiency"]
    }
  ];

  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
              What We Offer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#D4AF6A', margin: '0 auto 24px' }}></div>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive mutual fund solutions tailored to your financial goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                style={{ 
                  borderTop: '3px solid #D4AF6A',
                  backgroundColor: '#111827'
                }}
                className="p-8 md:p-10 rounded-xl flex flex-col group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-8 bg-[#D4AF6A]/10 w-24 h-24 rounded-2xl flex items-center justify-center group-hover:bg-[#D4AF6A]/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF6A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#9CA3AF] text-base font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#9CA3AF] text-sm font-light">
                      <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="mt-auto text-[#D4AF6A] font-bold text-sm flex items-center gap-2 hover:translate-x-2 transition-transform w-fit"
                  style={{ textDecoration: 'none' }}
                >
                  Book Consultation <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section 
        className="mt-24 relative overflow-hidden bg-[#0A0F1E] py-20 md:py-24"
        style={{
          borderTop: '1px solid rgba(212,175,106,0.2)',
          borderBottom: '1px solid rgba(212,175,106,0.2)'
        }}
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          <div className="w-[80%] h-[80%] bg-[#D4AF6A]/5 blur-[120px] rounded-full mx-auto"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your <br className="hidden md:block" />
            Investment Journey?
          </h2>
          <Link 
            href="/contact"
            style={{
              backgroundColor: '#D4AF6A',
              color: '#000',
              border: 'none',
              outline: 'none',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '16px',
              display: 'inline-block',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            className="transition-all hover:opacity-90 active:scale-95 shadow-[0_10px_30px_rgba(212,175,106,0.2)]"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
