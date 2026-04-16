/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Code2, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  CheckCircle2,
  Facebook,
  Instagram,
  Youtube,
  Play,
  Apple,
  ShoppingBag,
  Smartphone
} from 'lucide-react';

const LOGOS = [
  { name: 'Supabase', url: 'https://supabase.com' },
  { name: 'Lovable', url: 'https://lovable.dev' },
  { name: 'Bolt.new', url: 'https://bolt.new' },
  { name: 'Google Gemini', url: 'https://gemini.google.com' },
  { name: 'Stripe', url: 'https://stripe.com' },
];

const SPECIALIZED_SERVICES = [
  {
    title: 'Facebook Marketing',
    description: 'High-ROI ad campaigns tailored to drive sales and active engagement.',
    icon: Facebook,
    color: 'hover:text-blue-500'
  },
  {
    title: 'Instagram Marketing',
    description: 'Visual storytelling and community management to grow your brand presence.',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    title: 'TikTok Marketing',
    description: 'Viral content strategies designed for the next generation of social media.',
    icon: Smartphone,
    color: 'hover:text-cyan-400'
  },
  {
    title: 'YouTube Marketing',
    description: 'Channel growth tactics and SEO optimization to dominate the video search landscape.',
    icon: Youtube,
    color: 'hover:text-red-500'
  },
  {
    title: 'Short Video Editing',
    description: 'Professional editing for Reels, Shorts, and TikToks optimized for high retention.',
    icon: Play,
    color: 'hover:text-indigo-400'
  },
  {
    title: 'Apple ID Create Marketing',
    description: 'Specialized lead generation and account creation marketing strategies.',
    icon: Apple,
    color: 'hover:text-gray-300'
  },
  {
    title: 'E-commerce Development',
    description: 'AI-powered, high-converting online stores built for scale and performance.',
    icon: ShoppingBag,
    color: 'hover:text-green-500'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-bg">
      {/* Logos Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <p className="text-center text-[10px] uppercase tracking-[4px] font-bold text-text-dim mb-8">
          Powering Businesses with <span className="text-accent">Next-Gen Tech</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
           {LOGOS.map((logo) => (
             <div key={logo.name} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg" />
                <span className="text-sm font-bold tracking-tighter">{logo.name}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Core Services Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-pill mb-4 italic">What I Do</span>
          <h2 className="serif-heading text-5xl md:text-6xl mb-6">
            Our <span className="gradient-gold">Digital Expertise</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            From social media dominance to custom high-converting e-commerce platforms — I provide everything you need to grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIZED_SERVICES.map((service) => (
            <div key={service.title} className="card-premium h-full flex flex-col group hover:accent-glow p-8">
              <div className={`w-12 h-12 rounded-xl bg-accent/5 border border-white/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-300`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="serif-heading text-xl mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-text-dim text-[13px] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 group-hover:text-accent transition-colors"
              >
                Inquire Now
                <ChevronRight size={14} />
              </button>
            </div>
          ))}
          
          {/* Custom Web Dev Highlight - Larger Card */}
          <div className="lg:col-span-1 card-premium h-full flex flex-col group border-accent/20 bg-accent/5 p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Zap size={120} />
             </div>
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center mb-6">
                 <Zap size={24} />
               </div>
               <h3 className="serif-heading text-xl mb-3 text-accent">Business Automation</h3>
               <p className="text-text-dim text-[13px] leading-relaxed mb-6">
                 Full-scale AI systems designed to handle your sales, support, and operations automatically.
               </p>
               <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-accent"
               >
                 Book Consultation
                 <ChevronRight size={14} />
               </button>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm px-10"
            >
                View Case Studies
                <ChevronRight size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};
