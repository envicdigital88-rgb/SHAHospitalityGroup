'use client';

import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { valuePropositions } from '@/lib/process';
import { Layers, Cpu, Sliders, Users, Heart } from 'lucide-react';

const iconMap: Record<string, typeof Layers> = {
  Layers,
  Cpu,
  Sliders,
  Users,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-champagne/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-electric/5 blur-3xl" />

      <div className="relative container-luxury">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Built Around Precision. Driven by Experience.</>}
          description="We combine creative vision with operational discipline to deliver events that exceed expectations."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-champagne/10 rounded-3xl overflow-hidden">
          {valuePropositions.map((prop, i) => {
            const Icon = iconMap[prop.icon] || Layers;
            const isLarge = i === 0;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`group relative p-8 lg:p-10 bg-charcoal-dark hover:bg-charcoal transition-all duration-500 h-full ${
                    isLarge ? 'lg:col-span-1 lg:row-span-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl border border-champagne/30 flex items-center justify-center group-hover:bg-champagne group-hover:border-champagne transition-all duration-300">
                      <Icon className="w-5 h-5 text-champagne group-hover:text-midnight transition-colors duration-300" />
                    </div>
                    <span className="font-display text-2xl text-champagne/30 group-hover:text-champagne/60 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-softwhite mb-3">{prop.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{prop.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-slategray italic">
            Note: Client testimonials, certifications, and awards will be displayed once verified information is provided.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
