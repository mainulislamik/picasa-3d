"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  Sliders, 
  ShieldCheck,
  FileText,
  Printer
} from "lucide-react";
import { 
  SERVICES_DATA, 
  COMPLEXITY_TIERS, 
  SLA_TIERS, 
  BULK_DISCOUNT_TIERS 
} from "@/lib/constants";
import { calculatePricingEstimate, formatCurrency } from "@/lib/utils";

interface PricingCalculatorProps {
  initialServiceId?: string;
  onOpenUpload: (config?: any) => void;
}

export default function PricingCalculator({ 
  initialServiceId = "clipping", 
  onOpenUpload 
}: PricingCalculatorProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [selectedComplexity, setSelectedComplexity] = useState("simple");
  const [volume, setVolume] = useState(150);
  const [selectedSla, setSelectedSla] = useState("standard_24h");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP">("USD");

  // Selected object references
  const currentService = useMemo(() => {
    return SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  }, [selectedServiceId]);

  const currentComplexity = useMemo(() => {
    return COMPLEXITY_TIERS.find((c) => c.id === selectedComplexity) || COMPLEXITY_TIERS[0];
  }, [selectedComplexity]);

  const currentSla = useMemo(() => {
    return SLA_TIERS.find((s) => s.id === selectedSla) || SLA_TIERS[0];
  }, [selectedSla]);

  // Compute live price breakdown
  const estimate = useMemo(() => {
    return calculatePricingEstimate(
      currentComplexity.price,
      volume,
      currentSla.multiplier,
      currentSla.rushFeePercent
    );
  }, [currentComplexity, volume, currentSla]);

  const currencySymbol = currency === "EUR" ? "€" : currency === "GBP" ? "£" : "$";
  const currencyRate = currency === "EUR" ? 0.92 : currency === "GBP" ? 0.79 : 1.0;

  return (
    <section id="pricing" className="py-24 bg-[#070A11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4 shadow-3d-glow">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT ENTERPRISE RATE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Dynamic Pricing Estimator.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Real-time instant quotes based on item complexity, batch volume, and SLA turnaround speed. Zero setup fees, zero hidden contracts.
          </p>
        </div>

        {/* Two-Column Interactive Calculator Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Configuration Controls (Col 7) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* 1. Service Selection */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-3 flex items-center justify-between">
                <span>1. Select Creative Service</span>
                <span className="text-cyan-400 lowercase">{SERVICES_DATA.length} specialized desks</span>
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedServiceId === srv.id
                        ? "bg-cyan-950/70 border-cyan-400 text-white shadow-3d-glow"
                        : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">{srv.title}</span>
                    <span className="text-[10px] text-cyan-400 font-mono mt-1 block">from {srv.startingPrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Complexity Tier Selector */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-3 flex items-center justify-between">
                <span>2. Image Complexity Tier</span>
                <span className="text-violet-400">Selected: {currentComplexity.title}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {COMPLEXITY_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedComplexity(tier.id)}
                    className={`p-3.5 rounded-2xl text-center border transition-all ${
                      selectedComplexity === tier.id
                        ? "bg-gradient-to-b from-violet-950/90 to-slate-900 border-violet-400 text-white shadow-violet-glow scale-102"
                        : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="text-xs font-bold block">{tier.title}</span>
                    <span className="text-base font-extrabold text-violet-300 block my-1">
                      ${tier.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight">{tier.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Batch Volume Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  3. Batch Volume (Images per Order)
                </label>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-mono font-extrabold text-sm shadow-3d-glow">
                    {volume.toLocaleString()} Images
                  </span>
                  {estimate.discountPercent > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 text-[10px] font-bold font-mono">
                      -{estimate.discountPercent}% BULK SAVINGS
                    </span>
                  )}
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="1"
                max="5000"
                step="10"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              {/* Bulk Tier Milestones */}
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
                <span>1-49 (0%)</span>
                <span>50-199 (10%)</span>
                <span>200-999 (20%)</span>
                <span className="text-emerald-400 font-bold">1,000+ (35% OFF)</span>
              </div>
            </div>

            {/* 4. Turnaround Speed SLA */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-3">
                4. Delivery Speed SLA Guarantee
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SLA_TIERS.map((sla) => (
                  <button
                    key={sla.id}
                    onClick={() => setSelectedSla(sla.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-start justify-between transition-all ${
                      selectedSla === sla.id
                        ? "bg-slate-900 border-cyan-400 text-white shadow-3d-glow"
                        : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {sla.title}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-1">{sla.description}</span>
                    </div>
                    {sla.rushFeePercent > 0 ? (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-800">
                        +{sla.rushFeePercent}%
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                        0% Fee
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Dynamic Quote Summary Card (Col 5) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border-cyan-500/30 relative">
            
            {/* Top Badge & Currency Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">LIVE RATE ESTIMATE</span>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-950 border border-white/10 text-[11px] font-mono">
                {(["USD", "EUR", "GBP"] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-0.5 rounded ${
                      currency === curr
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Configuration Summary */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Selected Service:</span>
                <span className="text-white font-semibold">{currentService.title}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Complexity Tier:</span>
                <span className="text-white font-semibold">{currentComplexity.title}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Batch Quantity:</span>
                <span className="text-cyan-300 font-mono font-bold">{volume} images</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Guaranteed SLA:</span>
                <span className="text-white font-semibold">{currentSla.title}</span>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="space-y-2.5 pt-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Base Unit Rate:</span>
                <span>{currencySymbol}{(estimate.basePerImage * currencyRate).toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({volume} items):</span>
                <span>{currencySymbol}{(estimate.subtotal * currencyRate).toFixed(2)}</span>
              </div>

              {estimate.discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Tier Discount ({estimate.discountPercent}%):</span>
                  <span>-{currencySymbol}{(estimate.discountAmount * currencyRate).toFixed(2)}</span>
                </div>
              )}

              {estimate.rushFeeAmount > 0 && (
                <div className="flex justify-between text-violet-400 font-bold">
                  <span>Express Rush SLA Fee:</span>
                  <span>+{currencySymbol}{(estimate.rushFeeAmount * currencyRate).toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Grand Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-slate-900 border border-cyan-400/50 shadow-3d-glow space-y-1">
              <span className="text-[11px] font-mono text-cyan-300 block uppercase tracking-wider">
                ESTIMATED TOTAL QUOTE
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {currencySymbol}{(estimate.total * currencyRate).toFixed(2)}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  ≈ {currencySymbol}{(estimate.finalPerImage * currencyRate).toFixed(2)} / img
                </span>
              </div>
            </div>

            {/* Guarantee Checks */}
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Unlimited free revisions until 100% approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>No upfront credit card required for pilot batch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Strict bilateral NDA confidentiality guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => onOpenUpload({
                  service: currentService.title,
                  complexity: currentComplexity.title,
                  volume,
                  sla: currentSla.title,
                  estimateTotal: `${currencySymbol}${(estimate.total * currencyRate).toFixed(2)}`
                })}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-3d-glow hover:shadow-violet-glow transition-all"
              >
                <span>Lock in Quote & Upload 5 Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => window.print()}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs font-bold font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Export Quote (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
