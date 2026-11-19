import logo128 from '../assets/logo/garage-logo-128.webp';
import logo256 from '../assets/logo/garage-logo-256.webp';
import logo512 from '../assets/logo/garage-logo-512.webp';
import logoPng from '../assets/logo/garage-logo-128.png';
import { company } from '../data/company';
import './Logo.css';

type Props = {
  /** Tamanho do símbolo em px */
  size?: number;
  /** Exibe o nome comercial ao lado do símbolo */
  withName?: boolean;
  className?: string;
};

/**
 * Logo oficial da GARAGE (engrenagem + carro), sem alterações de desenho ou cor.
 * Apenas recorte técnico e fundo transparente.
 */
export function Logo({ size = 44, withName = true, className = '' }: Props) {
  return (
    <span className={`logo ${className}`}>
      <picture>
        <source type="image/webp" srcSet={`${logo128} 128w, ${logo256} 256w, ${logo512} 512w`} sizes={`${size}px`} />
        <img
          src={logoPng}
          width={size}
          height={size}
          alt={withName ? '' : `Logotipo ${company.name}`}
          className="logo__mark"
          decoding="async"
        />
      </picture>
      {withName && (
        <span className="logo__text">
          <span className="logo__name">{company.name}</span>
          <span className="logo__tag">{company.tagline}</span>
        </span>
      )}
    </span>
  );
}
