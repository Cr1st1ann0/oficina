import ctaAvif800 from '../assets/images/cta-800.avif';
import ctaAvif1600 from '../assets/images/cta-1600.avif';
import ctaWebp800 from '../assets/images/cta-800.webp';
import ctaWebp1600 from '../assets/images/cta-1600.webp';
import { company } from '../data/company';
import { waLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './BrandIcons';
import './ContactCTA.css';

export function ContactCTA() {
  const href = waLink('general');

  return (
    <section className="cta" aria-labelledby="cta-title">
      <picture className="cta__media">
        <source type="image/avif" srcSet={`${ctaAvif800} 800w, ${ctaAvif1600} 1600w`} sizes="100vw" />
        <source type="image/webp" srcSet={`${ctaWebp800} 800w, ${ctaWebp1600} 1600w`} sizes="100vw" />
        <img src={ctaWebp1600} width={1600} height={1200} loading="lazy" decoding="async" alt="" />
      </picture>
      <span className="photo-credit">Imagem ilustrativa</span>

      <div className="container cta__inner">
        <span className="cta__rule" aria-hidden="true" />
        <h2 id="cta-title" className="cta__title" data-reveal>
          Seu veículo precisa <span>de atenção?</span>
        </h2>
        <p className="cta__text lead" data-reveal>
          Entre em contato e solicite informações sobre nossos serviços de mecânica automotiva.
        </p>
        <div className="cta__actions" data-reveal>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn cta__btn">
              <WhatsAppIcon size={20} />
              Falar com nossa equipe
            </a>
          ) : (
            <a href={`tel:${company.phoneE164}`} className="btn cta__btn">
              Falar com nossa equipe
            </a>
          )}
          <a href={`tel:${company.phoneE164}`} className="cta__phone">
            ou ligue {company.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
