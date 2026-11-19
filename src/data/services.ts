import type { WhatsAppMessageKey } from './company';

export type ServiceIcon = 'wrench' | 'scan' | 'fuel' | 'calendar';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  /** Mensagem de WhatsApp usada no CTA do serviço */
  message: WhatsAppMessageKey;
  /** Só serviços confirmados pelo proprietário devem estar `true`. */
  enabled: boolean;
};

export const services: Service[] = [
  {
    id: 'mecanica-geral',
    title: 'Mecânica geral',
    description:
      'Avaliação e reparo dos sistemas mecânicos do veículo, com atenção a cada componente e orientação clara sobre o que precisa ser feito.',
    icon: 'wrench',
    message: 'general',
    enabled: true,
  },
  {
    id: 'diagnostico-eletronico',
    title: 'Diagnóstico eletrônico',
    description:
      'Leitura e interpretação de falhas com equipamento de diagnóstico, para identificar a origem do problema antes de qualquer intervenção.',
    icon: 'scan',
    message: 'diagnostic',
    enabled: true,
  },
  {
    id: 'injecao-eletronica',
    title: 'Injeção eletrônica',
    description:
      'Análise e manutenção do sistema de injeção de veículos flex, em busca de funcionamento estável, bom desempenho e consumo adequado.',
    icon: 'fuel',
    message: 'diagnostic',
    enabled: true,
  },
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção preventiva',
    description:
      'Revisões e verificações periódicas que ajudam a evitar falhas inesperadas e a preservar a vida útil do veículo.',
    icon: 'calendar',
    message: 'maintenance',
    enabled: true,
  },
  /*
   * Para adicionar um serviço (somente após confirmação do proprietário),
   * inclua um novo objeto acima com `enabled: true`.
   * Serviços citados no site antigo e ainda NÃO confirmados:
   * troca de óleo e filtros, freios, suspensão e direção, sistema elétrico.
   */
];

export const activeServices = services.filter((s) => s.enabled);
