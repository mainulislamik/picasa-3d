"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import UploadModal from "@/components/UploadModal";
import { 
  Sparkles, 
  Camera, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  CheckCircle2, 
  ZoomIn, 
  Maximize2 
} from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<"All" | "Fashion" | "Jewelry" | "Products" | "Automotive">("All");

  const SHOWCASE_ITEMS = [
    {
      id: "sh-1",
      title: "Luxury Leather Sneaker",
      industry: "Products",
      technique: "Sub-pixel Pen Vector Path & Drop Shadow",
      stats: "0.5px Anchor Accuracy • #FFFFFF Canvas",
      beforeImg: "/wp-content/uploads/2021/01/cp_a.jpg",
      afterImg: "/wp-content/uploads/2021/01/cp_b.jpg",
      description: "Complex tread pattern, lace eyelets, and synthetic mesh isolated with surgical hand-drawn bezier curves."
    },
    {
      id: "sh-2",
      title: "High-Fashion Invisible Mannequin",
      industry: "Fashion",
      technique: "3D Hollow Garment Neck Joint & Drape",
      stats: "Inner Collar Stitching • Symmetrical Hem",
      beforeImg: "/wp-content/uploads/2022/05/ghost-mannequin_A.jpg",
      afterImg: "/wp-content/uploads/2022/05/ghost-mannequin_B.jpg",
      description: "Combined front and interior collar shots to generate natural depth, hollow neck drape, and realistic cavity shading."
    },
    {
      id: "sh-3",
      title: "Solitaire Diamond & Platinum Ring",
      industry: "Jewelry",
      technique: "16-Bit Frequency Separation & Facet Sparkle",
      stats: "Zero Micro-Dust • Metal Luster Preserved",
      beforeImg: "/wp-content/uploads/2022/06/Jewelry-Retouching-befor.jpg",
      afterImg: "/wp-content/uploads/2022/06/Jewelry-Retouching-after.jpg",
      description: "Porous casting marks and workbench abrasions polished away without softening facet bevels or stone transparency."
    },
    {
      id: "sh-4",
      title: "Cosmetics & Perfume Packaging",
      industry: "Products",
      technique: "Glass Transparency Mask & Specular Glare",
      stats: "Refraction Retained • Pure Vector Clipping",
      beforeImg: "/wp-content/uploads/2021/01/cp_a.jpg",
      afterImg: "/wp-content/uploads/2021/01/cp_b.jpg",
      description: "Fine frosted glass perfume flacon with compound fluid refraction and studio shadow gradient reconstruction."
    },
    {
      id: "sh-5",
      title: "Automotive Alloy Wheel & Brake Caliper",
      industry: "Automotive",
      technique: "Metallic Bevel Reflection Polish & Multi-Path",
      stats: "Brake Rotor Radial Polish • Caliper Isolation",
      beforeImg: "/wp-content/uploads/2022/06/Jewelry-Retouching-befor.jpg",
      afterImg: "/wp-content/uploads/2022/06/Jewelry-Retouching-after.jpg",
      description: "Aggressive industrial brake dust and tire glare eliminated to produce editorial hypercar catalog visuals."
    },
    {
      id: "sh-6",
      title: "Silk Evening Gown Drape",
      industry: "Fashion",
      technique: "Fabric Shading & Color Harmonic Alignment",
      stats: "Delta-E < 1 • Crease Softening",
      beforeImg: "/wp-content/uploads/2022/05/ghost-mannequin_A.jpg",
      afterImg: "/wp-content/uploads/2022/05/ghost-mannequin_B.jpg",
      description: "Dynamic wrinkle harmony retaining tactile weave feel while presenting high-end runway ready drape symmetry."
    }
  ];

  const filteredItems = activeIndustry === "All"
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.industry === activeIndustry);

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar onOpenUpload={() => setModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE PRODUCTION SHOWROOM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display mb-4">
            Master Craftsmanship, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              Pixel by Pixel
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Test and inspect our hand-drawn vector paths, invisible mannequin joints, and 16-bit beauty passes up to 400% zoom.
          </p>
        </section>

        {/* Flagship Interactive Before/After Splitter Component */}
        <BeforeAfterSlider />

        {/* Category Filter Tabs & Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">
                Client Project Archives
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Filter by industry segment to evaluate relevant post-production techniques.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(["All", "Fashion", "Jewelry", "Products", "Automotive"] as const).map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeIndustry === ind
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-3d-glow"
                      : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 uppercase">
                      {item.industry}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-mono mb-4">
                    {item.technique}
                  </p>

                  {/* Dual Thumb Preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl overflow-hidden bg-black/40 p-2 border border-white/5">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={item.beforeImg}
                        alt="Before"
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute bottom-1 left-1 bg-black/70 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded text-slate-300">
                        RAW / Input
                      </span>
                    </div>

                    <div className="relative aspect-square rounded-lg overflow-hidden border border-cyan-500/30">
                      <Image
                        src={item.afterImg}
                        alt="After"
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute bottom-1 right-1 bg-cyan-950/80 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded text-cyan-300">
                        Master QC
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed 3-Tier QC
                  </span>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    <span>Test My Files</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NDA Security Callout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-3xl p-8 bg-slate-900/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Have unreleased product lines or embargoed campaign assets?
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  We sign bilateral NDAs before accessing your asset drive, ensuring strict embargo confidentiality.
                </p>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs shrink-0 transition-colors"
            >
              Request Custom NDA & Pilot
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
