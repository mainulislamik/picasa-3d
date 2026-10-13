"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import LiveProductionFeed from "@/components/LiveProductionFeed";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StudioInspectorLab from "@/components/StudioInspectorLab";
import CommercialVideoReel from "@/components/CommercialVideoReel";
import TrustStats from "@/components/TrustStats";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";
import { 
  ArrowUp, 
  Sparkles, 
  ArrowRight, 
  Scissors, 
  Shirt, 
  Gem, 
  Video, 
  CheckCircle2, 
  Zap,
  PhoneCall
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadConfig, setUploadConfig] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenUpload = (config?: any) => {
    setUploadConfig(config || null);
    setIsUploadOpen(true);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const FLAGSHIP_SERVICES = [
    {
      id: "clipping-path",
      icon: Scissors,
      title: "Clipping Path & Multi-Paths",
      tag: "Foundation Isolation",
      price: "From $0.25 / img",
      sla: "4-6h Rush SLA",
      description: "100% hand-drawn vector Pen-Tool paths with 0.5px tolerance. Compound paths and complex wicker/lace isolation with zero edge halos.",
      highlights: ["0.5px Sub-Pixel Precision", "Zero AI Blur/Halos", "Embedded PSD/TIFF Paths"]
    },
    {
      id: "ghost-mannequin",
      icon: Shirt,
      title: "Ghost Mannequin & Apparel",
      tag: "Fashion & Catalog",
      price: "From $0.65 / img",
      sla: "Overnight 12h SLA",
      description: "3D hollow-man symmetrical drape combining front, neck-joint, inner lining and waistband shots with natural inner shadow depth.",
      highlights: ["Anatomical Collar Cavity", "Symmetrical Hem Stitching", "Realistic Drop Shadows"]
    },
    {
      id: "high-end-retouching",
      icon: Gem,
      title: "High-End Jewelry & Metals",
      tag: "Editorial & Luxury",
      price: "From $1.20 / img",
      sla: "Dedicated QC Cell",
      description: "Non-destructive frequency separation preserving authentic skin pores. Gemstone fire cleanup, specular polishing, and Delta-E < 1 matching.",
      highlights: ["16-Bit Pro Separation", "Facet Scratch Removal", "True Specular Glare"]
    },
    {
      id: "commercial-video",
      icon: Video,
      title: "E-Commerce Commercial Video",
      tag: "Social & Marketplaces",
      price: "From $5.00 / clip",
      sla: "Same-Day Delivery",
      description: "High-tempo TikTok, Amazon & Instagram Reels editing. Color grading, seamless audio sync, 9:16 and 1:1 multi-aspect adaptation.",
      highlights: ["4K 60fps ProRes Support", "Color Match to Stills", "Sub-Second Hook Pacing"]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative overflow-x-hidden w-full">
      
      {/* 1. Sticky Frosted Glassmorphism Navbar with World Clocks */}
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      {/* 2. Flagship Interactive 3D Hero Section (With Cinematic Full-Bleed Running Video) */}
      <Hero3D onOpenUpload={() => handleOpenUpload()} />

      {/* 3. Live Real-Time Studio Dispatch & QC Activity Feed */}
      <LiveProductionFeed 
        onSelectService={(serviceId) => handleOpenUpload({ serviceId })}
        onOpenUpload={() => handleOpenUpload()}
      />

      {/* 4. Micro-Precision Before & After Dual-Layer Inspection (Authentic Client Photo Benchmarks) */}
      <BeforeAfterSlider />

      {/* 5. Sub-Pixel Precision Studio Inspector Lab (RGB Splitter, Bezier Paths & 500% Loupe) */}
      <StudioInspectorLab />

      {/* 6. Curated Flagship Capabilities (4 High-Impact Pillars) */}
      <section className="py-20 bg-white relative border-b border-slate-200" id="capabilities">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>CRAFTED IN-HOUSE • DHAKA PRODUCTION HQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
                Flagship Studio Disciplines
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Manual precision engineered for high-volume catalogs, global luxury houses, and digital-first retailers.
              </p>
            </div>

            <Link
              href="/services"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group shrink-0"
            >
              <span>Explore All 12 Capabilities & Specs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLAGSHIP_SERVICES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="group p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-rose-400 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 group-hover:border-rose-200 group-hover:bg-rose-50 flex items-center justify-center transition-all">
                        <IconComp className="w-6 h-6 text-rose-600" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                        {srv.sla}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      {srv.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5 mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-4">
                      {srv.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {srv.price}
                    </span>
                    <button
                      onClick={() => handleOpenUpload({ serviceId: srv.id })}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group/btn"
                    >
                      <span>Try Sample</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Live Running Commercial Video Reel */}
      <CommercialVideoReel 
        onOpenUpload={(serviceId) => handleOpenUpload({ serviceId: serviceId || "video-editing" })}
      />

      {/* 8. Verified Enterprise Trust & SLA Statistics */}
      <TrustStats />

      {/* 9. Executive High-Converting Final Conversion Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              <span>Zero-Risk Enterprise Evaluation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Upgrade Your Post-Production Pipeline?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Test our turnaround speed, sub-pixel pen tool precision, and dual-monitor QC. 
              Send 3 raw images today — returned within 4 hours, 100% free with no credit card required.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  soundFx.playClick();
                  handleOpenUpload();
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Claim Your 3 Free Test Images</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                onClick={() => soundFx.playClick()}
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>Talk to Production Supervisor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Enterprise Directory Footer */}
      <Footer />

      {/* Dynamic Floating Quick Actions */}
      {isMounted && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-12 h-12 rounded-full bg-white text-slate-700 border border-slate-300 shadow-xl flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 transition-all hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Modal / Dialog Portals */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        initialConfig={uploadConfig ? { selectedServices: [uploadConfig.serviceId] } : null}
      />
    </main>
  );
}
