'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Office Address', value: '[Address — UAE]' },
    { icon: Phone, label: 'Phone', value: '+971 55 403 0577' },
    { icon: Mail, label: 'Email', value: 'sales@shahospitalitygroup.com' },
    { icon: Clock, label: 'Business Hours', value: '[Hours — to be provided]' },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Get in Touch with Our Team</>}
        description="Have a question or want to discuss your event? We're here to help bring your vision to life."
        image="https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal>
                <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-4">Contact Information</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-softwhite leading-tight mb-8">
                  Let&apos;s Start a Conversation
                </h2>
              </Reveal>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-4 p-5 glass-card">
                      <div className="w-11 h-11 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-champagne" />
                      </div>
                      <div>
                        <p className="text-xs text-slategray tracking-wider uppercase mb-1">{info.label}</p>
                        <p className="text-sm text-softwhite">{info.value}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4}>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebd5a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Reveal>

              <Reveal delay={0.5}>
                <p className="mt-6 text-xs text-slategray/60 italic">
                  Contact details will be updated once provided by the business. An embedded map will be added after
                  the actual office location is confirmed.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.2}>
                <div className="glass-card p-8 lg:p-10">
                  <h3 className="text-2xl font-display font-medium text-softwhite mb-6">Send Us a Message</h3>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-7 h-7 text-champagne" />
                      </div>
                      <p className="text-lg font-display text-softwhite mb-2">Message Sent</p>
                      <p className="text-sm text-slategray">
                        Thank you for contacting us. Our team will review your requirements and get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">{error}</p>
                      )}
                      <div>
                        <label htmlFor="name" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-midnight/50 border border-champagne/15 rounded-xl px-4 py-3 text-sm text-softwhite placeholder-slategray/50 focus:border-champagne/50 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-midnight/50 border border-champagne/15 rounded-xl px-4 py-3 text-sm text-softwhite placeholder-slategray/50 focus:border-champagne/50 focus:outline-none transition-colors"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-midnight/50 border border-champagne/15 rounded-xl px-4 py-3 text-sm text-softwhite placeholder-slategray/50 focus:border-champagne/50 focus:outline-none transition-colors"
                            placeholder="+971 ..."
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-midnight/50 border border-champagne/15 rounded-xl px-4 py-3 text-sm text-softwhite placeholder-slategray/50 focus:border-champagne/50 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your event..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
