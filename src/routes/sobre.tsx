import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target, Eye, Heart, Award, Users, Rocket,
  ShieldCheck, Cloud, BrainCircuit, Network,
  CheckCircle2, ArrowRight, Building2, Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Azimute IT | Parceiro Tecnológico Empresarial" },
      { name: "description", content: "Conheça a Azimute IT: parceira tecnológica especializada em infraestruturas, cloud, IA, automação e cibersegurança." },
      { property: "og:title", content: "Quem Somos — Azimute IT" },
      { property: "og:description", content: "Parceira tecnológica especializada em cloud, IA, automação e cibersegurança." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2014", title: "Fundação", desc: "Nasce a Azimute IT com foco em apoio informático e redes para PME portuguesas." },
  { year: "2017", title: "Expansão Cloud", desc: "Tornamo-nos parceiros Microsoft e iniciamos projetos de migração para Azure e Microsoft 365." },
  { year: "2020", title: "Cibersegurança", desc: "Reforçamos a equipa com especialistas em cibersegurança e conformidade RGPD." },
  { year: "2023", title: "Inteligência Artificial", desc: "Lançamos a área de IA e automação com assistentes virtuais e Power Automate." },
  { year: "Hoje", title: "200+ clientes", desc: "Servimos centenas de empresas em Portugal com uma abordagem próxima e consultiva." },
];

const expertise = [
  { icon: Network, t: "Infraestrutura & Redes", d: "Projeto e manutenção de redes corporativas, Wi-Fi empresarial e segurança perimetral." },
  { icon: Cloud, t: "Cloud Azure & M365", d: "Migrações, governance, identidade e gestão de licenciamento Microsoft." },
  { icon: ShieldCheck, t: "Cibersegurança", d: "Auditorias, EDR, backup, planos de contingência e formação em segurança." },
  { icon: BrainCircuit, t: "IA & Automação", d: "Chatbots, Copilot, Power Automate e integração de modelos de linguagem." },
];

const values = [
  "Compromisso com o cliente em primeiro lugar",
  "Transparência total em prazos e custos",
  "Excelência técnica e formação contínua",
  "Segurança e conformidade em tudo o que entregamos",
  "Proximidade e relações de longo prazo",
  "Inovação prática, com impacto real",
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Quem Somos</div>
          <h1 className="mt-3 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            O Seu <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">Parceiro Tecnológico</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Somos uma empresa especializada em infraestruturas tecnológicas, cloud computing, inteligência artificial,
            automação e cibersegurança, ajudando organizações a transformar a sua operação digital.
          </p>
        </div>
      </section>

      {/* Quem somos + Pilares */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">A nossa história</div>
              <h2 className="mt-3 text-3xl font-bold text-navy">Tecnologia ao serviço do seu negócio</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  A Azimute IT nasceu para simplificar a tecnologia nas empresas. Combinamos experiência técnica,
                  certificações Microsoft e uma abordagem consultiva para entregar soluções fiáveis, seguras e escaláveis.
                </p>
                <p>
                  Trabalhamos lado a lado com os nossos clientes para compreender os seus desafios e desenhar arquiteturas
                  modernas em cloud, redes corporativas, segurança e inteligência artificial.
                </p>
                <p>
                  Acreditamos que a transformação digital deve ser pragmática: tecnologias certas, no momento certo,
                  com o suporte certo. É por isso que cada projeto começa por ouvir antes de propor.
                </p>
              </div>
              <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
                <Link to="/contactos">Falar connosco <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Target, t: "Missão", d: "Capacitar empresas com tecnologia confiável e inovadora." },
                { icon: Eye, t: "Visão", d: "Ser referência em transformação digital empresarial em Portugal." },
                { icon: Heart, t: "Valores", d: "Compromisso, segurança, excelência e proximidade." },
                { icon: Rocket, t: "Abordagem", d: "Consultiva, prática e orientada a resultados." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                    <b.icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                  <h3 className="font-semibold text-navy">{b.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de especialização */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Especialização</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Áreas de Atuação</h2>
            <p className="mt-4 text-muted-foreground">
              Quatro pilares que sustentam tudo o que entregamos aos nossos clientes.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <e.icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="font-semibold text-navy">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / percurso */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Percurso</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">A nossa evolução</h2>
            <p className="mt-4 text-muted-foreground">
              Mais de uma década a acompanhar a transformação digital em Portugal.
            </p>
          </div>
          <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-glow">
                  •
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">{m.year}</div>
                  <h3 className="mt-1 text-lg font-semibold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Os nossos valores</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Princípios que nos guiam</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Mais do que uma empresa de tecnologia, somos um parceiro de confiança. Estes são os princípios que
              orientam todas as nossas decisões.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <Handshake className="h-6 w-6 text-brand" />
              <span className="text-sm font-medium text-navy">Relações de longo prazo. Resultados duradouros.</span>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-1">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium text-navy">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Award, n: "10+", l: "Anos de experiência" },
            { icon: Users, n: "200+", l: "Clientes empresariais" },
            { icon: Rocket, n: "500+", l: "Projetos entregues" },
            { icon: Building2, n: "15+", l: "Setores de atividade" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-3 text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-white shadow-elegant sm:p-16">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Vamos construir o futuro tecnológico da sua empresa</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Conte com uma equipa próxima, certificada e focada em resultados.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">Contacte-nos <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
