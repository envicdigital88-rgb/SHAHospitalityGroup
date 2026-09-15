'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/process';
import { Search, Lightbulb, ClipboardList, Play, CheckCircle } from 'lucide-react';

const iconMap: Record<string, typeof Search> = {
  Search,
  Lightbulb,
  ClipboardList,
  Play,
  CheckCircle,
};

export function ProcessTimeline() {
  return (
    <section className="section-padding relative bg-charcoal-dark/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <div className="container-luxury">
        <SectionHeading
          eyebrow="How We Work"
          title={<>Our Event Process</>}
          description="A structured approach that ensures every event is planned, delivered, and concluded with precision."
        />

        {/* Desktop horizontal timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-px bg-champagne/20" />
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || Search;
                return (
                  <Reveal key={i} delay={i * 0.15}>
                    <div className="relative text-center">
                      <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-midnight border border-champagne/30 mb-6">
                        <Icon className="w-8 h-8 text-champagne" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-champagne text-midnight text-xs font-bold flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-softwhite mb-2">{step.title}</h3>
                      <p className="text-sm text-slategray leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-16 lg:hidden space-y-8">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full bg-midnight border border-champagne/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-champagne" />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-12 bg-champagne/20" />
                  )}
                </div>
                <div className="pt-2">
                  <span className="text-xs text-champagne tracking-wider">{step.number}</span>
                  <h3 className="text-lg font-display font-medium text-softwhite mt-1 mb-1">{step.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
