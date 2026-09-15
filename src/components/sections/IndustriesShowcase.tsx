'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Hotel, Trophy, Music, ShoppingBag, Landmark, Heart, Presentation } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { industries } from '@/lib/industries';

const iconMap: Record<string, typeof Building2> = {
  Building2,
  Hotel,
  Trophy,
  Music,
  ShoppingBag,
  Landmark,
  Heart,
  Presentation,
};

export function IndustriesShowcase() {
  return (
    <section className="section-padding relative bg-charcoal-dark/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={<>Serving Every Sector with Excellence</>}
          description="From corporate conferences to private celebrations, we deliver tailored event solutions across diverse industries."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <Link
                  href="/industries"
                  className="group relative block aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-lg bg-champagne/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-champagne transition-colors duration-300">
                      <Icon className="w-4 h-4 text-champagne group-hover:text-midnight transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-softwhite mb-2">{industry.title}</h3>
                    <p className="text-xs text-slategray leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/industries" className="btn-outline">
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
