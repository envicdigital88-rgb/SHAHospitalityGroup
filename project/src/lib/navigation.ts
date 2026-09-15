export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'Training', to: '/training' },
  { label: 'Contact', to: '/contact' },
];
