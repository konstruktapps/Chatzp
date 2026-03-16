import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Zap, 
  Users, 
  BarChart3, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Settings,
  LayoutDashboard,
  Clock,
  CalendarClock,
  RefreshCcw,
  Target,
  Plus,
  Minus,
  ClipboardList,
  Star,
  FileBarChart2,
  PackageSearch,
  Search,
  MessagesSquare
} from 'lucide-react'

// Animations
const Logo = ({ size = 40, className = "" }) => (
  <motion.div 
    className={`logo-container ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
  >
    <img 
      src="/logo.png" 
      alt="ChatZP Logo" 
      style={{ 
        width: size, 
        height: size, 
        borderRadius: '8px',
        objectFit: 'contain'
      }} 
    />
    <span style={{ 
      fontWeight: 900, 
      fontSize: size * 0.5, 
      color: '#4b0082',
      letterSpacing: '-0.03em',
      fontFamily: 'Outfit, sans-serif'
    }}>
      ChatZP
    </span>
  </motion.div>
);

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

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-q">
        <h3>{question}</h3>
        <div className="faq-icon">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="faq-a"
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

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <Logo size={40} />
          </a>
          <ul className="nav-links">
            <li><a href="#beneficios">Canais</a></li>
            <li><a href="#automacao">Automação</a></li>
            <li><a href="#crm">CRM</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <motion.a 
            href="https://wa.me/5531987771763"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Agora
          </motion.a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Atendimento Omnichannel <br />
                <span className="gradient-text">para Alta Conversão.</span>
              </h1>
              <p className="hero-subtitle">
                A plataforma ideal para pequenas e grandes empresas. Escale suas vendas centralizando WhatsApp, Instagram e Facebook. Elimine tarefas repetitivas com automação inteligente e organize seus leads no CRM integrado com dezenas de múltiplos atendentes simultâneos.
              </p>
              <div className="hero-actions">
                <motion.a 
                  href="https://wa.me/5531987771763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(75, 0, 130, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Demonstração
                </motion.a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">+10k</span>
                  <span className="stat-label">Usuários Ativos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          >
            <motion.div 
              className="visual-container" 
              animate={floatingAnimation.animate}
              style={{ rotateY: -8, rotateX: 3, perspective: 1200, transformStyle: "preserve-3d" }}
            >
              <motion.img 
                src="/assets/dashboard.png" 
                alt="Plataforma ChatZP Dashboard" 
                className="dashboard-img" 
                whileHover={{ scale: 1.02, rotateZ: -1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="floating-badge badge-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <MessageCircle color="#25D366" fill="#25D366" size={24} />
                <span>WhatsApp Conectado</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Zap color="#FFD700" fill="#FFD700" size={24} />
                <span>Automação Ativa</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Channels Section */}
        <section id="beneficios" className="channels">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Plataforma Omnichannel: Múltiplos Canais Oficiais</h2>
            <p className="section-subtitle">A central definitiva para engajamento de clientes através das principais redes sociais do mundo.</p>
          </motion.div>
          <motion.div 
            className="channels-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <MessageCircle size={40} color="#25D366" />, title: 'WhatsApp', desc: 'Atendimento oficial e seguro via API Cloud ou Web.' },
              { icon: <Instagram size={40} color="#E1306C" />, title: 'Instagram', desc: 'Responda DMs, stories e comentários em tempo real.' },
              { icon: <Facebook size={40} color="#1877F2" />, title: 'Facebook', desc: 'Gerencie o Messenger com a mesma agilidade.' },
              { icon: <Plus size={40} color="#666" />, title: 'E muito mais...', desc: 'Telegram, E-mail e outros canais disponíveis sob consulta.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="channel-card glass-card" 
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="card-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Automation Section */}
        <section id="automacao" className="automation light-bg">
          <div className="container-split">
            <motion.div 
              className="automation-visual"
              initial={{ opacity: 0, x: -50, rotateY: 6, perspective: 1200 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 6, perspective: 1200 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.img 
                src="/assets/flowbuilder.png" 
                alt="ChatZP FlowBuilder" 
                className="flowbuilder-img" 
                whileHover={{ scale: 1.03, rotateZ: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <div className="automation-text">
              <motion.div {...fadeInUp}>
                <span className="badge">FlowBuilder Nativo</span>
                <h2 className="section-title">FlowBuilder: Automação Inteligente <br /><span className="gradient-text">de Atendimento</span></h2>
                <p>Nossa interface visual intuitiva permite desenhar fluxos de trabalho avançados em minutos. Qualifique leads 24/7 sem digitar uma única linha de código.</p>
                <ul className="feature-list">
                  <li><ShieldCheck size={20} color="var(--primary)" /> Arraste e solte blocos logicamente</li>
                  <li><ShieldCheck size={20} color="var(--primary)" /> Condições inteligentes por horário ou palavra-chave</li>
                  <li><ShieldCheck size={20} color="var(--primary)" /> Transbordo humano automático para a equipe certa</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CRM Section */}
        <section id="crm" className="crm">
          <div className="container-split reverse">
             <div className="crm-text">
              <motion.div {...fadeInUp}>
                <span className="badge">CRM Integrado</span>
                <h2 className="section-title">CRM de Vendas Integrado <br /><span className="gradient-text">à sua Comunicação</span></h2>
                <p>Transforme cada conversa em receita. Controle cada oportunidade no funil de vendas, atribua contatos e tenha visibilidade total do desempenho da sua equipe comercial.</p>
                <div className="crm-features">
                  <div className="crm-f-item">
                    <BarChart3 size={32} color="var(--primary)" />
                    <div>
                      <h4>Randomização de Atendentes</h4>
                      <p>Distribua leads de forma justa (Round Robin) e automática.</p>
                    </div>
                  </div>
                  <div className="crm-f-item">
                    <Users size={32} color="var(--primary)" />
                    <div>
                      <h4>Carteira de Clientes</h4>
                      <p>Vincule clientes a atendentes específicos para um serviço personalizado.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="crm-visual"
              initial={{ opacity: 0, scale: 0.8, rotateY: -6, perspective: 1200 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: -6, perspective: 1200 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.img 
                src="/assets/crm.png" 
                alt="ChatZP CRM Pipeline" 
                className="crm-img shadow-lg" 
                whileHover={{ scale: 1.03, rotateZ: -1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section id="como-funciona" className="how-it-works light-bg">
          <motion.div className="section-header" {...fadeInUp}>
            <span className="badge">Onboarding Simplificado</span>
            <h2 className="section-title">Como a ChatZP transforma sua operação</h2>
            <p className="section-subtitle">Implementação rápida e intuitiva. Do zero à primeira automação em minutos.</p>
          </motion.div>
          
          <div className="steps-container">
            {[
              { num: "01", title: "Conecte seus Canais", desc: "Escaneie o QR Code do WhatsApp e integre Facebook e Instagram em poucos cliques." },
              { num: "02", title: "Desenhe o Fluxo", desc: "Use o FlowBuilder visual para criar regras de triagem e chatbots sem precisar programar." },
              { num: "03", title: "Escale suas Vendas", desc: "Sua equipe recebe leads qualificados no CRM integrado, prontos para o fechamento." }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(75, 0, 130, 0.12)" }}
              >
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advanced Features Grid */}
        <section id="recursos" className="features-grid-section">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">O que tem debaixo do capô?</h2>
            <p className="section-subtitle">A infraestrutura robusta que sustenta as operações de vendas mais exigentes.</p>
          </motion.div>

          <div className="adv-features-grid">
            {[
              { icon: <Target size={32} color="var(--primary)" />, title: "Múltiplas Integrações Diretas", desc: "Integração nativa pronta com RD Station, Perfex, CVCRM e IXC." },
              { icon: <Settings size={32} color="var(--primary)" />, title: "Webhooks e n8n", desc: "Faça chamadas diretas para o n8n ou qualquer outro sistema via Webhooks no FlowBuilder." },
              { icon: <CalendarClock size={32} color="var(--primary)" />, title: "Agendamento e Campanhas", desc: "Programe mensagens de aniversário, lembretes de cobrança ou ações de marketing via Tags." },
              { icon: <RefreshCcw size={32} color="var(--primary)" />, title: "Histórico Unificado", desc: "Se o cliente trocar de rede social, o contexto da conversa flui com ele." },
              { icon: <LayoutDashboard size={32} color="var(--primary)" />, title: "Dashboards", desc: "Telas de monitoramento focadas na operação total da sua central." },
              { icon: <ShieldCheck size={32} color="var(--primary)" />, title: "API Oficial & Segurança", desc: "Suporte 100% à API Oficial e COEX para blindar a sua operação de vendas." },
              { icon: <ClipboardList size={32} color="var(--primary)" />, title: "Controle de Tarefas", desc: "Crie e delegue tarefas para sua equipe. Gestão interna com prioridades e vencimento." },
              { icon: <PackageSearch size={32} color="var(--primary)" />, title: "Esteira de Produtos", desc: "Monte seu catálogo de produtos e crie pipelines de vendas com gatilhos automáticos." },
              { icon: <Star size={32} color="var(--primary)" />, title: "Avaliação de Atendimento", desc: "Colete CSAT por atendente ou consolidado da empresa e identifique gargalos de qualidade." },
              { icon: <FileBarChart2 size={32} color="var(--primary)" />, title: "Relatórios por Atendente", desc: "Veja quem mais atende, tempo de resposta e taxa de conversão por colaborador." },
              { icon: <Search size={32} color="var(--primary)" />, title: "Busca Avançada", desc: "Filtre conversas por usuário, conexão, tags, contato, fila, protocolo, data e texto da mensagem." },
              { icon: <MessagesSquare size={32} color="var(--primary)" />, title: "Chat Interno", desc: "Troca de mensagens internas entre membros da equipe sem sair da plataforma." }
            ].map((feat, idx) => (
              <motion.div 
                key={idx}
                className="adv-feat-card glass-card"
                whileHover={{ y: -10, borderColor: "rgba(0, 255, 136, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="adv-feat-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section light-bg">
          <motion.div className="section-header" {...fadeInUp}>
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle">Tire suas dúvidas e veja como a ChatZP se adapta ao seu negócio.</p>
          </motion.div>

          <div className="faq-container">
            {[
              { q: "Tenho muito medo de perder ou ter o meu número de WhatsApp bloqueado. Isso é seguro?", a: "Pode ficar absolutamente tranquilo. Nós temos suporte total à API Oficial do WhatsApp e COEX. Nossa arquitetura é desenhada seguindo as diretrizes oficiais da Meta para proteger o seu número de bloqueios (ban), garantindo que sua operação B2B nunca pare." },
              { q: "Posso integrar com o meu CRM ou automatizador (n8n, Make, Zapier)?", a: "Sim! Além de integrações nativas prontas com sistemas como RD Station, Perfex, CVCRM e IXC, o nosso FlowBuilder possui suporte nativo a Webhooks. Você pode disparar chamadas diretas para o n8n ou receber dados de qualquer API do mundo dentro do seu fluxo de atendimento." },
              { q: "Preciso de conhecimento técnico para usar o FlowBuilder?", a: "Absolutamente não. Nossa ferramenta é 100% visual (Drag & Drop). Você constrói automações apenas arrastando e soltando blocos lógicos, sem precisar de programadores." },
              { q: "Posso ter múltiplos números de WhatsApp conectados?", a: "Sim! A plataforma suporta múltiplas conexões de WhatsApp simultâneas, permitindo que você centralize diferentes filiais ou departamentos da sua empresa no mesmo sistema." },
              { q: "O CRM tem custo adicional?", a: "Não. O módulo de CRM Kanban, gestão de oportunidades e carteira de clientes já é uma parte nativa do núcleo da ChatZP para todos os usuários da plataforma." }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="final-cta">
          <motion.div 
            className="cta-container glass-card"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
          >
            <h2>Escale seu Atendimento e Vendas Hoje Mesmo</h2>
            <p>Seja você uma pequena empresa ou uma grande corporação, o ChatZP entrega eficiência e resultado imediato.</p>
            <motion.a 
              href="https://wa.me/5531987771763"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-large"
              style={{ display: "inline-flex" }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px var(--accent-glow)" }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Minha Demonstração Gratuita <ArrowRight size={24} />
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size={32} className="footer-logo" />
            <p>A melhor solução Omnichannel para o seu negócio.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Produto</h4>
              <ul>
                <li>Benefícios</li>
                <li>Automação</li>
                <li>CRM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ChatZP. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5531987771763"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <div className="whatsapp-float-ring" />
        <MessageCircle size={30} color="white" fill="white" />
        <span className="whatsapp-float-tooltip">Fale Conosco!</span>
      </motion.a>
    </div>
  )
}

export default App
