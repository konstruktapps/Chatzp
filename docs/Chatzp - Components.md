# Components

## Visão Geral
O projeto atual adota uma estrutura monolítica onde a maioria do código encontra-se aglomerada no arquivo `src/App.jsx`. No entanto, foram identificados componentes internos declarados no mesmo arquivo que possuem grande potencial de extração e reutilização.

## Componentes Internos Reutilizáveis (Declarados no App.jsx)

### 1. `Logo`
- **Responsabilidade:** Renderizar a logomarca da aplicação utilizando um wrapper de entrada animada (via Framer Motion).
- **Onde pode ser reutilizado:** Headers, footers e telas de loading. Pode ser extraído para `src/components/Logo.jsx`.
- **Props:** Aceita `size` e `className` para facilidade de ajuste responsivo.

### 2. `FaqItem`
- **Responsabilidade:** Criar uma estrutura de "Accordion" (sanfona) para perguntas e respostas.
- **Onde pode ser reutilizado:** Telas de suporte, centrais de ajuda, documentação técnica.
- **Engenharia:** Utiliza o hook local `useState` para controlar o estado expandido/contraído de forma isolada, renderizando animadamente o conteúdo (`motion.div` controlando a altura de `0` a `auto`).

## Design System e Elementos Visuais (`index.css`)
O design baseia-se num CSS tradicional, mas extremamente bem arquitetado com variáveis de design tokens na `:root`:

- **Tipografia:** `Outfit`, trazendo a nuance moderna e tecnológica demandada pela KonstruktApp.
- **Cores base:** Uso de Violeta/Índigo escuro (`--primary: #4b0082`) acompanhado de Verde vibrante (`--accent: #00ff88`) para causar impacto de conversão.
- **Glassmorphism (`.glass-card`):** A classe implementa fundos translúcidos (`backdrop-filter: blur(10px)`) simulando vidro, altamente reaproveitável para dashboards e modais de alto nível visual.
- **Grids e Layouts:** O uso de `.container-split`, `.channels-grid` com CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) define um comportamento intrinsecamente responsivo e adaptável.

## Estrutura de Pastas Atual
Atualmente as pastas são enxutas:
- `/public`: Assets estáticos (`logo.png`, `/assets/`).
- `/src`: Contém a base (sem subpastas de componentes ainda).

## Sugestão de Refatoração Arquitetural
Para viabilizar a escalabilidade, sugere-se quebrar o `App.jsx` na seguinte estrutura:
```
/src
  /components
    /ui          (Logo, FaqItem, Button)
    /sections    (Hero, Benefits, Automation, CRM, CTA, FAQ, Footer)
    /layout      (Navbar)
```
