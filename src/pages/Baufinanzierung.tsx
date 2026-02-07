import { motion } from "framer-motion";
import { Building2, Check, ArrowRight, Calculator, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-baufinanzierung.jpg";

const benefits = [
  "Persönliche Beratung vor Ort",
  "Vergleich von über 200 Darlehensgebern",
  "Kostenloser Service für dich",
  "Maßgeschneiderte Finanzierungslösungen",
];

const services = [
  {
    icon: Building2,
    title: "Neubaudarlehen",
    description: "Finanzierung für den Bau deines Traumhauses",
  },
  {
    icon: Clock,
    title: "Anschlussdarlehen",
    description: "Günstige Konditionen für die Weiterfinanzierung",
  },
  {
    icon: Calculator,
    title: "Forwarddarlehen",
    description: "Sichere dir schon heute die Zinsen für morgen",
  },
  {
    icon: Users,
    title: "Renovierungsdarlehen",
    description: "Finanzierung für Modernisierung und Umbau",
  },
];

export default function Baufinanzierung() {
  return (
    <Layout>
      <SEO />
      <InsuranceHero
        icon={Building2}
        title="Baufinanzierung"
        description="Wir optimieren deine Immobilienfinanzierung – mit persönlicher Beratung und dem Vergleich von über 200 Darlehensgebern."
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
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Du hast deine eigene Immobilie mit einem Kredit finanziert? Wenn diese 
                  Finanzierung schon in den nächsten Monaten oder auch erst in zwei bis 
                  drei Jahren ausläuft, kannst du das attraktive Zinsumfeld <strong>jetzt</strong> für 
                  deine Anschlussfinanzierung nutzen!
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-6">Das bieten wir dir:</h2>
              
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

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Unsere Finanzierungslösungen:</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
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
                Auch für kleinere Projekte
              </h3>
              <p className="text-muted-foreground mb-4">
                Du möchtest eine neue Küche, ein Wohnzimmer oder eine Solaranlage finanzieren? 
                Wir beraten dich auch hier und finden den optimalen Finanzierungsweg für dich!
              </p>
              <p className="text-muted-foreground">
                Lass dich bei der Darlehensverlängerung von uns beraten. Unser Service kostet 
                dich keinen Euro extra, spart aber eine Menge Zeit und Geld.
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
                Jetzt Beratungstermin vereinbaren
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Überzeuge dich selbst und vereinbare einen Termin für eine persönliche Beratung.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2">
                  Termin vereinbaren
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
