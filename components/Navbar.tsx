"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  UploadCloud, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { NAV_LINKS, SERVICES_3D } from "@/lib/constants";

interface NavbarProps {
  onOpenUpload?: (config?: any) => void;
}

export default function Navbar({ onOpenUpload }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUploadClick = () => {
    if (onOpenUpload) {
      onOpenUpload();
    } else {
      router.push("/contact");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Mark */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Authentic Picasa Vector Logo */}
            <div className="relative py-1 flex items-center">
              <img 
                src="/logo.svg" 
                alt="Picasa Limited" 
                className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="hidden sm:flex flex-col pl-2 border-l border-slate-200">
              <span className="text-[10px] font-mono tracking-wider text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200 uppercase font-bold">
                3D Studio
              </span>
              <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase font-semibold mt-0.5">
                Dhaka HQ
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = isMounted && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)));

              if (link.href === "/services") {
                return (
                  <div 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                        isActive
                          ? "bg-white text-cyan-700 shadow-sm border border-slate-200/80 font-bold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60 hover:-translate-y-0.5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white border border-slate-200 p-2 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="px-3 py-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                          Creative Production Desks
                        </div>
                        <div className="mt-1 space-y-1">
                          {SERVICES_3D.map((service) => (
                            <Link
                              key={service.id}
                              href="/services"
                              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 group/item transition-all hover:translate-x-1"
                            >
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-800 group-hover/item:text-cyan-700 transition-colors">
                                  {service.title}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  {service.badge}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-100">
                                {service.startingPrice}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-cyan-700 shadow-sm border border-slate-200/80 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60 hover:-translate-y-0.5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-xs font-bold text-slate-700 hover:text-cyan-700 px-3.5 py-2 rounded-full hover:bg-slate-100/80 transition-all hover:-translate-y-0.5"
            >
              Contact HQ
            </Link>

            <button
              onClick={handleUploadClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md hover:shadow-cyan-500/25 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <UploadCloud className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Test 5 Images Free</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleUploadClick}
              className="p-2 rounded-full bg-cyan-600 text-white shadow-sm"
              aria-label="Upload"
            >
              <UploadCloud className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-white/98 border-t border-slate-200 shadow-xl space-y-3">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = isMounted && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleUploadClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Test 5 Images Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
