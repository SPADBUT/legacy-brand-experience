# PROJECT CONTEXT — Legacy Brand Experience
> Checkpoint criado em 03/06/2025.
> Use este arquivo para retomar o projeto em uma nova conversa sem perda de contexto.

---

## 1. ESTRUTURA DE PASTAS E ARQUIVOS

```
legacy-brand-experience/
│
├── index.html              ← Página única (SPA por âncoras)
├── styles.css              ← Todo o estilo visual
├── script.js               ← Interatividade (nav, reveal, parallax, intro)
├── robots.txt              ← SEO: permite indexação, aponta sitemap
├── sitemap.xml             ← Sitemap com URL canônica
├── vercel.json             ← Headers de segurança + cache de assets
├── PROJECT_CONTEXT.md      ← Este arquivo
│
└── assets/
    ├── logos/
    │   ├── logo-horizontal.png     ← Logo principal (header, áreas claras)
    │   ├── logo-monogram-gold.png  ← Monograma LL dourado (favicon, detalhes)
    │   └── logo-noir.png           ← Logo para fundos escuros (footer)
    │
    └── imagens/
        ├── hero-unboxing.png       ← Seção Hero (loading eager)
        ├── brand-details.png       ← Seção Manifesto
        ├── corporate-gifting.png   ← Card Corporate Gifting
        ├── signature-experience.png← Card Client Experience
        ├── bespoke-curation.png    ← Card Bespoke Experiences
        ├── image 2 site.png        ← Card Special Moments
        ├── image 6 site.png        ← Galeria editorial
        └── image 8 site.png        ← Galeria editorial (item principal)
```

> **Atenção:** `image 2 site.png`, `image 6 site.png` e `image 8 site.png` têm **espaços** no nome real em disco. No HTML, os caminhos foram escritos como `image-2-site.png` (com hífens). Verificar e renomear os arquivos OU corrigir os caminhos antes do deploy.

---

## 2. STACK UTILIZADA

| Item | Tecnologia |
|---|---|
| Framework | Nenhum — site estático puro |
| HTML | Semântico, acessível, lang="pt-BR" |
| CSS | Vanilla CSS com custom properties |
| JavaScript | Vanilla JS, sem dependências |
| Fontes | Google Fonts CDN (Cormorant Garamond + Jost) |
| Deploy | Vercel (detecção automática de site estático) |
| Build | Nenhum — deploy direto dos arquivos |
| Versionamento | Git (branch: main) |

---

## 3. ARQUIVOS PRINCIPAIS

### index.html
Estrutura de seções (ordem no arquivo):

```
1. <head>          — SEO, Open Graph, Twitter Card, favicon, fonts, preload hero
2. .page-intro     — Animação de entrada com monograma LL
3. .mobile-nav     — Overlay de navegação mobile (id="mobile-nav")
4. .site-header    — Header fixo com logo + nav + CTA WhatsApp + hamburger (id="hamburger")
5. .hero-section   — Hero split: texto esquerda / imagem direita (id="hero")
6. .manifesto-section — Manifesto editorial: imagem esquerda / texto direita (id="manifesto")
7. .services-section  — Grid 2x2 de serviços (id="servicos")
8. .process-section   — 4 passos com linha conectora (id="processo")
9. .gallery-section   — Galeria editorial 3 imagens
10. .cta-section   — CTA final fundo escuro (id="contato")
11. .site-footer   — Footer escuro com logo-noir
```

### styles.css
Organização por seção:

```
:root              — Paleta de cores e variáveis
Reset              — box-sizing, html, body
Typography         — h1-h3, eyebrow, em
Buttons            — btn-primary, btn-text, btn-ghost--light
Page intro         — animação monograma
Scroll reveals     — .reveal, .reveal-img, .reveal-children
Header             — fixo, transparente → opaco no scroll
Hamburger          — 3 linhas → X
Mobile nav         — overlay ivory
Hero               — split grid 44/56
Manifesto          — split grid 52/48
Services           — grid 2x2
Process            — steps com connecting line
Gallery            — grid editorial
CTA final          — fundo soft-noir
Footer             — fundo soft-noir, 3 colunas
Responsive 1024px  — ajustes tablet grande
Responsive 768px   — stacking mobile
Responsive 480px   — mobile pequeno
```

### script.js
Funcionalidades:

