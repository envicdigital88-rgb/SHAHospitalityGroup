'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Check, Volume2, Flag, Trophy, CalendarCheck, Settings, Users, Lightbulb, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { CTASection } from '@/components/ui/CTASection';
import { getServiceBySlug, services } from '@/lib/services';

const iconMap: Record<string, typeof Volume2> = {
  Volume2,
  Flag,
  Trophy,
  CalendarCheck,
  Settings,
  Users,
  Lightbulb,
  GraduationCap,
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];
  const Icon = iconMap[service.icon] || Volume2;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/70 to-midnight" />
        </div>
        <div className="relative container-luxury pb-16">
          <Reveal>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-slategray hover:text-champagne transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-champagne/20 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-6 h-6 text-champagne" />
              </div>
              <span className="font-display text-2xl text-champagne/60">{service.number}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-softwhite max-w-3xl leading-tight">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg text-slategray max-w-2xl leading-relaxed">{service.longDescription}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-6">What We Offer</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-softwhite mb-8">
                  Complete {service.title} Services
                </h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.services.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className="flex items-start gap-3 p-4 rounded-xl border border-champagne/10 hover:border-champagne/30 transition-colors duration-300">
                      <div className="w-5 h-5 rounded-full bg-champagne/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-champagne" />
                      </div>
                      <span className="text-sm text-softwhite/90">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Reveal delay={0.2}>
                <div className="glass-card p-8 sticky top-24">
                  <h3 className="text-lg font-display font-medium text-softwhite mb-4">Visual Approach</h3>
                  <p className="text-sm text-slategray leading-relaxed mb-6">{service.visualDescription}</p>
                  <div className="pt-6 border-t border-champagne/10">
                    <p className="text-sm text-slategray mb-4">Ready to get started?</p>
                    <Link href="/request-a-quote" className="btn-primary w-full mb-3">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="btn-outline w-full">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-dark/50">
        <div className="container-luxury">
          <Reveal>
            <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-4">Next Service</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center justify-between gap-4 py-6 border-t border-champagne/10"
            >
              <div>
                <span className="font-display text-sm text-champagne/40">{nextService.number}</span>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-softwhite group-hover:text-champagne transition-colors mt-1">
                  {nextService.title}
                </h3>
              </div>
              <ArrowRight className="w-8 h-8 text-champagne group-hover:translate-x-2 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
