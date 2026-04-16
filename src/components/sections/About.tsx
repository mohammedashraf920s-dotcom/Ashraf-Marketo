/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const WHY_WORK_WITH_ME = [
  'Founder of DokanGrowth — serving E-commerce businesses.',
  'Creator of No-Code Mastery Bundle — empowering builders.',
  'Built automated systems, generating consistent revenue.',
  'Helping businesses scale with AI-powered solutions.',
  'Proven track record of delivering measurable results.'
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[3/4] rounded-[40px] overflow-hidden border-2 border-accent/20 accent-glow">
             <img 
               src="/profile-about.jpg" 
               alt="Ashraf Marketo Professional" 
               className="w-full h-full object-cover"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ashraf-about/600/800';
               }}
             />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div>
            <span className="badge-pill mb-4 italic">About Me</span>
            <h2 className="serif-heading text-5xl md:text-6xl mb-6">
              Empowering Brands with <br/> 
              <span className="text-accent">Digital Strategy</span>
            </h2>
          </div>

          <div className="space-y-6 text-text-dim text-[16px] leading-relaxed max-w-xl">
            <p>
              Hi, I’m <span className="text-white font-bold">Ashraf</span> — a passionate and results-driven Digital Marketing Specialist dedicated to helping businesses grow in the digital world.
            </p>
            <p>
              I specialize in powerful social media marketing across Facebook, Instagram, TikTok, and YouTube, creating strategies that increase engagement, build brand awareness, and drive real results. From content planning to execution, I focus on what actually works.
            </p>
            <p>
              I’m also experienced in short video editing, producing eye-catching content that captures attention and keeps audiences engaged. In addition, I provide Apple ID creation support to help clients smoothly set up their digital ecosystem.
            </p>
            <p>
              Beyond marketing, I design and develop modern e-commerce websites that are clean, user-friendly, and optimized for conversions. My goal is simple — to help your business grow faster with smart, effective digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Social Media Marketing', 'Short Video Editing', 'E-commerce Dev', 'Apple ID Support'].map((badge) => (
              <span key={badge} className="badge-pill text-[11px] px-3">{badge}</span>
            ))}
          </div>

          <div className="bg-secondary-bg/50 border border-border p-8 rounded-[32px] space-y-4">
             <h4 className="font-bold text-white mb-4">Why Work With Me?</h4>
             <div className="space-y-3">
                {WHY_WORK_WITH_ME.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-text-dim leading-snug">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-10"
          >
            Learn More About Me
            <ChevronRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
