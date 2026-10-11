import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      clientEmail, 
      clientCompany, 
      selectedServices, 
      turnaround, 
      activeTab, 
      cloudUrl, 
      cloudPassword, 
      instructions,
      files,
      volume,
      estimatedPrice
    } = body;

    // 1. Validation: Email
    if (!clientEmail || typeof clientEmail !== "string") {
      return NextResponse.json(
        { success: false, error: "A valid corporate or personal email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a properly formatted email address." },
        { status: 400 }
      );
    }

    // 2. Validation: Services
    if (!selectedServices || !Array.isArray(selectedServices) || selectedServices.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select at least one post-production service." },
        { status: 400 }
      );
    }

    // 3. Validation: Cloud Ingestion URL
    if (activeTab === "cloud" && (!cloudUrl || typeof cloudUrl !== "string" || cloudUrl.trim().length === 0)) {
      return NextResponse.json(
        { success: false, error: "Please provide your cloud storage link (Google Drive, Dropbox, or WeTransfer)." },
        { status: 400 }
      );
    }

    // 4. Generate unique quote reference ID (2026 Studio Standard)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const quoteId = `PIC-2026-${randomSuffix}`;

    // SLA Calculation
    let targetDelivery = "Within 24 Hours";
    if (turnaround === "rush_6h") {
      targetDelivery = "Within 6 Hours (Super Rush)";
    } else if (turnaround === "express_12h") {
      targetDelivery = "Within 12 Hours (Express)";
    }

    return NextResponse.json({
      success: true,
      quoteId,
      status: "QUEUED",
      assignedDesk: "QC Desk #07 (Dhaka Production HQ)",
      targetDelivery,
      receivedAt: new Date().toISOString(),
      summary: {
        email: clientEmail.trim(),
        company: clientCompany ? clientCompany.trim() : "Direct Client",
        services: selectedServices,
        turnaround: turnaround || "standard_24h",
        activeTab: activeTab || "direct",
        fileCount: Array.isArray(files) ? files.length : 0,
        cloudUrl: cloudUrl ? cloudUrl.trim() : null,
        volume: volume || 5,
        estimatedTotal: estimatedPrice || "$0.00 (Trial)",
      },
    });
  } catch (error: any) {
    console.error("[API /api/quote Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process quote submission. Please try again." },
      { status: 500 }
    );
  }
}
