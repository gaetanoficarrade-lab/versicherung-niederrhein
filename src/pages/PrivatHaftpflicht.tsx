import { motion } from "framer-motion";
import { Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-privathaftpflicht.jpg";

const benefits = [
  "Schutz für dich und dein Vermögen",
  "Weltweiter Schutz rund um die Uhr",
  "Deckungssummen bis zu mehreren Millionen Euro",
  "Schutz vor unberechtigten Ansprüchen",
];

const faqs = [
  {
    question: "Wer braucht eine Private Haftpflichtversicherung?",
    answer: "Jeder Erwachsene und jede Familie sollten über eine Haftpflichtversicherung verfügen. Sie schützt umfangreich vor den Gefahren des Alltags – denn schon kleine Unachtsamkeiten können große Schäden verursachen.",
  },
  {
    question: "Wer ist mitversichert?",
    answer: "Der Versicherungsschutz kann auf den Ehepartner und die eigenen Kinder erweitert werden. Kinder können bis zum Ende der Erstausbildung mitversichert sein. Bei manchen Tarifen werden auch Haushaltshilfen mitversichert.",
  },
  {
    question: "Was ist versichert?",
    answer: "Die Privathaftpflicht deckt Personen-, Sach- und Vermögensschäden ab, die du anderen unbeabsichtigt zufügst. Dazu gehören z.B. zerbrochene Brillen, beschädigte Laptops oder Verletzungen durch Unachtsamkeit.",
  },
  {
    question: "Wie hoch sollte die Deckungssumme sein?",
    answer: "Wir empfehlen eine Deckungssumme von mindestens 5 Millionen Euro für Personen- und Sachschäden. Bei Personenschäden können schnell hohe Summen entstehen – eine ausreichende Absicherung ist daher wichtig.",
  },
  {
    question: "Was ist nicht versichert?",
    answer: "Nicht versichert sind in der Regel vorsätzlich verursachte Schäden, Schäden durch motorisierte Fahrzeuge (dafür gibt es die Kfz-Haftpflicht) und Schäden an geliehenen Sachen (außer bei speziellen Tarifen).",
  },
];

export default function PrivatHaftpflicht() {
  return (
    <Layout>
      <InsuranceHero
        icon={Shield}
        title="Private Haftpflichtversicherung"
        description="Die wichtigste Versicherung für jeden Haushalt. Schützt dich vor finanziellen Folgen, wenn du anderen einen Schaden zufügst."
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
                Die Private Haftpflichtversicherung schützt dich vor finanziellen Folgen, 
                wenn du einen Schaden bei einer anderen Person verursacht hast. Sie regelt 
                die entstandenen Schäden und schützt dich vor unberechtigten Ansprüchen – 
                im Zweifel auch vor Gericht.
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Finde die passende Haftpflichtversicherung
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und spare bares Geld – bei gleichem oder besserem Schutz.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=privathaftpflicht"
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen zur Privathaftpflicht
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
