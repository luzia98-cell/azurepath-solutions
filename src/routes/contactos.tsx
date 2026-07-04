import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Headphones, ShieldCheck, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useT } from "@/lib/i18n";

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
  const { t } = useT();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(t("contact.form.toast"));
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  const why = [
    { icon: Zap, t: t("contact.why.1.t"), d: t("contact.why.1.d") },
    { icon: Headphones, t: t("contact.why.2.t"), d: t("contact.why.2.d") },
    { icon: ShieldCheck, t: t("contact.why.3.t"), d: t("contact.why.3.d") },
    { icon: MessageSquare, t: t("contact.why.4.t"), d: t("contact.why.4.d") },
  ];

  const faq = [
    { q: t("contact.faq.1.q"), a: t("contact.faq.1.a") },
    { q: t("contact.faq.2.q"), a: t("contact.faq.2.a") },
    { q: t("contact.faq.3.q"), a: t("contact.faq.3.a") },
    { q: t("contact.faq.4.q"), a: t("contact.faq.4.a") },
  ];

  return (
    <>
      <Toaster richColors position="top-center" />

      <section className="relative overflow-hidden bg-[#f4f5f7]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-wide text-navy sm:text-5xl">{t("contact.title")}</h1>
        </div>
      </section>

      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-xl font-light">{t("contact.form.title")}</h2>
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="nome" className="text-sm font-normal text-white/80">{t("contact.form.name")}</Label>
                  <Input id="nome" name="nome" required placeholder={t("contact.form.name.ph")}
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-normal text-white/80">{t("contact.form.email")}</Label>
                  <Input id="email" name="email" type="email" required placeholder="email@empresa.pt"
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-sm font-normal text-white/80">{t("contact.form.phone")}</Label>
                  <Input id="telefone" name="telefone" type="tel" placeholder="+351 ..."
                    className="mt-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30" />
                </div>
                <Button type="submit" disabled={loading}
                  className="mt-2 bg-[#00bcd4] px-10 py-5 text-sm font-medium uppercase tracking-widest text-white hover:bg-[#00acc1]">
                  {loading ? t("contact.form.sending") : t("contact.form.send")}
                </Button>
              </form>
            </div>

            <div className="space-y-8 lg:pt-8">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60"><Mail className="h-4 w-4" /><span>{t("contact.info.email")}</span></div>
                <p className="text-lg font-semibold text-white">contacto@azimuteit.pt</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60"><Phone className="h-4 w-4" /><span>{t("contact.info.phone")}</span></div>
                <p className="text-lg font-semibold text-white">967 642 199</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60"><MapPin className="h-4 w-4" /><span>{t("contact.info.address")}</span></div>
                <p className="text-lg font-semibold leading-relaxed text-white">
                  Rua Manuel Luis da Costa.<br />Costa da Caparica - Almada - Setúbal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("contact.why.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("contact.why.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("contact.why.desc")}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((b) => (
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

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("contact.map.eyebrow")}</div>
              <h2 className="mt-3 text-3xl font-bold text-navy">{t("contact.map.title")}</h2>
              <p className="mt-4 text-muted-foreground">{t("contact.map.desc")}</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">{t("contact.map.hq")}</div>
                    <div className="text-muted-foreground">{t("contact.map.hqDesc")}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">967 642 199</div>
                    <div className="text-muted-foreground">{t("contact.map.phoneDesc")}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div className="text-sm">
                    <div className="font-semibold text-navy">contacto@azimuteit.pt</div>
                    <div className="text-muted-foreground">{t("contact.map.emailDesc")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <iframe title="Mapa Azimute IT"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.245%2C38.635%2C-9.215%2C38.655&layer=mapnik"
                className="h-[450px] w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{t("contact.faq.eyebrow")}</div>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{t("contact.faq.title")}</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
              <Link to="/sobre">{t("contact.about.btn")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
