"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  Globe2, 
  Layers, 
  CheckCircle2,
  FileCheck2,
  ArrowUpRight
} from "lucide-react";
import { SERVICES_DATA, NAV_LINKS } from "@/lib/constants";

interface FooterProps {
  onOpenUpload?: () => void;
}

export default function Footer({ onOpenUpload }: FooterProps) {
  return (
    <footer className="bg-[#05070D] border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Studio Description (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-[1px] shadow-3d-glow">
                <div className="w-full h-full bg-[#070A11] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block">
                  PICASA LIMITED
                </span>
                <span className="text-[10px] font-mono text-cyan-400 block -mt-1">
                  2026 3D EDITION • POST-PRODUCTION
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Global B2B image editing and creative post-production studio. High-velocity hand-drawn clipping paths, ghost mannequin, and editorial retouching for Fortune 500 fashion and luxury brands.
            </p>

            {/* Live Studio Operations Pulse Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-300 font-bold">Dhaka Studio Hub:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  24/7 Shift Active
                </span>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>ACTIVE DESKS: 180+ SPECIALISTS</span>
                <span>DAILY SLA: 2,000+ SKUS</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services Index (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              CREATIVE DESKS
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[10px] font-mono text-slate-600 group-hover:text-cyan-500">
                      {srv.startingPrice}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              PLATFORM
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenUpload}
                  className="text-cyan-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Upload 5 Free Images</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              STUDIO DESK HQ
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>House 38, Road 02, Block C, Banasree, Rampura, Dhaka-1219, Bangladesh</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@picasalimited.com" className="hover:text-white">
                  info@picasalimited.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+8801717833075" className="hover:text-white font-mono">
                  +880 1717-833075
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                ISO 27001
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                <FileCheck2 className="w-3 h-3" />
                BILATERAL NDA
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © 2026 PICASA LIMITED. ALL RIGHTS RESERVED. 2026 3D EDITION.
          </div>

          <div className="flex items-center gap-6">
            <a href="#trust" className="hover:text-slate-300">Privacy & Data Security</a>
            <a href="#trust" className="hover:text-slate-300">Bilateral NDA Terms</a>
            <a href="#trust" className="hover:text-slate-300">Enterprise SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
