import aboutAvif700 from '../assets/images/about-700.avif';
import aboutAvif1200 from '../assets/images/about-1200.avif';
import aboutWebp700 from '../assets/images/about-700.webp';
import aboutWebp1200 from '../assets/images/about-1200.webp';
import { company } from '../data/company';
import { revealDelay } from '../lib/style';
import './About.css';

const values = ['Especialização', 'Responsabilidade', 'Transparência', 'Qualidade', 'Atendimento'];

export function About() {
  return (
    <section id="sobre" className="section section--light about" aria-labelledby="about-title">
      <div className="container about__layout">
        <header className="about__head" data-reveal>
          <p className="eyebrow">Sobre a {company.name}</p>
          <h2 id="about-title" className="h2 about__title">
            Excelência técnica em <em>cada serviço.</em>
          </h2>
        </header>

        <div className="about__body" data-reveal style={revealDelay(0.1)}>
          <p className="lead">
            A {company.name} é uma oficina especializada em mecânica de veículos leves flex, localizada no{' '}
            {company.address.district}, em {company.address.city}.
          </p>
          <p>
            Nosso trabalho parte de um princípio simples: entender o problema antes de propor a solução. Cada
            atendimento combina avaliação criteriosa, orientação clara e execução responsável, para que você saiba o
            que está sendo feito no seu veículo e por quê.
          </p>

          <ul className="about__values" aria-label="Nossos compromissos">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>

        <figure className="about__figure" data-reveal>
          <picture>
            <source type="image/avif" srcSet={`${aboutAvif700} 700w, ${aboutAvif1200} 1200w`} sizes="(min-width: 960px) 58vw, 100vw" />
            <source type="image/webp" srcSet={`${aboutWebp700} 700w, ${aboutWebp1200} 1200w`} sizes="(min-width: 960px) 58vw, 100vw" />
            <img
              src={aboutWebp1200}
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              alt="Mecânico inspecionando o compartimento do motor de um veículo"
            />
          </picture>
          <span className="photo-credit">Imagem ilustrativa</span>
        </figure>

        <aside className="about__note" data-reveal style={revealDelay(0.15)}>
          <span className="about__note-label">Especialidade</span>
          <p className="about__note-text">Mecânica de veículos leves flex</p>
          <span className="about__note-label">Localização</span>
          <p className="about__note-text">
            {company.address.street}
            <br />
            {company.address.district} · {company.address.city} – {company.address.state}
          </p>
        </aside>
      </div>
    </section>
  );
}
