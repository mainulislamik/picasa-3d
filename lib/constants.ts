export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  turnaround: string;
  startingPrice: string;
  priceNum: number;
  description: string;
  features: string[];
  icon: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_3D: ServiceItem[] = [
  {
    id: "clipping",
    title: "Clipping Path & Multi-Paths",
    badge: "Sub-Pixel Hand Drawn",
    turnaround: "3h - 12h",
    startingPrice: "$0.25",
    priceNum: 0.25,
    description: "100% hand-drawn vector pen tool bezier curves. Zero fuzzy edges, zero automated AI clipping errors.",
    features: [
      "Micro-anchor placement (0.5px tolerance)",
      "Multi-path separation for color variants",
      "Compound curve isolation for intricate laces & jewelry",
      "Pure EPS/PSD paths embedded seamlessly"
    ],
    icon: "Scissors"
  },
  {
    id: "ghost-mannequin",
    title: "Ghost Mannequin & Symmetry",
    badge: "3D Hollow Effect",
    turnaround: "4h - 12h",
    startingPrice: "$0.85",
    priceNum: 0.85,
    description: "Seamless 3D hollow mannequin neck joints, inner linings, waistbands, and symmetrical drape correction.",
    features: [
      "Natural collar & hem joint blending",
      "Wrinkle reduction & fabric drape harmonization",
      "Crotch & sleeve structural alignment",
      "Shadow simulation inside collar cavity"
    ],
    icon: "Shirt"
  },
  {
    id: "high-end-retouching",
    title: "High-End Retouching & Metals",
    badge: "Editorial Grade",
    turnaround: "6h - 24h",
    startingPrice: "$1.50",
    priceNum: 1.50,
    description: "Advanced frequency separation, natural skin pore preservation, specular highlight crafting for jewelry & metals.",
    features: [
      "Non-destructive frequency separation",
      "Gemstone fire & metallic reflection cleanup",
      "Flyaway hair removal & scalp boundary blending",
      "High-end luxury leather & watch luster"
    ],
    icon: "Sparkles"
  },
  {
    id: "ecommerce-automation",
    title: "E-Commerce Batch Automation",
    badge: "High-Volume Catalog",
    turnaround: "3h - 8h",
    startingPrice: "$0.35",
    priceNum: 0.35,
    description: "Multi-marketplace bulk formatting with automated margins, pure white (#FFF) canvas, and instant web exports.",
    features: [
      "Amazon, Shopify & Farfetch compliant specs",
      "Consistent 85% canvas bounding box scaling",
      "Natural or mirrored contact drop shadows",
      "Lossless WebP, PNG & sRGB color profiles"
    ],
    icon: "ShoppingBag"
  },
  {
    id: "cgi-render-cleanup",
    title: "3D/CGI Render Cleanup & Color",
    badge: "CGI & CAD Hybrid",
    turnaround: "8h - 24h",
    startingPrice: "$2.20",
    priceNum: 2.20,
    description: "Photorealistic beauty pass enhancement, subsurface scattering cleanup, and CAD model imperfections grading.",
    features: [
      "3D render noise & artifact suppression",
      "Photorealistic lens flare & depth of field matching",
      "Exact Pantone & hex digital color grading",
      "Texture seam harmonization & normal map balance"
    ],
    icon: "Box"
  },
  {
    id: "vector-conversion",
    title: "Vector Conversion & Brand Assets",
    badge: "Clean SVG Redraws",
    turnaround: "4h - 12h",
    startingPrice: "$1.75",
    priceNum: 1.75,
    description: "Manual vectorization of low-res logos, technical schematics, and packaging die-lines into resolution-independent SVG.",
    features: [
      "Infinite resolution scaling (SVG, AI, EPS, PDF)",
      "Exact geometric arc & typography matching",
      "Print-ready CMYK spot-color separation",
      "Clean path nodes without redundant anchor bloat"
    ],
    icon: "PenTool"
  }
];

export const SERVICES_DATA = SERVICES_3D;

export const COMPARISON_CATEGORIES = [
  {
    id: "clipping",
    title: "Clipping Path & Masking",
    subtitle: "Hand-crafted bezier curves around complex shoe contours",
    beforeImage: "/wp-content/uploads/2021/01/cp_a.jpg",
    afterImage: "/wp-content/uploads/2021/01/cp_b.jpg",
    description: "Every sole traction groove, eyelet, and lace is isolated with sub-pixel pen tool precision. Transparent backgrounds with zero halo fringes.",
    tags: ["0.5px Anchor Accuracy", "Clean Alpha Channel", "Zero Edge Blurring"]
  },
  {
    id: "mannequin",
    title: "Ghost Mannequin & Symmetry",
    subtitle: "3D apparel neck-joint and inner label stitching",
    beforeImage: "/wp-content/uploads/2022/05/ghost-mannequin_A.jpg",
    afterImage: "/wp-content/uploads/2022/05/ghost-mannequin_B.jpg",
    description: "Combines front and back shots to create an invisible mannequin effect with natural interior collar perspective and shadows.",
    tags: ["Anatomical Symmetry", "Natural Collar Cavity", "Wrinkle Harmony"]
  },
  {
    id: "jewelry",
    title: "High-End Jewelry & Metal",
    subtitle: "Diamond clarity, gold luster, and dust eradication",
    beforeImage: "/wp-content/uploads/2022/06/Jewelry-Retouching-befor.jpg",
    afterImage: "/wp-content/uploads/2022/06/Jewelry-Retouching-after.jpg",
    description: "Micro-scratches and studio dust removed while preserving crisp metallic bevels, facet refraction, and luxury brilliance.",
    tags: ["Specular Highlights", "Diamond Facet Fire", "Micro-Dust Purge"]
  },
  {
    id: "color",
    title: "Reflection & Shadow Craft",
    subtitle: "Studio natural drop shadow and mirror reflection",
    beforeImage: "/wp-content/uploads/2022/05/Reflection_before.jpg",
    afterImage: "/wp-content/uploads/2022/05/Reflection_afterr.jpg",
    description: "Creates soft progressive depth-of-field floor shadows and ground plane reflections matching exact camera angle lighting.",
    tags: ["Soft Falloff", "Floor Grounding", "True Specular Fade"]
  }
];

