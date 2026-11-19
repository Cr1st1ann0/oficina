/**
 * Informações comerciais da GARAGE — fonte única de verdade.
 * Todos os componentes, o Schema.org e os links de WhatsApp leem daqui.
 * Dados extraídos do site antigo e confirmados pelo proprietário.
 */

export type DayHours = {
  /** Rótulo exibido no site */
  label: string;
  /** Dias no formato Schema.org */
  days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>;
  opens: string; // HH:MM
  closes: string; // HH:MM
  /** Texto exibido no site */
  display: string;
};

export const company = {
  name: 'GARAGE',
  legalDescriptor: 'GARAGE Mecânica Automotiva',
  tagline: 'Mecânica automotiva',
  specialty: 'Mecânica de veículos leves flex',
  shortDescription:
    'Oficina especializada em mecânica de veículos leves flex em Maceió: mecânica geral, diagnóstico eletrônico, injeção eletrônica e manutenção preventiva.',

  /** Telefone em formato internacional, apenas dígitos. Deixe vazio para ocultar os CTAs de WhatsApp. */
  whatsapp: '5582982008200',
  phoneDisplay: '(82) 98200-8200',
  phoneE164: '+5582982008200',
  email: 'garage.maceio@gmail.com',

  address: {
    street: 'Av. Betel, 150B',
    district: 'Tabuleiro do Martins',
    city: 'Maceió',
    state: 'AL',
    stateName: 'Alagoas',
    postalCode: '57081-740',
    country: 'BR',
  },

  hours: [
    {
      label: 'Segunda a sexta',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
      display: '8h às 18h',
    },
    {
      label: 'Sábado',
      days: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
      display: '8h às 12h',
    },
  ] satisfies DayHours[],

  social: {
    instagram: { handle: '@garage.maceio', url: 'https://www.instagram.com/garage.maceio/' },
  },

  /** Link público para as avaliações da empresa no Google. */
  googleReviewsUrl: 'https://g.co/kgs/ca4WtFF',
} as const;

export const fullAddress = `${company.address.street} – ${company.address.district}, ${company.address.city} – ${company.address.state}, ${company.address.postalCode}`;

const mapsQuery = encodeURIComponent(
  `${company.address.street}, ${company.address.district}, ${company.address.city} - ${company.address.state}, ${company.address.postalCode}`,
);

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&hl=pt-BR&z=16&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/** Mensagens pré-definidas do WhatsApp. */
export const whatsappMessages = {
  general:
    'Olá! Conheci a oficina pelo site e gostaria de informações sobre os serviços e atendimento.',
  diagnostic: 'Olá! Gostaria de informações sobre diagnóstico eletrônico para meu veículo.',
  maintenance: 'Olá! Gostaria de informações sobre manutenção preventiva.',
  business:
    'Olá! Represento uma empresa e gostaria de informações sobre atendimento automotivo empresarial.',
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;
