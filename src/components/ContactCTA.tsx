import { logoLarge } from './Logo';
import { ArrowRightIcon } from './BrandIcons';
import { company } from '../data/company';
import { waLink } from '../lib/whatsapp';

export function ContactCTA() {
  const href = waLink('general');
  const label = 'Falar com nossa equipe';

  return (
    <section className="cta" data-spy="contato" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="rv">
          <h2 id="cta-title">
            Seu veículo precisa <b>de atenção?</b>
          </h2>
          <p>Entre em contato e solicite informações sobre nossos serviços de mecânica automotiva.</p>
          {href ? (
            <a className="glass y" href={href} target="_blank" rel="noopener noreferrer">
              {label}
              <ArrowRightIcon />
            </a>
          ) : (
            <a className="glass y" href={`tel:${company.phoneE164}`}>
              {label}
              <ArrowRightIcon />
            </a>
          )}
        </div>
        <img className="em" src={logoLarge} alt={`Logotipo ${company.name}`} width={1024} height={1024} loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
