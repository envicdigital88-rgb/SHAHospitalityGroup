'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { CTASection } from '@/components/ui/CTASection';
import { projects, projectCategories } from '@/lib/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>A Portfolio of Events & Productions</>}
        description="Placeholder projects showcasing our capabilities across event types — ready to be replaced with your actual event portfolio."
        image="https://images.pexels.com/photos/17315427/pexels-photo-17315427.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {projectCategories.map((cat) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={i === 0 || i === 5 ? 'md:col-span-2' : ''}
                >
                  <div className="group relative overflow-hidden rounded-2xl h-full">
                    <div className={`relative ${i === 0 || i === 5 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
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
                      <h3 className="text-lg font-display font-medium text-softwhite mb-2">{project.title}</h3>
                      <p className="text-sm text-slategray line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-sm text-slategray/60 italic">
              These are placeholder projects. Your actual event photography and case studies will replace them.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
