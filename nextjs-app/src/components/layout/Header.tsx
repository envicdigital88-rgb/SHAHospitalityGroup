'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { navLinks } from '@/lib/navigation';
import { services } from '@/lib/services';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-midnight/90 backdrop-blur-xl border-b border-champagne/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-champagne/40 flex items-center justify-center group-hover:border-champagne transition-colors">
              <span className="font-display text-champagne text-xl font-bold">E</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold text-softwhite leading-none">Eventra</p>
              <p className="text-[10px] text-slategray tracking-[0.2em] uppercase">Hospitality & Events</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.to}
                    className={`nav-link group/services-link flex items-center gap-1 rounded-full px-3 py-2 -my-2 border border-transparent hover:border-champagne/25 hover:bg-champagne/10 hover:shadow-[0_0_24px_rgba(214,180,119,0.12)] transition-all duration-300 ${isActive(link.to) ? 'text-champagne border-champagne/25 bg-champagne/10 shadow-[0_0_24px_rgba(214,180,119,0.12)]' : ''}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] glass-card p-2 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-champagne/10 transition-colors group/item"
                            >
                              <span className="font-display text-champagne/60 text-sm group-hover/item:text-champagne transition-colors">
                                {service.number}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-softwhite group-hover/item:text-champagne transition-colors">
                                  {service.title}
                                </p>
                                <p className="text-xs text-slategray mt-0.5 line-clamp-1">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`nav-link ${isActive(link.to) ? 'text-champagne' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-xs text-slategray hover:text-champagne transition-colors" aria-label="Language selector">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <Link href="/request-a-quote" className="btn-primary !py-2.5 !px-6">
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-softwhite p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="pt-28 px-6 pb-12 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.to}
                    className={`block py-4 text-2xl font-display border-b border-champagne/10 ${
                      isActive(link.to) ? 'text-champagne' : 'text-softwhite'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.label === 'Services' && (
                    <div className="py-2 pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block py-1.5 text-sm text-slategray hover:text-champagne transition-colors"
                        >
                          {service.number}. {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link href="/request-a-quote" className="btn-primary mt-8 w-full">
                Request a Quote
              </Link>
              <button className="flex items-center gap-2 mt-6 text-slategray text-sm">
                <Globe className="w-4 h-4" />
                <span>English / العربية</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
