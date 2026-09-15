export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const projectCategories = [
  'All',
  'Corporate Events',
  'Golf Tournaments',
  'Sports Events',
  'Technical Production',
  'Hospitality Operations',
  'Brand Activations',
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Corporate Gala Dinner',
    category: 'Corporate Events',
    image: 'https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'An elegant corporate gala with bespoke table settings, ambient lighting, and full hospitality service.',
  },
  {
    id: 'p2',
    title: 'Golf Tournament Operations',
    category: 'Golf Tournaments',
    image: 'https://images.pexels.com/photos/4398355/pexels-photo-4398355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Complete tournament management including hospitality village, live scoring, and VIP player support.',
  },
  {
    id: 'p3',
    title: 'Padel Tournament Production',
    category: 'Sports Events',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Indoor padel tournament with professional court setup, LED displays, and broadcast-quality production.',
  },
  {
    id: 'p4',
    title: 'LED Wall Stage Production',
    category: 'Technical Production',
    image: 'https://images.pexels.com/photos/17315442/pexels-photo-17315442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Large-format LED wall installation with synchronized lighting and professional sound reinforcement.',
  },
  {
    id: 'p5',
    title: 'Hospitality Team Deployment',
    category: 'Hospitality Operations',
    image: 'https://images.pexels.com/photos/13375022/pexels-photo-13375022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Professional hospitality team deployment for a high-profile event with full briefing and coordination.',
  },
  {
    id: 'p6',
    title: 'Brand Activation Showcase',
    category: 'Brand Activations',
    image: 'https://images.pexels.com/photos/26150617/pexels-photo-26150617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Interactive brand activation with custom displays, product showcases, and engagement zones.',
  },
  {
    id: 'p7',
    title: 'Conference Stage Design',
    category: 'Technical Production',
    image: 'https://images.pexels.com/photos/9271247/pexels-photo-9271247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Conference stage with architectural lighting, projection mapping, and live streaming capabilities.',
  },
  {
    id: 'p8',
    title: 'Football Fan Zone',
    category: 'Sports Events',
    image: 'https://images.pexels.com/photos/26832707/pexels-photo-26832707.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Outdoor fan zone with large-screen broadcasts, food and beverage outlets, and crowd management.',
  },
  {
    id: 'p9',
    title: 'Esports Tournament Arena',
    category: 'Sports Events',
    image: 'https://images.pexels.com/photos/14266493/pexels-photo-14266493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Esports competition arena with gaming stations, broadcast setup, and live audience production.',
  },
  {
    id: 'p10',
    title: 'Corporate Conference',
    category: 'Corporate Events',
    image: 'https://images.pexels.com/photos/8761524/pexels-photo-8761524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Multi-day corporate conference with plenary sessions, breakout rooms, and technical production.',
  },
  {
    id: 'p11',
    title: 'Luxury Banquet Setup',
    category: 'Hospitality Operations',
    image: 'https://images.pexels.com/photos/16120243/pexels-photo-16120243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luxury banquet with elegant floral centerpieces, fine dining service, and ambient lighting design.',
  },
  {
    id: 'p12',
    title: 'Product Launch Event',
    category: 'Brand Activations',
    image: 'https://images.pexels.com/photos/25809255/pexels-photo-25809255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Product launch with reveal staging, multimedia presentations, and VIP hospitality arrangements.',
  },
];
