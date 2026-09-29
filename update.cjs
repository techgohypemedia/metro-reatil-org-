const fs = require('fs');
let data = fs.readFileSync('c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/[id]/data.ts', 'utf8');

const newGallery = `    gallery: [
      {
        img: "/images/fitout_dubai_r2/structural.webp",
        title: "Structural Modifications",
        description: "Precision structural modifications to reconfigure layouts for residential and commercial spaces.",
        tags: ["LoadBearingWalls", "SlabOpenings", "ColumnWrapping"],
        bullets: ["Structural modification contractor", "Load bearing wall removal villa", "Luxury apartment structural alteration"],
        buttonText: "STRUCTURAL MODIFICATIONS →"
      },
      {
        img: "/images/fitout_dubai_r2/lighting.webp",
        title: "Ceiling works and lighting",
        description: "Complete ceiling solutions with integrated lighting for refined interiors.",
        tags: ["FalseCeilings", "CofferedCeilings", "LEDIntegration"],
        bullets: ["False ceiling installation", "Luxury coffered ceiling design villa", "LED ceiling light integration contractor"],
        buttonText: "CEILING WORKS AND LIGHTING →"
      },
      {
        img: "/images/fitout_dubai_r2/hvac.webp",
        title: "Full MEP and HVAC",
        description: "Full MEP and HVAC coordination by certified engineers for peak performance.",
        tags: ["Ductwork", "ChillerSystems", "FireSafety"],
        bullets: ["MEP contractor fitout", "HVAC ductwork installation villa", "certified MEP engineer"],
        buttonText: "FULL MEP AND HVAC →"
      },
      {
        img: "/images/fitout_dubai_r2/electrical.webp",
        title: "Electrical rewiring",
        description: "Complete electrical rewiring and DB upgrades by certified engineers.",
        tags: ["DBUpgrades", "CircuitInstallation", "AuthorityCompliance"],
        bullets: ["Electrical rewiring contractor", "approved electrical upgrade villa", "Distribution board upgrade apartment"],
        buttonText: "ELECTRICAL REWIRING →"
      },
      {
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
        title: "Tiling",
        description: "Premium tiling solutions for floors and walls with meticulous attention to detail.",
        tags: ["FloorTiling", "WallTiling", "Ceramic"],
        bullets: ["Premium tile installation", "Custom floor patterns", "Bathroom and kitchen tiling"],
        buttonText: "TILING →"
      },
      {
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
        title: "Wall Paneling",
        description: "Custom wall paneling to add texture and depth to your interiors.",
        tags: ["WoodPaneling", "AcousticPanels", "DecorativePanels"],
        bullets: ["Custom wood paneling", "Acoustic wall solutions", "Decorative feature walls"],
        buttonText: "WALL PANELING →"
      },
      {
        img: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80",
        title: "Textured & Paint",
        description: "High-quality textured finishes and professional painting services.",
        tags: ["TexturedPaint", "InteriorPainting", "WallFinishes"],
        bullets: ["Professional interior painting", "Custom textured finishes", "Premium wall coatings"],
        buttonText: "TEXTURED & Paint →"
      },
      {
        img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80",
        title: "Partitions",
        description: "Functional and aesthetic space division with custom partition walls.",
        tags: ["GlassPartitions", "GypsumWalls", "OfficePartitions"],
        bullets: ["Glass partition systems", "Gypsum wall installation", "Acoustic office partitions"],
        buttonText: "PARTITIONS →"
      },
      {
        img: "/images/fitout_dubai_r2/drainage.webp",
        title: "Plumbing Drainage",
        description: "Professional plumbing and drainage installation to meet all authority standards.",
        tags: ["CopperPiping", "PPRPiping", "DrainageSystems"],
        bullets: ["Plumbing contractor fitout", "Luxury bathroom plumbing installation", "Drainage system upgrade villa"],
        buttonText: "PLUMBING DRAINAGE →"
      },
      {
        img: "/images/fitout_dubai_r2/smarthome.webp",
        title: "Smart home integration",
        description: "Modern smart home systems for automated lighting, security, and climate control.",
        tags: ["LightingAutomation", "SecuritySystems", "AVSystems"],
        bullets: ["Smart home automation", "Luxury home automation system villa", "KNX smart lighting installation"],
        buttonText: "SMART HOME INTEGRATION →"
      }
    ]`;

const lines = data.split('\n');
let start = -1;
let end = -1;
for(let i=250; i<400; i++) {
  if (lines[i].includes('gallery: [') && start === -1) { start = i; }
  if (start !== -1 && i > start && lines[i].includes('    ]') && lines[i+1] && lines[i+1].includes('  },')) { end = i; break; }
}

if (start !== -1 && end !== -1) {
  lines.splice(start, end - start + 1, newGallery);
  fs.writeFileSync('c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/[id]/data.ts', lines.join('\n'));
  console.log('Successfully updated gallery.');
} else {
  console.log('Could not find gallery bounds. Start:', start, 'End:', end);
}
