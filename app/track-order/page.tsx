"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck2, 
  RefreshCw, 
  Download, 
  ChevronRight,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight
} from "lucide-react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("PIC-84920");
  const [searched, setSearched] = useState(true);

  // Realistic Production Batch Pipeline
  const orderDetails = {
    id: "PIC-84920",
    client: "Nordic Apparel Studio (Oslo)",
    submittedAt: "Oct 12, 2026 · 09:20 GMT",
    targetSla: "12 Hours (Guaranteed Delivery)",
    totalImages: 340,
    completedImages: 295,
    service: "Ghost Mannequin + 0.5px Pen Cutout + Natural Shadow Drop",
    currentStatus: "Phase 4: Senior QC Dual-Monitor Review",
    etaMinutes: 35,
    steps: [
      {
        title: "Ingestion & Security Scan",
        desc: "340 RAW files validated. MD5 checksum integrity verified & isolated in air-gapped staging storage.",
        status: "completed",
        timestamp: "09:25 GMT"
      },
      {
        title: "Shift Allocation (Dhaka HQ)",
        desc: "Assigned to 8 senior pen-tool specialists across Stations D-12 through D-19 (Shift 2).",
        status: "completed",
        timestamp: "09:40 GMT"
      },
      {
        title: "Micro Pen Tool Masking & Neck Joint",
        desc: "295 / 340 apparel garments completed. Internal collar stitching aligned and color balanced.",
        status: "in_progress",
        timestamp: "Active Hand-Crafting (88%)"
      },
      {
        title: "Senior QC Dual-Monitor Inspection",
        desc: "500% pixel audit for edge fraying, color fidelity, and Alpha channel clipping path integrity.",
        status: "in_progress",
        timestamp: "Desk Review #2 Active"
      },
      {
        title: "Packaging & High-Speed Aspera/S3 Dispatch",
        desc: "Layered PSD + WebP sRGB assets packaged with client-specified folder hierarchy.",
        status: "pending",
        timestamp: "Pending Final Approval"
      }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-3">
              <Server className="w-3.5 h-3.5 text-cyan-600" /> Live Studio Dispatch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Track Production Batch
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Real-time shift visibility, artisan workstation allocation, and senior quality assurance progress across Dhaka HQ.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter Batch ID (e.g. PIC-84920 or PICASA-PILOT-10293)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white border border-slate-200 shadow-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Track Live
              </button>
            </div>
            <div className="mt-2 text-center text-xs text-slate-500">
              Try sample order: <button type="button" onClick={() => setOrderId("PIC-84920")} className="font-mono text-cyan-700 underline font-semibold">PIC-84920</button>
            </div>
          </form>

          {/* Results Card */}
          {searched && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              
              {/* Top Summary Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      BATCH #{orderDetails.id}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-emerald-700">Active Shift Processing</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {orderDetails.service}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Client: <strong className="text-slate-700">{orderDetails.client}</strong> · Ingested {orderDetails.submittedAt}
                  </p>
                </div>

                <div className="text-left sm:text-right bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Estimated Delivery</span>
                  <span className="text-lg font-mono font-extrabold text-cyan-700">~{orderDetails.etaMinutes} Minutes</span>
                  <span className="text-[11px] text-slate-500 block">{orderDetails.targetSla}</span>
                </div>
              </div>

              {/* Progress Bar & Image Count */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-800">
                    Artisan Output Progress: {orderDetails.completedImages} of {orderDetails.totalImages} Images Completed
                  </span>
                  <span className="text-cyan-700 font-mono font-bold">
                    {Math.round((orderDetails.completedImages / orderDetails.totalImages) * 100)}%
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${(orderDetails.completedImages / orderDetails.totalImages) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* 5-Stage Timeline */}
              <div className="space-y-6 pt-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Production Checkpoint Stages
                </h4>

                <div className="space-y-4">
                  {orderDetails.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="mt-0.5 shrink-0">
                        {step.status === "completed" ? (
                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        ) : step.status === "in_progress" ? (
                          <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center animate-spin">
                            <RefreshCw className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
                            <Clock className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h5 className={`text-sm font-bold ${
                            step.status === "completed" ? "text-slate-900" :
                            step.status === "in_progress" ? "text-cyan-900" : "text-slate-500"
                          }`}>
                            {step.title}
                          </h5>
                          <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                            step.status === "completed" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                            step.status === "in_progress" ? "bg-cyan-50 text-cyan-700 border border-cyan-200" :
                            "bg-slate-100 text-slate-500 border border-slate-200"
                          }`}>
                            {step.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Support Callout */}
              <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-cyan-900">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Need to adjust turnaround speed or add notes to Station D-12?</span>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-colors shrink-0"
                >
                  Contact Desk Supervisor
                </Link>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
