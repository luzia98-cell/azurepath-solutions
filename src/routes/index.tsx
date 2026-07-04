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
import { services } from "@/lib/services-data";
import { useT } from "@/lib/i18n";

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

const technologies = [
  "Microsoft 365", "Azure", "Windows Server", "Microsoft Defender",
  "Fortinet", "Ubiquiti", "VMware", "Veeam Backup",
  "OpenAI", "Power Automate", "Teams", "SharePoint",
];

function HomePage() {
  const { t, ts } = useT();

  const stats = [
    { icon: Building2, n: "200+", l: t("stat.companies") },
    { icon: Rocket, n: "500+", l: t("stat.projects") },
    { icon: Clock, n: "<2h", l: t("stat.response") },
    { icon: Award, n: "10+", l: t("stat.experience") },
  ];

  const process = [
    { icon: Search, title: t("process.1.t"), desc: t("process.1.d") },
    { icon: Lightbulb, title: t("process.2.t"), desc: t("process.2.d") },
    { icon: Rocket, title: t("process.3.t"), desc: t("process.3.d") },
    { icon: LifeBuoy, title: t("process.4.t"), desc: t("process.4.d") },
  ];

  const industries = [
    { icon: Factory, name: t("ind.industry") },
    { icon: HeartPulse, name: t("ind.health") },
    { icon: GraduationCap, name: t("ind.education") },
    { icon: ShoppingBag, name: t("ind.retail") },
    { icon: Scale, name: t("ind.legal") },
    { icon: Landmark, name: t("ind.finance") },
  ];

  const reasons = [t("why.r1"), t("why.r2"), t("why.r3"), t("why.r4"), t("why.r5"), t("why.r6")];

  const testimonials = [
    { quote: t("test.1.q"), name: "Ricardo Mendes", role: t("test.1.r") },
    { quote: t("test.2.q"), name: "Sofia Carvalho", role: t("test.2.r") },
    { quote: t("test.3.q"), name: "João Pereira", role: t("test.3.r") },
  ];

  const faqs = [
    { q: t("faq.1.q"), a: t("faq.1.a") },
    { q: t("faq.2.q"), a: t("faq.2.a") },
    { q: t("faq.3.q"), a: t("faq.3.a") },
    { q: t("faq.4.q"), a: t("faq.4.a") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.55_0.2_260)]/30 blur-3xl animate-blob-slow" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-glow/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 animate-drift"
              style={{ left: `${(i * 7.3) % 100}%`, bottom: `-${(i * 3) % 40}px`, animationDelay: `${(i * 1.3) % 12}s`, animationDuration: `${14 + (i % 6)}s` }} />
          ))}
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" /> {t("home.hero.badge")}
            </div>
            <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {t("home.hero.title1")}{" "}
              <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">
                {t("home.hero.title2")}
              </span>
              <br />
              {t("home.hero.title3")}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">{t("home.hero.desc")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">{t("home.hero.cta1")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contactos">{t("home.hero.cta2")}</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> {t("home.hero.check1")}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> {t("home.hero.check2")}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> {t("home.hero.check3")}</div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-30 blur-3xl animate-pulse-glow" />
            <div className="pointer-events-none absolute -inset-6 rounded-3xl border border-white/10 animate-spin-slow" />
            <img src={heroImg} alt="Tech" width={1920} height={1080}
              className="relative rounded-2xl border border-white/10 shadow-elegant animate-float" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <div key={s.l} className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
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
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("services.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("services.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("services.desc")}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const SIcon = s.icon;
              const tr = ts(s.slug);
              return (
                <Link key={s.slug} to="/servicos/$slug" params={{ slug: s.slug }}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-glow animate-fade-up">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <SIcon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-navy">{tr?.title ?? s.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{tr?.desc ?? s.desc}</p>
                  <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    {t("services.more")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("process.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("process.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("process.desc")}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, idx) => (
              <div key={p.title} style={{ animationDelay: `${idx * 100}ms` }}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow animate-fade-up">
                <div className="absolute -top-3 right-4 rounded-full bg-brand-gradient px-3 py-0.5 text-xs font-semibold text-white shadow-glow">0{idx + 1}</div>
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

      {/* AI */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-15 blur-3xl" />
            <img src={aiImg} alt="AI" width={1024} height={1024} loading="lazy"
              className="relative rounded-2xl border border-border shadow-elegant" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              <Bot className="h-3 w-3" /> {t("ai.badge")}
            </div>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              {t("ai.title1")} <span className="text-gradient">{t("ai.title2")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t("ai.desc")}</p>
            <ul className="mt-6 space-y-3">
              {[t("ai.point1"), t("ai.point2"), t("ai.point3"), t("ai.point4")].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">{t("ai.cta")} <ArrowRight className="h-4 w-4" /></Link>
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
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{t("ind.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("ind.title")}</h2>
            <p className="mt-4 text-white/70">{t("ind.desc")}</p>
          </div>
          <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((it, i) => (
              <div key={it.name} style={{ animationDelay: `${i * 70}ms` }}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 animate-fade-up">
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
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("why.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("why.title")}</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{t("why.desc")}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r} style={{ animationDelay: `${i * 60}ms` }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-glow animate-fade-up">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium text-navy">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative overflow-hidden animated-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl animate-blob-slow" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{t("tech.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("tech.title")}</h2>
            <p className="mt-4 text-white/70">{t("tech.desc")}</p>
          </div>
          <div className="mt-12 marquee-mask overflow-hidden">
            <div className="flex w-max gap-3 animate-marquee">
              {[...technologies, ...technologies].map((tech, i) => (
                <span key={`${tech}-${i}`} className="shrink-0 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("test.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("test.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("test.desc")}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((tt, i) => (
              <figure key={tt.name} style={{ animationDelay: `${i * 120}ms` }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant animate-fade-up">
                <div className="absolute -top-3 left-6 grid h-10 w-10 place-items-center rounded-full bg-brand-gradient shadow-glow">
                  <Quote className="h-4 w-4 text-white" />
                </div>
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-navy">"{tt.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-navy">{tt.name}</div>
                  <div className="text-xs text-muted-foreground">{tt.role}</div>
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
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("faq.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("faq.title")}</h2>
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
              <h2 className="text-3xl font-bold sm:text-4xl">{t("cta.home.title")}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">{t("cta.home.desc")}</p>
              <Button asChild size="lg" className="mt-8 bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">{t("cta.home.btn")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
