import { motion } from "framer-motion";
import { Building2, Check, ArrowRight, Shield, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-gebaeude.jpg";

const benefits = [
  "Umfassender Gebäudeschutz",
  "Absicherung von Betriebseinrichtung",
  "Schutz bei Elementarschäden",
  "Mietausfalldeckung inklusive",
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

export default function GewerblicheGebaeude() {
  const serviceSchema = createServiceSchema({
    name: "Gewerbliche Gebäudeversicherung",
    description: "Schutz für Firmengebäude, Lagerhallen und Betriebsimmobilien.",
    url: "/gewerbliche-gebaeude"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Gewerbliche Gebäudeversicherung", url: "/gewerbliche-gebaeude" }
  ]);

  return (
    <Layout>
      <SEO
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [serviceSchema, breadcrumbSchema]
        }}
      />
      <BusinessInsuranceHero
        icon={Building2}
        title="Gewerbliche Gebäudeversicherung"
        description="Ihre Geschäftsimmobilie ist ein wesentlicher Bestandteil Ihres Unternehmens. Schützen Sie sie umfassend gegen alle relevanten Risiken."
        heroImage={heroImage}
      />

      {/* Content - Dark business style */}
      <section className="py-16 bg-[hsl(178,45%,35%)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Die gewerbliche Gebäudeversicherung schützt Ihre Geschäftsimmobilie 
                vor den finanziellen Folgen von Schäden. Ob Produktionshalle, Bürogebäude 
                oder Lagerhalle – wir finden die passende Absicherung für Ihre Bedürfnisse.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">Ihre Vorteile:</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-white">{benefit}</span>
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
              <h2 className="text-2xl font-bold text-white mb-6">Versicherte Gefahren:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {coverages.map((coverage, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white mb-4">
                      <coverage.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{coverage.title}</h3>
                    <p className="text-sm text-white/70">{coverage.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Elementarschutz für Gewerbeimmobilien
              </h3>
              <p className="text-white/70">
                Überschwemmung, Starkregen und Erdrutsch sind in der Standardversicherung 
                oft nicht enthalten. Gerade für Gewerbeimmobilien empfehlen wir dringend 
                die Erweiterung um den Elementarschutz – unabhängig von der Lage Ihres Gebäudes.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-white/10 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Schützen Sie Ihre Geschäftsimmobilie
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich beraten und finden Sie die optimale Absicherung für Ihre Gewerbeimmobilie.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2 bg-white text-[hsl(178,45%,20%)] hover:bg-white/90">
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
