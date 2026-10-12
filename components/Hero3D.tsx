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
  Video,
  Zap
} from "lucide-react";

interface Hero3DProps {
  onOpenUpload: () => void;
}

export default function Hero3D({ onOpenUpload }: Hero3DProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageMode, setStageMode] = useState<"layers" | "composite" | "video">("layers");
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const exploded = stageMode === "layers";

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse coordinate motion values for spring-physics 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid perspective tilt
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse values into 3D rotations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-22, 22]);

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
      className="relative min-h-[90vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-50/70 mesh-grid"
    >
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 2026 Enterprise Studio Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Micro Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cyan-200 text-cyan-800 text-xs font-semibold shadow-sm hover:shadow-md hover:border-cyan-300 transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
              <span>Next-Gen 3D Studio Architecture</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-mono">100% Hand-Crafted</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]"
            >
              Precision <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
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
              className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Hand-crafted vector paths, editorial retouching, and apparel ghost mannequin by <span className="text-slate-900 font-bold">180+ master craftsmen</span> in Dhaka HQ. Sub-pixel precision with guaranteed overnight SLAs and zero AI artifacts.
            </motion.p>

            {/* Trust Pill Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-700 font-medium"
            >
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow-md hover:border-cyan-300 hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span className="font-semibold">$0.25 Starting Clipping Path</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">12h Turnaround SLA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 hover:-translate-y-0.5 transition-all">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold">Strict Bilateral NDA</span>
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
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-cyan-500/25 hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <UploadCloud className="w-5 h-5" />
                <span>Start Free Trial (5 Images Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#comparison"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-400 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-cyan-600" />
                <span>Explore Live Demo</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Flagship 3D Mouse Parallax Layer Breakdown */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* View Mode Switcher Toggle */}
            <div className="mb-4 inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono shadow-sm z-20">
              <button
                onClick={() => setStageMode("layers")}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  stageMode === "layers"
                    ? "bg-white text-cyan-800 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-600" />
                <span>3D Depth Layers</span>
              </button>
              <button
                onClick={() => setStageMode("composite")}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  stageMode === "composite"
                    ? "bg-white text-cyan-800 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Merged Composite</span>
              </button>
              <button
                onClick={() => setStageMode("video")}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  stageMode === "video"
                    ? "bg-white text-cyan-800 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Video className="w-3.5 h-3.5 text-cyan-600" />
                <span>Running Motion Reel</span>
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

                {/* MODE 3: FULL RUNNING VIDEO REEL IN 3D STAGE */}
                {stageMode === "video" && (
                  <motion.div
                    style={{
                      transform: "translateZ(30px)",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-0 rounded-3xl bg-slate-950 border-2 border-cyan-400 shadow-2xl overflow-hidden flex flex-col justify-between"
                  >
                    <video
                      src="/videos/nba.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

                    <div className="relative z-10 p-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        RUNNING MOTION REEL
                      </span>
                      <span className="bg-cyan-500 text-black px-2 py-0.5 rounded font-bold text-[10px]">
                        1080p 60fps
                      </span>
                    </div>

                    <div className="relative z-10 p-4 text-white">
                      <h4 className="font-bold text-sm">Picasa Commercial Video Reel</h4>
                      <p className="text-[11px] text-slate-300 font-mono">Sports & Post-Production Motion Desk</p>
                    </div>
                  </motion.div>
                )}

                {/* LAYER 1: Studio Background & Lighting Grid (Z: -60px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(-60px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    opacity: stageMode === "video" ? 0 : (exploded ? 0.95 : 1),
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col justify-between"
                >
                  {/* Subtle Studio Blueprint Grid */}
                  <div className="absolute inset-0 mesh-grid-dense opacity-70"></div>

                  {/* Ambient Background Running Video */}
                  <video
                    src="/videos/nba.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none mix-blend-multiply"
                  />
                  
                  {/* Studio Overhead Light Flare */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-cyan-400/15 blur-3xl rounded-full"></div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-800 border-b border-slate-200 pb-3 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600"></span>
                      LAYER 01: STUDIO LIGHTING & CANVASES
                    </span>
                    <span className="text-slate-500">Z: -60px</span>
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
                    opacity: stageMode === "video" ? 0 : (exploded ? 0.85 : 1),
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-6 rounded-2xl flex items-center justify-center pointer-events-none"
                >
                  <div className="w-72 h-20 bg-slate-900/15 blur-xl rounded-full translate-y-28 shadow-2xl"></div>
                  
                  {/* Floor Reflection Gradient */}
                  <div className="absolute bottom-6 w-64 h-12 bg-gradient-to-t from-cyan-600/10 to-transparent blur-md"></div>

                  {exploded && (
                    <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-white/95 border border-slate-200 text-[10px] font-mono text-slate-700 shadow-sm font-semibold">
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
                    opacity: stageMode === "video" ? 0 : (exploded ? 0.95 : 0),
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-4 rounded-2xl border-2 border-cyan-500/60 bg-cyan-50/40 pointer-events-none flex items-center justify-center overflow-hidden"
                >
                  {/* Glowing Vector Bezier Path Overlay Simulation */}
                  <svg className="w-full h-full p-4" viewBox="0 0 400 400" fill="none">
                    {/* SVG Vector Path */}
                    <path
                      d="M 120 280 C 80 250, 70 170, 110 130 C 140 100, 260 90, 310 130 C 350 160, 340 250, 300 280 C 260 310, 160 310, 120 280 Z"
                      stroke="#0284c7"
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
                          stroke="#0284c7"
                          strokeWidth="2"
                        />
                        <line
                          x1={pt.cx - 10}
                          y1={pt.cy}
                          x2={pt.cx + 10}
                          y2={pt.cy}
                          stroke="#0ea5e9"
                          strokeWidth="1"
                        />
                      </g>
                    ))}
                  </svg>

                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-white/95 border border-cyan-300 text-[10px] font-mono text-cyan-800 shadow-sm flex items-center gap-1.5 font-semibold">
                    <PenTool className="w-3 h-3 text-cyan-600" />
                    <span>LAYER 03: HAND-DRAWN BEZIER PATH (Z: +30px)</span>
                  </div>
                </motion.div>


                {/* LAYER 4: High-Resolution Retouched Model/Product (Z: +80px) */}
                <motion.div
                  style={{
                    transform: exploded ? "translateZ(80px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    opacity: stageMode === "video" ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute inset-8 rounded-2xl flex items-center justify-center pointer-events-none drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/wp-content/uploads/2021/01/cp_b.jpg"
                    alt="Retouched Master E-Commerce Product"
                    className="w-full h-full object-contain rounded-xl"
                  />

                  {exploded && (
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-white/95 border border-indigo-200 text-[10px] font-mono text-indigo-800 shadow-sm flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
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
                      className="absolute -top-4 -left-6 px-3 py-1.5 rounded-xl bg-white/95 border border-cyan-200 text-cyan-800 text-xs font-bold shadow-md hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <PenTool className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Hand-Drawn Clipping Path</span>
                    </motion.div>

                    {/* Badge 2: Right Middle - Skin Texture & Micro-Luster (Z: 110px) */}
                    <motion.div
                      style={{
                        transform: "translateZ(110px)",
                      }}
                      className="absolute top-1/2 -right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-white/95 border border-indigo-200 text-indigo-800 text-xs font-bold shadow-md hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Natural Surface Preserved</span>
                    </motion.div>

                    {/* Badge 3: Bottom Left - Natural Drop Shadow (Z: 40px) */}
                    <motion.div
                      style={{
                        transform: "translateZ(45px)",
                      }}
                      className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-md hidden sm:flex items-center gap-2 pointer-events-none"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Natural Contact Drop Shadow</span>
                    </motion.div>
                  </>
                )}

              </motion.div>
            </div>

            {/* Hint for interaction */}
            <p className="mt-4 text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-ping"></span>
              <span>Move mouse cursor across card to explore 3D depth and parallax separation</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
