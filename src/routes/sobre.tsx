import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target, Eye, Heart, Award, Users, Rocket,
  ShieldCheck, Cloud, BrainCircuit, Network,
  CheckCircle2, ArrowRight, Building2, Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

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

function AboutPage() {
  const { t } = useT();

  const milestones = [
    { year: t("about.m1.year"), title: t("about.m1.t"), desc: t("about.m1.d") },
    { year: t("about.m2.year"), title: t("about.m2.t"), desc: t("about.m2.d") },
    { year: t("about.m3.year"), title: t("about.m3.t"), desc: t("about.m3.d") },
    { year: t("about.m4.year"), title: t("about.m4.t"), desc: t("about.m4.d") },
    { year: t("about.m5.year"), title: t("about.m5.t"), desc: t("about.m5.d") },
  ];

  const expertise = [
    { icon: Network, t: t("about.exp.1.t"), d: t("about.exp.1.d") },
    { icon: Cloud, t: t("about.exp.2.t"), d: t("about.exp.2.d") },
    { icon: ShieldCheck, t: t("about.exp.3.t"), d: t("about.exp.3.d") },
    { icon: BrainCircuit, t: t("about.exp.4.t"), d: t("about.exp.4.d") },
  ];

  const values = [t("about.v1"), t("about.v2"), t("about.v3"), t("about.v4"), t("about.v5"), t("about.v6")];

  const pillars = [
    { icon: Target, t: t("about.pillars.1.t"), d: t("about.pillars.1.d") },
    { icon: Eye, t: t("about.pillars.2.t"), d: t("about.pillars.2.d") },
    { icon: Heart, t: t("about.pillars.3.t"), d: t("about.pillars.3.d") },
    { icon: Rocket, t: t("about.pillars.4.t"), d: t("about.pillars.4.d") },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{t("about.eyebrow")}</div>
          <h1 className="mt-3 text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            {t("about.title1")} <span className="bg-gradient-to-r from-[oklch(0.85_0.12_220)] to-white bg-clip-text text-transparent">{t("about.title2")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">{t("about.desc")}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("about.history.eyebrow")}</div>
              <h2 className="mt-3 text-3xl font-bold text-navy">{t("about.history.title")}</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>{t("about.history.p1")}</p>
                <p>{t("about.history.p2")}</p>
                <p>{t("about.history.p3")}</p>
              </div>
              <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
                <Link to="/contactos">{t("about.talk")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((b) => (
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

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("about.exp.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("about.exp.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("about.exp.desc")}</p>
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

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("about.timeline.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("about.timeline.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("about.timeline.desc")}</p>
          </div>
          <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
            {milestones.map((m) => (
              <li key={m.year + m.title} className="relative">
                <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-glow">•</span>
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

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("about.values.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("about.values.title")}</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{t("about.values.desc")}</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <Handshake className="h-6 w-6 text-brand" />
              <span className="text-sm font-medium text-navy">{t("about.values.badge")}</span>
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

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Award, n: "10+", l: t("stat.experience") },
            { icon: Users, n: "200+", l: t("about.stat.clients") },
            { icon: Rocket, n: "500+", l: t("stat.projects") },
            { icon: Building2, n: "15+", l: t("about.stat.sectors") },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-3 text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-white shadow-elegant sm:p-16">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">{t("about.cta.title")}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">{t("about.cta.desc")}</p>
              <Button asChild size="lg" className="mt-8 bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">{t("about.cta.btn")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
