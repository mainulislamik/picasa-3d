"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Clock, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  FileCheck2,
  Search,
  PhoneCall,
  Mail
} from "lucide-react";
import { STUDIO_CONTACT } from "@/lib/constants";

export default function WorldClockBar() {
  const [times, setTimes] = useState({
    dhaka: "--:--:--",
    ny: "--:--:--",
    london: "--:--:--",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        dhaka: now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        ny: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        london: now.toLocaleTimeString("en-US", { timeZone: "Europe/London", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 text-[11px] font-mono border-b border-slate-800 py-1.5 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Production World Clocks */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-bold">Dhaka HQ:</span>
            <span className="text-emerald-400 font-bold">{mounted ? times.dhaka : "--:--:--"}</span>
            <span className="hidden md:inline text-[10px] text-slate-400 font-sans">(120+ Team · 24/5 Live Desk)</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span className="text-slate-200 font-semibold">London:</span>
            <span>{mounted ? times.london : "--:--:--"}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-slate-400">
            <span className="text-slate-200 font-semibold">New York:</span>
            <span>{mounted ? times.ny : "--:--:--"}</span>
          </div>
        </div>

        {/* Studio Utilities & Quick Action Portals */}
        <div className="flex items-center gap-4 text-[11px]">
          <Link 
            href="/free-test"
            className="flex items-center gap-1.5 text-cyan-300 hover:text-white font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Free Test (3 Images)</span>
          </Link>

          <span className="text-slate-700 hidden sm:inline">|</span>

          <Link 
            href="/track-order"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Search className="w-3 h-3 text-cyan-400" />
            <span>Track Order</span>
          </Link>

          <span className="text-slate-700 hidden md:inline">|</span>

          <Link 
            href="/nda"
            className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <FileCheck2 className="w-3 h-3 text-emerald-400" />
            <span>e-NDA</span>
          </Link>

          <span className="text-slate-700 hidden lg:inline">|</span>

          <a 
            href={`tel:${STUDIO_CONTACT.phone}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-mono"
          >
            <PhoneCall className="w-3 h-3 text-slate-400" />
            <span>{STUDIO_CONTACT.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
