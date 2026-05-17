import React from 'react';

export const metadata = {
  title: 'Disclosures | WealthMind Finserve',
};

export default function DisclosuresPage() {
  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-[120px] pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6 border border-[#D4AF6A]/20">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
            LEGAL
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Disclosures</h1>
        <div className="w-[60px] h-1 bg-[#D4AF6A] mb-10"></div>
        
        <div className="text-[#9CA3AF] text-[18px] leading-relaxed space-y-6">
          <p>
            We receive commission from Asset Management Companies for investments made by our clients under our ARN Code. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies. The disclosure of commissions payable to us for the different schemes of various mutual funds as per clause 4(d) of the SEBI Circular No. SEBI/IMD/CIR No. 4/168230 dated June 30, 2009 is provided (hereinbelow table)
          </p>

          <div className="overflow-x-auto mt-8 mb-8 border border-[#1F2937] rounded-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#111827]">
                <tr className="border-b border-[#1F2937] text-white">
                  <th className="py-4 px-6 font-bold uppercase tracking-wider">FUND TYPE</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider">UPFRONT BROKERAGE / UPFRONT COMMISSION</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider">TRAIL YEAR 1 ONWARDS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937] bg-[#0A0F1E]">
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">EQUITY ,HYBRID AND ELSS</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.75%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">INDEX</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.00%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">ASSET ALLOCATION</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.50%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">ARBITRAGE FUNDS</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0%TO 1.00%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">DEBT HYBRID</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.50%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">GILT</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.50%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">INCOME</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 1.50%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">SHORT TERM</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 0.75%</td>
                </tr>
                <tr className="hover:bg-[#111827]/50 transition-colors">
                  <td className="py-4 px-6 uppercase">LIQUID & FLOATING RATE PLANS</td>
                  <td className="py-4 px-6">0%</td>
                  <td className="py-4 px-6">0% TO 0.10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Details of Scheme level commission on Mutual funds are available with the Relationship Managers and would be produced on demand.
          </p>
          <p>
            This is on a best effort basis and rates are updated as and when actual rates are received from AMCs
          </p>
          <p>
            <strong>Note :</strong> With effect from 1st April 2012, WealthMind Finserve has "opted-out" for transaction charge as per the SEBI circular no. Cir/ IMD/ DF/13/ 2011 dated August 22, 2011
          </p>
        </div>
      </div>
    </main>
  );
}
