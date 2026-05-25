# Webhook & Integrações

## Cenário Atual
Como o repositório é exclusivo para a interface da Landing Page de marketing, **não há implementação técnica ativa de Webhooks, payloads ou fluxos de eventos** processados via código no momento.

## Integrações Externas Ativas

### 1. Google Analytics (Tracking Passivo)
- **Implementação:** Inserção estática da tag Global Site Tag (`gtag.js`) com o ID `G-D73W6GB5ZK` diretamente no `<head>` do arquivo `index.html`.
- **Objetivo:** Rastrear o fluxo de visitantes, origens de tráfego e visualizações de página.
- **Sem tratamento de erros customizado:** O script funciona independentemente da lógica do React.

### 2. WhatsApp Deep Links (CTAs Ativos)
- **Implementação:** Componentes âncora padrão (`<a>` e `<motion.a>`) apontando para URLs do WhatsApp Web/Mobile (`https://wa.me/5531987771763`).
- **Comportamento:** O handoff para conversão se dá tirando o usuário da aplicação e transferindo a responsabilidade do início do atendimento para o WhatsApp externo da empresa.

## Notas sobre o Produto Oferecido (Para Arquitetura Futura)
É importante notar que a *copy* da landing page oferece nativamente **integrações Webhook, n8n, RD Station, Perfex e IXC**. 
Isto significa que, sob a perspectiva de arquitetura da **plataforma real de backend** que será comercializada, existe uma infraestrutura massiva de webhooks de entrada e saída. Contudo, esta complexidade não habita o código fonte da presente Landing Page.
