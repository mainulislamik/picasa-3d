"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCalculator from "@/components/PricingCalculator";
import UploadModal from "@/components/UploadModal";
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Zap, 
  ArrowRight,
  TrendingDown
} from "lucide-react";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<any>(null);

  const handleOpenUpload = (config?: any) => {
    setModalConfig(config || null);
    setModalOpen(true);
  };

  const ENTERPRISE_TIERS = [
    {
      monthlyVolume: "500 - 2,500 Images",
      discount: "15% Off",
      sla: "12-Hour SLA",
      support: "Dedicated QC Supervisor",
      billing: "Monthly Net 15"
    },
    {
      monthlyVolume: "2,500 - 10,000 Images",
      discount: "25% Off",
      sla: "8-Hour SLA",
      support: "Dedicated 5-Artist Team",
      billing: "Monthly Net 30"
    },
    {
      monthlyVolume: "10,000+ Images",
      discount: "35% - 40% Off",
      sla: "Custom SLA & API",
      support: "Private Production Cell & Slack",
      billing: "Custom Invoicing & NDA"
    }
  ];

  const BILLING_FAQS = [
    {
      q: "How does the Free Trial work?",
      a: "Upload up to 5 representative high-resolution RAW, TIFF, or PSD files. We edit and return them within 12 to 24 hours free of charge with zero credit card required."
    },
    {
      q: "What payment methods and currencies are supported?",
      a: "We accept Wire Transfers (SWIFT / ACH), Stripe, Credit/Debit cards (Visa, MasterCard, Amex), and PayPal in USD, EUR, and GBP."
    },
    {
      q: "Are there setup fees or monthly subscription minimums?",
      a: "No. You only pay for the exact volume of images processed. There are zero software fees, zero recurring membership locks, and zero minimum order fees."
    },
    {
      q: "Can high-volume e-commerce clients receive Net 30 terms?",
      a: "Yes. Once an enterprise account passes basic credit vetting or after the initial invoice is completed, we grant Net 15 or Net 30 payment terms."
    },
    {
      q: "What is your revision and money-back guarantee?",
      a: "We offer 100% free unlimited revisions until every pixel matches your style guide. If an order cannot be corrected to your satisfaction, we refund the item in full."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar onOpenUpload={() => handleOpenUpload()} />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT SCALE-DRIVEN PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display mb-4">
            Predictable Production Rates, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              Zero Hidden Charges
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Calculate your exact project cost dynamically with volume tiers, complexity levels, and multi-currency billing.
          </p>
        </div>

        {/* Dynamic Interactive Pricing Calculator with USD, EUR, GBP */}
        <PricingCalculator onOpenUpload={(cfg) => handleOpenUpload(cfg)} />

        {/* Enterprise Volume Discount Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              High-Volume Accounts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Enterprise Retainer & Bulk Tiers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
              For high-output studios, fashion retailers, and photo agencies processing thousands of assets weekly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENTERPRISE_TIERS.map((tier, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-8 bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">TIER 0{idx + 1}</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-mono">
                      {tier.discount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {tier.monthlyVolume}
                  </h3>

                  <div className="space-y-3 mt-6 border-t border-white/5 pt-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{tier.sla}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>{tier.support}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{tier.billing}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => handleOpenUpload({ instructions: `Enterprise Tier inquiry: ${tier.monthlyVolume}` })}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/10 text-white hover:text-cyan-300 text-xs font-bold transition-all"
                  >
                    Discuss Enterprise Contract
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Billing & Payment FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Billing & Commercial FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Got specific invoicing requirements? We integrate with Coupa, Tipalti, and custom procurement systems.
            </p>
          </div>

          <div className="space-y-4">
            {BILLING_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl"
              >
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5 mb-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 pl-6.5 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <UploadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialConfig={modalConfig}
      />
    </div>
  );
}
