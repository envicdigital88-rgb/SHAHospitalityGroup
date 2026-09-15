'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, projectCategories } from '@/lib/projects';

export function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects.slice(0, 6) : projects.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Work"
          title={<>A Glimpse of What We Do</>}
          description="Placeholder projects showcasing our capabilities — ready to be replaced with your actual event portfolio."
        />

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {projectCategories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-champagne text-midnight'
                    : 'border border-champagne/20 text-slategray hover:text-champagne hover:border-champagne/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={i === 0 ? 'md:col-span-2 lg:row-span-2' : ''}
              >
                <Link
                  href="/portfolio"
                  className="group relative block w-full h-full overflow-hidden rounded-2xl"
                >
                  <div className={`relative ${i === 0 ? 'aspect-[16/10] lg:aspect-[16/12]' : 'aspect-[4/3]'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs text-champagne tracking-wider uppercase mb-2">{project.category}</p>
                    <h3 className={`font-display font-medium text-softwhite mb-2 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-slategray line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-champagne text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="btn-outline">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
