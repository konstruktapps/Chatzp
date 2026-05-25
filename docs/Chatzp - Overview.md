# Overview

## Visão Geral do Projeto
O **ChatZP Landing** é uma página estática (Landing Page) desenvolvida para a comercialização e marketing do produto SaaS ChatZP (plataforma Omnichannel, FlowBuilder e CRM). O projeto atua como a vitrine comercial para captação de leads.

## Objetivo do Sistema
Apresentar de forma profissional, atraente e dinâmica os recursos do ChatZP, educar o cliente potencial (FAQ) e direcionar a conversão de vendas diretamente para um canal de WhatsApp através de call-to-actions estrategicamente posicionados.

## Stack Utilizada
- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Animações:** Framer Motion (para interações de UI, entrada de viewport e micro-interações)
- **Ícones:** Lucide React
- **Estilização:** Vanilla CSS (`index.css`) com suporte a variáveis CSS e Glassmorphism.
- **Analytics:** Google Analytics (`gtag.js` incorporado).

## Arquitetura Geral
A arquitetura é de uma **Single Page Application (SPA) Client-Side Rendering (CSR)** pura e minimalista. 
Por ser estritamente uma landing page, não há roteamento complexo. A navegação é baseada em âncoras (`#beneficios`, `#automacao`) dentro de um arquivo centralizado de UI (`App.jsx`).

## Módulos Principais
Neste escopo atual, a divisão lógica dentro do componente principal consiste em:
1. **Hero Section:** Apresentação de impacto com Call-to-Action (CTA).
2. **Channels (Benefícios):** Exibição em grid dos canais suportados.
3. **Automação (FlowBuilder):** Exposição visual com imagens e recursos do criador de fluxos.
4. **CRM:** Explicação do pipeline e gestão de oportunidades.
5. **How It Works:** Onboarding passo a passo.
6. **Advanced Features:** Grid massivo com diferenciais técnicos da plataforma comercializada.
7. **FAQ:** Acordeão interativo para remoção de objeções.

## Diferenciais Técnicos
- **Performance de Build:** Utilização do Vite garante tempo de build extremamente rápido e leveza no bundle.
- **Motion Design Avançado:** O uso profundo do Framer Motion (`staggerChildren`, `viewport={ once: true }`, keyframes para flutuação de badges) traz uma sensação de produto "Premium/High-Tech" requisitada pela KonstruktApp.
- **CSS Nativo Escalável:** Utilização de variáveis CSS globais para paleta de cores e sombras reutilizáveis.
