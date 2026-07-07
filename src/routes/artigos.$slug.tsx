import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { articleBySlug, articles } from "@/lib/articles-data";
import { getLocalizedBody } from "@/lib/articles-translations";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/artigos/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artigo não encontrado — Azimute IT" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `Artigo — Azimute IT` },
        { name: "description", content: loaderData.article.body.slice(0, 155) },
        { property: "og:title", content: "Artigo — Azimute IT" },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">Artigo não encontrado</h1>
      <Link to="/artigos" className="mt-6 inline-flex items-center gap-2 text-brand hover:opacity-80">
        <ArrowLeft className="h-4 w-4" /> Voltar aos artigos
      </Link>
    </section>
  );
}

/** Very small markdown-lite renderer: ##, - list, 1. list, **bold**, paragraphs */
function renderBody(body: string) {
  const blocks = body.split(/\n{2,}/);
  const nodes: React.ReactNode[] = [];
  let listBuffer: { type: "ul" | "ol"; items: string[] } | null = null;
  const flushList = () => {
    if (!listBuffer) return;
    const Tag = listBuffer.type;
    nodes.push(
      <Tag key={`l${nodes.length}`} className={Tag === "ol" ? "my-4 list-decimal space-y-2 pl-6 text-foreground/85" : "my-4 list-disc space-y-2 pl-6 text-foreground/85"}>
        {listBuffer.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
      </Tag>
    );
    listBuffer = null;
  };
  blocks.forEach((raw, idx) => {
    const b = raw.trim();
    if (!b) return;
    if (b.startsWith("## ")) {
      flushList();
      nodes.push(<h2 key={idx} className="mt-10 mb-3 text-2xl font-bold text-navy dark:text-foreground">{b.slice(3)}</h2>);
      return;
    }
    const ulMatch = b.split("\n").every((l) => /^-\s+/.test(l.trim()));
    const olMatch = b.split("\n").every((l) => /^\d+\.\s+/.test(l.trim()));
    if (ulMatch) {
      const items = b.split("\n").map((l) => l.trim().replace(/^-\s+/, ""));
      if (!listBuffer || listBuffer.type !== "ul") { flushList(); listBuffer = { type: "ul", items: [] }; }
      listBuffer.items.push(...items);
      return;
    }
    if (olMatch) {
      const items = b.split("\n").map((l) => l.trim().replace(/^\d+\.\s+/, ""));
      if (!listBuffer || listBuffer.type !== "ol") { flushList(); listBuffer = { type: "ol", items: [] }; }
      listBuffer.items.push(...items);
      return;
    }
    flushList();
    nodes.push(<p key={idx} className="my-4 leading-relaxed text-foreground/85">{renderInline(b)}</p>);
  });
  flushList();
  return nodes;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-navy dark:text-foreground">{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { t } = useT();
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <>
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-glow/25 blur-3xl animate-blob-slow" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 animate-drift"
              style={{ left: `${(i * 10.3) % 100}%`, bottom: `-${(i * 4) % 40}px`, animationDelay: `${(i * 1.4) % 12}s`, animationDuration: `${14 + (i % 6)}s` }} />
          ))}
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-up">
          <Link to="/artigos" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {t("art.eyebrow")}
          </Link>
          <div className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {t(article.tagKey)}
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">{t(article.titleKey)}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/75">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.read}</span>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="relative -mt-20 overflow-hidden rounded-2xl border border-border shadow-elegant">
            <img src={article.image} alt="" width={1600} height={900} loading="eager"
              className="h-64 w-full object-cover sm:h-96" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <article className="bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="prose-lg text-base sm:text-lg">{renderBody(article.body)}</div>
        </div>
      </article>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl animated-gradient p-8 text-white shadow-elegant sm:p-12">
            <div className="absolute inset-0 grid-bg-dark opacity-30" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand-glow/30 blur-3xl animate-blob-slow" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/70">Próximo artigo</div>
                <div className="mt-2 text-xl font-semibold sm:text-2xl">{t(next.titleKey)}</div>
              </div>
              <Link to="/artigos/$slug" params={{ slug: next.slug }}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-navy shadow-glow hover:bg-white/90">
                {t("art.readMore")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
