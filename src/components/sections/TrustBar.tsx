import React from 'react';

const TrustBar = () => {
  const items = [
    "NISM VA Certified",
    "ARN Registered",
    "Pan-India Service",
    "Mutual Fund Distributor",
    "AMFI Registered",
    "Transparent Advisory",
    "Zero Hidden Charges",
    "Client-First Approach",
  ];

  return (
    <div
      className="w-full bg-[#111827] py-3 overflow-hidden group"
      style={{ borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}
    >
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
        {/* First set */}
        <div className="flex items-center px-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#9CA3AF] uppercase">
                {item}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF6A] mx-4 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center px-4">
          {items.map((item, index) => (
            <React.Fragment key={`copy-${index}`}>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#9CA3AF] uppercase">
                {item}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF6A] mx-4 shrink-0"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
