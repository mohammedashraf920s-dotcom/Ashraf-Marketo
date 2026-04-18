/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, MousePointer2, Briefcase } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 lg:px-20 overflow-hidden bg-bg">
      <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-8">
            Digital <br/>
            <span className="gradient-gold">Marketing</span> <br/>
            <span className="gradient-gold">Specialist.</span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Facebook & Instagram', 'TikTok & YouTube', 'Short Video Editing', 'E-commerce Dev'].map((badge) => (
              <span key={badge} className="badge-pill">{badge}</span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-text-dim mb-10 max-w-xl leading-relaxed">
            I help businesses grow with powerful social media marketing, high-converting e-commerce solutions, and short video content.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto"
            >
              <Calendar size={18} />
              Book a Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[40px] overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 accent-glow group">
            <img 
              src="/profile.png?v=11" 
              alt="Ashraf Marketo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = 'https://pollinations.ai/p/professional-young-man-brown-wool-tweed-blazer-dark-brown-shirt-beige-pleated-trousers-beard-styled-dark-hair-leaning-on-vintage-suitcase-cinematic-lighting-8k?width=800&height=1000&nologo=true';
              }}
            />
            
            {/* Project Deliver Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl border border-white/10 p-4 rounded-3xl flex items-center gap-4 shadow-2xl z-20"
            >
               <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                 <Briefcase size={22} fill="currentColor" fillOpacity={0.2} />
               </div>
               <div>
                  <div className="text-2xl font-bold leading-none text-white font-sans">50+</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-1">Projects Delivered</div>
               </div>
            </motion.div>

            {/* Status Indicator */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl z-20"
            >
               <div className="flex h-3 w-3 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </div>
               <span className="text-sm font-bold text-white tracking-wide">Open for Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
