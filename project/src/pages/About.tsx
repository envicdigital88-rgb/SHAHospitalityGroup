import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Settings, Heart } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/ui/CTASection';
import { featureHighlights } from '@/lib/process';

const iconMap: Record<string, typeof Target> = {
  Sparkles: Target,
  Volume2: Settings,
  Users,
  Layers: Award,
  Target,
  Eye,
  Heart,
};

const stats = [
  { label: 'Service Categories', value: '8' },
  { label: 'Industries Served', value: '8+' },
  { label: 'Service Sub-Categories', value: '75+' },
  { label: 'UAE-Based', value: 'Local' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A UAE-Based Partner for Events, Hospitality & Technical Production</>}
        description="We bring creative vision, technical expertise, and operational excellence to every event we deliver."
        image="https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/37975405/pexels-photo-37975405.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Premium event setup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-4">Our Story</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-softwhite leading-tight mb-6">
                  Bringing Extraordinary Events to Life Across the UAE
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slategray leading-relaxed mb-4">
                  We are a UAE-based hospitality and event management company specializing in technical production,
                  sports tournaments, golf events, hospitality staffing, and corporate training. Our team combines
                  creative thinking with operational discipline to deliver memorable experiences.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-slategray leading-relaxed mb-6">
                  From the first concept to final handover, we coordinate every detail — venue selection, technical
                  planning, staffing, on-site supervision, and post-event reporting. Our goal is simple: every event
                  we deliver should exceed expectations.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link to="/services" className="btn-primary">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-dark/50">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 glass-card">
                  <p className="text-4xl lg:text-5xl font-display font-medium text-gradient-gold mb-2">{stat.value}</p>
                  <p className="text-sm text-slategray">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Values"
            title={<>What Drives Us</>}
            description="The principles that guide every event we plan and deliver."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Precision', description: 'Every detail matters. From equipment setup to service standards, we plan and execute with meticulous care.' },
              { icon: Eye, title: 'Creativity', description: 'We develop concepts that are fresh, tailored, and memorable — designed around your audience and venue.' },
              { icon: Heart, title: 'Guest-Centered', description: 'Every decision is made with the guest experience in mind, ensuring seamless and memorable interactions.' },
              { icon: Settings, title: 'Technical Excellence', description: 'World-class AV, sound, lighting, and staging capabilities backed by professional technical planning.' },
              { icon: Users, title: 'Professional Teams', description: 'Trained, briefed, and coordinated personnel who deliver exceptional service at every touchpoint.' },
              { icon: Award, title: 'End-to-End Support', description: 'Complete coordination from concept through handover, so you can focus on your guests and goals.' },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group p-8 glass-card hover:border-champagne/30 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center mb-5 group-hover:bg-champagne transition-colors duration-300">
                    <value.icon className="w-5 h-5 text-champagne group-hover:text-midnight transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-2">{value.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
