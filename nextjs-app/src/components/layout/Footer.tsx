'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Camera, Briefcase, Users2, MessageCircle, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/navigation';
import { services } from '@/lib/services';

export function Footer() {
  return (
    <footer className="relative bg-charcoal-dark border-t border-champagne/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative container-luxury pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-champagne/40 flex items-center justify-center">
                <span className="font-display text-champagne text-xl font-bold">E</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-softwhite leading-none">Eventra</p>
                <p className="text-[10px] text-slategray tracking-[0.2em] uppercase mt-1">Hospitality & Events</p>
              </div>
            </Link>
            <p className="text-sm text-slategray leading-relaxed max-w-xs">
              A UAE-based hospitality and event management company specializing in technical production, sports
              tournaments, and exceptional guest experiences.
            </p>
            <div className="flex gap-3 mt-6">
              {[Camera, Briefcase, Users2, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-champagne/20 flex items-center justify-center text-slategray hover:text-champagne hover:border-champagne/50 transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-champagne tracking-[0.2em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link href={link.to} className="text-sm text-slategray hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/request-a-quote" className="text-sm text-slategray hover:text-champagne transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-champagne tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slategray hover:text-champagne transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-champagne hover:text-champagne-light transition-colors flex items-center gap-1">
                  View All <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-champagne tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slategray">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <span>[Office Address — UAE]</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slategray">
                <Phone className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <span>[Phone Number]</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slategray">
                <Mail className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <span>[Email Address]</span>
              </li>
            </ul>
            <Link href="/request-a-quote" className="btn-outline mt-6 !py-2.5 !px-5 text-xs">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-champagne/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slategray">
            &copy; {new Date().getFullYear()} Eventra Hospitality & Events. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slategray hover:text-champagne transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slategray hover:text-champagne transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
