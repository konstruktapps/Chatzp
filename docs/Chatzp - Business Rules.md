# Business Rules

*Nota: Em um projeto de Landing Page, as regras de negócio traduzem-se majoritariamente nas estratégias de conversão e comportamento dos elementos focados na jornada do usuário.*

## Regras Específicas do Negócio (Marketing e Conversão)

1. **Objetivo Único de Conversão (CTA):** 
   - A conversão é puramente baseada em captação manual via WhatsApp. 
   - Todos os botões principais de ação (`Começar Agora`, `Solicitar Demonstração`) apontam fixamente para o número de WhatsApp Comercial (`https://wa.me/5531987771763`).

2. **Gatilhos Visuais e Estruturais:**
   - A página segue uma hierarquia de venda clássica de SaaS: 
     1. Promessa forte (Hero).
     2. Múltiplos canais (Benefícios).
     3. Como o tempo é salvo (Automação).
     4. Controle de lucros (CRM).
     5. Especificações técnicas avançadas.
     6. Remoção de objeções e bloqueios da Meta (FAQ).
     7. Chamada à Ação definitiva (CTA Footer).

## Regras Técnicas (UI e Comportamentos Internos)

1. **Expansão de Perguntas Frequentes (FAQ):**
   - **Regra:** O `FaqItem` gerencia seu próprio estado local.
   - **Comportamento:** A expansão de um item não afeta os outros. Isso significa que é possível abrir múltiplas perguntas simultaneamente, algo comum em Landing Pages informativas.

2. **Trigger das Animações (Viewport Tracking):**
   - **Regra:** As animações com framer-motion (`whileInView`) são desenhadas para ocorrerem com a regra `{ once: true, margin: "-100px" }`.
   - **Comportamento:** Os elementos apenas disparam a animação "fade in" na primeira vez em que entram na tela, ignorando animações reversas se o usuário der scroll up. Isso garante menor processamento e evita distração de navegação.

3. **Restrições de Formulários:**
   - O projeto não coleta nenhum dado (nome, email) de forma ativa no frontend (ex: sem tags de `form`, requisições `POST`). Toda a inteligência de qualificação dos leads repousa sob a responsabilidade do fluxo do bot configurado no número de destino do WhatsApp.
