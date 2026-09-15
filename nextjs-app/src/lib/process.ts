export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: "Understand the client's goals, venue, audience, and requirements.",
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Develop the creative direction, event concept, and experience.',
    icon: 'Lightbulb',
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Coordinate suppliers, staffing, technical requirements, schedules, and logistics.',
    icon: 'ClipboardList',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Execute the event with professional teams and reliable on-site support.',
    icon: 'Play',
  },
  {
    number: '05',
    title: 'Handover',
    description: 'Complete close-out, equipment dismantling, reporting, and post-event review.',
    icon: 'CheckCircle',
  },
];

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}

export const valuePropositions: ValueProposition[] = [
  {
    title: 'End-to-End Event Support',
    description: 'From initial concept to final handover, we manage every detail so you can focus on your guests.',
    icon: 'Layers',
  },
  {
    title: 'Technical and Operational Expertise',
    description: 'Deep experience in AV production, technical planning, and on-site operations across event types.',
    icon: 'Cpu',
  },
  {
    title: 'Flexible Solutions for Every Event',
    description: 'Whether a corporate gala or a golf tournament, we tailor our approach to your specific needs.',
    icon: 'Sliders',
  },
  {
    title: 'Professional On-Site Teams',
    description: 'Trained, briefed, and coordinated teams that deliver exceptional service from setup to close-out.',
    icon: 'Users',
  },
  {
    title: 'Guest Experience at the Center',
    description: 'Every decision is made with your guests in mind, ensuring memorable and seamless experiences.',
    icon: 'Heart',
  },
];

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
}

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Creative Event Solutions',
    description: 'Innovative concepts tailored to your vision and audience.',
    icon: 'Sparkles',
  },
  {
    title: 'Technical Production Expertise',
    description: 'World-class AV, sound, lighting, and staging capabilities.',
    icon: 'Volume2',
  },
  {
    title: 'Professional Hospitality Teams',
    description: 'Trained personnel selected to match your event requirements.',
    icon: 'Users',
  },
  {
    title: 'End-to-End Event Support',
    description: 'Complete coordination from concept through to handover.',
    icon: 'Layers',
  },
];

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  eventType: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: '[Client Name]',
    company: '[Company Name]',
    role: '[Role]',
    eventType: 'Corporate Event',
    text: 'Placeholder testimonial — to be replaced with verified client feedback. Our team delivered exceptional service from planning through execution.',
  },
  {
    name: '[Client Name]',
    company: '[Company Name]',
    role: '[Role]',
    eventType: 'Golf Tournament',
    text: 'Placeholder testimonial — to be replaced with verified client feedback. The tournament operations were seamless and professional.',
  },
  {
    name: '[Client Name]',
    company: '[Company Name]',
    role: '[Role]',
    eventType: 'Technical Production',
    text: 'Placeholder testimonial — to be replaced with verified client feedback. Outstanding technical production and on-site support.',
  },
];
