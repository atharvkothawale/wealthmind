import React from 'react';
import { Award, UserCheck, BadgeCheck, MapPin, Eye, Handshake } from 'lucide-react';

const features = [
  {
    title: "15+ Years Experience",
    description: "Navigating markets since 2008 including two major market crashes",
    icon: <Award className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Personalised Advice",
    description: "No one-size-fits-all. Every plan is built around your specific goals",
    icon: <UserCheck className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "NISM VA Certified",
    description: "Qualified and regulated by SEBI and AMFI guidelines",
    icon: <BadgeCheck className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Pan-India Service",
    description: "Serving clients across Maharashtra and all of India remotely",
    icon: <MapPin className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Transparent Process",
    description: "No hidden charges. Full disclosure on how we earn and what you pay",
    icon: <Eye className="text-[#D4AF6A]" size={28} />,
  },
  {
    title: "Long-Term Partnership",
    description: "We grow with you — not just for one investment but for life",
    icon: <Handshake className="text-[#D4AF6A]" size={28} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-[#0A0F1E] py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Us
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '16px auto 0' }}></div>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            What makes WealthMind Finserve different from the rest
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #1F2937',
              }}
              className="bg-[#111827] rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,106,0.08)]"
            >
              <div className="mb-5 bg-[#D4AF6A]/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-[#D4AF6A]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF6A] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed font-light text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
