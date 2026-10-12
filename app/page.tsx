"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Services3D from "@/components/Services3D";
import PricingCalculator from "@/components/PricingCalculator";
import TrustStats from "@/components/TrustStats";
import CommercialVideoReel from "@/components/CommercialVideoReel";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";
import { ArrowUp, Sparkles, ArrowRight, Layers, Sliders, ShieldCheck } from "lucide-react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [calculatorServiceId, setCalculatorServiceId] = useState("clipping");
  const [uploadConfig, setUploadConfig] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenUpload = (config?: any) => {
    setUploadConfig(config || null);
    setIsUploadOpen(true);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setCalculatorServiceId(serviceId);
    if (typeof document !== "undefined") {
      const calcElement = document.getElementById("pricing");
      if (calcElement) {
        calcElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative overflow-x-hidden w-full">
      
      {/* 1. Sticky Frosted Glassmorphism Navbar */}
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      {/* 2. Flagship Interactive 3D Hero Section */}
      <Hero3D onOpenUpload={() => handleOpenUpload()} />

      {/* 3. Sub-Pixel Dual-Layer Before/After Slider Teaser */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-800 uppercase">
              Interactive Precision Inspection
            </span>
          </div>
          <Link
            href="/portfolio"
            className="text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group hover:-translate-y-0.5 transition-all"
          >
            <span>View Full Gallery Archive</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <BeforeAfterSlider />
      </section>

      {/* 4. 6 Core Services 3D Tilt Cards Grid */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-600" />
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-800 uppercase">
              Core Post-Production Capabilities
            </span>
          </div>
          <Link
            href="/services"
            className="text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <Services3D 
          onSelectService={handleSelectServiceFromCard}
          onOpenUpload={() => handleOpenUpload()}
        />
      </section>

      {/* 5. Live Running Commercial Video Reel */}
      <CommercialVideoReel 
        onOpenUpload={(serviceId) => handleOpenUpload({ serviceId: serviceId || "video-editing" })}
      />

      {/* 6. Dynamic Real-Time Pricing Estimator */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-600" />
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-800 uppercase">
              Instant Estimation Engine
            </span>
          </div>
          <Link
            href="/pricing"
            className="text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group hover:-translate-y-0.5 transition-all"
          >
            <span>Volume Tiers & Billing FAQ</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <PricingCalculator 
          initialServiceId={calculatorServiceId}
          onOpenUpload={(config) => handleOpenUpload(config)}
        />
      </section>

      {/* 6. Enterprise Reliability & Trust Stats */}
      <TrustStats />

      {/* 7. Comprehensive Accordion FAQ */}
      <FAQSection />

      {/* 8. Global Production Footer */}
      <Footer onOpenUpload={() => handleOpenUpload()} />

      {/* 9. Interactive Full-Screen Upload Modal */}
      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        initialConfig={uploadConfig}
      />

      {/* Floating Quick Action CTA Badge (Bottom Right) */}
      {isMounted && (
        <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <button
            onClick={() => handleOpenUpload()}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Upload 5 Free</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all shadow-md"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </aside>
      )}
    </main>
  );
}
