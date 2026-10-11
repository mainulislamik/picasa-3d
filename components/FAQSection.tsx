"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  RotateCcw,
  FileText
} from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>TRANSPARENCY & POLICIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Everything you need to know about SLAs, trial batches, confidentiality NDAs, and production turnarounds.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-2 border-cyan-500 shadow-md ring-2 ring-cyan-500/10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-700 font-bold opacity-80">
                      0{idx + 1}.
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-600 text-white" : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Support Help Pill */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Have a custom requirement or need an API integration?{" "}
            <a
              href="mailto:production@picasalimited.com"
              className="text-cyan-700 underline hover:text-cyan-800 font-bold"
            >
              Contact our Senior Studio Lead directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
