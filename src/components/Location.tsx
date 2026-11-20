import { company, mapsEmbedUrl, fullAddress } from '../data/company';
import { waLink } from '../lib/whatsapp';
import { ArrowUpRightIcon } from './BrandIcons';

export function Location() {
  const wa = waLink('general');

  return (
    <section id="contato" className="sec lt" data-spy="contato" aria-labelledby="location-title">
      <div className="wrap">
        <div className="eyebrow rv">
          <i />
          Contato e localização
        </div>
        <h2 id="location-title" className="h2 rv">
          Venha até a <b>{company.name}.</b>
        </h2>

        <div className="ct">
          <dl className="rv">
            <div>
              <dt>Endereço</dt>
              <dd>
                {company.address.street}
                <br />
                {company.address.district}, {company.address.city} – {company.address.state}
                <br />
                CEP {company.address.postalCode}
              </dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>
                {company.hours.map((h) => (
                  <span key={h.label} style={{ display: 'block' }}>
                    {h.label} · {h.display}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                {wa ? (
                  <a className="lk" href={wa} target="_blank" rel="noopener noreferrer" aria-label={`Abrir conversa no WhatsApp: ${company.phoneDisplay}`}>
                    {company.phoneDisplay}
                    <ArrowUpRightIcon />
                  </a>
                ) : (
                  company.phoneDisplay
                )}
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>{company.email}</dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a className="lk" href={company.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir o Instagram ${company.social.instagram.handle}`}>
                  {company.social.instagram.handle}
                  <ArrowUpRightIcon />
                </a>
              </dd>
            </div>
          </dl>

          <div className="map rv">
            <iframe title={`Mapa: ${fullAddress}`} src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}
