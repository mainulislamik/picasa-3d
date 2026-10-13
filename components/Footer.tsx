"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  FileCheck2, 
  Search, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers
} from "lucide-react";
import { ALL_SERVICES, STUDIO_CONTACT, ENTERPRISE_BADGES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      
      {/* Enterprise Trust Ribbon */}
      <div className="border-b border-slate-800 py-10 bg-slate-950/60">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTERPRISE_BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{badge.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Studio Information */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-700/60 shadow-lg inline-flex items-center transition-all group-hover:bg-white/95">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="Picasa Limited"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Global B2B post-production studio founded in 2016. Powered by 120+ craftsmen in Dhaka HQ delivering 100% hand-crafted clipping paths, 3D ghost mannequins, and high-end beauty retouching to leading fashion houses and retailers.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{STUDIO_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`tel:${STUDIO_CONTACT.phone}`} className="hover:text-white font-mono">
                  {STUDIO_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`mailto:${STUDIO_CONTACT.email}`} className="hover:text-white">
                  {STUDIO_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{STUDIO_CONTACT.hours}</span>
              </div>
            </div>
          </div>

          {/* Core Services (Col 1) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Post-Production
            </h4>
            <ul className="space-y-2 text-xs">
              {ALL_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-slate-400 hover:text-rose-400 transition-colors flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative, Motion & 3D (Col 2) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Creative & Motion
            </h4>
            <ul className="space-y-2 text-xs">
              {ALL_SERVICES.slice(6, 12).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-slate-400 hover:text-rose-400 transition-colors flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Portals & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Client Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/free-test" className="text-rose-300 hover:text-white font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  <span>Free Test (3 Images)</span>
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-rose-400" />
                  <span>Track Production Batch</span>
                </Link>
              </li>
              <li>
                <Link href="/nda" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Execute Mutual NDA</span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-rose-400" />
                  <span>How It Works & Pipeline</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white">
                  Volume Rate Matrix
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white">
                  Interactive Works Showcase
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  Dhaka Studio Team & History
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">
                  Direct Contact & Quotes
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2016 - {new Date().getFullYear()} Picasa Limited. All rights reserved. Registered in Dhaka, Bangladesh.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/nda" className="hover:text-slate-300">Privacy & NDA</Link>
            <Link href="/pricing" className="hover:text-slate-300">Terms of SLA</Link>
            <Link href="/contact" className="hover:text-slate-300">Security & GDPR</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
