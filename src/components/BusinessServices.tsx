import type { ReactNode } from 'react';
import { Picture } from './Picture';
import particularAvif from '../assets/images/atendimento-particular.avif';
import particularWebp from '../assets/images/atendimento-particular.webp';
import empresarialAvif from '../assets/images/atendimento-empresarial.avif';
import empresarialWebp from '../assets/images/atendimento-empresarial.webp';
import { waLink } from '../lib/whatsapp';
import type { WhatsAppMessageKey } from '../data/company';

type Card = {
  kicker: string;
  title: string;
  text: string;
  cta: string;
  message: WhatsAppMessageKey;
  featured?: boolean;
  avif: string;
  webp: string;
};

const cards: Card[] = [
  {
    kicker: 'Atendimento particular',
    title: 'Seu veículo, avaliado com critério.',
    text: 'Seu veículo recebe atenção especializada, com avaliação criteriosa e orientação transparente.',
    cta: 'Falar sobre meu veículo',
    message: 'general',
    avif: particularAvif,
    webp: particularWebp,
  },
  {
    kicker: 'Atendimento empresarial',
    title: 'Veículos cuidados. Operação em movimento.',
    text: 'Soluções de manutenção automotiva para empresas que precisam cuidar de seus veículos e operações.',
    cta: 'Atendimento para empresas',
    message: 'business',
    featured: true,
    avif: empresarialAvif,
    webp: empresarialWebp,
  },
];

export function BusinessServices() {
  return (
    <section id="atendimento" className="sec" data-spy="atendimento" aria-labelledby="audience-title">
      <div className="wrap">
        <div className="eyebrow rv">
          <i />
          Atendimento
        </div>
        <h2 id="audience-title" className="h2 rv">
          Para quem dirige. <b>Para quem opera.</b>
        </h2>

        <div className="aud">
          {cards.map((card) => {
            const href = waLink(card.message);
            const content: ReactNode = (
              <>
                <Picture avif={card.avif} webp={card.webp} alt="" width={1200} height={800} sizes="(min-width: 1000px) 50vw, 100vw" />
                <small>{card.kicker}</small>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {href && <span className={`glass${card.featured ? ' y' : ''}`}>{card.cta}</span>}
              </>
            );
            return href ? (
              <a key={card.kicker} className="at rv" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${card.kicker}: ${card.cta} pelo WhatsApp`}>
                {content}
              </a>
            ) : (
              <div key={card.kicker} className="at rv">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