```
setVH()            — Fix iOS Safari viewport height
page-intro         — Remove .page-intro após animação (2.1s)
hamburger          — Toggle mobile nav + aria-expanded + body overflow lock
header.scrolled    — Adiciona classe .scrolled após 60px de scroll
revealObserver     — IntersectionObserver: fade-in .reveal, .reveal-img, .reveal-children
staggerObserver    — IntersectionObserver para grids (process-steps, services-grid)
smooth scroll      — Todos os links a[href^="#"]
parallax hero      — translateY sutil no .hero-img (desktop only, passive)
```

---

## 4. ASSETS — CAMINHOS CORRETOS

### Logos

| Arquivo | Caminho | Uso |
|---|---|---|
| Logo horizontal | `assets/logos/logo-horizontal.png` | Header, hero, áreas claras |
| Monograma gold | `assets/logos/logo-monogram-gold.png` | Favicon, loading, detalhes, footer bottom |
| Logo noir | `assets/logos/logo-noir.png` | Footer, áreas escuras |

### Imagens

| Arquivo | Caminho | Seção |
|---|---|---|
| Unboxing | `assets/imagens/hero-unboxing.png` | Hero (eager + fetchpriority=high) |
| Brand details | `assets/imagens/brand-details.png` | Manifesto |
| Corporate gifting | `assets/imagens/corporate-gifting.png` | Card 1 — Corporate Gifting |
| Signature | `assets/imagens/signature-experience.png` | Card 2 — Client Experience |
| Image 2 | `assets/imagens/image 2 site.png` ⚠️ | Card 3 — Special Moments |
| Bespoke | `assets/imagens/bespoke-curation.png` | Card 4 — Bespoke Experiences |
| Image 6 | `assets/imagens/image 6 site.png` ⚠️ | Galeria — item stack superior |
| Image 8 | `assets/imagens/image 8 site.png` ⚠️ | Galeria — item principal (tall) |

> ⚠️ **Pendência crítica:** Os arquivos `image 2 site.png`, `image 6 site.png` e `image 8 site.png` têm espaços no nome. O HTML usa hífens (`image-2-site.png`). Renomear os arquivos no Explorer para usar hífens antes do deploy.

---

## 5. LINKS FUNCIONAIS — NUNCA ALTERAR

```
WhatsApp:   https://wa.me/5511930222212
Instagram:  https://www.instagram.com/legacy.bx?igsh=a3U4MnVyaWtnczlq
LinkedIn:   https://www.linkedin.com/company/legacy-brand-experience/
Email:      contato@legacybx.com.br
Telefone:   +55 11 93022-2212
Site:       https://www.legacybx.com.br
```

**Onde aparecem no HTML:**
- Header CTA button → WhatsApp
- Mobile nav CTA → WhatsApp
- Hero actions → WhatsApp (primário) + Email (secundário)
- CTA section → WhatsApp (primário) + Email (secundário)
- Footer contact → WhatsApp + Email + Instagram + LinkedIn

---

## 6. CONCEITO DE MARCA APROVADO

**Empresa:** Legacy Brand Experience
**Segmento:** Corporate gifting premium, experiências personalizadas, curadoria de presentes
**Público:** Clientes AA, executivos, empresas de médio-grande porte

### Direção aprovada

> **Quiet luxury** — luxo silencioso, sem ostentação.

Palavras-chave da marca:
- Curadoria
- Sofisticação humana
- Cuidado e artesania
- Emoção e memória
- Detalhes sensoriais
- Exclusividade discreta

### Referências visuais aprovadas

| Referência | O que capturar |
|---|---|
| Aman Resorts | Silêncio, espaço, materiais nobres |
| Hermès Maison | Artesania, detalhe, herança |
| Brunello Cucinelli | Humanidade, calor, sofisticação |
| Le Labo | Autenticidade, processo, sensorialidade |
| Jo Malone | Minimalismo editorial, emocional |
| Hotéis boutique europeus | Experiência íntima, personalização |

### O que NÃO fazer

- ❌ Não parecer banco ou wealth management
- ❌ Não parecer fundo de investimento ou family office
- ❌ Não parecer consultoria tradicional
- ❌ Não parecer agência genérica
- ❌ Não usar sombras pesadas ou paleta toda preta
- ❌ Não usar excesso de dourado como decoração
- ❌ Não usar cards genéricos estilo SaaS
- ❌ Não usar linguagem corporativa fria

---

## 7. DECISÕES APROVADAS

### Paleta de cores

