import { Link } from "@tanstack/react-router";
import { Compass, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient shadow-glow">
              <Compass className="h-5 w-5 text-brand-foreground" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-navy">AZIMUTE<span className="text-brand">.IT</span></div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Informática e Tecnologia</div>
            </div>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Soluções em tecnologia: redes informáticas, apoio informático, cibersegurança,
            telecomunicações e inteligência artificial para empresas.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-foreground">Quem Somos</Link></li>
            <li><a href="/#servicos" className="hover:text-foreground">Serviços</a></li>
            <li><Link to="/artigos" className="hover:text-foreground">Artigos</Link></li>
            <li><Link to="/contactos" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Contactos</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 text-brand" /> geral@azimuteit.pt</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 shrink-0 text-brand" /> +351 210 000 000</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand" /> Portugal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Azimute IT — Informática e Tecnologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
