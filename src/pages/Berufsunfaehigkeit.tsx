import { motion } from "framer-motion";
import { Briefcase, Check, ArrowRight, AlertTriangle, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-berufsunfaehigkeit.jpg";

const benefits = [
  "Absicherung deines Lebensstandards",
  "Individuelle Rentenhöhe wählbar",
  "Schutz bei Unfall und Krankheit",
  "Flexible Vertragslaufzeiten",
];

const facts = [
  {
    icon: AlertTriangle,
    title: "Jeder Vierte betroffen",
    description: "Etwa 25% aller Berufstätigen werden vor dem Rentenalter berufsunfähig",
  },
  {
    icon: Heart,
    title: "Psyche als Hauptursache",
    description: "Psychische Erkrankungen sind heute die häufigste Ursache für Berufsunfähigkeit",
  },
  {
    icon: TrendingUp,
    title: "Geringe staatliche Absicherung",
    description: "Die Erwerbsminderungsrente reicht oft nicht aus, um den Lebensstandard zu halten",
  },
];

export default function Berufsunfaehigkeit() {
  const serviceSchema = createServiceSchema({
    name: "Berufsunfähigkeitsversicherung",
    description: "Absicherung des Einkommens bei Berufsunfähigkeit durch Unfall oder Krankheit.",
    url: "/berufsunfaehigkeit"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Berufsunfähigkeitsversicherung", url: "/berufsunfaehigkeit" }
  ]);

  return (
    <Layout>
      <SEO
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [serviceSchema, breadcrumbSchema]
        }}
      />
      <InsuranceHero
        icon={Briefcase}
        title="Berufsunfähigkeitsversicherung"
        description="Deine Arbeitskraft ist dein wertvollstes Gut. Sichere sie ab – denn nur wer über die richtige Absicherung verfügt, kann seinen Lebensstandard dauerhaft halten."
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
                In Folge eines Unfalls oder einer Krankheit kann in manchen Fällen der 
                Beruf nicht länger ausgeübt werden. Die Berufsunfähigkeitsversicherung 
                zahlt dir dann eine monatliche Rente, mit der du deinen Lebensunterhalt 
                bestreiten kannst.
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

            {/* Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Warum eine BU wichtig ist:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {facts.map((fact, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <fact.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground">{fact.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/30 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Individuelle Prüfung
              </h3>
              <p className="text-muted-foreground">
                Bei der Berufsunfähigkeitsversicherung berücksichtigen die Versicherer 
                zahlreiche Faktoren. Dein Beruf, Gesundheitszustand und Hobbys spielen 
                eine wichtige Rolle. Wir vergleichen die verschiedenen Bedingungen der 
                einzelnen Gesellschaften und finden die beste Lösung für dich.
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
                Sichere deine Arbeitskraft ab
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Je früher du dich absicherst, desto günstiger sind die Beiträge. Lass dich jetzt beraten.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?m=maklerkalkar&p=arbeitskraftabsicherung"
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
