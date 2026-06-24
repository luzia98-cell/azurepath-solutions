import {
  Network, Headphones, ShieldCheck, Radio, BrainCircuit, Cloud,
  type LucideIcon,
} from "lucide-react";

export type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  hero: string;
  intro: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  process: { title: string; desc: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
  videoUrl?: string; // YouTube embed
};

export const services: ServiceDetail[] = [
  {
    slug: "redes-informaticas",
    icon: Network,
    title: "Redes Informáticas",
    desc: "Projeto, implementação e gestão de infraestruturas de rede seguras, escaláveis e de elevado desempenho.",
    hero: "Infraestruturas de rede empresarial",
    intro:
      "Desenhamos e implementamos redes informáticas robustas, seguras e preparadas para o crescimento da sua empresa. Desde o cabling estruturado até à segmentação avançada com VLANs e firewalls.",
    features: [
      { title: "Cabling estruturado", desc: "Instalação certificada Cat6/Cat6A e fibra ótica, com documentação completa." },
      { title: "Switching e routing", desc: "Equipamentos profissionais Ubiquiti, Cisco e MikroTik configurados à medida." },
      { title: "Wi-Fi empresarial", desc: "Cobertura total com roaming, múltiplas SSIDs e portal cativo." },
      { title: "Segmentação e VLANs", desc: "Separação lógica para voz, dados, IoT e convidados." },
      { title: "Monitorização 24/7", desc: "Alertas proativos, métricas de desempenho e relatórios mensais." },
      { title: "VPN site-to-site", desc: "Ligação segura entre escritórios e equipas remotas." },
    ],
    benefits: [
      "Maior produtividade com rede estável e rápida",
      "Redução de incidentes e tempos de inatividade",
      "Escalabilidade preparada para o futuro",
      "Documentação técnica completa",
    ],
    process: [
      { title: "Auditoria", desc: "Levantamento da infraestrutura atual e necessidades." },
      { title: "Projeto", desc: "Desenho técnico e orçamento detalhado." },
      { title: "Implementação", desc: "Instalação com mínimo impacto na operação." },
      { title: "Gestão contínua", desc: "Monitorização, manutenção e evolução." },
    ],
    technologies: ["Ubiquiti UniFi", "Cisco Meraki", "MikroTik", "Fortinet", "Aruba"],
    faqs: [
      { q: "Quanto tempo demora um projeto de rede?", a: "Depende da dimensão, mas escritórios médios ficam operacionais em 1 a 3 semanas." },
      { q: "Trabalham com instalações já existentes?", a: "Sim. Avaliamos e aproveitamos o que está bem dimensionado, substituindo apenas o necessário." },
    ],
  },
  {
    slug: "apoio-informatico",
    icon: Headphones,
    title: "Apoio Informático",
    desc: "Equipa técnica certificada Microsoft para suporte remoto e presencial, resolução de incidentes e manutenção preventiva.",
    hero: "Suporte técnico empresarial",
    intro:
      "Serviço de helpdesk e apoio técnico para empresas que precisam de respostas rápidas e fiáveis. Atendemos remotamente em minutos e deslocamo-nos quando necessário.",
    features: [
      { title: "Helpdesk remoto", desc: "Atendimento em minutos por telefone, email ou chat." },
      { title: "Intervenção no local", desc: "Técnicos no terreno em toda a zona de Lisboa e Setúbal." },
      { title: "Manutenção preventiva", desc: "Visitas regulares, atualizações e otimização." },
      { title: "Gestão de inventário", desc: "Controlo de equipamentos, licenças e garantias." },
      { title: "Onboarding de colaboradores", desc: "Preparação e configuração de postos novos." },
      { title: "Relatórios mensais", desc: "Métricas de SLA, tickets e tempos de resposta." },
    ],
    benefits: [
      "Tempo de resposta inferior a 2 horas",
      "Equipa certificada Microsoft",
      "Custos previsíveis com plano mensal",
      "Acompanhamento dedicado por gestor de conta",
    ],
    process: [
      { title: "Diagnóstico", desc: "Avaliação dos equipamentos e processos atuais." },
      { title: "Plano à medida", desc: "Definição de SLA e canais de contacto." },
      { title: "Ativação", desc: "Instalação de ferramentas de monitorização." },
      { title: "Suporte contínuo", desc: "Resolução rápida e melhoria contínua." },
    ],
    technologies: ["Microsoft 365", "Windows Server", "TeamViewer", "Intune", "Kaspersky"],
    faqs: [
      { q: "Qual o tempo médio de resposta?", a: "Menos de 2 horas para tickets normais e resposta imediata para incidentes críticos." },
      { q: "Têm contratos avulso?", a: "Sim, mas recomendamos os planos mensais que garantem prioridade e custos previsíveis." },
    ],
  },
  {
    slug: "ciberseguranca",
    icon: ShieldCheck,
    title: "Cibersegurança",
    desc: "Proteção contra ameaças digitais com auditorias, monitorização, políticas de segurança e proteção de dados.",
    hero: "Proteção digital empresarial",
    intro:
      "Implementamos camadas de proteção que mantêm o seu negócio seguro contra ransomware, phishing e fugas de dados. Auditoria, formação e resposta a incidentes incluídas.",
    features: [
      { title: "Auditoria de segurança", desc: "Análise completa de vulnerabilidades e pontos de exposição." },
      { title: "Endpoint protection", desc: "Antivírus de nova geração com EDR em todos os dispositivos." },
      { title: "Firewall e UTM", desc: "Filtragem avançada de tráfego, IDS/IPS e VPN." },
      { title: "Backup e recuperação", desc: "Cópias de segurança imutáveis com plano de recuperação testado." },
      { title: "Formação anti-phishing", desc: "Simulações e formação para colaboradores." },
      { title: "Conformidade RGPD", desc: "Políticas, documentação e processos alinhados." },
    ],
    benefits: [
      "Redução drástica do risco de ransomware",
      "Conformidade com RGPD e normas setoriais",
      "Resposta rápida a incidentes",
      "Colaboradores formados e atentos",
    ],
    process: [
      { title: "Avaliação", desc: "Auditoria técnica e organizacional." },
      { title: "Plano de mitigação", desc: "Roadmap priorizado por risco." },
      { title: "Implementação", desc: "Configuração de ferramentas e políticas." },
      { title: "Monitorização", desc: "SOC com alertas e resposta 24/7." },
    ],
    technologies: ["Microsoft Defender", "Fortinet", "Bitdefender GravityZone", "Veeam", "KnowBe4"],
    faqs: [
      { q: "Garantem 100% de proteção?", a: "Nenhum sistema garante 100%, mas reduzimos drasticamente o risco e preparamos a empresa para responder rapidamente." },
      { q: "Fazem testes de intrusão?", a: "Sim, realizamos pentests internos e externos com relatórios detalhados." },
    ],
  },
  {
    slug: "telecomunicacoes",
    icon: Radio,
    title: "Telecomunicações",
    desc: "Soluções integradas de voz, dados e comunicações unificadas para escritórios e equipas distribuídas.",
    hero: "Comunicações unificadas",
    intro:
      "Centrais telefónicas IP, comunicações unificadas no Microsoft Teams e soluções de mobilidade para que a sua equipa esteja sempre conectada — esteja onde estiver.",
    features: [
      { title: "Centrais VoIP", desc: "PBX em cloud ou no local com tarifários otimizados." },
      { title: "Teams Phone", desc: "Telefonia integrada no Microsoft Teams." },
      { title: "Call center", desc: "Filas, IVR, gravação e relatórios de atendimento." },
      { title: "Mobilidade", desc: "Softphones, apps móveis e desvios inteligentes." },
      { title: "Videoconferência", desc: "Salas equipadas para reuniões híbridas." },
      { title: "Portabilidade", desc: "Manutenção dos números atuais sem interrupção." },
    ],
    benefits: [
      "Redução significativa da fatura mensal",
      "Comunicação unificada em todos os dispositivos",
      "Imagem profissional no atendimento",
      "Escalabilidade imediata",
    ],
    process: [
      { title: "Análise de tráfego", desc: "Estudo das chamadas e necessidades." },
      { title: "Proposta", desc: "Solução técnica e tarifário." },
      { title: "Implementação", desc: "Configuração e portabilidade." },
      { title: "Formação", desc: "Capacitação da equipa." },
    ],
    technologies: ["3CX", "Microsoft Teams Phone", "Yealink", "Cisco", "Grandstream"],
    faqs: [
      { q: "Mantenho o meu número atual?", a: "Sim, fazemos a portabilidade sem qualquer interrupção do serviço." },
      { q: "Funciona em teletrabalho?", a: "Sim, as soluções funcionam em qualquer lugar com internet." },
    ],
  },
  {
    slug: "inteligencia-artificial",
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    desc: "Assistentes virtuais e automação com IA para atendimento 24/7 e otimização de processos.",
    hero: "Soluções de IA para empresas",
    intro:
      "Desenvolvemos assistentes virtuais e automações inteligentes treinadas com o conhecimento da sua empresa. Reduzimos custos operacionais e aumentamos a satisfação dos clientes.",
    features: [
      { title: "Chatbots personalizados", desc: "Assistentes para site, WhatsApp e Messenger." },
      { title: "Automação de processos", desc: "RPA e fluxos com Power Automate e n8n." },
      { title: "Análise de documentos", desc: "Extração de dados de faturas, contratos e formulários." },
      { title: "Atendimento 24/7", desc: "Respostas imediatas e encaminhamento humano quando necessário." },
      { title: "Integração com CRM", desc: "HubSpot, Salesforce, Pipedrive e mais." },
      { title: "Treino contínuo", desc: "Melhoria constante com base nas conversas reais." },
    ],
    benefits: [
      "Redução de até 60% no tempo de resposta",
      "Atendimento sem horários",
      "Equipa humana focada no que importa",
      "Insights sobre o comportamento dos clientes",
    ],
    process: [
      { title: "Descoberta", desc: "Identificação de casos de uso com maior impacto." },
      { title: "Treino", desc: "Recolha de conhecimento e configuração." },
      { title: "Integração", desc: "Implementação nos canais escolhidos." },
      { title: "Otimização", desc: "Análise de métricas e melhoria contínua." },
    ],
    technologies: ["OpenAI GPT", "Anthropic Claude", "Power Automate", "n8n", "LangChain"],
    faqs: [
      { q: "A IA substitui a minha equipa?", a: "Não. Liberta-a das tarefas repetitivas para se focar no que tem maior valor." },
      { q: "Os dados ficam seguros?", a: "Sim. Usamos infraestruturas europeias e contratos de proteção de dados." },
    ],
  },
  {
    slug: "cloud-servidores",
    icon: Cloud,
    title: "Cloud & Servidores",
    desc: "Microsoft Azure, servidores físicos e virtuais, backup, recuperação e escalabilidade empresarial.",
    hero: "Cloud e infraestrutura de servidores",
    intro:
      "Migramos, modernizamos e gerimos a sua infraestrutura de servidores — no local, em cloud ou híbrida. Especialistas Microsoft Azure e Microsoft 365.",
    features: [
      { title: "Migração para Azure", desc: "Avaliação, planeamento e migração sem interrupção." },
      { title: "Microsoft 365", desc: "Licenciamento, configuração e gestão." },
      { title: "Servidores físicos", desc: "Dimensionamento, instalação e manutenção." },
      { title: "Virtualização", desc: "Hyper-V e VMware para consolidar cargas." },
      { title: "Backup imutável", desc: "Veeam com cópias em cloud e no local." },
      { title: "Disaster recovery", desc: "Plano testado para retomar a operação rapidamente." },
    ],
    benefits: [
      "Pagamento por consumo, sem investimento inicial",
      "Alta disponibilidade e redundância",
      "Acesso seguro de qualquer lugar",
      "Backup e recuperação garantidos",
    ],
    process: [
      { title: "Assessment", desc: "Avaliação da infraestrutura e cargas atuais." },
      { title: "Arquitetura", desc: "Desenho da solução ideal." },
      { title: "Migração", desc: "Movimento controlado com janela mínima." },
      { title: "Operação", desc: "Gestão contínua, otimização e suporte." },
    ],
    technologies: ["Microsoft Azure", "Microsoft 365", "Windows Server", "VMware", "Veeam Backup"],
    faqs: [
      { q: "Quanto custa migrar para a cloud?", a: "Depende do volume. Fazemos uma análise gratuita com estimativa mensal de custos Azure." },
      { q: "E se quiser voltar atrás?", a: "Mantemos sempre uma estratégia reversível durante a fase de migração." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
