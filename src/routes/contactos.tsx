import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Headphones, ShieldCheck, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Azimute IT | Entre em contacto" },
      { name: "description", content: "Entre em contacto com a Azimute IT para apoio informático, cloud Azure, cibersegurança, IA e automação empresarial." },
      { property: "og:title", content: "Contactos — Azimute IT" },
      { property: "og:description", content: "Fale connosco. Estamos na Costa da Caparica, Almada." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada! Entraremos em contacto brevemente.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Toaster richColors position="top-center" />

      {/* Top header section — light background */}
      <section className="relative overflow-hidden bg-[#f4f5f7]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-wide text-navy sm:text-5xl">
            Entre em contacto
          </h1>
        </div>
      </section>

      {/* Blue contact section */}
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Form */}
            <div>
              <h2 className="mb-8 text-xl font-light">Envie-nos uma mensagem</h2>
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="nome" className="text-sm font-normal text-white/80">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    placeholder="O seu nome"
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-normal text-white/80">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@empresa.pt"
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-sm font-normal text-white/80">
                    Telemóvel
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="+351 ..."
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-[#00bcd4] px-10 py-5 text-sm font-medium uppercase tracking-widest text-white hover:bg-[#00acc1]"
                >
                  {loading ? "A enviar..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-8 lg:pt-8">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <Mail className="h-4 w-4" />
                  <span>E-mail</span>
                </div>
                <p className="text-lg font-semibold text-white">contacto@azimuteit.pt</p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <Phone className="h-4 w-4" />
                  <span>Telemóvel</span>
                </div>
                <p className="text-lg font-semibold text-white">967 642 199</p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4" />
                  <span>Endereço</span>
                </div>
                <p className="text-lg font-semibold leading-relaxed text-white">
                  Rua Manuel Luis da Costa.<br />
                  Costa da Caparica - Almada - Setúbal.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why contact us */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Porquê falar connosco</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">O que pode esperar do nosso contacto</h2>
            <p className="mt-4 text-muted-foreground">
              Respondemos rapidamente, com clareza e sem compromisso. A primeira análise é sempre gratuita.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, t: "Resposta em <24h", d: "Garantimos resposta a todos os pedidos em menos de 24 horas úteis." },
              { icon: Headphones, t: "Análise gratuita", d: "Avaliamos as suas necessidades sem custos nem compromisso inicial." },
              { icon: ShieldCheck, t: "Confidencialidade", d: "Toda a informação partilhada é tratada com total confidencialidade." },
              { icon: MessageSquare, t: "Linguagem clara", d: "Falamos a sua língua. Sem jargão técnico desnecessário." },
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
      </section>

      {/* Map + Info side by side */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Onde estamos</div>
              <h2 className="mt-3 text-3xl font-bold text-navy">Visite-nos na Costa da Caparica</h2>
              <p className="mt-4 text-muted-foreground">
                Apoiamos clientes em toda a região de Lisboa, Setúbal e remotamente em todo o país.
                Marque uma reunião presencial ou online — adaptamo-nos à sua agenda.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">Sede</div>
                    <div className="text-muted-foreground">Rua Manuel Luis da Costa, Costa da Caparica</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">967 642 199</div>
                    <div className="text-muted-foreground">Atendimento direto e WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">contacto@azimuteit.pt</div>
                    <div className="text-muted-foreground">Resposta em menos de 24h úteis</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <iframe
                title="Mapa Azimute IT"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.245%2C38.635%2C-9.215%2C38.655&layer=mapnik"
                className="h-[450px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Perguntas frequentes</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Antes de nos contactar</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { q: "Quanto custa um orçamento?", a: "A análise inicial e a proposta são sempre gratuitas e sem compromisso." },
              { q: "Em quanto tempo respondem?", a: "Respondemos a pedidos em menos de 24 horas úteis. Para urgências, ligue diretamente." },
              { q: "Atendem clientes fora de Lisboa?", a: "Sim. Trabalhamos remotamente com clientes em todo o país e presencialmente na grande Lisboa e Setúbal." },
              { q: "Posso pedir só uma consultoria?", a: "Claro. Oferecemos sessões de consultoria avulsa para apoiar decisões tecnológicas pontuais." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/sobre">Conhecer a Azimute IT <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
