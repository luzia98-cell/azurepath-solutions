import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/lib/services-data";

export const Route = createFileRoute("/servicos/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return { meta: [{ title: "Serviço não encontrado — Azimute IT" }] };
    }
    return {
      meta: [
        { title: `${service.title} — Azimute IT` },
        { name: "description", content: service.desc },
        { property: "og:title", content: `${service.title} — Azimute IT` },
        { property: "og:description", content: service.desc },
        { property: "og:url", content: `/servicos/${service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${service.slug}` }],
    };
  },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-navy">Serviço não encontrado</h1>
      <p className="mt-4 text-muted-foreground">O serviço que procura não existe ou foi movido.</p>
      <Button asChild className="mt-8 bg-brand-gradient text-brand-foreground">
        <Link to="/">Voltar à página inicial</Link>
      </Button>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-navy">Ocorreu um erro</h1>
      <Button onClick={reset} className="mt-8 bg-brand-gradient text-brand-foreground">Tentar novamente</Button>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const data = Route.useLoaderData() as { service: typeof services[number] };
  const service = data.service;
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Voltar aos serviços
          </Link>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                <Sparkles className="h-3 w-3" /> {service.hero}
              </div>
              <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">{service.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-navy shadow-glow hover:bg-white/90">
                  <Link to="/contactos">Pedir orçamento <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link to="/contactos">Falar com um especialista</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid h-40 w-40 place-items-center rounded-3xl bg-white/10 backdrop-blur shadow-glow">
                <Icon className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">O que incluímos</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Funcionalidades</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand/10">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                </div>
                <h3 className="font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Vantagens</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Benefícios para o seu negócio</h2>
            <p className="mt-4 text-muted-foreground">
              O que ganha ao trabalhar connosco em {service.title.toLowerCase()}.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-navy shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Como funciona</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">O nosso processo</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, idx) => (
              <div key={p.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="absolute -top-3 right-4 rounded-full bg-brand-gradient px-3 py-0.5 text-xs font-semibold text-white shadow-glow">
                  0{idx + 1}
                </div>
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Tecnologias</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Plataformas que usamos</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {service.technologies.map((t) => (
              <span key={t} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy shadow-soft">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">FAQ</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Outros serviços</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Descubra mais</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to="/servicos/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                    <RIcon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Saber mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-white shadow-elegant sm:p-16">
            <div className="absolute inset-0 grid-bg-dark opacity-40" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Pronto para avançar?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/80">
                Fale connosco e receba uma proposta personalizada para {service.title.toLowerCase()}.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-navy shadow-glow hover:bg-white/90">
                <Link to="/contactos">Pedir proposta <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
