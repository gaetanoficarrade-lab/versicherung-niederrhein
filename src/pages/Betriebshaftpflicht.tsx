import { motion } from "framer-motion";
import { Briefcase, Check, ArrowRight, Shield, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-betriebshaftpflicht.jpg";

const benefits = [
  "Schutz vor Haftungsansprüchen Dritter",
  "Absicherung von Personen- und Sachschäden",
  "Deckung von Vermögensschäden",
  "Individuelle Anpassung an Ihre Branche",
];

const coverages = [
  {
    icon: Shield,
    title: "Personenschäden",
    description: "Absicherung bei Verletzungen Dritter durch Ihre Geschäftstätigkeit",
  },
  {
    icon: FileText,
    title: "Sachschäden",
    description: "Deckung bei Beschädigung fremden Eigentums",
  },
  {
    icon: Users,
    title: "Vermögensschäden",
    description: "Schutz bei finanziellen Verlusten Dritter",
  },
];

const faqs = [
  {
    question: "Was deckt eine Betriebshaftpflichtversicherung ab?",
    answer: "Die Betriebshaftpflichtversicherung schützt Ihr Unternehmen vor Schadenersatzansprüchen Dritter. Sie deckt Personen-, Sach- und daraus resultierende Vermögensschäden ab, die im Rahmen Ihrer betrieblichen Tätigkeit entstehen.",
  },
  {
    question: "Wer braucht eine Betriebshaftpflichtversicherung?",
    answer: "Grundsätzlich jedes Unternehmen – vom Einzelunternehmer bis zum Großkonzern. Die Betriebshaftpflicht ist für viele Branchen unverzichtbar und oft auch Voraussetzung für Aufträge.",
  },
  {
    question: "Was kostet eine Betriebshaftpflichtversicherung?",
    answer: "Die Kosten hängen von verschiedenen Faktoren ab: Branche, Unternehmensgröße, Umsatz und gewünschter Deckungssumme. Wir erstellen Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Welche Deckungssumme ist sinnvoll?",
    answer: "Die empfohlene Deckungssumme variiert je nach Branche. In der Regel empfehlen wir mindestens 3-5 Millionen Euro für Personen- und Sachschäden. Für bestimmte Branchen können höhere Summen erforderlich sein.",
  },
];

export default function Betriebshaftpflicht() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Betriebshaftpflichtversicherung",
    description: "Schutz für Unternehmen vor Haftungsansprüchen bei Personen-, Sach- und Vermögensschäden.",
    url: "/betriebshaftpflicht"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Betriebshaftpflicht", url: "/betriebshaftpflicht" }
  ]);

  return (
    <Layout>
      <SEO
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [faqSchema, serviceSchema, breadcrumbSchema]
        }}
      />
      <BusinessInsuranceHero
        icon={Briefcase}
        title="Betriebshaftpflicht"
        description="Die Betriebshaftpflichtversicherung ist eine der wichtigsten Absicherungen für Ihr Unternehmen. Sie schützt vor den finanziellen Folgen von Schäden, die Dritten durch Ihre Geschäftstätigkeit entstehen."
        heroImage={heroImage}
      />

      {/* Content - Dark business style */}
      <section className="py-16 bg-[hsl(178,45%,18%)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Im Geschäftsalltag können schnell Schäden entstehen – sei es durch 
                fehlerhafte Produkte, Dienstleistungen oder einfach durch Missgeschicke 
                Ihrer Mitarbeiter. Mit einer Betriebshaftpflichtversicherung sind Sie 
                vor den finanziellen Folgen geschützt.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">Ihre Vorteile:</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-white">{benefit}</span>
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
              <h2 className="text-2xl font-bold text-white mb-6">Was ist versichert:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {coverages.map((coverage, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white mb-4">
                      <coverage.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{coverage.title}</h3>
                    <p className="text-sm text-white/70">{coverage.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-white/10 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Schützen Sie Ihr Unternehmen
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich beraten und finden Sie die optimale Absicherung für Ihr Unternehmen.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2 bg-white text-[hsl(178,45%,20%)] hover:bg-white/90">
                  Beratung anfordern
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Häufige Fragen zur Betriebshaftpflicht
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/20 rounded-xl px-6 data-[state=open]:bg-white/5"
                  >
                    <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed">
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
