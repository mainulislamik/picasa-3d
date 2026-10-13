"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStats from "@/components/TrustStats";
import AiVsHumanShowcase from "@/components/AiVsHumanShowcase";
import UploadModal from "@/components/UploadModal";
import { 
  Sparkles, 
  Users, 
  Clock, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  Server,
  Lock,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const TIMELINE_MILESTONES = [
    {
      year: "2016",
      title: "Founding in Mohammadpur, Dhaka",
      desc: "Established with senior DTP and Photoshop craftsmen delivering 100% hand-drawn vector clipping paths to European and US fashion catalog clients."
    },
    {
      year: "2019",
      title: "Enterprise Studio Scaling",
      desc: "Expanded to 60+ full-time artists, introducing high-end jewelry frequency separation, 3D ghost mannequin neck joints, and secure cloud ingestion."
    },
    {
      year: "2023",
      title: "24/5 Tri-Shift Operations",
      desc: "Established rotating 8-hour shift cycles serving over 109 global enterprise clients including Mango, True Religion, Fossil Group, Forbes, and Inc."
    },
    {
      year: "2026",
      title: "Picasa 3D & Advanced Post-Production",
      desc: "120+ in-house artists equipped with color-calibrated displays, sub-pixel pen tablet workflows, commercial video reels, and strict ISO/e-NDA controls."
    }
  ];

  const SECURITY_PILLARS = [
    {
      icon: Lock,
      title: "Bilateral Mutual NDA",
      desc: "Every contract includes enforceable intellectual property safeguards. Your unreleased campaign visuals remain strictly confidential."
    },
    {
      icon: Server,
      title: "Air-Gapped Tier-3 Storage",
      desc: "Assets reside on encrypted on-premise local SAN storage. Client files are automatically purged after 30 days of confirmed delivery."
    },
    {
      icon: ShieldCheck,
      title: "Zero Third-Party Outsourcing",
      desc: "100% of editing work is handled exclusively in-house by full-time staff under direct biometric facility supervision."
    },
    {
      icon: Users,
      title: "Dedicated Production Cells",
      desc: "For accounts over 2,000 images/month, we allocate dedicated artists trained specifically on your brand style bible."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-rose-600 selection:text-white">
      <Navbar onOpenUpload={() => setModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>BEHIND THE CRAFTSMANSHIP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display mb-6">
            180+ In-House Artists, <br />
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 bg-clip-text text-transparent">
              Dhaka HQ Operational Engine
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Picasa Limited is a world-class digital image post-production studio based in Dhaka, Bangladesh.
            We blend artisanal human precision with high-throughput workflow architecture to power global commercial imagery.
          </p>
        </section>

        {/* Global Studio Metrics */}
        <TrustStats />

        {/* The Dhaka Operations Story */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-700 uppercase tracking-widest font-bold">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Dhaka, Bangladesh Production Hub</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                Human Eyes, Steady Hands, <br />
                Uncompromising Detail.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                While algorithmic AI filters continue to struggle with organic contours, fuzzy knits, and translucent glassware,
                our dedicated team of 180+ full-time artists inspects every curve at 400% zoom.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our facility is organized into specialized production cells: clipping & masking masters, fashion ghost-mannequin sculptors,
                and high-end jewelry retouchers. Operating three overlapping 8-hour shifts, we cover all timezones across New York, London, and Tokyo.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-rose-300 hover:shadow-md transition-all">
                  <span className="text-2xl font-black text-rose-700 font-display block">180+</span>
                  <span className="text-slate-500 font-mono">Full-Time Retouchers</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-rose-300 hover:shadow-md transition-all">
                  <span className="text-2xl font-black text-emerald-700 font-display block">24/7/365</span>
                  <span className="text-slate-500 font-mono">Uninterrupted Shifts</span>
                </div>
              </div>
            </div>

            {/* Dhaka Facility Features */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-rose-600" />
                <span>Production Facility Standards</span>
              </h3>

              <div className="space-y-4">
                {[
                  "Dual Gigabit Fiber Uplinks with automatic failover",
                  "Hardware Color-Calibrated IPS & EIZO ColorEdge Displays",
                  "Standardized sRGB, Adobe RGB (1998) & ProPhoto RGB workflows",
                  "Three-tier manual Quality Control by Senior Art Directors",
                  "Automated FTP / Aspera / S3 / API file delivery pipelines"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
                <span className="font-bold block mb-1">Guaranteed SLA Delivery:</span>
                Order turnaround begins the second files land on our server, with delivery guarantees backed by full revision credits.
              </div>
            </div>
          </div>
        </section>

        {/* Why Manual Craftsmanship Wins: AI vs Human Specialist Breakdown */}
        <div className="mt-20">
          <AiVsHumanShowcase />
        </div>

        {/* Security & Confidentiality Grid */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-rose-700 uppercase tracking-widest font-bold">
              SECURITY & DATA INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Enterprise Grade Asset Protection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-400 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Studio Timeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Our Evolution
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-[2px] before:bg-slate-200">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative pl-10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="absolute left-2.5 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-md"></div>
                <span className="text-lg font-black font-mono text-rose-700 shrink-0">{item.year}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-20 text-center">
          <div className="p-12 rounded-3xl bg-white border-2 border-rose-500/30 shadow-xl hover:border-rose-500 transition-all">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">
              Ready to Upgrade Your Post-Production Pipeline?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
              Experience Dhaka craftsmanship first-hand. Send 5 test images today with no commitment.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Start Free Trial (5 Images)
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <UploadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
