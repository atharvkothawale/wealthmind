import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#0A0F1E] min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl md:text-9xl font-serif font-bold text-[#D4AF6A] mb-4 tracking-wider animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-[#9CA3AF] text-sm md:text-base font-light leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button
            style={{
              backgroundColor: '#D4AF6A',
              color: '#000',
              border: 'none',
              outline: 'none',
              padding: '14px 32px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '15px',
              cursor: 'pointer',
            }}
            className="transition-all hover:opacity-90 active:scale-95 shadow-[0_4px_20px_rgba(212,175,106,0.15)]"
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
