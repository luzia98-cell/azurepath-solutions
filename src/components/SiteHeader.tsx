import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-azimute.png.asset.json";
import { useTheme } from "@/lib/theme";
import { useT, type Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇵🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useT();

  const nav = [
    { to: "/sobre", label: t("nav.about") },
    { to: "/", label: t("nav.services"), hash: true },
    { to: "/artigos", label: t("nav.articles") },
    { to: "/contactos", label: t("nav.contact") },
  ];

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img src={logoAsset.url} alt="Azimute IT" className="h-10 w-auto shrink-0" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) =>
            item.hash ? (
              <a key={item.label} href="/#servicos" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggle}
            aria-label={t("theme.toggle")}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label={t("lang.label")}
              className="flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span>{current.label}</span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-md border border-border bg-popover shadow-elegant">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-muted ${l.code === lang ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                    >
                      <span>{l.flag}</span> <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button asChild className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
            <Link to="/contactos">{t("nav.cta")}</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {nav.map((item) =>
              item.hash ? (
                <a key={item.label} href="/#servicos" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 flex items-center gap-2">
              <button onClick={toggle} className="grid h-9 w-9 place-items-center rounded-md border border-border">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`h-9 rounded-md border border-border px-3 text-xs font-semibold ${l.code === lang ? "bg-muted text-foreground" : "text-muted-foreground"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <Button asChild className="mt-3 w-full bg-brand-gradient text-brand-foreground">
              <Link to="/contactos" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
