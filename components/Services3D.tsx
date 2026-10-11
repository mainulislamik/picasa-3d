"use client";

import React, { useState } from "react";
import { 
  Scissors, 
  Shirt, 
  Sparkles, 
  ShoppingBag, 
  Box, 
  PenTool, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  Layers
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";

interface Services3DProps {
  onSelectService: (serviceId: string) => void;
  onOpenUpload: () => void;
}

// Interactive 3D Tilt Card Component
function ServiceTiltCard({ 
  service, 
  onSelect, 
  onOpenUpload 
}: { 
  service: ServiceItem; 
  onSelect: () => void;
  onOpenUpload: () => void;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt angles (max 12 degrees)
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const renderIcon = () => {
    switch (service.icon) {
      case "Scissors":
        return <Scissors className="w-6 h-6 text-cyan-400" />;
      case "Shirt":
        return <Shirt className="w-6 h-6 text-sky-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case "Box":
        return <Box className="w-6 h-6 text-amber-400" />;
      case "PenTool":
        return <PenTool className="w-6 h-6 text-pink-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "none" : "transform 0.5s ease-out",
      }}
      className={`group relative rounded-3xl p-7 bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-colors duration-300 backdrop-blur-xl flex flex-col justify-between shadow-2xl ${
        isHovered ? "shadow-3d-glow" : ""
      }`}
    >
      {/* Glow Hover Flare */}
      <div 
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      ></div>

      <div style={{ transform: "translateZ(30px)" }}>
        {/* Top Header: Icon & Turnaround Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-950/40 transition-all duration-300">
            {renderIcon()}
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>{service.turnaround}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-[10px] font-mono font-bold text-cyan-300">
              {service.badge}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2.5">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Feature Checkpoints */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Starting Price & Configure CTA */}
      <div 
        className="pt-4 border-t border-white/10 flex items-center justify-between gap-2"
        style={{ transform: "translateZ(25px)" }}
      >
        <div>
          <span className="text-[10px] font-mono text-slate-400 block uppercase">STARTING RATE</span>
          <span className="text-base font-extrabold text-white">
            {service.startingPrice}
            <span className="text-xs font-normal text-slate-400"> / image</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSelect}
            className="px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1"
          >
            <span>Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onOpenUpload}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-3d-glow"
          >
            Free Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services3D({ onSelectService, onOpenUpload }: Services3DProps) {
  return (
    <section id="services" className="py-24 bg-[#070A11] relative overflow-hidden">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4 shadow-3d-glow">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE SERVICE SPECTRUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Velocity Studio Capabilities.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Engineered for high-volume fashion retailers, luxury brands, and global advertising agencies processing thousands of SKUs weekly.
          </p>
        </div>

        {/* 6 Core Services 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceTiltCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService(service.id)}
              onOpenUpload={onOpenUpload}
            />
          ))}
        </div>

        {/* Enterprise Integration Footer Banner */}
        <div className="mt-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-[#0a1224] to-slate-900/90 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-3d-glow">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Custom High-Volume API & Automated S3 Hot-Folder Ingest
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Need dedicated retouchers, custom metadata tagging, or daily 5,000+ SKU webhook ingestion?
            </p>
          </div>

          <button
            onClick={onOpenUpload}
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-3d-glow shrink-0 transition-transform hover:scale-105"
          >
            <span>Book Enterprise Consult</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
