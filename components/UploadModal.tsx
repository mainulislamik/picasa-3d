"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  UploadCloud, 
  Link as LinkIcon, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  FileCheck2,
  Trash2,
  Sparkles
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: any;
}

interface MockFile {
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "completed";
}

interface QuoteApiResponse {
  quoteId: string;
  assignedDesk: string;
  targetDelivery: string;
}

export default function UploadModal({ isOpen, onClose, initialConfig }: UploadModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"direct" | "cloud">("direct");
  const [files, setFiles] = useState<MockFile[]>([
    { name: "LOOKBOOK_SS26_01.CR3", size: "38.4 MB", progress: 100, status: "completed" },
    { name: "PRODUCT_SHOES_FRONT.TIFF", size: "54.1 MB", progress: 78, status: "uploading" },
  ]);
  const [cloudUrl, setCloudUrl] = useState("");
  const [cloudPassword, setCloudPassword] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["clipping"]);
  const [turnaround, setTurnaround] = useState("standard_24h");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [instructions, setInstructions] = useState("");
  
  // Network & Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [quoteResponse, setQuoteResponse] = useState<QuoteApiResponse | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialConfig?.serviceId) {
      setSelectedServices([initialConfig.serviceId]);
    }
    if (initialConfig?.turnaround) {
      setTurnaround(initialConfig.turnaround);
    }
  }, [initialConfig]);

  if (!isMounted || !isOpen) return null;

  const handleSimulateAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newFile: MockFile = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        progress: 100,
        status: "completed",
      };
      setFiles((prev) => [...prev, newFile]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientEmail,
          clientCompany,
          selectedServices,
          turnaround,
          activeTab,
          cloudUrl,
          cloudPassword,
          instructions,
          files,
          volume: files.length || 5,
          estimatedPrice: "$0.00 (Free Pilot Batch)",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to process quote submission.");
      }

      setQuoteResponse({
        quoteId: data.quoteId,
        assignedDesk: data.assignedDesk,
        targetDelivery: data.targetDelivery,
      });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1120] border border-cyan-500/30 shadow-3d-glow p-6 sm:p-8 my-8 text-white overflow-hidden">
        
        {/* Glow ambient inside modal */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 blur-3xl pointer-events-none rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-cyan-950/80 border-2 border-cyan-400 flex items-center justify-center mx-auto shadow-3d-glow">
              <CheckCircle2 className="w-10 h-10 text-cyan-400" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
                5 Free Test Batch Ingested!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your high-resolution files have entered the Dhaka Studio queue under ticket:{" "}
                <span className="text-cyan-400 font-mono font-bold tracking-wider">
                  #{quoteResponse?.quoteId || "PIC-2026-84920"}
                </span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Production Desk:</span>
                <span className="text-white font-mono font-bold">
                  {quoteResponse?.assignedDesk || "QC Desk #07 (Dhaka HQ)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Delivery:</span>
                <span className="text-emerald-400 font-mono font-bold">
                  {quoteResponse?.targetDelivery || "Within 12 Hours"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Notification Sent To:</span>
                <span className="text-cyan-300 font-mono font-bold">{clientEmail || "your email"}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/5">
                <span className="text-slate-400">Status:</span>
                <span className="text-cyan-400 font-mono font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  QUEUED FOR RETOUCH
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setQuoteResponse(null);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm shadow-3d-glow hover:scale-105 transition-all"
            >
              Close & Return to Studio
            </button>
          </div>
        ) : (
          /* Upload Form */
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-[10px] font-mono mb-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>PILOT TEST • 100% FREE NO CREDIT CARD REQUIRED</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white font-display">
                Submit Your Images (5 Images Free)
              </h3>
              <p className="text-xs text-slate-300">
                Experience our sub-pixel pen-tool accuracy and studio speed with zero obligation.
              </p>
            </div>

            {/* Ingestion Method Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-white/10 mb-6 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("direct")}
                className={`flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === "direct"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-3d-glow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <UploadCloud className="w-4 h-4" />
                <span>Direct Drag-and-Drop (RAW/PSD/TIFF)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("cloud")}
                className={`flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === "cloud"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-3d-glow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LinkIcon className="w-4 h-4" />
                <span>Cloud Link (Drive / WeTransfer / Dropbox)</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* TAB 1: Direct File Drop Zone */}
              {activeTab === "direct" && (
                <div className="space-y-4">
                  <label className="relative border-2 border-dashed border-cyan-500/40 hover:border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-slate-950/40 hover:bg-slate-950/80 transition-all group">
                    <input
                      type="file"
                      multiple
                      onChange={handleSimulateAddFile}
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.tiff,.tif,.psd,.cr2,.cr3,.nef,.arw,.dng"
                    />
                    <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm font-bold text-white mb-1">
                      Drop files here or click to browse
                    </span>
                    <span className="text-[11px] text-slate-400 text-center max-w-sm">
                      Supports CR3, NEF, ARW, PSD, TIFF, PNG, JPG (Up to 2GB per file)
                    </span>
                  </label>

                  {/* Uploaded File Queue */}
                  {files.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                        <span>Queued Images ({files.length})</span>
                        <span className="text-cyan-400">Ready for Retouching</span>
                      </div>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        {files.map((file, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-3 truncate">
                              <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                              <div className="truncate">
                                <p className="font-mono font-bold text-slate-200 truncate">{file.name}</p>
                                <p className="text-[10px] text-slate-500">{file.size}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {file.status === "completed" ? (
                                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Loaded</span>
                                </span>
                              ) : (
                                <span className="text-[11px] text-cyan-400 font-mono">
                                  {file.progress}%
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() => handleRemoveFile(idx)}
                                className="text-slate-500 hover:text-red-400 transition-colors p-1"
                                aria-label="Remove file"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Cloud Ingestion Form */}
              {activeTab === "cloud" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                      Cloud Storage Share Link *
                    </label>
                    <input
                      type="url"
                      placeholder="https://wetransfer.com/downloads/... or https://drive.google.com/..."
                      value={cloudUrl}
                      onChange={(e) => setCloudUrl(e.target.value)}
                      required={activeTab === "cloud"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 block mb-1 flex items-center justify-between">
                      <span>Password Protection (If Protected)</span>
                      <span className="text-slate-500 lowercase">Optional</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        placeholder="Encrypted password key"
                        value={cloudPassword}
                        onChange={(e) => setCloudPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Required Services Checkboxes */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Select Required Instructions
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs font-semibold flex items-center justify-between transition-all ${
                        selectedServices.includes(srv.id)
                          ? "bg-cyan-950/80 border-cyan-400 text-cyan-200"
                          : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{srv.title}</span>
                      {selectedServices.includes(srv.id) && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                    Work Email (For Proof Delivery) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@fashionbrand.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Zara, Studio Apex, Fossil"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Instructions Note */}
              <div>
                <label className="text-xs font-mono font-bold text-slate-300 block mb-1">
                  Retouching Instructions / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Keep natural hair flyaways, clean sole scuffs, 0.5px clipping path tolerance..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Error Message Box */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Security & Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Protected by Bilateral Mutual NDA & TLS 1.3</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-3d-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting to Studio Queue...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit 5 Free Test Images</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
