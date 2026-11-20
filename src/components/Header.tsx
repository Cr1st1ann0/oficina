import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { navigation } from '../data/navigation';
import { company } from '../data/company';
import { waLink } from '../lib/whatsapp';

const locationLabel = `${company.address.city} - ${company.address.state}`.toUpperCase();

export function Header() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const wa = waLink('general');

  // Cabeçalho sólido ao rolar + destaque do item da seção em que a tela está
  useEffect(() => {
    const update = () => {
      setSolid(window.scrollY > 40);
      const marker = window.innerHeight * 0.4;
      let current: string | null = null;
      document.querySelectorAll<HTMLElement>('[data-spy]').forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) current = section.dataset.spy ?? null;
      });
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className={solid ? 'solid' : undefined}>
      <div className="wrap hd">
        <span className="loc">{locationLabel}</span>
        <a className="brand" href="#inicio" aria-label={`${company.name} — voltar ao início`}>
          <Logo tagline={false} />
        </a>
        <div className="soc">
          <a href={company.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${company.social.instagram.handle}`} title="Instagram">
            <InstagramIcon size={21} />
          </a>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" title="WhatsApp">
              <WhatsAppIcon size={21} />
            </a>
          )}
        </div>
      </div>
      <nav className="wrap nv" aria-label="Seções da página">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-k={item.id}
            className={active === item.id ? 'on' : undefined}
            aria-current={active === item.id ? 'true' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
