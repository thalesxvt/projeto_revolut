# Documentação do Projeto Revolut

## Visão Geral
Este projeto é uma landing page inspirada no site da Revolut, implementada com HTML, CSS e JavaScript. O foco é em design moderno, responsividade e animações interativas.

## Equipe
- **Thales**: Product Owner (PO)
- **Omar**: Scrum Master (SM)
- **Felipe**: Desenvolvedor (DEV)
- **Caio**: Desenvolvedor (DEV)

## Resumo do Código

### HTML (index.html)
- **Estrutura principal**: Navbar fixa com mega menus dinâmicos (Personal, Business, Kids & Teens, Company) que expandem no hover. Menu mobile em overlay com accordion.
- **Seções principais**: 
  - Hero com animação de morphing (imagem grande que encolhe em card no scroll).
  - Social proof (selos e estatísticas).
  - Showcase de cartões (físicos/virtuais com toggle).
  - AIR (assistente IA).
  - Savings (poupança com AER, backgrounds alternáveis).
  - Security (vídeo de escudo).
  - Stocks (ações com vídeo).
  - CTA para download.
  - Planos (grid responsivo).
  - Footer extenso com links organizados.
- **Elementos interativos**: Videos autoplay, imagens de fundo, botões de toggle para slides.

### CSS (style.css)
- **Variáveis**: Cores (branco, preto, cinzas), transições suaves (0.3s).
- **Animação inicial**: Morphing da seção hero - imagem de fundo (mulher no céu) encolhe para um card central no scroll, com transição cubic-bezier para suavidade. Texto "Banking & Beyond" some, revelando conteúdo de salário.
- **Responsividade**: Media queries para mobile (<992px) - navbar vira overlay fullscreen, menus viram accordion, layouts ajustam para telas menores.
- **Design**: Fundo branco, botões em pílula (pill), glassmorphism (blur no navbar), z-index para camadas (hero acima de salary), animações fadeIn, hover effects suaves.

### JavaScript (script.js)
- **Navbar**: Scroll listener para adicionar/remover classes (scrolled, nav-hidden), hover para expandir mega menus.
- **Animação morphing**: Listener de scroll para transformar #morph-bg em card pequeno quando scrollY > 80px, apenas em desktop (>821px).
- **Mobile**: Toggle para overlay menu, accordion headers.
- **Slides**: Auto-play (8s) para cartões (physical/virtual) e savings (3 backgrounds), com botões manuais para switch.
- **Interações**: Eventos de mouse/click, media queries para responsividade.

## Partes Principais
- **Animação inicial**: Morphing hero - imagem gigante encolhe em card no scroll, revelando conteúdo abaixo.
- **Responsividade**: Menu mobile overlay, accordion, layouts flex/grid adaptáveis.
- **Design**: Moderno, minimalista, com videos, imagens, transições suaves, foco em UX (hover, auto-play, glassmorphism).</content>
<parameter name="filePath">/home/flokuz/Documentos/teste/projeto_revolut/README.md