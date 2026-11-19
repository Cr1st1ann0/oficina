import { company, whatsappMessages, type WhatsAppMessageKey } from '../data/company';

/**
 * Monta um link wa.me com a mensagem codificada.
 * Retorna `null` quando o número não está configurado — os componentes
 * não renderizam o CTA nesse caso (nunca um link inválido).
 */
export function waLink(key: WhatsAppMessageKey = 'general'): string | null {
  const digits = company.whatsapp.replace(/\D/g, '');
  if (digits.length < 12) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessages[key])}`;
}
