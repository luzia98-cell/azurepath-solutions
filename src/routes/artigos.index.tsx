import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgAi from "@/assets/articles/ai-start.jpg";
import imgTraining from "@/assets/articles/training.jpg";
import imgInfosec from "@/assets/articles/infosec.jpg";
import imgDigital from "@/assets/articles/digital-transform.jpg";
import imgCloud from "@/assets/articles/cloud-migration.jpg";
import imgPhishing from "@/assets/articles/phishing.jpg";
import imgBackup from "@/assets/articles/backup.jpg";
import imgAutomation from "@/assets/articles/automation.jpg";
import imgWifi from "@/assets/articles/wifi.jpg";
import { useT } from "@/lib/i18n";

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

function ArtigosPage() {
  const { t } = useT();

  const categories = [
    t("art.cat.all"), t("art.cat.sec"), t("art.cat.cloud"),
    t("art.cat.ai"), t("art.cat.training"), t("art.cat.digital"),
  ];

  const featured = {
    slug: "ia-nas-pme-por-onde-comecar",
    title: t("art.f.title"),
    excerpt: t("art.f.excerpt"),
    tag: t("art.cat.ai"),
    date: "20 Jun 2026",
    read: "8 min",
    image: imgAi,
  };

  const articles = [
    { slug: "aulas-particulares-de-informatica", title: t("art.a1.title"), excerpt: t("art.a1.excerpt"), tag: t("art.cat.training"), date: "12 Jun 2026", read: "4 min", image: imgTraining },
    { slug: "o-que-e-seguranca-da-informacao", title: t("art.a2.title"), excerpt: t("art.a2.excerpt"), tag: t("art.cat.sec"), date: "05 Jun 2026", read: "6 min", image: imgInfosec },
    { slug: "tecnologia-e-essencial", title: t("art.a3.title"), excerpt: t("art.a3.excerpt"), tag: t("art.cat.digital"), date: "28 Mai 2026", read: "5 min", image: imgDigital },
    { slug: "migrar-para-microsoft-365", title: t("art.a4.title"), excerpt: t("art.a4.excerpt"), tag: t("art.cat.cloud"), date: "18 Mai 2026", read: "7 min", image: imgCloud },
    { slug: "phishing-como-proteger-a-equipa", title: t("art.a5.title"), excerpt: t("art.a5.excerpt"), tag: t("art.cat.sec"), date: "10 Mai 2026", read: "6 min", image: imgPhishing },
    { slug: "backup-3-2-1", title: t("art.a6.title"), excerpt: t("art.a6.excerpt"), tag: t("art.cat.sec"), date: "02 Mai 2026", read: "5 min", image: imgBackup },
    { slug: "power-automate-para-pme", title: t("art.a7.title"), excerpt: t("art.a7.excerpt"), tag: t("art.cat.ai"), date: "22 Abr 2026", read: "6 min", image: imgAutomation },
    { slug: "wifi-empresarial", title: t("art.a8.title"), excerpt: t("art.a8.excerpt"), tag: t("art.cat.cloud"), date: "14 Abr 2026", read: "5 min", image: imgWifi },
  ];

  return (
    <>
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-glow/25 blur-3xl animate-blob-slow" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 animate-drift"
              style={{ left: `${(i * 8.7) % 100}%`, bottom: `-${(i * 4) % 40}px`, animationDelay: `${(i * 1.5) % 12}s`, animationDuration: `${14 + (i % 6)}s` }} />
          ))}
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 animate-fade-up">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{t("art.eyebrow")}</div>
          <h1 className="mt-3 text-4xl font-bold uppercase sm:text-5xl">
            {t("art.title1")} <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">{t("art.title2")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">{t("art.desc")}</p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={i === 0
                ? "rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white shadow-glow"
                : "rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-brand/40 hover:text-navy"}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <article className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:border-brand/40 hover:shadow-glow lg:grid-cols-2 animate-fade-up">
            <div className="relative min-h-64 bg-hero-gradient">
              <img src={featured.image} alt={featured.title} loading="lazy" width={1024} height={1024}
                className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/40 to-brand/60" />
              <div className="absolute inset-0 grid-bg-dark opacity-30" />
              <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {t("art.featured")}
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
              <Link to="/artigos/$slug" params={{ slug: featured.slug }} className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80">
                {t("art.readFull")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <article key={a.title} style={{ animationDelay: `${i * 80}ms` }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-2 hover:border-brand/40 hover:shadow-glow animate-fade-up">
                <div className="relative h-44 overflow-hidden bg-hero-gradient">
                  <img src={a.image} alt={a.title} loading="lazy" width={1024} height={1024}
                    className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/40 to-brand/60" />
                  <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand/40 blur-2xl animate-blob" style={{ animationDelay: `${i * 0.8}s` }} />
                  <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-brand-glow/30 blur-2xl animate-blob-slow" style={{ animationDelay: `${i * 0.6}s` }} />
                  <div className="absolute inset-0 grid-bg-dark opacity-30" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">{a.tag}</div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-navy">{a.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {a.read}</span>
                  </div>
                  <Link to="/artigos/$slug" params={{ slug: a.slug }} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:opacity-80">
                    {t("art.readMore")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl animated-gradient p-10 text-white shadow-elegant sm:p-14">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-brand/40 blur-3xl animate-blob" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-brand-glow/30 blur-3xl animate-blob-slow" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  <Mail className="h-3 w-3" /> {t("art.news.badge")}
                </div>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t("art.news.title")}</h2>
                <p className="mt-3 max-w-lg text-white/75">{t("art.news.desc")}</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder={t("art.news.placeholder")}
                  className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none" />
                <Button type="submit" size="lg" className="bg-white text-navy shadow-glow hover:bg-white/90">
                  {t("art.news.btn")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
