import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { gallery } from '../data/gallery';
import './Gallery.css';

/**
 * Galeria editorial de fotos REAIS da oficina.
 * Não é renderizada enquanto `src/data/gallery.ts` estiver vazio.
 */
export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const open = (i: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      document.body.classList.add('is-locked');
    }
    if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, step]);

  if (gallery.length === 0) return null;
  const current = index !== null ? gallery[index] : null;

  return (
    <section id="galeria" className="sec gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="gallery__head" data-reveal>
          <p className="eyebrow">Galeria</p>
          <h2 id="gallery-title" className="h2">
            Por dentro da <em>oficina.</em>
          </h2>
        </div>

        <ul className="gallery__grid">
          {gallery.map((item, i) => (
            <li key={item.src} className={`gallery__item gallery__item--${item.size ?? 'regular'}`} data-reveal>
              <button type="button" className="gallery__button" onClick={(e) => open(i, e.currentTarget)}>
                <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
                <span className="gallery__zoom" aria-hidden="true">
                  <ZoomIn size={20} />
                </span>
                <span className="sr-only">Ampliar imagem: {item.alt}</span>
              </button>
              {item.caption && <p className="gallery__caption">{item.caption}</p>}
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Visualização ampliada"
        onClose={() => {
          document.body.classList.remove('is-locked');
          setIndex(null);
          lastTrigger.current?.focus();
        }}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        {current && (
          <figure className="lightbox__figure">
            <img src={current.src} alt={current.alt} width={current.width} height={current.height} />
            <figcaption>
              {current.caption ?? current.alt}
              <span className="lightbox__count">
                {(index ?? 0) + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Fechar">
          <X size={22} />
        </button>
        {gallery.length > 1 && (
          <>
            <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Imagem anterior">
              <ChevronLeft size={24} />
            </button>
            <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Próxima imagem">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
