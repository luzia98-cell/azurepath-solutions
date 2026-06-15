import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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

const articles = [
  {
    title: "Aulas Particulares de Informática",
    excerpt: "Muitos colegas, amigos e clientes relatam que grande parte das pessoas prefere não aproveitar os benefícios da tecnologia por falta de conhecimento. Disponibilizamos formadores com experiência para todas as idades.",
    tag: "Formação",
  },
  {
    title: "O que é Segurança da Informação?",
    excerpt: "A segurança da informação envolve um conjunto de medidas para garantir a confidencialidade, integridade e disponibilidade da informação de uma organização.",
    tag: "Cibersegurança",
  },
  {
    title: "A tecnologia não é só uma aliada — é Essencial",
    excerpt: "Desde os anos 1980, a importância da tecnologia no crescimento das organizações é destaque em todas as áreas de negócio. A automação dos processos é hoje obrigatória.",
    tag: "Transformação Digital",
  },
];

function ArtigosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Blog</div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Últimas <span className="text-gradient">Notícias</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Artigos, dicas e novidades sobre tecnologia, cibersegurança e inteligência artificial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card-gradient transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow"
            >
              <div className="relative h-44 bg-hero-gradient">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute left-4 top-4 rounded-full border border-brand/40 bg-background/60 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                  {a.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <Link to="/contactos" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
