import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, string> = {
  Volume2: 'Volume2',
  Flag: 'Flag',
  Trophy: 'Trophy',
  CalendarCheck: 'CalendarCheck',
  Settings: 'Settings',
  Users: 'Users',
  Lightbulb: 'Lightbulb',
  GraduationCap: 'GraduationCap',
};

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="section-padding relative bg-charcoal-dark/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Our Services</>}
          description="Eight specialized service categories covering every aspect of event production, hospitality, and technical management."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-1">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setActiveService(i)}
                  className={`group cursor-pointer border-b border-champagne/10 py-6 transition-all duration-300 ${
                    activeService === i ? 'pl-4' : 'pl-0'
                  }`}
                >
                  <Link to={`/services/${service.slug}`} className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 lg:gap-6">
                      <span
                        className={`font-display text-sm transition-colors duration-300 ${
                          activeService === i ? 'text-champagne' : 'text-champagne/40'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl md:text-2xl font-display font-medium transition-colors duration-300 ${
                            activeService === i ? 'text-champagne' : 'text-softwhite'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-sm mt-1.5 transition-all duration-300 ${
                            activeService === i ? 'text-slategray max-w-md' : 'text-slategray/60 max-w-md'
                          }`}
                        >
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        activeService === i ? 'text-champagne opacity-100' : 'text-champagne/30 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:block sticky top-24">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-xs text-champagne tracking-[0.2em] uppercase mb-2">
                      {services[activeService].number}
                    </p>
                    <h3 className="text-2xl font-display font-medium text-softwhite mb-3">
                      {services[activeService].title}
                    </h3>
                    <p className="text-sm text-slategray mb-4">{services[activeService].shortDescription}</p>
                    <Link
                      to={`/services/${services[activeService].slug}`}
                      className="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne-light transition-colors"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
