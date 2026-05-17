import React from 'react';
import Link from 'next/link';

const articles: Record<string, any> = {
  "what-is-sip": {
    title: "What is SIP and How Does It Work?",
    category: "SIP",
    readTime: "5 min read",
    content: `A Systematic Investment Plan (SIP) allows you to invest a fixed amount in mutual funds every month. Instead of investing a large lump sum, you invest small amounts regularly — ₹500, ₹1000, or ₹5000 per month. This builds wealth steadily over time through the power of compounding. SIP also benefits from rupee cost averaging — you buy more units when markets are low and fewer when markets are high, reducing your average cost over time.`
  },
  "elss-vs-ppf": { title: "ELSS vs PPF: Which is Better for Tax Saving?", category: "Tax Planning", readTime: "7 min read", content: "ELSS and PPF are both popular Section 80C investments. ELSS offers market-linked returns with a 3-year lock-in. PPF offers guaranteed returns with a 15-year lock-in. For younger investors with higher risk appetite, ELSS typically delivers better long-term returns. PPF suits conservative investors who prefer safety over growth." },
  "how-to-choose-mutual-fund": { title: "How to Choose the Right Mutual Fund", category: "Mutual Funds", readTime: "6 min read", content: "Choosing the right mutual fund starts with understanding your risk profile, investment horizon, and financial goals. A young investor with a 10-year horizon can take more risk with equity funds. Someone nearing retirement should prefer debt funds. Always check the fund's expense ratio, past performance, and fund manager track record before investing." },
  "sip-vs-lumpsum": { title: "SIP vs Lumpsum: What Should You Choose?", category: "SIP", readTime: "4 min read", content: "SIP is ideal when markets are volatile or at high levels — you average out your purchase cost over time. Lumpsum works best when markets have corrected significantly and valuations are attractive. For salaried investors, SIP is almost always the better choice as it aligns with monthly income and removes the need to time the market." },
  "what-is-xirr": { title: "What is XIRR and Why Does It Matter?", category: "Mutual Funds", readTime: "5 min read", content: "XIRR (Extended Internal Rate of Return) measures your actual annualized return on investments made at different times. Unlike simple returns, XIRR accounts for the timing of each SIP installment. It gives you a true picture of how your investment has performed. Always use XIRR to evaluate your mutual fund portfolio." },
  "market-corrections": { title: "How Market Corrections Are Actually Opportunities", category: "Markets", readTime: "8 min read", content: "Market corrections — when markets fall 10-20% from recent highs — scare most investors. But experienced investors know corrections are healthy and necessary. They bring overvalued stocks to fair value and create buying opportunities. If you are investing via SIP, corrections automatically mean you buy more units at lower prices, accelerating your wealth creation." }
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];

  if (!article) {
    return (
      <main className="bg-[#0A0F1E] min-h-screen pt-[120px] pb-24 flex items-center justify-center">
        <h1 className="text-2xl text-white">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-[120px] pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Category Pill */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6 border border-[#D4AF6A]/20">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
            {article.category}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Read Time */}
        <div className="text-[#9CA3AF] text-sm mb-8 font-light">
          {article.readTime}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#1F2937] mb-10"></div>

        {/* Content */}
        <div className="text-[#9CA3AF] text-[18px] leading-relaxed mb-16 whitespace-pre-wrap font-light">
          {article.content}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#111827] rounded-2xl p-10 md:p-12 text-center border border-[#1F2937]">
          <h2 className="text-2xl font-bold text-white mb-8">Ready to start investing?</h2>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#D4AF6A] text-black font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
