"use client";

import { motion } from 'motion/react';
import React from 'react';
import Magnetic from '../Magnetic';

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  const handleVideoRate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.playbackRate = 1.25;
  };

  return (
    <section className="relative min-h-[680px] h-[100svh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with Subtle Zoom */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{
          opacity: { duration: 1.8, ease: "easeOut" },
          scale: { duration: 8, ease: [0.25, 1, 0.5, 1] }
        }}
        className="absolute inset-0 z-0 bg-brand-dark"
      >
        <div className="hero-overlay" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero.webp"
          onLoadedMetadata={handleVideoRate}
          onPlay={handleVideoRate}
          className="w-full h-full object-cover object-center"
        >
          <source src="/METRO%20RETAIL%20HOME%20PAGE%20VIDEO%201.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hidden md:block w-full text-center whitespace-nowrap text-brand-gold md:text-sm lg:text-base tracking-widest hero-eyebrow mb-8 px-0">
            Crafting Exceptional Environments
          </span>
          <motion.h1
            className="hero-title-1 mb-8"
            
          >
            <div className="overflow-hidden block">
              <span className="whitespace-nowrap text-balance">
                {"Retail Fit-Out".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={isLoaded ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-white uppercase font-light"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden block">
              <span className="whitespace-nowrap text-balance">
                {"Turnkey Excellence".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={isLoaded ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.2 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-brand-gold italic hero-title-2 font-normal"
                    
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.h1>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-0">
            <Magnetic>
              <a href="/portfolio" className="flex items-center justify-center w-[220px] sm:w-auto whitespace-nowrap px-4 py-2 sm:px-6 md:px-8 sm:py-2.5 md:py-3 bg-brand-gold text-white text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full shadow-2xl">
                Explore Portfolio
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/contact" className="flex items-center justify-center w-[220px] sm:w-auto whitespace-nowrap px-4 py-2 sm:px-6 md:px-8 sm:py-2.5 md:py-3 bg-white/5 backdrop-blur-md border border-white/30 text-white text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-full shadow-lg">
                Start a Conversation
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
