import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Hotel, Trophy, Music, ShoppingBag, Landmark, Heart, Presentation } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { CTASection } from '@/components/ui/CTASection';
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

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Tailored Solutions for Every Sector</>}
        description="From corporate conferences to private celebrations, we deliver event solutions designed for the unique needs of each industry."
        image="https://images.pexels.com/photos/8761524/pexels-photo-8761524.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon] || Building2;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="group relative overflow-hidden rounded-3xl h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-xl bg-champagne/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-champagne transition-colors duration-300">
                        <Icon className="w-5 h-5 text-champagne group-hover:text-midnight transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-display font-medium text-softwhite mb-3">{industry.title}</h3>
                      <p className="text-sm text-slategray leading-relaxed max-w-md">{industry.description}</p>
                    </div>
                  </div>
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
