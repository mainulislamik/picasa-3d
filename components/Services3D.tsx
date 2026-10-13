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

    // Subtle 3D tilt angles (max 10 degrees)
    setRotateX(-y / 18);
    setRotateY(x / 18);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const renderIcon = () => {
    switch (service.icon) {
      case "Scissors":
        return <Scissors className="w-6 h-6 text-rose-600" />;
      case "Shirt":
        return <Shirt className="w-6 h-6 text-sky-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-violet-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case "Box":
        return <Box className="w-6 h-6 text-amber-600" />;
      case "PenTool":
        return <PenTool className="w-6 h-6 text-pink-600" />;
      default:
        return <Layers className="w-6 h-6 text-rose-600" />;
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
        transition: isHovered ? "none" : "transform 0.4s ease-out, box-shadow 0.3s ease",
      }}
      className={`group relative rounded-3xl p-7 bg-white border border-slate-200/90 hover:border-rose-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 ${
        isHovered ? "shadow-card-hover" : ""
      }`}
    >
      {/* Subtle Glow Hover Flare */}
      <div 
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-rose-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      ></div>

      <div style={{ transform: "translateZ(30px)" }}>
        {/* Top Header: Icon & Turnaround Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-50 group-hover:border-rose-200 transition-all duration-300">
            {renderIcon()}
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-rose-600" />
              <span>{service.turnaround}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-mono font-bold text-rose-800">
              {service.badge}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors tracking-tight mb-2.5">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Feature Checkpoints */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Starting Price & Configure CTA */}
      <div 
        className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2"
        style={{ transform: "translateZ(25px)" }}
      >
        <div>
          <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">STARTING RATE</span>
          <span className="text-base font-extrabold text-slate-900">
            {service.startingPrice}
            <span className="text-xs font-normal text-slate-500"> / image</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSelect}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1 hover:scale-105 active:scale-95"
          >
            <span>Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onOpenUpload}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-600 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
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
    <section id="services" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-rose-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-rose-600" />
            <span>ENTERPRISE SERVICE SPECTRUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            High-Velocity Studio Capabilities.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
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
        <div className="mt-16 rounded-3xl p-6 sm:p-8 bg-white border border-rose-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
              Custom High-Volume API & Automated S3 Hot-Folder Ingest
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Need dedicated retouchers, custom metadata tagging, or daily 5,000+ SKU webhook ingestion?
            </p>
          </div>

          <button
            onClick={onOpenUpload}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <span>Book Enterprise Consult</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
