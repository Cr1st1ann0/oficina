/** Itens do menu. O `id` precisa ser o mesmo `id` da seção correspondente na página. */
export const navigation = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'atendimento', label: 'Atendimento' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' },
] as const;

export type NavId = (typeof navigation)[number]['id'];
