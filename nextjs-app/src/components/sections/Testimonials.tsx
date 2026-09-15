'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/process';

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative bg-charcoal-dark/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne/5 blur-3xl" />

      <div className="relative container-luxury">
        <SectionHeading
          eyebrow="Client Trust"
          title={<>What Our Clients Say</>}
          description="Placeholder testimonials — to be replaced with verified feedback from our clients."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="w-16 h-16 text-champagne/20 mx-auto mb-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-display font-medium text-softwhite leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[index].text}&rdquo;
                </p>
                <div>
                  <p className="text-champagne font-medium">{testimonials[index].name}</p>
                  <p className="text-sm text-slategray mt-1">
                    {testimonials[index].role} &middot; {testimonials[index].company}
                  </p>
                  <p className="text-xs text-slategray/60 mt-1">{testimonials[index].eventType}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne hover:text-midnight transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-champagne' : 'w-2 bg-champagne/30'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne hover:text-midnight transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-xs text-slategray/60 italic">
            These are placeholder testimonials. Real client feedback will replace them once verified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
