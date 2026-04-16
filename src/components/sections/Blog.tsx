/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, ChevronRight, PenTool } from 'lucide-react';

const FEATURED_POSTS = [
  {
    title: "The Future of AI Automation in 2024",
    category: "AI AUTOMATION",
    date: "May 12, 2024",
    image: "https://picsum.photos/seed/blog1/800/500",
    excerpt: "Discover how AI is reshaping the business landscape and what you need to do to stay ahead of the curve."
  },
  {
    title: "Mastering No-Code: A Guide for Beginners",
    category: "NO-CODE",
    date: "April 28, 2024",
    image: "https://picsum.photos/seed/blog2/800/500",
    excerpt: "Everything you need to know to start building professional web applications without writing a single line of code."
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="badge-pill mb-4 italic">Resources & Insights</span>
            <h2 className="serif-heading text-5xl md:text-6xl">
              Featured <span className="text-accent">Articles</span>
            </h2>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-sm px-8"
          >
            View All Articles
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_POSTS.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="card-premium p-0 overflow-hidden flex flex-col h-full bg-secondary-bg/30">
                <div className="aspect-video overflow-hidden">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-accent tracking-[2px]">{post.category}</span>
                     <div className="flex items-center gap-1.5 text-text-dim text-[11px]">
                        <Calendar size={12} />
                        {post.date}
                     </div>
                  </div>
                  <h3 className="serif-heading text-2xl group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-text-dim leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-sm font-bold text-white group/btn">
                     Read Article
                     <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
