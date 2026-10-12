"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  SlidersHorizontal, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  PenTool,
  Eye,
  Crosshair,
  Sparkles,
  CheckCircle2,
  Maximize2
} from "lucide-react";
import { COMPARISON_CATEGORIES } from "@/lib/constants";

export default function StudioInspectorLab() {
  const [activeCategory, setActiveCategory] = useState(COMPARISON_CATEGORIES[0].id);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomMode, setZoomMode] = useState(false);
  const [showBezierPath, setShowBezierPath] = useState(false);
  const [channelMode, setChannelMode] = useState<"rgb" | "red" | "green" | "blue">("rgb");
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = COMPARISON_CATEGORIES.find((c) => c.id === activeCategory) || COMPARISON_CATEGORIES[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoomMode) return;
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (zoomMode && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setZoomPos({ x, y });
      return;
    }

    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  useEffect(() => {
    const handlePointerUp = () => setIsDragging(false);
    window.addEventListener("pointerup", handlePointerUp);
    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, []);

  const getChannelFilter = () => {
    switch (channelMode) {
      case "red":
        return "grayscale(100%) sepia(100%) hue-rotate(310deg) saturate(300%) contrast(150%)";
      case "green":
        return "grayscale(100%) sepia(100%) hue-rotate(60deg) saturate(300%) contrast(150%)";
      case "blue":
        return "grayscale(100%) sepia(100%) hue-rotate(180deg) saturate(300%) contrast(150%)";
      default:
        return "none";
    }
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200 relative overflow-hidden" id="inspector-lab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-600" />
            <span>Interactive Sub-Pixel QC Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Studio Inspector Lab
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Examine our 100% hand-drawn vector pen tool paths, RGB pre-press channel separation, and sub-pixel edge smoothness under 2.4x magnification.
          </p>

          {/* Service Category Switcher Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-fit mx-auto">
            {COMPARISON_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-white text-cyan-800 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Inspector Desk Card */}
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-white max-w-5xl mx-auto">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-bold text-slate-200">{currentItem.title}</span>
              <span className="text-slate-400 hidden sm:inline">— {currentItem.subtitle}</span>
            </div>

            {/* Micro Inspection Controls */}
            <div className="flex items-center gap-2">
              {/* Channel Splitter */}
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                {(["rgb", "red", "green", "blue"] as const).map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setChannelMode(ch)}
                    className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                      channelMode === ch
                        ? "bg-cyan-500 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>

              {/* Vector Bezier Toggle */}
              <button
                onClick={() => setShowBezierPath(!showBezierPath)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors ${
                  showBezierPath
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                }`}
              >
                <PenTool className="w-3 h-3" />
                <span className="hidden sm:inline">Bezier Path</span>
              </button>

              {/* 2.4x Loupe Toggle */}
              <button
                onClick={() => setZoomMode(!zoomMode)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors ${
                  zoomMode
                    ? "bg-amber-600 border-amber-500 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                }`}
              >
                {zoomMode ? <ZoomOut className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
                <span className="hidden sm:inline">{zoomMode ? "1x Normal" : "2.4x Loupe"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Inspection Canvas */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none touch-none bg-slate-950 border border-slate-800 ${
              zoomMode ? "cursor-crosshair" : "cursor-ew-resize"
            }`}
          >
            {/* After Image (Full Canvas Baseline) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                filter: getChannelFilter(),
                transform: zoomMode ? "scale(2.4)" : "scale(1)",
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transition: isDragging ? "none" : "transform 0.15s ease-out"
              }}
            >
              <img
                src={currentItem.afterImage}
                alt="After"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>

            {/* Before Image (Revealed via Hardware clip-path) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
                filter: getChannelFilter(),
                transform: zoomMode ? "scale(2.4)" : "scale(1)",
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transition: isDragging ? "none" : "transform 0.15s ease-out"
              }}
            >
              <img
                src={currentItem.beforeImage}
                alt="Before"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>

            {/* SVG Vector Bezier Path Overlay Simulation */}
            {showBezierPath && (
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                style={{
                  transform: zoomMode ? "scale(2.4)" : "scale(1)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                }}
              >
                <path
                  d="M 120 280 C 180 120, 320 80, 520 110 C 720 140, 840 260, 820 420 C 800 540, 680 580, 480 560 C 280 540, 100 420, 120 280 Z"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                {/* Simulated Anchor Nodes */}
                {[[120, 280], [520, 110], [820, 420], [480, 560]].map(([cx, cy], i) => (
                  <g key={i}>
                    <rect x={cx - 3.5} y={cy - 3.5} width="7" height="7" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />
                    <circle cx={cx} cy={cy} r="1.5" fill="#06b6d4" />
                  </g>
                ))}
              </svg>
            )}

            {/* Splitter Divider Handle (When not in zoom mode) */}
            {!zoomMode && (
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] -translate-x-1/2"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 border-2 border-white shadow-xl flex items-center justify-center text-white">
                  <SlidersHorizontal className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>
            )}

            {/* Canvas Badges */}
            <div className="absolute bottom-4 left-4 z-30 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
              ORIGINAL RAW (LEFT)
            </div>
            <div className="absolute bottom-4 right-4 z-30 px-3 py-1 rounded-full bg-cyan-900/80 backdrop-blur-md text-[10px] font-mono text-cyan-200 border border-cyan-400/30">
              PICASA RETOUCH (RIGHT)
            </div>
          </div>

          {/* Bottom Meta Bar & Tags */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <p className="text-slate-300 max-w-xl text-xs leading-relaxed">
              {currentItem.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentItem.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-slate-800 text-[10px] font-mono text-cyan-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
