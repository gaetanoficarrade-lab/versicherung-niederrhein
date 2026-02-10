import { motion } from "framer-motion";
import { HardHat, Check, ArrowRight, FileText, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-berufshaftpflicht.jpg";

const benefits = [
  "Schutz bei beruflichen Fehlern",
  "Absicherung von Vermögensschäden",
  "Deckung von Abwehrkosten",
  "Branchenspezifische Lösungen",
];

const professions = [
  "Architekten & Ingenieure",
  "IT-Berater & Entwickler",
  "Unternehmensberater",
  "Steuerberater & Wirtschaftsprüfer",
  "Rechtsanwälte",
  "Immobilienmakler",
];

const coverages = [
  {
    icon: FileText,
    title: "Echte Vermögensschäden",
    description: "Finanzielle Verluste durch Beratungsfehler",
  },
  {
    icon: AlertTriangle,
    title: "Unechte Vermögensschäden",
    description: "Folgeschäden aus Sach- oder Personenschäden",
  },
  {
    icon: Scale,
    title: "Abwehrkosten",
    description: "Kosten für Rechtsverteidigung",
  },
];

const faqs = [
  {
    question: "Was ist der Unterschied zur Betriebshaftpflicht?",
    answer: "Die Betriebshaftpflicht deckt Personen- und Sachschäden ab. Die Berufshaftpflicht schützt zusätzlich vor echten Vermögensschäden, die durch berufliche Fehler entstehen – ohne dass ein Sach- oder Personenschaden vorliegt.",
  },
  {
    question: "Für wen ist eine Berufshaftpflicht wichtig?",
    answer: "Besonders für Freiberufler und Selbstständige, die beratend oder planend tätig sind: Architekten, IT-Berater, Unternehmensberater, Steuerberater, Rechtsanwälte und viele mehr.",
  },
  {
    question: "Sind Angestellte mitversichert?",
    answer: "Ja, in der Regel sind alle Mitarbeiter des Unternehmens automatisch mitversichert, wenn sie im Rahmen ihrer beruflichen Tätigkeit handeln.",
  },
];

export default function Berufshaftpflicht() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Berufshaftpflichtversicherung",
    description: "Absicherung für Freiberufler und Selbstständige gegen berufliche Fehler und Vermögensschäden.",
    url: "/berufshaftpflicht"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Berufshaftpflicht", url: "/berufshaftpflicht" }
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
        icon={HardHat}
        title="Berufshaftpflichtversicherung"
        description="Für Freiberufler und Selbstständige ist die Berufshaftpflicht unverzichtbar. Sie schützt vor den finanziellen Folgen von Berufsfehlern und Vermögensschäden."
        heroImage={heroImage}
      />

      {/* Content - Dark business style */}
      <section className="py-16 bg-[hsl(178,45%,33%)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Ein falscher Rat, ein Planungsfehler oder ein übersehenes Detail – 
                kleine Fehler können große finanzielle Folgen haben. Die Berufshaftpflichtversicherung 
                schützt Sie vor Schadenersatzansprüchen aus Ihrer beruflichen Tätigkeit.
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

            {/* Professions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Wichtig für diese Berufsgruppen:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {professions.map((profession, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70 flex-shrink-0" />
                    <span className="text-white/80">{profession}</span>
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
                Schützen Sie Ihre berufliche Existenz
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich beraten und finden Sie die passende Absicherung für Ihre Berufsgruppe.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2 bg-white text-[hsl(178,45%,35%)] hover:bg-white/90">
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
                Häufige Fragen zur Berufshaftpflicht
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
