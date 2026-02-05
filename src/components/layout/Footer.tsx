import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Download } from "lucide-react";

const footerLinks = {
  unternehmen: [
    { name: "Unsere Geschichte", href: "/geschichte" },
    { name: "Was uns besonders macht", href: "/besonderheiten" },
    { name: "Ihre Ansprechpartner", href: "/team" },
  ],
  versicherungen: [
    { name: "KFZ-Versicherung", href: "/kfz-versicherung" },
    { name: "Tierhalterhaftpflicht", href: "/tierhalterhaftpflicht" },
    { name: "Hausratversicherung", href: "/hausratversicherung" },
  ],
  service: [
    { name: "Service-Center", href: "/service" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <span className="text-lg font-semibold">Smits & Kollegen</span>
                <span className="block text-xs opacity-70">Versicherungsmakler</span>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-6">
              Ihr unabhängiger Versicherungsmakler am Niederrhein. 
              Seit Jahren vertrauen uns Kunden ihre Absicherung an.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SmitsundKollegen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Das Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Das Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Versicherungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Versicherungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.versicherungen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 opacity-70 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-70">
                  Markt 3<br />
                  47546 Kalkar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70 flex-shrink-0" />
                <a href="tel:02824809293" className="text-sm opacity-70 hover:opacity-100">
                  02824-809293
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70 flex-shrink-0" />
                <a href="mailto:info@makler-kalkar.de" className="text-sm opacity-70 hover:opacity-100">
                  info@makler-kalkar.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 opacity-70 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-70">
                  Mo-Fr: 9:00 - 12:30 Uhr<br />
                  Mo-Do: 15:00 - 17:30 Uhr
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-50">
              © {new Date().getFullYear()} Smits Versicherungsmakler GmbH & Co. KG. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                Datenschutz
              </Link>
              <a
                href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                <Download className="h-4 w-4" />
                PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
