export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  badge: string;
  turnaround: string;
  startingPrice: string;
  priceNum: number;
  category: "Image Post Production" | "Creative & Vector" | "Motion & 3D" | "Digital Engineering";
  description: string;
  features: string[];
  icon: string;
  beforeImage?: string;
  afterImage?: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Works", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Test", href: "/free-test" },
  { label: "Track Order", href: "/track-order" },
  { label: "e-NDA", href: "/nda" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "clipping",
    slug: "images-cut-out",
    title: "Hand-Crafted Clipping Path",
    badge: "Starts $0.25",
    turnaround: "3h - 12h",
    startingPrice: "$0.25",
    priceNum: 0.25,
    category: "Image Post Production",
    description: "100% hand-drawn vector pen tool bezier curves with smooth anchor points. Zero fuzzy automated edges, zero jagged clipping artifacts.",
    features: [
      "Sub-pixel micro-anchor placement (0.5px tolerance)",
      "Multi-path separation for selective color & material masking",
      "Compound path curve isolation for intricate laces, bikes & jewelry",
      "Native PSD & TIFF vector clipping paths embedded seamlessly"
    ],
    icon: "Scissors",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/cutout_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/cutout.jpg"
  },
  {
    id: "ghost-mannequin",
    slug: "ghost-mannequin-service",
    title: "Ghost Mannequin & Neck Joint",
    badge: "Starts $0.65",
    turnaround: "4h - 12h",
    startingPrice: "$0.65",
    priceNum: 0.65,
    category: "Image Post Production",
    description: "Authentic 3D depth extraction combining garment front, back collar, inner tags, and symmetrical drape correction for invisible mannequin display.",
    features: [
      "Natural collar, tag, inner lining & hem joint blending",
      "Left/right anatomical fabric drape harmonization",
      "Realistic shadow projection inside the neck cavity",
      "Wrinkle reduction while preserving realistic fabric weave"
    ],
    icon: "Shirt",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/ghost_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/ghost.jpg"
  },
  {
    id: "retouching",
    slug: "retouching",
    title: "High-End Beauty & Product Retouch",
    badge: "Starts $0.80",
    turnaround: "6h - 24h",
    startingPrice: "$0.80",
    priceNum: 0.80,
    category: "Image Post Production",
    description: "Non-destructive frequency separation, specular micro-polishing for jewelry, luxury leather grading, and organic skin pore preservation.",
    features: [
      "Micro dodge & burn retaining true dermal pore integrity",
      "Diamond facet fire, gemstone brilliance & prong cleanup",
      "Fine flyaway hair eradication and hairline boundary blending",
      "Luxury metal bevel polish without synthetic plastic look"
    ],
    icon: "Sparkles",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/retouching_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/retouching.jpg"
  },
  {
    id: "background-removal",
    slug: "background-removal-service-provider",
    title: "Background Removal & Replacement",
    badge: "Starts $0.25",
    turnaround: "3h - 8h",
    startingPrice: "$0.25",
    priceNum: 0.25,
    category: "Image Post Production",
    description: "Bulk studio background extraction to transparent alpha, pure Amazon #FFFFFF white, or custom contextual lifestyle environments.",
    features: [
      "Bulk clipping for 2,000+ images/day catalog throughput",
      "Amazon, Shopify, and Google Shopping compliance",
      "Edge defringing and soft halo eradication on light backgrounds",
      "Natural contact grounding shadows preserved or generated"
    ],
    icon: "Layers",
    beforeImage: "/wp-content/uploads/2021/01/cp_a.jpg",
    afterImage: "/wp-content/uploads/2021/01/cp_b.jpg"
  },
  {
    id: "color-correction",
    slug: "color-correction",
    title: "Color Correction & Swatch Matching",
    badge: "Starts $0.45",
    turnaround: "4h - 12h",
    startingPrice: "$0.45",
    priceNum: 0.45,
    category: "Image Post Production",
    description: "Pantone, RGB/CMYK swatch matching, and precise batch color balancing across photography sets with zero color drift.",
    features: [
      "Physical color swatch and Pantone code exact matching",
      "Multi-variant recoloring from a single master shot",
      "White balance, exposure, and color temperature calibration",
      "Consistent product color fidelity across high-volume catalog runs"
    ],
    icon: "Palette",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/color_correction_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/color.jpg"
  },
  {
    id: "shadow-reflection",
    slug: "shadow-and-reflection",
    title: "Natural & Drop Shadow Creation",
    badge: "Starts $0.40",
    turnaround: "4h - 12h",
    startingPrice: "$0.40",
    priceNum: 0.40,
    category: "Image Post Production",
    description: "Realistic studio light ray projection, soft penumbras, ambient occlusion floor grounding, and glass reflection blending.",
    features: [
      "Original shadow retention & contrast restoration",
      "Custom drop, soft cast, and floating shadows",
      "Mirror and acrylic surface reflective depth simulation",
      "Progressive directional lighting falloff matching camera angle"
    ],
    icon: "Sun",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/shadow_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/shadow.jpg"
  },
  {
    id: "raster-to-vector",
    slug: "raster-to-vector",
    title: "Raster to Vector Conversion",
    badge: "Starts $1.50",
    turnaround: "4h - 12h",
    startingPrice: "$1.50",
    priceNum: 1.50,
    category: "Creative & Vector",
    description: "Manual hand vectorization of low-res logos, technical schematics, badges, artwork, and packaging die-lines into clean SVG/AI/EPS.",
    features: [
      "100% manual redrawing with geometric precision",
      "Infinite resolution scalability for billboard & print reproduction",
      "CMYK spot color separation for offset & screen printing",
      "Clean anchor curves without redundant node bloat"
    ],
    icon: "PenTool",
    beforeImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/raster_before_after.jpg",
    afterImage: "/wp-content/themes/picasalimited/assets/images/image-post-production/raster.jpg"
  },
  {
    id: "image-post-processing",
    slug: "image-post-processing-services",
    title: "Bulk E-Commerce Post-Processing",
    badge: "Starts $0.30",
    turnaround: "3h - 8h",
    startingPrice: "$0.30",
    priceNum: 0.30,
    category: "Image Post Production",
    description: "End-to-end marketplace production pipelines including standard margin sizing, aspect ratio normalization, metadata, and WebP compression.",
    features: [
      "Consistent 85% canvas bounding box scaling across 10,000+ SKUs",
      "Pure white (#FFFFFF) background standardization",
      "Multi-channel export presets (Amazon, Shopify, Farfetch, eBay)",
      "Automated file naming, EXIF metadata tagging & sRGB color profiles"
    ],
    icon: "ShoppingBag"
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Commercial Video Editing & Motion",
    badge: "Starts $25.00",
    turnaround: "12h - 48h",
    startingPrice: "$25.00",
    priceNum: 25.00,
    category: "Motion & 3D",
    description: "Cinematic commercial video post-production, color grading, pacing, sound design, and social media reels for fashion and luxury retail.",
    features: [
      "Broadcast-grade 1080p60 & 4K ProRes color grading (Rec.709/Log)",
      "High-energy commercial montage pacing and dynamic cuts",
      "Sound design, audio leveling & licensed background score mix",
      "Multi-ratio deliverables (16:9 widescreen, 9:16 vertical TikTok/Reels)"
    ],
    icon: "Video"
  },
  {
    id: "3d-cgi",
    slug: "3d",
    title: "3D Modeling & CGI Render Cleanup",
    badge: "Starts $15.00",
    turnaround: "12h - 48h",
    startingPrice: "$15.00",
    priceNum: 15.00,
    category: "Motion & 3D",
    description: "High-fidelity 3D product modeling, CAD cleanup, photorealistic texturing, and CGI beauty pass retouching for unreleased products.",
    features: [
      "Subdivision surface modeling from 2D sketches or physical samples",
      "Photorealistic PBR material shaders (metal, glass, leather, cloth)",
      "3D render noise suppression and optical flare balancing",
      "Exploded isometric views and 360-degree interactive spin assets"
    ],
    icon: "Box"
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Creative Graphic Design & Branding",
    badge: "Starts $10.00",
    turnaround: "8h - 24h",
    startingPrice: "$10.00",
    priceNum: 10.00,
    category: "Creative & Vector",
    description: "Corporate brand guidelines, marketing banners, packaging artwork, catalogs, and lookbooks crafted to enterprise visual standards.",
    features: [
      "High-converting e-commerce hero banners & promo collateral",
      "Print-ready product packaging die-lines with CMYK color management",
      "Brand identity systems, logo guidelines & corporate stationery",
      "Editorial lookbooks and interactive PDF line-sheet catalogs"
    ],
    icon: "Sparkles"
  },
  {
    id: "web-development",
    slug: "web-development-service",
    title: "High-Performance Web Development",
    badge: "Starts $150.00",
    turnaround: "3 - 7 Days",
    startingPrice: "$150.00",
    priceNum: 150.00,
    category: "Digital Engineering",
    description: "Next.js, React, headless Shopify, and bespoke e-commerce store engineering optimized for sub-second Core Web Vitals and SEO dominance.",
    features: [
      "Decoupled Next.js / React full-stack architectures",
      "Headless e-commerce integration with Shopify & WooCommerce",
      "100/100 Google Lighthouse Core Web Vitals performance tuning",
      "Enterprise security, SSL hardening, and automated CI/CD pipelines"
    ],
    icon: "Zap"
  }
];

