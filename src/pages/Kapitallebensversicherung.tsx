import { motion } from "framer-motion";
import { PiggyBank, Check, ArrowRight, Shield, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-lebensversicherung.jpg";

const benefits = [
  "Vergleich zahlreicher Anbieter",
  "Sondertarife, die zu dir passen",
  "Individuelle Absicherung",
  "Flexible Vertragslaufzeiten",
];

const features = [
  {
    icon: Shield,
    title: "Todesfallschutz",
    description: "Hinterbliebene erhalten die Versicherungssumme",
  },
  {
    icon: TrendingUp,
    title: "Vermögensaufbau",
    description: "Ansparen von Kapital mit Verzinsung",
  },
  {
    icon: Wallet,
    title: "Ablaufleistung",
    description: "Auszahlung inkl. Überschussbeteiligung",
  },
];

export default function Kapitallebensversicherung() {
  return (
    <Layout>
      <SEO />
      <InsuranceHero
        icon={PiggyBank}
        title="Kapitallebensversicherung"
        description="Zwei Ziele mit einer Versicherung: Absicherung deiner Familie und gleichzeitiger Aufbau von Kapital für später."
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
                Eine Kapitallebensversicherung dient zur Absicherung der Familie und 
                gleichzeitigen Ansparung von Kapital. Im Todesfall erhalten die Hinterbliebenen 
                die vereinbarte Versicherungssumme. Da für die Kapitallebensversicherung eine 
                feste Laufzeit vereinbart wird, erhältst du am Ende das angesparte Kapital 
                inklusive einer Überschussbeteiligung.
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

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">So funktioniert's:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                Ideal für die Altersvorsorge
              </h3>
              <p className="text-muted-foreground">
                Jeden Monat werden Gelder einbezahlt, die angespart und verzinst werden. 
                Wenn die vereinbarte Laufzeit vorüber ist, wird das angesparte Kapital 
                inklusive einer Überschussbeteiligung ausgezahlt. Durch dieses Verfahren 
                eignet sich die Kapitallebensversicherung auch zur privaten Altersvorsorge.
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
                Lass dich beraten
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Finde die passende Kapitallebensversicherung für deine Ziele und Wünsche.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2">
                  Beratungstermin vereinbaren
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
