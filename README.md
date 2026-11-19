# GARAGE — Mecânica Automotiva · Site institucional

Site One Page da **GARAGE**, oficina especializada em mecânica de veículos leves flex em Maceió – AL.
Feito com **React + Vite + TypeScript**, CSS puro e **Lucide React**. É 100% estático e está pronto para o **GitHub Pages**.

---

## Rodar localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # build de produção em ./dist
npm run preview    # serve o build de produção em http://localhost:4173
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Nome, telefone, WhatsApp, endereço, horários, e-mail, Instagram, link de avaliações | `src/data/company.ts` |
| Mensagens pré-definidas do WhatsApp | `src/data/company.ts` (`whatsappMessages`) |
| Serviços / especialidades | `src/data/services.ts` |
| Itens do menu | `src/data/navigation.ts` |
| Galeria de fotos reais | `src/data/gallery.ts` |
| Depoimentos reais | `src/data/testimonials.ts` |
| Cores, fontes e espaçamentos | `src/styles/variables.css` |

Os dados comerciais ficam **apenas** em `company.ts`. Header, rodapé, contato, links do WhatsApp e dados estruturados (Schema.org) leem todos desse arquivo.

- **WhatsApp:** número em formato internacional, só dígitos (`5582982008200`). Se o campo ficar vazio, os botões de WhatsApp deixam de aparecer, em vez de apontarem para um link inválido.
- **Novo serviço:** adicione um objeto em `services.ts` com `enabled: true`. Ele aparece automaticamente na seção, no Hero, no rodapé e no Schema.org.
- **Galeria:** a seção fica oculta enquanto `gallery.ts` estiver vazio. Para ativar, salve fotos **reais** da oficina em WebP dentro de `src/assets/images/galeria/` e adicione os itens (há um exemplo no próprio arquivo).
- **Depoimentos:** ficam ocultos enquanto `testimonials.ts` estiver vazio. Use apenas avaliações reais.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o projeto para a branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Site GARAGE"
   git branch -M main
   git remote add origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
2. No GitHub, abra **Settings → Pages → Build and deployment → Source** e escolha **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` roda a cada push na `main` (ou manualmente, em *Actions → Deploy no GitHub Pages → Run workflow*). Ele instala as dependências, gera o build e publica.

O site funciona sem nenhuma configuração extra tanto em `https://USUARIO.github.io/` (repositório `USUARIO.github.io`) quanto em `https://USUARIO.github.io/NOME-DO-REPOSITORIO/`. O Vite usa `base: './'`, ou seja, todos os caminhos de assets são relativos.

### URL pública (canonical, Open Graph, sitemap)

O workflow descobre a URL do Pages sozinho e a passa para o build como `SITE_URL`. Com ela são gerados `<link rel="canonical">`, `og:url`, `og:image`, `sitemap.xml` e a linha `Sitemap:` do `robots.txt`.

Para usar um **domínio próprio**, crie em *Settings → Secrets and variables → Actions → Variables* a variável `SITE_URL` (ex.: `https://www.garagemaceio.com.br/`) e configure o domínio em *Settings → Pages*.

Num build local sem `SITE_URL`, o site funciona normalmente; ficam de fora só as tags que exigem URL absoluta e o `sitemap.xml`.

## Estrutura

```
public/                 favicon, ícones, imagem Open Graph, .nojekyll
src/
  assets/logo/          logo oficial (original + versões transparentes otimizadas)
  assets/images/        fotos em AVIF/WebP
  components/           uma seção por componente (+ CSS próprio)
  data/                 company.ts, services.ts, navigation.ts, gallery.ts, testimonials.ts
  lib/                  whatsapp.ts (links wa.me), style.ts
  styles/               variables.css (paleta e tipografia), global.css
vite.config.ts          base relativa + plugin de SEO (JSON-LD, canonical, sitemap, robots)
.github/workflows/      deploy automático no GitHub Pages
```

## Logo

O arquivo original está em `src/assets/logo/garage-logo-original.jpg`. As versões usadas no site (PNG/WebP com fundo transparente, favicon, ícones e imagem Open Graph) passaram só por tratamento técnico: recorte da engrenagem, remoção do fundo preto externo e redimensionamento. Desenho, cores e proporções não foram alterados. O recorte também tirou uma pequena marca "✦" que havia no canto do arquivo, fora da logo.

Se existir uma versão vetorial (SVG/PDF) ou um PNG transparente em alta resolução, vale substituir os arquivos de `src/assets/logo/`.

## Imagens

As fotos atuais são **imagens ilustrativas do Unsplash** (licença livre) e trazem a legenda "Imagem ilustrativa". **Não são fotos da oficina.** Assim que houver fotos reais, troque os arquivos `hero-*`, `about-*`, `tools-*`, `business-*` e `cta-*` em `src/assets/images/` (mantendo os nomes, ou atualizando os imports) e remova as legendas e o crédito no rodapé.

Para converter uma foto (ImageMagick):

```bash
magick foto.jpg -resize 1920x -quality 72 hero-1920.webp
magick foto.jpg -resize 1920x -quality 55 hero-1920.avif
```

## Pendências do conteúdo

- [ ] Fotos reais da oficina (fachada, estrutura, equipamentos, equipe, serviços) → substituir as ilustrativas e ativar a Galeria.
- [ ] Depoimentos reais (ex.: avaliações do Google, com autorização) → ativar a seção Depoimentos.
- [ ] Logo em vetor ou PNG de alta resolução (opcional).
- [ ] Confirmar se a página de avaliações (`g.co/kgs/ca4WtFF`) e o pino do mapa apontam para o local certo.

## Qualidade

- HTML semântico, um único `h1`, link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded`, Esc e foco preso.
- `prefers-reduced-motion` desativa as animações.
- Imagens em AVIF/WebP com `srcset`, `width`/`height` e `loading="lazy"` (exceto o Hero). Fontes self-hosted (Sora e Inter variáveis).
- Schema.org `AutoRepair` com endereço, telefone, horários, serviços e Instagram, sem avaliações inventadas.
