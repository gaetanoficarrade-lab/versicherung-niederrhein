import { motion } from "framer-motion";
import { Sun, Check, ArrowRight, Flame, Wind, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-photovoltaik.jpg";

const benefits = [
  "Direkter Onlineabschluss",
  "Spezielle Produkte zu günstigen Konditionen",
  "Individuell angepasster Versicherungsschutz",
  "Ertragsausfallversicherung möglich",
];

const risks = [
  {
    icon: Flame,
    title: "Feuer & Blitzschlag",
    description: "Schutz vor Brand- und Blitzschäden",
  },
  {
    icon: Wind,
    title: "Sturm & Hagel",
    description: "Absicherung gegen Unwetterschäden",
  },
  {
    icon: Shield,
    title: "Diebstahl & Vandalismus",
    description: "Schutz vor Einbruch und mutwilliger Beschädigung",
  },
  {
    icon: Zap,
    title: "Ertragsausfall",
    description: "Entschädigung bei Produktionsausfall",
  },
];

export default function PhotovoltaikVersicherung() {
  return (
    <Layout>
      <InsuranceHero
        icon={Sun}
        title="Photovoltaik-Versicherung"
        description="Schütze deine Investition in die Zukunft. Eine Photovoltaikanlage ist eine erhebliche Investition – sichere sie richtig ab."
        heroImage={heroImage}
      />

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
                Die Anschaffung einer Photovoltaikanlage ist immer mit hohen Kosten verbunden. 
                Daher ist es entscheidend, dass die Anlage reibungslos läuft und sich die 
                Investition selbst trägt. Ein unvorhersehbarer Schaden kann die ganze 
                Finanzierung oder eingeplante Rendite in Frage stellen.
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

            {/* Risks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Abgesicherte Risiken:</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {risks.map((risk, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <risk.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{risk.title}</h3>
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/30 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Weitere abgedeckte Gefahren
              </h3>
              <p className="text-muted-foreground">
                Neben den Hauptrisiken können auch Schäden durch Tierverbiss, Erdbeben, 
                Schneedruck, Überspannung und Bedienungsfehler abgesichert werden. Durch 
                die richtige Deckung kann auch ein möglicher Ertragsausfall abgesichert werden.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-primary/5 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Sichere deine Solaranlage ab
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und finde den optimalen Schutz für deine Photovoltaikanlage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=angebot&m=maklerkalkar&p=photovoltaik"
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
