"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, MessageCircle } from 'lucide-react';

const categories = ["All", "SIP", "Mutual Funds", "Tax Planning", "Markets"];

const articles = [
  {
    id: 1,
    slug: "what-is-sip",
    title: "What is SIP and How Does It Work?",
    category: "SIP",
    description: "A beginner's guide to Systematic Investment Plans and why they are the smartest way to build wealth.",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "elss-vs-ppf",
    title: "ELSS vs PPF: Which is Better for Tax Saving?",
    category: "Tax Planning",
    description: "Compare the two most popular Section 80C investments and choose the right one for your goals.",
    readTime: "7 min read"
  },
  {
    id: 3,
    slug: "how-to-choose-mutual-fund",
    title: "How to Choose the Right Mutual Fund",
    category: "Mutual Funds",
    description: "A step-by-step guide to selecting funds that match your risk profile and investment horizon.",
    readTime: "6 min read"
  },
  {
    id: 4,
    slug: "sip-vs-lumpsum",
    title: "SIP vs Lumpsum: What Should You Choose?",
    category: "SIP",
    description: "Understanding when to invest in SIP versus lumpsum based on market conditions and your situation.",
    readTime: "4 min read"
  },
  {
    id: 5,
    slug: "what-is-xirr",
    title: "What is XIRR and Why Does It Matter?",
    category: "Mutual Funds",
    description: "Learn how to measure your actual investment returns using XIRR instead of simple returns.",
    readTime: "5 min read"
  },
  {
    id: 6,
    slug: "market-corrections",
    title: "How Market Corrections Are Actually Opportunities",
    category: "Markets",
    description: "Why experienced investors welcome market dips and how you can use them to your advantage.",
    readTime: "8 min read"
  }
];

export default function KnowledgeHubPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="pb-16 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
              Learn & Grow
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Knowledge Hub</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#D4AF6A', margin: '0 auto 24px' }}></div>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Simple guides to help you invest smarter and build sustainable wealth.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-[#D4AF6A] text-black border-[#D4AF6A]"
                    : "bg-[#111827] text-[#9CA3AF] border-[#1F2937] hover:border-[#D4AF6A] hover:text-[#D4AF6A]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 flex flex-col hover:border-[#D4AF6A]/30 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4AF6A] uppercase px-2 py-1 bg-[#D4AF6A]/10 rounded border border-[#D4AF6A]/20">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF6A] transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-grow">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[#1F2937]">
                  <div className="flex items-center text-[#9CA3AF] text-xs">
                    <Clock size={14} className="mr-1.5" />
                    {article.readTime}
                  </div>
                  <Link 
                    href={`/knowledge-hub/${article.slug}`} 
                    className="text-[#D4AF6A] text-sm font-bold flex items-center hover:underline"
                  >
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
        <div className="bg-[#111827] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#D4AF6A]/5 radial-glow pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Have questions about investing?
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Book a free 30-minute consultation. No commitment, just clarity about your financial future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-[#D4AF6A] text-black font-bold rounded-lg hover:bg-[#B8955A] transition-all duration-300 text-center"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="https://wa.me/91XXXXXXXXXX"
              className="px-8 py-4 border border-[#D4AF6A] text-[#D4AF6A] font-bold rounded-lg hover:bg-[#D4AF6A]/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
