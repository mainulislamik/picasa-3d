"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductionPipelineWorkflow from "@/components/ProductionPipelineWorkflow";
import EnterpriseBillingSection from "@/components/EnterpriseBillingSection";
import UploadModal from "@/components/UploadModal";
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  FileCheck, 
  Server, 
  Lock, 
  Layers, 
  HelpCircle,
  Eye,
  PhoneCall
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function HowItWorksPage() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const SLAs = [
    {
      tier: "Lightning Sprint",
      time: "4 - 6 Hours",
      ideal: "Press releases, breaking campaign launches & urgent revisions",
      capacity: "Up to 150 Assets / Batch",
      guarantee: "100% on-time SLA or rush fee credited",
      badge: "Fastest Turnaround"
    },
    {
      tier: "Overnight Rush",
      time: "12 Hours",
      ideal: "US/EU daylight photo shoots processed overnight for next-day upload",
      capacity: "Up to 500 Assets / Batch",
      guarantee: "Tri-shift overnight prioritization",
      badge: "Most Popular For Studios"
    },
    {
      tier: "Standard Catalog",
      time: "24 Hours",
      ideal: "Regular weekly e-commerce drops, lookbooks & seasonal lookbooks",
      capacity: "Up to 2,000 Assets / Batch",
      guarantee: "Comprehensive dual-monitor QC inspection",
      badge: "Standard Enterprise"
    },
    {
      tier: "Bulk High-Volume",
      time: "48 Hours",
      ideal: "Full marketplace catalog migrations & archive vectorization",
      capacity: "5,000+ Assets / Batch",
      guarantee: "Dedicated team of 20+ artists allocated",
      badge: "Maximum Tiered Discount"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-rose-600 selection:text-white">
      <Navbar onOpenUpload={() => setIsUploadOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold tracking-wider uppercase mb-6">
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              <span>Enterprise Production Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              How Picasa Delivers 2,000+ Precision Assets Daily
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our industrial post-production engine. Combining air-gapped secure cloud ingestion, 
              120+ full-time master artisans across 3 continuous shifts, and dual-monitor 500% pixel audits.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsUploadOpen(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 transition-all group"
              >
                <span>Submit 3 Free Test Files</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View Volume Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Guarantees Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block mb-1">
              Guaranteed Delivery Windows
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Contractual Service Level Agreements (SLA)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SLAs.map((sla, sIdx) => (
              <div 
                key={sIdx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      {sla.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-rose-600" />
                      {sla.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {sla.tier}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {sla.ideal}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-mono">
                  <div className="text-slate-500 font-medium">Batch Capacity: <strong className="text-slate-900">{sla.capacity}</strong></div>
                  <div className="text-rose-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{sla.guarantee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 5-Stage Interactive Pipeline */}
      <ProductionPipelineWorkflow />

      {/* Enterprise Billing & Terms */}
      <EnterpriseBillingSection />

      {/* Security & Confidentiality Assurances */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold">
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Confidentiality & Air-Gapped Production Facility</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Protecting Unreleased Fashion & Commercial IP
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We treat every client photograph as confidential commercial intellectual property. 
                  Our Mohammadpur Dhaka facility enforces hardware-level USB port locks, disabled external storage, 
                  restricted internet access on production workstations, and automatic 30-day encrypted server purging.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    Bilateral NDA Signed Pre-Upload
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    Air-Gapped Artist Terminals
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    Zero Third-Party Model Training
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/nda"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-600/30"
                >
                  <span>Review & Sign e-NDA Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Speak With Production Director</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </div>
  );
}