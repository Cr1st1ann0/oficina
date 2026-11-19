import { ArrowUpRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { company } from '../data/company';
import './Testimonials.css';

/**
 * Depoimentos reais. Não é renderizado enquanto `src/data/testimonials.ts` estiver vazio.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="section section--graphite testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="testimonials__head" data-reveal>
          <p className="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title" className="h2">
            Quem confia, <em>recomenda.</em>
          </h2>
        </header>

        <ul className="testimonials__list">
          {testimonials.map((t) => (
            <li key={t.author + t.text.slice(0, 16)} className="testimonial" data-reveal>
              {t.rating && (
                <p className="testimonial__rating" aria-label={`Nota ${t.rating} de 5`}>
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                  ))}
                </p>
              )}
              <blockquote className="testimonial__text">“{t.text}”</blockquote>
              <p className="testimonial__author">
                {t.author}
                {t.source && <span> · {t.source}</span>}
              </p>
            </li>
          ))}
        </ul>

        <a href={company.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-link testimonials__more">
          Ver avaliações no Google
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
