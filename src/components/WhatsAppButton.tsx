import { useEffect, useState } from 'react';
import { waLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './BrandIcons';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  const href = waLink('general');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      aria-label="Falar com a GARAGE pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsAppIcon size={26} />
      <span className="wa-float__label">Fale conosco</span>
    </a>
  );
}
