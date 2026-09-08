"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef } from 'react';
import { HardHat, Paintbrush, Building2, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const expertise = [
  {
    title: "Retail-First Design",
    desc: "Specialized layouts for fashion, lifestyle, and high-end retail brands that drive footfall and conversion.",
    icon: <Paintbrush className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "01",
  },
  {
    title: "In-House Manufacturing",
    desc: "Custom furniture and carpentry produced in our own 9,000 sq.ft specialized facilities with master artisans.",
    icon: <Building2 className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "02",
  },
  {
    title: "Turnkey Execution",
    desc: "Complete setup from tiling to fire safety, handed over ready for product placement — on time, every time.",
    icon: <CheckCircle className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "03",
  },
  {
    title: "Technical Excellence",
    desc: "Integrated AC, electrical, and civil works designed and managed by one elite multi-discipline team.",
    icon: <HardHat className="w-10 h-10" style={{ color: '#E8A020' }} />,
    num: "04",
  },
];

/* ─── Vertical Slider (desktop) ─── */
const VerticalSlider = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // 1 = down, -1 = up

  const go = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setActive((next + expertise.length) % expertise.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % expertise.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (d: number) => ({ y: d > 0 ? 60 : -60, opacity: 0 }),
    center: () => ({ y: 0, opacity: 1 }),
    exit: (d: number) => ({ y: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const card = expertise[active];

  return (
    <div className="flex flex-col h-full w-full gap-6">

      {/* Animated card */}
      <div className="w-full h-[380px] md:h-[480px] lg:h-[520px] overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-sm bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EF] to-[#F5EFEB] border border-brand-gold/30">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full p-8 md:p-12 xl:p-16 flex flex-col justify-between"
          >
            {/* top: number + icon */}
            <div className="flex items-start justify-between">
              <span className="text-6xl md:text-8xl font-sans font-light leading-none select-none text-brand-gold/35">
                {card.num}
              </span>
              <div
                className="p-3 md:p-4 rounded-full bg-brand-gold/15 border border-brand-gold/40 shadow-sm"
              >
                {React.cloneElement(card.icon as React.ReactElement<any>, { className: 'w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 text-brand-gold' })}
              </div>
            </div>

            {/* bottom: divider + title + desc */}
            <div>
              <div className="w-12 h-[2.5px] mb-4 xl:mb-6 bg-brand-gold rounded-full" />
              <h3 className="text-2xl xl:text-3xl uppercase tracking-widest mb-3 xl:mb-4 font-sans font-semibold text-brand-dark">
                {card.title}
              </h3>
              <p className="text-sm xl:text-base font-light leading-relaxed max-w-xl text-neutral-600">
                {card.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between mt-4 px-2">
        <button
          onClick={() => go(active - 1, -1)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold/40 text-brand-gold transition-all duration-300 hover:scale-110 hover:bg-brand-gold hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center justify-center gap-4">
          {expertise.map((e, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              className="group flex flex-col items-center gap-1"
              aria-label={`Go to ${e.title}`}
            >
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  height: '6px',
                  width: i === active ? '32px' : '6px',
                  backgroundColor: i === active ? '#E8A020' : 'rgba(232,160,32,0.25)',
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => go(active + 1, 1)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold/40 text-brand-gold transition-all duration-300 hover:scale-110 hover:bg-brand-gold hover:text-white"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
};

/* ─── Mobile Horizontal Swipe Slider ─── */
const MobileSlider = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const go = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setActive((next + expertise.length) % expertise.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % expertise.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      dx < 0 ? go(active + 1, 1) : go(active - 1, -1);
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: () => ({ x: 0, opacity: 1 }),
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const card = expertise[active];

  return (
    <div className="relative w-full select-none">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ touchAction: 'pan-y' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center text-center rounded-2xl shadow-lg px-8 py-12 mx-2 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EF] to-[#F5EFEB] border border-brand-gold/30 relative overflow-hidden"
          >
            <div className="mb-6 p-4 rounded-full bg-brand-gold/15 border border-brand-gold/40 shadow-sm">
              {card.icon}
            </div>
            <div className="w-10 h-[2px] mb-4 bg-brand-gold rounded-full" />
            <span className="text-xs font-semibold text-brand-gold tracking-[0.2em] uppercase mb-1">
              {card.num}
            </span>
            <h3 className="text-lg font-sans font-semibold uppercase tracking-widest mb-3 text-brand-dark">
              {card.title}
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-[280px] text-neutral-600">
              {card.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {expertise.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > active ? 1 : -1)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === active ? '#E8A020' : 'rgba(232,160,32,0.3)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const ExpertiseSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="w-full px-6 md:px-12">

        {/* ── Desktop / Laptop: split layout ── */}
        <div className="hidden md:grid lg:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Left: vertical slider */}
          <div className="lg:col-span-7 w-full h-[380px] md:h-[480px] lg:h-[520px]">
            <VerticalSlider />
          </div>

          {/* Right: heading block */}
          <div className="lg:col-span-5 lg:pl-4 xl:pl-8 flex flex-col justify-center items-start text-left">
            <h2 className="section-title text-brand-dark w-full mb-6 md:mb-8 text-left">
              OUR CORE <br />
              <span className="text-brand-gold italic font-normal block mt-2">Technical Expertise</span>
            </h2>
            <p className="text-neutral-500 text-sm xl:text-base font-light leading-relaxed max-w-md text-left">
              Over 25 years of fitout mastery, fused with in-house manufacturing and end-to-end project management — delivered by a single elite team.
            </p>

            {/* pointers */}
            <ul className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-6 w-full text-left justify-items-start">
              {expertise.map((e, i) => (
                <li key={i} className="flex items-center justify-start gap-2 xl:gap-3 text-brand-dark text-[10px] xl:text-xs font-semibold uppercase tracking-widest w-full">
                  <CheckCircle size={14} className="text-brand-gold w-3 h-3 xl:w-4 xl:h-4 shrink-0" />
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mobile: heading + horizontal slider ── */}
        <div className="block md:hidden">
          <div className="text-center mb-6">
            <h2 className="section-title text-brand-dark w-full mb-6 md:mb-8 text-center">
              OUR CORE <br />
              <span className="text-brand-gold italic font-normal block mt-2">Technical Expertise</span>
            </h2>
          </div>
          <MobileSlider />
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
