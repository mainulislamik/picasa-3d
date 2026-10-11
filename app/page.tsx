"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Services3D from "@/components/Services3D";
import PricingCalculator from "@/components/PricingCalculator";
import TrustStats from "@/components/TrustStats";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";
import { ArrowUp, Sparkles } from "lucide-react";

export default function Home() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [calculatorServiceId, setCalculatorServiceId] = useState("clipping");
  const [uploadConfig, setUploadConfig] = useState<any>(null);

  const handleOpenUpload = (config?: any) => {
    setUploadConfig(config || null);
    setIsUploadOpen(true);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setCalculatorServiceId(serviceId);
    // Smooth scroll to calculator
    const calcElement = document.getElementById("pricing");
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#070A11] text-[#F8FAFC] relative overflow-x-hidden w-full">
      
      {/* 1. Sticky Frosted Glassmorphism Navbar */}
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      {/* 2. Flagship Interactive 3D Hero Section */}
      <Hero3D onOpenUpload={() => handleOpenUpload()} />

      {/* 3. Sub-Pixel Dual-Layer Before/After Slider */}
      <BeforeAfterSlider />

      {/* 4. 6 Core Services 3D Tilt Cards Grid */}
      <Services3D 
        onSelectService={handleSelectServiceFromCard}
        onOpenUpload={() => handleOpenUpload()}
      />

      {/* 5. Dynamic Real-Time Pricing Estimator */}
      <PricingCalculator 
        initialServiceId={calculatorServiceId}
        onOpenUpload={(config) => handleOpenUpload(config)}
      />

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
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => handleOpenUpload()}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-3d-glow hover:scale-105 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
          <span>Upload 5 Free</span>
        </button>

        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </aside>

    </main>
  );
}
