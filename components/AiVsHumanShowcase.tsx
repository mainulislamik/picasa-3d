"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  UserCheck 
} from "lucide-react";
import { soundFx } from "@/lib/audio";

export default function AiVsHumanShowcase() {
  const [activeTab, setActiveTab] = useState<"apparel" | "jewelry" | "beauty">("apparel");

  const comparisons = {
    apparel: {
      title: "Apparel & Ghost Mannequin: White-on-White Edge",
      aiIssue: "AI algorithms hallucinate boundaries, eat collar corners, and leave muddy gray halo fringes on white garment backgrounds.",
      humanFix: "Hand-drawn pen tool paths cut with 0.5px sub-pixel precision. Natural fabric weave, collar cavities, and inner stitching preserved 100%.",
      aiBadges: ["Muddy Gray Halos", "Lost Collar Symmetry", "Blown-Out White Edges"],
      humanBadges: ["100% Vector Bezier", "Symmetrical 3D Neck", "Zero Edge Artifacts"]
    },
    jewelry: {
      title: "Fine Jewelry & Watches: Prongs & Facet Reflections",
      aiIssue: "AI background erasers mistake polished platinum prongs for white background and erase stone clips, destroying diamonds.",
      humanFix: "Individual multi-path clipping around microscopic metal prongs with manual metal polish and reflection balancing.",
      aiBadges: ["Erased Prongs", "Blurred Diamond Facets", "Blown Speculars"],
      humanBadges: ["Microscopic Bezier Paths", "Faceted Sparkle Retention", "Cast Reflection Fade"]
    },
    beauty: {
      title: "Model & Editorial Retouching: Texture vs Plastic",
      aiIssue: "Generic AI filters wipe out skin pores, create uncanny plastic clay faces, and blur individual eyelashes into mush.",
      humanFix: "Non-destructive frequency separation and micro dodge & burn retaining true dermal pore texture and authentic tone.",
      aiBadges: ["Plastic Clay Skin", "Uncanny Hallucinations", "Mushy Eyelashes"],
      humanBadges: ["100% Pore Texture Kept", "True Skin Undertones", "Individual Lash Isolation"]
    }
  };

  const current = comparisons[activeTab];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-3">
            <Cpu className="w-3.5 h-3.5 text-rose-600" />
            <span>The 2026 Quality Paradox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Global Brands Reject Generic AI for E-Commerce
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            AI offers speed, but enterprise fashion and luxury retail demand microscopic human perfection. See where automated algorithms fail and how Picasa’s 120+ specialists guarantee catalog approval.
          </p>

          {/* Interactive Category Selector */}
          <div className="mt-8 inline-flex flex-wrap sm:flex-nowrap justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-full">
            <button
              onClick={() => {
                soundFx.playSwitch();
                setActiveTab("apparel");
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "apparel"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Apparel & Fashion
            </button>
            <button
              onClick={() => {
                soundFx.playSwitch();
                setActiveTab("jewelry");
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "jewelry"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Jewelry & Luxury
            </button>
            <button
              onClick={() => {
                soundFx.playSwitch();
                setActiveTab("beauty");
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "beauty"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Editorial Beauty
            </button>
          </div>
        </div>

        {/* Head-to-Head Comparison Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
            {current.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AI Automated Flaws Box */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-rose-900">Generic AI Erasers & Auto Tools</h4>
                    <span className="text-[10px] font-mono text-rose-600 uppercase">Automated Batch Failure</span>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-6">
                  {current.aiIssue}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-rose-200/60">
                <span className="text-[10px] font-mono font-bold text-rose-700 uppercase block">Common Defects:</span>
                <div className="flex flex-wrap gap-2">
                  {current.aiBadges.map((badge, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-rose-200 text-[11px] font-semibold text-rose-700">
                      ✗ {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Picasa Human Specialist Solution Box */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900">Picasa Specialist Craftsmanship</h4>
                    <span className="text-[10px] font-mono text-emerald-600 uppercase">Sub-Pixel Pen Tool Precision</span>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-6">
                  {current.humanFix}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-emerald-200/60">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block">Picasa Guarantee:</span>
                <div className="flex flex-wrap gap-2">
                  {current.humanBadges.map((badge, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-[11px] font-semibold text-emerald-700">
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Experience the Difference on Your Own Images</span>
              <span className="text-[11px] text-slate-500">Submit 3 test files and receive results in under 4 hours with no obligations.</span>
            </div>
            <Link
              href="/free-test"
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Test 3 Free Images</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
