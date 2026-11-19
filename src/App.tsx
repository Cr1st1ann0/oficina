import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BusinessServices } from './components/BusinessServices';
import { Differentials } from './components/Differentials';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

/** Revela elementos `[data-reveal]` ao entrarem na viewport. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <BusinessServices />
        <Differentials />
        <Gallery />
        <Testimonials />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
