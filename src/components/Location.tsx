import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone, Star } from 'lucide-react';
import { company, fullAddress, mapsDirectionsUrl, mapsEmbedUrl } from '../data/company';
import { waLink } from '../lib/whatsapp';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import './Location.css';

export function Location() {
  const wa = waLink('general');

  return (
    <section id="contato" className="section section--graphite location" aria-labelledby="location-title">
      <div className="container location__layout">
        <div className="location__info">
          <header data-reveal>
            <p className="eyebrow">Contato e localização</p>
            <h2 id="location-title" className="h2 location__title">
              Venha até a <em>{company.name}.</em>
            </h2>
          </header>

          <dl className="location__list" data-reveal>
            <div className="location__row">
              <dt>
                <MapPin size={18} aria-hidden="true" /> Endereço
              </dt>
              <dd>
                <address>
                  {company.address.street}
                  <br />
                  {company.address.district}, {company.address.city} – {company.address.state}
                  <br />
                  CEP {company.address.postalCode}
                </address>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-link location__link">
                  Como chegar
                  <Navigation size={14} aria-hidden="true" />
                </a>
              </dd>
            </div>

            <div className="location__row">
              <dt>
                <Phone size={18} aria-hidden="true" /> Telefone
              </dt>
              <dd>
                <a href={`tel:${company.phoneE164}`} className="location__value">
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>

            {wa && (
              <div className="location__row">
                <dt>
                  <WhatsAppIcon size={18} /> WhatsApp
                </dt>
                <dd>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="location__value">
                    {company.phoneDisplay}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            )}

            <div className="location__row">
              <dt>
                <Clock size={18} aria-hidden="true" /> Horário
              </dt>
              <dd>
                <ul className="location__hours">
                  {company.hours.map((h) => (
                    <li key={h.label}>
                      <span>{h.label}</span>
                      <span>{h.display}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="location__row">
              <dt>
                <Mail size={18} aria-hidden="true" /> E-mail
              </dt>
              <dd>
                <a href={`mailto:${company.email}`} className="location__value">
                  {company.email}
                </a>
              </dd>
            </div>

            <div className="location__row">
              <dt>
                <InstagramIcon size={18} /> Redes
              </dt>
              <dd className="location__social">
                <a href={company.social.instagram.url} target="_blank" rel="noopener noreferrer" className="location__value">
                  Instagram {company.social.instagram.handle}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href={company.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="location__value">
                  <Star size={16} aria-hidden="true" /> Avaliações no Google
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="location__map" data-reveal>
          <iframe
            src={mapsEmbedUrl}
            title={`Mapa: ${fullAddress}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
