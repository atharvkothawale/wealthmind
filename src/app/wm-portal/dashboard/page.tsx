"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
  Loader2, 
  LogOut, 
  RefreshCw, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const router = useRouter();
  
  // Auth state
  const [session, setSession] = useState<any>(null);
  const [isChecking, setIsChecking] = useState(true);

  // Leads and filter/search states
  const [leads, setLeads] = useState<any[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedLeads, setExpandedLeads] = useState<Record<string, boolean>>({});

  // Verify session on client side
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        document.cookie = `wealthmind_admin_token=; path=/; max-age=0; SameSite=Lax; Secure`;
        router.replace('/wm-portal/login');
      } else {
        document.cookie = `wealthmind_admin_token=${session.access_token}; path=/; max-age=604800; SameSite=Lax; Secure`;
        setSession(session);
        fetchLeads();
        setIsChecking(false);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setIsChecking(true);
        document.cookie = `wealthmind_admin_token=; path=/; max-age=0; SameSite=Lax; Secure`;
        router.replace('/wm-portal/login');
      } else {
        document.cookie = `wealthmind_admin_token=${session.access_token}; path=/; max-age=604800; SameSite=Lax; Secure`;
        setSession(session);
        setIsChecking(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // Fetch leads from database
  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
      } else {
        setLeads(data || []);
      }
    } catch (err) {
      console.error('Unexpected error fetching leads:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  // Sign out handler
  const handleLogout = async () => {
    try {
      setIsChecking(true);
      await supabase.auth.signOut();
      document.cookie = `wealthmind_admin_token=; path=/; max-age=0; SameSite=Lax; Secure`;
      router.push('/wm-portal/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Update lead status dropdown
  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', leadId);

      if (error) {
        alert('Failed to update status in database: ' + error.message);
      } else {
        // Update local state instantly
        setLeads(prevLeads =>
          prevLeads.map(lead =>
            lead.id === leadId ? { ...lead, status: newStatus } : lead
          )
        );
      }
    } catch (err: any) {
      alert('Error updating status: ' + err.message);
    }
  };

  // Toggle expanding message details for a lead row
  const toggleRow = (id: string) => {
    setExpandedLeads(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Format Lead timestamps helper
  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Standardize status value
  const getStatus = (lead: any) => {
    return lead.status || 'new';
  };

  // Compute metrics based on fetched leads
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => getStatus(l) === 'new').length;
  const convertedLeads = leads.filter(l => getStatus(l) === 'converted').length;

  // Filter and search logic
  const filteredLeads = leads.filter(lead => {
    const statusMatches = statusFilter === 'all' || getStatus(lead) === statusFilter;
    const searchString = `${lead.name || ''} ${lead.phone || ''} ${lead.email || ''} ${lead.city || ''} ${lead.investment_goal || ''}`.toLowerCase();
    const searchMatches = searchString.includes(searchTerm.toLowerCase());
    return statusMatches && searchMatches;
  });

  if (isChecking) {
    return (
      <div style={{ 
        backgroundColor: '#0A0F1E', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ color: '#D4AF6A', fontSize: '18px' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0F1E] min-h-screen text-white font-sans">
      
      {/* Top Navbar */}
      <header className="border-b border-[#1F2937] bg-[#111827]/70 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0F1E] border border-[#1F2937] flex items-center justify-center shadow-md">
              <span className="font-serif font-bold text-base text-[#D4AF6A]">W</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg tracking-tight">WealthMind</span>
              <span className="text-[#D4AF6A] text-xs font-semibold px-2 py-0.5 rounded-full bg-[#D4AF6A]/10 border border-[#D4AF6A]/20">Admin Portal</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[#9CA3AF] hidden sm:inline-block">Logged in as {session?.user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 border border-red-500/20 hover:border-red-500 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all text-xs font-bold px-4 py-2 rounded-lg"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header Title with Refresh */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Leads Dashboard</h1>
            <p className="text-[#9CA3AF] text-sm font-light mt-1">Manage and track your incoming prospective client inquiries.</p>
          </div>
          <button
            onClick={fetchLeads}
            disabled={loadingLeads}
            className="flex items-center justify-center gap-2 border border-[#1F2937] bg-[#111827] hover:bg-[#1f2937] text-white hover:text-[#D4AF6A] transition-all text-sm font-medium px-4 py-2.5 rounded-xl self-start sm:self-auto disabled:opacity-50"
          >
            <RefreshCw size={16} className={loadingLeads ? "animate-spin text-[#D4AF6A]" : ""} />
            Refresh Leads
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Total Leads */}
          <div 
            style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }} 
            className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#D4AF6A]/20 transition-all duration-300 shadow-lg"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-300"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users className="text-blue-400" size={24} />
              </div>
              <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">All Submissions</span>
            </div>
            <p className="text-3xl font-bold tracking-tight">{loadingLeads ? '...' : totalLeads}</p>
            <p className="text-sm text-[#9CA3AF] font-light mt-1">Total inquiries received</p>
          </div>

          {/* Card 2: New Leads */}
          <div 
            style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }} 
            className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#D4AF6A]/20 transition-all duration-300 shadow-lg"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#D4AF6A]/5 rounded-full blur-2xl group-hover:bg-[#D4AF6A]/10 transition-all duration-300"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF6A]/10 flex items-center justify-center">
                <Sparkles className="text-[#D4AF6A]" size={24} />
              </div>
              <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">Unresolved Leads</span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-[#D4AF6A]">{loadingLeads ? '...' : newLeads}</p>
            <p className="text-sm text-[#9CA3AF] font-light mt-1">Awaiting initial contacted status</p>
          </div>

          {/* Card 3: Converted */}
          <div 
            style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }} 
            className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#D4AF6A]/20 transition-all duration-300 shadow-lg"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-all duration-300"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="text-green-400" size={24} />
              </div>
              <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">Converted Clients</span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-green-400">{loadingLeads ? '...' : convertedLeads}</p>
            <p className="text-sm text-[#9CA3AF] font-light mt-1">Successfully closed leads</p>
          </div>

        </div>

        {/* Filter and Search Controls */}
        <div 
          style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }} 
          className="p-5 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-md"
        >
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search leads by name, email, phone, city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-[#9CA3AF]/60 focus:border-[#D4AF6A] outline-none transition-colors"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <span className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal size={14} className="text-[#D4AF6A]" /> Filter Status:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#0A0F1E] border border-[#1F2937] text-sm text-white rounded-xl px-4 py-2.5 focus:border-[#D4AF6A] outline-none cursor-pointer w-full md:w-48 appearance-none text-center"
            >
              <option value="all">All Statuses</option>
              <option value="new">New Lead</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed / Discarded</option>
            </select>
          </div>
        </div>

        {/* Leads Table Container */}
        <div 
          style={{ border: '1px solid #1F2937', backgroundColor: '#111827' }} 
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {loadingLeads ? (
            <div className="py-24 text-center">
              <Loader2 size={36} className="text-[#D4AF6A] animate-spin mx-auto mb-3" />
              <p className="text-[#9CA3AF] text-sm">Loading prospective leads database...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0A0F1E] flex items-center justify-center mx-auto mb-4 border border-[#1F2937]">
                <Users className="text-[#9CA3AF]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">No Leads Found</h3>
              <p className="text-[#9CA3AF] text-sm font-light max-w-sm mx-auto">
                No inquiries match your current search queries or filter categories. Try resetting your settings.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                
                {/* Gold Table Header */}
                <thead>
                  <tr style={{ borderBottom: '1px solid #1F2937' }} className="bg-[#0A0F1E] text-[#D4AF6A] text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Phone</th>
                    <th className="py-4 px-6">Email</th>
                    <th className="py-4 px-6">City</th>
                    <th className="py-4 px-6">Investment Goal</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>

                {/* Table Body with Alternating Colors */}
                <tbody className="divide-y divide-[#1F2937]/50 text-sm font-light">
                  {filteredLeads.map((lead, idx) => {
                    const isExpanded = !!expandedLeads[lead.id];
                    const currentStatus = getStatus(lead);
                    
                    // Visual indicators for different statuses
                    const statusBadgeColors: Record<string, string> = {
                      new: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
                      contacted: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                      converted: 'bg-green-500/10 text-green-400 border-green-500/20',
                      closed: 'bg-red-500/10 text-red-400 border-red-500/20'
                    };
                    
                    return (
                      <React.Fragment key={lead.id}>
                        {/* Main row */}
                        <tr 
                          className={`hover:bg-[#1f2937]/40 transition-colors duration-150 cursor-pointer ${
                            idx % 2 === 1 ? 'bg-[#0E1424]/40' : 'bg-[#111827]'
                          }`}
                          onClick={() => toggleRow(lead.id)}
                        >
                          {/* Date */}
                          <td className="py-4.5 px-6 text-[#9CA3AF] text-xs shrink-0 whitespace-nowrap">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} className="text-[#D4AF6A]/60" />
                              {formatDate(lead.created_at)}
                            </span>
                          </td>

                          {/* Name */}
                          <td className="py-4.5 px-6 font-semibold text-white whitespace-nowrap">
                            {lead.name}
                          </td>

                          {/* Phone */}
                          <td className="py-4.5 px-6 text-white whitespace-nowrap">
                            <a 
                              href={`tel:${lead.phone}`} 
                              onClick={(e) => e.stopPropagation()} 
                              className="hover:text-[#D4AF6A] transition-colors flex items-center gap-1.5"
                            >
                              <Phone size={12} className="text-[#D4AF6A]/60" />
                              {lead.phone}
                            </a>
                          </td>

                          {/* Email */}
                          <td className="py-4.5 px-6 text-[#9CA3AF] whitespace-nowrap">
                            {lead.email ? (
                              <a 
                                href={`mailto:${lead.email}`} 
                                onClick={(e) => e.stopPropagation()} 
                                className="hover:text-[#D4AF6A] transition-colors flex items-center gap-1.5"
                              >
                                <Mail size={12} className="text-[#D4AF6A]/60" />
                                {lead.email}
                              </a>
                            ) : (
                              <span className="italic text-gray-600">No Email</span>
                            )}
                          </td>

                          {/* City */}
                          <td className="py-4.5 px-6 text-white whitespace-nowrap">
                            {lead.city ? (
                              <span className="flex items-center gap-1">
                                <MapPin size={12} className="text-[#D4AF6A]/60" />
                                {lead.city}
                              </span>
                            ) : (
                              <span className="text-[#9CA3AF]/40">-</span>
                            )}
                          </td>

                          {/* Investment Goal */}
                          <td className="py-4.5 px-6 whitespace-nowrap">
                            {lead.investment_goal ? (
                              <span className="bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md text-xs font-semibold uppercase">
                                {lead.investment_goal}
                              </span>
                            ) : (
                              <span className="text-[#9CA3AF]/40">-</span>
                            )}
                          </td>

                          {/* Status Dropdown */}
                          <td className="py-4.5 px-6" onClick={(e) => e.stopPropagation()}>
                            <div className="relative inline-block w-full min-w-[120px]">
                              <select
                                value={currentStatus}
                                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                className={`w-full text-xs font-bold rounded-lg border px-3 py-1.5 cursor-pointer outline-none appearance-none pr-7 transition-all ${
                                  statusBadgeColors[currentStatus] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                                }`}
                              >
                                <option value="new" className="bg-[#111827] text-white">🟡 New Lead</option>
                                <option value="contacted" className="bg-[#111827] text-white">🔵 Contacted</option>
                                <option value="converted" className="bg-[#111827] text-white">🟢 Converted</option>
                                <option value="closed" className="bg-[#111827] text-white">🔴 Closed</option>
                              </select>
                              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                            </div>
                          </td>

                          {/* Toggle Expand Action */}
                          <td className="py-4.5 px-6 text-center">
                            <button
                              onClick={() => toggleRow(lead.id)}
                              className="text-[#9CA3AF] hover:text-white transition-colors p-1"
                            >
                              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                          </td>
                        </tr>

                        {/* Collapsible Row for Lead Details / Message */}
                        {isExpanded && (
                          <tr className={idx % 2 === 1 ? 'bg-[#0E1424]/20' : 'bg-[#111827]/60'}>
                            <td colSpan={8} className="py-5 px-8 border-t border-b border-[#1F2937]/30">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                
                                {/* Lead Details Summary */}
                                <div className="space-y-3">
                                  <h4 className="text-xs font-bold text-[#D4AF6A] uppercase tracking-widest flex items-center gap-1.5">
                                    <SlidersHorizontal size={14} /> Submission Metadata
                                  </h4>
                                  <div className="grid grid-cols-2 gap-4 text-xs font-light text-[#9CA3AF]">
                                    <div>
                                      <p className="font-bold text-gray-500">LEAD ID</p>
                                      <p className="font-mono text-[10px] break-all">{lead.id}</p>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-500">LEAD SOURCE</p>
                                      <p className="capitalize">{lead.source || 'Website Form'}</p>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-500">SUBMISSION DATE</p>
                                      <p>{new Date(lead.created_at).toLocaleString()}</p>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-500">STATUS STAGE</p>
                                      <p className="capitalize font-bold text-white">{currentStatus}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Customer Message */}
                                <div className="space-y-3">
                                  <h4 className="text-xs font-bold text-[#D4AF6A] uppercase tracking-widest flex items-center gap-1.5">
                                    <MessageSquare size={14} /> Lead Message / Inquiry
                                  </h4>
                                  <div className="bg-[#0A0F1E] border border-[#1F2937]/50 rounded-xl p-4 min-h-[80px]">
                                    {lead.message ? (
                                      <p className="text-white text-xs font-light leading-relaxed whitespace-pre-wrap">
                                        "{lead.message}"
                                      </p>
                                    ) : (
                                      <p className="text-gray-500 text-xs italic">
                                        No supplementary message was submitted by the customer.
                                      </p>
                                    )}
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>

              </table>
            </div>
          )}

          {/* Table footer bar showing count */}
          {!loadingLeads && filteredLeads.length > 0 && (
            <div className="bg-[#0A0F1E] px-6 py-4 border-t border-[#1F2937] text-xs font-medium text-[#9CA3AF] flex items-center justify-between">
              <p>Showing {filteredLeads.length} of {leads.length} leads</p>
              <p className="italic">Click on any row to expand message details</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
