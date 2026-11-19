/**
 * Galeria de fotos REAIS da oficina.
 * A seção só aparece no site quando houver pelo menos um item.
 *
 * Como adicionar:
 * 1. Converta a foto para WebP (ex.: 1600px de largura) e salve em src/assets/images/galeria/
 * 2. Importe o arquivo aqui e adicione um item ao array.
 *
 *   import fachada from '../assets/images/galeria/fachada.webp';
 *   { src: fachada, alt: 'Fachada da GARAGE na Av. Betel', caption: 'Fachada', width: 1600, height: 1067, size: 'wide' }
 */

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  /** Variação de tamanho no grid editorial */
  size?: 'wide' | 'tall' | 'regular';
};

export const gallery: GalleryItem[] = [];
