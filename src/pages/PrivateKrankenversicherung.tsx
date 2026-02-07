import { motion } from "framer-motion";
import { Stethoscope, Check, ArrowRight, Sparkles, Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-krankenversicherung.jpg";

const benefits = [
  "Individuelle Tarifgestaltung",
  "Bessere Leistungen als gesetzlich",
  "Kürzere Wartezeiten beim Arzt",
  "Chefarztbehandlung möglich",
];

const advantages = [
  {
    icon: Sparkles,
    title: "Bessere Leistungen",
    description: "Zugang zu modernsten Behandlungsmethoden",
  },
  {
    icon: Clock,
    title: "Kürzere Wartezeiten",
    description: "Schnellere Termine bei Fachärzten",
  },
  {
    icon: Wallet,
    title: "Beitragsersparnis",
    description: "Oft günstiger als die gesetzliche Versicherung",
  },
];

const faqs = [
  {
    question: "Wer kann sich privat versichern?",
    answer: "Privat krankenversichern können sich Selbstständige, Freiberufler, Beamte und Angestellte mit einem Einkommen über der Versicherungspflichtgrenze (2024: 69.300 Euro brutto jährlich).",
  },
  {
    question: "Was ist zu beachten?",
    answer: "Bei der privaten Krankenversicherung werden Gesundheitsfragen gestellt. Vorerkrankungen können zu Risikozuschlägen führen. Auch das Alter beeinflusst den Beitrag. Eine Rückkehr in die gesetzliche Krankenversicherung ist nur unter bestimmten Voraussetzungen möglich.",
  },
  {
    question: "Wie kann ich wechseln?",
    answer: "Der Wechsel erfolgt durch Kündigung der bisherigen Versicherung und Abschluss eines neuen Vertrags. Wir unterstützen dich dabei und prüfen, ob ein Wechsel für dich sinnvoll ist.",
  },
];

export default function PrivateKrankenversicherung() {
  return (
    <Layout>
      <SEO />
      <InsuranceHero
        icon={Stethoscope}
        title="Private Krankenversicherung"
        description="Mit dem Wechsel in die private Krankenversicherung kannst du Geld sparen und bessere Leistungen erhalten. Ein Vergleich lohnt sich!"
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
                Die private Krankenversicherung bietet den Vorteil, dass sie an deine 
                Bedürfnisse angepasst werden kann. Durch diese Möglichkeiten können die 
                Kosten gesenkt oder die Leistungen gegenüber der gesetzlichen Krankenkasse 
                verbessert werden.
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

            {/* Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <advantage.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
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
                Vergleiche jetzt die besten Tarife
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Finde die passende private Krankenversicherung für deine Bedürfnisse.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=pkvgkv&m=maklerkalkar&p=pkv"
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
