import { type ReactNode } from 'react';
import { Reveal } from '@/components/animations/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`${alignClass} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="text-xs font-semibold text-champagne tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-softwhite leading-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-slategray leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
