"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services3D from "@/components/Services3D";
import EnterpriseStandardsChecker from "@/components/EnterpriseStandardsChecker";
import UploadModal from "@/components/UploadModal";
import { 
  Sparkles, 
  Scissors, 
  Shirt, 
  Gem, 
  ShoppingBag, 
  Box, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<any>(null);

  const handleOpenUpload = (config?: any) => {
    setModalConfig(config || null);
    setModalOpen(true);
  };

  const DETAILED_SPECS = [
    {
      id: "clipping",
      title: "Clipping Path & Multi-Paths",
      category: "Foundation & Isolation",
      leadText: "100% Hand-Drawn Vector Bezier Curves with Zero Edge Halo",
      icon: Scissors,
      color: "from-rose-600 to-red-600",
      stats: { accuracy: "0.5px", capacity: "15,000/day", formats: "PSD, EPS, TIFF" },
      body: "Our clipping paths are crafted by senior craftsmen zooming in at 300% to 500% magnification. We never use rough automated AI edge detection that destroys fine leather grain or organic silhouettes. Every curve is composed of smooth, minimal anchor points for effortless downstream prepress manipulation.",
      deliverables: [
        "Sub-pixel Pen-tool clipping paths embedded in PSD/TIFF",
        "Multi-path separation for localized color manipulation",
        "Compound clipping paths for intricate wicker, lace, and bicycle spokes",
        "Alpha channel transparency masks ready for instant composition"
      ]
    },
    {
      id: "ghost-mannequin",
      title: "Ghost Mannequin & Apparel Symmetry",
      category: "Fashion & Apparel",
      leadText: "3D Hollow Effect with Anatomical Drape & Collar Depth",
      icon: Shirt,
      color: "from-violet-500 to-purple-600",
      stats: { accuracy: "3D Cavity", capacity: "8,000/day", formats: "RGB/CMYK PSD" },
      body: "We blend the front garment shot with secondary inner collar, lining, and waistband photographs to produce a photorealistic 3D invisible mannequin effect. Structural wrinkles are softened while retaining tactile fabric textures.",
      deliverables: [
        "Seamless neck-joint, collar tag & inner lining stitching",
        "Left/right symmetrical drape and hem alignment",
        "Realistic drop shadows cast inside the inner collar cavity",
        "Texture preservation across wool, silk, denim, and synthetic knits"
      ]
    },
    {
      id: "high-end-retouching",
      title: "High-End Retouching & Metals",
      category: "Editorial & Luxury",
      leadText: "Non-Destructive Frequency Separation & Specular Micro-Polishing",
      icon: Gem,
      color: "from-amber-500 to-orange-600",
      stats: { accuracy: "16-Bit Pro", capacity: "5,000/day", formats: "Layered 16-bit PSD" },
      body: "For fine jewelry, timepieces, luxury leather, and beauty portraits. We separate high-frequency skin pores and metallic bevels from low-frequency color gradients. Diamonds receive facet-by-facet micro-refraction cleanup, eliminating studio dust and scratches without looking plastic.",
      deliverables: [
        "Frequency separation with complete skin texture and pore integrity",
        "Gemstone fire, facet reflection, and metallic bevel polishing",
        "Fine flyaway hair eradication and hairline micro-contouring",
        "Timepiece crystal glare suppression and dial alignment"
      ]
    },
    {
      id: "ecommerce-automation",
      title: "E-Commerce Batch Automation",
      category: "High-Volume Catalog",
      leadText: "Marketplace-Compliant Formatting (Amazon, Farfetch, Shopify)",
      icon: ShoppingBag,
      color: "from-emerald-500 to-teal-600",
      stats: { accuracy: "100% Compliant", capacity: "25,000/day", formats: "WebP, JPG, PNG" },
      body: "Standardize thousands of product images per catalog run. We align aspect ratios, apply consistent 85% product bounding boxes, center items horizontally, and add natural contact drop shadows or pure #FFFFFF backgrounds.",
      deliverables: [
        "Exact 1:1, 4:5, or 3:4 aspect ratio normalization with smart cropping",
        "Consistent margin padding and horizontal product alignment",
        "Pure #FFFFFF studio backdrop or transparent alpha",
        "Lossless WebP/sRGB compression for sub-second mobile page loads"
      ]
    },
    {
      id: "cgi-render-cleanup",
      title: "3D/CGI Render Cleanup & Color",
      category: "CGI & CAD Hybrid",
      leadText: "Photorealistic Beauty Passes, Artifact Suppression & Pantone Matching",
      icon: Box,
      color: "from-blue-500 to-indigo-600",
      stats: { accuracy: "Delta-E < 1", capacity: "4,000/day", formats: "EXR, TIFF, PSD" },
      body: "Bridge the gap between sterile 3D CAD renders and lively commercial photography. We suppress ray-tracing noise, blend texture seams, polish specular reflections, and digitally match precise Pantone or brand hex swatches.",
      deliverables: [
        "Ray-tracing firefly artifact and grain noise elimination",
        "Surface imperfection cleanup and CAD polygon seam smoothing",
        "Delta-E < 1 color accuracy against physical color swatch standards",
        "Depth of field (Z-depth) integration and atmospheric grading"
      ]
    },
    {
      id: "vector-conversion",
      title: "Vector Conversion & Brand Assets",
      category: "Vector Graphics",
      leadText: "Infinite-Resolution Manual Vectorization for Print & Die-Cuts",
      icon: PenTool,
      color: "from-pink-500 to-rose-600",
      stats: { accuracy: "Mathematical", capacity: "3,500/day", formats: "AI, EPS, SVG, PDF" },
      body: "Convert raster sketches, vintage logos, and technical engineering schematics into resolution-independent vector illustrations. Every bezier curve is plotted manually to avoid node bloat and jagged curves.",
      deliverables: [
        "Manual node optimization with zero redundant anchor bloat",
        "Pantone spot-color separation ready for offset and flexo printing",
        "Packaging die-line vectorization with fold and bleed margins",
        "Ultra-crisp SVG files optimized for high-density mobile screens"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-rose-600 selection:text-white">
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      <main className="flex-1 pt-28 pb-20">
        {/* Page Hero Header */}
        <section className="relative px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>ENTERPRISE SERVICE CATALOG • 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-display mb-6">
            Precision Post-Production <br />
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 bg-clip-text text-transparent">
              Engineered for Global Brands
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From microscopic jewelry frequency separation to 25,000-image daily e-commerce catalog turnaround,
            Picasa delivers hand-crafted perfection with Dhaka HQ speed and enterprise SLA guarantees.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenUpload()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-700 text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <span>Test 5 Images Free</span>
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-sm hover:scale-105 transition-all"
            >
              Explore Pricing & SLA
            </Link>
          </div>
        </section>

        {/* 3D Tilt Cards Interactive Grid */}
        <Services3D 
          onSelectService={(srvId) => handleOpenUpload({ selectedServices: [srvId] })} 
          onOpenUpload={() => handleOpenUpload()}
        />

        {/* Deep Dive Detailed Sections */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-24 space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Technical Specifications & In-Depth Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every service includes rigorous three-tier QC before client delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_SPECS.map((spec) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={spec.id}
                  id={spec.id}
                  className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${spec.color} p-[1px]`}>
                          <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                            <IconComp className="w-6 h-6 text-slate-900" />
                          </div>
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 font-bold block">
                            {spec.category}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 font-display">
                            {spec.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-800 mb-3">
                      {spec.leadText}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {spec.body}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Key Deliverables:
                      </span>
                      {spec.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-4 text-[11px] font-mono text-slate-500">
                      <div>
                        <span className="text-slate-400 block text-[10px]">TOLERANCE</span>
                        <span className="text-slate-900 font-bold">{spec.stats.accuracy}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">CAPACITY</span>
                        <span className="text-slate-900 font-bold">{spec.stats.capacity}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenUpload({ selectedServices: [spec.id] })}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-105"
                    >
                      <span>Order This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enterprise Marketplace Acceptance Diagnostic Tool */}
        <div className="mt-20">
          <EnterpriseStandardsChecker />
        </div>

        {/* Global SLA Guarantee Bar */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-20">
          <div className="rounded-3xl p-8 bg-white border-2 border-rose-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-rose-500 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Guaranteed 3 to 24-Hour Express Turnaround
                </h3>
                <p className="text-xs text-slate-600 max-w-xl mt-1">
                  Our Dhaka HQ operates 3 rotating 8-hour shifts around the clock. Your production never sleeps,
                  even over global holidays.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenUpload()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-xs shrink-0 hover:from-rose-500 hover:to-red-600 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Start Free Pilot (5 Images)
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <UploadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialConfig={modalConfig}
      />
    </div>
  );
}
