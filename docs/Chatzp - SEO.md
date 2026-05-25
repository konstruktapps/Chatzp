# SEO

## Estratégias SEO Implementadas

O projeto atual atua como uma SPA Client-Side Rendering (CSR). As implementações de SEO e performance visíveis na base de código são fundamentais:

### Metadata Básica (`index.html`)
- **`<title>`:** Definido estrategicamente com foco nas palavras-chave principais do negócio: `ChatZP | Plataforma Omnichannel com WhatsApp, CRM e Automação`.
- **`<meta name="description">`:** Otimizado para melhorar o CTR no Google com o pitch comercial focado em aumentar vendas usando Instagram, WhatsApp e Facebook.

### Core Web Vitals e Performance
- **Framework (Vite):** O uso do Vite assegura tempos de build otimizados, Code Splitting automatizado nos bastidores (se configurado com multiplas rotas) e Fast Refresh.
- **Assets Locais:** Ícones processados nativamente pelo `lucide-react` (SVG in-line, impedindo requisições extras) e uso de compressão visual nos arquivos `/public/assets`.

## O que NÃO está configurado (E requer atenção no futuro)
Por ser um site hospedado simples, não detectamos as seguintes implementações:
- **SSR ou Server Components:** O código é estritamente Client-Side. (Otimizações em Next.js com App Router não estão presentes).
- **JSON-LD Schema Markup:** Não há esquemas estruturados para indicar à SERP informações sobre a "Empresa" ou "SoftwareApplication".
- **Sitemap.xml e Robots.txt:** Recomendado a geração destes arquivos na pasta `/public` ao subir o projeto para o domínio de produção.
