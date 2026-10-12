"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  PRODUCTION_PIPELINE_STEPS, 
  TRANSFER_PROTOCOLS, 
  PipelineStep 
} from "@/lib/constants";
import { 
  UploadCloud, 
  Sliders, 
  PenTool, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Lock, 
  Server, 
  FileCheck, 
  HardDrive, 
  Zap, 
  ChevronRight 
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function ProductionPipelineWorkflow() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PRODUCTION_PIPELINE_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "UploadCloud": return <UploadCloud className="w-5 h-5" />;
      case "Sliders": return <Sliders className="w-5 h-5" />;
      case "PenTool": return <PenTool className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "CheckCircle2": return <CheckCircle2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200" id="workflow">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-slate-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-4">
            <Zap className="w-3.5 h-3.5 text-rose-600" />
            <span>Industrial Post-Production Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The 5-Stage Picasa Production Engine
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From encrypted raw file ingestion to dual-monitor senior QC approval. Discover the exact 
            operational workflow that guarantees sub-pixel accuracy across 2,000+ daily catalog assets.
          </p>
        </div>

        {/* Interactive 5-Stage Stepper Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10 p-2 rounded-2xl bg-slate-100/80 border border-slate-200">
          {PRODUCTION_PIPELINE_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => {
                  soundFx.playSwitch();
                  setActiveStepIndex(idx);
                }}
                className={`relative p-3.5 rounded-xl text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? "bg-white text-slate-900 shadow-md border border-rose-200"
                    : "hover:bg-white/60 text-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? "bg-rose-600 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {step.duration}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm line-clamp-1">
                  {step.title.split("&")[0]}
                </div>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-rose-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold">
                  {currentStep.step} / 05
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  Target SLA: <strong className="text-white">{currentStep.duration}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentStep.title}
                </h3>
                <p className="text-rose-300/90 text-sm font-medium mt-1 font-mono">
                  {currentStep.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                  Technical Execution Parameters:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.technicalDetails.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Telemetry Box */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-300">LIVE STAGE MONITOR</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                  ACTIVE 24/5
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Dhaka HQ Active Stations:</span>
                  <span className="font-mono text-white font-bold">Stations D-01 to D-24</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Inspection Standard:</span>
                  <span className="font-mono text-white font-bold">500% Loupe Magnification</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Fringe Bleed Tolerance:</span>
                  <span className="font-mono text-rose-400 font-bold">&le; 0.5px Sub-Pixel</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Security Classification:</span>
                  <span className="font-mono text-white font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-rose-500" /> Air-Gapped / Bi-lateral NDA
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/free-test"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-600/30 group"
                >
                  <span>Test This Pipeline (3 Free Images)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Enterprise Ingestion Protocols Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block mb-1">
                Zero-Latency File Transfer Infrastructure
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Enterprise Cloud Ingestion Protocols
              </h3>
            </div>
            <Link
              href="/how-it-works"
              className="text-xs font-mono font-bold text-rose-600 hover:text-rose-700 hidden sm:flex items-center gap-1"
            >
              <span>View Protocol Specs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFER_PROTOCOLS.map((protocol, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white border border-slate-200 text-slate-700">
                      {protocol.type}
                    </span>
                    <span className="text-[10px] font-bold text-rose-600">
                      {protocol.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {protocol.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {protocol.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                  {protocol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}