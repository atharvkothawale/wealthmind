import React from 'react';
import Link from 'next/link';
import { TrendingUp, Target, BarChart2, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Mutual Fund Investment",
    description: "Personalized investment strategies including SIP, Lumpsum, STP, and SWP to grow your wealth steadily.",
    icon: <TrendingUp className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Goal-Based Planning",
    description: "Align your investments with your life goals like Retirement, Child Education, and Long-term Wealth Creation.",
    icon: <Target className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Portfolio Review",
    description: "Professional analysis and periodic rebalancing of your existing portfolio to ensure it stays on track.",
    icon: <BarChart2 className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Tax-Saving Investment",
    description: "Optimize your tax liabilities with expert guidance on ELSS funds and other tax-efficient instruments.",
    icon: <Shield className="text-[#D4AF6A]" size={28} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0A0F1E] py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What We Offer
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '16px auto 0' }}></div>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            Comprehensive financial solutions tailored to help you achieve financial independence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                border: '0',
                borderRadius: '16px',
                boxShadow: 'inset 0 2px 0 0 #D4AF6A',
              }}
              className="bg-[#111827] p-8 md:p-10 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF6A] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed mb-6 font-light text-sm md:text-base">
                {service.description}
              </p>
              <Link
                href="/services"
                className="flex items-center gap-2 text-[#D4AF6A] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all w-fit"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