export const SERVICES_3D = ALL_SERVICES.slice(0, 6);
export const SERVICES_DATA = ALL_SERVICES;

export const COMPARISON_CATEGORIES = [
  {
    id: "clipping",
    title: "Clipping Path & Cut Out",
    subtitle: "100% hand-drawn vector pen tool bezier curves with zero edge halos",
    beforeImage: "/wp-content/uploads/2021/01/cp_b.jpg",
    afterImage: "/wp-content/uploads/2021/01/cp_a.jpg",
    description: "Every sole traction groove, eyelet, and lace is isolated with 0.5px sub-pixel pen tool precision. Transparent backgrounds with zero halos.",
    tags: ["0.5px Pen Accuracy", "Embedded PSD Path", "Starts $0.25"]
  },
  {
    id: "ghost",
    title: "Ghost Mannequin / Neck Joint",
    subtitle: "Authentic 3D depth extraction combining garment front & back collar",
    beforeImage: "/wp-content/uploads/2021/01/neck_a.jpg",
    afterImage: "/wp-content/uploads/2021/01/neck_b.jpg",
    description: "Seamless 3D invisible mannequin neckline joints, symmetrical fabric drape alignment, and natural collar cavity shadow projection.",
    tags: ["3D Neck Joint", "Symmetrical Drape", "Starts $0.65"]
  },
  {
    id: "bg-remove",
    title: "Background Removal & Replacement",
    subtitle: "Pixel-perfect subject extraction on pure #FFFFFF Amazon/eBay canvas",
    beforeImage: "/wp-content/uploads/2022/05/ghost-mannequin_B.jpg",
    afterImage: "/wp-content/uploads/2022/05/ghost-mannequin_A.jpg",
    description: "Precision extraction of complex apparel, preserving sheer fabrics, fine hem fringes, and subtle edge lighting.",
    tags: ["Zero Color Spill", "Alpha Channel Mask", "Starts $0.25"]
  },
  {
    id: "retouch-fashion",
    title: "Fashion & Lookbook Retouch",
    subtitle: "Non-destructive frequency separation and realistic skin pore texture",
    beforeImage: "/wp-content/uploads/2021/01/lookbook_1_b.jpg",
    afterImage: "/wp-content/uploads/2021/01/lookbook_1_a.jpg",
    description: "Micro-blemishes and studio fabric wrinkles eliminated while preserving natural skin pores, specular highlights, and textile drape.",
    tags: ["Dermal Pore Retained", "Editorial Finish", "Starts $0.80"]
  },
  {
    id: "retouch-jewelry",
    title: "Jewelry & Luxury Retouching",
    subtitle: "Micro-dust elimination, facet sparkle and specular highlight polish",
    beforeImage: "/wp-content/uploads/2022/06/Jewelry-Retouching-befor.jpg",
    afterImage: "/wp-content/uploads/2022/06/Jewelry-Retouching-after.jpg",
    description: "Workbench scratches and micro-dust specks polished away without softening facet edges, prong claws, or gemstone refraction.",
    tags: ["Zero Micro-Dust", "Facet Brilliance", "Starts $1.20"]
  },
  {
    id: "shadow",
    title: "Natural & Drop Shadow",
    subtitle: "Realistic studio light ray projection and mirror reflection blending",
    beforeImage: "/wp-content/uploads/2021/01/reflection_4_a.jpg",
    afterImage: "/wp-content/uploads/2021/01/reflection_4_b.jpg",
    description: "Creates soft progressive depth-of-field floor shadows and ground plane reflections matching exact camera angle lighting.",
    tags: ["Progressive Penumbra", "Ground Plane Contact", "Starts $0.40"]
  },
  {
    id: "raster",
    title: "Raster to Vector Redraw",
    subtitle: "Infinite resolution manual vectorization into clean SVG & AI",
    beforeImage: "/wp-content/uploads/2021/01/vector_a.jpg",
    afterImage: "/wp-content/uploads/2021/01/vector_b.jpg",
    description: "Hand-traced geometric precision vector files ready for large format print, embroidery, CNC cutting, and digital publication.",
    tags: ["Infinite Scaling", "CMYK Spot Ready", "Starts $1.50"]
  }
];

