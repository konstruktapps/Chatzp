# Auth

## Sistema de Autenticação
No momento, **nenhum sistema de autenticação está implementado neste repositório**. 
O código atual consiste unicamente em uma Landing Page estática para fins de marketing e conversão, desenvolvida em React.

## Gerenciamento de Sessão, Middleware e Permissões
- Não aplicável. 
- O acesso é 100% público, projetado para recepção de tráfego de topo de funil (Ads, SEO, etc).

## RBAC e Proteção de Rotas
- Não existem roles de usuários, fluxo de login/logout, tokens ou proteção de rotas, visto que o repositório atua como um cartão de visitas digital para a aplicação SaaS real (a qual possuiria sua própria infraestrutura).

## Integrações Auth
O único elo externo relacionado à identificação de usuários restringe-se ao **Google Analytics** (`gtag.js`) via cookie de tracking estático inserido no `index.html`.

> **Nota para Reutilização Futura:** Caso esta Landing Page precise ser integrada a um portal de clientes ou área de login no futuro, será necessário instalar bibliotecas de roteamento (como `react-router-dom`), middlewares de autenticação e clientes de backend (ex: Supabase Auth ou Firebase).
