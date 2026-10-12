"use client";

import React from "react";
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles, 
  Award, 
  Server, 
  FileCheck2, 
  CheckCircle2, 
  Zap,
  Globe2
} from "lucide-react";
import { TRUST_COUNTERS, ENTERPRISE_BADGES, CLIENT_LOGOS } from "@/lib/constants";

export default function TrustStats() {
  return (
    <section id="trust" className="py-24 bg-slate-50/70 relative overflow-hidden border-y border-slate-200/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-cyan-600" />
            <span>GLOBAL PRODUCTION INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Enterprise Scale. Verified Reliability.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Trusted by global fashion conglomerates, luxury jewelry brands, and high-volume e-commerce platforms across North America, Europe, and Asia.
          </p>
        </div>

        {/* 4 Large Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_COUNTERS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 text-center space-y-2 border border-slate-200 shadow-sm hover:border-cyan-400 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
            >
              <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 font-mono tracking-tight block">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-900 block">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 block">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
            TRUSTED PRODUCTION DESK FOR GLOBAL LEADERS
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-8">
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md hover:-translate-y-1 flex items-center justify-center w-full max-w-[200px] h-20 transition-all overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-[120px] w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Facility Banner */}
        <div className="mb-20 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2021/01/office_working.jpg"
              alt="Picasa Limited Dhaka Production Floor"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                Picasa Limited Dhaka HQ • Level-5, Mohammadpur Studio
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono">
              <Users className="w-3.5 h-3.5 text-cyan-600" />
              <span>120+ FULL-TIME CRAFTSMEN</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Real Humans. Zero Automated Shortcuts.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every curve, shadow, and collar joint is meticulously crafted by professional graphic artists working in our dedicated Dhaka facility. Three overlapping shifts ensure your images are processed around the clock without outsourcing.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs font-mono text-slate-500">
              <div>
                <span className="font-bold text-slate-900 block text-base">2,000+</span>
                Daily Image Output
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <span className="font-bold text-slate-900 block text-base">99.8%</span>
                First-Pass QC Rate
              </div>
            </div>
          </div>
        </div>

        {/* 4 Enterprise Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTERPRISE_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 hover:border-cyan-300 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                {idx === 0 && <ShieldCheck className="w-5 h-5 text-cyan-600" />}
                {idx === 1 && <FileCheck2 className="w-5 h-5 text-indigo-600" />}
                {idx === 2 && <Server className="w-5 h-5 text-emerald-600" />}
                {idx === 3 && <Clock className="w-5 h-5 text-amber-600" />}
                <h4 className="text-sm font-bold text-slate-900">{badge.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
