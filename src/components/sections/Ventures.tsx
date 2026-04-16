/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Rocket, Package, ArrowRight, Check } from 'lucide-react';

const VENTURES = [
  {
    title: 'DokanGrowth',
    tag: 'My AI Automation Agency',
    description: 'Empowering E-Commerce businesses with automated websites and sales funnels.',
    features: ['Custom Websites', 'Sales Funnels', 'AI Automation'],
    cta: 'Visit Agency',
    icon: Rocket,
    color: 'blue',
    href: 'https://dokangrowth.com'
  },
  {
    title: 'No-Code Mastery Bundle',
    tag: 'Asset Bundle & Toolkit',
    description: 'A complete toolkit containing premium credits, secret prompts, and resources to kickstart your No-Code career instantly.',
    features: ['Premium Credits', 'Secret Prompts', 'Exclusive Resources'],
    cta: 'Get the Bundle',
    icon: Package,
    color: 'gold',
    href: 'https://nocodemastery.bundle'
  }
];

export const Ventures = () => {
  return (
    <section id="ventures" className="py-24 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-pill mb-4 italic">My Ecosystem</span>
          <h2 className="serif-heading text-5xl md:text-6xl mb-6">
            My <span className="text-accent">Ventures</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            Two paths to success — whether you want me to build it for you or get the tools to build it yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {VENTURES.map((venture) => (
            <div key={venture.title} className={`relative p-[1px] rounded-[32px] overflow-hidden group`}>
               {/* Border Gradient Background */}
               <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-20 group-hover:opacity-100 ${venture.color === 'blue' ? 'from-blue-500/50 to-transparent' : 'from-accent/50 to-transparent'}`} />
               
               <div className="relative bg-secondary-bg h-full rounded-[31px] p-8 lg:p-12 flex flex-col hover:bg-secondary-bg/80 transition-colors">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${venture.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-accent/10 text-accent'}`}>
                     <venture.icon size={32} />
                  </div>

                  <span className="badge-pill self-start mb-4 text-[10px] uppercase font-bold tracking-widest">{venture.tag}</span>
                  
                  <h3 className="serif-heading text-3xl md:text-4xl mb-6">
                    {venture.title}
                  </h3>
                  
                  <p className="text-text-dim text-lg mb-8 leading-relaxed">
                    {venture.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {venture.features.map(f => (
                       <span key={f} className="badge-pill bg-white/5 border-white/5 text-[11px] flex items-center gap-1.5">
                          <Check size={12} className={venture.color === 'blue' ? 'text-blue-400' : 'text-accent'} />
                          {f}
                       </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5">
                     <a 
                        href={venture.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 group-hover:gap-4 transition-all ${venture.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-accent text-black'}`}
                     >
                        {venture.cta}
                        <ArrowRight size={18} />
                     </a>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