export const COMPLEXITY_TIERS = [
  { id: "simple", title: "Simple", label: "Simple", price: 0.25, description: "Smooth curves, single subject, basic solid apparel or footwear." },
  { id: "medium", title: "Medium", label: "Medium", price: 0.65, description: "Multiple cutouts, moderate curves, ghost mannequin with inner joint." },
  { id: "complex", title: "Complex", label: "Complex", price: 1.50, description: "Bicycles, fine jewelry, transparent bottles, intricate chains." },
  { id: "super_complex", title: "Super Complex", label: "Super Complex", price: 2.80, description: "Wire mesh, loose hair, multi-subject group shots, heavy jewelry." }
];

export const SLA_TIERS = [
  { id: "standard_24h", title: "Standard 24h", description: "Standard studio delivery", multiplier: 1.0, rushFeePercent: 0 },
  { id: "express_12h", title: "Express 12h (1000+ Images)", description: "Overnight priority morning delivery", multiplier: 1.25, rushFeePercent: 25 },
  { id: "rush_4h", title: "Rush Desk (4-6h)", description: "Ultra-fast sprint pilot desk", multiplier: 1.5, rushFeePercent: 50 },
];

export const BULK_DISCOUNT_TIERS = [
  { min: 1, max: 49, discount: 0 },
  { min: 50, max: 199, discount: 10 },
  { min: 200, max: 499, discount: 20 },
  { min: 500, max: Infinity, discount: 30 },
];

