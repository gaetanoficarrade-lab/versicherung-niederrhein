import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Download } from "lucide-react";
import logo from "@/assets/logo-new.png";

const footerLinks = {
  unternehmen: [
    { name: "Unsere Geschichte", href: "/geschichte" },
    { name: "Was uns besonders macht", href: "/besonderheiten" },
    { name: "Ihre Ansprechpartner", href: "/team" },
  ],
  privatversicherungen: [
    { name: "KFZ-Versicherung", href: "/kfz-versicherung" },
    { name: "Hausratversicherung", href: "/hausratversicherung" },
    { name: "Tierhalterhaftpflicht", href: "/tierhalterhaftpflicht" },
    { name: "Rechtsschutzversicherung", href: "/rechtsschutzversicherung" },
    { name: "Privathaftpflicht", href: "/privat-haftpflicht" },
    { name: "Wohngebäudeversicherung", href: "/wohngebaeudeversicherung" },
  ],
  vorsorge: [
    { name: "Berufsunfähigkeit", href: "/berufsunfaehigkeit" },
    { name: "Unfallversicherung", href: "/unfallversicherung" },
    { name: "Private Krankenversicherung", href: "/private-krankenversicherung" },
    { name: "Rentenversicherung", href: "/rentenversicherung" },
    { name: "Risikolebensversicherung", href: "/risikolebensversicherung" },
  ],
  gewerbe: [
    { name: "Betriebshaftpflicht", href: "/betriebshaftpflicht" },
    { name: "Berufshaftpflicht", href: "/berufshaftpflicht" },
    { name: "Fuhrparkversicherung", href: "/fuhrparkversicherung" },
    { name: "Gewerbliche Gebäude", href: "/gewerbliche-gebaeude" },
    { name: "D&O Versicherung", href: "/do-versicherung" },
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
              <img 
                src={logo} 
                alt="Smits & Kollegen Logo" 
                className="h-12 w-12 object-contain"
              />
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

          {/* Privatversicherungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Privatversicherungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.privatversicherungen.map((link) => (
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

          {/* Vorsorge */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Vorsorge
            </h3>
            <ul className="space-y-3">
              {footerLinks.vorsorge.map((link) => (
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
        </div>

        {/* Second row for Gewerbe and Kontakt */}
        <div className="grid gap-12 md:grid-cols-3 mt-12 pt-12 border-t border-background/10">
          {/* Gewerbeversicherungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Gewerbeversicherungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.gewerbe.map((link) => (
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

          {/* Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Service
            </h3>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
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

      {/* ProvenExpert Widget */}
      <div className="section-container py-8 border-t border-background/10">
        <div className="flex justify-center">
          <noscript>
            <a 
              href="https://www.provenexpert.com/smits-kollegen/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=9dcc7b28-7d39-4156-a201-a87688acf47a" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Kundenbewertungen für Smits & Kollegen"
              className="text-primary hover:underline"
            >
              Mehr Infos
            </a>
          </noscript>
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
          {/* 
            =====================================================================
            WICHTIG / IMPORTANT - NICHT ENTFERNEN / DO NOT REMOVE
            =====================================================================
            Diese Zeile darf NICHT ohne schriftliche Genehmigung von 
            Gaetano Ficarra (gaetanoficarra.de) entfernt oder geändert werden.
            
            This line must NOT be removed or modified without written permission 
            from Gaetano Ficarra (gaetanoficarra.de).
            =====================================================================
          */}
          <div className="mt-4 text-center">
            <p className="text-xs opacity-40">
              Created by{" "}
              <a 
                href="https://gaetanoficarra.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                Gaetano Ficarra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