export const COMPLEXITY_TIERS = [
  { id: "simple", title: "Simple", label: "Simple", price: 0.49, description: "Smooth curves, single subject, basic solid apparel or footwear." },
  { id: "medium", title: "Medium", label: "Medium", price: 1.25, description: "Multiple cutouts, moderate curves, ghost mannequin with inner joint." },
  { id: "complex", title: "Complex", label: "Complex", price: 2.80, description: "Bicycles, fine jewelry, transparent bottles, intricate chains." },
  { id: "super_complex", title: "Super Complex", label: "Super Complex", price: 4.90, description: "Wire mesh, loose hair, multi-subject group shots, heavy jewelry." }
];

export const SLA_TIERS = [
  { id: "standard_24h", title: "Standard 24h", description: "Standard overnight studio delivery", multiplier: 1.0, rushFeePercent: 0 },
  { id: "express_12h", title: "Express 12h", description: "High-priority morning delivery", multiplier: 1.25, rushFeePercent: 25 },
  { id: "rush_6h", title: "Super Rush 6h", description: "Ultra-fast sprint desk", multiplier: 1.5, rushFeePercent: 50 },
];

export const BULK_DISCOUNT_TIERS = [
  { min: 1, max: 49, discount: 0 },
  { min: 50, max: 199, discount: 10 },
  { min: 200, max: 999, discount: 20 },
  { min: 1000, max: Infinity, discount: 35 },
];

export const TRUST_COUNTERS = [
  { value: "12M+", label: "Assets Processed", description: "Global e-commerce imagery delivered since 2012", detail: "Global e-commerce imagery delivered since 2012" },
  { value: "99.8%", label: "On-Time SLA", description: "Guaranteed strict enterprise delivery benchmark", detail: "Guaranteed strict enterprise delivery benchmark" },
  { value: "180+", label: "Master Retouchers", description: "Full-time certified specialists in Dhaka HQ", detail: "Full-time certified specialists in Dhaka HQ" },
  { value: "45-Min", label: "Rush Available", description: "Rapid response desk for breaking campaign assets", detail: "Rapid response desk for breaking campaign assets" }
];

export const CLIENT_LOGOS = [
  { name: "MANGO", logo: "/images/clients/mango.png" },
  { name: "TRUE RELIGION", logo: "/images/clients/truereligion.png" },
  { name: "FORBES", logo: "/images/clients/forbes-logo-grey.png" },
  { name: "FOSSIL GROUP", logo: "/images/clients/fossil-group.png" },
  { name: "INC", logo: "/images/clients/inc-logo-grey.png" },
];

export const ENTERPRISE_BADGES = [
  { title: "ISO 27001 Certified Security", desc: "Enterprise data encryption and bi-lateral confidentiality" },
  { title: "Strict Bi-lateral NDA", desc: "All client assets legally protected prior to upload" },
  { title: "Dedicated 10Gbps Private FTP", desc: "Direct high-throughput pipeline for multi-gigabyte RAW archives" },
  { title: "Fortune 500 Audit Approved", desc: "Trusted by major fashion houses, luxury retailers and agencies" }
];

export const FAQ_ITEMS = [
  {
    question: "What is your standard turnaround time, and can you handle rush orders?",
    answer: "Our standard turnaround time is 12 to 24 hours for batches up to 2,000 images. For critical campaigns, we offer 12-hour Express (+25%) and 6-hour Super Rush (+50%) turnaround desks. Our 24/7 overlapping shift model ensures retouchers are working continuously across global time zones."
  },
  {
    question: "How does the Free Trial work for new enterprise clients?",
    answer: "You can upload up to 5 of your own RAW or high-resolution test files through our upload portal. No credit card is required. We process them within 3 to 6 hours according to your specific guidelines, allowing you to inspect our sub-pixel vector accuracy and frequency separation before placing a commercial order."
  },
  {
    question: "How do you protect client intellectual property and unreleased fashion lines?",
    answer: "We treat client confidentiality with bank-grade security. All work is conducted under our signed bilateral NDA. Production workstations are air-gapped from external USB drives, and files are stored on isolated, encrypted servers with strict role-based access control. Unreleased collections are auto-purged following confirmed client delivery."
  },
  {
    question: "Which file formats do you support for ingestion and delivery?",
    answer: "We support all camera RAW formats (CR2, CR3, NEF, ARW, RAF, DNG), high-resolution TIFF, layered PSD with embedded clipping paths, PNG with transparent alpha, WebP, and JPG. We deliver files layered or flattened strictly formatted to your specifications."
  },
  {
    question: "What is your revision and quality control policy?",
    answer: "Every batch passes through our 3-Tier Quality Control system: initial specialist work, senior QC vector audit, and technical specifications check. If any image deviates from your brief, we provide unlimited free revisions with priority turn-around until 100% satisfaction is achieved."
  },
  {
    question: "What payment terms and billing methods do you offer for high-volume accounts?",
    answer: "For verified volume clients and ongoing commercial studios, we provide flexible monthly invoicing (Net 15 / Net 30). We accept International Bank Wire (SWIFT), Stripe, ACH, PayPal, and all major corporate credit cards."
  }
];