export const TRUST_COUNTERS = [
  { value: "2,000+", label: "Images Daily Capacity", description: "High-throughput dedicated production line", detail: "Processed by 120+ full-time specialists in Dhaka HQ" },
  { value: "1,000+", label: "In 12 Hours", description: "Guaranteed express overnight turnaround SLA", detail: "Overnight delivery benchmark for US & European retail" },
  { value: "120+", label: "Full-Time Family", description: "Founded in 2016, continuous organic scaling", detail: "In-house master retouchers, vector artisans & QA leads" },
  { value: "24/5", label: "Dedicated Support", description: "Direct access via Email, Phone & WhatsApp", detail: "Continuous studio coverage across global enterprise timezones" }
];

export const CLIENT_LOGOS = [
  { name: "MANGO", logo: "/images/clients/mango.png" },
  { name: "TRUE RELIGION", logo: "/images/clients/truereligion.png" },
  { name: "FORBES", logo: "/images/clients/forbes-logo-grey.png" },
  { name: "FOSSIL GROUP", logo: "/images/clients/fossil-group.png" },
  { name: "INC", logo: "/images/clients/inc-logo-grey.png" },
];

export const ENTERPRISE_BADGES = [
  { title: "2016 Foundation Heritage", desc: "10+ years of high-volume catalog processing for global retailers" },
  { title: "Strict Bi-lateral NDA", desc: "All client assets legally protected prior to upload with air-gapped security" },
  { title: "Up to 30% Bulk Discount", desc: "Aggressive tiered savings on volume batches and ongoing campaigns" },
  { title: "100% Hand-Crafted Guarantee", desc: "Zero automated AI shortcuts — authentic human craftsmanship and QA" }
];

