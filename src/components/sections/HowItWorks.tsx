import React from 'react';
import { Users, Activity, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "We Meet",
    description: "Schedule a free consultation call. We understand your financial goals and current situation.",
    icon: <Users className="text-white" size={24} />,
  },
  {
    number: "02",
    title: "Risk Profiling",
    description: "We assess your risk appetite and investment horizon to build the right strategy.",
    icon: <Activity className="text-white" size={24} />,
  },
  {
    number: "03",
    title: "Goal Planning",
    description: "We create a personalized investment plan aligned with your life goals.",
    icon: <Target className="text-white" size={24} />,
  },
  {
    number: "04",
    title: "Start Investing",
    description: "We execute your plan and monitor your portfolio regularly.",
    icon: <TrendingUp className="text-white" size={24} />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0A0F1E] py-24 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '16px auto 0' }}></div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-12 z-0"
            style={{ left: '12%', right: '12%', height: '2px', borderTop: '2px dashed rgba(212,175,106,0.25)' }}
          ></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                <div
                  className="w-24 h-24 rounded-full bg-[#111827] flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF6A]/10"
                  style={{ border: '2px solid #D4AF6A' }}
                >
                  <span className="text-[#D4AF6A] font-bold text-lg mb-1">{step.number}</span>
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed font-light max-w-[240px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
