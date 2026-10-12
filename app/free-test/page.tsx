"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  FileText,
  AlertCircle,
  X,
  Image as ImageIcon,
  Check,
  Building2,
  Mail,
  User,
  Globe
} from "lucide-react";
import { ALL_SERVICES } from "@/lib/constants";

export default function FreeTestPage() {
  const [files, setFiles] = useState<Array<{ name: string; size: string; preview: string | null }>>([]);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "Hand-Crafted Clipping Path",
    turnaround: "4 Hours (Rush Pilot)",
    instructions: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const incoming = Array.from(e.target.files);
    addFiles(incoming);
  };

  const addFiles = (newFiles: File[]) => {
    const formatted = newFiles.map(f => ({
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(2) + " MB",
      preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : null
    }));

    setFiles(prev => {
      const combined = [...prev, ...formatted].slice(0, 3);
      return combined;
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(`PICASA-PILOT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold tracking-wide uppercase shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" /> 100% Risk-Free Pilot Studio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Free Test (Up to 3 Images)
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Have a project in mind? Let us have a productive talk. Test our sub-pixel pen tool precision and human retouching before placing any commercial order. No contract or payment details required.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 md:p-14 text-center max-w-xl mx-auto space-y-6 border border-slate-200 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Trial Dispatched to Studio Desk</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name || "Valued Client"}</strong>. Your trial files have been routed to our Dhaka Production Studio. A senior QC specialist will review and return your finished files to <strong className="text-slate-900">{formData.email}</strong> within {formData.turnaround}.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 font-mono text-left">
                <div className="text-rose-700 font-bold">Pilot Order ID: {ticketId}</div>
                <div className="text-slate-500">Service: {formData.service} ({files.length} images queued)</div>
                <div className="text-emerald-600 font-bold">Estimated Delivery: &lt; {formData.turnaround}</div>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFiles([]);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  Submit Another Batch
                </button>
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white transition-colors"
                >
                  Return to Studio Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. File Upload Dropzone */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    1. Upload Trial Images (Max 3 Images)
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-rose-500 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-rose-50/30"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*,.cr2,.cr3,.nef,.arw,.dng,.psd,.tif,.tiff"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <UploadCloud className="w-12 h-12 text-rose-600 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-slate-800">
                      Click to Browse or Drag & Drop Images Here
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Supports RAW, PSD, TIFF, PNG, JPG (Up to 100MB per image)
                    </p>
                  </div>

                  {/* Queued Files Preview */}
                  {files.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {files.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                          <div className="flex items-center gap-2 truncate">
                            <ImageIcon className="w-4 h-4 text-rose-600 shrink-0" />
                            <div className="truncate">
                              <span className="font-semibold text-slate-800 block truncate">{file.name}</span>
                              <span className="text-[10px] text-slate-500">{file.size}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(idx);
                            }}
                            className="text-slate-400 hover:text-rose-600 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Service Selection & Turnaround */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Target Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      {ALL_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Priority Delivery SLA
                    </label>
                    <select
                      value={formData.turnaround}
                      onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="4 Hours (Rush Pilot)">4 Hours (Rush Pilot Desk)</option>
                      <option value="12 Hours (Standard Pilot)">12 Hours (Standard Pilot Desk)</option>
                      <option value="24 Hours (Full Shift Evaluation)">24 Hours (Full Shift Evaluation)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Contact & Business Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nordic Apparel Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Website / Portfolio
                    </label>
                    <input
                      type="text"
                      placeholder="https://brand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* 4. Retouching Brief / Instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Specific Editing Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your desired crop margin, clipping path requirements, background color (#FFFFFF or transparent), natural shadow intensity, etc."
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Protected under strict Bilateral NDA & Air-Gapped Station Security</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Dispatch Free Test Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
