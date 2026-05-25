# Reusable Patterns

Este arquivo detalha as soluções visuais e de comportamento que podem e devem ser extraídas como *boilerplates* ou *templates* para projetos futuros dentro do ecossistema da equipe de desenvolvimento (ConstruktApp e afiliados).

---

# 1. Glassmorphism Card UI

## Objetivo
Criar interfaces de alto impacto visual com um efeito de "vidro" e blur, mantendo o conteúdo interno legível e conferindo uma estética de software "Premium/High-Tech".

## Implementação
Criada via Vanilla CSS na classe `.glass-card`.
```css
.glass-card {
  background: var(--glass); /* rgba(255, 255, 255, 0.75) */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: var(--shadow-premium);
}
```

## Componentes envolvidos
- Arquivo: `src/index.css`
- Divs de interface na renderização do `App.jsx` (Cards de Canais, Features Avançadas).

## Reutilização
- **SaaS:** Painéis de login, modais e tooltips.
- **Dashboard:** Backgrounds para widgets de métricas e painéis de controle, promovendo menos fadiga visual em temas claros.
- **Landing Page:** Destacar planos de precificação (Pricing tables).

## Potencial de Boilerplate
Pode ser convertido diretamente num **Template Tailwind/Variável Interna** no design system próprio de projetos da KonstruktApp.

---

# 2. Framer Motion Scroll Orchestration

## Objetivo
Gerenciar de forma limpa e declarativa como os elementos reagem quando o usuário rola a tela (Reveal Animations) sem necessitar de bibliotecas antigas como *AOS.js*.

## Implementação
Definição de constantes de animação que são repassadas via *spread operator* no JSX.
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
}
```
Uso no JSX: `<motion.div {...fadeInUp}>`

## Componentes envolvidos
- Arquivo: `src/App.jsx`
- Libs: `framer-motion`

## Reutilização
- **SaaS / Landing Page:** Todo tipo de página institucional onde contar história passo-a-passo e prender atenção do visitante é fundamental.

## Potencial de Boilerplate
Excelente para ser encapsulado como um hook interno customizado ou HOC (Higher-Order Component) como um `<ScrollReveal>` wrapper num pacote de componentes corporativo.

---

# 3. Componente Accordion Interativo Dinâmico (FaqItem)

## Objetivo
Resolver a exibição de respostas extensas sem poluir visualmente a página.

## Implementação
Utiliza a combinação do hook `useState` do React e do atributo de animação `height` do Framer Motion.
```javascript
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {/*...titulo e icone...*/}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  )
}
```

## Componentes envolvidos
- Arquivo: `src/App.jsx` (internamente declarado)

## Reutilização
- **CRM:** Expansão de detalhes de "Leads" no Kanban de CRM.
- **Dashboard:** Filtros avançados rebatíveis (collapsible).

## Potencial de Boilerplate
Isolá-ado no boilerplate interno da empresa servirá perfeitamente para qualquer aplicação futura baseada em React (Vite ou Next.js).

---

# 4. Potencial Global do Projeto (SaaS Landing Page Starter)

## Objetivo
Criar páginas de captação super rápidas para MVPs.

## Reutilização
O projeto em sua integridade é um **Boilerplate Estático Implícito** para Landing Pages.

Se a KonstruktApp quiser publicar produtos similares de SaaS, este repositório tem as áreas semânticas (Hero, Automação, Funcionalidades, FAQ) já mapeadas. 
A arquitetura é perfeitamente adequada para agir como a **"Semente" (Template Base)** do front-end comercial de futuros softwares da empresa.
