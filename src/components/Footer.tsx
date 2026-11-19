import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { company } from '../data/company';
import { activeServices } from '../data/services';
import { navigation } from '../data/navigation';
import { waLink } from '../lib/whatsapp';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  const wa = waLink('general');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo size={64} />
            <p className="footer__desc">{company.shortDescription}</p>
            <div className="footer__social">
              <a href={company.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${company.social.instagram.handle}`}>
                <InstagramIcon size={18} />
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              )}
            </div>
          </div>

          <nav className="footer__col" aria-label="Navegação do rodapé">
            <h2 className="footer__heading">Navegação</h2>
            <ul>
              {navigation.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Especialidades</h2>
            <ul>
              {activeServices.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Contato</h2>
            <ul>
              <li>
                <a href={`tel:${company.phoneE164}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="footer__plain">
                {company.address.street}
                <br />
                {company.address.district}
                <br />
                {company.address.city} – {company.address.state}, {company.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {company.legalDescriptor}. Todos os direitos reservados.
          </p>
          <p className="footer__credit">
            Imagens ilustrativas:{' '}
            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
          </p>
          <a href="#inicio" className="footer__top-link">
            Voltar ao topo <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
