"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  UploadCloud, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Eye, 
  Sliders, 
  PenTool, 
  Maximize2,
  Zap
} from "lucide-react";

interface Hero3DProps {
  onOpenUpload: () => void;
}

export default function Hero3D({ onOpenUpload }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [exploded, setExploded] = useState(true);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  // Mouse coordinate motion values for spring-physics 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid perspective tilt
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse values into 3D rotations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-24, 24]);

  // Dynamic translate offsets for mouse parallax
  const bgTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const bgTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);
  const fgTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const fgTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveLayer(null);
  };

  return (
    <section 
      id="hero-3d" 
      className="relative min-h-[92vh] pt-28 pb-20 flex items-center justify-center overflow-hidden mesh-grid"
    >
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 2026 Enterprise Studio Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* 2026 Micro Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-3d-glow"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Next-Gen 3D Studio Architecture</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-mono">100% Hand-Crafted</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]"
            >
              Precision <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                Post-Production
              </span>{" "}
              <br />
              at Enterprise Scale.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Hand-crafted vector paths, editorial retouching, and apparel ghost mannequin by <span className="text-white font-semibold">180+ master craftsmen</span> in Dhaka HQ. Sub-pixel precision with guaranteed overnight SLAs and zero AI artifacts.
            </motion.p>

            {/* Trust Pill Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 font-medium"
            >
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>$0.25 Starting Clipping Path</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-lg">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>12h Turnaround SLA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-violet-400" />
                <span>Strict Bilateral NDA</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenUpload}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-3d-glow hover:shadow-violet-glow hover:scale-[1.02] transition-all duration-300"
              >
                <UploadCloud className="w-5 h-5" />
                <span>Start Free Trial (5 Images Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#comparison"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Explore Live Demo</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Flagship 3D Mouse Parallax Layer Breakdown */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* View Mode Switcher Toggle */}
            <div className="mb-4 inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono shadow-glass-sm z-20">
              <button
                onClick={() => setExploded(true)}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  exploded
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-3d-glow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Exploded Depth View</span>
              </button>
              <button
                onClick={() => setExploded(false)}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  !exploded
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-3d-glow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Merged Composite</span>
              </button>
            </div>

            {/* 3D Perspective Stage Viewport */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[330px] sm:max-w-[460px] h-[400px] sm:h-[480px] perspective-1500 cursor-grab active:cursor-grabbing select-none"
            >
              {/* Interactive Spring-Rotated 3D Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-3xl transition-shadow duration-300"
              >

                {/* LAYER 1: Studio Background & Lighting Grid (Z: -60px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(-60px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    opacity: exploded ? 0.9 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#070a13] to-[#04060b] border border-cyan-500/20 shadow-2xl overflow-hidden p-6 flex flex-col justify-between"
                >
                  {/* Subtle Studio Blueprint Grid */}
                  <div className="absolute inset-0 mesh-grid-dense opacity-60"></div>
                  
                  {/* Studio Overhead Light Flare */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-cyan-400/20 blur-3xl rounded-full"></div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400/70 border-b border-cyan-500/20 pb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      LAYER 01: STUDIO LIGHTING & CANVASES
                    </span>
                    <span>Z: -60px</span>
                  </div>

                  <div className="relative z-10 text-[10px] font-mono text-slate-500 flex justify-between">
                    <span>GRID: 20x20px CALIBRATED</span>
                    <span>COLOR: P3 WIDE GAMUT</span>
                  </div>
                </motion.div>


                {/* LAYER 2: Cast Drop Shadow & Ambient Occlusion (Z: -20px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(-20px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    opacity: exploded ? 0.85 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-6 rounded-2xl flex items-center justify-center pointer-events-none"
                >
                  <div className="w-72 h-20 bg-black/85 blur-xl rounded-full translate-y-28 shadow-2xl"></div>
                  
                  {/* Floor Reflection Gradient */}
                  <div className="absolute bottom-6 w-64 h-12 bg-gradient-to-t from-cyan-900/10 to-transparent blur-md"></div>

                  {exploded && (
                    <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-300">
                      LAYER 02: NATURAL CONTACT SHADOW (Z: -20px)
                    </div>
                  )}
                </motion.div>


                {/* LAYER 3: Vector Wireframe Pen-Tool Clipping Path (Z: +30px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(30px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    opacity: exploded ? 0.95 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-4 rounded-2xl border-2 border-cyan-400/40 bg-cyan-950/15 pointer-events-none flex items-center justify-center overflow-hidden"
                >
                  {/* Glowing Vector Bezier Path Overlay Simulation */}
                  <svg className="w-full h-full p-4" viewBox="0 0 400 400" fill="none">
                    {/* SVG Vector Path */}
                    <path
                      d="M 120 280 C 80 250, 70 170, 110 130 C 140 100, 260 90, 310 130 C 350 160, 340 250, 300 280 C 260 310, 160 310, 120 280 Z"
                      stroke="#06B6D4"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />

                    {/* Bezier Tangent Anchor Nodes */}
                    {[
                      { cx: 120, cy: 280 },
                      { cx: 110, cy: 130 },
                      { cx: 310, cy: 130 },
                      { cx: 300, cy: 280 },
                      { cx: 210, cy: 95 },
                      { cx: 210, cy: 305 },
                    ].map((pt, i) => (
                      <g key={i}>
                        <rect
                          x={pt.cx - 4}
                          y={pt.cy - 4}
                          width="8"
                          height="8"
                          fill="#FFFFFF"
                          stroke="#06B6D4"
                          strokeWidth="2"
                        />
                        <line
                          x1={pt.cx - 10}
                          y1={pt.cy}
                          x2={pt.cx + 10}
                          y2={pt.cy}
                          stroke="#38BDF8"
                          strokeWidth="1"
                        />
                      </g>
                    ))}
                  </svg>

                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-cyan-950/90 border border-cyan-400/60 text-[10px] font-mono text-cyan-300 shadow-3d-glow flex items-center gap-1.5">
                    <PenTool className="w-3 h-3 text-cyan-400" />
                    <span>LAYER 03: HAND-DRAWN BEZIER PATH (Z: +30px)</span>
                  </div>
                </motion.div>


                {/* LAYER 4: High-Resolution Retouched Model/Product (Z: +80px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(80px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-8 rounded-2xl flex items-center justify-center pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wp-content/uploads/2021/01/cp_b.jpg"
                    alt="Retouched Master E-Commerce Product"
                    className="w-full h-full object-contain rounded-xl"
                  />

                  {exploded && (
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-violet-950/90 border border-violet-400/70 text-[10px] font-mono text-violet-200 shadow-violet-glow flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-violet-300" />
                      <span>LAYER 04: RETOUCHED MASTER (Z: +80px)</span>
                    </div>
                  )}
                </motion.div>


                {/* FLOATING 3D CALLOUT BADGES POINTING TO LAYERS */}
                {exploded && (
                  <>
                    {/* Badge 1: Top Left - Hand-Drawn Clipping Path (Z: 100px) */}
                    <motion.div
                      style={{
                        transform: "translateZ(105px)",
                      }}
                      className="absolute -top-4 -left-6 px-3 py-1.5 rounded-xl bg-[#0B1120]/95 border border-cyan-400/50 text-cyan-300 text-xs font-bold shadow-3d-glow hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <PenTool className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Hand-Drawn Clipping Path</span>
                    </motion.div>

                    {/* Badge 2: Right Middle - Skin Texture & Micro-Luster (Z: 110px) */}
                    <motion.div
                      style={{
                        transform: "translateZ(110px)",
                      }}
                      className="absolute top-1/2 -right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0B1120]/95 border border-violet-400/50 text-violet-300 text-xs font-bold shadow-violet-glow hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      <span>Natural Surface Preserved</span>
                    </motion.div>

                    {/* Badge 3: Bottom Left - Natural Drop Shadow (Z: 40px) */}
                    <motion.div
                      style={{
                        transform: "translateZ(45px)",
                      }}
                      className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#0B1120]/95 border border-emerald-400/50 text-emerald-300 text-xs font-bold shadow-glass-sm hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Natural Contact Drop Shadow</span>
                    </motion.div>
                  </>
                )}

              </motion.div>
            </div>

            {/* Hint for interaction */}
            <p className="mt-4 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Move mouse cursor across card to explore 3D depth and parallax separation</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
