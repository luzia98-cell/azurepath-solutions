import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
      <section className="bg-[#2e3e9f] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Form */}
            <div>
              <h2 className="mb-8 text-xl font-light">Liguem-me</h2>
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
                  {loading ? "A enviar..." : "SUBMIT"}
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
                  Costa da Caparica – Almada – Setúbal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              title="Mapa Azimute IT"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.16%2C38.71%2C-9.13%2C38.73&layer=mapnik"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
