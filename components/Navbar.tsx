"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  ArrowRight,
  Layers,
  Search,
  FileCheck2,
  PhoneCall,
  Volume2,
  VolumeX,
  Command
} from "lucide-react";
import { ALL_SERVICES, NAV_LINKS, STUDIO_CONTACT } from "@/lib/constants";
import { soundFx } from "@/lib/audio";
import CommandPalette from "@/components/CommandPalette";

interface NavbarProps {
  onOpenUpload?: () => void;
}

export default function Navbar({ onOpenUpload }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial audio state
    setAudioEnabled(soundFx.enabled);
  }, []);

  const handleToggleAudio = () => {
    const newState = soundFx.toggle();
    setAudioEnabled(newState);
  };

  const handleLinkClick = () => {
    soundFx.playClick();
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full flex flex-col shadow-xs">
        {/* Main Glassmorphic Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4">
            
            {/* Authentic Original Logo */}
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className="flex items-center shrink-0 group py-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Picasa Limited"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/" ? "text-rose-600 font-bold" : ""}`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link 
                  href="/services" 
                  onClick={handleLinkClick}
                  className={`flex items-center gap-1 hover:text-rose-600 transition-colors py-2 ${
                    pathname.startsWith("/services") ? "text-rose-600 font-bold" : ""
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid gap-1 z-50">
                    <div className="text-[10px] font-mono text-slate-400 uppercase px-3 py-1 font-bold">
                      12 Core Studio Disciplines
                    </div>
                    {ALL_SERVICES.slice(0, 8).map((service) => (
                      <Link
                        key={service.id}
                        href={`/services#${service.id}`}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs transition-colors group"
                      >
                        <div>
                          <span className="font-bold text-slate-800 group-hover:text-rose-600 block">
                            {service.title}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {service.turnaround}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          {service.startingPrice}
                        </span>
                      </Link>
                    ))}
                    <div className="p-2 pt-1 border-t border-slate-100 mt-1">
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="text-center block text-xs font-bold text-rose-700 hover:text-rose-800 py-1"
                      >
                        View All Services & Specifications →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/how-it-works" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/how-it-works" ? "text-rose-600 font-bold" : ""}`}
              >
                How It Works
              </Link>

              <Link 
                href="/portfolio" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/portfolio" ? "text-rose-600 font-bold" : ""}`}
              >
                Our Works
              </Link>

              <Link 
                href="/pricing" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/pricing" ? "text-rose-600 font-bold" : ""}`}
              >
                Pricing
              </Link>

              <Link 
                href="/about" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/about" ? "text-rose-600 font-bold" : ""}`}
              >
                About Us
              </Link>

              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className={`hover:text-rose-600 transition-colors ${pathname === "/contact" ? "text-rose-600 font-bold" : ""}`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Quick Search Trigger (⌘K) */}
              <button
                type="button"
                onClick={() => {
                  soundFx.playSwitch();
                  setCommandPaletteOpen(true);
                }}
                className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                title="Quick Search (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-rose-600" />
                <span className="hidden md:inline">Search</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white border border-slate-200 text-slate-600 font-bold">
                  ⌘K
                </span>
              </button>

              {/* Tactile Audio Feedback Switch */}
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`p-2 rounded-xl border transition-all ${
                  audioEnabled 
                    ? "bg-rose-50 border-rose-200 text-rose-600" 
                    : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700"
                }`}
                title={audioEnabled ? "Tactile Audio: Enabled" : "Tactile Audio: Muted (Click to enable)"}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Order Tracker Link */}
              <Link
                href="/track-order"
                onClick={handleLinkClick}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-rose-600" />
                <span>Track Batch</span>
              </Link>

              {/* Free Trial Button */}
              <Link
                href="/free-test"
                onClick={handleLinkClick}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-rose-600/20 hover:scale-[1.02] active:scale-98 transition-all group"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-200 group-hover:rotate-12 transition-transform" />
                <span>Free Test (3 Images)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCommandPaletteOpen(true)}
                className="p-2 rounded-xl text-slate-600 bg-slate-50 border border-slate-200"
              >
                <Search className="w-5 h-5 text-rose-600" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  handleLinkClick();
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === link.href ? "bg-rose-50 text-rose-700 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/track-order"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
              >
                Track Live Order
              </Link>
              <Link
                href="/free-test"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-3 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-600/20"
              >
                Get 3 Free Test Edits →
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Full-Screen Fast Command Palette (⌘K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
        onOpenUpload={onOpenUpload}
      />
    </>
  );
}
