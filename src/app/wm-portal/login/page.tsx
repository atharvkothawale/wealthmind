"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || 'Invalid email or password.');
      } else if (data?.session) {
        // Set cookie for middleware route protection
        document.cookie = `wealthmind_admin_token=${data.session.access_token}; path=/; max-age=604800; SameSite=Lax; Secure`;
        router.push('/wm-portal/dashboard');
        router.refresh();
      } else {
        setError('An unexpected error occurred during sign in.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0F1E] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        
        {/* Logo and branding centered above card */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2.5 group mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1F2937] flex items-center justify-center shadow-lg group-hover:border-[#D4AF6A]/50 transition-colors">
              <span className="font-serif font-bold text-2xl text-[#D4AF6A] leading-none select-none">W</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight">WealthMind</span>
              <span className="text-2xl font-bold text-[#D4AF6A] tracking-tight ml-1">Finserve</span>
            </div>
          </Link>
          <p className="text-[#9CA3AF] text-sm uppercase tracking-wider font-light">Admin Access Portal</p>
        </div>

        {/* Card */}
        <div 
          style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }}
          className="p-10 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF6A] to-transparent"></div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-8">Admin Login</h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm mb-6 flex items-start gap-2">
              <span className="text-red-500 font-bold shrink-0">⚠️</span>
              <span className="flex-1">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#9CA3AF] flex items-center gap-1.5">
                <Mail size={16} className="text-[#D4AF6A]" /> Email Address
              </label>
              <input 
                type="email" 
                required
                placeholder="admin@wealthmindfinserve.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF]/60 focus:border-[#D4AF6A] outline-none transition-colors text-sm"
              />
            </div>

            {/* Password input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-[#9CA3AF] flex items-center gap-1.5">
                  <Lock size={16} className="text-[#D4AF6A]" /> Password
                </label>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg pl-4 pr-11 py-3 text-white placeholder-[#9CA3AF]/60 focus:border-[#D4AF6A] outline-none transition-colors text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: '#D4AF6A',
                color: '#000',
                border: 'none',
                outline: 'none',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '15px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                width: '100%',
                opacity: isLoading ? 0.7 : 1,
              }}
              className="flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] mt-8"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-[#9CA3AF] hover:text-[#D4AF6A] transition-colors">
            ← Back to main website
          </Link>
        </div>
      </div>
    </div>
  );
}
