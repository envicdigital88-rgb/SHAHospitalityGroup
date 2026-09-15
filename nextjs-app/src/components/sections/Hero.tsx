'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Clapperboard, Users2, Trophy, Cpu } from 'lucide-react';

const features = [
  { icon: Clapperboard, title: 'Event Production',      subtitle: 'Stunning. Seamless. Scalable.' },
  { icon: Users2,      title: 'Hospitality Services',   subtitle: 'Exceptional Guest Experiences.' },
  { icon: Trophy,      title: 'Sports Tournaments',     subtitle: 'Organized for Success.' },
  { icon: Cpu,         title: 'Technical Solutions',    subtitle: 'Innovative. Reliable. Professional.' },
];

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-midnight">

      {/* ════════════════════════════════════════════
          HERO BODY — split: text left / image right
      ════════════════════════════════════════════ */}
      <div className="relative flex flex-col lg:flex-row flex-1 overflow-hidden">

        {/* ── Full-bleed background image (covers everything) ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-event.png"
          alt="Premium outdoor gala event with LED stage, spotlights and luxury dining"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          style={{ objectPosition: '55% center', filter: 'brightness(1.08) saturate(1.15)' }}
        />

        {/* Directional fade — only enough to keep left-side text legible; image fully visible on the right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(7,17,31,0.96) 0%, rgba(7,17,31,0.80) 22%, rgba(7,17,31,0.30) 42%, rgba(7,17,31,0.06) 62%, transparent 100%)',
          }}
        />
        {/* Very light top vignette — preserves the fairy-lights sky */}
        <div
          className="absolute inset-x-0 top-0 h-28 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(7,17,31,0.40) 0%, transparent 100%)' }}
        />
        {/* Thin bottom fade into the feature bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(7,17,31,0.90) 0%, transparent 100%)' }}
        />

        {/* ── LEFT: Text content ── */}
        <div className="relative z-10 flex flex-col justify-center pt-[88px] pb-10 px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:w-[50%] xl:w-[46%] shrink-0 min-h-[85vh] lg:min-h-screen">

          {/* UAE location badge */}
          <motion.div
            {...up(0)}
            className="inline-flex items-center gap-2 self-start mb-5 px-4 py-1.5 rounded-full border border-champagne/40 bg-midnight/30 backdrop-blur-md"
          >
            <MapPin className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs font-medium text-champagne tracking-[0.14em]">Based in the UAE</span>
          </motion.div>

          {/* Eyebrow with decorative dash */}
          <motion.div {...up(0.1)} className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-champagne/55 shrink-0" />
            <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-champagne/75">
              Hospitality &bull; Events &bull; Technical Production
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...up(0.2)}
            className="font-display font-semibold leading-[1.04] text-softwhite"
            style={{ fontSize: 'clamp(2.75rem, 5.2vw, 5rem)' }}
          >
            We Bring
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #E8D19E 0%, #D6B477 45%, #B8985C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Extraordinary
            </span>
            Events to Life.
          </motion.h1>

          {/* Description */}
          <motion.p
            {...up(0.32)}
            className="mt-6 text-[0.95rem] leading-relaxed text-slategray max-w-[400px]"
          >
            From world-class technical production and sports tournaments to exceptional hospitality
            operations, we create seamless experiences across the UAE.
          </motion.p>

          {/* CTA row */}
          <motion.div {...up(0.44)} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-champagne text-midnight text-sm font-semibold transition-all duration-300 hover:bg-champagne-light hover:shadow-[0_0_30px_rgba(214,180,119,0.4)]"
            >
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-champagne/55 text-champagne text-sm font-semibold transition-all duration-300 hover:bg-champagne hover:text-midnight hover:border-champagne"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

        {/* Right column is pure image — no extra markup needed */}
      </div>

      {/* ════════════════════════════════════════════
          BOTTOM FEATURE BAR
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6, ease }}
        className="relative z-10 border-t border-white/[0.07]"
        style={{ background: 'rgba(6,11,18,0.93)', backdropFilter: 'blur(14px)' }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`
                  flex items-center gap-4 py-5 px-4 sm:px-6 lg:px-8 group cursor-default
                  ${i < features.length - 1 ? 'border-r border-white/[0.07]' : ''}
                `}
              >
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-xl border border-champagne/25 flex items-center justify-center group-hover:border-champagne/60 group-hover:bg-champagne/10 transition-all duration-300">
                  <feat.icon className="w-5 h-5 text-champagne" strokeWidth={1.5} />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-softwhite leading-snug">{feat.title}</p>
                  <p className="text-[11px] text-slategray mt-0.5 leading-snug">{feat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
