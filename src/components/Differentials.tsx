const pillars = [
  { title: 'Especialização', text: 'Foco em mecânica de veículos leves flex.' },
  { title: 'Diagnóstico criterioso', text: 'Antes de qualquer reparo, buscamos a causa do problema.' },
  { title: 'Transparência', text: 'Explicamos o diagnóstico e o serviço com clareza.' },
  { title: 'Compromisso com a qualidade', text: 'Execução cuidadosa e atenção aos detalhes.' },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="sec lt" data-spy="diferenciais" aria-labelledby="diff-title">
      <div className="wrap">
        <div className="eyebrow rv">
          <i />
          Diferenciais
        </div>
        <h2 id="diff-title" className="h2 rv">
          Confiança construída com <b>conhecimento técnico.</b>
        </h2>

        <ol className="pil">
          {pillars.map((p, i) => (
            <li key={p.title} className="rv">
              <b>{String(i + 1).padStart(2, '0')}</b>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
