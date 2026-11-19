import { ArrowDown, ArrowRight } from 'lucide-react';
import heroAvif960 from '../assets/images/hero-960.avif';
import heroAvif1920 from '../assets/images/hero-1920.avif';
import heroWebp960 from '../assets/images/hero-960.webp';
import heroWebp1920 from '../assets/images/hero-1920.webp';
import { activeServices } from '../data/services';
import { company } from '../data/company';
import { waLink } from '../lib/whatsapp';
import './Hero.css';

export function Hero() {
  const cta = waLink('general');

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <picture>
          <source type="image/avif" srcSet={`${heroAvif960} 960w, ${heroAvif1920} 1920w`} sizes="100vw" />
          <source type="image/webp" srcSet={`${heroWebp960} 960w, ${heroWebp1920} 1920w`} sizes="100vw" />
          <img
            src={heroWebp1920}
            width={1920}
            height={1080}
            alt="Detalhe de motor automotivo com correias e polias"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <span className="photo-credit">Imagem ilustrativa</span>
      </div>

      <div className="hero__grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero__content">
        <p className="hero__geo">
          <span className="hero__geo-dot" aria-hidden="true" />
          {company.address.city.toUpperCase()} — {company.address.stateName.toUpperCase()}
        </p>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">
            <span>Precisão mecânica.</span>
          </span>
          <span className="hero__line hero__line--accent">
            <span>Confiança em cada detalhe.</span>
          </span>
        </h1>

        <div className="hero__copy">
          <p className="hero__sub">Especialistas em mecânica e reparação de veículos leves flex em Maceió.</p>
          <p className="hero__text">
            Diagnóstico, manutenção e cuidado automotivo com responsabilidade técnica e transparência.
          </p>
        </div>

        <div className="hero__actions">
          {cta && (
            <a href={cta} target="_blank" rel="noopener noreferrer" className="btn">
              Agendar atendimento
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          )}
          <a href="#especialidades" className="btn btn--ghost">
            Conhecer especialidades
          </a>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="container hero__bottom-inner">
          <ul className="hero__specs" aria-label="Especialidades">
            {activeServices.map((s, i) => (
              <li key={s.id}>
                <span className="hero__spec-index">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </li>
            ))}
          </ul>
          <a href="#sobre" className="hero__scroll" aria-label="Rolar para a próxima seção">
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
