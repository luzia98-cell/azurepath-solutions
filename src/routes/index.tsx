import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, Sparkles, Bot,
  Search, Lightbulb, Rocket, LifeBuoy, Quote, Award,
  Building2, Clock, Factory, HeartPulse, GraduationCap,
  ShoppingBag, Scale, Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-tech.jpg";
import aiImg from "@/assets/ai-assistant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azimute IT — Soluções em Tecnologia | Informática e IA" },
      { name: "description", content: "Azimute IT: redes informáticas, apoio informático, cibersegurança, telecomunicações e inteligência artificial para empresas em Portugal." },
      { property: "og:title", content: "Azimute IT — Soluções em Tecnologia" },
      { property: "og:description", content: "Redes, apoio informático, cibersegurança, telecomunicações e IA." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

import { services } from "@/lib/services-data";

const reasons = [
  "Equipa certificada Microsoft",
  "Experiência em infraestruturas empresariais",
  "Soluções Cloud Azure",
  "Segurança e conformidade",
  "Suporte especializado",
  "Tecnologias de última geração",
];

const stats = [
  { icon: Building2, n: "200+", l: "Empresas apoiadas" },
  { icon: Rocket, n: "500+", l: "Projetos entregues" },
  { icon: Clock, n: "<2h", l: "Tempo médio de resposta" },
  { icon: Award, n: "10+", l: "Anos de experiência" },
];

const process = [
  { icon: Search, title: "Análise", desc: "Avaliamos a sua infraestrutura, processos e objetivos para identificar oportunidades reais de melhoria." },
  { icon: Lightbulb, title: "Estratégia", desc: "Desenhamos uma solução à medida do seu negócio, com tecnologias adequadas e roadmap claro." },
  { icon: Rocket, title: "Implementação", desc: "Executamos com rigor técnico, comunicação contínua e o mínimo de impacto na sua operação." },
  { icon: LifeBuoy, title: "Suporte", desc: "Acompanhamos, monitorizamos e melhoramos continuamente para garantir resultados sustentáveis." },
];

const technologies = [
  "Microsoft 365", "Azure", "Windows Server", "Microsoft Defender",
  "Fortinet", "Ubiquiti", "VMware", "Veeam Backup",
  "OpenAI", "Power Automate", "Teams", "SharePoint",
];

const testimonials = [
  {
    quote: "A Azimute IT modernizou a nossa rede e implementou políticas de segurança que nos deram tranquilidade total. Excelente acompanhamento.",
    name: "Ricardo Mendes",
    role: "CEO, Logística PT",
  },
  {
    quote: "Migrámos para a cloud Azure com apoio impecável. Equipa profissional, focada em resultados e sempre disponível.",
    name: "Sofia Carvalho",
    role: "Diretora Financeira, Grupo Marítimo",
  },
  {
    quote: "O assistente de IA que desenvolveram para o nosso site reduziu em 60% o tempo de resposta aos clientes. Recomendamos.",
    name: "João Pereira",
    role: "Fundador, Comércio Digital",
  },
];

const faqs = [
  {
    q: "Trabalham apenas com grandes empresas?",
    a: "Não. Apoiamos desde pequenos escritórios e PME até organizações com dezenas de postos de trabalho, ajustando sempre a solução à dimensão e orçamento de cada cliente.",
  },
  {
    q: "Oferecem contratos de manutenção?",
    a: "Sim. Disponibilizamos planos mensais de manutenção e apoio informático, com tempos de resposta garantidos e monitorização proativa.",
  },
  {
    q: "Conseguem migrar a nossa infraestrutura para a cloud?",
    a: "Sim. Somos especialistas em Microsoft 365 e Azure. Planeamos e executamos a migração com o mínimo de interrupção e formação para a sua equipa.",
  },
  {
    q: "Como funciona o desenvolvimento de soluções com IA?",
    a: "Começamos por mapear o caso de uso, definir objetivos e integrar a IA nos seus canais (site, WhatsApp, email). Entregamos uma solução treinada com o conhecimento da sua empresa.",
  },
];

const industries = [
  { icon: Factory, name: "Indústria" },
  { icon: HeartPulse, name: "Saúde" },
  { icon: GraduationCap, name: "Educação" },
  { icon: ShoppingBag, name: "Retalho" },
  { icon: Scale, name: "Jurídico" },
  { icon: Landmark, name: "Financeiro" },
];


function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        {/* Animated blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.55_0.2_260)]/30 blur-3xl animate-blob-slow" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-glow/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 animate-drift"
              style={{
                left: `${(i * 7.3) % 100}%`,
                bottom: `-${(i * 3) % 40}px`,
                animationDelay: `${(i * 1.3) % 12}s`,
                animationDuration: `${14 + (i % 6)}s`,
              }}
            />
          ))}
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" /> Azimute IT
            </div>
            <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Soluções em{" "}
              <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">
                Tecnologia
              </span>
              <br />
              para a sua Empresa
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Especialistas em redes informáticas, apoio informático, cibersegurança, telecomunicações
              e inteligência artificial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">Solicitar Orçamento <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contactos">Falar com um Especialista</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Certificados Microsoft</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Suporte 7 dias/semana</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Orçamento gratuito</div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-30 blur-3xl animate-pulse-glow" />
            <div className="pointer-events-none absolute -inset-6 rounded-3xl border border-white/10 animate-spin-slow" />
            <img
              src={heroImg}
              alt="Soluções em tecnologia, cloud e inteligência artificial"
              width={1920}
              height={1080}
              className="relative rounded-2xl border border-white/10 shadow-elegant animate-float"
            />
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20 animate-pulse-glow">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SERVICES */}
      <section id="servicos" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">O que fazemos</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Os Nossos Serviços</h2>
            <p className="mt-4 text-muted-foreground">
              Soluções tecnológicas completas para empresas que querem crescer com segurança e eficiência.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-glow animate-fade-up"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <SIcon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Saber mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROCESS / METHODOLOGY */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Como trabalhamos</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Um método simples e eficaz</h2>
            <p className="mt-4 text-muted-foreground">
              Da análise inicial ao suporte contínuo, acompanhamos cada passo com transparência e rigor.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, idx) => (
              <div
                key={p.title}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow animate-fade-up"
              >
                <div className="absolute -top-3 right-4 rounded-full bg-brand-gradient px-3 py-0.5 text-xs font-semibold text-white shadow-glow">
                  0{idx + 1}
                </div>
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-brand/10 transition-transform group-hover:scale-110 group-hover:bg-brand/20">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-15 blur-3xl" />
            <img
              src={aiImg}
              alt="Assistente de IA Azimute"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl border border-border shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              <Bot className="h-3 w-3" /> Azimute IA
            </div>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              Automatize o atendimento com <span className="text-gradient">IA personalizada</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Criamos assistentes de atendimento inteligentes para o seu site, capazes de responder 24/7,
              agilizar pedidos e melhorar a experiência dos seus clientes. As nossas soluções usam linguagem
              natural, integram-se com vários canais e automatizam tarefas repetitivas — reduzindo custos
              e aumentando a eficiência.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Treinado com o conhecimento da sua empresa",
                "Integração com site, WhatsApp e email",
                "Relatórios e métricas de atendimento",
                "Encaminhamento automático para a equipa humana",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">Saber mais <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-brand/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-brand-glow/30 blur-3xl animate-blob-slow" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Setores</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Setores que servimos</h2>
            <p className="mt-4 text-white/70">
              Da indústria à saúde, adaptamos a tecnologia à realidade e regulamentação de cada área.
            </p>
          </div>
          <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((it, i) => (
              <div
                key={it.name}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 animate-fade-up"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20 transition-transform group-hover:scale-110">
                  <it.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white">{it.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-up">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Porquê Azimute IT</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Porque Escolher-nos</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Combinamos certificações, experiência e tecnologia de ponta para entregar soluções que fazem
              a diferença na sua operação diária.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li
                key={r}
                style={{ animationDelay: `${i * 60}ms` }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-glow animate-fade-up"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium text-navy">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNOLOGIES — dark band */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Stack tecnológica</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tecnologias que dominamos</h2>
            <p className="mt-4 text-white/70">
              Trabalhamos com as plataformas líderes do mercado para garantir fiabilidade e desempenho.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((t, i) => (
              <span
                key={t}
                style={{ animationDelay: `${i * 40}ms` }}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 animate-fade-up"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Testemunhos</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">O que dizem os nossos clientes</h2>
            <p className="mt-4 text-muted-foreground">
              A confiança dos nossos clientes é a nossa maior conquista.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                style={{ animationDelay: `${i * 120}ms` }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant animate-fade-up"
              >
                <div className="absolute -top-3 left-6 grid h-10 w-10 place-items-center rounded-full bg-brand-gradient shadow-glow">
                  <Quote className="h-4 w-4 text-white" />
                </div>
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-navy">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Perguntas frequentes</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Dúvidas comuns</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-white shadow-elegant sm:p-16">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Pronto para Modernizar a Sua Infraestrutura?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Fale connosco e descubra como podemos ajudar a sua empresa a crescer através da tecnologia.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">Pedir Proposta <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
