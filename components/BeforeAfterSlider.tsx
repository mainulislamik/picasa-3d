"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { 
  SlidersHorizontal, 
  ZoomIn, 
  ZoomOut, 
  Sparkles, 
  Check, 
  Scissors, 
  Shirt, 
  Gem, 
  Palette,
  Crosshair,
  Maximize2,
  RotateCcw
} from "lucide-react";
import { COMPARISON_CATEGORIES } from "@/lib/constants";

export default function BeforeAfterSlider() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomMode, setZoomMode] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });

  const containerRef = useRef<HTMLDivElement>(null);
  const currentCategory = COMPARISON_CATEGORIES[activeCategoryIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomMode && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomCoords({ x, y });
    }
  };

  return (
    <section id="comparison" className="py-24 bg-[#070A11] relative overflow-hidden">
      {/* Ambient Radial Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4 shadow-3d-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SUB-PIXEL QUALITY BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Micro-Precision Inspection.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Drag the splitter bar to inspect our 100% hand-crafted clipping paths, natural skin frequency separation, and apparel symmetry against unedited studio RAWs.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {COMPARISON_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategoryIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                activeCategoryIndex === idx
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-3d-glow scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/10"
              }`}
            >
              {idx === 0 && <Scissors className="w-3.5 h-3.5" />}
              {idx === 1 && <Shirt className="w-3.5 h-3.5" />}
              {idx === 2 && <Gem className="w-3.5 h-3.5" />}
              {idx === 3 && <Palette className="w-3.5 h-3.5" />}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* 3D Interactive Comparison Stage Card */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          
          {/* Top Stage Control Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10 text-xs font-mono">
            <div>
              <span className="text-slate-400">ACTIVE BENCHMARK: </span>
              <span className="text-cyan-400 font-bold">{currentCategory.title}</span>
              <span className="text-slate-500 hidden sm:inline"> — {currentCategory.subtitle}</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Reset to 50% */}
              <button
                onClick={() => setSliderPosition(50)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                title="Reset slider to center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>50/50</span>
              </button>

              {/* 400% Zoom / Sub-Pixel Loupe Mode */}
              <button
                onClick={() => setZoomMode(!zoomMode)}
                className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 font-bold transition-all ${
                  zoomMode
                    ? "bg-violet-600 text-white border-violet-400 shadow-violet-glow"
                    : "bg-slate-900 border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {zoomMode ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{zoomMode ? "Exit 400% Detail" : "400% Zoom Inspect"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Dual-Image Container */}
          <div
            ref={containerRef}
            onMouseMove={handleContainerMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className={`relative w-full h-[380px] sm:h-[540px] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-950 border border-white/10 ${
              zoomMode ? "cursor-crosshair" : ""
            }`}
          >
            {/* "AFTER" (Master Retouched Result) - Background Layer */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentCategory.afterImage}
                alt="Picasa Retouched Master"
                className="w-full h-full object-contain pointer-events-none transition-transform duration-100"
                style={
                  zoomMode
                    ? {
                        transform: "scale(2.5)",
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                      }
                    : {}
                }
              />
            </div>

            {/* "BEFORE" (Original RAW Shot) - Top Layer with CSS polygon clip-path */}
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center p-4 bg-slate-950/20"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentCategory.beforeImage}
                alt="Original Unedited RAW"
                className="w-full h-full object-contain pointer-events-none transition-transform duration-100"
                style={
                  zoomMode
                    ? {
                        transform: "scale(2.5)",
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                      }
                    : {}
                }
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-white/20 text-[11px] font-mono font-bold text-slate-300 backdrop-blur-md shadow-md">
                ORIGINAL RAW
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-[11px] font-mono font-bold text-cyan-300 backdrop-blur-md shadow-3d-glow">
                PICASA MASTER
              </span>
            </div>

            {/* Center Splitter Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none transition-colors"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Glowing vertical line */}
              <div className="w-[2px] h-full bg-gradient-to-b from-cyan-400 via-sky-300 to-violet-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>

              {/* Center Draggable Circular Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-3d-glow flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Zoom Inspection Loupe Overlay Coordinate Tracker */}
            {zoomMode && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-violet-950/90 border border-violet-500/60 text-[11px] font-mono text-violet-200 pointer-events-none shadow-violet-glow flex items-center gap-2">
                <Crosshair className="w-3.5 h-3.5 text-violet-400" />
                <span>INSPECTING COORDS: X: {Math.round(zoomCoords.x)}% | Y: {Math.round(zoomCoords.y)}%</span>
              </div>
            )}

          </div>

          {/* Description & Sub-Pixel Precision Tags */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {currentCategory.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {currentCategory.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-300"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
