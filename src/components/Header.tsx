import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navigation } from '../data/navigation';
import { company, fullAddress } from '../data/company';
import { waLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './BrandIcons';
import { cssVar } from '../lib/style';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cta = waLink('general');

  // Transparente → sólido
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Seção ativa na navegação
  useEffect(() => {
    const sections = navigation
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menu mobile: trava o scroll, fecha com Esc, prende o foco
  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    if (!open) return;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && panel) {
        const focusables = [toggleRef.current, ...panel.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  /** Link do menu mobile: fecha o menu, destrava o scroll e só então rola até a seção. */
  const navigateFromMenu = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.body.classList.remove('is-locked');
    setOpen(false);
    requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      target.scrollIntoView();
      history.replaceState(null, '', href);
      target.focus({ preventScroll: true });
    });
  };

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__bar container">
        <a href="#inicio" className="header__brand" aria-label={`${company.name} — voltar ao início`} onClick={close}>
          <Logo size={44} />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={active === item.href ? 'is-active' : undefined} aria-current={active === item.href ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {cta && (
          <a href={cta} target="_blank" rel="noopener noreferrer" className="btn header__cta">
            Agendar atendimento
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        )}

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav className="container mobile-menu__inner" aria-label="Navegação mobile">
          <ul className="mobile-menu__list">
            {navigation.map((item, i) => (
              <li key={item.href} style={cssVar('--i', i)}>
                <a href={item.href} onClick={(e) => navigateFromMenu(e, item.href)}>
                  <span className="mobile-menu__index">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            {cta && (
              <a href={cta} target="_blank" rel="noopener noreferrer" className="btn mobile-menu__cta" onClick={close}>
                <WhatsAppIcon size={18} />
                Agendar atendimento
              </a>
            )}
            <p className="mobile-menu__meta">
              {company.phoneDisplay}
              <br />
              {fullAddress}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
