"use client";

import React, { useState, useEffect } from "react";
import { 
  Flame, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Eye, 
  ChevronRight 
} from "lucide-react";
import { soundFx } from "@/lib/audio";

interface LiveProductionFeedProps {
  onSelectService?: (id: string) => void;
  onOpenUpload?: () => void;
}

interface ActivityEvent {
  id: string;
  clientCountry: string;
  countryCode: string;
  service: string;
  serviceId: string;
  imageCount: number;
  timeAgo: string;
  turnaroundHours: number;
  qualityScore: string;
  status: "Completed QC" | "Dispatched" | "In Color Grading" | "Clipping Node Pass";
}

const LIVE_EVENTS: ActivityEvent[] = [
  {
    id: "tx-1",
    clientCountry: "London, UK",
    countryCode: "GB",
    service: "Ghost Mannequin / Neck Joint",
    serviceId: "ghost",
    imageCount: 140,
    timeAgo: "4m ago",
    turnaroundHours: 6,
    qualityScore: "99.9%",
    status: "Completed QC"
  },
  {
    id: "tx-2",
    clientCountry: "New York, USA",
    countryCode: "US",
    service: "Clipping Path & Cut Out",
    serviceId: "clipping",
    imageCount: 420,
    timeAgo: "11m ago",
    turnaroundHours: 4,
    qualityScore: "100%",
    status: "Dispatched"
  },
  {
    id: "tx-3",
    clientCountry: "Milan, Italy",
    countryCode: "IT",
    service: "High-End Luxury Jewelry Retouch",
    serviceId: "jewelry",
    imageCount: 65,
    timeAgo: "19m ago",
    turnaroundHours: 12,
    qualityScore: "99.8%",
    status: "In Color Grading"
  },
  {
    id: "tx-4",
    clientCountry: "Munich, Germany",
    countryCode: "DE",
    service: "Fashion & Model Editorial Retouch",
    serviceId: "retouching",
    imageCount: 210,
    timeAgo: "26m ago",
    turnaroundHours: 8,
    qualityScore: "100%",
    status: "Completed QC"
  },
  {
    id: "tx-5",
    clientCountry: "Sydney, Australia",
    countryCode: "AU",
    service: "Shadow & Reflection Creation",
    serviceId: "shadow",
    imageCount: 95,
    timeAgo: "34m ago",
    turnaroundHours: 6,
    qualityScore: "99.7%",
    status: "Clipping Node Pass"
  },
  {
    id: "tx-6",
    clientCountry: "Paris, France",
    countryCode: "FR",
    service: "Multi-Path Complex Apparel",
    serviceId: "clipping",
    imageCount: 180,
    timeAgo: "42m ago",
    turnaroundHours: 8,
    qualityScore: "100%",
    status: "Completed QC"
  }
];

export default function LiveProductionFeed({ onSelectService, onOpenUpload }: LiveProductionFeedProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dailyCompleted, setDailyCompleted] = useState(2184);

  // Auto-cycle ticker every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % LIVE_EVENTS.length);
    }, 5500);

    const countTimer = setInterval(() => {
      setDailyCompleted((c) => c + 1);
    }, 18000);

    return () => {
      clearInterval(timer);
      clearInterval(countTimer);
    };
  }, []);

  const activeEvent = LIVE_EVENTS[activeIdx];

  return (
    <section className="relative py-12 bg-white border-y border-slate-200/90 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Banner Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Indicator & Ticker Pulse */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 shadow-sm">
              <span className="absolute w-3 h-3 rounded-full bg-rose-600 animate-ping opacity-60"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-rose-700">
                  LIVE STUDIO DISPATCH FEED
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-900 text-white">
                  3 SHIFTS ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Dhaka Level-5 Production Hub • Operating 24h Real-Time
              </p>
            </div>
          </div>

          {/* Center Dynamic Stream Item */}
          <div 
            key={activeEvent.id}
            onClick={() => {
              soundFx.playClick();
              if (onSelectService) onSelectService(activeEvent.serviceId);
            }}
            className="flex-1 w-full max-w-2xl px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-300 hover:bg-rose-50/20 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs font-mono font-bold text-slate-700 shadow-xs shrink-0">
                {activeEvent.countryCode}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {activeEvent.service}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    ({activeEvent.imageCount} files)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    {activeEvent.clientCountry}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {activeEvent.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
              <span className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-700">
                {activeEvent.timeAgo}
              </span>
              <div className="w-6 h-6 rounded-full bg-white border border-slate-200 group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right Live Production Score Metrics */}
          <div className="flex items-center gap-6 shrink-0 text-right">
            <div>
              <span className="text-base sm:text-lg font-black font-mono text-slate-900 block leading-tight">
                {dailyCompleted.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Images Cleared Today
              </span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <span className="text-base sm:text-lg font-black font-mono text-emerald-600 block leading-tight">
                99.85%
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                QC Acceptance
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
