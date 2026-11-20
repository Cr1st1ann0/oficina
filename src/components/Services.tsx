import type { ReactNode } from 'react';
import { Picture } from './Picture';
import { ArrowRightIcon } from './BrandIcons';
import { activeServices } from '../data/services';
import { waLink } from '../lib/whatsapp';

import mecanicaAvif from '../assets/images/servico-mecanica.avif';
import mecanicaWebp from '../assets/images/servico-mecanica.webp';
import diagnosticoAvif from '../assets/images/servico-diagnostico.avif';
import diagnosticoWebp from '../assets/images/servico-diagnostico.webp';
import injecaoAvif from '../assets/images/servico-injecao.avif';
import injecaoWebp from '../assets/images/servico-injecao.webp';
import preventivaAvif from '../assets/images/servico-preventiva.avif';
import preventivaWebp from '../assets/images/servico-preventiva.webp';

/** Foto de cada serviço, pelo `id` em src/data/services.ts. Serviços sem foto aqui aparecem sem imagem. */
const photos: Record<string, { avif: string; webp: string }> = {
  'mecanica-geral': { avif: mecanicaAvif, webp: mecanicaWebp },
  'diagnostico-eletronico': { avif: diagnosticoAvif, webp: diagnosticoWebp },
  'injecao-eletronica': { avif: injecaoAvif, webp: injecaoWebp },
  'manutencao-preventiva': { avif: preventivaAvif, webp: preventivaWebp },
};

export function Services() {
  return (
    <section id="servicos" className="sec" data-spy="servicos" aria-labelledby="services-title">
      <div className="wrap">
        <div className="eyebrow rv">
          <i />
          Especialidades
        </div>
        <h2 id="services-title" className="h2 rv">
          Tecnologia, conhecimento e <b>precisão</b> automotiva.
        </h2>

        <div className="tiles">
          {activeServices.map((service, i) => {
            const photo = photos[service.id];
            const href = waLink(service.message);
            const content: ReactNode = (
              <>
                {photo && <Picture avif={photo.avif} webp={photo.webp} alt="" width={1000} height={667} sizes="(min-width: 1000px) 50vw, 100vw" />}
                <div className="top">
                  <h3>{service.title}</h3>
                  <span className="num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="bt">
                  <p>{service.description}</p>
                  <span className="arr" aria-hidden="true">
                    <ArrowRightIcon size={19} />
                  </span>
                </div>
              </>
            );
            return href ? (
              <a
                key={service.id}
                id={service.id}
                className="tile rv"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${service.title}: solicitar informações pelo WhatsApp`}
              >
                {content}
              </a>
            ) : (
              <div key={service.id} id={service.id} className="tile rv">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
