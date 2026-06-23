import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Artigos — Azimute IT | Tecnologia, IA e Cibersegurança" },
      { name: "description", content: "Artigos sobre informática, cibersegurança, inteligência artificial e transformação digital pela Azimute IT." },
      { property: "og:title", content: "Artigos — Azimute IT" },
      { property: "og:description", content: "Conteúdos sobre tecnologia, IA e cibersegurança." },
      { property: "og:url", content: "/artigos" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
  component: ArtigosPage,
});

const categories = ["Todos", "Cibersegurança", "Cloud", "Inteligência Artificial", "Formação", "Transformação Digital"];

const featured = {
  title: "Inteligência Artificial nas PME: por onde começar em 2026",
  excerpt:
    "A IA deixou de ser exclusiva de grandes empresas. Neste guia explicamos como pequenas e médias empresas portuguesas podem adotar IA de forma pragmática, com casos de uso reais, custos e roadmap.",
  tag: "Inteligência Artificial",
  date: "20 Jun 2026",
  read: "8 min",
};

const articles = [
  {
    title: "Aulas Particulares de Informática",
    excerpt: "Muitos clientes preferem não aproveitar os benefícios da tecnologia por falta de conhecimento. Disponibilizamos formadores com experiência para todas as idades.",
    tag: "Formação",
    date: "12 Jun 2026",
    read: "4 min",
  },
  {
    title: "O que é Segurança da Informação?",
    excerpt: "A segurança da informação envolve um conjunto de medidas para garantir a confidencialidade, integridade e disponibilidade da informação de uma organização.",
    tag: "Cibersegurança",
    date: "05 Jun 2026",
    read: "6 min",
  },
  {
    title: "A tecnologia não é só uma aliada — é essencial",
    excerpt: "Desde os anos 1980, a importância da tecnologia no crescimento das organizações é destaque em todas as áreas de negócio. A automação dos processos é hoje obrigatória.",
    tag: "Transformação Digital",
    date: "28 Mai 2026",
    read: "5 min",
  },
  {
    title: "Migrar para Microsoft 365: 7 passos essenciais",
    excerpt: "Planeamento, migração de email, identidades, MFA e formação. Um checklist completo para garantir uma transição sem surpresas.",
    tag: "Cloud",
    date: "18 Mai 2026",
    read: "7 min",
  },
  {
    title: "Phishing: como proteger a sua equipa",
    excerpt: "O phishing continua a ser o vetor de ataque número 1. Explicamos as melhores práticas técnicas e de formação para reduzir o risco.",
    tag: "Cibersegurança",
    date: "10 Mai 2026",
    read: "6 min",
  },
  {
    title: "Backup 3-2-1: o seguro de vida dos seus dados",
    excerpt: "Três cópias, dois suportes diferentes, uma cópia offsite. A regra simples que pode salvar a sua empresa de um ataque ransomware.",
    tag: "Cibersegurança",
    date: "02 Mai 2026",
    read: "5 min",
  },
  {
    title: "Power Automate para PME: automatize sem código",
    excerpt: "Como reduzir tarefas repetitivas e libertar tempo da sua equipa com fluxos de automação simples no Microsoft 365.",
    tag: "Inteligência Artificial",
    date: "22 Abr 2026",
    read: "6 min",
  },
  {
    title: "Wi-Fi empresarial: o que ninguém lhe disse",
    excerpt: "Cobertura, VLANs, autenticação e segregação de convidados. O que distingue uma rede doméstica de uma rede verdadeiramente corporativa.",
    tag: "Cloud",
    date: "14 Abr 2026",
    read: "5 min",
  },
];

function ArtigosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Blog</div>
          <h1 className="mt-3 text-4xl font-bold uppercase sm:text-5xl">
            Últimas <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">Notícias</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Artigos, dicas e novidades sobre tecnologia, cibersegurança e inteligência artificial.
          </p>
        </div>
      </section>

      {/* Categorias */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className={
                  i === 0
                    ? "rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white shadow-glow"
                    : "rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-brand/40 hover:text-navy"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <article className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:border-brand/40 hover:shadow-glow lg:grid-cols-2">
            <div className="relative min-h-64 bg-hero-gradient">
              <div className="absolute inset-0 grid-bg-dark opacity-40" />
              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                Destaque
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                {featured.tag}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.read}</span>
              </div>
              <Link to="/contactos" className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80">
                Ler artigo completo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Grelha de artigos */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
              >
                <div className="relative h-44 bg-hero-gradient">
                  <div className="absolute inset-0 grid-bg-dark opacity-40" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {a.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-navy">{a.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {a.read}</span>
                  </div>
                  <Link to="/contactos" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80">
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-white shadow-elegant sm:p-14">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  <Mail className="h-3 w-3" /> Newsletter
                </div>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Receba os melhores artigos no seu email</h2>
                <p className="mt-3 max-w-lg text-white/75">
                  Conteúdos exclusivos sobre cibersegurança, cloud e IA. Um email por mês, sem spam.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="o.seu.email@empresa.pt"
                  className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                />
                <Button type="submit" size="lg" className="bg-white text-navy shadow-glow hover:bg-white/90">
                  Subscrever
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
