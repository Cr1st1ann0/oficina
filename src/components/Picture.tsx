import type { ImgHTMLAttributes } from 'react';

type Props = {
  avif: string;
  webp: string;
  /** srcset opcionais para imagens responsivas (ex.: "a.avif 800w, b.avif 1600w") */
  avifSet?: string;
  webpSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
} & Pick<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'fetchPriority' | 'className'>;

/** Imagem em AVIF com fallback em WebP, sempre com dimensões para evitar salto de layout. */
export function Picture({ avif, webp, avifSet, webpSet, sizes, alt, width, height, loading = 'lazy', fetchPriority, className }: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={avifSet ?? avif} sizes={sizes} />
      <source type="image/webp" srcSet={webpSet ?? webp} sizes={sizes} />
      <img src={webp} alt={alt} width={width} height={height} loading={loading} fetchPriority={fetchPriority} decoding="async" className={className} />
    </picture>
  );
}
