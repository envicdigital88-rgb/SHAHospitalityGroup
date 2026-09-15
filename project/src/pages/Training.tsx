import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Check, Award, Users, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/ui/CTASection';

const trainingModules = [
  { title: 'Banquet Sequence of Service', description: 'Step-by-step service flow for banquets and large-scale events.' },
  { title: 'Guest Communication', description: 'Professional interaction standards for guest-facing roles.' },
  { title: 'Food and Beverage Service', description: 'Proper service techniques, timing, and presentation standards.' },
  { title: 'Wine and Bar-Service Standards', description: 'Wine knowledge, cocktail service, and bar operation protocols.' },
  { title: 'Allergen Awareness', description: 'Identifying allergens, preventing cross-contamination, and guest safety.' },
  { title: 'Complaint Handling and Service Recovery', description: 'Turning guest concerns into positive outcomes with proven techniques.' },
  { title: 'Grooming and Professional Presentation', description: 'Personal presentation standards that reflect your brand.' },
  { title: 'Event Briefings, SOPs and Checklists', description: 'Structured pre-event briefings and standard operating procedures.' },
  { title: 'Supervisory and Team-Leadership Training', description: 'Leadership skills for event supervisors and team leaders.' },
];

const programFeatures = [
  { icon: Clock, title: 'Flexible Scheduling', description: 'Training sessions scheduled around your operational needs.' },
  { icon: Users, title: 'Team-Based Learning', description: 'Group training designed for hospitality and event-service teams.' },
  { icon: BookOpen, title: 'Practical Curriculum', description: 'Hands-on modules focused on real-world service scenarios.' },
  { icon: TrendingUp, title: 'Measurable Outcomes', description: 'Clear improvement targets and post-training assessment.' },
];

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Hospitality Training"
        title={<>Practical Training for Hospitality & Event-Service Teams</>}
        description="Elevate your team's service standards with structured, practical training programs designed for the hospitality industry."
        image="https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <Reveal>
                <div className="w-14 h-14 rounded-2xl bg-champagne/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-champagne" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-softwhite leading-tight mb-6">
                  Build a Team That Delivers Exceptional Service
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slategray leading-relaxed mb-4">
                  Our training programs are designed for hospitality and event-service teams who want to deliver
                  world-class guest experiences. From banquet service to supervisory leadership, each module
                  combines theory with practical, hands-on exercises.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-slategray leading-relaxed mb-6">
                  Training is tailored to your team's experience level and operational requirements, ensuring
                  every session delivers measurable improvement in service quality.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link to="/request-a-quote" className="btn-primary">
                  Request Training Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8761298/pexels-photo-8761298.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional training session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-dark/50">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Training Modules"
            title={<>Nine Core Training Areas</>}
            description="Comprehensive curriculum covering every aspect of professional hospitality service."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trainingModules.map((module, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group p-7 glass-card hover:border-champagne/30 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-champagne/10 flex items-center justify-center shrink-0 group-hover:bg-champagne transition-colors duration-300">
                      <span className="font-display text-sm text-champagne group-hover:text-midnight transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <Check className="w-5 h-5 text-champagne/40 mt-1" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-2">{module.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{module.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Program Features"
            title={<>Training Designed Around Your Team</>}
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="text-center p-8 glass-card h-full">
                  <div className="w-14 h-14 rounded-2xl bg-champagne/10 flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="w-6 h-6 text-champagne" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-2">{feature.title}</h3>
                  <p className="text-sm text-slategray leading-relaxed">{feature.description}</p>
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
