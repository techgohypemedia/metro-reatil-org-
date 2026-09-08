"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { inhouseManufacturingItems, ManufacturingUnitItem } from '../../data/inhouseManufacturing';
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Factory, UserCheck, ShieldCheck, ArrowRight, Gauge, Wrench, Cpu, Check } from 'lucide-react';

const CATEGORIES = [
  "ALL MACHINERY",
  "CNC Machines",
  "Laser Machines",
  "Panel Saws",
  "Edge Banding",
  "Automatic Edge Bander",
  "Finishing & Paint",
  "Assembly Bay"
];

const InhouseManufacturingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL MACHINERY");
  const [selectedItem, setSelectedItem] = useState<ManufacturingUnitItem | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') {
        const next = (activeIdx + 1) % inhouseManufacturingItems.length;
        setActiveIdx(next);
        setSelectedItem(inhouseManufacturingItems[next]);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (activeIdx - 1 + inhouseManufacturingItems.length) % inhouseManufacturingItems.length;
        setActiveIdx(prev);
        setSelectedItem(inhouseManufacturingItems[prev]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, activeIdx]);

  const filteredItems = activeCategory === "ALL MACHINERY"
    ? inhouseManufacturingItems
    : inhouseManufacturingItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: ManufacturingUnitItem) => {
    const idx = inhouseManufacturingItems.findIndex(i => i.id === item.id);
    setActiveIdx(idx >= 0 ? idx : 0);
    setSelectedItem(item);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (activeIdx + 1) % inhouseManufacturingItems.length;
    setActiveIdx(next);
    setSelectedItem(inhouseManufacturingItems[next]);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (activeIdx - 1 + inhouseManufacturingItems.length) % inhouseManufacturingItems.length;
    setActiveIdx(prev);
    setSelectedItem(inhouseManufacturingItems[prev]);
  };

  return (
    <section className="my-10 md:my-16 bg-white border border-neutral-200/90 rounded-xl p-6 sm:p-10 md:p-14 shadow-sm">
      {/* Editorial Corporate Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-semibold uppercase tracking-widest mb-4">
          <Factory className="w-3.5 h-3.5 text-brand-gold" />
          <span>Delhi & Greater Noida Production Facilities</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sans text-brand-dark uppercase tracking-[0.1em] sm:tracking-[0.16em] md:tracking-[0.22em] leading-snug mb-4">
          Welcome to Our <span className="text-brand-gold">In-House</span> Manufacturing Unit
        </h2>

        <div className="w-20 h-0.5 bg-brand-gold mx-auto mb-5" />

        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Our specialized production facilities in Delhi and Greater Noida are built for end-to-end modular retail fixtures, architectural joinery, and custom fabrication. Operating 24x7 with precision European machinery and certified technicians, we ensure complete control over timelines, quality, and structural integrity.
        </p>
      </div>

      {/* Production Infrastructure Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 md:mb-12">
        <div className="bg-neutral-50/80 border border-neutral-200/80 rounded-lg p-5 text-center transition-all hover:bg-white hover:border-brand-gold/50 hover:shadow-sm">
          <div className="text-brand-dark font-bold text-2xl sm:text-3xl mb-1">25,000+</div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">Sq.Ft Production Area</div>
        </div>
        <div className="bg-neutral-50/80 border border-neutral-200/80 rounded-lg p-5 text-center transition-all hover:bg-white hover:border-brand-gold/50 hover:shadow-sm">
          <div className="text-brand-dark font-bold text-2xl sm:text-3xl mb-1">5-Axis CNC</div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">Precision Milling Hub</div>
        </div>
        <div className="bg-neutral-50/80 border border-neutral-200/80 rounded-lg p-5 text-center transition-all hover:bg-white hover:border-brand-gold/50 hover:shadow-sm">
          <div className="text-brand-dark font-bold text-2xl sm:text-3xl mb-1">10,000+</div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">Monthly Units Output</div>
        </div>
        <div className="bg-neutral-50/80 border border-neutral-200/80 rounded-lg p-5 text-center transition-all hover:bg-white hover:border-brand-gold/50 hover:shadow-sm">
          <div className="text-brand-dark font-bold text-2xl sm:text-3xl mb-1">24x7 Shifts</div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">Continuous Operations</div>
        </div>
      </div>

      {/* Clean Category Filter Navigation */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-10 pb-4 border-b border-neutral-100">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? "bg-white text-brand-dark border border-white shadow-sm font-extrabold"
                : "bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200"
            }`}
          >
            {cat === "ALL MACHINERY" ? `All Machinery (${inhouseManufacturingItems.length})` : cat}
          </button>
        ))}
      </div>

      {/* Grounded, Realistic Machinery Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group bg-white border border-neutral-200/90 hover:border-brand-gold/70 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            {/* Real Clean Photo Container */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 bg-neutral-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                loading="lazy"
              />

              {/* Click to Zoom Pill */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded shadow-md flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>View Full</span>
              </div>

              {/* Real Operator Tag */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-xs border border-neutral-200/80 px-3 py-1.5 rounded text-xs font-semibold text-brand-dark shadow-sm">
                  <UserCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{item.operatorRole}</span>
                </div>
              </div>
            </div>

            {/* Structured Engineering Details */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-brand-gold mb-1.5">
                  {item.machineType}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-gold transition-colors duration-200 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="pt-4 border-t border-neutral-150 grid grid-cols-2 gap-2">
                {item.specs.map((spec, i) => (
                  <div key={i} className="bg-neutral-50 p-2.5 rounded border border-neutral-200/70">
                    <div className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider">{spec.label}</div>
                    <div className="text-xs font-bold text-brand-dark mt-0.5 truncate">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quality Assurance & Turnkey Facility Note */}
      <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
          <span>Full factory pre-assembly and multi-point QA checks conducted prior to site dispatch.</span>
        </div>
        <div className="text-neutral-500 font-medium text-xs">
          Facilities: Delhi (Okhla / Mayapuri) & Greater Noida Industrial Area
        </div>
      </div>

      {/* Clean Corporate Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-auto border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    Facility Bay Inspection • {activeIdx + 1} of {inhouseManufacturingItems.length}
                  </span>
                  <div className="text-sm font-bold text-brand-dark truncate mt-0.5">{selectedItem.title}</div>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-md bg-white hover:bg-neutral-200 text-neutral-600 hover:text-brand-dark flex items-center justify-center transition-colors border border-neutral-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Prev / Next Arrows */}
              <button
                onClick={prevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-lg border border-neutral-200 transition-transform hover:scale-105"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-lg border border-neutral-200 transition-transform hover:scale-105"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image in Modal */}
              <div className="relative w-full h-64 sm:h-80 md:h-[380px] bg-neutral-100 shrink-0 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4 bg-white/95 px-3 py-1.5 rounded border border-neutral-200 text-xs font-semibold text-brand-dark shadow-sm">
                  <span>Operator: {selectedItem.operatorRole}</span>
                </div>
              </div>

              {/* Detailed Technical Specs & Description */}
              <div className="p-6 overflow-y-auto bg-white">
                <p className="text-neutral-700 text-sm leading-relaxed mb-5">
                  {selectedItem.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200">
                  {selectedItem.specs.map((spec, i) => (
                    <div key={i} className="bg-neutral-50 p-3 rounded border border-neutral-200">
                      <div className="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">{spec.label}</div>
                      <div className="text-xs font-bold text-brand-dark mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InhouseManufacturingSection;
