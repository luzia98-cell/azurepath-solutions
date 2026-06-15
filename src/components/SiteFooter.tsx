import { Link } from "@tanstack/react-router";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient shadow-glow">
              <Cpu className="h-5 w-5 text-brand-foreground" />
            </div>
            <span className="text-lg">NexTech</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Soluções tecnológicas completas: apoio informático, cloud Microsoft Azure, redes,
            cibersegurança, inteligência artificial e automação empresarial.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li><a href="/#servicos" className="hover:text-foreground">Serviços</a></li>
            <li><Link to="/sobre" className="hover:text-foreground">Sobre Nós</Link></li>
            <li><Link to="/contactos" className="hover:text-foreground">Contactos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Contactos</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 text-brand" /> geral@nextech.pt</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 shrink-0 text-brand" /> +351 210 000 000</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand" /> Lisboa, Portugal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} NexTech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
