import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo-azimute.png.asset.json";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Azimute IT" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">{t("footer.navTitle")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-foreground">{t("nav.about")}</Link></li>
            <li><a href="/#servicos" className="hover:text-foreground">{t("nav.services")}</a></li>
            <li><Link to="/artigos" className="hover:text-foreground">{t("nav.articles")}</Link></li>
            <li><Link to="/contactos" className="hover:text-foreground">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">{t("footer.contactsTitle")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 shrink-0 text-brand" /> contacto@azimuteit.pt</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 shrink-0 text-brand" /> 967 642 199</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand" /> Rua Manuel Luis da Costa.<br />Costa da Caparica - Almada - Setúbal.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Azimute IT — {t("footer.rights")}
      </div>
    </footer>
  );
}
