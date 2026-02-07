import { motion } from "framer-motion";
import { Activity, Check, ArrowRight, Clock, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-unfall.jpg";

const benefits = [
  "Finanzielle Absicherung bei Unfällen",
  "Schutz rund um die Uhr – weltweit",
  "Leistungen bei Invalidität",
  "Flexible Tarifgestaltung",
];

const features = [
  {
    icon: Clock,
    title: "24/7 Schutz",
    description: "Absicherung in Beruf und Freizeit",
  },
  {
    icon: Globe,
    title: "Weltweiter Schutz",
    description: "Gilt auch auf Reisen im Ausland",
  },
  {
    icon: Users,
    title: "Familientarife",
    description: "Günstige Absicherung für die ganze Familie",
  },
];

const faqs = [
  {
    question: "Wozu brauche ich eine private Unfallversicherung?",
    answer: "Die meisten Unfälle passieren in der Freizeit, wo kein Schutz durch die gesetzliche Unfallversicherung besteht. Die private Unfallversicherung schließt diese Lücke und kann Einkommenseinbußen bei dauerhaften Gesundheitsschäden ausgleichen.",
  },
  {
    question: "Was ist ein Unfall?",
    answer: "Ein Unfall liegt vor, wenn du durch ein plötzlich von außen auf deinen Körper einwirkendes Ereignis unfreiwillig eine Gesundheitsschädigung erleidest. Das kann beim Sport, im Haushalt oder bei anderen Aktivitäten passieren.",
  },
  {
    question: "Welche Leistungen bietet eine Unfallversicherung?",
    answer: "Die wichtigste Leistung ist die Invaliditätsleistung bei dauerhafter Beeinträchtigung. Zusätzlich können Krankenhaustagegeld, Genesungsgeld, Todesfallleistung und Unfallrente vereinbart werden.",
  },
  {
    question: "Was ist nicht versichert?",
    answer: "Nicht versichert sind in der Regel Unfälle durch Bewusstseinsstörungen (z.B. Alkohol), vorsätzliche Handlungen oder Unfälle bei der Teilnahme an Straftaten. Auch Berufskrankheiten sind ausgeschlossen.",
  },
];

export default function Unfallversicherung() {
  return (
    <Layout>
      <SEO />
      <InsuranceHero
        icon={Activity}
        title="Unfallversicherung"
        description="Unfälle passieren schnell und unerwartet. Sichere dich gegen die finanziellen Folgen ab – denn oft sind längere Krankenhausaufenthalte oder Invalidität die Folge."
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Schütze dich vor den Folgen eines Unfalls
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und finde die optimale Absicherung für dich und deine Familie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?m=maklerkalkar&p=unfall"
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
                Häufige Fragen zur Unfallversicherung
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
