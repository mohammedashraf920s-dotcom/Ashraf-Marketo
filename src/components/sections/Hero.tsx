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
          <h1 className="serif-heading text-6xl md:text-8xl lg:text-9xl mb-10">
            <span className="text-white">Digital</span> <br/>
            <span className="gradient-gold">Marketing</span> <br/>
            <span className="text-white">Specialist.</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-10">
            {['Facebook & Instagram', 'TikTok & YouTube', 'Short Video Editing', 'E-commerce Dev'].map((badge) => (
              <span key={badge} className="bg-secondary-bg/50 border border-accent/20 px-5 py-2 rounded-full text-[13px] font-bold text-white/90 hover:border-accent/50 transition-colors uppercase tracking-[1px]">
                {badge}
              </span>
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[540px] aspect-[4/5] rounded-[60px] overflow-hidden border-[1.5px] border-accent/15 shadow-[0_0_80px_-20px_rgba(255,190,51,0.15)] group bg-secondary-bg">
            <img 
              src="/profile.png?v=12" 
              alt="Ashraf Marketo" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
              className="absolute top-8 right-8 bg-black/60 backdrop-blur-2xl border border-white/5 p-5 rounded-[32px] flex items-center gap-5 shadow-2xl z-20 min-w-[180px]"
            >
               <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                 <Briefcase size={26} fill="currentColor" fillOpacity={0.1} />
               </div>
               <div>
                  <div className="text-3xl font-bold leading-none text-white font-sans tracking-tight">50+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[2px] font-bold mt-2">Projects Delivered</div>
               </div>
            </motion.div>

            {/* Status Indicator */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-white/5 px-8 py-4 rounded-full flex items-center gap-4 shadow-2xl z-20"
            >
               <div className="flex h-3.5 w-3.5 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
               </div>
               <span className="text-[15px] font-bold text-white/90 tracking-wider">Open for Projects</span>
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
