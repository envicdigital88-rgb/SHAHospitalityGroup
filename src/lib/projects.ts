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
  'Weddings & Galas',
  'Outdoor Events',
  'Banquet Setup',
  'Event Decor',
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Elegant Banquet Hall Decor',
    category: 'Weddings & Galas',
    image: '/images/gallery-7.jpg',
    description: 'A stunning banquet hall setup featuring sophisticated lighting, premium table arrangements, and an elegant atmosphere for a grand celebration.',
  },
  {
    id: 'p2',
    title: 'Enchanted Floral Archway',
    category: 'Event Decor',
    image: '/images/gallery-3.jpg',
    description: 'A breathtaking floral arch walkway designed to create a magical entrance experience for guests arriving at the venue.',
  },
  {
    id: 'p3',
    title: 'Chic Event Space Layout',
    category: 'Corporate Events',
    image: '/images/gallery-4.jpg',
    description: 'A modern and chic event space configuration perfect for corporate gatherings, networking events, or stylish launch parties.',
  },
  {
    id: 'p4',
    title: 'Sophisticated Indoor Ambiance',
    category: 'Weddings & Galas',
    image: '/images/gallery-2.jpg',
    description: 'Exquisite indoor decor featuring ambient lighting, premium centerpieces, and a carefully curated aesthetic for luxury events.',
  },
  {
    id: 'p5',
    title: 'Elegant Outdoor Dinner Party',
    category: 'Outdoor Events',
    image: '/images/gallery-5.jpg',
    description: 'A beautifully staged outdoor dinner party under the stars, combining comfort with high-end hospitality service.',
  },
  {
    id: 'p6',
    title: 'Premium Banquet Table Setup',
    category: 'Banquet Setup',
    image: '/images/gallery-6.jpg',
    description: 'Durable and stylish round wood banquet tables arranged with precision for optimal guest flow and elegant dining.',
  },
  {
    id: 'p7',
    title: 'Seasonal Event Atmosphere',
    category: 'Event Decor',
    image: '/images/gallery-8.jpg',
    description: 'A cozy, autumnal-themed event setup highlighting our ability to adapt decor and ambiance to seasonal themes.',
  },
  {
    id: 'p8',
    title: 'Luxury Corporate Gathering',
    category: 'Corporate Events',
    image: '/images/gallery-1.jpg',
    description: 'A high-end corporate event setting demonstrating our capability to deliver polished, professional environments.',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
