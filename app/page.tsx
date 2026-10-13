"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import LiveProductionFeed from "@/components/LiveProductionFeed";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StudioInspectorLab from "@/components/StudioInspectorLab";
import EnterpriseStandardsChecker from "@/components/EnterpriseStandardsChecker";
import ProductionPipelineWorkflow from "@/components/ProductionPipelineWorkflow";
import AiVsHumanShowcase from "@/components/AiVsHumanShowcase";
import Services3D from "@/components/Services3D";
import PricingCalculator from "@/components/PricingCalculator";
import EnterpriseBillingSection from "@/components/EnterpriseBillingSection";
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
      
      {/* 1. Sticky Frosted Glassmorphism Navbar with World Clocks */}
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      {/* 2. Flagship Interactive 3D Hero Section (With Cinematic Full-Bleed Running Video) */}
      <Hero3D onOpenUpload={() => handleOpenUpload()} />

      {/* 2.5 Live Real-Time Studio Dispatch & QC Activity Feed */}
      <LiveProductionFeed 
        onSelectService={handleSelectServiceFromCard}
        onOpenUpload={() => handleOpenUpload()}
      />

      {/* 3. Micro-Precision Before & After Dual-Layer Inspection (Authentic Client Photo Benchmarks) */}
      <BeforeAfterSlider />

      {/* 4. Sub-Pixel Precision Studio Inspector Lab (RGB Splitter, Bezier Paths & 2.4x Loupe) */}
      <StudioInspectorLab />

      {/* 4.5 Enterprise Marketplace Standards & Automated Acceptance Diagnostic */}
      <EnterpriseStandardsChecker />

      {/* 4.8 Industrial 5-Stage Production Engine & File Ingestion Workflow */}
      <ProductionPipelineWorkflow />

      {/* 5. AI vs Human Specialist Breakdown (Why Global Brands Choose Picasa Pen Tools) */}
      <AiVsHumanShowcase />

      {/* 5. 12 Core Services 3D Tilt Cards Grid */}
      <section className="relative">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-mono font-bold tracking-wider text-rose-800 uppercase">
              Core Post-Production Capabilities
            </span>
          </div>
          <Link
            href="/services"
            className="text-xs font-mono font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 group hover:-translate-y-0.5 transition-all"
          >
            <span>Explore All 12 Technical Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <Services3D 
          onSelectService={handleSelectServiceFromCard}
          onOpenUpload={() => handleOpenUpload()}
        />
      </section>

      {/* 6. Live Running Commercial Video Reel */}
      <CommercialVideoReel 
        onOpenUpload={(serviceId) => handleOpenUpload({ serviceId: serviceId || "video-editing" })}
      />

      {/* 7. Dynamic Real-Time Pricing Estimator */}
      <section className="relative" id="pricing">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-mono font-bold tracking-wider text-rose-800 uppercase">
              Instant Estimation Engine
            </span>
          </div>
          <Link
            href="/pricing"
            className="text-xs font-mono font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 group hover:-translate-y-0.5 transition-all"
          >
            <span>Volume Tiers & Billing FAQ</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <PricingCalculator initialServiceId={calculatorServiceId} />
      </section>

      {/* 7.5 Frictionless Corporate Billing & Flexible Monthly Invoicing */}
      <EnterpriseBillingSection />

      {/* 8. Verified Enterprise Trust & SLA Statistics */}
      <TrustStats />

      {/* 9. Comprehensive Studio Operations FAQ */}
      <FAQSection />

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