export const FAQ_ITEMS = [
  {
    question: "What is your daily capacity and turnaround time?",
    answer: "We process over 2,000 images per day with the capability to deliver 1,000+ images in under 12 hours. For standard batches, our delivery window is 12 to 24 hours. For urgent commercial campaigns, our 4 to 6-hour rush desk handles high-priority sprints."
  },
  {
    question: "How does the Free Test work for new clients?",
    answer: "You can submit up to 3 of your own raw images via our Free Test portal without any credit card or commercial commitment. We process and return them within 4 hours so you can inspect our hand-drawn vector accuracy and quality before signing an agreement."
  },
  {
    question: "What are your starting prices and bulk discounts?",
    answer: "Our prices start from $0.25 per image for clipping paths and background removal, $0.65 for ghost mannequin, and $0.80 for high-end retouching. We offer progressive bulk discounts up to 30% on high-volume catalog orders."
  },
  {
    question: "How do you protect unreleased product photos and intellectual property?",
    answer: "We operate under strict bilateral Non-Disclosure Agreements (e-NDA). Our Dhaka production facility utilizes isolated workstations with disabled external storage drives, encrypted cloud transit, and automated 30-day data purge protocols."
  },
  {
    question: "Which file formats do you accept and deliver?",
    answer: "We support all camera RAW formats (CR2, CR3, NEF, ARW, DNG), layered TIFF, PSD with embedded hand-drawn clipping paths, transparent PNG, WebP, and JPG formatted precisely to your e-commerce requirements."
  },
  {
    question: "Where is Picasa Limited located and how can I contact you?",
    answer: "Our global production studio is located at Level-5, B-3, Block-E, Zakir Hossain Road, Mohammadpur, Dhaka, Bangladesh. We offer 24/5 customer support via email at contact@picasalimited.com and direct phone/WhatsApp at +880 1717-833075."
  }
];

export const STUDIO_CONTACT = {
  address: "Level-5, B-3, Block-E, Zakir Hossain Road, Mohammadpur, Dhaka, Bangladesh",
  email: "contact@picasalimited.com",
  phone: "+880 1717-833075",
  whatsapp: "+880 1717-833075",
  hours: "24/5 Production Schedule (Dhaka HQ UTC+6)"
};

/* ========================================================
   ENTERPRISE PRODUCTION PIPELINE & CONVERTING BUSINESS SPEC
   (100% Original, Technical, SLA-Driven for Picasa Limited)
   ======================================================== */

export interface PipelineStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  technicalDetails: string[];
  icon: string;
}

