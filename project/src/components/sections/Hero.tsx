import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react';

const floatingKeywords = [
  { text: 'AV Production', x: '8%', y: '20%', delay: 0 },
  { text: 'Golf Tournaments', x: '75%', y: '15%', delay: 0.5 },
  { text: 'Hospitality', x: '5%', y: '70%', delay: 1 },
  { text: 'LED Walls', x: '80%', y: '65%', delay: 1.5 },
  { text: 'Sports Events', x: '15%', y: '45%', delay: 0.8 },
  { text: 'Technical Management', x: '68%', y: '40%', delay: 1.2 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37975405/pexels-photo-37975405.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium event stage with spotlights"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/60 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/40" />
      </div>

      {/* Animated light beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-champagne/20 to-transparent blur-2xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-champagne/15 to-transparent blur-2xl"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-champagne/10 to-transparent blur-xl"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Floating keywords */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingKeywords.map((kw, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: kw.x, top: kw.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + kw.delay, duration: 0.8 }}
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: kw.delay }}
              className="text-xs font-medium text-champagne/40 tracking-wider whitespace-nowrap"
            >
              {kw.text}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="relative container-luxury z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/30 bg-midnight/30 backdrop-blur-sm mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-champagne" />
          <span className="text-xs font-medium text-champagne tracking-wider">Based in the UAE</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-6"
        >
          Hospitality &bull; Events &bull; Technical Production
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium text-softwhite max-w-5xl leading-[1.05]"
        >
          We Bring{' '}
          <span className="text-gradient-gold">Extraordinary</span>{' '}
          Events to Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-slategray max-w-2xl leading-relaxed"
        >
          From world-class technical production and sports tournaments to exceptional hospitality operations, we create
          seamless experiences across the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link to="/services" className="btn-primary">
            Explore Our Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/request-a-quote" className="btn-outline">
            Request a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-8 lg:gap-12"
        >
          {[
            { label: 'Events', value: 'End-to-End' },
            { label: 'Technical Production', value: 'Full-Service' },
            { label: 'Hospitality Services', value: 'Professional Teams' },
          ].map((stat, i) => (
            <div key={i} className="border-l border-champagne/20 pl-4">
              <p className="text-sm text-slategray">{stat.label}</p>
              <p className="text-lg font-display font-medium text-champagne mt-1">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slategray tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-champagne" />
        </motion.div>
      </motion.div>
    </section>
  );
}
