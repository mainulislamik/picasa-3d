"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  PhoneCall
} from "lucide-react";
import { ALL_SERVICES, NAV_LINKS, STUDIO_CONTACT } from "@/lib/constants";

interface NavbarProps {
  onOpenUpload?: () => void;
}

export default function Navbar({ onOpenUpload }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Main Glassmorphic Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Authentic Original Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1">
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
              className={`hover:text-cyan-600 transition-colors ${pathname === "/" ? "text-cyan-600 font-bold" : ""}`}
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
                className={`flex items-center gap-1 hover:text-cyan-600 transition-colors py-2 ${
                  pathname.startsWith("/services") ? "text-cyan-600 font-bold" : ""
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
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs transition-colors group"
                    >
                      <div>
                        <span className="font-bold text-slate-800 group-hover:text-cyan-600 block">
                          {service.title}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {service.turnaround}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        {service.startingPrice}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center px-2">
                    <Link 
                      href="/services"
                      className="text-[11px] font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
                    >
                      <span>View All 12 Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/portfolio" 
              className={`hover:text-cyan-600 transition-colors ${pathname === "/portfolio" ? "text-cyan-600 font-bold" : ""}`}
            >
              Our Works
            </Link>

            <Link 
              href="/pricing" 
              className={`hover:text-cyan-600 transition-colors ${pathname === "/pricing" ? "text-cyan-600 font-bold" : ""}`}
            >
              Pricing
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-cyan-600 transition-colors ${pathname === "/about" ? "text-cyan-600 font-bold" : ""}`}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-cyan-600 transition-colors ${pathname === "/contact" ? "text-cyan-600 font-bold" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/track-order"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-cyan-600" />
              <span>Track Batch</span>
            </Link>

            <Link
              href="/free-test"
              className="px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Free Test (3 Images)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === link.href ? "bg-cyan-50 text-cyan-700 font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/free-test"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-cyan-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Submit Free Test (3 Images)</span>
            </Link>
            <Link
              href="/track-order"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-cyan-600" />
              <span>Track Production Order</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
