import type { CSSProperties } from 'react';

/** Atraso de animação para elementos com `data-reveal`. */
export const revealDelay = (seconds: number): CSSProperties => ({ '--reveal-delay': `${seconds}s` }) as CSSProperties;

/** Define uma custom property CSS arbitrária. */
export const cssVar = (name: `--${string}`, value: string | number): CSSProperties =>
  ({ [name]: value }) as CSSProperties;
