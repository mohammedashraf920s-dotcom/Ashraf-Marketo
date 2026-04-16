/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/src/constants';

export const Footer = () => {
  return (
    <footer className="h-[60px] border-t border-border bg-bg flex items-center justify-between px-10 text-[12px] text-text-dim">
      <div>&copy; {new Date().getFullYear()} Ashraf Marketo. All Rights Reserved.</div>
      <div className="flex gap-6">
        {['LinkedIn', 'GitHub', 'Twitter', 'Behance'].map((social) => (
          <a 
            key={social} 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
};
