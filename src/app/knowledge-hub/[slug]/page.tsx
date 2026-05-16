"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';

const articleData: Record<string, any> = {
  "what-is-sip": {
    title: "What is SIP and How Does It Work?",
    category: "SIP",
    readTime: "5 min read",
    content: (
      <>
        <p>A Systematic Investment Plan (SIP) is a disciplined way of investing in mutual funds. Instead of making a large one-time investment, you invest a fixed amount at regular intervals—be it monthly, quarterly, or weekly.</p>
        <h2>How does it work?</h2>
        <p>When you start an SIP, a predetermined amount is automatically debited from your bank account and invested in the mutual fund scheme of your choice. You are allocated units based on the Net Asset Value (NAV) of the fund on that day.</p>
        <h2>Benefits of SIP</h2>
        <ul>
          <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when prices are high, averaging out the cost.</li>
          <li><strong>Power of Compounding:</strong> Small, regular investments grow significantly over the long term.</li>
          <li><strong>Disciplined Investing:</strong> It automates your savings and makes you a regular investor.</li>
        </ul>
        <p>SIPs are ideal for long-term goals like retirement or a child's education, as they help navigate market volatility while building wealth steadily.</p>
      </>
    )
  },
  "elss-vs-ppf": {
    title: "ELSS vs PPF: Which is Better for Tax Saving?",
    category: "Tax Planning",
    readTime: "7 min read",
    content: (
      <>
        <p>Choosing between Equity Linked Savings Scheme (ELSS) and Public Provident Fund (PPF) is a common dilemma for Indian taxpayers under Section 80C.</p>
        <h2>Key Differences</h2>
        <ul>
          <li><strong>Lock-in Period:</strong> ELSS has a lock-in of only 3 years, while PPF requires 15 years.</li>
          <li><strong>Returns:</strong> PPF offers guaranteed, fixed returns (currently around 7.1%), whereas ELSS is market-linked and has the potential for much higher returns.</li>
          <li><strong>Risk:</strong> PPF is risk-free as it's backed by the government. ELSS carries equity risk but is historically superior for long-term wealth creation.</li>
        </ul>
        <h2>Which should you choose?</h2>
        <p>If you have a higher risk appetite and a long-term horizon, ELSS is often the better choice. For conservative investors seeking absolute safety, PPF remains a cornerstone.</p>
      </>
    )
  },
  "how-to-choose-mutual-fund": {
    title: "How to Choose the Right Mutual Fund",
    category: "Mutual Funds",
    readTime: "6 min read",
    content: (
      <>
        <p>With thousands of mutual fund schemes available, selecting the right one can be overwhelming. Here is a step-by-step guide to help you make an informed decision.</p>
        <h2>1. Define Your Goal</h2>
        <p>Are you investing for a house in 5 years, or retirement in 20? Your investment horizon determines whether you should choose equity, debt, or hybrid funds.</p>
        <h2>2. Assess Your Risk Profile</h2>
        <p>Understand how much market volatility you can handle. If you panic when markets dip 10%, a high-growth small-cap fund might not be for you.</p>
        <h2>3. Check Performance and Consistency</h2>
        <p>Look at how the fund has performed over 3, 5, and 10-year periods compared to its benchmark. Consistency is more important than a single year of spectacular returns.</p>
        <h2>4. Look at the Fund Manager and Expense Ratio</h2>
        <p>A lower expense ratio means more of your money is being invested. Also, research the track record of the fund manager handling the scheme.</p>
      </>
    )
  },
  "sip-vs-lumpsum": {
    title: "SIP vs Lumpsum: What Should You Choose?",
    category: "SIP",
    readTime: "4 min read",
    content: (
      <>
        <p>Is it better to invest all at once or spread it out? The answer depends on your cash flow and market conditions.</p>
        <h2>When to choose SIP?</h2>
        <p>SIP is best for regular earners who want to build a corpus over time. It is also safer during volatile markets as it uses Rupee Cost Averaging.</p>
        <h2>When to choose Lumpsum?</h2>
        <p>Lumpsum is suitable if you have a large windfall (like a bonus or property sale) and the markets are currently undervalued. However, it carries higher timing risk compared to SIP.</p>
        <p>For most retail investors, a combination—SIP for regular goals and Lumpsum for opportunistic market dips—works best.</p>
      </>
    )
  },
  "what-is-xirr": {
    title: "What is XIRR and Why Does It Matter?",
    category: "Mutual Funds",
    readTime: "5 min read",
    content: (
      <>
        <p>Many investors confuse Simple Returns or CAGR with XIRR. If you are doing SIPs, XIRR is the only metric that truly matters.</p>
        <h2>What is XIRR?</h2>
        <p>Extended Internal Rate of Return (XIRR) is a method used to calculate the rate of return on investments where there are multiple transactions happening at different times.</p>
        <h2>Why is it important for SIP?</h2>
        <p>Since every SIP installment is invested for a different duration, CAGR cannot accurately measure your returns. XIRR accounts for the timing of each cash flow to give you the real percentage of your growth.</p>
      </>
    )
  },
  "market-corrections": {
    title: "How Market Corrections Are Actually Opportunities",
    category: "Markets",
    readTime: "8 min read",
    content: (
      <>
        <p>A market correction is typically a decline of 10% or more from a recent peak. While they look scary on news headlines, they are a natural and healthy part of the market cycle.</p>
        <h2>Why experienced investors welcome dips</h2>
        <p>Corrections allow you to buy high-quality assets at a "discount." For SIP investors, corrections are a blessing because you accumulate significantly more units for the same investment amount.</p>
        <h2>What should you do?</h2>
        <p>The best strategy during a correction is to stay the course. Avoid panic selling, and if you have surplus cash, consider making an additional lumpsum investment to boost your long-term returns.</p>
      </>
    )
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleData[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-8">
          <Link href="/knowledge-hub" className="hover:text-[#D4AF6A] transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Hub
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#D4AF6A] truncate">{article.title}</span>
        </nav>

        {/* Article Hero */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 rounded bg-[#D4AF6A]/10 border border-[#D4AF6A]/20 text-[#D4AF6A] text-[10px] font-bold uppercase tracking-widest mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-[#1F2937]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#111827] border border-[#1F2937] flex items-center justify-center">
                <User size={20} className="text-[#D4AF6A]" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">WealthMind Finserve Team</p>
                <p className="text-[#9CA3AF] text-xs">Expert Insights</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#9CA3AF] text-sm ml-auto">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-gold max-w-none mb-20 article-body">
          {article.content}
        </article>

        {/* Bottom CTA */}
        <section className="bg-[#111827] rounded-2xl p-10 md:p-16 text-center border border-[#1F2937] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#D4AF6A]/5 pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to start your investment journey?</h2>
          <p className="text-[#9CA3AF] mb-10 max-w-xl mx-auto">
            Book a free consultation today and get a personalized roadmap for your financial goals.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#D4AF6A] text-black font-bold rounded-lg hover:bg-[#B8955A] transition-all duration-300"
          >
            Book Free Consultation
          </Link>
        </section>
      </div>

      <style jsx global>{`
        .article-body h2 {
          color: white;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
        .article-body p {
          color: #9CA3AF;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .article-body ul {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .article-body li {
          margin-bottom: 0.75rem;
        }
        .article-body strong {
          color: #D4AF6A;
        }
      `}</style>
    </main>
  );
}
