import { Hero } from '@/components/sections/Hero';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesShowcase } from '@/components/sections/ServicesShowcase';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { IndustriesShowcase } from '@/components/sections/IndustriesShowcase';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { UAEPresence } from '@/components/sections/UAEPresence';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/ui/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'UAE-based hospitality and event management — AV production, golf tournaments, sports events, and more.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesShowcase />
      <WhyChooseUs />
      <IndustriesShowcase />
      <PortfolioPreview />
      <ProcessTimeline />
      <UAEPresence />
      <Testimonials />
      <CTASection />
    </>
  );
}
