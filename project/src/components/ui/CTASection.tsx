import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/5 blur-3xl" />

      <div className="relative container-luxury text-center">
        <Reveal>
          <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-6">
            Let's Create Something Extraordinary
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-softwhite max-w-4xl mx-auto leading-tight">
            Ready to Bring Your Event to Life?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-slategray max-w-2xl mx-auto leading-relaxed">
            Share your vision with us. Our team will review your requirements and craft a tailored proposal for your event.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-a-quote" className="btn-primary">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
