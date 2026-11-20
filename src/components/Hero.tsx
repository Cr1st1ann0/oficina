import heroAvif800 from '../assets/images/hero-800.avif';
import heroAvif1600 from '../assets/images/hero-1600.avif';
import heroWebp800 from '../assets/images/hero-800.webp';
import heroWebp1600 from '../assets/images/hero-1600.webp';
import { logoLarge } from './Logo';
import { ArrowDownIcon } from './BrandIcons';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <picture>
        <source type="image/avif" srcSet={`${heroAvif800} 800w, ${heroAvif1600} 1600w`} sizes="100vw" />
        <source type="image/webp" srcSet={`${heroWebp800} 800w, ${heroWebp1600} 1600w`} sizes="100vw" />
        <img
          className="bg"
          src={heroWebp1600}
          width={1600}
          height={900}
          alt="Detalhe do motor de um carro, com correias e polias"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <img className="emb" src={logoLarge} alt="" aria-hidden="true" width={1024} height={1024} fetchPriority="low" />
      <span className="cred">Imagem ilustrativa</span>

      <div className="wrap in">
        <h1 id="hero-title">
          <span>
            <i>Mecânica Automotiva.</i>
          </span>
          <b>
            <span>
              <i>Confiança em</i>
            </span>
            <span>
              <i>cada detalhe.</i>
            </span>
          </b>
        </h1>
        <p className="sub">Especialistas em mecânica e reparação de veículos leves flex em Maceió.</p>
      </div>

      <a className="dn" href="#servicos" aria-label="Rolar para as especialidades">
        <ArrowDownIcon />
      </a>
    </section>
  );
}