export const PRODUCTION_PIPELINE_STEPS: PipelineStep[] = [
  {
    step: "Stage 01",
    number: "01",
    title: "Secure Intake & Automated MD5 Scan",
    subtitle: "Air-gapped staging & automated checksum validation",
    duration: "< 15 Mins",
    description: "Submit RAW or raster assets via direct SFTP, Amazon S3 bucket, Aspera, Dropbox Business, or our web portal. Every file receives an MD5 checksum verification to ensure zero data corruption.",
    technicalDetails: [
      "Dedicated client-specific encrypted staging folder",
      "Automated resolution, DPI, and color space integrity audit",
      "Instant intake confirmation receipt and SLA countdown start",
      "Immediate bi-lateral Non-Disclosure Agreement (NDA) coverage"
    ],
    icon: "UploadCloud"
  },
  {
    step: "Stage 02",
    number: "02",
    title: "Custom Spec Sheet & Station Allocation",
    subtitle: "Assigned to specialized master production desks",
    duration: "< 20 Mins",
    description: "Our shift supervisor reviews your technical guidelines (e.g., pure white RGB 255, 85% frame fill, drop shadow angle, or multi-path naming) and dispatches assets to specialized artist pods.",
    technicalDetails: [
      "Domain-specific team allocation (Apparel, Luxury Jewelry, Beauty)",
      "Strict guideline synchronization across all shift artists",
      "Color profile calibration against client master swatch targets",
      "Real-time batch tracking ID generated for client visibility"
    ],
    icon: "Sliders"
  },
  {
    step: "Stage 03",
    number: "03",
    title: "Sub-Pixel Hand Crafting & Layering",
    subtitle: "100% human pen-tool artisans in Dhaka HQ",
    duration: "2h - 8h Active",
    description: "Our 120+ full-time specialists execute meticulous Adobe Photoshop work: 0.5px hand-drawn vector paths, non-destructive frequency separation, symmetrical collar joints, and realistic shadow drops.",
    technicalDetails: [
      "Hand-drawn Bezier curves with 0.5px interior feather compensation",
      "Multi-frequency dermal texture isolation for organic skin pores",
      "Ghost mannequin anatomical neck joint stitching and inner tag alignment",
      "Zero automated AI haloing, zero blurred boundary artifacts"
    ],
    icon: "PenTool"
  },
  {
    step: "Stage 04",
    number: "04",
    title: "Dual-Monitor Senior QC Review",
    subtitle: "500% Loupe Pixel Audit before sign-off",
    duration: "< 30 Mins",
    description: "Every image undergoes rigorous dual-monitor inspection by dedicated Quality Control Leads with 8+ years of post-production experience. Discrepancies are flagged and corrected before delivery.",
    technicalDetails: [
      "500% zoom audit on high-contrast black/white inspection mats",
      "Marketplace compliance check (Amazon, Shopify, Farfetch, Google)",
      "Alpha channel transparency and fringe edge verification",
      "100% satisfaction guarantee with immediate complimentary revisions"
    ],
    icon: "ShieldCheck"
  },
  {
    step: "Stage 05",
    number: "05",
    title: "Encrypted Dispatch & Consolidated Billing",
    subtitle: "Instant cloud delivery & flexible payment terms",
    duration: "Immediate",
    description: "Processed files are packaged in your exact required directory hierarchy and synchronized back to your SFTP, S3, or Dropbox. Enterprise accounts enjoy monthly consolidated invoicing with NET-15/NET-30 terms.",
    technicalDetails: [
      "Delivery in multi-format packages (Layered PSD, sRGB WebP, PNG, JPG)",
      "Automated webhook notifications or instant email dispatch link",
      "Flexible payment: Pay-as-you-go, or consolidated monthly invoice",
      "Supported corporate payment rails: Bank Wire, ACH, Wise, Payoneer, Stripe"
    ],
    icon: "CheckCircle2"
  }
];

export const TRANSFER_PROTOCOLS = [
  {
    name: "Dedicated SFTP / FTP Server",
    type: "High-Volume Automation",
    badge: "Enterprise Recommended",
    description: "Direct server-to-server file synchronization with dedicated high-speed bandwidth. Ideal for studios processing 500+ assets daily.",
    features: ["Custom client credentials", "Automated batch pickup/drop", "Zero file size ceiling", "TLS 1.3 encrypted"]
  },
  {
    name: "Amazon AWS S3 Bucket",
    type: "Cloud Native Storage",
    badge: "Direct Cloud Sync",
    description: "Direct IAM role integration with your AWS S3 storage for seamless e-commerce pipeline automation without manual re-uploading.",
    features: ["Cross-account IAM policy", "Instant bucket webhook triggers", "Zero egress throttling", "Multi-region redundancy"]
  },
  {
    name: "Dropbox Business & Google Workspace",
    type: "Collaborative Drive",
    badge: "Instant Shared Folder",
    description: "Simply share a project folder with our dispatch desk. We pick up RAW files and drop retouched deliverables directly into your organized folders.",
    features: ["Frictionless team sharing", "Version history tracking", "Mobile & desktop sync", "No technical setup required"]
  },
  {
    name: "Aspera & WeTransfer Enterprise",
    type: "Accelerated UDP Transfer",
    badge: "Ultra-Fast Delivery",
    description: "IBM Aspera high-speed transfer or WeTransfer Enterprise links for multi-gigabyte commercial RAW packages and video projects.",
    features: ["Up to 100x FTP transfer speed", "Packet-loss resilient", "Instant link delivery", "Long-term archive links"]
  }
];

