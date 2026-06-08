# VERSION 1 — APPROVED STRUCTURE
> Legacy Brand Experience
> Data de aprovação: 03/06/2026
> Status: APROVADA — estrutura, identidade visual, imagens, layout, animações

---

## APROVADO NESTA VERSÃO

- Estrutura HTML completa (SPA por âncoras)
- Identidade visual: quiet luxury / maison editorial
- Mapeamento de imagens em todas as seções
- Layout desktop e mobile responsivo
- Sistema de animações scroll-reveal ativo
- Preloader com logo oficial
- Navegação e CTAs padronizados

---

## ARQUIVOS PRINCIPAIS

| Arquivo | Linhas | Função |
|---|---|---|
| `index.html` | ~265 | Estrutura completa da página |
| `styles.css` | ~995 | Todo o estilo visual |
| `script.js` | ~103 | Interatividade e animações |
| `robots.txt` | — | SEO |
| `sitemap.xml` | — | SEO |
| `vercel.json` | — | Headers e cache (deploy) |

---

## ASSETS — ESTADO APROVADO

### assets/logos/

| Arquivo | Uso no site |
|---|---|
| `logo-horizontal.png` | Preloader + Header |
| `logo-monogram-gold.png` | Galeria (caption) + CTA + Footer bottom |
| `logo-noir.png` | Footer |
| `logo-horiz-ivory-1200x400.png` | Disponível — não utilizado ainda |

### assets/imagens/

| Arquivo | Seção | Posição |
|---|---|---|
| `brand-details.png` | Hero | Imagem principal above the fold |
| `image-3-site.png` | Manifesto | Imagem editorial esquerda |
| `corporate-gifting.png` | Serviços — Card 1 | Corporate Gifting |
| `signature-experience.png` | Serviços — Card 2 | Client Experience |
| `hero-unboxing.png` | Serviços — Card 3 | Special Moments |
| `bespoke-curation.png` | Serviços — Card 4 | Bespoke Experiences |
| `image-6-site.png` | Galeria | Item tall (principal) |
| `image-4-site.png` | Galeria | Item stack (superior) |
| `image-2-site.png` | — | Disponível — não utilizado ainda |
| `detalhe-hotstamping.jpg` | — | Disponível — não utilizado ainda |

---

## ESTRUTURA DE SEÇÕES (index.html)

```
1. <head>            SEO, Open Graph, Twitter Card, favicon, fonts, preload
2. .page-intro       Preloader: logo-horizontal.png, animação 3s luxury
3. .mobile-nav       Overlay de navegação mobile (id="mobile-nav")
4. .site-header      Header fixo: logo + nav + CTA + hamburger
5. .hero-section     Hero split 45/55: texto ivory / brand-details.png
6. .manifesto-section Editorial split 52/48: image-3-site.png / texto champagne
7. .services-section  Grid 2×2: 4 cards com imagens reais
8. .process-section   4 passos com linha gold conectora
9. .gallery-section   Grid editorial: image-6-site.png + image-4-site.png + citação
10. .cta-section      CTA final fundo soft-noir
11. .site-footer      3 colunas com logo-noir
```

---

## IDENTIDADE VISUAL APROVADA

### Paleta
```css
--ivory:      #F7F3EA   /* fundo principal 70% */
--champagne:  #E8DDC8   /* seções secundárias */
--gold:       #C8AA55   /* acento sparingly */
--warm-grey:  #8C8173   /* texto muted, labels */
--soft-noir:  #242421   /* footer, CTA, textos escuros */
```

### Tipografia
| Tipo | Fonte | Peso | Uso |
|---|---|---|---|
| Headlines | Cormorant Garamond | 300 / 400 italic | h1, h2, h3, citações |
| Body | Jost | 300 / 400 | Texto corrido, labels, botões |

### Layout hero aprovado
- Grid: `45fr 55fr` (texto / imagem)
- Texto: `position: relative; z-index: 2; background: var(--ivory)` — sem sobreposição possível
- h1 hero: `clamp(2.6rem, 4.6vw, 4.8rem)` — escalonado para caber em 2 linhas

---

## ANIMAÇÕES APROVADAS

| Animação | Classe / Trigger | Comportamento |
|---|---|---|
| Preloader | `.page-intro` → `.intro-done` | Logo 3s luxury, dismiss em 2700ms |
| Fade-in scroll | `.reveal` → `.is-visible` | opacity + translateY, 1.1s ease |
| Reveal imagem | `.reveal-img` → `.is-visible` | opacity + scale 1.04→1, 1.4s ease |
| Stagger grids | `.reveal-children` → `.is-visible` | 4 filhos com delay 0/0.12/0.24/0.36s |
| Header scroll | `.site-header` → `.scrolled` | Ivory opaco após 60px, backdrop-blur |
| Parallax hero | JS scroll listener | translateY 12% sutil, desktop only |
| Mobile nav | `.hamburger` / `.mobile-nav` | Toggle, logo some com `.nav-is-open` |

### Elementos com reveal ativo
- `.manifesto-visual` → `.reveal-img`
- `.manifesto-text` → `.reveal`
- `.services-header` → `.reveal`
- `.services-grid` → `.reveal-children`
- `.process-header` → `.reveal`
- `.process-steps` → `.reveal-children`
- `.gallery-item--tall` → `.reveal-img`
- `.gallery-item` (stack) → `.reveal-img`
- `.gallery-item--caption` → `.reveal`
- `.cta-inner` → `.reveal`

---

## LOGOS — TAMANHOS APROVADOS

| Contexto | Tamanho |
|---|---|
| Header desktop | `max-height: 72px` |
| Header mobile | `max-height: 56px` |
| Footer | `max-height: 60px` |

---

## CTAs APROVADOS

Texto padronizado em todos os pontos:

**"Criar uma experiência"**

Ocorrências:
- Header desktop (`.cta-button`)
- Mobile nav (`.mobile-nav-cta`)
- Hero seção (`.btn-primary`)
- CTA final (`.btn-primary--light`)

Links funcionais aprovados (nunca alterar):
```
WhatsApp:   https://wa.me/5511930222212
Instagram:  https://www.instagram.com/legacy.bx?igsh=a3U4MnVyaWtnczlq
LinkedIn:   https://www.linkedin.com/company/legacy-brand-experience/
Email:      contato@legacybx.com.br
Telefone:   +55 11 93022-2212
Site:       https://www.legacybx.com.br
```

---

## DEPLOY

```
Plataforma:   Vercel
URL:          https://www.legacybx.com.br
Branch:       main
Build:        Nenhum — site estático, deploy direto
```

Estado git: alterações no working directory — **não commitadas**.
Para deployar: `git add . && git commit -m "v1 approved structure" && git push`

---

## DIREÇÃO DE ARTE — O QUE NÃO ALTERAR

- Fontes (Cormorant Garamond + Jost)
- Paleta de cores
- Proporções de grid aprovadas (45/55 hero, 52/48 manifesto, 2×2 serviços)
- Textos principais das seções
- Animações e timings aprovados
- Links e contatos

---

*Checkpoint gerado em 03/06/2026 — Legacy Brand Experience v1*
