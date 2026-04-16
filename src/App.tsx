/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { Ventures } from '@/src/components/sections/Ventures';
import { About } from '@/src/components/sections/About';
import { Services } from '@/src/components/sections/Services';
import { Portfolio } from '@/src/components/sections/Portfolio';
import { Blog } from '@/src/components/sections/Blog';
import { Contact } from '@/src/components/sections/Contact';
import { WhatsAppButton } from '@/src/components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative antialiased bg-bg text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Ventures />
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

