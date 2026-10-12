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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>GLOBAL STUDIO DESK & FREE TEST INGESTION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display mb-4">
            Connect With Dhaka HQ, <br />
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Start Your Free Pilot
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Direct access to senior post-production directors. Guaranteed response within 15 minutes.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Guarantees (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-xl space-y-6">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Dhaka Production Headquarters
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Studio Facility Address</span>
                      <span>Level-5, B-3, Block-E, Zakir Hossain Road, Mohammadpur, Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">General & Enterprise Inquiries</span>
                      <a href="mailto:contact@picasalimited.com" className="hover:text-cyan-700 transition-colors">
                        contact@picasalimited.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Studio Hotline & WhatsApp</span>
                      <a href="tel:+8801717833075" className="hover:text-cyan-700 font-mono">
                        +880 1717-833075 / +880 1886-063201
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-700 block">Operating Hours</span>
                      <span>24/5 Production Schedule (3 Shifts Rotating, Dhaka HQ UTC+6)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-cyan-800">
                      <Headphones className="w-4 h-4" />
                      <span>15-Minute Response SLA</span>
                    </div>
                    <p className="text-[11px] text-cyan-900/80">
                      Our customer desk monitors incoming quotes 24/7. Your inquiry is reviewed by an art director, not an AI bot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Badge Box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA & IP Confidentiality</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All image uploads and cloud links transmitted through this portal are encrypted via TLS 1.3
                  and governed by our standard bilateral non-disclosure agreement.
                </p>
              </div>
            </div>

            {/* Right: Direct Quote / Pilot Form (Col 7) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-xl relative">
                
                {submittedQuoteId ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700 shadow-md">
                      <Check className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                        Submission Received Successfully!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Your project ticket has entered our Dhaka production queue:
                      </p>
                      <div className="mt-3 inline-block px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono font-bold text-lg">
                        #{submittedQuoteId}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      A confirmation email and estimated turnaround time has been dispatched to{" "}
                      <span className="text-slate-900 font-mono">{clientEmail}</span>.
                    </p>

                    <button
                      onClick={() => {
                        setSubmittedQuoteId(null);
                        setCloudUrl("");
                        setInstructions("");
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold transition-all text-slate-800 border border-slate-200"
                    >
                      Submit Another Project
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider block mb-1">
                        STEP 1 OF 2
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        Free Trial & Project Quote Ingestion
                      </h2>
                      <p className="text-xs text-slate-600 mt-1">
                        5 free test images processed with zero commitment or credit card.
                      </p>
                    </div>

                    {/* Services Selection Grid */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 block mb-2">
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
                                ? "bg-cyan-50 border-cyan-400 text-cyan-900 shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                            }`}
                          >
                            <span className="truncate">{srv.title}</span>
                            {selectedServices.includes(srv.id) && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Client Email and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-slate-700 block mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.name@brand.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-cyan-500 focus:bg-white focus:outline-none shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold text-slate-700 block mb-1">
                          Brand / Studio Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme Studio, Nordstrom"
                          value={clientCompany}
                          onChange={(e) => setClientCompany(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-cyan-500 focus:bg-white focus:outline-none shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Cloud Storage Share Link */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 block mb-1">
                        Cloud Asset Link (WeTransfer / Dropbox / Google Drive) *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://wetransfer.com/downloads/... or https://drive.google.com/..."
                        value={cloudUrl}
                        onChange={(e) => setCloudUrl(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs focus:border-cyan-500 focus:bg-white focus:outline-none shadow-sm"
                      />
                    </div>

                    {/* Cloud Password Protection */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 block mb-1 flex items-center justify-between">
                        <span>Link Access Password</span>
                        <span className="text-slate-400 font-normal lowercase">optional</span>
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          placeholder="If password protected"
                          value={cloudPassword}
                          onChange={(e) => setCloudPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-cyan-500 focus:bg-white focus:outline-none shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Turnaround Speed Preference */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 block mb-2">
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
                                ? "bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                            }`}
                          >
                            <span className="text-xs font-bold block">{t.label}</span>
                            <span className="text-[10px] text-cyan-700 font-mono">{t.tag}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Retouching Notes */}
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 block mb-1">
                        Specific Guidelines / Deliverable Specs
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Clipping path with 0.5px tolerance, transparent PNG, pure #FFFFFF canvas, keep shoe shadows..."
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-cyan-500 focus:bg-white focus:outline-none shadow-sm"
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
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
