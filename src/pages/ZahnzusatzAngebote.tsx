import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Phone, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import SEO from "@/components/SEO";

interface LeadData {
  vorname: string;
  nachname: string;
  email: string;
  geburtsdatum: string;
}

// Placeholder offers – will be replaced with Google Sheets data later
const offers = [
  {
    name: "Basis-Schutz",
    badge: null,
    price: "14,90",
    zahnersatz: "60 %",
    zahnbehandlung: "100 %",
    pzr: "100 € / Jahr",
    implantate: "60 %",
    inlays: "60 %",
    wartezeit: "8 Monate",
    features: [
      "Zahnersatz inkl. Implantate",
      "Professionelle Zahnreinigung",
      "Kunststofffüllungen",
    ],
  },
  {
    name: "Komfort-Schutz",
    badge: "Beliebteste Wahl",
    price: "27,50",
    zahnersatz: "80 %",
    zahnbehandlung: "100 %",
    pzr: "200 € / Jahr",
    implantate: "80 %",
    inlays: "80 %",
    wartezeit: "6 Monate",
    features: [
      "Alles aus Basis-Schutz",
      "Keramik-Verblendungen",
      "Höhere Erstattung für Implantate",
      "Funktionsanalyse",
    ],
  },
  {
    name: "Premium-Schutz",
    badge: "Maximaler Schutz",
    price: "42,90",
    zahnersatz: "100 %",
    zahnbehandlung: "100 %",
    pzr: "Unbegrenzt",
    implantate: "100 %",
    inlays: "100 %",
    wartezeit: "Keine",
    features: [
      "Alles aus Komfort-Schutz",
      "Vollkeramik & Veneers",
      "Keine Wartezeit",
      "Unbegrenzte Zahnreinigung",
      "Kieferorthopädie",
    ],
  },
];

export default function ZahnzusatzAngebote() {
  const navigate = useNavigate();
  const [lead, setLead] = useState<LeadData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("zahnzusatz_lead");
    if (!stored) {
      navigate("/zahnzusatzversicherung");
      return;
    }
    try {
      setLead(JSON.parse(stored));
    } catch {
      navigate("/zahnzusatzversicherung");
    }
  }, [navigate]);

  if (!lead) return null;

  const birthDate = new Date(lead.geburtsdatum);
  const age = Math.floor((Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <SEO />

      {/* Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Deine persönlichen Angebote
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hallo {lead.vorname}, hier sind deine Tarife
            </h1>
            <p className="text-lg text-muted-foreground">
              Basierend auf deinem Alter ({age} Jahre) haben wir 3 passende Tarife für dich zusammengestellt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={cn(
                  "relative rounded-2xl border p-8 flex flex-col",
                  i === 1
                    ? "border-primary shadow-lg ring-2 ring-primary/20 scale-[1.02]"
                    : "border-border"
                )}
              >
                {offer.badge && (
                  <span className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold",
                    i === 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  )}>
                    {i === 2 && <Crown className="h-3 w-3 inline mr-1" />}
                    {offer.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{offer.price} €</span>
                  <span className="text-muted-foreground ml-1">/ Monat</span>
                </div>

                {/* Key stats */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Zahnersatz</span>
                    <span className="font-semibold text-foreground">{offer.zahnersatz}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Implantate</span>
                    <span className="font-semibold text-foreground">{offer.implantate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Inlays/Onlays</span>
                    <span className="font-semibold text-foreground">{offer.inlays}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Zahnreinigung</span>
                    <span className="font-semibold text-foreground">{offer.pzr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Wartezeit</span>
                    <span className="font-semibold text-foreground">{offer.wartezeit}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8 flex-1">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={() => {
                    sessionStorage.setItem("zahnzusatz_tarif", offer.name);
                    navigate("/zahnzusatzversicherung/abschluss");
                  }}
                  className={cn(
                    "w-full gap-2",
                    i === 1
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  )}
                >
                  Tarif unverbindlich anfragen
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            * Die angezeigten Beiträge sind Richtwerte und können je nach individuellem Gesundheitszustand abweichen. 
            Für ein verbindliches Angebot kontaktiere uns persönlich.
          </p>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 hero-gradient">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Fragen zu deinem Angebot?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Ruf uns an oder schreib uns – wir helfen dir den passenden Tarif zu finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:02824809293">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2">
                  <Phone className="h-5 w-5" />
                  02824-809293 anrufen
                </Button>
              </a>
              <a href={`https://wa.me/4928248092930?text=${encodeURIComponent(`Hallo, ich bin ${lead.vorname} ${lead.nachname} und interessiere mich für eine Zahnzusatzversicherung. Können Sie mich beraten?`)}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2">
                  Per WhatsApp anfragen
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Landing Page Footer */}
      <footer className="bg-foreground text-background">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Smits Versicherungsmakler GmbH & Co. KG
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/impressum" className="opacity-40 hover:opacity-100 transition-opacity">Impressum</Link>
              <Link to="/datenschutz" className="opacity-40 hover:opacity-100 transition-opacity">Datenschutz</Link>
              <Link to="/erstinformation" className="opacity-40 hover:opacity-100 transition-opacity">Erstinformation</Link>
            </div>
          </div>
          {/* 
            =====================================================================
            WICHTIG / IMPORTANT - NICHT ENTFERNEN / DO NOT REMOVE
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
      </footer>
    </div>
  );
}
