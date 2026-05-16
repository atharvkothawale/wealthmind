import React from 'react';

const testimonials = [
  {
    quote: "Starting my SIP journey with WealthMind was the best financial decision I made. Clear guidance, zero pressure.",
    author: "Rahul M.",
    location: "Pune",
    stars: 5,
  },
  {
    quote: "I was confused about ELSS vs PPF for years. One call with WealthMind and everything was crystal clear.",
    author: "Priya S.",
    location: "Mumbai",
    stars: 5,
  },
  {
    quote: "15 years of experience really shows. My portfolio has grown consistently and I get regular updates without asking.",
    author: "Amit K.",
    location: "Nagpur",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0A0F1E] py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#D4AF6A', margin: '16px auto 0' }}></div>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto mt-6 font-light">
            Real stories from real investors across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              style={{ border: '1px solid #1F2937' }}
              className="bg-[#111827] p-8 md:p-10 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 -left-2 text-[120px] font-serif text-[#D4AF6A] opacity-10 pointer-events-none leading-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-[#D4AF6A]">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#9CA3AF] italic leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-auto">
                <p className="text-white font-bold">{t.author}</p>
                <p className="text-[#9CA3AF] text-sm mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
