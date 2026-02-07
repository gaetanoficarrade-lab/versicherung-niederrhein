import { motion } from "framer-motion";
import { Building2, Check, ArrowRight, Shield, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-wohngebaeude.jpg";

const benefits = [
  "Schutz gegen Feuer, Sturm und Hagel",
  "Absicherung bei Leitungswasserschäden",
  "Übernahme von Reparaturkosten",
  "Wiederaufbau nach Totalschaden",
];

const coverages = [
  {
    icon: Flame,
    title: "Feuer",
    description: "Brand, Blitzschlag, Explosion und Implosion",
  },
  {
    icon: Shield,
    title: "Sturm & Hagel",
    description: "Schäden durch Unwetter ab Windstärke 8",
  },
  {
    icon: Droplets,
    title: "Leitungswasser",
    description: "Rohrbruch und austretendes Wasser",
  },
];

export default function Wohngebaeudeversicherung() {
  return (
    <Layout>
      <SEO />
      <InsuranceHero
        icon={Building2}
        title="Wohngebäudeversicherung"
        description="Dein Zuhause verdient den besten Schutz. Sichere dein Eigenheim gegen die wichtigsten Risiken ab."
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
                Eine Wohngebäudeversicherung schützt dein Eigenheim vor den finanziellen 
                Folgen von Schäden am Gebäude. Sie übernimmt die Kosten für Reparaturen 
                oder den Wiederaufbau – bei einem Totalschaden auch den kompletten Neubau.
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

            {/* Coverages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Versicherte Gefahren:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {coverages.map((coverage, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <coverage.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{coverage.title}</h3>
                    <p className="text-sm text-muted-foreground">{coverage.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/30 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Elementarschutz nicht vergessen
              </h3>
              <p className="text-muted-foreground">
                Überschwemmung, Starkregen und Erdrutsch sind in der Standardversicherung 
                oft nicht enthalten. Wir empfehlen die Erweiterung um den Elementarschutz – 
                besonders in gefährdeten Gebieten ist dieser unverzichtbar.
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
                Schütze dein Eigenheim
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Lass dich beraten und finde die optimale Absicherung für dein Zuhause.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2">
                  Beratung anfordern
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
