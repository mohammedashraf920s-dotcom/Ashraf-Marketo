/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/src/constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <div className="space-y-6">
      <span className="text-[10px] uppercase tracking-[2px] text-text-dim block mb-3">Reviews</span>
      {TESTIMONIALS.slice(0, 1).map((t) => (
        <div
          key={t.name}
          className="bg-brand-purple/5 p-6 rounded-[8px] border border-brand-purple/20 space-y-4"
        >
          <p className="text-[12px] italic text-text-dim leading-relaxed">
            "{t.content}"
          </p>
          <div className="text-[12px] font-bold text-white">
            {t.name}, {t.role.split(',')[0]}
          </div>
        </div>
      ))}
    </div>
  );
};