```css
--ivory:      #F7F3EA  /* fundo principal — 70% do site */
--champagne:  #E8DDC8  /* seções secundárias (manifesto, etc.) */
--gold:       #C8AA55  /* acento sparingly — efeito hot stamping */
--warm-grey:  #8C8173  /* texto muted, labels, eyebrows */
--soft-noir:  #242421  /* texto escuro, footer, CTA section */
```

Distribuição aprovada: **70% tons claros / 20% neutros / 10% escuro + dourado**

### Tipografia

| Tipo | Fonte | Peso | Uso |
|---|---|---|---|
| Headlines | Cormorant Garamond | 300 / 400 italic | h1, h2, h3, citações |
| Body | Jost | 300 / 400 | texto corrido, labels, botões |

Características: letter-spacing generoso, line-height 1.8, escala grande nos títulos.

### Estrutura de layout aprovada

1. **Hero split** — texto ivory esquerda (44%) / imagem direita (56%)
2. **Manifesto editorial** — imagem esquerda (52%) / texto champagne direita (48%)
3. **Cards de serviços** — grid 2×2 sem sombra, hover com zoom de imagem
4. **Processo** — 4 passos horizontais com linha gold conectora
5. **Galeria** — grid assimétrico com citação no quadrante inferior
6. **CTA final** — fundo soft-noir, CTA WhatsApp centralizado
7. **Footer** — 3 colunas com logo-noir

### Animações aprovadas

- Monograma LL como tela de entrada (2.1s, fade in/out dourado)
- Fade-in suave em scroll (1.1s ease) para todas as seções
- Reveal com scale sutil nas imagens (scale 1.04 → 1)
- Stagger nos grids (delay 0, 0.12, 0.24, 0.36s)
- Parallax muito sutil no hero (translateY 12% do scroll, desktop only)
- Header: transparente → ivory opaco após 60px de scroll

### Navegação aprovada

Desktop: logo + nav (A Legacy, O que criamos, Processo, Contato) + CTA WhatsApp
Mobile: logo + hamburger → overlay ivory com links em Cormorant Garamond grande

---

## 8. PENDÊNCIAS

### Críticas (resolver antes do deploy)

- [ ] **Renomear imagens com espaço** — `image 2 site.png` → `image-2-site.png` (e idem para image 6 e image 8)
- [ ] **Verificar imagens quebradas** — Confirmar que todos os 8 arquivos de imagem carregam corretamente abrindo `index.html` localmente
- [ ] **Testar logo-horizontal.png** — Confirmar que é compatível com fundo claro (deve ter texto escuro)

### Design (próxima sessão)

- [ ] **Ajustar preloader** — Revisar timing e aparência da animação do monograma LL
- [ ] **Header hero** — Verificar legibilidade do logo sobre a área onde hero-image e ivory se encontram
- [ ] **Padronizar CTAs** — Revisar consistência visual de todos os botões
- [ ] **Ajustes finais de direção de arte** — Revisar após ver o site com as imagens reais carregadas
- [ ] **Seção gallery** — Avaliar se o quote "O detalhe certo não é percebido. É sentido." está funcionando visualmente
- [ ] **Mobile hero** — Verificar proporção da imagem hero no mobile (55vw atual)
- [ ] **Footer mobile** — Revisar organização em 1 coluna

### Deploy

- [ ] **Commit e push** — As alterações estão apenas no working directory (não commitadas)
- [ ] **Testar em Vercel preview** — Antes de promover para produção
- [ ] **Verificar OG image** — `hero-unboxing.png` está referenciada como imagem de compartilhamento

---

## 9. COMO RETOMAR EM NOVA CONVERSA

### Contexto para o próximo assistente

```
Projeto: Site estático da Legacy Brand Experience
Local: C:\Users\Paulo\Documents\legacy-brand-experience
Stack: HTML + CSS + JS puros, sem framework
Deploy: Vercel em https://www.legacybx.com.br

Leia PROJECT_CONTEXT.md antes de qualquer alteração.

Estado atual: redesign "quiet luxury" implementado mas NÃO deployado.
Todas as alterações estão no working directory (git status: modified).
Para ver o resultado, abrir index.html diretamente no browser (file://).
Para deployar: git add . && git commit -m "mensagem" && git push
```

### Comando para abrir localmente

Abrir no Windows Explorer e dar duplo clique em `index.html`.
Ou no terminal:
```
cd C:\Users\Paulo\Documents\legacy-brand-experience
npx serve .
```
Acessar em `http://localhost:3000`

---

*Documento gerado em 03/06/2025 — Legacy Brand Experience*
