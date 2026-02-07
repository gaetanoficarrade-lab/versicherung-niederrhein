import { motion } from "framer-motion";
import { Scale, Check, ArrowRight, FileText, Briefcase, Car, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-rechtsschutz.jpg";

const benefits = [
  "Absicherung bei Rechtsstreitigkeiten",
  "Kostenübernahme für Anwalt und Gericht",
  "Weltweiter Schutz möglich",
  "Verschiedene Bausteine kombinierbar",
];

const coverageAreas = [
  {
    icon: Briefcase,
    title: "Berufsrechtsschutz",
    description: "Schutz bei arbeitsrechtlichen Streitigkeiten mit dem Arbeitgeber",
  },
  {
    icon: Car,
    title: "Verkehrsrechtsschutz",
    description: "Absicherung bei Unfällen und Streitigkeiten im Straßenverkehr",
  },
  {
    icon: Home,
    title: "Wohnrechtsschutz",
    description: "Unterstützung bei Mietstreitigkeiten und Nachbarschaftskonflikten",
  },
  {
    icon: FileText,
    title: "Vertragsrechtsschutz",
    description: "Hilfe bei Problemen mit Verträgen und Kaufangelegenheiten",
  },
];

const faqs = [
  {
    question: "Was ist versichert?",
    answer: "Alle rechtlichen Belange können grundsätzlich versichert werden. Je nach Bedarf können für verschiedene juristische Bereiche spezielle Versicherungen abgeschlossen werden – vom Arbeitsrecht über Verkehrsrecht bis hin zum Mietrecht.",
  },
  {
    question: "Welche Kosten werden übernommen?",
    answer: "Die Rechtsschutzversicherung übernimmt in der Regel die Kosten für Anwälte, Gerichtsgebühren, Zeugengelder und Sachverständige. Auch die Kosten der Gegenseite werden übernommen, falls du den Prozess verlierst.",
  },
  {
    question: "Gibt es Wartezeiten?",
    answer: "Ja, für die meisten Bereiche gilt eine Wartezeit von 3 Monaten. Im Verkehrsrechtsschutz gibt es in der Regel keine Wartezeit. Bei Arbeitsrechtsschutz beträgt die Wartezeit oft 3-6 Monate.",
  },
  {
    question: "Wer ist mitversichert?",
    answer: "In Familientarifen sind in der Regel der Ehepartner/Lebenspartner und alle minderjährigen Kinder mitversichert. Volljährige Kinder können unter bestimmten Voraussetzungen (z.B. Ausbildung) weiter mitversichert sein.",
  },
];

export default function Rechtsschutzversicherung() {
  return (
    <Layout>
      <InsuranceHero
        icon={Scale}
        title="Rechtsschutzversicherung"
        description="Ein Rechtsstreit kostet immer Geld. Mit einer Rechtsschutzversicherung kannst du dein Recht durchsetzen – ohne Angst vor den Kosten."
        heroImage={heroImage}
      />

      {/* Benefits & Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Dein Gegner muss Kosten nur übernehmen, wenn er vor Gericht verliert. 
                Daher scheuen viele solch eine Auseinandersetzung aus Angst vor den 
                entstehenden Kosten – und das selbst wenn sie im Recht sind. Eine 
                Rechtsschutzversicherung kann sämtliche Kosten für alle Rechtsstreitigkeiten 
                abdecken, die du führen musst.
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

            {/* Coverage Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Absicherungsbereiche:</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
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
                Finde den passenden Rechtsschutz
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und finde die optimale Absicherung für deine Bedürfnisse.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=rechtsschutz"
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
                Häufige Fragen zur Rechtsschutzversicherung
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
