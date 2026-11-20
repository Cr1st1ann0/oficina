import logo128 from '../assets/logo/garage-logo-128.webp';
import logo256 from '../assets/logo/garage-logo-256.webp';
import logo512 from '../assets/logo/garage-logo-512.webp';
import logo1024 from '../assets/logo/garage-logo-1024.webp';
import logoPng from '../assets/logo/garage-logo-128.png';
import { company } from '../data/company';

type Props = {
  /** Tamanho do símbolo em px (atributos width/height; o tamanho visual vem do CSS) */
  size?: number;
  /** Mostra a legenda "Mecânica automotiva" abaixo do nome */
  tagline?: boolean;
};

/**
 * Logo oficial da GARAGE (engrenagem + carro), sem alterações de desenho ou cor,
 * seguida do nome em texto. Use dentro de um elemento com a classe `brand`.
 */
export function Logo({ size = 58, tagline = true }: Props) {
  return (
    <>
      <picture>
        <source type="image/webp" srcSet={`${logo128} 128w, ${logo256} 256w, ${logo512} 512w`} sizes={`${size}px`} />
        <img src={logoPng} width={size} height={size} alt="" decoding="async" />
      </picture>
      <span>
        <b>{company.name}</b>
        {tagline && <small>{company.tagline}</small>}
      </span>
    </>
  );
}

/** Versão grande da logo, usada como elemento gráfico (topo e chamada final). */
export { logo1024 as logoLarge };
