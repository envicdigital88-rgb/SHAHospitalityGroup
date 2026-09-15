import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/70 to-midnight" />
      </div>
      <div className="relative container-luxury py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-softwhite max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slategray max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
