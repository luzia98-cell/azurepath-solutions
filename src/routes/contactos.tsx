import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — NexTech | Fale com um Especialista" },
      { name: "description", content: "Entre em contacto com a NexTech para apoio informático, cloud Azure, cibersegurança, IA e automação empresarial." },
      { property: "og:title", content: "Contactos — NexTech" },
      { property: "og:description", content: "Fale com um especialista NexTech." },
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
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Fale com um <span className="text-gradient">Especialista</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Conte-nos o desafio da sua empresa. A nossa equipa responde em até 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Mail, t: "Email", v: "geral@nextech.pt" },
              { icon: Phone, t: "Telefone", v: "+351 210 000 000" },
              { icon: MapPin, t: "Morada", v: "Av. da Liberdade, Lisboa" },
              { icon: Clock, t: "Horário", v: "Seg–Sex, 9h–18h" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card-gradient p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <c.icon className="h-5 w-5 text-brand-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{c.t}</div>
                  <div className="mt-1 truncate font-medium">{c.v}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card-gradient p-6 sm:p-8 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold">Envie-nos uma mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">Preencha o formulário e entraremos em contacto.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input id="nome" name="nome" required placeholder="O seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="email@empresa.pt" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" name="telefone" type="tel" placeholder="+351 ..." />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea id="mensagem" name="mensagem" required rows={5} placeholder="Descreva o seu projeto ou necessidade..." />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="mt-6 w-full bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90 sm:w-auto"
            >
              {loading ? "A enviar..." : <>Enviar Mensagem <Send className="h-4 w-4" /></>}
            </Button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
          <iframe
            title="Mapa NexTech"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.16%2C38.71%2C-9.13%2C38.73&layer=mapnik"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
