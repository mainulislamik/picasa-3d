"use client";

import React from "react";
import Link from "next/link";
import { ENTERPRISE_BILLING_TERMS, GLOBAL_OFFICES } from "@/lib/constants";
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Clock, 
  Sparkles, 
  Lock,
  Globe2
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function EnterpriseBillingSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200" id="billing">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-4">
            <CreditCard className="w-3.5 h-3.5 text-rose-600" />
            <span>Commercial Finance & Enterprise Terms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frictionless Corporate Billing & Flexible Payment
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate administrative bottlenecks. Whether you require flexible pay-per-image processing 
            or month-end consolidated corporate invoicing with NET-30 terms, Picasa adapts to your procurement standards.
          </p>
        </div>

        {/* 3 Billing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {ENTERPRISE_BILLING_TERMS.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.highlight
                    ? "bg-slate-900 text-white shadow-2xl border-2 border-rose-500 scale-[1.02]"
                    : "bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular For Agencies & Brands</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                      tier.highlight ? "bg-rose-600/30 text-rose-300 border border-rose-500/40" : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}>
                      {tier.badge}
                    </span>
                    <span className={`text-xs font-mono flex items-center gap-1 ${
                      tier.highlight ? "text-slate-400" : "text-slate-500"
                    }`}>
                      <Clock className="w-3 h-3 text-rose-500" />
                      {tier.turnaround}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-extrabold mb-2 ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                    {tier.title}
                  </h3>

                  <div className={`text-2xl font-mono font-black mb-4 ${tier.highlight ? "text-rose-400" : "text-rose-600"}`}>
                    {tier.priceDesc}
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {tier.description}
                  </p>

                  <div className={`space-y-3 pt-6 border-t ${tier.highlight ? "border-slate-800" : "border-slate-100"}`}>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-rose-400" : "text-rose-600"}`} />
                        <span className={tier.highlight ? "text-slate-200" : "text-slate-700 font-medium"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100/20">
                  <Link
                    href={tier.ctaLink}
                    onClick={() => soundFx.playClick()}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all group ${
                      tier.highlight
                        ? "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Production & Client Liaison Desks */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Global Production Footprint</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Dhaka Master Studio & Worldwide Client Desks
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500">
              120+ In-House Seats · 3 Overlapping Shifts · 24/5 Live Operations
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GLOBAL_OFFICES.map((office, oIdx) => (
              <div 
                key={oIdx}
                className={`p-6 rounded-2xl border transition-all ${
                  office.isHQ 
                    ? "bg-rose-50/40 border-rose-200 shadow-sm" 
                    : "bg-slate-50/80 border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    office.isHQ ? "bg-rose-600 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {office.isHQ ? "HQ & MASTER STUDIO" : "CLIENT LIAISON"}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {office.location}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-900 mb-2">
                  {office.region}
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {office.address}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-700">
                  <div className="text-slate-500 font-semibold">{office.capacity}</div>
                  <div className="text-rose-700 font-bold">{office.contact}</div>
                </div>
              </div>
            ))}
          </div>

          {/* SLA Security & Guarantee Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                Legally Binding Bilateral NDA Included
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-rose-600" />
                Consolidated Monthly Statements (SWIFT / ACH / Wise)
              </span>
            </div>
            <Link
              href="/nda"
              className="font-bold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 font-mono"
            >
              <span>Download Standard NDA Template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}