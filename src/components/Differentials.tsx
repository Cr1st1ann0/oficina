import { BadgeCheck, Eye, ScanLine, Target, type LucideIcon } from 'lucide-react';
import { revealDelay } from '../lib/style';
import './Differentials.css';

const pillars: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Especialização',
    text: 'Foco em mecânica de veículos leves flex: conhecimento direcionado ao tipo de veículo que atendemos.',
    icon: Target,
  },
  {
    title: 'Diagnóstico criterioso',
    text: 'Antes de qualquer reparo, buscamos a causa do problema. Menos tentativa e erro, mais precisão.',
    icon: ScanLine,
  },
  {
    title: 'Transparência',
    text: 'Explicamos o diagnóstico e o serviço recomendado com clareza, para que você decida com segurança.',
    icon: Eye,
  },
  {
    title: 'Compromisso com a qualidade',
    text: 'Execução cuidadosa e atenção aos detalhes em cada etapa do serviço.',
    icon: BadgeCheck,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section section--light differentials" aria-labelledby="diff-title">
      <div className="container">
        <header className="differentials__head" data-reveal>
          <p className="eyebrow">Diferenciais</p>
          <h2 id="diff-title" className="h2 differentials__title">
            Confiança construída com <em>conhecimento técnico.</em>
          </h2>
        </header>

        <ol className="differentials__grid">
          {pillars.map(({ title, text, icon: Icon }, i) => (
            <li key={title} className="pillar" data-reveal style={revealDelay(i * 0.08)}>
              <div className="pillar__top">
                <span className="pillar__index">{String(i + 1).padStart(2, '0')}</span>
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" className="pillar__icon" />
              </div>
              <h3 className="pillar__title">{title}</h3>
              <p className="pillar__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
