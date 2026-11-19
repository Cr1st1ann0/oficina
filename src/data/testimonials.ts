/**
 * Depoimentos REAIS de clientes (ex.: copiados de avaliações públicas no Google,
 * com autorização). A seção só aparece quando houver itens.
 * Não inclua nomes, notas ou textos inventados.
 */

export type Testimonial = {
  author: string;
  text: string;
  /** Origem da avaliação, ex.: "Google" */
  source?: string;
  /** Nota de 1 a 5, apenas se for a nota real da avaliação */
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [];
