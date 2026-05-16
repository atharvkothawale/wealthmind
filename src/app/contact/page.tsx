"use client";

import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk</h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4AF6A', marginBottom: '24px' }}></div>
            <p className="text-[#9CA3AF] text-lg font-light leading-relaxed mb-12 max-w-md">
              Book a free 30-minute consultation. No commitment, just clarity about your financial future.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <MapPin className="text-[#D4AF6A]" size={24} />, title: "Location", detail: "Maharashtra, India (Pan-India Service)" },
                { icon: <Phone className="text-[#D4AF6A]" size={24} />, title: "Phone", detail: "+91 XXXXX XXXXX" },
                { icon: <Mail className="text-[#D4AF6A]" size={24} />, title: "Email", detail: "contact@wealthmindfinserve.com" }
              ].map((item, index) => (
                <div key={index} style={{ border: '1px solid #1F2937' }} className="bg-[#111827] p-6 rounded-xl flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF6A]/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-white font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                border: 'none',
                outline: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                textAlign: 'center',
                textDecoration: 'none'
              }}
              className="flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-95"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Column - Form */}
          <div 
            style={{ border: '1px solid #1F2937' }}
            className="bg-[#111827] p-8 md:p-10 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Book Free Consultation</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF]">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:border-[#D4AF6A] outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF]">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter phone number"
                    className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:border-[#D4AF6A] outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:border-[#D4AF6A] outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#9CA3AF]">City</label>
                  <input 
                    type="text" 
                    placeholder="Enter city"
                    className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:border-[#D4AF6A] outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9CA3AF]">Investment Goal</label>
                <select className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white focus:border-[#D4AF6A] outline-none transition-colors text-sm appearance-none cursor-pointer">
                  <option value="">Select a goal</option>
                  <option value="SIP">SIP</option>
                  <option value="Lumpsum">Lumpsum</option>
                  <option value="Retirement">Retirement Planning</option>
                  <option value="TaxSaving">Tax Saving ELSS</option>
                  <option value="PortfolioReview">Portfolio Review</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9CA3AF]">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:border-[#D4AF6A] outline-none transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                style={{
                  backgroundColor: '#D4AF6A',
                  color: '#000',
                  border: 'none',
                  outline: 'none',
                  padding: '16px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  width: '100%'
                }}
                className="transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>

            <p className="text-[#9CA3AF] text-[10px] mt-4 text-center italic">
              Your information is safe and will never be shared.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
