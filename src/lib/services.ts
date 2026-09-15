export interface ServiceItem {
  title: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: string;
  services: string[];
  visualDescription: string;
}

export const services: Service[] = [
  {
    slug: 'av-sound-lighting',
    number: '01',
    title: 'AV, Sound and Lighting',
    shortDescription: 'Professional technical production for events of every scale.',
    longDescription:
      'From intimate gatherings to large-scale productions, we deliver world-class audio-visual experiences. Our technical team handles every aspect of sound, lighting, and visual display to ensure your event looks and sounds extraordinary.',
    image: 'https://images.pexels.com/photos/12787862/pexels-photo-12787862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Volume2',
    services: [
      'LED walls and display screens',
      'Professional sound systems',
      'Wireless microphones and PA systems',
      'Stage and architectural lighting',
      'DJ equipment and entertainment setups',
      'Truss, staging and rigging',
      'Projectors and presentation screens',
      'Live streaming and event broadcasting',
      'Technical crew and on-site support',
      'Installation, operation and dismantling',
    ],
    visualDescription:
      'Cinematic LED stage imagery, sound-wave-inspired animations, lighting effects, and an equipment showcase.',
  },
  {
    slug: 'golf-tournament-management',
    number: '02',
    title: 'Golf Tournament Management',
    shortDescription: 'Specialized operational and technical support for golf tournaments.',
    longDescription:
      'We provide end-to-end operational and technical support for golf tournaments across the UAE. From hospitality village management to live scoring displays, we ensure every aspect of your tournament runs seamlessly.',
    image: 'https://images.pexels.com/photos/4398355/pexels-photo-4398355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Flag',
    services: [
      'Tournament planning and coordination',
      'Hospitality village management',
      'Food and beverage outlet setup',
      'Temporary POS and Sapaad integration',
      'LED screens and live scoring displays',
      'Public-address systems',
      'Sponsor activation areas',
      'VIP and player hospitality',
      'Staff, volunteer and supplier coordination',
      'Golf buggy and transport logistics',
      'Power, internet and communication planning',
      'Setup, tournament operation and close-out',
    ],
    visualDescription:
      'Premium golf tournament imagery, elegant green-inspired accents, tournament planning timelines, and hospitality village visuals.',
  },
  {
    slug: 'sports-events-tournaments',
    number: '03',
    title: 'Sports Events and Tournaments',
    shortDescription: 'Complete support for indoor and outdoor sporting events.',
    longDescription:
      'Whether indoor or outdoor, we deliver complete support for sporting events of all types. From padel tournaments to football fan zones, we handle technical production, crowd flow, and guest experience.',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Trophy',
    services: [
      'Padel and tennis tournaments',
      'Football screenings and fan zones',
      'Fitness challenges',
      'Community sports days',
      'Corporate sports tournaments',
      'Gaming and esports competitions',
      'Awards and prize-giving ceremonies',
      'Crowd-flow and guest-experience planning',
      'Technical production and live entertainment',
      'Branding and sponsor activations',
    ],
    visualDescription:
      'Energetic sports photography, dynamic transitions, bold typography, and animated event statistics placeholders.',
  },
  {
    slug: 'event-management',
    number: '04',
    title: 'Event Management',
    shortDescription: 'From the first concept to final handover, we coordinate every operational detail.',
    longDescription:
      'We manage every operational detail of your event from concept to completion. Our team coordinates venues, suppliers, schedules, and on-site supervision to deliver exceptional experiences.',
    image: 'https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'CalendarCheck',
    services: [
      'Corporate events and conferences',
      'Gala dinners and award ceremonies',
      'Product launches and brand activations',
      'Festivals and outdoor events',
      'Community and family events',
      'Private celebrations',
      'Seasonal and themed events',
      'Venue and supplier coordination',
      'Event schedules and run sheets',
      'On-site event supervision',
    ],
    visualDescription:
      'Luxury gala dinners, corporate conferences, event planning visuals, and an animated event lifecycle.',
  },
  {
    slug: 'technical-event-management',
    number: '05',
    title: 'Technical Event Management',
    shortDescription: 'Reliable technical planning behind every successful event.',
    longDescription:
      'Behind every successful event is reliable technical planning. We handle venue surveys, equipment planning, power requirements, show calling, and safety planning to ensure flawless execution.',
    image: 'https://images.pexels.com/photos/9271247/pexels-photo-9271247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Settings',
    services: [
      'Venue surveys and technical assessments',
      'Event layouts and equipment planning',
      'Power and connectivity requirements',
      'Technical schedules and setup plans',
      'Supplier and production-team coordination',
      'Show calling and live-event operation',
      'Safety and contingency planning',
      'Equipment handover and post-event reporting',
    ],
    visualDescription:
      'Technical drawings, venue layout illustrations, stage plans, and a clean technical interface aesthetic.',
  },
  {
    slug: 'hospitality-staffing-solutions',
    number: '06',
    title: 'Hospitality Staffing Solutions',
    shortDescription: 'Professional event personnel selected according to your operational requirements.',
    longDescription:
      'We provide professional event personnel carefully selected to match your operational requirements. From waiters to supervisors, our teams are briefed, coordinated, and ready to deliver exceptional service.',
    image: 'https://images.pexels.com/photos/13375022/pexels-photo-13375022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Users',
    services: [
      'Waiters and waitresses',
      'Bartenders and barbacks',
      'Hosts and hostesses',
      'Event supervisors',
      'Runners and stewards',
      'Registration and guest-service staff',
      'Setup and dismantling teams',
      'Staff briefing and attendance coordination',
    ],
    visualDescription:
      'Professional hospitality teams, elegant staff portraits, animated staff-role cards, and a people-focused layout.',
  },
  {
    slug: 'event-concept-development',
    number: '07',
    title: 'Event Concept Development',
    shortDescription: 'Creative concepts designed around your venue, audience and budget.',
    longDescription:
      'We develop creative concepts tailored to your venue, audience, and budget. From themes and creative direction to food and beverage concepts, we bring your vision to life with compelling proposals.',
    image: 'https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Lightbulb',
    services: [
      'Event themes and creative direction',
      'Venue layouts and guest journeys',
      'Entertainment and activity planning',
      'Food and beverage concepts',
      'Stage and technical concepts',
      'Sponsor activation ideas',
      'Event presentations and proposals',
      'Budget planning',
    ],
    visualDescription:
      'Moodboards, concept sketches, venue floor plans, creative inspiration images, and animated idea-to-execution storytelling.',
  },
  {
    slug: 'corporate-hospitality-training',
    number: '08',
    title: 'Corporate Hospitality Training',
    shortDescription: 'Practical training for hospitality and event-service teams.',
    longDescription:
      'We deliver practical training programs for hospitality and event-service teams. From banquet service to supervisory leadership, our training ensures your team meets the highest professional standards.',
    image: 'https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'GraduationCap',
    services: [
      'Banquet sequence of service',
      'Guest communication',
      'Food and beverage service',
      'Wine and bar-service standards',
      'Allergen awareness',
      'Complaint handling and service recovery',
      'Grooming and professional presentation',
      'Event briefings, SOPs and checklists',
      'Supervisory and team-leadership training',
    ],
    visualDescription:
      'Premium training environment, professional hospitality imagery, course cards, and an interactive learning journey.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
