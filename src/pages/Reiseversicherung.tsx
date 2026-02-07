import { motion } from "framer-motion";
import { Plane, Check, ArrowRight, Luggage, Heart, Ban, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const benefits = [
  "Weltweiter Schutz für alle Reisearten",
  "Flexible Einzel- oder Jahresverträge",
  "Schnelle Schadenabwicklung",
  "Umfassender Reiseschutz für die ganze Familie",
];

const coverageTypes = [
  {
    icon: Ban,
    title: "Reiserücktritt",
    description: "Erstattung bei Stornierung vor Reiseantritt",
  },
  {
    icon: Calendar,
    title: "Reiseabbruch",
    description: "Schutz bei vorzeitiger Rückkehr",
  },
  {
    icon: Luggage,
    title: "Reisegepäck",
    description: "Ersatz bei Verlust oder Beschädigung",
  },
  {
    icon: Heart,
    title: "Reise-Krankenversicherung",
    description: "Medizinische Versorgung inkl. Rücktransport",
  },
];

const travelTypes = [
  "Campingurlaub",
  "Ferienwohnungen & -häuser",
  "Weltweite Urlaubsreisen",
  "Bahn-, Flug- oder Autoreisen",
  "Urlaubsreisen über mehrere Wochen",
  "Reisegruppen",
  "Au-Pair-Aufenthalte",
];

export default function Reiseversicherung() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm" />
              <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <Plane className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Reiseversicherungen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eine geplante Reise ist ein besonderes Erlebnis. Sichere dich gegen 
              unvorhergesehene Ereignisse ab – damit du entspannt genießen kannst.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Je nach Art der Reise und der Dauer sind besondere finanzielle Risiken zu 
                berücksichtigen. Es kann unerwartet passieren, dass du die Reise abbrechen 
                musst oder gar nicht erst antreten kannst. Deshalb sollten die möglichen 
                Risiken einer Reise entsprechend abgesichert werden.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Deine Vorteile:</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coverage Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Absicherungsprodukte:</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {coverageTypes.map((type, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Travel Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/30 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Umfangreiche Absicherung für:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {travelTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-primary/5 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Entspannt in den Urlaub starten
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Reiseversicherungen und finde den passenden Schutz für deine nächste Reise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://rechner.travelsecure.de/schnellerfassung/default.aspx?partnerid=1-8-1133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    Jetzt vergleichen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <Link to="/kontakt">
                  <Button variant="outline" size="lg">
                    Persönliche Beratung
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
