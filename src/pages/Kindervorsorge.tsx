import { motion } from "framer-motion";
import { Baby, Check, ArrowRight, Heart, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-kindervorsorge.jpg";

const benefits = [
  "Optimale Versorgung ab Geburt",
  "Leistungsstarke Zusatztarife",
  "Bezahlbare Beiträge für Familien",
  "Keine kassenspezifischen Einschränkungen",
];

const coverages = [
  {
    icon: Heart,
    title: "Zahngesundheit",
    description: "Kieferorthopädie und Zahnvorsorge für Kinder",
  },
  {
    icon: Activity,
    title: "Unfallschutz",
    description: "Absicherung bei Sport und Spielen",
  },
  {
    icon: Shield,
    title: "Krankenhauszusatz",
    description: "Bessere Versorgung bei stationärer Behandlung",
  },
];

export default function Kindervorsorge() {
  return (
    <Layout>
      <InsuranceHero
        icon={Baby}
        title="Kindervorsorge"
        description="Eltern werden ist nicht schwer, Eltern sein dagegen … Sichere dein Kind optimal ab – von Geburt an."
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
                Neben aller Freude über den Nachwuchs beginnt eine Zeit der Verantwortung. 
                Kinder brauchen ein liebevolles Zuhause, frühestmögliche Förderung und 
                fürsorgliche Eltern. Eine wichtige Aufgabe ist die Vorsorge – denn auch 
                in jungen Jahren können unvorhergesehene Ereignisse eintreten.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Das bieten wir:</h2>
              
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Wichtige Bausteine:</h2>
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

            {/* Special Product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/30 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                "Drei kleine Mäuschen" – Das Kinderprodukt
              </h3>
              <p className="text-muted-foreground mb-4">
                Viele Leistungen in einem Paket – das war das Ziel bei der Entwicklung 
                von "Drei kleine Mäuschen". Das Kinderprodukt mit drei leistungsstarken 
                Zusatztarifen zu Preisen, die sich jeder leisten kann.
              </p>
              <p className="text-muted-foreground">
                Unsere Mäuschen passen zu jedem Kind – schon ab der Geburt – das unter 
                dem Schutz einer gesetzlichen Krankenkasse (GKV) steht.
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
                Das Beste für dein Kind
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Lass dich beraten und finde die optimale Absicherung für deinen Nachwuchs.
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
