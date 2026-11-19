import { ArrowUpRight, CalendarCheck, Fuel, ScanSearch, Wrench, type LucideIcon } from 'lucide-react';
import toolsAvif700 from '../assets/images/tools-700.avif';
import toolsAvif1200 from '../assets/images/tools-1200.avif';
import toolsWebp700 from '../assets/images/tools-700.webp';
import toolsWebp1200 from '../assets/images/tools-1200.webp';
import { activeServices, type ServiceIcon } from '../data/services';
import { waLink } from '../lib/whatsapp';
import { revealDelay } from '../lib/style';
import './Services.css';

const icons: Record<ServiceIcon, LucideIcon> = {
  wrench: Wrench,
  scan: ScanSearch,
  fuel: Fuel,
  calendar: CalendarCheck,
};

export function Services() {
  return (
    <section id="especialidades" className="section services" aria-labelledby="services-title">
      <div className="container services__layout">
        <div className="services__aside">
          <header data-reveal>
            <p className="eyebrow">Especialidades</p>
            <h2 id="services-title" className="h2 services__title">
              Tecnologia, conhecimento e <em>precisão</em> automotiva.
            </h2>
            <p className="lead services__intro">
              Serviços dedicados a veículos leves flex — do diagnóstico à manutenção, com critério técnico em cada etapa.
            </p>
          </header>

          <figure className="services__figure" data-reveal style={revealDelay(0.1)}>
            <picture>
              <source type="image/avif" srcSet={`${toolsAvif700} 700w, ${toolsAvif1200} 1200w`} sizes="(min-width: 960px) 40vw, 100vw" />
              <source type="image/webp" srcSet={`${toolsWebp700} 700w, ${toolsWebp1200} 1200w`} sizes="(min-width: 960px) 40vw, 100vw" />
              <img
                src={toolsWebp1200}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                alt="Parede de ferramentas organizadas em uma oficina mecânica"
              />
            </picture>
            <span className="photo-credit">Imagem ilustrativa</span>
          </figure>
        </div>

        <ol className="services__list">
          {activeServices.map((service, i) => {
            const Icon = icons[service.icon];
            const href = waLink(service.message);
            return (
              <li key={service.id} id={service.id} className="service" data-reveal style={revealDelay(i * 0.08)}>
                <span className="service__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="service__icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <div className="service__body">
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__desc">{service.description}</p>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link service__cta">
                      Solicitar informações
                      <ArrowUpRight size={16} aria-hidden="true" />
                      <span className="sr-only"> sobre {service.title.toLowerCase()} pelo WhatsApp</span>
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
