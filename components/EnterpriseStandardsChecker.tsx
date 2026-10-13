"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sliders, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  Download, 
  Layers, 
  Eye, 
  Maximize2 
} from "lucide-react";
import { soundFx } from "@/lib/audio";

interface PresetPlatform {
  id: string;
  name: string;
  badge: string;
  specs: {
    background: string;
    bgHex: string;
    padding: string;
    format: string;
    colorSpace: string;
    maxFileSize: string;
  };
  checks: {
    name: string;
    status: "pass" | "fail" | "warning";
    detail: string;
  }[];
  sampleBefore: string;
  sampleAfter: string;
}

const PLATFORMS: PresetPlatform[] = [
  {
    id: "amazon",
    name: "Amazon Marketplace (Global)",
    badge: "100% Guaranteed Main Image Approval",
    specs: {
      background: "Pure RGB White (255, 255, 255)",
      bgHex: "#FFFFFF",
      padding: "85% Frame Fill Ratio",
      format: "TIFF / JPEG (Baseline)",
      colorSpace: "sRGB IEC61966-2.1",
      maxFileSize: "10 MB (Min 1000px on longest side)"
    },
    checks: [
      { name: "Pure White RGB [255, 255, 255]", status: "pass", detail: "Zero gray cast, zero background noise" },
      { name: "Product Frame Fill Ratio >= 85%", status: "pass", detail: "Compliant zoom trigger on Amazon Desktop/Mobile" },
      { name: "No Text, Watermarks or Props", status: "pass", detail: "Compliant with Amazon TOS § 4.2" },
      { name: "Crisp Sub-Pixel Clipping Edge", status: "pass", detail: "Smooth bezier vector pen cut with 0% halo" }
    ],
    sampleBefore: "/wp-content/uploads/2021/01/cp_b.jpg",
    sampleAfter: "/wp-content/uploads/2021/01/cp_a.jpg"
  },
  {
    id: "farfetch",
    name: "Farfetch & Luxury Marketplaces",
    badge: "Editorial High-End Standard",
    specs: {
      background: "Calibrated Studio Gray (#F5F5F5 / #EAEAEA)",
      bgHex: "#F5F5F5",
      padding: "Symmetrical Centered 80% Vertical",
      format: "Lossless PNG-24 / WebP",
      colorSpace: "Adobe RGB (1998) or sRGB",
      maxFileSize: "4K Master Resolution (300 DPI)"
    },
    checks: [
      { name: "Uniform Neutral Luxury Cast", status: "pass", detail: "Calibrated to Farfetch visual brand book" },
      { name: "Authentic Ground Drop Shadow", status: "pass", detail: "True contact shadow preserved naturally" },
      { name: "Micro-Texture & Leather Pores", status: "pass", detail: "Non-destructive high-pass texture retain" },
      { name: "Symmetrical Vertical Center", status: "pass", detail: "Grid aligned for luxury masonry catalog" }
    ],
    sampleBefore: "/wp-content/uploads/2021/01/reflection_4_a.jpg",
    sampleAfter: "/wp-content/uploads/2021/01/reflection_4_b.jpg"
  },
  {
    id: "shopify",
    name: "Shopify Plus & DTC Stores",
    badge: "Ultra-Fast CWV Web Performance",
    specs: {
      background: "Transparent Alpha / Pure White",
      bgHex: "Alpha #00000000",
      padding: "Responsive 1:1 Square Ratio",
      format: "Modern AVIF / WebP Compression",
      colorSpace: "sRGB Display P3 Optimized",
      maxFileSize: "< 180 KB for 100/100 Google PageSpeed"
    },
    checks: [
      { name: "Alpha Matte Translucency", status: "pass", detail: "Crisp alpha edges ready for dark/light theme switch" },
      { name: "Next-Gen WebP Compression", status: "pass", detail: "Zero compression banding with 80% file reduction" },
      { name: "Dynamic Hover State Ready", status: "pass", detail: "Front + Back secondary image paired perfectly" },
      { name: "Mobile First Viewport Fit", status: "pass", detail: "Optimized for iOS Safari & Android Chrome" }
    ],
    sampleBefore: "/wp-content/uploads/2021/01/neck_a.jpg",
    sampleAfter: "/wp-content/uploads/2021/01/neck_b.jpg"
  }
];

export default function EnterpriseStandardsChecker() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("amazon");

  const current = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 mesh-grid opacity-30 pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            <span>Marketplace Compliance Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Guaranteed 100% Acceptance on Global Retail Channels
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every e-commerce platform enforces rigorous automated rejection filters. Picasa formats, color-profiles, and verifies every asset against official vendor specifications.
          </p>

          {/* Platform Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs gap-1">
            {PLATFORMS.map((platform) => (
              <button
                key={platform.id}
                onClick={() => {
                  soundFx.playSwitch();
                  setSelectedPlatform(platform.id);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedPlatform === platform.id
                    ? "bg-white text-rose-600 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Diagnostic Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {/* Left Column: Visual Before & After Proof */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                Compliance Verification Sandbox
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                STATUS: 100% PASSED
              </span>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-inner group">
              {/* Split comparison */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.sampleAfter}
                alt={current.name}
                className="w-full h-full object-contain p-4"
              />

              {/* Verified Stamp Overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-200 shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>VENDOR APPROVED</span>
              </div>

              {/* Background Color Checker Callout */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-mono flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.specs.bgHex === "#FFFFFF" ? "#fff" : "#f5f5f5" }}></span>
                <span>Target BG: {current.specs.background}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center font-mono">
              Tested on 100,000+ live batch uploads across EU, US, and APAC storefronts.
            </p>
          </div>

          {/* Right Column: Platform Standards Checklist & Technical Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold mb-2">
                {current.badge}
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {current.name} Specifications
              </h3>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5">
              {current.checks.map((chk, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs hover:border-rose-300 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {chk.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      {chk.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Padding / Ratio</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{current.specs.padding}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Color Profile</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{current.specs.colorSpace}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Output File Type</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{current.specs.format}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Weight / Dimensions</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{current.specs.maxFileSize}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
