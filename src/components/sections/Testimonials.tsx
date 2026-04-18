/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, Quote, ChevronRight, Facebook, Instagram } from 'lucide-react';

const REVIEWS = [
  {
    id: "REV-001",
    name: "Kaitlin Beaver",
    date: "October 4, 2024",
    content: "Ashraf's expertise in Facebook ads has significantly increased our sales. Highly professional!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Kaitlin+Beaver&background=00a8cc&color=fff",
    city: "New York"
  },
  {
    id: "REV-002",
    name: "Nhân Lê",
    date: "August 5, 2024",
    content: "The best digital marketing service I've experienced. My business growth is now unstoppable.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Nhan+Le&background=random&color=fff",
    city: "Ho Chi Minh City"
  },
  {
    id: "REV-003",
    name: "Dhrupo Nil",
    date: "June 14, 2024",
    content: "Excellent strategic planning and execution. Truly transformed my brand identity.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Dhrupo+Nil&background=random&color=fff",
    city: "Dhaka"
  },
  {
    id: "REV-004",
    name: "Sarah Miller",
    date: "November 2, 2024",
    content: "Incredible attention to detail. My ROI went up by 300% in just two months.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sarah+Miller&background=random&color=fff",
    city: "London"
  },
  {
    id: "REV-005",
    name: "Fahim Murshed",
    date: "May 10, 2024",
    content: "The short video editing style is world-class. My Reels are finally going viral!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Fahim+Murshed&background=random&color=fff",
    city: "Dubai"
  },
  {
    id: "REV-006",
    name: "James Wilson",
    date: "December 12, 2024",
    content: "Professional, timely, and results-oriented. Ashraf is a marketing genius.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=James+Wilson&background=random&color=fff",
    city: "Toronto"
  },
  {
    id: "REV-007",
    name: "Arif Ahmed",
    date: "January 5, 2025",
    content: "Outstanding e-commerce solutions. My website conversion rate is better than ever.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Arif+Ahmed&background=random&color=fff",
    city: "Sylhet"
  },
  {
    id: "REV-008",
    name: "Elena Rodriguez",
    date: "February 10, 2025",
    content: "Best experience ever with a digital specialist. High quality and great communication.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=random&color=fff",
    city: "Madrid"
  },
  {
    id: "REV-009",
    name: "Liam O'Connor",
    date: "March 15, 2025",
    content: "He knows exactly how to capture the audience's attention. Truly impressive work.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Liam+OConnor&background=random&color=fff",
    city: "Sydney"
  },
  {
    id: "REV-010",
    name: "Sofia Ivanova",
    date: "April 20, 2025",
    content: "Strategic thinking combined with creative execution. A perfect partner for brand growth.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sofia+Ivanova&background=random&color=fff",
    city: "Berlin"
  },
  {
    id: "REV-011",
    name: "Tanvir Hasan",
    date: "September 8, 2024",
    content: "Great communication and very skilled in meta ads.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Tanvir+Hasan&background=random&color=fff",
    city: "Chittagong"
  },
  {
    id: "REV-012",
    name: "Chloe Dupont",
    date: "October 18, 2024",
    content: "Magnifique! The aesthetic sensibility is exactly what our brand needed.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Chloe+Dupont&background=random&color=fff",
    city: "Paris"
  },
  {
    id: "REV-013",
    name: "Yuki Tanaka",
    date: "November 30, 2024",
    content: "Highly efficient and data-driven approach to marketing.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Yuki+Tanaka&background=random&color=fff",
    city: "Tokyo"
  },
  {
    id: "REV-014",
    name: "Omar Al-Farsi",
    date: "December 5, 2024",
    content: "The best social media manager I've worked with. Professional and creative.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Omar+AlFarsi&background=random&color=fff",
    city: "Riyadh"
  },
  {
    id: "REV-015",
    name: "Isabella Rossi",
    date: "January 14, 2025",
    content: "Exceeded all my expectations. My sales have never been this high.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Isabella+Rossi&background=random&color=fff",
    city: "Milan"
  },
  {
    id: "REV-016",
    name: "Rashed Karim",
    date: "February 22, 2025",
    content: "Exceptional service for my local business.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rashed+Karim&background=random&color=fff",
    city: "Dhaka"
  },
  {
    id: "REV-017",
    name: "Mia Andersson",
    date: "March 5, 2025",
    content: "Fantastic eye for design and marketing trends.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Mia+Andersson&background=random&color=fff",
    city: "Stockholm"
  },
  {
    id: "REV-018",
    name: "Noah Smith",
    date: "April 1, 2025",
    content: "Transformed our digital presence in just one month.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Noah+Smith&background=random&color=fff",
    city: "Chicago"
  },
  {
    id: "REV-019",
    name: "Amira Zaid",
    date: "May 12, 2025",
    content: "The quality of work is consistently high. Very satisfied.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Amira+Zaid&background=random&color=fff",
    city: "Cairo"
  },
  {
    id: "REV-020",
    name: "Lucas Ferreira",
    date: "June 20, 2024",
    content: "Brilliant strategy for our startup launch.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Lucas+Ferreira&background=random&color=fff",
    city: "Lisbon"
  },
  {
    id: "REV-021",
    name: "Sumi Akter",
    date: "July 5, 2024",
    content: "Excellent Facebook marketing work for my boutique.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sumi+Akter&background=random&color=fff",
    city: "Rajshahi"
  },
  {
    id: "REV-022",
    name: "Hans Schmidt",
    date: "August 14, 2024",
    content: "Very reliable and produces high-quality results.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Hans+Schmidt&background=random&color=fff",
    city: "Vienna"
  },
  {
    id: "REV-023",
    name: "Sofia Martinez",
    date: "September 25, 2024",
    content: "The best creative marketing agency experience.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Sofia+Martinez&background=random&color=fff",
    city: "Mexico City"
  },
  {
    id: "REV-024",
    name: "Ali Raza",
    date: "October 10, 2024",
    content: "Professional and very result-driven specialist.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ali+Raza&background=random&color=fff",
    city: "Karachi"
  },
  {
    id: "REV-025",
    name: "Emma Berger",
    date: "November 5, 2024",
    content: "Love the new look of my brand. Thanks Ashraf!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Emma+Berger&background=random&color=fff",
    city: "Zurich"
  },
  {
    id: "REV-026",
    name: "Kamal Uddin",
    date: "December 20, 2024",
    content: "Highly skilled in digital marketing tactics.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Kamal+Uddin&background=random&color=fff",
    city: "Kuwait City"
  },
  {
    id: "REV-027",
    name: "Grace Taylor",
    date: "January 15, 2025",
    content: "Perfect execution of our marketing campaign.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Grace+Taylor&background=random&color=fff",
    city: "Auckland"
  },
  {
    id: "REV-028",
    name: "Ivan Sokolov",
    date: "February 8, 2025",
    content: "Incredible growth hacking skills. Fully recommended.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ivan+Sokolov&background=random&color=fff",
    city: "Moscow"
  },
  {
    id: "REV-029",
    name: "Lily Nguyen",
    date: "March 22, 2025",
    content: "Professional and dedicated. A real pleasure to work with.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Lily+Nguyen&background=random&color=fff",
    city: "Singapore"
  },
  {
    id: "REV-030",
    name: "Carlos Gomez",
    date: "April 5, 2025",
    content: "Best ads manager I've ever hired. ROI is amazing.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Carlos+Gomez&background=random&color=fff",
    city: "Bogota"
  }
];

