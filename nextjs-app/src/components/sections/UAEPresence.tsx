'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function UAEPresence() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/uae-bg.jpg"
          alt="UAE Operations Background"
          className="w-full h-full object-cover opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/50 to-transparent" />
      </div>

      <div className="relative container-luxury">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/30 mb-6">
              <MapPin className="w-4 h-4 text-champagne" />
              <span className="text-xs font-medium text-champagne tracking-wider">UAE-BASED OPERATIONS</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-softwhite leading-tight">
              Creating Exceptional Experiences Across the UAE.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-slategray leading-relaxed">
              Based in the United Arab Emirates, we deliver events, technical production, and hospitality services
              across the region. Our local expertise and network of suppliers ensure seamless execution wherever
              your event takes place.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-sm text-slategray/70 italic">
              Service areas and specific emirate coverage to be confirmed by the business.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/request-a-quote" className="btn-outline">
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
