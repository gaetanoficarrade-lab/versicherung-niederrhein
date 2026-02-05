import { motion } from "framer-motion";
import { Home, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const benefits = [
  "Direkter Onlineabschluss",
  "Spezielle Produkte zu günstigen Konditionen",
  "Individuell angepasster Versicherungsschutz",
  "Dynamischer Schutz, der sich Ihrem Hausrat anpasst",
];

export default function Hausratversicherung() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-emerald-50 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
              <Home className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hausratversicherung
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ein Wasserschaden kommt fast immer unverhofft. Auch Einbrecher kündigen 
              ihren Besuch selten an. Schützen Sie sich vor großen unerwarteten Belastungen.
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
                Die Hausratversicherung umfasst Ihr gesamtes Eigentum, das sich in Ihren 
                Wohnräumen und allen dazugehörigen Räumen befindet. Durch einen Wasserschaden 
                oder einen Einbruch können Sie Ihren gesamten Besitz verlieren. Eine 
                Hausratversicherung sichert Sie gegen diese Schäden ab.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Ihre Vorteile:</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Finden Sie die passende Hausratversicherung
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Vergleichen Sie jetzt verschiedene Angebote und finden Sie den optimalen 
                  Schutz für Ihren Hausrat.
                </p>
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=hausrat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                    Jetzt vergleichen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
