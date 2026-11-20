import sobreAvif900 from '../assets/images/sobre-900.avif';
import sobreAvif1800 from '../assets/images/sobre-1800.avif';
import sobreWebp900 from '../assets/images/sobre-900.webp';
import sobreWebp1800 from '../assets/images/sobre-1800.webp';
import { Picture } from './Picture';
import { company } from '../data/company';

const values = ['Especialização', 'Responsabilidade', 'Transparência', 'Qualidade', 'Atendimento'];

export function About() {
  return (
    <section id="sobre" className="sobre" data-spy="sobre" aria-labelledby="about-title">
      <Picture
        className="bg"
        avif={sobreAvif1800}
        webp={sobreWebp1800}
        avifSet={`${sobreAvif900} 900w, ${sobreAvif1800} 1800w`}
        webpSet={`${sobreWebp900} 900w, ${sobreWebp1800} 1800w`}
        sizes="100vw"
        alt=""
        width={1800}
        height={1200}
      />
      <div className="wrap">
        <div className="tx rv">
          <div className="eyebrow">
            <i />
            Sobre a {company.name}
          </div>
          <h2 id="about-title" className="h2">
            Excelência técnica em <b>cada serviço.</b>
          </h2>
          <p>
            Oficina especializada em mecânica de veículos leves flex, no {company.address.district}, em {company.address.city}. Entendemos o problema
            antes de propor a solução, com avaliação criteriosa, orientação clara e execução responsável.
          </p>
          <ul className="chips" aria-label="Nossos compromissos">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