export const Testimonials = () => {
  const [showAll, setShowAll] = React.useState(false);
  const displayedReviews = showAll ? REVIEWS : REVIEWS.slice(0, 6);

  return (
    <section id="reviews" className="py-24 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent/10 border border-accent/20 text-accent px-8 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-[3px] mb-8 inline-block italic"
          >
            Global Feedback
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif-heading text-6xl md:text-8xl"
          >
            Client <span className="text-accent">Success</span>
          </motion.h2>
          <p className="text-text-dim mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
             Join over 500+ global clients from major cities who have scaled their businesses using our advanced strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
              className="group"
            >
              <div className="bg-secondary-bg/20 border border-white/10 p-10 rounded-[40px] flex flex-col h-full hover:border-accent/40 transition-all duration-500 hover:accent-glow relative overflow-hidden">
                <Quote className="absolute -top-4 -right-4 text-accent/5" size={120} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" className="text-accent" />
                  ))}
                </div>
                
                <p className="text-[17px] text-text-dim leading-relaxed font-medium italic mb-10 relative z-10 flex-grow">
                  "{review.content}"
                </p>

                <div className="pt-8 border-t border-white/5 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-0.5">{review.name}</div>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-accent uppercase tracking-widest opacity-70">{review.city}</span>
                       <span className="text-white/20">•</span>
                       <span className="text-[10px] text-white/40">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
            <button 
                onClick={() => setShowAll(!showAll)}
                className="bg-white/5 border border-white/10 hover:border-accent text-white px-10 py-4 rounded-full font-bold transition-all"
            >
                {showAll ? "Show Less" : "View All 30 Reviews"}
            </button>
        </div>

        {/* Call to Action */}
        <div className="mt-24 lg:mt-32 p-12 lg:p-20 rounded-[60px] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full translate-x-1/2" />
            <div className="text-center lg:text-left relative z-10">
                <h3 className="serif-heading text-4xl md:text-5xl mb-6">Join 500+ Happy Clients</h3>
                <p className="text-text-dim text-lg max-w-xl">
                    Ready to scale your business? Let's discuss your custom digital transformation strategy today.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                <a 
                    href="https://wa.me/8801784517661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-10 py-5 text-lg"
                >
                    Book a Free Call
                    <ChevronRight size={20} />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};
