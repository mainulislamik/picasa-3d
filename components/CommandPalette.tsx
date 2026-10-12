"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  ArrowRight, 
  Sliders, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  FileCheck2, 
  HelpCircle, 
  PhoneCall, 
  ExternalLink,
  Scissors,
  Shirt,
  Gem,
  Palette
} from "lucide-react";
import { soundFx } from "@/lib/audio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenUpload?: (config?: any) => void;
}

interface SearchEntry {
  title: string;
  category: "Services" | "Platform Tools" | "Support & Trust";
  description: string;
  icon: any;
  action: () => void;
  badge?: string;
}

export default function CommandPalette({ isOpen, onClose, onOpenUpload }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          soundFx.playSwitch();
          // Trigger open via custom event or prop
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const entries: SearchEntry[] = [
    {
      title: "Clipping Path & Background Cut Out",
      category: "Services",
      description: "100% hand-drawn vector pen tool isolation with 0.5px sub-pixel precision.",
      icon: Scissors,
      badge: "Starts $0.25",
      action: () => {
        router.push("/services#clipping");
        onClose();
      }
    },
    {
      title: "Ghost Mannequin & 3D Neck Joint",
      category: "Services",
      description: "Invisible hollow mannequin depth creation and symmetric collar stitching.",
      icon: Shirt,
      badge: "Starts $0.65",
      action: () => {
        router.push("/services#ghost");
        onClose();
      }
    },
    {
      title: "Luxury Jewelry & Watch Retouching",
      category: "Services",
      description: "Micro-dust extraction, diamond facet sparkle, and platinum luster enhancement.",
      icon: Gem,
      badge: "Starts $1.20",
      action: () => {
        router.push("/services#jewelry");
        onClose();
      }
    },
    {
      title: "Fashion & Editorial Model Retouching",
      category: "Services",
      description: "Non-destructive frequency separation preserving natural dermal pore texture.",
      icon: Palette,
      badge: "Starts $0.80",
      action: () => {
        router.push("/services#retouching");
        onClose();
      }
    },
    {
      title: "Dynamic Real-Time Pricing Estimator",
      category: "Platform Tools",
      description: "Interactive bulk tier calculator with instant volume discount breakdown.",
      icon: Sliders,
      action: () => {
        router.push("/pricing");
        onClose();
      }
    },
    {
      title: "Upload & 10-Image Free Pilot Test",
      category: "Platform Tools",
      description: "Submit sample files for overnight turn without credit card commitment.",
      icon: Sparkles,
      badge: "100% Free",
      action: () => {
        if (onOpenUpload) onOpenUpload();
        onClose();
      }
    },
    {
      title: "Live Production Order Tracker",
      category: "Platform Tools",
      description: "Monitor real-time Dhaka dispatch node, QC pass rate, and delivery ETA.",
      icon: Layers,
      action: () => {
        router.push("/track-order");
        onClose();
      }
    },
    {
      title: "Enterprise Bilateral NDA Execution",
      category: "Support & Trust",
      description: "Digital legal agreement securing complete IP protection and confidentiality.",
      icon: ShieldCheck,
      action: () => {
        router.push("/nda");
        onClose();
      }
    },
    {
      title: "Work Samples & Dual-Layer Portfolio",
      category: "Support & Trust",
      description: "Inspect authentic high-resolution before & after split sliders across 7 categories.",
      icon: FileCheck2,
      action: () => {
        router.push("/portfolio");
        onClose();
      }
    },
    {
      title: "Direct Studio Dispatch & 24/7 Support",
      category: "Support & Trust",
      description: "Connect with our Dhaka and international production managers.",
      icon: PhoneCall,
      action: () => {
        router.push("/contact");
        onClose();
      }
    }
  ];

  const filtered = entries.filter((e) => 
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.description.toLowerCase().includes(query.toLowerCase()) ||
    e.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-6 py-4 border-b border-slate-200">
          <Search className="w-5 h-5 text-rose-600 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, pricing, order tracking, NDA, portfolio..."
            className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
            autoFocus
          />
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500 font-bold">
              ESC
            </span>
            <button 
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-1 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400">Try searching for &ldquo;clipping&rdquo;, &ldquo;pricing&rdquo;, or &ldquo;track&rdquo;</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    item.action();
                  }}
                  className="pt-2 first:pt-0"
                >
                  <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50/50 hover:border-rose-200 border border-transparent transition-all cursor-pointer group">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-rose-100 group-hover:border-rose-200 flex items-center justify-center text-slate-600 group-hover:text-rose-600 transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 truncate transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-100 text-rose-700 shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-bold text-slate-700">Enter</kbd> to select</span>
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-bold text-slate-700">Esc</kbd> to dismiss</span>
          </div>
          <span className="text-rose-600 font-bold">Picasa Limited Studio Index</span>
        </div>

      </div>
    </div>
  );
}
