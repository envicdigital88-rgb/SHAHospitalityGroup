import Link from 'next/link';
import { ArrowRight, Volume2, Flag, Trophy, CalendarCheck, Settings, Users, Lightbulb, GraduationCap } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { CTASection } from '@/components/ui/CTASection';
import { services } from '@/lib/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Eight specialized service categories covering every aspect of your event — from concept development to on-site delivery.',
};

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

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Comprehensive Event, Hospitality & Technical Solutions</>}
        description="Eight specialized service categories covering every aspect of your event — from concept development to on-site delivery."
        image="https://images.pexels.com/photos/9271247/pexels-photo-9271247.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Volume2;
              return (
                <Reveal key={service.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block relative overflow-hidden rounded-3xl h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                    </div>
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-champagne/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                        <Icon className="w-5 h-5 text-champagne group-hover:text-midnight transition-colors duration-300" />
                      </div>
                      <span className="font-display text-2xl text-champagne/40">{service.number}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <h3 className="text-xl lg:text-2xl font-display font-medium text-softwhite mb-2">{service.title}</h3>
                      <p className="text-sm text-slategray mb-4 line-clamp-2">{service.shortDescription}</p>
                      <div className="flex items-center gap-2 text-sm text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
