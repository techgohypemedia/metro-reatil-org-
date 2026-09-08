export interface ManufacturingUnitItem {
  id: string;
  title: string;
  machineType: string;
  category: string;
  badge: string;
  operatorRole: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export const inhouseManufacturingItems: ManufacturingUnitItem[] = [
  {
    id: "cnc-machine",
    title: "Advanced 5-Axis CNC Precision Machining Hub",
    machineType: "Industrial Multi-Axis CNC Automation & Milling Center",
    category: "CNC Machines",
    badge: "German Spindle • ±0.02mm Precision",
    operatorRole: "Certified CNC Operator & Machine Programmer",
    description: "Operated by our certified CNC technicians on an active vacuum bed, this 5-axis heavy-duty CNC wood router features high-speed automatic tool changers (ATC) to execute 3D curved surface contouring, multi-angle joint routing, precision panel slotting, and millimeter-perfect board dimensioning for bespoke retail displays and modular fixtures.",
    image: "/images/cnc-machining-unit.jpg",
    specs: [
      { label: "Spindle Speed", value: "24,000 RPM (12kW HSD)" },
      { label: "Working Bed", value: "4,000 x 2,000 x 400 mm" },
      { label: "Axis Control", value: "5-Axis Synced Interpolation" },
      { label: "Tool Changer", value: "16-Slot Automatic Rotary ATC" }
    ]
  },
  {
    id: "cnc-laser-machine",
    title: "Industrial Fiber CNC Laser Cutting Machine",
    machineType: "High-Power Fiber Laser System",
    category: "Laser Machines",
    badge: "Optical Laser • Burr-Free",
    operatorRole: "Laser Fabrication Specialist",
    description: "High-speed industrial fiber laser cutting operated by laser technicians for spotless, burr-free precision cutting in Stainless Steel (SS 304/316), Mild Steel, Brass sheets, and architectural acrylics for luxury store displays.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Laser Power", value: "3kW - 6kW Fiber" },
      { label: "Materials", value: "SS, MS, Brass, Acrylic" },
      { label: "Cutting Bed", value: "3,000 x 1,500 mm" },
      { label: "Repeatability", value: "±0.03 mm" }
    ]
  },
  {
    id: "panel-saws",
    title: "Heavy Precision Sliding Table Panel Saws",
    machineType: "Industrial Scoring Beam & Panel Saw",
    category: "Panel Saws",
    badge: "Splinter-Free • Heavy Duty",
    operatorRole: "Master Woodworking Sizing Technician",
    description: "Equipped with dual scoring saw blades and digital fence calibration, our master woodworkers execute chip-free sizing and bulk dimensioning of laminated boards, MDF, ply, and veneers for modular furniture & wall panels.",
    image: "/images/panel-saw-unit.jpg",
    specs: [
      { label: "Sliding Bed", value: "3,200 mm Carriage" },
      { label: "Blade Tilt", value: "0° to 45° Angle" },
      { label: "Cutting Height", value: "Max 125 mm" },
      { label: "Capacity", value: "500+ Sheets/Day" }
    ]
  },
  {
    id: "edge-banding",
    title: "Precision Curved & Straight Edge Banding Machine",
    machineType: "Manual / Semi-Auto Edge Bander",
    category: "Edge Banding",
    badge: "Curved & Custom Edging",
    operatorRole: "Bespoke Joinery Edge Specialist",
    description: "Specialized edge-banding station with master craftsmen applying thick PVC/ABS tape and real timber veneers to bespoke curved counters, retail reception desks, and organic geometric furniture with clean EVA adhesive.",
    image: "/images/edge-bander-unit.jpg",
    specs: [
      { label: "Tape Thickness", value: "0.4 mm to 3 mm" },
      { label: "Panel Height", value: "10 mm to 60 mm" },
      { label: "Shapes", value: "Straight & Complex Curves" },
      { label: "Adhesive", value: "EVA Quick-Bond" }
    ]
  },
  {
    id: "automatic-edge-bander",
    title: "Heavy Industrial Automatic Throughfeed Edge Bander",
    machineType: "Multi-Station Throughfeed PUR Bander",
    category: "Automatic Edge Bander",
    badge: "Seamless Zero-Joint Finish",
    operatorRole: "Automated Line Supervisor & Operator",
    description: "High-volume automated line featuring pre-milling, gluing, end-cutting, rough & fine trimming, corner rounding, scraper, and buffing units for 100% moisture-resistant, seamless zero-joint edge finishes on all modular fixtures.",
    image: "/images/auto-edge-bander-unit.jpg",
    specs: [
      { label: "Feed Speed", value: "24 - 28 m/min" },
      { label: "Adhesion", value: "Waterproof PUR / Hot-Melt" },
      { label: "Stations", value: "8 Multi-Stage Units" },
      { label: "Control", value: "Digital Touchscreen PLC" }
    ]
  },
  {
    id: "paint-booth",
    title: "Dust-Free Pressurized PU Paint & Powder Coat Booth",
    machineType: "Climate-Controlled Spray & Cure Booth",
    category: "Finishing & Paint",
    badge: "Mirror Gloss & Matte PU",
    operatorRole: "Senior Surface Coating Technician",
    description: "Pressurized down-draft spray booths and industrial curing ovens operated by professional coating technicians for mirror-finish high gloss PU, matte polyurethane lacquer, duco finishes, and electrostatic powder coating.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Air Filtration", value: "Dust-Free Positive Pressure" },
      { label: "Finish Spectrum", value: "High Gloss, Matte, Satin" },
      { label: "Coating Types", value: "PU, Duco, Powder Coating" },
      { label: "Curing", value: "Temperature-Controlled Oven" }
    ]
  },
  {
    id: "assembly-bay",
    title: "Modular Retail Fixtures Assembly & Testing Bay",
    machineType: "Full-Scale Pre-Assembly Line",
    category: "Assembly Bay",
    badge: "100% Pre-Assembly Mockup",
    operatorRole: "Master Fitout Assembly Crew",
    description: "Extensive factory staging area where skilled carpenters and assembly crews construct 100% dry-run mockups of commercial display gondolas, cash counters, and backlit showcases to guarantee zero site errors.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Staging Area", value: "Full Floor Dry-Run Bays" },
      { label: "Monthly Output", value: "10,000+ Modular Units" },
      { label: "Hardware", value: "Hettich / Hafele Precision" },
      { label: "Testing", value: "Structural Load & Alignment" }
    ]
  },
  {
    id: "quality-dispatch",
    title: "Multi-Point QA Inspection & 24x7 Dispatch Facility",
    machineType: "Quality Control & Packaging Line",
    category: "Quality Control",
    badge: "Delhi & Greater Noida Hubs",
    operatorRole: "Quality Assurance Lead Inspector",
    description: "Comprehensive 32-point dimensional and structural quality checks, laser alignment verification, protective multi-layer packaging, and 24x7 logistics coordination for on-time delivery across retail stores nationwide.",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "QA Protocol", value: "32-Point Quality Checklist" },
      { label: "Packaging", value: "Multi-Layer Shockproof Wrap" },
      { label: "Logistics", value: "All-India 24x7 Fleet" },
      { label: "Facility Hubs", value: "Delhi & Greater Noida" }
    ]
  }
];
