import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Volume2, Users, Layers } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { featureHighlights } from '@/lib/process';

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles,
  Volume2,
  Users,
  Layers,
};

export function IntroSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-champagne/5 blur-3xl" />

      <div className="relative container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <Reveal>
              <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-6">
                Who We Are
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-softwhite leading-tight">
                Every Detail. Every Moment.{' '}
                <span className="text-gradient-gold">Perfectly Delivered.</span>
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.2}>
              <p className="text-lg text-slategray leading-relaxed">
                We combine creative thinking, technical expertise, and operational excellence to deliver memorable
                events, seamless guest experiences, and reliable on-site support.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-champagne hover:text-champagne-light transition-colors text-sm font-medium">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureHighlights.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative p-8 glass-card hover:border-champagne/30 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center mb-5 group-hover:bg-champagne/20 transition-colors">
                    <Icon className="w-5 h-5 text-champagne" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-2">{feature.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{feature.description}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-champagne group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
