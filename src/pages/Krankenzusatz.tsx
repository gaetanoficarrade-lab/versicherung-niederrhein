import { motion } from "framer-motion";
import { Heart, Check, ArrowRight, Stethoscope, Smile, Eye, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const benefits = [
  "Individuelle Absicherung nach Bedarf",
  "Bessere Leistungen im Krankheitsfall",
  "Verschiedene Bausteine kombinierbar",
  "Ergänzung zur gesetzlichen Krankenversicherung",
];

const coverageTypes = [
  {
    icon: Smile,
    title: "Zahnzusatz",
    description: "Höhere Erstattung bei Zahnersatz und Behandlungen",
  },
  {
    icon: BedDouble,
    title: "Krankenhaus",
    description: "Ein-/Zweibettzimmer und Chefarztbehandlung",
  },
  {
    icon: Eye,
    title: "Sehhilfen & Heilpraktiker",
    description: "Zuschüsse für Brillen und alternative Medizin",
  },
  {
    icon: Stethoscope,
    title: "Krankentagegeld",
    description: "Einkommensabsicherung bei längerer Krankheit",
  },
];

const faqs = [
  {
    question: "Wer sollte eine Zusatzversicherung abschließen?",
    answer: "Jeder, der die Leistungslücken der gesetzlichen Krankenversicherung schließen möchte. Besonders sinnvoll ist eine Zusatzversicherung für Zähne, Brille oder bei Wunsch nach besserer Versorgung im Krankenhaus.",
  },
  {
    question: "Welche Zusatzversicherungen gibt es?",
    answer: "Die wichtigsten sind: Zahnzusatzversicherung, Krankenhauszusatzversicherung, Heilpraktikerversicherung, Brillenversicherung, Pflegezusatzversicherung und Auslandsreisekrankenversicherung.",
  },
  {
    question: "Kann ich mehrere Zusatzversicherungen kombinieren?",
    answer: "Ja, du kannst verschiedene Bausteine nach deinem Bedarf kombinieren. Viele Versicherer bieten auch Kombi-Tarife an, die mehrere Leistungen bündeln.",
  },
];

export default function Krankenzusatz() {
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
                <Heart className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Krankenzusatzversicherung
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die gesetzlichen Krankenkassen decken nicht alles ab. Ergänze deinen 
              Schutz individuell – für bessere Leistungen im Krankheitsfall.
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
                Die gesetzlichen Krankenkassen decken nicht das gesamte Feld der 
                Gesundheitsvorsorge ab. Daher kann in verschiedenen Bereichen eine 
                Zusatzversicherung sinnvoll sein – von der Zahnversorgung bis zur 
                Chefarztbehandlung.
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

            {/* Coverage Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Beliebte Zusatzversicherungen:</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {coverageTypes.map((type, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Bessere Leistungen für deine Gesundheit
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Zusatzversicherungen und finde den passenden Schutz für dich.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=ambulantzusatz&m=maklerkalkar&p=pkv"
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

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-xl px-6 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
