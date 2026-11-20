import { waLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './BrandIcons';

export function WhatsAppButton() {
  const href = waLink('general');
  if (!href) return null;

  return (
    <a className="wa" href={href} target="_blank" rel="noopener noreferrer" aria-label="Falar com a GARAGE pelo WhatsApp">
      <WhatsAppIcon size={28} />
    </a>
  );
}
