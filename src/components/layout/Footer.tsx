import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Download } from "lucide-react";
import logo from "@/assets/logo-new.png";

const footerLinks = {
  unternehmen: [
    { name: "Geschichte", href: "/geschichte" },
    { name: "Besonderheiten", href: "/besonderheiten" },
    { name: "Team", href: "/team" },
  ],
  privatversicherungen: [
    { name: "KFZ", href: "/kfz-versicherung" },
    { name: "Hausrat", href: "/hausratversicherung" },
    { name: "Haftpflicht", href: "/privat-haftpflicht" },
    { name: "Rechtsschutz", href: "/rechtsschutzversicherung" },
    { name: "Wohngebäude", href: "/wohngebaeudeversicherung" },
  ],
  vorsorge: [
    { name: "Berufsunfähigkeit", href: "/berufsunfaehigkeit" },
    { name: "Unfall", href: "/unfallversicherung" },
    { name: "PKV", href: "/private-krankenversicherung" },
    { name: "Rente", href: "/rentenversicherung" },
  ],
  gewerbe: [
    { name: "Betriebshaftpflicht", href: "/betriebshaftpflicht" },
    { name: "Berufshaftpflicht", href: "/berufshaftpflicht" },
    { name: "D&O", href: "/do-versicherung" },
  ],
};

export default function Footer() {
  useEffect(() => {
    const container = document.getElementById("pe_footer_badge");
    if (!container) return;

    // Create the anchor the badge script targets
    const anchor = document.createElement("a");
    anchor.id = "pe_badge_ebpfnhkn";
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    container.appendChild(anchor);

    // Load the badge script
    const script = document.createElement("script");
    script.src =
      "https://www.provenexpert.com/badge/topservice.js?id=2HGAkZaphW3p282olRQBiAwZjLGAkVwo&w=180&key=ebpfnhkn&l=de-de";
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="section-container py-10">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Company info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Smits & Kollegen Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="text-base font-semibold">Smits & Kollegen</span>
                <span className="block text-xs opacity-70">Versicherungsmakler</span>
              </div>
            </div>
            <p className="text-xs opacity-70 mb-4 max-w-xs">
              Ihr unabhängiger Versicherungsmakler am Niederrhein.
            </p>
            <div className="flex items-center gap-4 text-xs opacity-70">
              <a href="tel:02824809293" className="hover:opacity-100 flex items-center gap-1">
                <Phone className="h-3 w-3" />
                02824-809293
              </a>
              <a 
                href="https://www.facebook.com/SmitsundKollegen/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-50">
              Unternehmen
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Privat */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-50">
              Privat
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.privatversicherungen.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vorsorge */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-50">
              Vorsorge
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.vorsorge.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gewerbe */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-50">
              Gewerbe
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.gewerbe.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Smits Versicherungsmakler GmbH & Co. KG
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/impressum" className="opacity-40 hover:opacity-100 transition-opacity">
                Impressum
              </Link>
              <Link to="/datenschutz" className="opacity-40 hover:opacity-100 transition-opacity">
                Datenschutz
              </Link>
              <Link to="/kontakt" className="opacity-40 hover:opacity-100 transition-opacity">
                Kontakt
              </Link>
              <a
                href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 opacity-40 hover:opacity-100 transition-opacity"
              >
                <Download className="h-3 w-3" />
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
          <p className="text-[10px] opacity-30 text-center mt-3">
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
    </footer>
  );
}
