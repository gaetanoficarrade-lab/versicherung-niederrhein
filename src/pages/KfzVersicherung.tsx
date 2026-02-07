import { motion } from "framer-motion";
import { Car, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import heroImage from "@/assets/hero-kfz.jpg";

const benefits = [
  "Direkter Onlineabschluss",
  "Vergleich zahlreicher Anbieter",
  "Sondertarife, die zu dir passen",
  "Anpassung und Neubewertung der Versicherung durch uns",
];

const faqs = [
  {
    question: "Wann kann ich meine Kfz-Versicherung wechseln?",
    answer: "Die ordentliche Kündigung zum Vertragsende kann meist bis spätestens einen Monat vor Hauptfälligkeit ausgesprochen werden. Der Stichtag ist in aller Regel der 30.11. des laufenden Kalenderjahres. Eine vorzeitige Kündigung kann in einigen Fällen ausgesprochen werden: nach Ablauf eines Versicherungsjahres, nach jedem Schadensfall, bei einer Beitragserhöhung oder bei Änderung der Typklasse.",
  },
  {
    question: "Was ist eine Kfz-Haftpflichtversicherung?",
    answer: "Bei jedem Kraftfahrzeug, das am öffentlichen Straßenverkehr teilnimmt, muss eine Haftpflichtversicherung (Gesetzliche Mindestdeckung) bestehen. Die Kfz-Haftpflicht schützt den Fahrer, wenn er mit seinem Fahrzeug andere Personen oder deren Eigentum schädigt.",
  },
  {
    question: "Was ist eine Teilkaskoversicherung?",
    answer: "Die Teilkasko ersetzt Schäden an deinem Auto, die unabhängig von einem Unfall entstehen. In der Regel sind Glasbruchschäden, Elementarschäden, Tierverbiss oder Schäden durch Zusammenstöße mit Tieren mitversichert.",
  },
  {
    question: "Was ist eine Vollkaskoversicherung?",
    answer: "Die Vollkasko versichert alle Leistungen der Teilkasko. Zusätzlich übernimmt die Vollkasko die Kosten für Schäden an deinem Fahrzeug, die durch ein Unfall entstanden sind, unabhängig davon, ob du den Unfall selbst verschuldet hast.",
  },
];

export default function KfzVersicherung() {
  return (
    <Layout>
      <InsuranceHero
        icon={Car}
        title="KFZ-Versicherung"
        description="Besonders bei der Kfz-Versicherung lässt sich viel sparen. Darunter sollte der gebotene Versicherungsschutz allerdings nicht leiden."
        heroImage={heroImage}
      />

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Ein rechtzeitiger Wechsel der Kfz-Versicherung kann mehrere hundert Euro 
                einsparen und trotzdem den gewohnten Schutz bieten. Sichere dir die 
                passende Versicherung für dein Fahrzeug zum optimalen Preis-Leistungsverhältnis.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Deine Vorteile:</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 text-center mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Kfz-Versicherungsvergleich – So einfach geht's
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Bei den Vergleichen werden die verschiedenen Preise und Leistungen ausführlich 
                  berücksichtigt. Gib einfach alle benötigten Daten in unseren Vergleichsrechner ein.
                </p>
                <a
                  href="https://landingpage.vema-eg.de/?m=maklerkalkar&p=kfz&z=kfzrechner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    Jetzt vergleichen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen zur KFZ-Versicherung
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
