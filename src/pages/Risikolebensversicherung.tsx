import { motion } from "framer-motion";
import { Heart, Check, ArrowRight, Users, Building2, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lebensversicherung.jpg";

const benefits = [
  "Direkter Onlineabschluss",
  "Vergleich verschiedener Anbieter",
  "Sondertarife, die zu dir passen",
  "Flexible Versicherungssumme",
];

const useCases = [
  {
    icon: Users,
    title: "Familienabsicherung",
    description: "Finanzielle Sicherheit für deine Liebsten im Ernstfall",
  },
  {
    icon: Building2,
    title: "Kreditabsicherung",
    description: "Schutz für Immobilienfinanzierungen und Darlehen",
  },
  {
    icon: Baby,
    title: "Kindervorsorge",
    description: "Absicherung der Kinder, falls den Eltern etwas zustößt",
  },
];

export default function Risikolebensversicherung() {
  return (
    <Layout>
      <InsuranceHero
        icon={Heart}
        title="Risikolebensversicherung"
        description="Schütze deine Liebsten finanziell ab – für den Fall, dass dir etwas zustößt. Günstige Beiträge für maximale Sicherheit."
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
                Eine Risikolebensversicherung schützt die Hinterbliebenen, hilft bei einer 
                Kreditabsicherung und wird auch gerne als Partnerversicherung im 
                Geschäftsleben verwandt. Im Todesfall wird die vereinbarte Versicherungssumme 
                ausgezahlt – der Begünstigte kann frei gewählt werden.
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

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Wofür ist eine Risikoleben sinnvoll?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
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
                Besonders empfehlenswert für
              </h3>
              <p className="text-muted-foreground">
                Diese Form der Absicherung empfiehlt sich besonders für Familien mit Kindern, 
                wenn den Eltern etwas zustoßen sollte, oder für unverheiratete Paare, bei denen 
                kein Anspruch auf Rentenleistungen besteht. Auch für Geschäftspartner kann eine 
                Risikolebensversicherung sinnvoll sein.
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
                Sichere deine Familie ab
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und finde den passenden Schutz zu günstigen Konditionen.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="http://www.mr-money.de/module/rlv/start.php?id=00102005"
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
