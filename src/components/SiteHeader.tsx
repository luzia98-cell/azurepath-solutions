import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/sobre", label: "Quem Somos" },
    { to: "/", label: "Serviços", hash: true },
    { to: "/artigos", label: "Artigos" },
    { to: "/contactos", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-gradient shadow-glow">
            <Compass className="h-5 w-5 text-brand-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight sm:text-lg">AZIMUTE<span className="text-brand">.IT</span></div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Informática e Tecnologia</div>
          </div>
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

        <div className="hidden md:block">
          <Button asChild className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
            <Link to="/contactos">Pedir Orçamento</Link>
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
            <Button asChild className="mt-2 w-full bg-brand-gradient text-brand-foreground">
              <Link to="/contactos" onClick={() => setOpen(false)}>Pedir Orçamento</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
