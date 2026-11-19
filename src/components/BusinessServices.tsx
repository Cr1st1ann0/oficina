import { ArrowRight, Building2, UserRound } from 'lucide-react';
import bizAvif700 from '../assets/images/business-700.avif';
import bizAvif1200 from '../assets/images/business-1200.avif';
import bizWebp700 from '../assets/images/business-700.webp';
import bizWebp1200 from '../assets/images/business-1200.webp';
import { waLink } from '../lib/whatsapp';
import { revealDelay } from '../lib/style';
import './BusinessServices.css';

export function BusinessServices() {
  const personal = waLink('general');
  const business = waLink('business');

  return (
    <section id="atendimento" className="section section--graphite audience" aria-labelledby="audience-title">
      <div className="container">
        <header className="audience__head" data-reveal>
          <p className="eyebrow">Atendimento</p>
          <h2 id="audience-title" className="h2 audience__title">
            Para quem dirige. <em>Para quem opera.</em>
          </h2>
        </header>

        <div className="audience__grid">
          <article className="audience-card audience-card--personal" data-reveal>
            <span className="audience-card__icon" aria-hidden="true">
              <UserRound size={24} strokeWidth={1.5} />
            </span>
            <p className="audience-card__kicker">Atendimento particular</p>
            <h3 className="audience-card__title">Seu veículo, avaliado com critério.</h3>
            <p className="audience-card__text">
              Seu veículo recebe atenção especializada, com avaliação criteriosa e orientação transparente.
            </p>
            {personal && (
              <a href={personal} target="_blank" rel="noopener noreferrer" className="btn btn--ghost audience-card__cta">
                Falar sobre meu veículo
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            )}
          </article>

          <article className="audience-card audience-card--business" data-reveal style={revealDelay(0.12)}>
            <picture className="audience-card__media">
              <source type="image/avif" srcSet={`${bizAvif700} 700w, ${bizAvif1200} 1200w`} sizes="(min-width: 960px) 60vw, 100vw" />
              <source type="image/webp" srcSet={`${bizWebp700} 700w, ${bizWebp1200} 1200w`} sizes="(min-width: 960px) 60vw, 100vw" />
              <img src={bizWebp1200} width={1200} height={709} loading="lazy" decoding="async" alt="" />
            </picture>
            <span className="photo-credit">Imagem ilustrativa</span>
            <div className="audience-card__content">
              <span className="audience-card__icon audience-card__icon--solid" aria-hidden="true">
                <Building2 size={24} strokeWidth={1.5} />
              </span>
              <p className="audience-card__kicker">Atendimento empresarial</p>
              <h3 className="audience-card__title">Veículos cuidados. Operação em movimento.</h3>
              <p className="audience-card__text">
                Soluções de manutenção automotiva para empresas que precisam cuidar de seus veículos e operações.
              </p>
              {business && (
                <a href={business} target="_blank" rel="noopener noreferrer" className="btn audience-card__cta">
                  Atendimento para empresas
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
