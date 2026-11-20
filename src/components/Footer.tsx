import { Logo } from './Logo';
import { company } from '../data/company';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <a className="brand" href="#inicio" aria-label={`${company.name} — voltar ao início`}>
          <Logo size={44} tagline={false} />
        </a>
        <span>
          © {year} {company.legalDescriptor}. Todos os direitos reservados. · Imagens ilustrativas:{' '}
          <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
        </span>
        <a href={company.social.instagram.url} target="_blank" rel="noopener noreferrer">
          {company.social.instagram.handle}
        </a>
      </div>
    </footer>
  );
}
