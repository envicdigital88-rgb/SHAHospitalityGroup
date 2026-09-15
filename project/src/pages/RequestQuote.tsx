import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/animations/Reveal';
import { services } from '@/lib/services';

const eventTypes = [
  'Corporate Event',
  'Golf Tournament',
  'Sports Tournament',
  'Conference',
  'Gala Dinner',
  'Brand Activation',
  'Technical Production',
  'Hospitality Staffing',
  'Training',
  'Other',
];

const budgetRanges = [
  'Under AED 50,000',
  'AED 50,000 - 150,000',
  'AED 150,000 - 500,000',
  'AED 500,000+',
  'Prefer not to say',
];

export default function RequestQuote() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    location: '',
    eventDate: '',
    guestCount: '',
    requiredServices: [] as string[],
    budget: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name) e.name = 'Full name is required';
    if (!form.email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone) e.phone = 'Phone number is required';
    if (!form.eventType) e.eventType = 'Please select an event type';
    if (!form.location) e.location = 'Event location is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const toggleService = (title: string) => {
    setForm((prev) => ({
      ...prev,
      requiredServices: prev.requiredServices.includes(title)
        ? prev.requiredServices.filter((s) => s !== title)
        : [...prev.requiredServices, title],
    }));
  };

  const inputClass =
    'w-full bg-midnight/50 border border-champagne/15 rounded-xl px-4 py-3 text-sm text-softwhite placeholder-slategray/50 focus:border-champagne/50 focus:outline-none transition-colors';

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={<>Tell Us About Your Event</>}
        description="Share your event details and our team will prepare a tailored proposal for you."
        image="https://images.pexels.com/photos/16120243/pexels-photo-16120243.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          {submitted ? (
            <Reveal>
              <div className="glass-card p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-8">
                  <Check className="w-9 h-9 text-champagne" />
                </div>
                <h2 className="text-3xl font-display font-medium text-softwhite mb-4">Thank You</h2>
                <p className="text-lg text-slategray max-w-xl mx-auto leading-relaxed">
                  Thank you for contacting us. Our team will review your requirements and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '', company: '', email: '', phone: '', eventType: '', location: '',
                      eventDate: '', guestCount: '', requiredServices: [], budget: '', requirements: '',
                    });
                  }}
                  className="btn-outline mt-8"
                >
                  Submit Another Request
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-12 space-y-8">
                {Object.keys(errors).length > 0 && (
                  <div className="flex items-center gap-3 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    Please correct the highlighted fields below.
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-5 pb-3 border-b border-champagne/10">
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Full Name *
                      </label>
                      <input id="name" type="text" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass} placeholder="Your full name" />
                      {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Company Name
                      </label>
                      <input id="company" type="text" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass} placeholder="Your company" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Email Address *
                      </label>
                      <input id="email" type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass} placeholder="you@email.com" />
                      {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Phone Number *
                      </label>
                      <input id="phone" type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass} placeholder="+971 ..." />
                      {errors.phone && <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-5 pb-3 border-b border-champagne/10">
                    Event Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eventType" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Event Type *
                      </label>
                      <select id="eventType" value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className={inputClass}>
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.eventType && <p className="text-xs text-red-400 mt-1.5">{errors.eventType}</p>}
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Event Location / Emirate *
                      </label>
                      <input id="location" type="text" value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className={inputClass} placeholder="e.g. Dubai, Abu Dhabi..." />
                      {errors.location && <p className="text-xs text-red-400 mt-1.5">{errors.location}</p>}
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Preferred Event Date
                      </label>
                      <input id="eventDate" type="date" value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="guestCount" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Estimated Guest Count
                      </label>
                      <input id="guestCount" type="number" value={form.guestCount}
                        onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                        className={inputClass} placeholder="e.g. 200" min="1" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-5 pb-3 border-b border-champagne/10">
                    Required Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.slug}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                          form.requiredServices.includes(service.title)
                            ? 'border-champagne/50 bg-champagne/10'
                            : 'border-champagne/10 hover:border-champagne/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.requiredServices.includes(service.title)}
                          onChange={() => toggleService(service.title)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          form.requiredServices.includes(service.title)
                            ? 'bg-champagne border-champagne'
                            : 'border-champagne/30'
                        }`}>
                          {form.requiredServices.includes(service.title) && <Check className="w-3 h-3 text-midnight" />}
                        </div>
                        <span className="text-sm text-softwhite/90">{service.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-medium text-softwhite mb-5 pb-3 border-b border-champagne/10">
                    Additional Information
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="budget" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Budget Range (Optional)
                      </label>
                      <select id="budget" value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className={inputClass}>
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="requirements" className="block text-xs text-slategray tracking-wider uppercase mb-2">
                        Additional Requirements
                      </label>
                      <textarea id="requirements" rows={4} value={form.requirements}
                        onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us more about your event vision, specific needs, or questions..." />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full text-base !py-4">
                  Submit Quote Request <Send className="w-5 h-5" />
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