export const ENTERPRISE_BILLING_TERMS = [
  {
    id: "free-trial",
    title: "Zero-Risk Production Trial",
    badge: "Free (Up to 3 Images)",
    priceDesc: "$0.00 Initial Investment",
    turnaround: "Under 4 Hours",
    description: "Experience our sub-pixel hand craftsmanship firsthand with zero commercial commitment or credit card required.",
    features: [
      "Submit up to 3 of your own complex test images",
      "Complete technical specification review and feedback",
      "Layered master PSD and web deliverables returned",
      "Comprehensive turnaround and volume quote within 45 minutes"
    ],
    ctaText: "Start Free 3-Image Test",
    ctaLink: "/free-test",
    highlight: false
  },
  {
    id: "pay-as-you-go",
    title: "Pay-As-You-Go Batches",
    badge: "Flexible / No Minimums",
    priceDesc: "From $0.25 / Image",
    turnaround: "12h - 24h Guaranteed",
    description: "Perfect for independent photographers, boutique brands, and seasonal campaigns with fluctuating image volumes.",
    features: [
      "No monthly minimum contract or subscription required",
      "Transparent per-image pricing with instant quote preview",
      "Standard 24-hour delivery with 6-hour rush desk available",
      "Instant payment via Credit Card, Stripe, or PayPal"
    ],
    ctaText: "Calculate Instant Quote",
    ctaLink: "/pricing",
    highlight: false
  },
  {
    id: "monthly-invoiced",
    title: "Consolidated Monthly Invoicing",
    badge: "Enterprise Standard",
    priceDesc: "NET-15 / NET-30 Terms",
    turnaround: "Priority 3-Shift Queue",
    description: "Designed for high-volume retail catalogs, global agency partners, and continuous production photography studios.",
    features: [
      "Consolidated monthly statement itemized by project & SKU",
      "NET-15 or NET-30 payment terms upon credit approval",
      "Dedicated Senior Lead Artist and dedicated SFTP account",
      "Payment via Bank Wire (SWIFT/ACH), Wise, Payoneer, or Corporate Card"
    ],
    ctaText: "Open Corporate Account",
    ctaLink: "/contact",
    highlight: true
  }
];

export const GLOBAL_OFFICES = [
  {
    region: "Global Production Master Studio",
    location: "Dhaka, Bangladesh",
    address: "Level-5, B-3, Block-E, Zakir Hossain Road, Mohammadpur, Dhaka 1207",
    capacity: "120+ In-House Specialists · Tri-Shift 24/5 Production",
    connectivity: "Dual Redundant Gigabit Fiber · Uninterruptible Power Supply (UPS)",
    contact: "studio@picasalimited.com · +880 1717-833075",
    isHQ: true
  },
  {
    region: "North America Client Desk",
    location: "New York, NY, USA",
    address: "Manhattan Client Coordination & Account Management",
    capacity: "Enterprise SLA Management & Photographic Art Direction",
    connectivity: "Direct EST / CST Working Hours Coverage",
    contact: "us-accounts@picasalimited.com",
    isHQ: false
  },
  {
    region: "European Liaison Desk",
    location: "London, United Kingdom",
    address: "Mayfair Client Services & Retail Catalog Ingestion",
    capacity: "E-Commerce Standards Advisory & Corporate Invoicing",
    connectivity: "Direct GMT / CET Working Hours Coverage",
    contact: "eu-accounts@picasalimited.com",
    isHQ: false
  }
];
