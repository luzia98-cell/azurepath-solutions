import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Network, Headphones, ShieldCheck, Radio, BrainCircuit,
  CheckCircle2, ArrowRight, Sparkles, Bot, Cloud,
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
  { icon: Cloud, title: "Cloud & Servidores", desc: "Microsoft Azure, servidores físicos e virtuais, backup, recuperação e escalabilidade empresarial." },
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
      {/* HERO — dark navy band like azimuteit.pt */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
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
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-30 blur-3xl" />
            <img
              src={heroImg}
              alt="Soluções em tecnologia, cloud e inteligência artificial"
              width={1920}
              height={1080}
              className="relative rounded-2xl border border-white/10 shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* SERVICES — white background */}
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
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <s.icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI ASSISTANT — soft tinted band */}
      <section className="border-y border-border bg-surface">
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
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">Saber mais <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Porquê Azimute IT</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Porque Escolher-nos</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Combinamos certificações, experiência e tecnologia de ponta para entregar soluções que fazem
              a diferença na sua operação diária.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium text-navy">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — dark navy banner */}
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
