import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Network, Headphones, ShieldCheck, Radio, BrainCircuit,
  CheckCircle2, ArrowRight, Sparkles, Bot,
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

const services = [
  { icon: Network, title: "Redes Informáticas", desc: "Projeto, implementação e gestão de infraestruturas de rede seguras, escaláveis e de elevado desempenho." },
  { icon: Headphones, title: "Apoio Informático", desc: "Equipa técnica certificada Microsoft para suporte remoto e presencial, resolução de incidentes e manutenção preventiva." },
  { icon: ShieldCheck, title: "Cibersegurança", desc: "Proteção contra ameaças digitais com auditorias, monitorização, políticas de segurança e proteção de dados." },
  { icon: Radio, title: "Telecomunicações", desc: "Soluções integradas de voz, dados e comunicações unificadas para escritórios e equipas distribuídas." },
  { icon: BrainCircuit, title: "Inteligência Artificial", desc: "Assistentes virtuais e automação com IA para atendimento 24/7 e otimização de processos." },
  { icon: Sparkles, title: "Cloud & Servidores", desc: "Microsoft Azure, servidores físicos e virtuais, backup, recuperação e escalabilidade empresarial." },
];

const reasons = [
  "Equipa certificada Microsoft",
  "Experiência em infraestruturas empresariais",
  "Soluções Cloud Azure",
  "Segurança e conformidade",
  "Suporte especializado",
  "Tecnologias de última geração",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              <Sparkles className="h-3 w-3" /> Azimute IT
            </div>
            <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Soluções em <span className="text-gradient">Tecnologia</span> para a sua Empresa
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Especialistas em redes informáticas, apoio informático, cibersegurança, telecomunicações
              e inteligência artificial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
                <Link to="/contactos">Solicitar Orçamento <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand/40 bg-transparent hover:bg-brand/10">
                <Link to="/contactos">Falar com um Especialista</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Soluções em tecnologia, cloud e inteligência artificial"
              width={1920}
              height={1080}
              className="relative rounded-2xl border border-border shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">O que fazemos</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Os Nossos Serviços</h2>
          <p className="mt-4 text-muted-foreground">
            Soluções tecnológicas completas para empresas que querem crescer com segurança e eficiência.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                <s.icon className="h-6 w-6 text-brand-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section className="border-y border-border/40 bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
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
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Automatize o atendimento com <span className="text-gradient">IA personalizada</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Criamos assistentes de atendimento inteligentes para o seu site, capazes de responder 24/7,
              agilizar pedidos e melhorar a experiência dos seus clientes. As nossas soluções usam linguagem
              natural, integram-se com vários canais e automatizam tarefas repetitivas — reduzindo custos
              e aumentando a eficiência.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">Saber mais <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Porquê Azimute IT</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Porque Escolher-nos</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Combinamos certificações, experiência e tecnologia de ponta para entregar soluções que fazem
            a diferença na sua operação diária.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-card-gradient p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="text-sm font-medium">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card-gradient p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto para Modernizar a Sua Infraestrutura?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Fale connosco e descubra como podemos ajudar a sua empresa a crescer através da tecnologia.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">Pedir Proposta <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
