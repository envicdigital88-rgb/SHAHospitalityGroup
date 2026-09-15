import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { BackToTop } from './BackToTop';
import { ScrollProgress } from './ScrollProgress';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-midnight">
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
