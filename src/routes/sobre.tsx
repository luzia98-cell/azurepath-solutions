import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — NexTech | Parceiro Tecnológico Empresarial" },
      { name: "description", content: "Conheça a NexTech: parceiro tecnológico especializado em infraestruturas, cloud computing, IA, automação e cibersegurança." },
      { property: "og:title", content: "Sobre Nós — NexTech" },
      { property: "og:description", content: "Parceiro tecnológico especializado em cloud, IA, automação e cibersegurança." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            O Seu <span className="text-gradient">Parceiro Tecnológico</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Somos uma empresa especializada em infraestruturas tecnológicas, cloud computing, inteligência artificial,
            automação e cibersegurança, ajudando organizações a transformar a sua operação digital.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold">Quem Somos</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                A NexTech nasceu para simplificar a tecnologia nas empresas. Combinamos experiência técnica,
                certificações Microsoft e uma abordagem consultiva para entregar soluções fiáveis, seguras e escaláveis.
              </p>
              <p>
                Trabalhamos lado a lado com os nossos clientes para compreender os seus desafios e desenhar arquiteturas
                modernas em cloud, redes corporativas, segurança e inteligência artificial.
              </p>
              <p>
                Acreditamos que a transformação digital deve ser pragmática: tecnologias certas, no momento certo,
                com o suporte certo.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Target, t: "Missão", d: "Capacitar empresas com tecnologia confiável e inovadora." },
              { icon: Eye, t: "Visão", d: "Ser referência em transformação digital empresarial." },
              { icon: Heart, t: "Valores", d: "Compromisso, segurança, excelência e proximidade." },
              { icon: Rocket, t: "Abordagem", d: "Consultiva, prática e orientada a resultados." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card-gradient p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <b.icon className="h-5 w-5 text-brand-foreground" />
                </div>
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Award, n: "10+", l: "Anos de experiência" },
            { icon: Users, n: "200+", l: "Clientes empresariais" },
            { icon: Rocket, n: "500+", l: "Projetos entregues" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-3 text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Vamos construir o futuro tecnológico da sua empresa</h2>
        <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
          <Link to="/contactos">Contacte-nos</Link>
        </Button>
      </section>
    </>
  );
}
