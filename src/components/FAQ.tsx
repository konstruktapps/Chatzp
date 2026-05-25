import { useState } from 'preact/hooks';

const faqs = [
  {
    q: "Tenho muito medo de perder ou ter o meu número de WhatsApp bloqueado. Isso é seguro?",
    a: "Pode ficar absolutamente tranquilo. Nós temos suporte total à API Oficial do WhatsApp e COEX. Nossa arquitetura é desenhada seguindo as diretrizes oficiais da Meta para proteger o seu número de bloqueios (ban), garantindo que sua operação B2B nunca pare."
  },
  {
    q: "Posso integrar com o meu CRM ou automatizador (n8n, Make, Zapier)?",
    a: "Sim! Além de integrações nativas prontas com sistemas como RD Station, Perfex, CVCRM e IXC, o nosso FlowBuilder possui suporte nativo a Webhooks. Você pode disparar chamadas diretas para o n8n ou receber dados de qualquer API do mundo dentro do seu fluxo de atendimento."
  },
  {
    q: "Preciso de conhecimento técnico para usar o FlowBuilder?",
    a: "Absolutamente não. Nossa ferramenta é 100% visual (Drag & Drop). Você constrói automações apenas arrastando e soltando blocos lógicos, sem precisar de programadores."
  },
  {
    q: "Posso ter múltiplos números de WhatsApp conectados?",
    a: "Sim! A plataforma suporta múltiplas conexões de WhatsApp simultâneas, permitindo que você centralize diferentes filiais ou departamentos da sua empresa no mesmo sistema."
  },
  {
    q: "O CRM tem custo adicional?",
    a: "Não. O módulo de CRM Kanban, gestão de oportunidades e carteira de clientes já é uma parte nativa do núcleo da ChatZP para todos os usuários da plataforma."
  },
];

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div class={`faq-item${open ? ' open' : ''}`}>
      <button
        class="faq-btn"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <h3>{q}</h3>
        <span class="faq-icon">{open ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
      {open && <div class="faq-a"><p>{a}</p></div>}
    </div>
  );
};

export default function FAQ() {
  return (
    <div class="faq-container">
      {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
    </div>
  );
}
