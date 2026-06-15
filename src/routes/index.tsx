import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones, Network, Server, Globe, Cloud, ShieldCheck,
  BrainCircuit, Home as HomeIcon, Workflow, CheckCircle2, ArrowRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-tech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexTech — Soluções Tecnológicas Inteligentes para Empresas" },
      { name: "description", content: "Apoio informático, redes, servidores, Microsoft Azure, cibersegurança, inteligência artificial e automação empresarial em Portugal." },
      { property: "og:title", content: "NexTech — Soluções Tecnológicas Inteligentes" },
      { property: "og:description", content: "Apoio informático, cloud Azure, cibersegurança, IA e automação para empresas." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Headphones, title: "Apoio Informático", desc: "Equipa técnica certificada Microsoft para suporte remoto e presencial, resolução de incidentes e manutenção preventiva." },
  { icon: Network, title: "Redes", desc: "Projeto, implementação e gestão de infraestruturas de rede seguras, escaláveis e de elevado desempenho." },
  { icon: Server, title: "Servidores", desc: "Instalação, configuração, monitorização e administração de servidores físicos e virtuais." },
  { icon: Globe, title: "Hospedagem de Sites", desc: "Alojamento web seguro, rápido e fiável para empresas e projetos profissionais." },
  { icon: Cloud, title: "Cloud Microsoft Azure", desc: "Soluções cloud baseadas em Azure para armazenamento, backup, recuperação e escalabilidade empresarial." },
  { icon: ShieldCheck, title: "Cibersegurança", desc: "Proteção contra ameaças digitais com auditorias, monitorização, políticas de segurança e proteção de dados." },
  { icon: BrainCircuit, title: "Inteligência Artificial", desc: "Implementação de soluções de IA para otimização de processos, análise de dados e aumento de produtividade." },
  { icon: HomeIcon, title: "Domótica", desc: "Automação residencial inteligente para iluminação, climatização, segurança e dispositivos conectados." },
  { icon: Workflow, title: "Automação com IA", desc: "Automatização de tarefas empresariais com IA, workflows inteligentes e integração de sistemas." },
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <Sparkles className="h-3 w-3" /> Parceiro Tecnológico Certificado
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Soluções Tecnológicas <span className="text-gradient">Inteligentes</span> para o Futuro da Sua Empresa
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Especialistas em suporte informático, cloud, redes, cibersegurança, inteligência artificial e automação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
                <Link to="/contactos">Solicitar Orçamento <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand/40 bg-transparent hover:bg-brand/10">
                <Link to="/contactos">Falar com um Especialista</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Infraestrutura tecnológica, cloud computing e inteligência artificial"
              width={1920}
              height={1080}
              className="relative rounded-2xl border border-border shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Os Nossos Serviços</h2>
          <p className="mt-4 text-muted-foreground">
            Soluções tecnológicas completas para empresas que querem crescer com segurança e eficiência.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card-gradient p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                <s.icon className="h-6 w-6 text-brand-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border/40 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Porque Escolher-nos</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Combinamos certificações, experiência e tecnologia de ponta para entregar soluções que fazem a diferença na sua operação diária.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-card-gradient p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card-gradient p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto para Modernizar a Sua Infraestrutura?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Fale connosco e descubra como podemos ajudar a sua empresa a crescer através da tecnologia.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/contactos">Pedir Proposta <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
