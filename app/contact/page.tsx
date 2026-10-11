"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Link as LinkIcon, 
  UploadCloud, 
  Lock,
  Headphones,
  Check
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"trial" | "inquiry">("trial");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["clipping"]);
  const [cloudUrl, setCloudUrl] = useState("");
  const [cloudPassword, setCloudPassword] = useState("");
  const [turnaround, setTurnaround] = useState("standard_24h");
  const [instructions, setInstructions] = useState("");
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (srvId: string) => {
    if (selectedServices.includes(srvId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((id) => id !== srvId));
      }
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        clientEmail,
        clientCompany,
        selectedServices,
        turnaround,
        activeTab: "cloud",
        cloudUrl: cloudUrl || "Direct contact inquiry",
        cloudPassword,
        instructions: instructions || "Contact page submission",
        files: []
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please check inputs.");
      }

      setSubmittedQuoteId(data.quoteId);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GLOBAL STUDIO DESK & FREE TEST INGESTION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display mb-4">
            Connect With Dhaka HQ, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              Start Your Free Pilot
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Direct access to senior post-production directors. Guaranteed response within 15 minutes.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Guarantees (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl p-8 bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-6">
                <h2 className="text-xl font-bold font-display text-white">
                  Dhaka Production Headquarters
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Studio Facility Address</span>
                      <span>Dhaka 1212, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">General & Enterprise Inquiries</span>
                      <a href="mailto:info@picasalimited.com" className="hover:text-cyan-400 transition-colors">
                        info@picasalimited.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Studio Hotline & WhatsApp</span>
                      <span>+880 1711-000000 / +1 (800) PICASA</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-400 block">Operating Hours</span>
                      <span>24 Hours / 7 Days a Week (Tri-Shift Continuous)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-cyan-300">
                      <Headphones className="w-4 h-4" />
                      <span>15-Minute Response SLA</span>
                    </div>
                    <p className="text-[11px] text-cyan-200/80">
                      Our customer desk monitors incoming quotes 24/7. Your inquiry is reviewed by an art director, not an AI bot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Badge Box */}
              <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA & IP Confidentiality</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All image uploads and cloud links transmitted through this portal are encrypted via TLS 1.3
                  and governed by our standard bilateral non-disclosure agreement.
                </p>
              </div>
            </div>

            {/* Right: Direct Quote / Pilot Form (Col 7) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-white/10 backdrop-blur-2xl relative shadow-glass-lg">
                
                {submittedQuoteId ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-3d-glow">
                      <Check className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-display text-white mb-2">
                        Submission Received Successfully!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Your project ticket has entered our Dhaka production queue:
                      </p>
                      <div className="mt-3 inline-block px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono font-bold text-lg">
                        #{submittedQuoteId}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      A confirmation email and estimated turnaround time has been dispatched to{" "}
                      <span className="text-white font-mono">{clientEmail}</span>.
                    </p>

                    <button
                      onClick={() => {
                        setSubmittedQuoteId(null);
                        setCloudUrl("");
                        setInstructions("");
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold transition-all text-white"
                    >
                      Submit Another Project
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                        STEP 1 OF 2
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                        Free Trial & Project Quote Ingestion
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        5 free test images processed with zero commitment or credit card.
                      </p>
                    </div>

                    {/* Services Selection Grid */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-2">
                        Required Retouching Services *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SERVICES_DATA.map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv.id)}
                            className={`p-2.5 rounded-xl text-left border text-xs font-semibold flex items-center justify-between transition-all ${
                              selectedServices.includes(srv.id)
                                ? "bg-cyan-950/80 border-cyan-400 text-cyan-200"
                                : "bg-slate-950/50 border-white/5 text-slate-400 hover:text-white"
                            }`}
                          >
                            <span className="truncate">{srv.title}</span>
                            {selectedServices.includes(srv.id) && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Client Email and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.name@brand.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                          Brand / Studio Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Studio, Nordstrom"
                          value={clientCompany}
                          onChange={(e) => setClientCompany(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Cloud Storage Share Link */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                        Cloud Asset Link (WeTransfer / Dropbox / Google Drive) *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://wetransfer.com/downloads/... or https://drive.google.com/..."
                        value={cloudUrl}
                        onChange={(e) => setCloudUrl(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    {/* Cloud Password Protection */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1 flex items-center justify-between">
                        <span>Link Access Password</span>
                        <span className="text-slate-500 font-normal lowercase">optional</span>
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          placeholder="If password protected"
                          value={cloudPassword}
                          onChange={(e) => setCloudPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Turnaround Speed Preference */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-2">
                        Preferred Turnaround SLA
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "standard_24h", label: "24h Standard", tag: "Included" },
                          { id: "rush_12h", label: "12h Express", tag: "Fast" },
                          { id: "rush_6h", label: "6h Super Rush", tag: "Priority" }
                        ].map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTurnaround(t.id)}
                            className={`p-2.5 rounded-xl border text-center transition-all ${
                              turnaround === t.id
                                ? "bg-cyan-950 border-cyan-400 text-cyan-200"
                                : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-bold block">{t.label}</span>
                            <span className="text-[10px] text-cyan-400 font-mono">{t.tag}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Retouching Notes */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                        Specific Guidelines / Deliverable Specs
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Clipping path with 0.5px tolerance, transparent PNG, pure #FFFFFF canvas, keep shoe shadows..."
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-sm shadow-3d-glow flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Transmitting to Dhaka Queue...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Free Trial (5 Images)</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
