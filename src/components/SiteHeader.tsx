import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços", hash: true },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/contactos", label: "Contactos" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient shadow-glow">
            <Cpu className="h-5 w-5 text-brand-foreground" />
          </div>
          <span className="text-lg tracking-tight">NexTech</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.hash ? (
              <a key={item.to} href="/#servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-brand-gradient text-brand-foreground shadow-glow hover:opacity-90">
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
                <a key={item.to} href="/#servicos" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                  {item.label}
                </a>
              ) : (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
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
