"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Layers,
  ChevronRight,
  UploadCloud
} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  onOpenUpload: () => void;
}

export default function Navbar({ onOpenUpload }: NavbarProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMounted && isScrolled
          ? "bg-[#070A11]/85 backdrop-blur-xl border-b border-white/10 shadow-glass-sm py-3"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Glowing 3D Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-3d-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070A11] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  PICASA
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/70 border border-cyan-800/80 px-1.5 py-0.5 rounded">
                  2026 3D
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-wider text-slate-400 block -mt-1">
                LIMITED • POST-PRODUCTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Studio Status & CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Studio Status Pulse */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Dhaka Studio:</span>
              <span className="text-emerald-400 font-bold">24/7 Active</span>
            </div>

            {/* Free Trial Button */}
            <button
              onClick={onOpenUpload}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#070A11]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-full group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#070A11] text-xs font-bold text-white group-hover:bg-transparent transition-colors duration-200">
                <UploadCloud className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                <span>Start Free Trial</span>
                <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px]">
                  5 Free
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenUpload}
              className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold flex items-center gap-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>5 Free</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-5 border-t border-white/10 space-y-2 bg-[#070A11]/95 backdrop-blur-2xl rounded-2xl px-3 animate-in slide-in-from-top-3 duration-200">
            <div className="flex items-center justify-between py-2 px-3 text-[11px] font-mono text-slate-400 border-b border-white/5">
              <span>Studio Desk Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                24/7 Operations Online
              </span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-cyan-400 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenUpload();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-3d-glow"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload 5 Test Images (Free)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
