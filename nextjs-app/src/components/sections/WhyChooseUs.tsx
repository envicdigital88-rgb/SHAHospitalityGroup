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
    <section className="section-padding relative overflow-hidden bg-midnight">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-radial from-champagne/5 to-transparent blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-gradient-radial from-electric/5 to-transparent blur-3xl pointer-events-none opacity-60" />

      <div className="relative container-luxury">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Built Around Precision.<br />Driven by Experience.</>}
          description="We combine creative vision with operational discipline to deliver events that exceed expectations."
        />

        {/* Bento Box Layout for 5 items */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-5">
          {valuePropositions.map((prop, i) => {
            const Icon = iconMap[prop.icon] || Layers;
            
            // Layout logic: Top 2 items take half width, bottom 3 take one-third width on large screens
            let colSpan = 'md:col-span-3'; // Default for index 0 and 1
            if (i > 1) {
              colSpan = 'md:col-span-2'; // For index 2, 3, 4
            }

            return (
              <Reveal key={i} delay={i * 0.1} className={`h-full ${colSpan}`}>
                <div className="group relative h-full p-8 lg:p-10 rounded-3xl bg-[#0B1017] border border-white/5 hover:border-champagne/20 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-champagne group-hover:border-champagne group-hover:-translate-y-1 transition-all duration-500">
                        <Icon className="w-6 h-6 text-champagne group-hover:text-midnight transition-colors duration-500" />
                      </div>
                      
                      {/* Large decorative number */}
                      <span className="font-display text-4xl font-light text-white/5 group-hover:text-champagne/10 transition-colors duration-500">
                        0{i + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-display font-medium text-softwhite mb-4 group-hover:text-champagne transition-colors duration-500">
                      {prop.title}
                    </h3>
                    <p className="text-sm lg:text-[0.95rem] text-slategray leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-center text-sm text-slategray/60 italic max-w-2xl mx-auto">
            Note: Client testimonials, certifications, and awards will be displayed once verified information is provided.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
