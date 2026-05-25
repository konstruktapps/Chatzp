# Supabase

## Relacionamento com Backend e Banco de Dados
Este repositório **não utiliza o Supabase** nem possui qualquer integração com bancos de dados, APIs de backend ou ORMs.

O projeto foi construído para atuar estritamente como a **Landing Page (Frontend Estático)** do produto ChatZP. Toda a lógica de negócios pesada, banco de dados, RLS e edge functions citadas na oferta do produto (CRM Kanban, fluxo de mensagens, métricas) fazem parte do backend da plataforma principal, e não deste repositório comercial.

## O Que Encontramos Aqui
- Nenhuma dependência do `@supabase/supabase-js`.
- Sem tabelas, triggers, policies (RLS), ou RPCs.
- Não existem padrões de acesso a dados além do conteúdo "hardcoded" nos arrays declarados no arquivo `App.jsx` (ex: lista de FAQs, lista de Features).

> **Atenção para Engenharia Reversa:** O texto promocional do site menciona "Integrações", "CRM" e "Automação", mas estes representam as capacidades do *software que está sendo vendido*, e não as funcionalidades ativas do código fonte desta landing page.
