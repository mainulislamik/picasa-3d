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
      beforeImg: "/wp-content/uploads/2021/01/cp_b.jpg",
      afterImg: "/wp-content/uploads/2021/01/cp_a.jpg",
      description: "Complex tread pattern, lace eyelets, and synthetic mesh isolated with surgical hand-drawn bezier curves."
    },
    {
      id: "sh-2",
      title: "High-Fashion Invisible Mannequin",
      industry: "Fashion",
      technique: "3D Hollow Garment Neck Joint & Drape",
      stats: "Inner Collar Stitching • Symmetrical Hem",
      beforeImg: "/wp-content/uploads/2021/01/neck_a.jpg",
      afterImg: "/wp-content/uploads/2021/01/neck_b.jpg",
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
      title: "Apparel Background Removal & Isolation",
      industry: "Products",
      technique: "Complex Fiber & Translucent Mesh Extraction",
      stats: "Zero Color Spill • Alpha Channel Cutout",
      beforeImg: "/wp-content/uploads/2022/05/ghost-mannequin_B.jpg",
      afterImg: "/wp-content/uploads/2022/05/ghost-mannequin_A.jpg",
      description: "High-volume catalog extraction eliminating studio gray backgrounds while preserving intricate textile silhouettes."
    },
    {
      id: "sh-5",
      title: "Editorial Fashion Model & Lookbook",
      industry: "Fashion",
      technique: "Skin Texture Preservation & Crease Cleanup",
      stats: "Dermal Pore Integrity • Magazine Grade",
      beforeImg: "/wp-content/uploads/2021/01/lookbook_1_b.jpg",
      afterImg: "/wp-content/uploads/2021/01/lookbook_1_a.jpg",
      description: "High-fashion lookbook retouch preserving natural skin tones while polishing fabric drape and lighting balance."
    },
    {
      id: "sh-6",
      title: "Mirror Reflection & Floor Depth Shadow",
      industry: "Products",
      technique: "Progressive Penumbra & Specular Reflection",
      stats: "Natural Studio Floor Ray Casting",
      beforeImg: "/wp-content/uploads/2021/01/reflection_4_a.jpg",
      afterImg: "/wp-content/uploads/2021/01/reflection_4_b.jpg",
      description: "Ground-plane mirror reflection and diffuse contact shadows constructed to ground floating studio product photography."
    },
    {
      id: "sh-7",
      title: "Infinite Vector Logo & Redraw",
      industry: "Automotive",
      technique: "Precision Bezier Vectorization (SVG/AI)",
      stats: "Lossless Scaling • CMYK / Spot Ready",
      beforeImg: "/wp-content/uploads/2021/01/vector_a.jpg",
      afterImg: "/wp-content/uploads/2021/01/vector_b.jpg",
      description: "Pixelated low-resolution raster graphic reconstructed into mathematically pure vectors for large-format applications."
    }
  ];

  const filteredItems = activeIndustry === "All"
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.industry === activeIndustry);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar onOpenUpload={() => setModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>INTERACTIVE PRODUCTION SHOWROOM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display mb-4">
            Master Craftsmanship, <br />
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Pixel by Pixel
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Test and inspect our hand-drawn vector paths, invisible mannequin joints, and 16-bit beauty passes up to 400% zoom.
          </p>
        </section>

        {/* Flagship Interactive Before/After Splitter Component */}
        <BeforeAfterSlider />

        {/* Category Filter Tabs & Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Client Project Archives
              </h2>
              <p className="text-xs text-slate-600 mt-1">
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
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md scale-105"
                      : "bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-cyan-300 hover:shadow-sm"
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
                className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 uppercase">
                      {item.industry}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-indigo-900 font-mono mb-4">
                    {item.technique}
                  </p>

                  {/* Dual Thumb Preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4 rounded-xl overflow-hidden bg-slate-100 p-2 border border-slate-200">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 bg-white">
                      <Image
                        src={item.beforeImg}
                        alt="Before"
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute bottom-1 left-1 bg-white/90 border border-slate-200 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded text-slate-700 shadow-sm">
                        RAW / Input
                      </span>
                    </div>

                    <div className="relative aspect-square rounded-lg overflow-hidden border border-cyan-300 bg-white">
                      <Image
                        src={item.afterImg}
                        alt="After"
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute bottom-1 right-1 bg-cyan-50 border border-cyan-200 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded text-cyan-800 shadow-sm">
                        Master QC
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed 3-Tier QC
                  </span>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1 hover:translate-x-1 transition-all"
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
          <div className="rounded-3xl p-8 bg-white border-2 border-cyan-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-cyan-500 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Have unreleased product lines or embargoed campaign assets?
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  We sign bilateral NDAs before accessing your asset drive, ensuring strict embargo confidentiality.
                </p>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-cyan-600 hover:text-white border border-slate-200 text-slate-800 font-bold text-xs shrink-0 transition-all hover:scale-105"
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
