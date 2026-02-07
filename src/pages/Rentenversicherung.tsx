import { motion } from "framer-motion";
import { Wallet, Check, ArrowRight, Calendar, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const benefits = [
  "Vergleich zahlreicher Anbieter",
  "Sondertarife, die zu dir passen",
  "Individuelle Absicherung",
  "Verschiedene Vorsorgemodelle",
];

const options = [
  {
    icon: Calendar,
    title: "Private Rentenversicherung",
    description: "Klassische Vorsorge mit garantierter Rente",
  },
  {
    icon: TrendingUp,
    title: "Riester-Rente",
    description: "Staatlich geförderte Altersvorsorge",
  },
  {
    icon: ShieldCheck,
    title: "Rürup-Rente",
    description: "Basisrente für Selbstständige",
  },
];

export default function Rentenversicherung() {
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
                <Wallet className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rentenversicherung
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Auf eine zusätzliche finanzielle Absicherung fürs Alter kann heute niemand 
              mehr verzichten. Sorge jetzt vor – für einen sorgenfreien Ruhestand.
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
                Die staatliche Rente wird in vielen Fällen nicht ausreichen, um den 
                erreichten Lebensstandard zu halten. Das Problem: Es gibt immer weniger 
                Beitragszahler im Vergleich zu den Rentenbeziehern. Um der möglichen 
                Altersarmut vorzubeugen, sollte sich jeder Gedanken über eine zusätzliche 
                Form der Absicherung machen.
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

            {/* Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Möglichkeiten der Vorsorge:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {options.map((option, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <option.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
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
                Individuelle Beratung
              </h3>
              <p className="text-muted-foreground">
                Es gibt verschiedene Möglichkeiten, um für das Alter vorzusorgen. Welche 
                Möglichkeit für dich die richtige ist, muss individuell ermittelt werden. 
                Wir helfen dir dabei, die optimale Strategie zu finden – abgestimmt auf 
                deine Lebenssituation und Ziele.
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
                Starte jetzt mit der Altersvorsorge
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Je früher du anfängst, desto besser. Lass dich jetzt beraten.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?m=maklerkalkar&p=altersvorsorge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    Jetzt informieren
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
