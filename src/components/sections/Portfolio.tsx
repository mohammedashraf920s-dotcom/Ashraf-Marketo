/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ShoppingCart, Layout, Globe, ChevronRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: 'ShopMaster',
    tag: 'AI POWERED E-COMMERCE SOLUTION',
    description: 'Built a complete automated e-commerce system that handles inventory, orders, and customer support — reducing manual work by 80%.',
    solution: 'End-to-end sales funnel with AI-powered customer support and automated order processing.',
    stats: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Revenue Boost', value: '3x' }
    ],
    image: 'https://picsum.photos/seed/shopmaster/800/600',
    icon: ShoppingCart
  },
  {
    title: 'No-Code Bundle Site',
    tag: 'HIGH CONVERTING LANDING PAGE',
    description: 'Designed and developed a premium landing page that converts visitors into buyers with optimized copy and seamless checkout.',
    solution: 'Strategic layout with trust signals, social proof, and frictionless payment integration.',
    stats: [
      { label: 'Conversion Rate', value: '12%' },
      { label: 'Bounce Rate', value: '-45%' }
    ],
    image: 'https://picsum.photos/seed/nocode/800/600',
    icon: Layout
  },
  {
    title: 'Omor AI Builder',
    tag: 'SAAS TOOL BUILT WITH LOVABLE',
    description: 'Created an AI-powered website builder that enables users to launch professional sites in minutes without any coding knowledge.',
    solution: 'Intuitive drag-and-drop interface with AI content generation and instant deployment.',
    stats: [
      { label: 'Build Time', value: '5 min' },
      { label: 'Users Served', value: '500+' }
    ],
    image: 'https://picsum.photos/seed/aibuilder/800/600',
    icon: Globe
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="badge-pill mb-4 italic tracking-widest text-[11px]">Selected Works</span>
          <h2 className="serif-heading text-6xl md:text-7xl">
            Case <span className="text-accent">Studies</span>
          </h2>
          <p className="text-text-dim mt-6 max-w-2xl mx-auto">
             Real solutions I've built for real businesses — focused on automation, efficiency, and measurable results.
          </p>
        </div>

        <div className="space-y-32">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-video rounded-[32px] overflow-hidden border border-border accent-glow relative">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent">
                    <study.icon size={24} />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                   <span className="text-[10px] font-bold text-accent tracking-[2px] uppercase mb-3 block">{study.tag}</span>
                   <h3 className="serif-heading text-4xl md:text-5xl mb-6">{study.title}</h3>
                   <p className="text-text-dim text-lg leading-relaxed">{study.description}</p>
                </div>

                <div className="bg-secondary-bg/50 border border-border p-6 rounded-2xl">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                      <div>
                         <span className="text-[11px] font-bold text-white uppercase tracking-widest block mb-2">The Solution</span>
                         <p className="text-sm text-text-dim leading-relaxed">{study.solution}</p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   {study.stats.map(stat => (
                     <div key={stat.label} className="bg-secondary-bg/30 border border-border p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-accent">{stat.value}</div>
                        <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1">{stat.label}</div>
                     </div>
                   ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline text-xs px-8 py-3.5 group"
                >
                  View Case Study
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-12 py-4"
          >
             Start Your Project
             <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
