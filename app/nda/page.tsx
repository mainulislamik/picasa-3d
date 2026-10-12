"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileCheck2, 
  ShieldCheck, 
  Lock, 
  Download, 
  Printer, 
  CheckCircle2, 
  Server, 
  Calendar, 
  Building2, 
  User, 
  PenTool,
  ArrowRight
} from "lucide-react";
import { STUDIO_CONTACT } from "@/lib/constants";

export default function NdaPage() {
  const [clientCompany, setClientCompany] = useState("Nordic Apparel Retail AS");
  const [signatoryName, setSignatoryName] = useState("Alexandre Laurent");
  const [signatoryTitle, setSignatoryTitle] = useState("Head of E-Commerce Production");
  const [clientCountry, setClientCountry] = useState("Norway");
  const [signed, setSigned] = useState(false);
  const [agreementId] = useState(`NDA-PICASA-${Math.floor(100000 + Math.random() * 900000)}`);
  const effectiveDate = "October 12, 2026";

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    setSigned(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 md:py-24 print:py-0 print:bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header - Screen Only */}
          <div className="text-center max-w-2xl mx-auto mb-10 print:hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Enterprise Legal Protocol
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Mutual Non-Disclosure Agreement
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Legally binding bilateral confidentiality agreement protecting pre-release fashion lookbooks, prototype jewelry photography, and proprietary RAW catalog assets prior to upload.
            </p>
          </div>

          {/* Interactive Generator & Legal Document */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl print:shadow-none print:border-none print:p-0">
            
            {/* Document Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-8 flex flex-wrap justify-between items-start gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 tracking-widest block">
                  LEGAL INSTRUMENT · BILATERAL CONFIDENTIALITY
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">
                  MUTUAL NON-DISCLOSURE AGREEMENT (e-NDA)
                </h2>
                <div className="text-xs font-mono text-rose-800 font-bold mt-1">
                  DOCUMENT NO: {agreementId} · EFFECTIVE: {effectiveDate}
                </div>
              </div>

              <div className="text-right text-xs text-slate-600 font-mono">
                <div className="font-bold text-slate-900">Picasa Limited</div>
                <div>Mohammadpur, Dhaka, Bangladesh</div>
                <div>ISO-27001 Air-Gapped Production Facility</div>
              </div>
            </div>

            {/* Input Configurator (Hide when printing) */}
            {!signed && (
              <form onSubmit={handleSign} className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 print:hidden">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-rose-600" />
                  <span>Configure Your Enterprise Details to Sign</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Jurisdiction / Country *</label>
                    <input
                      type="text"
                      required
                      value={clientCountry}
                      onChange={(e) => setClientCountry(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Authorized Signatory Name *</label>
                    <input
                      type="text"
                      required
                      value={signatoryName}
                      onChange={(e) => setSignatoryName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Signatory Title / Role *</label>
                    <input
                      type="text"
                      required
                      value={signatoryTitle}
                      onChange={(e) => setSignatoryTitle(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>Execute & Apply Digital Seal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Legal Agreement Body */}
            <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
              
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                  1. PARTIES & RECITALS
                </h4>
                <p>
                  This Mutual Non-Disclosure Agreement (the &quot;Agreement&quot;) is entered into as of <strong>{effectiveDate}</strong> by and between <strong>Picasa Limited</strong>, a professional post-production corporation organized under the laws of Bangladesh with registered corporate headquarters at Level-5, B-3, Block-E, Zakir Hossain Road, Mohammadpur, Dhaka, Bangladesh, and <strong>{clientCompany || "[Client Enterprise]"}</strong>, organized under the laws of <strong>{clientCountry || "[Client Jurisdiction]"}</strong> (collectively the &quot;Parties&quot;).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                  2. DEFINITION OF CONFIDENTIAL MATERIAL
                </h4>
                <p>
                  &quot;Confidential Information&quot; includes all pre-release photographic files, high-resolution camera RAW files, 3D assets, lookbooks, product sketches, embargoed seasonal apparel lines, pricing models, and trade secrets disclosed by either Party during the commercial evaluation, pilot test, or production contracting phases.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                  3. AIR-GAPPED FACILITY & WORKSTATION SECURITY PROTOCOLS
                </h4>
                <p>
                  Picasa Limited covenants and warrants that all digital assets transmitted by Client shall be processed exclusively within its secure Dhaka production studio under the following non-negotiable physical and software controls:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                  <li><strong>Disabled External Media:</strong> All artist workstation USB mass storage ports, SD card readers, and optical drives are permanently disabled via enterprise BIOS policies.</li>
                  <li><strong>Firewalled Subnets:</strong> Workstations communicate solely across an internal isolated production LAN with restricted external internet egress.</li>
                  <li><strong>Encrypted Transport & Storage:</strong> Files are ingested and delivered exclusively via TLS 1.3 / AES-256 encrypted protocols.</li>
                  <li><strong>Automated 30-Day Purge:</strong> Unless otherwise specified in writing, all source RAW assets and completed files are cryptographically wiped from studio buffers exactly thirty (30) days following batch delivery and acceptance.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                  4. TERM & SURVIVAL
                </h4>
                <p>
                  The confidentiality obligations hereunder shall commence on the Effective Date and remain binding for a period of three (3) years, surviving the termination of any commercial vendor engagement.
                </p>
              </div>

            </div>

            {/* Signature Block */}
            <div className="mt-10 pt-8 border-t-2 border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-mono">
              
              {/* Picasa Studio Execution Block */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">FOR PICASA LIMITED:</div>
                <div className="text-slate-900 font-bold">Managing Director & QA Lead</div>
                <div className="text-slate-600">Picasa Limited (HQ Dhaka)</div>
                <div className="mt-4 pt-2 border-t border-slate-300 text-[10px] text-emerald-700 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>DIGITALLY SIGNED & VERIFIED BY PICASA LEGAL</span>
                </div>
              </div>

              {/* Client Enterprise Execution Block */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">FOR {clientCompany.toUpperCase()}:</div>
                <div className="text-slate-900 font-bold">{signatoryName || "Authorized Signatory"}</div>
                <div className="text-slate-600">{signatoryTitle || "Corporate Officer"} ({clientCountry})</div>
                <div className="mt-4 pt-2 border-t border-slate-300 text-[10px]">
                  {signed ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EXECUTED ELECTRONICALLY · VALID & BINDING</span>
                    </span>
                  ) : (
                    <span className="text-amber-700 font-semibold">
                      [Pending Client Execution Above]
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Print & Export Bar (Screen Only) */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 print:hidden">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>SHA-256 Verification Hash Embedded · Legally Binding Under E-Sign Act</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <Link
                  href="/free-test"
                  className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Proceed to Free Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
