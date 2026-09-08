export type FeaturedFitout = {
  slug: string;
  name: string;
  category: string;
  img: string;
  intro: string;
  description: string;
  gallery: string[];
  subcategory?: string;
  location?: string;
  executionTime?: string;
  scopeOfWork?: string[];
  projectScale?: string;
};

export const featuredFitouts: FeaturedFitout[] = [
  {
    slug: "safari-bags",
    name: "SAFARI BAGS",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "/images/safari-bags-showroom.jpg",
    intro: "Flagship retail showroom fit-out with bespoke modular luggage gondolas, custom backlit display fixtures, and perimeter bag wall displays.",
    description: "An exclusive retail fit-out for Safari Bags showcasing end-to-end turnkey manufacturing and fit-out execution. Features precision laser-cut metal shelving, powder-coated display racks, premium wooden center island fixtures, anti-glare recessed ceiling spotlights, and seamless customer circulation designed specifically for luggage and travel bag collections.",
    gallery: [
      "/images/safari-bags-showroom.jpg",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "1,850 Sq.Ft",
    scopeOfWork: [
      "Modular Powder-Coated Metal Luggage Racks",
      "Bespoke Wooden Center Island Gondolas",
      "Perimeter Wall Bag Display Shelving with Concealed LED",
      "High-Lux 4000K Retail Track & Spot Lighting",
      "Heavy-Duty Cash Counter & POS Joinery",
      "Illuminated 3D Acrylic Brand Signage Frontage"
    ]
  },
  {
    slug: "world-of-titan-flagship",
    name: "WORLD OF TITAN FLAGSHIP STORE",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2070&auto=format&fit=crop",
    intro: "Iconic flagship timepiece showroom featuring solid mahogany watch display counters, leather strap discovery bars, and precision optical spotlighting.",
    description: "An authentic Indian heritage watch showroom combining rich dark mahogany woodwork, anti-reflective optical glass showcases, dedicated Titan Edge & automatic watch presentation islands, and integrated after-sales service counter.",
    gallery: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "2,800 Sq.Ft",
    scopeOfWork: [
      "Bespoke Dark Mahogany Watch Vitrine Joinery",
      "Extra-Clear Optical Museum Glass Counter Displays",
      "Anti-Glare 4000K Focused Timepiece Spotlighting",
      "Technical Service & Watch Strap Adjustment Counter",
      "High-Traffic Commercial Polished Marble Flooring",
      "Illuminated Dimensional 3D Brand Signage Canopy"
    ]
  },
  {
    slug: "zen-residence",
    name: "ZEN RESIDENCE",
    category: "RESIDENTIAL",
    subcategory: "FAMILY LOUNGE / MAJLIS",
    location: "New Delhi, India",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    intro: "Warm residential makeover shaped for quiet luxury and practical daily comfort.",
    description: "A premium home interior with layered lighting, custom storage, calm material palettes, and carefully finished living zones.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "60 Days",
    projectScale: "5,400 Sq.Ft",
    scopeOfWork: [
      "Custom Majlis Seating Carpentry",
      "Double-Height Ceiling Civil Work",
      "Ambient Lighting Controls",
      "Handmade Wooden Partition Walls",
      "Premium Marble Flooring",
      "Full HVAC Distribution Modifications"
    ]
  },
  {
    slug: "metro-headquarters",
    name: "METRO HEADQUARTERS",
    category: "OFFICE",
    subcategory: "OFFICES",
    location: "Noida Sector 62, India",
    img: "/images/metro-headquarters-fitout.jpg",
    intro: "Corporate workspace fitout built for focus, meetings, and brand clarity.",
    description: "A high-performance office environment combining executive rooms, open workspaces, acoustic planning, and polished reception areas.",
    gallery: [
      "/images/metro-headquarters-fitout.jpg",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "75 Days",
    projectScale: "12,000 Sq.Ft",
    scopeOfWork: [
      "High-Acoustic Glass Partitions",
      "Structural Server Racks & Data Cabling",
      "Integrated Linear Ceiling Lighting",
      "Bespoke Executive Boardroom Carpentry",
      "Multi-Zone HVAC Engineering",
      "Fire Detection & Suppression Systems"
    ]
  },
  {
    slug: "noir-brasserie",
    name: "NOIR BRASSERIE",
    category: "RETAIL",
    subcategory: "F & B",
    location: "Gurugram Sector 44, India",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    intro: "Atmospheric restaurant fitout with warm dining zones and premium finishes.",
    description: "A hospitality interior designed around guest comfort, service flow, textured finishes, custom seating, and inviting lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "50 Days",
    projectScale: "4,100 Sq.Ft",
    scopeOfWork: [
      "Commercial Grade Kitchen Plumbing",
      "Specialized Grease Trap Civil Installation",
      "In-House Leather Booth Carpentry",
      "Custom Overhead Steel Racks",
      "High-Capacity Kitchen Hood Exhausts",
      "Dimmable Scenographic Lighting"
    ]
  },
  {
    slug: "apple-innovation",
    name: "APPLE INNOVATION FLAGSHIP STORE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern Apple flagship experience center featuring solid Canadian maple demonstration tables, terrazzo flooring, and frameless glass facade.",
    description: "Turnkey Apple retail experience space with concealed beneath-floor data/power cabling, acoustic wood ceiling baffles, laser-cut metallic security fixtures, and seamless point-of-sale mobility.",
    gallery: [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "40 Days",
    projectScale: "3,200 Sq.Ft",
    scopeOfWork: [
      "Ultra-White Solid Wood & Corian Display Desks",
      "Concealed Under-Floor Smart Power & Data Grids",
      "Seamless Terrazzo Micro-Topping Flooring",
      "High-Lux 4500K True-CRI Architectural Lighting",
      "Acoustic Wood Slat Ceiling Baffles",
      "High-Security Gadget Alarm Tethering Systems"
    ]
  },
  {
    slug: "lumina-cafe",
    name: "LUMINA CAFE",
    category: "RETAIL",
    subcategory: "F & B",
    location: "South-West Delhi, India",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop",
    intro: "Cafe and lounge interior tuned for relaxed seating and memorable ambience.",
    description: "A compact hospitality fitout combining comfortable circulation, layered seating, service practicality, and a bright social mood.",
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "35 Days",
    projectScale: "1,800 Sq.Ft",
    scopeOfWork: [
      "Custom Timber Countertop Fabrication",
      "Exposed Brick Wall Cladding",
      "Low-Noise HVAC Ducting",
      "Espresso Machine High-Load Circuits",
      "Steel Glass Window Framing",
      "Epoxy Resin Floor Overlay"
    ]
  },
  {
    slug: "aurora-penthouse",
    name: "AURORA PENTHOUSE",
    category: "RESIDENTIAL",
    subcategory: "LIVING & DINING",
    location: "Noida Sector 18, India",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    intro: "Penthouse makeover with refined living spaces and custom residential detailing.",
    description: "A residential transformation balancing premium materials, custom millwork, scenic openness, and quiet everyday function.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "70 Days",
    projectScale: "6,200 Sq.Ft",
    scopeOfWork: [
      "Custom Backlit TV Wall Console",
      "Imported Greek Marble Floors",
      "Automated Curtain Civil Niches",
      "Luxury False Ceiling Installation",
      "HVAC Diffuser Redirection",
      "Handmade Wooden Wardrobes"
    ]
  },
  {
    slug: "nexus-boardroom",
    name: "NEXUS BOARDROOM",
    category: "OFFICE",
    subcategory: "OFFICES",
    location: "South Delhi, India",
    img: "/images/nexus-boardroom-fitout.jpg",
    intro: "Executive boardroom and meeting suite with clean commercial detailing.",
    description: "A focused corporate setting with high-quality tables, lighting, acoustic control, and a polished presentation-ready atmosphere.",
    gallery: [
      "/images/nexus-boardroom-fitout.jpg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "30 Days",
    projectScale: "1,500 Sq.Ft",
    scopeOfWork: [
      "Custom 16-Seat Mahogany Board Table",
      "Double-Glazed Soundproof Glass Walls",
      "Acoustic Fabric Wall Panels",
      "Under-Floor Cable Routing System",
      "Smart Projection AV Integration",
      "Dimmable Architectural Spotlights"
    ]
  },
  {
    slug: "nova-clinic",
    name: "NOVA SKINCARE CLINIC",
    category: "OFFICE",
    subcategory: "CLINICS",
    location: "South-East Delhi, India",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2074&auto=format&fit=crop",
    intro: "A luxurious aesthetic and clinical sanctuary built with seamless sanitary surfaces.",
    description: "A premier dermatological center featuring custom curved carpentry, premium marble details, and calming indirect ambient lighting zones.",
    gallery: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "55 Days",
    projectScale: "3,800 Sq.Ft",
    scopeOfWork: [
      "Sanitary Grade Solid Countertops",
      "Curved Gypsum Partition Walls",
      "Clinical Water Supply Plumbing",
      "HEPA Air Filtration MEP Setup",
      "Bespoke Backlit Vanity Mirrors",
      "Healthcare Authority Approvals Support"
    ]
  },
  {
    slug: "aura-dental-wellness-clinic",
    name: "AURA DENTAL & WELLNESS CLINIC",
    category: "OFFICE",
    subcategory: "CLINICS",
    location: "Defence Colony, New Delhi",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    intro: "State-of-the-art dental and wellness center featuring seamless Corian surfaces, hygienic curved partitions, and private treatment suites.",
    description: "A modern medical clinic interior prioritizing patient comfort, sterile cleanliness, and intuitive workflow. Equipped with custom Corian floating cabinetry, concealed medical gas and suction pipelines, acoustic glass consultation cabins, and calming indirect biodynamic lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "40 Days",
    projectScale: "2,900 Sq.Ft",
    scopeOfWork: [
      "Seamless Anti-Microbial Corian Countertops",
      "Concealed Medical Grade Air & Suction Piping",
      "Acoustic Double-Glazed Doctor Consultation Pods",
      "Medical Grade Negative-Pressure HVAC Ducting",
      "Touchless Sensor Handwash Vanity Units",
      "Radiation-Shielded X-Ray & Imaging Enclosures"
    ]
  },
  {
    slug: "zenith-aesthetic-dermatology",
    name: "ZENITH AESTHETIC & DERMATOLOGY",
    category: "OFFICE",
    subcategory: "CLINICS",
    location: "South Point Mall, Golf Course Road, Gurugram",
    img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070&auto=format&fit=crop",
    intro: "Luxury aesthetic dermatology clinic combining warm organic oak finishes, fluted reception architecture, and private laser therapy suites.",
    description: "An elevated aesthetic medicine clinic designed to feel like a high-end luxury sanctuary rather than a cold clinical environment. Features fluted oak wood paneling, Calacatta marble reception desk, indirect circadian lighting, specialized laser room HVAC ventilation, and hermetic treatment room doors.",
    gallery: [
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "48 Days",
    projectScale: "3,400 Sq.Ft",
    scopeOfWork: [
      "Bespoke Fluted Oak & Marble Reception Desk",
      "Laser & Treatment Room Specialized Cooling Systems",
      "Sound-Isolated Privacy Treatment Cabins",
      "Integrated Dimmable Soft Ambiance LED Strips",
      "Sanitary Solid Surface Treatment Workstations",
      "HEPA Filtration & High-Capacity Odor Extraction"
    ]
  },
  {
    slug: "apex-specialist-consultation-suites",
    name: "APEX SPECIALIST CLINIC & DIAGNOSTICS",
    category: "OFFICE",
    subcategory: "CLINICS",
    location: "Greater Kailash 1, New Delhi",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop",
    intro: "Multi-specialty outpatient diagnostic and consultation center with streamlined patient flow and ergonomic doctor suites.",
    description: "A comprehensive turnkey clinical interior including private consultation rooms, blood collection laboratory, ultra-hygienic waiting lounge, and back-office administrative hubs. Built with non-porous vinyl flooring, custom nurse stations, and integrated emergency nurse-call systems.",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "50 Days",
    projectScale: "4,500 Sq.Ft",
    scopeOfWork: [
      "Modular Nurse Station & Triage Joinery",
      "Anti-Bacterial Seamless Commercial Vinyl Flooring",
      "Full MEP Plumbing & Drainage for Sinks in Every Suite",
      "Centralized Emergency Nurse Call & Power Backup",
      "Durable Laminated Doctor Desk & Exam Table Joinery",
      "Acoustic Gypsum Partitions with Mineral Wool Infill"
    ]
  },
  {
    slug: "iron-gym",
    name: "IRON & CO. GYM",
    category: "OFFICE",
    subcategory: "GYMS",
    location: "North Delhi, India",
    img: "/images/iron-gym-fitout.jpg",
    intro: "Premium athletic environment with custom soundproof partitions.",
    description: "An elite gym facility combining heavy-duty flooring compounds, dynamic overhead steel racks, and masterfully tuned training areas.",
    gallery: [
      "/images/iron-gym-fitout.jpg",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "45 Days",
    projectScale: "7,500 Sq.Ft",
    scopeOfWork: [
      "Acoustic Rubber Underlayment Flooring",
      "Overhead Heavy-Duty Steel Joists",
      "High-Volume Air Extraction Ducts",
      "Locker Room Showers & Plumbing",
      "Unbreakable Glass Mirror Walls",
      "Sound-Isolated Spinning Studios"
    ]
  },
  {
    slug: "equinox-elite-performance-club",
    name: "EQUINOX ELITE FITNESS CLUB",
    category: "OFFICE",
    subcategory: "GYMS",
    location: "Golf Course Road, Gurugram",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    intro: "Luxury commercial fitness club fitted with acoustic rubber shock-absorbing flooring, custom lighting grids, and strength training zones.",
    description: "A high-performance athletic fitness club featuring specialized heavy-duty vibration-dampening flooring, custom black powder-coated steel storage gantries, acoustic baffle ceiling installations, high-volume air exchanges, and premium wellness recovery zones.",
    gallery: [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "50 Days",
    projectScale: "9,200 Sq.Ft",
    scopeOfWork: [
      "High-Density Shock-Absorbent Rubber Flooring",
      "Overhead Linear Architectural LED Grids",
      "Custom Powder-Coated Metal Rig Joists & Racks",
      "High-Capacity Variable-Speed Air Extraction Ducts",
      "Shatter-Resistant Floor-to-Ceiling Mirrors",
      "Luxury Spa-Grade Locker Rooms & Wet Areas"
    ]
  },
  {
    slug: "pulse-boutique-athletic-studio",
    name: "PULSE BOUTIQUE ATHLETIC STUDIO",
    category: "OFFICE",
    subcategory: "GYMS",
    location: "Chanakyapuri, New Delhi",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop",
    intro: "Boutique functional conditioning facility featuring artificial turf sprint tracks, custom steel rigs, and immersive soundscapes.",
    description: "An intimate, boutique performance studio engineered for high-intensity functional training and personal coaching. Incorporates high-impact sprint turf lanes, sound-isolated acoustic wall panels, custom timber locker joinery, and scenographic low-glare training lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "38 Days",
    projectScale: "5,800 Sq.Ft",
    scopeOfWork: [
      "High-Traffic Synthetic Sled Turf Installation",
      "Acoustic Wall Paneling with Sub-Bass Isolation",
      "Bespoke Oak Wood Locker Room Joinery",
      "Integrated Dimmable RGB & 3000K Lighting Automation",
      "Structural Ceiling Anchors for Suspension Rigs",
      "Touchless Sensor Sanitary & Shower Plumbing"
    ]
  },
  {
    slug: "sleek-salon",
    name: "SLEEK & CO. SALON",
    category: "OFFICE",
    subcategory: "SALONS",
    location: "Noida Sector 52, India",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
    intro: "Boutique hair styling lounge with premium mirrors and rosewood paneling.",
    description: "A premium cosmetology suite with integrated floor-to-ceiling mirror islands, comfortable hydraulic seating, and modern hair wash columns.",
    gallery: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "1,200 Sq.Ft",
    scopeOfWork: [
      "Rosewood Feature Wall Veneers",
      "Integrated Hair Basin Plumbing Grids",
      "Custom Hydraulic Vanity Stations",
      "Specialized Task Spotlighting",
      "Ventilation & Odor Mitigation Fans",
      "Premium Tile Backsplash Civil Work"
    ]
  },
  {
    slug: "velvet-atelier-beauty-spa",
    name: "THE VELVET ATELIER & BEAUTY SPA",
    category: "OFFICE",
    subcategory: "SALONS",
    location: "Khan Market, New Delhi",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop",
    intro: "Haute cosmetology and hair styling salon featuring arched backlit mirrors, fluted marble styling counters, and private VIP treatment suites.",
    description: "A serene luxury beauty lounge designed with acoustic ceiling baffles, bespoke brass-trimmed styling stations, ergonomic hydraulic reclining chairs, anti-glare high-CRI color-true lighting, and an isolated shampoo lounge with reclining head-spa basins.",
    gallery: [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "32 Days",
    projectScale: "2,400 Sq.Ft",
    scopeOfWork: [
      "Backlit Arched Vanity Mirror Fabrication",
      "High-CRI 95+ Color-True Architectural Lighting",
      "Multi-Station Head-Spa Drainage & Hot Water Loop",
      "Custom Fluted Wood & Quartz Styling Consoles",
      "Chemical Fume Extraction & Fresh Air Ventilation",
      "Seamless Microcement Flooring with Anti-Stain Sealant"
    ]
  },
  {
    slug: "heritage-grooming-club-barbershop",
    name: "HERITAGE GROOMING CLUB",
    category: "OFFICE",
    subcategory: "SALONS",
    location: "Horizon Centre, Golf Course Road, Gurugram",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    intro: "Bespoke gentleman's grooming lounge and barber club featuring smoked walnut cabinetry, leather barber stations, and hot towel bars.",
    description: "A distinguished traditional-meets-modern grooming studio finished with dark smoked walnut wood paneling, antiqued brass plumbing hardware, custom integrated barber mirrors, tufted leather waiting banquettes, and an espresso/cocktail bar for waiting clients.",
    gallery: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "1,800 Sq.Ft",
    scopeOfWork: [
      "Dark Smoked Walnut Wall Paneling & Joinery",
      "Integrated Barber Station Water & Power Modules",
      "Custom Tufted Leather Banquette Seating",
      "Brass Sanitary Fixtures & Hot Towel Warmer Plumbing",
      "Scenographic Dimmable Warm 2700K Sconce Lighting",
      "Engineered Herringbone Hardwood Floor Installation"
    ]
  },
  {
    slug: "culinary-kitchen",
    name: "CULINARY KITCHEN",
    category: "RESIDENTIAL",
    subcategory: "KITCHENS",
    location: "North-East Delhi, India",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2074&auto=format&fit=crop",
    intro: "A highly-functional designer kitchen utilizing solid oak cabinet frames.",
    description: "Our signature residential kitchen layout featuring custom timber millwork, high-end marble islands, and integrated modular storage systems.",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "20 Days",
    projectScale: "650 Sq.Ft",
    scopeOfWork: [
      "Solid Oak Furniture Carpentry",
      "Heavy Marble Island Leveling",
      "Concealed Gas & Induction Circuits",
      "Task-Specific Led Cabinet Strips",
      "Water Supply & Waste Line Plumbing",
      "Anti-Fingerprint Veneer Finishing"
    ]
  },
  {
    slug: "marble-bathroom",
    name: "MARBLE BATHROOM",
    category: "RESIDENTIAL",
    subcategory: "BATHROOMS",
    location: "Dwarka Sector 21, India",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2074&auto=format&fit=crop",
    intro: "A serene private spa featuring a custom marble floating vanity.",
    description: "Premium bathroom fit-out delivering integrated marble slab walls, custom wooden floating cabinets, and modern premium chrome fixtures.",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "18 Days",
    projectScale: "400 Sq.Ft",
    scopeOfWork: [
      "Bookmatched Marble Wall Cladding",
      "Waterproof Epoxy Grouting",
      "Concealed Shower Valve Piping",
      "Floating Vanity Framing Carpentry",
      "Thermostatic Under-Floor Heating",
      "Anti-Fog Heated Mirror Controls"
    ]
  },
  {
    slug: "walkin-wardrobe",
    name: "WALK-IN WARDROBE",
    category: "RESIDENTIAL",
    subcategory: "WALK-IN WARDROBES",
    location: "Dwarka Sector 12, India",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2074&auto=format&fit=crop",
    intro: "A wardrobe suite structured around customized high-capacity dressing cabinets.",
    description: "An elegant dressing wardrobe room featuring solid wood cabinetry panels, smart warm sensor LED grids, and custom vanity islands.",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "22 Days",
    projectScale: "900 Sq.Ft",
    scopeOfWork: [
      "Bespoke Wardrobe Internal Carpentry",
      "Integrated Sensor LED Strips",
      "Premium Velvet Drawer Lining",
      "Glass-Front Cabinet Fabrication",
      "Central Island Console Carpentry",
      "Acoustic Suede Wall Panels"
    ]
  },
  {
    slug: "bathroom-vanities",
    name: "BATHROOM VANITIES",
    category: "RESIDENTIAL",
    subcategory: "VANITIES",
    location: "New Delhi, India",
    img: "/images/bathroom-vanities-fitout.jpg",
    intro: "Perfect vanity installations combining polished timber veneers.",
    description: "Premium bathroom styling setups featuring hand-carved floating oak wood cabinets, solid black granite details, and mirror backlighting.",
    gallery: [
      "/images/bathroom-vanities-fitout.jpg",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "12 Days",
    projectScale: "250 Sq.Ft",
    scopeOfWork: [
      "Floating Oak Cabinet Carpentry",
      "Absolute Black Granite Fabrication",
      "Concealed Waste Drainage Plumbing",
      "Warm Metro Retail Solutions Mirror Backlighting",
      "Rust-Proof Structural Wall Hangs",
      "Premium Hardware Installation"
    ]
  },
  {
    slug: "airport-kiosk",
    name: "AIRPORT KIOSK",
    category: "RETAIL",
    subcategory: "KIOSKS",
    location: "IGI Terminal 3, New Delhi",
    img: "/images/airport-kiosk-fitout.jpg",
    intro: "Lightweight modular airport boutique booth designed for maximum storage.",
    description: "Highly secure visual commercial kiosk module executed using specialized low-weight carbon panel structures and impact-durable glass surfaces.",
    gallery: [
      "/images/airport-kiosk-fitout.jpg",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
    ],
    executionTime: "15 Days",
    projectScale: "450 Sq.Ft",
    scopeOfWork: [
      "Aviation-Grade Fire-Retardant Panels",
      "Toughened Security Glass Cases",
      "Prefabricated Modular Steel Framing",
      "Nighttime Rapid On-Site Assembly",
      "Autonomous Electrical Fuse Boxes",
      "LED Perimeter Product Illuminations"
    ]
  },
  {
    slug: "grand-master-suite",
    name: "THE GRAND MASTER SUITE",
    category: "RESIDENTIAL",
    subcategory: "BEDROOMS",
    location: "Golf Links, New Delhi",
    img: "/images/the-grand-master-suite-fitout.jpg",
    intro: "Warm luxury master bedroom with bespoke fluted oak wood headboard and warm ambient cove lighting.",
    description: "A bespoke residential master bedroom fitout featuring customized fluted oak timber wall paneling, integrated floating bedside tables, layered linen upholstery, architectural lighting control, and concealed storage joinery.",
    gallery: [
      "/images/the-grand-master-suite-fitout.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "1,200 Sq.Ft",
    scopeOfWork: [
      "Custom Fluted Oak Headboard Joinery",
      "Concealed LED Cove Lighting Integration",
      "Low-Profile Oak Bed Fabrication",
      "Acoustic Wall Paneling & Texturing",
      "Motorized Sheer Drapery Setup",
      "Engineered Hardwood Parquet Flooring"
    ]
  },
  {
    slug: "skyline-executive-bedroom",
    name: "SKYLINE EXECUTIVE BEDROOM",
    category: "RESIDENTIAL",
    subcategory: "BEDROOMS",
    location: "DLF Magnolias, Gurugram",
    img: "/images/skyline-executive-bedroom-fitout.jpg",
    intro: "Contemporary luxury bedroom suite with dark walnut wall cladding and acoustic fabric paneling.",
    description: "An executive master suite combining dark American walnut joinery, charcoal upholstered wall modules, suspended bronze pendant lighting, and floor-to-ceiling panoramic glass frontage.",
    gallery: [
      "/images/skyline-executive-bedroom-fitout.jpg",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "40 Days",
    projectScale: "1,450 Sq.Ft",
    scopeOfWork: [
      "American Walnut Acoustic Wall Cladding",
      "Custom Floating Bedside Joinery",
      "Suspended Brushed Bronze Pendant Systems",
      "Herringbone Parquet Floor Laying",
      "Integrated Wardrobe Dressing Division",
      "Smart Dimmable Scene Automation"
    ]
  },
  {
    slug: "serene-japandi-bedroom",
    name: "SERENE JAPANDI BEDROOM",
    category: "RESIDENTIAL",
    subcategory: "BEDROOMS",
    location: "Greater Kailash II, New Delhi",
    img: "/images/serene-japandi-bedroom-fitout.jpg",
    intro: "Minimalist organic bedroom with natural light oak woodwork and textured limestone feature wall.",
    description: "A tranquil Japandi-style bedroom sanctuary designed with handcrafted light oak wardrobes, low platform bed, limestone masonry backdrop, and soft natural ventilation.",
    gallery: [
      "/images/serene-japandi-bedroom-fitout.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "950 Sq.Ft",
    scopeOfWork: [
      "Light Oak Custom Wardrobe Joinery",
      "Textured Limestone Feature Wall Construction",
      "Recessed Warm Linear LED Modules",
      "Minimalist Oak Platform Bed",
      "Hidden Flush Architectural Doors",
      "Acoustic Natural Linen Window Dressing"
    ]
  },
  {
    slug: "onyx-lounge-bar",
    name: "THE ONYX LOUNGE BAR",
    category: "RESIDENTIAL",
    subcategory: "BAR UNITS",
    location: "Vasant Vihar, New Delhi",
    img: "/images/onyx-lounge-bar-fitout.jpg",
    intro: "Bespoke home bar lounge with backlit golden onyx marble waterfall island and American walnut cabinetry.",
    description: "A luxury residential bar and lounge unit designed with an illuminated golden onyx stone waterfall counter, custom walnut storage joinery with bronze reveals, smoky glass display shelving, and smart ambiance lighting.",
    gallery: [
      "/images/onyx-lounge-bar-fitout.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "650 Sq.Ft",
    scopeOfWork: [
      "Translucent Backlit Onyx Counter Fabrication",
      "Custom American Walnut Joinery & Storage",
      "Integrated Temperature-Controlled Wine Chiller",
      "Smoky Float Glass Back-Bar Shelving",
      "Dimmable Ambient Linear LED Strips",
      "Solid Timber Parquet Floor Protection"
    ]
  },
  {
    slug: "curved-oak-bar-unit",
    name: "CURVED FLUTED OAK BAR",
    category: "RESIDENTIAL",
    subcategory: "BAR UNITS",
    location: "Golf Course Road, Gurugram",
    img: "/images/curved-oak-bar-fitout.jpg",
    intro: "Organic modern home bar featuring curved fluted natural oak joinery and Nero Marquina marble countertop.",
    description: "An architectural private cocktail bar crafted with curved vertical oak slats, polished Nero Marquina marble worktop, custom brushed brass footrest railing, and warm recessed back-bar liquor niches.",
    gallery: [
      "/images/curved-oak-bar-fitout.jpg",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "550 Sq.Ft",
    scopeOfWork: [
      "Curved Fluted Solid Oak Island Fabrication",
      "Nero Marquina Marble Countertop CNC Edge",
      "Brushed Brass Footrail & Hardware Assembly",
      "Venetian Plaster Backdrop Wall Treatment",
      "Concealed LED Under-Counter Lighting",
      "Integrated Cocktail Station & Sink Plumbing"
    ]
  },
  {
    slug: "penthouse-wine-cellar-bar",
    name: "PENTHOUSE WINE & COCKTAIL BAR",
    category: "RESIDENTIAL",
    subcategory: "BAR UNITS",
    location: "The Camellias, Gurugram",
    img: "/images/penthouse-wine-cellar-bar-fitout.jpg",
    intro: "Ultra-luxury penthouse cocktail bar with floor-to-ceiling glass-encased climate-controlled wine cellar.",
    description: "A bespoke entertainment bar featuring a floor-to-ceiling architectural glass wine showcase with bronze thermal profiles, black marble waterfall island, natural oak joinery, and sommelier presentation counter.",
    gallery: [
      "/images/penthouse-wine-cellar-bar-fitout.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "800 Sq.Ft",
    scopeOfWork: [
      "Hermetic Glass Wine Cellar Enclosure",
      "Specialized Precision Climate-Control System",
      "Black Marquina Waterfall Countertop Island",
      "Custom Oak Sommelier Bar Cabinetry",
      "Brushed Bronze Hardware & Glass Racks",
      "Integrated Prep Sink & Ice Maker Setup"
    ]
  },
  {
    slug: "executive-home-office-suite",
    name: "EXECUTIVE HOME OFFICE SUITE",
    category: "RESIDENTIAL",
    subcategory: "HOME OFFICE",
    location: "DLF Golf Links, Gurugram",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    intro: "Bespoke executive study with tailored walnut millwork, acoustic slatted wall paneling, and integrated ambient task lighting.",
    description: "An elevated residential executive workspace designed for uninterrupted productivity and executive presence. Features custom American walnut joinery, concealed cable management channels, integrated linear warm LED shelving, acoustic slatted wall panels, and ergonomic layout zoning.",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "550 Sq.Ft",
    scopeOfWork: [
      "Custom Fluted American Walnut Millwork",
      "Acoustic Slatted Wall Panels & Soundproofing",
      "Concealed Data, Power & Wire Management Hubs",
      "Recessed Dimmable 3000K Architectural LED Strips",
      "Built-in Bookshelf Display Joinery with Bronze Hardware",
      "Precision Ergonomic Workstation Layout & HVAC Balancing"
    ]
  },
  {
    slug: "nordic-minimalist-study",
    name: "NORDIC MINIMALIST STUDY",
    category: "RESIDENTIAL",
    subcategory: "HOME OFFICE",
    location: "Jor Bagh, New Delhi",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    intro: "Clean Scandinavian-inspired residential workspace featuring light oak joinery, floating desktop, and calm neutral finishes.",
    description: "A minimalist home studio crafted around natural light, clean lines, and uncluttered ergonomics. Features a cantilevered solid white oak workstation, concealed push-to-open storage cabinets, textured plaster wall finishes, and integrated soft perimeter illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "18 Days",
    projectScale: "420 Sq.Ft",
    scopeOfWork: [
      "Solid White Oak Floating Desk Fabrication",
      "Concealed Push-to-Open Storage Units",
      "Textured Microcement & Plaster Wall Detailing",
      "Integrated Anti-Glare Task Lighting Setup",
      "Low-Decibel Air Duct Refinement",
      "Engineered Matte Hardwood Floor Installation"
    ]
  },
  {
    slug: "luxury-private-study-library",
    name: "LUXURY PRIVATE STUDY & LIBRARY",
    category: "RESIDENTIAL",
    subcategory: "HOME OFFICE",
    location: "Panchsheel Park, New Delhi",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop",
    intro: "Sophisticated residential library and private study fitted with floor-to-ceiling dark oak cabinetry and marble desk accents.",
    description: "An authentic quiet luxury private office and library sanctuary. Designed with custom floor-to-ceiling book shelving, dark smoked oak finishes, leather-wrapped desk insets, brushed brass hardware, and dedicated reading seating nook.",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "720 Sq.Ft",
    scopeOfWork: [
      "Floor-to-Ceiling Smoked Oak Bookshelf Joinery",
      "Leather-Inlaid Executive Workstation Desk",
      "Brushed Brass Library Ladder & Track System",
      "Smart Multi-Scene Dimmable Lighting Controls",
      "Acoustic Fabric Lined Door & Wall Assemblies",
      "Concealed Safe & Document Security Compartments"
    ]
  },
  {
    slug: "nordic-kids-suite-study",
    name: "NORDIC KIDS SUITE & STUDY",
    category: "RESIDENTIAL",
    subcategory: "KIDS ROOMS",
    location: "Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    intro: "Modern Scandinavian children's bedroom suite with integrated study desk and modular storage joinery.",
    description: "A bright, playful, and functional children's bedroom featuring custom rounded timber joinery, integrated study desks, modular toy shelving, and non-toxic durable finishes.",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "20 Days",
    projectScale: "480 Sq.Ft",
    scopeOfWork: [
      "Custom Rounded Edge Birch Plywood Joinery",
      "Integrated Ergonomic Study Desk & Shelving",
      "Low-VOC Eco-Friendly Wall Coatings",
      "Concealed Soft-Close Toy Wardrobes",
      "Warm LED Dimmable Night Lighting System",
      "Anti-Slip Natural Oak Flooring"
    ]
  },
  {
    slug: "luxury-rooftop-pergola-deck",
    name: "LUXURY ROOFTOP PERGOLA & DECK",
    category: "RESIDENTIAL",
    subcategory: "OUTDOOR LIVING",
    location: "Golf Course Extension, Gurugram",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    intro: "Ultra-luxury rooftop outdoor living space with bioclimatic motorized pergola and outdoor kitchen bar.",
    description: "An exceptional outdoor living environment designed with weather-resistant teak decking, motorized louvred pergola, built-in outdoor teppanyaki grill island, ambient landscape lighting, and biophilic planter integrations.",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "1,200 Sq.Ft",
    scopeOfWork: [
      "Motorized Bioclimatic Aluminum Pergola",
      "Weatherproof Brazilian Ipe Wood Decking",
      "Integrated Outdoor Kitchen & Granite Countertops",
      "Automated Drip Irrigation & Planters",
      "Low-Voltage Weatherproof Architectural Lighting",
      "Tempered Glass Windbreak Balustrades"
    ]
  },
  {
    slug: "artisan-specialty-cafe",
    name: "ARTISAN SPECIALTY CAFE & ROASTERY",
    category: "RETAIL",
    subcategory: "CAFES",
    location: "Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern artisanal coffee sanctuary featuring concrete bar counter and terrazzo accents.",
    description: "A specialty espresso bar and cafe designed with cast-in-place polished concrete counters, warm oak bench seating, microcement walls, and precision acoustics for a serene cafe experience.",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "2,200 Sq.Ft",
    scopeOfWork: [
      "Cast-in-Place Polished Concrete Espresso Island",
      "Under-Counter Multi-Stage Water Filtration Plumbing",
      "Acoustic Wood Slat Ceiling Baffles",
      "High-Load Commercial 3-Phase Electrical Circuits",
      "Bespoke Fluted Oak Booth Seating",
      "Industrial Air Handling & Odor Control"
    ]
  },
  {
    slug: "amber-fine-dining-bistro",
    name: "AMBER FINE DINING & BISTRO",
    category: "RETAIL",
    subcategory: "RESTAURANTS",
    location: "Aerocity, New Delhi",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    intro: "High-end restaurant interior featuring ambient amber lighting, curved velvet banquettes, and marble accents.",
    description: "An intimate luxury dining space delivering acoustic perfection, plush custom velvet booth seating, rich walnut wall cladding, and an open show-kitchen pass with brass trim.",
    gallery: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "45 Days",
    projectScale: "3,600 Sq.Ft",
    scopeOfWork: [
      "Curved Velvet Banquette Seating Joinery",
      "Commercial Grade Kitchen Extraction Hoods",
      "Custom Brass Architectural Inlays & Partitions",
      "Calacatta Marble Bar Island Counter",
      "Multi-Scene Lutron Lighting Automation",
      "Sound-Dampening Acoustic Plaster Ceilings"
    ]
  },
  {
    slug: "van-heusen-flagship-atelier",
    name: "VAN HEUSEN FLAGSHIP ATELIER",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "Ambience Mall, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    intro: "High-end luxury formalwear & apparel showroom with custom brass hanging rails, solid timber fitting suites, and architectural accent illumination.",
    description: "An expansive apparel retail experience built with precision joinery, concealed LED lighting coves, velvet-upholstered fitting suites, bespoke marble cash counters, and modular powder-coated steel display hanging fixtures.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "2,800 Sq.Ft",
    scopeOfWork: [
      "Bespoke Brass & Black Matte Hanging Systems",
      "Custom Smoked Oak Cash Counter & POS Joinery",
      "Velvet-Upholstered VIP Fitting Lounges",
      "High-CRI 95+ Directional Garment Spotlights",
      "Frameless Glass Storefront & Backlit Signage",
      "Concealed Anti-Theft RF Security Gates"
    ]
  },
  {
    slug: "raymond-bespoke-suiting-studio",
    name: "RAYMOND BESPOKE SUITING STUDIO",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "Connaught Place, New Delhi",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2070&auto=format&fit=crop",
    intro: "Heritage suiting atelier and bespoke tailoring studio with dark walnut cabinetry, fine fabric roll displays, and master tailor stations.",
    description: "An aristocratic menswear tailoring showroom featuring floor-to-ceiling dark walnut fabric roll storage, brass-trimmed consultation tables, dedicated measurement suites, and ambient 3000K warm spotlighting.",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "38 Days",
    projectScale: "3,200 Sq.Ft",
    scopeOfWork: [
      "Solid Walnut Fabric Roll Display & Shelving Units",
      "Private Master Tailor Measurement & Fitting Lounges",
      "Brushed Gold Architectural Trim & Wall Cladding",
      "Integrated Accessory & Tie Display Islands",
      "True-Color High-Definition Color-Matching Illumination",
      "Custom Laser-Engraved Wood Storefront Signage"
    ]
  },
  {
    slug: "biba-ethnic-couture-flagship",
    name: "BIBA ETHNIC COUTURE FLAGSHIP",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "South Extension Part 2, New Delhi",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
    intro: "Luxury Indian ethnic wear & bridal couture boutique featuring fluted brass hanging racks, arches, and grand bridal trial mirrors.",
    description: "A royal ethnic fashion destination designed with contemporary Mughal-inspired architectural arches, brushed champagne-gold garment gondolas, plush silk-carpeted bridal suites, and diffuse shadowless lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "32 Days",
    projectScale: "2,950 Sq.Ft",
    scopeOfWork: [
      "Champagne Gold Architectural Arch Partitions",
      "Heavy-Duty Bridal Lehenga & Saree Display Carousels",
      "Full-Length 360-Degree Illuminated Bridal Mirrors",
      "Italian Botticino Marble Flooring with Brass Inlays",
      "Multi-Tier Ducted Central Air-Conditioning",
      "Custom Acrylic Backlit Brand Signage Canopy"
    ]
  },
  {
    slug: "zara-high-street-boutique",
    name: "ZARA HIGH STREET FLAGSHIP",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop",
    intro: "Minimalist high-fashion retail boutique with microcement flooring, floating apparel racks, and backlit wall niches.",
    description: "Turnkey high-fashion boutique fit-out featuring floor-to-ceiling glass frontage, seamless microcement surfaces, brushed steel garment displays, automated energy-efficient HVAC, and acoustic ceiling baffles.",
    gallery: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "3,400 Sq.Ft",
    scopeOfWork: [
      "Microcement Floor & Wall Texturing",
      "Ceiling-Suspended Brushed Steel Racks",
      "Integrated Linear Diffuser HVAC Systems",
      "Full-Length Illuminated Trial Mirrors",
      "Central Island Accessory Display Plinths",
      "Smart Energy Management Sensor Controls"
    ]
  },
  {
    slug: "puma-performance-athleisure-store",
    name: "PUMA SPORTSWEAR & ATHLEISURE STORE",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2070&auto=format&fit=crop",
    intro: "Dynamic athletic performance apparel & sportswear flagship featuring modular sports wall racks and interactive trial zones.",
    description: "Modern commercial sportswear store engineered with modular laser-cut metal athletic gear displays, high-impact rubberized floor zones, illuminated footwear/activewear plinths, and bold brand lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "2,500 Sq.Ft",
    scopeOfWork: [
      "Modular Heavy-Load Athletic Apparel Slatwalls",
      "Custom Powder-Coated Metal Tracksuit & Jersey Podiums",
      "High-Impact Resilient Sport Performance Flooring",
      "Dynamic Multi-Zone Linear Architectural LED Systems",
      "Ergonomic Cash Counter Joinery with Digital Display Mounts",
      "Illuminated Dimensional 3D Athletic Brand Signage"
    ]
  },
  {
    slug: "united-colors-of-benetton",
    name: "UNITED COLORS OF BENETTON",
    category: "RETAIL",
    subcategory: "CLOTHING AND FASHION",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop",
    intro: "Vibrant casualwear retail store with modular color-blocked shelving, flexible garment islands, and open circulation.",
    description: "An energetic, bright apparel retail environment designed for high footfall. Features modular magnetic shelving fixtures, lightweight aluminum hanging fixtures, high-efficiency LED ceiling washes, and scratch-resistant finishes.",
    gallery: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "2,400 Sq.Ft",
    scopeOfWork: [
      "Modular Powder-Coated Metal Slatwall Grid Systems",
      "High-Traffic Commercial Vinyl Plank Flooring",
      "Multi-Color Tunable Ambient LED Wash Lights",
      "Free-Standing Central Island Apparel Gondolas",
      "Heavy-Duty Acoustic Fitting Room Curtain Hardware",
      "Illuminated Brand Identity Store Entrance Portal"
    ]
  },
  {
    slug: "it-luggage-flagship-store",
    name: "IT LUGGAGE FLAGSHIP SHOWROOM",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=2070&auto=format&fit=crop",
    intro: "Contemporary lightweight luggage and travel backpack showroom with structured display shelves and anti-glare downlights.",
    description: "An innovative luggage retail space featuring custom laser-cut display racks, lightweight travel suitcase demo podiums, integrated backpack hanging walls, and seamless POS circulation.",
    gallery: [
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "1,750 Sq.Ft",
    scopeOfWork: [
      "Modular Metallic Hard-Shell Luggage Gondolas",
      "Backlit Timber Backpack Display Wall Panels",
      "Reinforced Floor Podiums for Heavy Luggage Sets",
      "High-CRI 4000K Perimeter Track Lighting",
      "Custom Smoked Oak Cash Counter & POS Joinery",
      "Illuminated Dimensional 3D Frontage Signage"
    ]
  },
  {
    slug: "samsonite-luxury-travel-boutique",
    name: "SAMSONITE LUXURY TRAVEL BOUTIQUE",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=2070&auto=format&fit=crop",
    intro: "Ultra-premium polycarbonate & aluminium luggage boutique featuring custom brass-accented podiums and VIP consultation zones.",
    description: "A prestigious luxury travel store built with curved walnut veneer island showcases, brushed champagne brass display trims, recessed perimeter illumination, and heavy-duty load-tested shelving.",
    gallery: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop",
      "/images/safari-bags-showroom.jpg"
    ],
    executionTime: "28 Days",
    projectScale: "2,100 Sq.Ft",
    scopeOfWork: [
      "Curved Walnut Veneer Suitcase Islands",
      "Brushed Champagne Brass Fixture Accents",
      "Anti-Static Vitrified High-Gloss Floor Tiling",
      "Narrow-Beam Optical Precision Spotlights",
      "Concealed Storage Cabinets with Push-to-Open Hardware",
      "Mall-Approved Tempered Glass Facade"
    ]
  },
  {
    slug: "mokobara-modern-travel-studio",
    name: "MOKOBARA MODERN TRAVEL STUDIO",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2070&auto=format&fit=crop",
    intro: "Minimalist pastel & modern travel luggage experience studio with illuminated display niches and tactile product discovery tables.",
    description: "An experiential luggage concept store featuring seamless microcement wall texturing, floating bag shelving, custom rounded island counters, and high-efficiency concealed LED lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "20 Days",
    projectScale: "1,550 Sq.Ft",
    scopeOfWork: [
      "Seamless Warm Beige Microcement Walls",
      "Rounded Edge Timber Travel Bag Plinths",
      "Integrated Floating Wall Shelving with Concealed LED",
      "Tactile Fabric & Zippers Demonstration Table",
      "Acoustic Plaster Ceiling & Low-Noise HVAC Diffusers",
      "Minimalist Backlit Brand Entrance Archway"
    ]
  },
  {
    slug: "uppercase-travel-store",
    name: "UPPERCASE SUSTAINABLE TRAVEL STORE",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern eco-conscious travel luggage & backpack store featuring recycled timber displays, modular racks, and illuminated bag plinths.",
    description: "Specialized retail environment engineered for luggage and travel accessories. Features reinforced heavy-load display shelving, tactile material demonstration stations, interactive travel gear displays, and high-CRI lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "1,650 Sq.Ft",
    scopeOfWork: [
      "Heavy-Duty Powder-Coated Metal Trolley Podiums",
      "Bespoke Backpack Slotted Wall Panel Systems",
      "High-Lumen Perimeter Warm White Track Fixtures",
      "Durable Polished Vitrified Tile Flooring",
      "Integrated Illuminated Brand Feature Wall",
      "Modular Drop-in Joinery Fixtures"
    ]
  },
  {
    slug: "vip-lounge-travel-store",
    name: "VIP LOUNGE & TRAVEL EXPERIENCE",
    category: "RETAIL",
    subcategory: "LUGGAGES",
    location: "South Extension Part 1, New Delhi",
    img: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=2070&auto=format&fit=crop",
    intro: "Heritage travel luggage showroom featuring tiered trolley podiums, duffle racks, and executive bag displays.",
    description: "A comprehensive travel luggage showroom designed for maximum catalog display, incorporating multi-tiered wooden islands, high-durability floor coating, security alarms, and dedicated luggage service counter.",
    gallery: [
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1400&auto=format&fit=crop",
      "/images/safari-bags-showroom.jpg"
    ],
    executionTime: "25 Days",
    projectScale: "1,900 Sq.Ft",
    scopeOfWork: [
      "Multi-Tiered Staged Travel Trolley Island Platforms",
      "Heavy-Duty Powder-Coated Metal Perimeter Display Racks",
      "Concealed Under-Shelf High-Efficiency LED Lighting",
      "Sturdy Cash Counter with Built-in Warranty Support Node",
      "High-Traffic Commercial Grade Vitrified Flooring",
      "Illuminated 3D Signage Frontage Portal"
    ]
  },
  {
    slug: "nykaa-luxe-beauty-store",
    name: "NYKAA LUXE BEAUTY & COSMETICS STORE",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
    intro: "Luxury multi-brand beauty & cosmetics destination with illuminated vanity consultation bars, bespoke skincare islands, and fragrance pedestals.",
    description: "A flagship beauty boutique designed with rose-gold metallic trims, shadow-free daylight makeup testing mirrors, custom acrylic lipstick carousels, and high-lumen ceiling wash lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "26 Days",
    projectScale: "2,400 Sq.Ft",
    scopeOfWork: [
      "Rose-Gold & Matte White Display Joinery",
      "High-CRI 5000K Illuminated Makeup Vanity Bars",
      "Multi-Brand Modular Skincare Testing Podiums",
      "Custom Laser-Cut Acrylic Lipstick Drawers & Carousels",
      "Acoustic Ceiling Treatments & Integrated Fragrance Ventilation",
      "Backlit 3D Brand Logo Entrance Canopy"
    ]
  },
  {
    slug: "nykaa-on-trend-beauty-hub",
    name: "NYKAA ON TREND BEAUTY HUB",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
    intro: "Fast-beauty & trending cosmetics hub featuring interactive digital shade-finder stations, lipstick discovery islands, and brush bars.",
    description: "An interactive Gen-Z and beauty enthusiast retail hub built with modular acrylic product organizers, touch-screen shade matching stations, high-output ring lights, and magnetic merchandising backsplashes.",
    gallery: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "1,950 Sq.Ft",
    scopeOfWork: [
      "Modular High-Capacity Acrylic Tester Bars",
      "Interactive Digital Shade-Finder Touch Kiosks",
      "Shadowless 5500K Mirror Ring-Light Arrays",
      "High-Traffic Scratch-Proof Polyurethane Floor Finish",
      "Ergonomic Drop-in Cash & Wrap Counters",
      "Illuminated Dimensional Neon & Acrylic Signage Portal"
    ]
  },
  {
    slug: "mac-cosmetics-flagship-studio",
    name: "M·A·C COSMETICS FLAGSHIP STUDIO",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
    intro: "High-contrast professional makeup studio featuring iconic matte black finish fixtures, pro artist demo stations, and color-true illumination.",
    description: "Turnkey cosmetics fit-out featuring pro-artist consultation stations with ergonomic seating, precision color-matching optical mirrors, tiered powder-coated lipstick wall fixtures, and integrated POS stations.",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "1,850 Sq.Ft",
    scopeOfWork: [
      "Matte Black Textured Pro-Artist Makeup Counters",
      "True-CRI 98+ Daylight LED Ring-Lit Mirrors",
      "Modular Heavy-Load Acrylic Lipstick & Eyeshadow Tiers",
      "High-Traffic Commercial Vinyl Resin Flooring",
      "Concealed Under-Counter Sanitary & Brush Washing Plumbing",
      "Illuminated High-Contrast Glossy Black Storefront"
    ]
  },
  {
    slug: "mac-pro-artist-beauty-atelier",
    name: "M·A·C PRO ARTIST BEAUTY ATELIER",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "The Chanakya, Chanakyapuri, New Delhi",
    img: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=2070&auto=format&fit=crop",
    intro: "Exclusive pro makeup masterclass atelier with high-gloss black lacquer cabinetry, private bridal consultation suites, and precision micro-spotlights.",
    description: "An ultra-premium cosmetics studio crafted for masterclass demonstrations, VIP bridal makeup applications, and complete professional shade collections with custom anti-glare mirrors.",
    gallery: [
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "2,100 Sq.Ft",
    scopeOfWork: [
      "High-Gloss Piano Black Lacquer Consultation Bars",
      "Multi-Angle Optical Color Calibration Spotlights",
      "Private VIP Bridal Transformation Dressing Suites",
      "Integrated Sound-Dampening Acoustic Wall Partitions",
      "Custom Solid Stainless Steel Display Racks",
      "Frameless Minimalist Storefront Glass Facade"
    ]
  },
  {
    slug: "maybelline-new-york-beauty-bar",
    name: "MAYBELLINE NEW YORK BEAUTY BAR",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2070&auto=format&fit=crop",
    intro: "Vibrant urban beauty bar with interactive shade-finder pods, mascara discovery zones, and playful neon architectural accents.",
    description: "An energetic, contemporary beauty retail concept featuring modular shade-tester stations, magnetic product organizer strips, high-lumen selfie lighting, and durable scratch-proof surfaces.",
    gallery: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "20 Days",
    projectScale: "1,600 Sq.Ft",
    scopeOfWork: [
      "Modular Magnetic Shade Finder Beauty Island",
      "Illuminated Mascara & Lipstick Showcase Columns",
      "Durable Scratch-Resistant High-Gloss Joinery",
      "Dynamic Neo-Urban Linear LED Accent Lighting",
      "Ergonomic Cash Counter with Wire Integration",
      "Vibrant Frontage 3D Dimensional Brand Portal"
    ]
  },
  {
    slug: "maybelline-color-studio",
    name: "MAYBELLINE NEW YORK COLOR STUDIO",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern color cosmetics experience store with custom foundation matching bays, eye shadow testing tiers, and bright NYC loft styling.",
    description: "A trendy cosmetics showroom with exposed industrial ceiling trusses, bright white lipstick and mascara display gondolas, full-spectrum LED color testing mirrors, and durable composite flooring.",
    gallery: [
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "21 Days",
    projectScale: "1,700 Sq.Ft",
    scopeOfWork: [
      "Industrial NYC Loft Exposed Slatwall Systems",
      "Curved Edge Foundation & Lip Gloss Gondolas",
      "High-Lux Dimmable 5000K Glamour Mirror Fixtures",
      "Commercial High-Traffic Impact Tile Flooring",
      "Modular Cash Wrap Counter with Concealed POS Racks",
      "Illuminated Backlit Acrylic Brand Canopy"
    ]
  },
  {
    slug: "sephora-beauty-cosmetics-lounge",
    name: "SEPHORA BEAUTY & COSMETICS LOUNGE",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
    intro: "Premium beauty and cosmetics studio with illuminated vanity mirrors, custom skincare testing bars, and monochrome display architecture.",
    description: "High-traffic beauty and skincare retail store featuring custom acrylic testers, high-lumen shadow-free 5000K daylight vanity mirrors, bespoke powder-coated makeup consultation islands, and precision moisture-resistant joinery.",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "2,200 Sq.Ft",
    scopeOfWork: [
      "Custom Monochromatic Makeup Consultation Bars",
      "Shadow-Free High-CRI 5000K Illuminated Vanity Mirrors",
      "Precision Laser-Cut Acrylic Product Tester Slots",
      "Moisture-Resistant Marine Grade Display Cabinetry",
      "Ducted Skincare Scent-Control Ventilation",
      "POS Cashier Joinery with Under-Counter Storage"
    ]
  },
  {
    slug: "sephora-luxury-beauty-atelier",
    name: "SEPHORA LUXURY BEAUTY ATELIER",
    category: "RETAIL",
    subcategory: "BEAUTY AND PERSONAL CARE",
    location: "Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2070&auto=format&fit=crop",
    intro: "Grand luxury cosmetics & prestige skincare flagship featuring central fragrance organs, marble beauty bars, and interactive makeup testing suites.",
    description: "An iconic luxury beauty retail fit-out showcasing custom black-and-white lacquered gondolas, Italian Calacatta marble tester stations, dedicated prestige skincare lounges, and smart energy-saving LED wash fixtures.",
    gallery: [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "2,800 Sq.Ft",
    scopeOfWork: [
      "High-Gloss Black & White Lacquered Merchandising Gondolas",
      "Italian Calacatta Marble Tester Island Countertops",
      "Shadowless Full-Spectrum Optical Beauty Vanity Mirrors",
      "Multi-Zone HVAC with Active Olfactory Odor Neutralizers",
      "Concealed Under-Counter Inventory Stocking Units",
      "Signature Striped Illuminated Mall Facade Portal"
    ]
  },
  {
    slug: "samsung-smart-experience-store",
    name: "SAMSUNG SMART EXPERIENCE STORE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2070&auto=format&fit=crop",
    intro: "Flagship Galaxy ecosystem showroom with curved Neo QLED display walls, smart gadget pods, and anti-theft demo islands.",
    description: "A futuristic consumer electronics showroom featuring curved LED demonstration video walls, smart home staging enclosures, high-security gadget tethering tables, and low-reflectance anti-glare ceiling illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "32 Days",
    projectScale: "2,850 Sq.Ft",
    scopeOfWork: [
      "Seamless Curved Micro-LED Video Wall Installation",
      "Interactive Smart Device Demo Island Tables",
      "Anti-Theft Active Power Tethering Joinery",
      "Smart Home Automation Simulator Enclosure",
      "Low-Reflectance Anti-Glare Ceiling Lighting Grid",
      "Server Room Structured Cabling & Rack Setup"
    ]
  },
  {
    slug: "samsung-flagship-smart-cafe",
    name: "SAMSUNG FLAGSHIP SMART CAFE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=2070&auto=format&fit=crop",
    intro: "Interactive Galaxy smartphone & foldable device experience hub with custom Corian touch bars and customer service lounge.",
    description: "Turnkey mobile & smart gadgets experience cafe built with custom back-painted glass partitions, precision laser-cut smartphone stands, dedicated technical service counter joinery, and high-efficiency recessed track luminaires.",
    gallery: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "26 Days",
    projectScale: "2,200 Sq.Ft",
    scopeOfWork: [
      "Solid White Corian Mobile Demo Islands",
      "Back-Painted Blue Glass Branding Feature Panels",
      "Integrated Live Device Power Docking Systems",
      "Customer Technical Support & Repair Counter Joinery",
      "Commercial High-Traffic Porcelain Floor Tiling",
      "Backlit 3D Brand Logo Entrance Portal"
    ]
  },
  {
    slug: "croma-mega-electronics-store",
    name: "CROMA MEGA ELECTRONICS STORE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2070&auto=format&fit=crop",
    intro: "Comprehensive multi-category consumer electronics megastore with grand smart TV gallery, laptop discovery bays, and audio pods.",
    description: "An extensive multi-zone technology megastore showcasing heavy-duty structural TV display wall racks, modular laptop and desktop islands with under-floor cable conduits, gaming demo stations, and sound-dampened audio testing rooms.",
    gallery: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "45 Days",
    projectScale: "5,800 Sq.Ft",
    scopeOfWork: [
      "Heavy-Duty Multi-Tier Structural Smart TV Wall Mounts",
      "Modular Powder-Coated Laptop & PC Island Benches",
      "Acoustic Fabric Lined Audio & Soundbar Testing Suite",
      "Multi-Circuit High-Load 3-Phase Commercial Electrical Distribution",
      "High-Traffic Vinyl Plank & Polished Concrete Flooring",
      "Large-Format Illuminated Storefront Facade & Signage"
    ]
  },
  {
    slug: "croma-smart-tech-hub",
    name: "CROMA SMART TECH HUB",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "South Extension Part 2, New Delhi",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern urban electronics boutique featuring gaming stations, high-end wearable gadgets, and home entertainment setups.",
    description: "A specialized electronics retail space designed for urban tech shoppers. Features custom LED-illuminated gaming rigs, smart home device demonstration booths, and ergonomic cashier wrap counters.",
    gallery: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "3,100 Sq.Ft",
    scopeOfWork: [
      "Custom RGB-Backlit Gaming Gear Experience Islands",
      "Under-Counter Integrated Structured Data & Power Grids",
      "Wearable Smartwatch & Headphone Security Tester Stands",
      "Energy-Efficient High-Lux 4000K Linear LED Ceiling Diffusers",
      "Double Cash Counter with Wire Integration & Secure Safes",
      "Illuminated Teal Accent Branding Store Entrance"
    ]
  },
  {
    slug: "vivo-smart-experience-flagship",
    name: "VIVO SMART EXPERIENCE FLAGSHIP",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "Connaught Place, New Delhi",
    img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2070&auto=format&fit=crop",
    intro: "Sleek mobile camera studio and 5G smartphone experience center with curved demonstration islands and high-CRI lighting.",
    description: "A flagship smartphone retail experience featuring custom optical camera testing stages, ambient gradient brand backdrops, acrylic product plinths with active anti-theft sensors, and open customer circulation.",
    gallery: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "2,050 Sq.Ft",
    scopeOfWork: [
      "Curved Edge Acrylic Smartphone Testing Island Desks",
      "Miniature Diorama Camera Portrait Testing Stages",
      "Precision 5000K Daylight Shadowless Mirror Stations",
      "Anti-Theft Electronic Tethering & Live Power Docks",
      "High-Durability Metallic Epoxy Seamless Flooring",
      "Illuminated Gradient Glass Entrance Facade"
    ]
  },
  {
    slug: "vivo-innovation-5g-store",
    name: "VIVO INNOVATION & 5G EXPERIENCE STORE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern mobile technology showroom with high-resolution video displays, gimbal camera demo stations, and customer lounge.",
    description: "Turnkey mobile retail concept designed with clean white modular gondolas, vibrant brand color accents, recessed magnetic track lighting, and specialized customer consultation seating.",
    gallery: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "1,800 Sq.Ft",
    scopeOfWork: [
      "Minimalist White Composite Device Demo Podiums",
      "Ultra-HD 4K Digital Advertising Video Screens",
      "Modular Slatwall Accessory Display Panels",
      "Energy-Efficient Low-Uplight Ceiling Light Diffusers",
      "Ergonomic Cashier Joinery with Secure Network Enclosure",
      "Backlit 3D Dimensional Storefront Portal"
    ]
  },
  {
    slug: "apple-premium-reseller-store",
    name: "APPLE PREMIUM RESELLER & EXPERIENCE STORE",
    category: "RETAIL",
    subcategory: "ELECTRONICS",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=2070&auto=format&fit=crop",
    intro: "Iconic minimalist Apple premium store featuring solid maple product tables, frameless glass frontage, and dedicated AppleCare consultation zone.",
    description: "An exquisite Apple premium retail space crafted with solid timber demonstration tables with concealed wiring, acoustic micro-perforated ceiling panels, high-lux true-CRI spotlights, and seamless customer service zones.",
    gallery: [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "2,750 Sq.Ft",
    scopeOfWork: [
      "Solid Natural Canadian Maple Table Joinery",
      "Concealed Under-Floor Floorbox Power/Data Hubs",
      "Micro-Perforated Acoustic White Ceilings",
      "Full-Spectrum True-Daylight Museum-Grade Spotlights",
      "AppleCare Service Counter with Dedicated Diagnostic Racks",
      "Frameless Tempered Storefront Glass Architecture"
    ]
  },
  {
    slug: "bluestone-fine-jewellery-store",
    name: "BLUESTONE FINE JEWELLERY FLAGSHIP",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
    intro: "Contemporary gold, solitaire diamond & precious gemstone jewellery flagship with signature midnight blue display vitrines and optical spotlighting.",
    description: "An exquisite modern jewellery boutique fit-out featuring midnight-blue velvet display vitrines, ultra-clear laminated security glass showcases, bespoke diamond try-on islands, high-CRI 4500K diamond illumination, and private VIP bridal consultation suites.",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "35 Days",
    projectScale: "2,600 Sq.Ft",
    scopeOfWork: [
      "Signature Midnight Blue Velvet Display Showcase Joinery",
      "Ultra-Clear Laminated Anti-Burglary Glass Vitrines",
      "True-CRI 4500K Optical Diamond Micro-Spotlights",
      "Private VIP Bridal Suite Joinery & Silk Paneling",
      "High-Security Concealed Safes & Biometric Access Controls",
      "Bespoke Brass Laser-Cut Storefront Portal Architecture"
    ]
  },
  {
    slug: "bluestone-diamond-lounge",
    name: "BLUESTONE DIAMOND EXPERIENCE LOUNGE",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2070&auto=format&fit=crop",
    intro: "Curated solitaire diamond & everyday fine jewellery lounge with curved display islands, certified diamond testing pods, and luxury velvet seating.",
    description: "Turnkey fine diamond showroom designed for an intimate, tactile discovery experience. Features central curved gold display gondolas, diamond loupe consultation bars, recessed warm architectural lighting, and biometric cash/inventory counters.",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "2,250 Sq.Ft",
    scopeOfWork: [
      "Curved Champagne Gold Centrepiece Vitrines",
      "Multi-Angle Anti-Glare Solitaire Diamond Spotlights",
      "Silk-Upholstered Private Client Seating Booths",
      "Reinforced Display Security Lock Systems",
      "High-Gloss Botticino Italian Marble Flooring",
      "Backlit 3D Brand Signage & Illuminated Store Facade"
    ]
  },
  {
    slug: "giva-silver-fine-jewellery-store",
    name: "GIVA 925 SILVER & LAB-GROWN DIAMONDS",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
    intro: "Minimalist 925 sterling silver & lab-grown diamond boutique featuring blush pink display pedestals, daylight ring mirrors, and gift packaging bars.",
    description: "A chic, contemporary silver jewellery retail studio designed with signature pastel blush pink finishes, delicate frameless glass pedestals, high-output shadowless try-on vanity mirrors, and streamlined gift-boxing counters.",
    gallery: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475103-4fa1b7765a7f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "1,650 Sq.Ft",
    scopeOfWork: [
      "Pastel Blush Pink & Matte Champagne Display Joinery",
      "Daylight 5000K Illuminated Try-on Vanity Mirror Stations",
      "Modular Velvet-Lined Silver Drawer Inserts & Trays",
      "Frameless Toughened Glass Island Vitrines",
      "High-Traffic Scratch-Proof Polyurethane Floor Coating",
      "Illuminated Dimensional Neon & Rose-Gold Brand Portal"
    ]
  },
  {
    slug: "giva-minimalist-jewellery-studio",
    name: "GIVA MINIMALIST JEWELLERY STUDIO",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern everyday fine silver & rose-gold jewellery experience studio with open try-on tables, earring discovery trees, and custom lighting.",
    description: "An open, inviting retail layout built for easy browse-and-try experiences. Features magnetic modular earring display fixtures, anti-tarnish storage cabinetry, integrated LED under-shelf glow, and modern POS counters.",
    gallery: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475103-4fa1b7765a7f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "1,500 Sq.Ft",
    scopeOfWork: [
      "Custom Acrylic Earring & Ring Tree Presentation Plinths",
      "Anti-Tarnish Velvet-Lined Storage Drawers",
      "Narrow-Beam 4000K True-White Optical Downlights",
      "Curved Soft-Edge Corian Cash & Gift-Wrap Counter",
      "Seamless Microcement Feature Wall Paneling",
      "Frameless Storefront Glass with Floating Brand Signage"
    ]
  },
  {
    slug: "mia-by-tanishq-contemporary-boutique",
    name: "MIA BY TANISHQ CONTEMPORARY BOUTIQUE",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2070&auto=format&fit=crop",
    intro: "Vibrant workwear & modern 14kt/18kt gold fine jewellery boutique featuring champagne brass vitrines, geometric trial stations, and warm cove lighting.",
    description: "A fresh and modern fine jewellery boutique crafted for working women and contemporary fine jewellery enthusiasts. Features modular geometric display towers, brushed champagne-brass trims, interactive styling mirrors, and security-rated glass cases.",
    gallery: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "1,950 Sq.Ft",
    scopeOfWork: [
      "Brushed Champagne Brass & Natural Oak Vitrines",
      "Modular Geometric Workwear Jewellery Showcase Towers",
      "High-CRI 95+ Color-Accurate Garment & Jewelry Mirrors",
      "Integrated Security Sensor Grid & Safe Compartments",
      "Italian Terrazzo Micro-Topping Floor Finish",
      "Illuminated Rose-Gold 3D Store Entrance Portal"
    ]
  },
  {
    slug: "mia-everyday-fine-jewellery-studio",
    name: "MIA EVERYDAY FINE JEWELLERY STUDIO",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "South Extension Part 1, New Delhi",
    img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop",
    intro: "Chic everyday 14kt gold and diamond jewellery studio with custom layered necklace plinths, stackable ring bars, and open consultation pods.",
    description: "An energetic, refined retail space designed for seamless customer movement. Incorporates custom necklace cascade stands, stackable ring bars, warm ambient perimeter coves, and dedicated customer styling tables.",
    gallery: [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "1,750 Sq.Ft",
    scopeOfWork: [
      "Solid Oak & Fluted Glass Jewellery Display Islands",
      "Cascade Chain & Pendant Presentation Stands",
      "Precision Dimmable 3500K LED Micro-Spotlights",
      "Drop-in Cash Wrap Joinery with Secure Safes",
      "High-Traffic Commercial Vitrified Flooring",
      "Backlit Storefront Header & Glass Display Facade"
    ]
  },
  {
    slug: "caratlane-omnichannel-jewellery-store",
    name: "CARATLANE MODERN DIAMOND BOUTIQUE",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern omnichannel diamond jewellery store with interactive digital try-on screens, solitaire discovery pods, and signature purple & gold detailing.",
    description: "An innovative omnichannel diamond jewellery retail space combining digital shopping kiosks with physical touch-and-feel showcases. Equipped with tamper-resistant display islands, high-lux solitaire spotlights, and comfortable consultation banquettes.",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "2,100 Sq.Ft",
    scopeOfWork: [
      "Signature CaratLane Purple & Gold Display Island Units",
      "Interactive Digital Try-On Kiosk Joinery & Tablet Mounts",
      "True-CRI 4500K Diamond Brilliance Spotlighting",
      "Concealed Under-Counter Inventory Strongboxes",
      "High-Traffic Seamless Marble-Look Floor Tiles",
      "Illuminated Dimensional 3D Brand Signage Canopy"
    ]
  },
  {
    slug: "caratlane-everyday-diamonds-boutique",
    name: "CARATLANE SOLITAIRE & FINE JEWELLERY",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Connaught Place, New Delhi",
    img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2070&auto=format&fit=crop",
    intro: "Heritage meets modern solitaire diamond boutique with private consultation rooms, bespoke engagement ring counters, and anti-reflective vitrines.",
    description: "A flagship diamond retail showroom featuring custom curved consultation counters, high-security extra-clear vitrines with multi-angle micro-LEDs, private engagement ring consultation booths, and biometric vault integration.",
    gallery: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "30 Days",
    projectScale: "2,350 Sq.Ft",
    scopeOfWork: [
      "Bespoke Curved Solitaire Ring Consultation Islands",
      "Anti-Reflective Laminated Security Glass Showcases",
      "Multi-Angle Micro-LED Solitaire Illuminators",
      "Private VIP Engagement Consultation Lounge",
      "Reinforced Safe Room & Biometric Security Infrastructure",
      "Architectural Heritage Facade Glass & Brass Cladding"
    ]
  },
  {
    slug: "palmonas-demi-fine-jewellery-flagship",
    name: "PALMONAS DEMI-FINE JEWELLERY FLAGSHIP",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Khan Market, New Delhi",
    img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern luxury demi-fine jewellery boutique featuring 18k gold vermeil collections, travertine stone pedestals, and organic fluted plaster walls.",
    description: "An authentic quiet luxury demi-fine jewellery boutique designed with natural Italian travertine stone plinths, curved fluted plaster walls, warm 3000K recessed accent lighting, anti-tarnish waterproof display zones, and bespoke brass trims.",
    gallery: [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "26 Days",
    projectScale: "1,850 Sq.Ft",
    scopeOfWork: [
      "Natural Italian Travertine Display Pedestals",
      "Curved Fluted Plaster Wall Texturing",
      "Anti-Tarnish Sealed Glass Vitrines",
      "High-CRI 3000K Warm Luxe Directional Spotlighting",
      "Custom Smoked Oak Cash Counter & POS Joinery",
      "Minimalist Frameless Storefront with Backlit Brass Lettering"
    ]
  },
  {
    slug: "palmonas-luxury-atelier-lounge",
    name: "PALMONAS ATELIER & JEWELLERY LOUNGE",
    category: "RETAIL",
    subcategory: "JEWELLERY",
    location: "Ambience Mall, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=2070&auto=format&fit=crop",
    intro: "Contemporary demi-fine jewellery salon with stainless steel waterproof jewellery bars, travertine display slabs, and VIP styling lounge.",
    description: "A sophisticated everyday luxury showroom with custom travertine stone counters, microcement surfaces, brushed gold hanging vitrines, and an intimate consultation lounge for personalized demi-fine styling.",
    gallery: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "1,600 Sq.Ft",
    scopeOfWork: [
      "Solid Travertine Stone Showcase Countertops",
      "Brushed Gold Architectural Metal Reveal Trims",
      "Anti-Reflective Optical Glass Vitrines with Concealed LED",
      "Private VIP Jewellery Styling Banquette Lounge",
      "Seamless Microcement Floor Overlay",
      "Illuminated 3D Metallic Brand Entrance Signage"
    ]
  },
  {
    slug: "hamleys-wonderland-toy-store",
    name: "HAMLEYS WONDERLAND FLAGSHIP STORE",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
    intro: "World-famous British heritage toy wonderland featuring giant plush teddy bear castles, magic demonstration islands, and interactive play tracks.",
    description: "A magical, grand retail fit-out capturing the iconic Hamleys royal red-and-white theme. Features bespoke rounded birch plywood toy gondolas, live demonstration play tables, impact-absorbing commercial vinyl flooring, illuminated carousel display plinths, and dynamic color-tunable ambient illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "32 Days",
    projectScale: "4,200 Sq.Ft",
    scopeOfWork: [
      "Signature Hamleys Royal Red Theme Archways & Portals",
      "Child-Safe Curved Baltic Birch Toy Gondola Units",
      "Interactive Live Magic & Toy Demonstration Play Islands",
      "High-Traffic Shock-Absorbent Cushioned Floor Laying",
      "Heavy-Duty Adjustable Powder-Coated Wall Racking",
      "Illuminated Dimensional 3D Brand Facade Signage Canopy"
    ]
  },
  {
    slug: "hamleys-royal-toy-emporium",
    name: "HAMLEYS ROYAL TOY EMPORIUM",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "Select CITYWALK, Saket, New Delhi",
    img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2070&auto=format&fit=crop",
    intro: "Heritage toy emporium with floor-to-ceiling soft toy display trees, classic wooden train tables, and interactive fantasy zone.",
    description: "An experiential toy showroom built with multi-tiered plush animal display steps, specialized dust-resistant toy vitrines, interactive model testing bays, anti-glare high-lux LED washes, and child-safe perimeter millwork.",
    gallery: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "3,500 Sq.Ft",
    scopeOfWork: [
      "Multi-Tiered Staged Plush Toy Tower Joinery",
      "Custom Solid Timber Train & Activity Playtables",
      "Full-Spectrum Color-Accurate LED Downlight Fixtures",
      "High-Impact Resilient Safety Flooring",
      "Modular Slatwall Toy Dispenser Systems",
      "Double Cashier Counter with Concealed Network Cabling"
    ]
  },
  {
    slug: "toys-r-us-mega-superstore",
    name: "TOYS \"R\" US MEGA TOY SUPERSTORE",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "DLF Mall of India, Noida",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop",
    intro: "Grand multi-category toy supermarket featuring expansive board game aisles, action figure galleries, and interactive Geoffrey play zones.",
    description: "An expansive, high-energy toy retail superstore engineered for maximum catalog display and smooth family footfall. Features heavy-load modular steel gondolas, colorful department zoning archways, ride-on vehicle testing tracks, and bright anti-glare linear ceiling illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "40 Days",
    projectScale: "6,500 Sq.Ft",
    scopeOfWork: [
      "Heavy-Duty Adjustable Steel Toy Supermarket Shelving",
      "Thematic Department Zone Wayfinding & Entry Portals",
      "High-Traffic Commercial Vinyl Plank Flooring",
      "Energy-Efficient High-Lux 4500K Linear LED Ceiling Grids",
      "Multi-Station Rapid POS Cash & Wrap Counters",
      "Signature Multi-Color Toys \"R\" Us Illuminated Mall Facade"
    ]
  },
  {
    slug: "toys-r-us-play-experience-hub",
    name: "TOYS \"R\" US PLAY EXPERIENCE HUB",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop",
    intro: "Energetic family toy store with dedicated board game demonstration tables, superhero action figure plinths, and bright open aisles.",
    description: "A contemporary toy retail experience built with accessible low-height display plinths for kids, tactile product discovery bays, magnetic game backdrops, and seamless customer circulation.",
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "26 Days",
    projectScale: "3,800 Sq.Ft",
    scopeOfWork: [
      "Accessible Low-Profile Child-Friendly Island Gondolas",
      "Modular Action Figure & Superhero Display Walls",
      "Interactive Game & Puzzle Demonstration Pods",
      "Durable Scratch-Proof Laminated Joinery",
      "High-CRI Uniform Track & Ambient Ceiling Spotlights",
      "Backlit 3D Dimensional Brand Portal Frontage"
    ]
  },
  {
    slug: "hot-wheels-track-arena-store",
    name: "HOT WHEELS TRACK ARENA & COLLECTOR STORE",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=2070&auto=format&fit=crop",
    intro: "High-octane diecast toy car & track racing store with full-room looping track playtables, blister pack display walls, and collector showcases.",
    description: "An authentic diecast speedway retail experience designed with signature Hot Wheels flame orange & royal blue fixtures, continuous looping orange track race tables, high-capacity blister-pack peg walls, diecast collector vitrines, and dynamic neon accent lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "2,400 Sq.Ft",
    scopeOfWork: [
      "Curved High-Speed Toy Track Race Table Joinery",
      "High-Capacity Powder-Coated Blister Pack Slatwalls",
      "Collector Grade Glass Showcases for Rare Diecast Models",
      "Dynamic Flame Orange & Electric Blue LED Accent Grids",
      "High-Durability Race-Grid Themed Floor Overlay",
      "Illuminated Hot Wheels Flame Logo Storefront Canopy"
    ]
  },
  {
    slug: "hot-wheels-speed-diecast-hub",
    name: "HOT WHEELS SPEED & DIECAST RACING HUB",
    category: "RETAIL",
    subcategory: "KIDS TOYS",
    location: "Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=2070&auto=format&fit=crop",
    intro: "Modern diecast car collector hub with gravity drop racing towers, custom acrylic model showcases, and interactive track builders.",
    description: "A high-speed diecast model racing showroom featuring gravity-fed multi-lane track towers, premium diecast vehicle display pedestals, modular track builder accessories, and sleek futuristic automotive retail aesthetics.",
    gallery: [
      "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "22 Days",
    projectScale: "2,100 Sq.Ft",
    scopeOfWork: [
      "Gravity-Fed Multi-Lane Race Track Tower Structures",
      "Precision Laser-Cut Acrylic Diecast Car Wall Racks",
      "Automotive Gloss Finish Cash Wrap & Demo Counters",
      "High-Lux Narrow-Beam Model Focus Spotlighting",
      "Checkerboard Pattern Heavy-Duty Commercial Flooring",
      "Backlit 3D Racing Flame Entrance Architecture"
    ]
  },
  {
    slug: "titan-edge-raga-boutique",
    name: "TITAN EDGE & RAGA BOUTIQUE",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "Ambience Mall, Gurugram",
    img: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=2070&auto=format&fit=crop",
    intro: "Slim-profile luxury boutique featuring rose-gold watch vitrines, velvet-lined presentation trays, and champagne ambient lighting.",
    description: "An ultra-sleek boutique celebrating the ultra-slim Titan Edge and elegant Titan Raga collections. Built with champagne gold stainless steel trim, curved glass vitrines, bespoke velvet watch testing trays, and warm 3000K illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "26 Days",
    projectScale: "1,650 Sq.Ft",
    scopeOfWork: [
      "Rose-Gold & Champagne Stainless Steel Vitrine Framing",
      "Custom Velvet-Lined Counter Presentation Trays",
      "Integrated Dimmable 3000K High-CRI LED Showcase Strips",
      "Tempered Low-Iron Anti-Reflective Curved Glass Display Cabinets",
      "Fluted Italian Marble Consultation Island & POS Station",
      "Backlit Acrylic Metallic Logo & Fascia Signage"
    ]
  },
  {
    slug: "helios-watch-lounge",
    name: "HELIOS PREMIUM WATCH LOUNGE",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "DLF Mall of India, Sector 18, Noida",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2070&auto=format&fit=crop",
    intro: "Multi-brand luxury horology lounge featuring dual-sided island display vitrines, dark charcoal acoustic walls, and VIP collector pods.",
    description: "A multi-brand flagship watch destination curating international and premium Indian timepieces. Designed with dark charcoal acoustic panels, brushed brass accents, multi-tier glass gondolas, and comfortable collector consultation zones.",
    gallery: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "32 Days",
    projectScale: "2,450 Sq.Ft",
    scopeOfWork: [
      "Multi-Brand Brand-Specific Modular Wall Showcases",
      "Acoustic Felt Charcoal Wall Paneling with Brass Trims",
      "Individual Secure Keycard-Access Display Pedestals",
      "Glissando Velvet Watch Display Pads & Fitting Mirrors",
      "High-Color-Rendering 4000K Perimeter Track Lighting",
      "Solid Core Cash Wrap and Customer Care Consultation Bar"
    ]
  },
  {
    slug: "helios-swiss-timepiece-gallery",
    name: "HELIOS HOROLOGY EXPERIENCE GALLERY",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "DLF Cyber Hub, Gurugram",
    img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=2070&auto=format&fit=crop",
    intro: "State-of-the-art horology gallery with central circular watch carousel vitrine, motorized rotating displays, and espresso tasting lounge.",
    description: "A contemporary watch experience gallery built for corporate and discerning shoppers. Features motorized circular display pedestals, custom walnut millwork, anti-glare museum glass, and quick watch sizing service workstations.",
    gallery: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "28 Days",
    projectScale: "2,200 Sq.Ft",
    scopeOfWork: [
      "Central Motorized Rotating Carousel Watch Showcase",
      "Natural Walnut Veneered Perimeter Wall Bays",
      "Anti-Theft Concealed Magnetic Locking Vitrines",
      "Precision Micro-Aperture Recessed Ceiling Spotlights",
      "Polished Large-Format Terrazzo Flooring",
      "Express Strap Replacement & Watch Sizing Workstation"
    ]
  },
  {
    slug: "fossil-heritage-watch-store",
    name: "FOSSIL VINTAGE & HERITAGE WATCH STORE",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "DLF Promenade, Vasant Kunj, New Delhi",
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop",
    intro: "American vintage aesthetic store with reclaimed brick walls, industrial steel watch fixtures, and genuine leather strap customization bar.",
    description: "A signature Fossil lifestyle store embracing authentic vintage industrial design. Outfitted with exposed red brick walls, matte black steel watch display towers, solid oak watch tables, and a dedicated leather strap embossing station.",
    gallery: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045431048-f857369baa09?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "25 Days",
    projectScale: "1,900 Sq.Ft",
    scopeOfWork: [
      "Matte Black Powder-Coated Industrial Watch Gondolas",
      "Solid Aged Oak Central Discovery Tables",
      "Bespoke Leather Strap Embossing & Personalization Station",
      "Exposed Brick Feature Wall with Warm Filament Accent Lights",
      "Lockable Tempered Glass Wall Display Cubes with Diffused Lighting",
      "Vintage Bronze Framed Storefront with Custom Neon Brand Sign"
    ]
  },
  {
    slug: "fossil-smartwatch-lifestyle-studio",
    name: "FOSSIL SMARTWATCH & LIFESTYLE STUDIO",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "Pacific Mall, Tagore Garden, New Delhi",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2070&auto=format&fit=crop",
    intro: "Hybrid tech-lifestyle watch boutique featuring interactive live smartwatch charging docks, interchangeable strap rails, and vibrant digital display columns.",
    description: "Modern retail experience blending traditional horology with wearable technology. Includes powered smartwatch tethering tables, interactive touchscreen specs displays, customizable leather strap wall organizers, and clean Scandinavian timber millwork.",
    gallery: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "24 Days",
    projectScale: "1,750 Sq.Ft",
    scopeOfWork: [
      "Under-Counter Integrated Smartwatch Fast-Charging Security Docks",
      "Slotted Wooden Strap & Accessory Wall Matrix Shelving",
      "Interactive Touch-Screen Watch Customizer Kiosk Integration",
      "Crisp 4500K True-Color Surface LED Panel Illumination",
      "Polished Concrete Look Porcelain Floor Tiling",
      "Frontage Glass-Clad Digital Promotion Totem Structure"
    ]
  },
  {
    slug: "casio-g-shock-edifice-flagship",
    name: "CASIO G-SHOCK & EDIFICE FLAGSHIP STORE",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "Connaught Place, Inner Circle, New Delhi",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2070&auto=format&fit=crop",
    intro: "High-octane rugged retail studio featuring shock-resistant test chambers, matte black steel modular wall cages, and illuminated Edifice motorsport showcases.",
    description: "A flagship concept space engineered for Casio G-Shock and Edifice chronographs. Built with industrial steel mesh wall cages, drop-test display canisters, automotive-inspired carbon fiber textured counters, and dramatic icy blue linear lighting.",
    gallery: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "27 Days",
    projectScale: "2,300 Sq.Ft",
    scopeOfWork: [
      "Heavy-Duty Matte Black Steel Mesh Wall Fixtures",
      "Interactive Water-Resistance & Shock-Absorption Demo Stations",
      "Carbon Fiber Patterned Joinery with Edifice Red Accent Trim",
      "Dynamic RGBW Programmable Linear Edge Illumination",
      "Industrial Epoxy Screed Seamless Heavy-Traffic Flooring",
      "Backlit G-SHOCK Master Brand 3D Dimensional Storefront Fascia"
    ]
  },
  {
    slug: "casio-vintage-timepiece-studio",
    name: "CASIO VINTAGE & TIMEPIECE STUDIO",
    category: "RETAIL",
    subcategory: "WATCHES",
    location: "South Extension Part 1, Main Market, New Delhi",
    img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=2070&auto=format&fit=crop",
    intro: "Retro-modern timepiece boutique showcasing iconic Casio Vintage digital watches, gold and silver metal mesh series, and Enticer collections.",
    description: "A trendy retro-futuristic boutique dedicated to Casio's classic digital watches and Enticer timepieces. Highlights include brushed silver display columns, retro neon accents, organized grid watch displays, and high-efficiency POS counters.",
    gallery: [
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1400&auto=format&fit=crop"
    ],
    executionTime: "21 Days",
    projectScale: "1,500 Sq.Ft",
    scopeOfWork: [
      "Brushed Aluminum & Chrome Finish Watch Grid Wall Units",
      "Illuminated Retro Glass Vitrine Cases with Diffused Undermount LEDs",
      "Compact High-Speed POS Billing & Strap Resizing Island",
      "4000K Pure White High-Lumen Glare-Free Focus Spotlighting",
      "Gloss White Vitrified Ceramic Flooring System",
      "Illuminated Double-Sided Projected Acrylic Blade Signage"
    ]
  }
];

export const getFeaturedFitoutBySlug = (slug: string) =>
  featuredFitouts.find((project) => project.slug === slug);

export const getSuggestedFitouts = (slug: string, limit = 6) =>
  featuredFitouts.filter((project) => project.slug !== slug).slice(0, limit);
