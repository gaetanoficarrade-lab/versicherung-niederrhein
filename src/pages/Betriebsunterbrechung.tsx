import { motion } from "framer-motion";
import { Flame, Check, ArrowRight, Clock, TrendingDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-unterbrechung.jpg";

const benefits = [
  "Absicherung des Betriebsergebnisses",
  "Übernahme laufender Kosten",
  "Schutz bei Lieferantenausfall",
  "Flexible Haftzeiten wählbar",
];

const coverages = [
  {
    icon: TrendingDown,
    title: "Ertragsausfall",
    description: "Kompensation entgangener Gewinne",
  },
  {
    icon: Clock,
    title: "Fixkosten",
    description: "Weiterlaufende Kosten werden gedeckt",
  },
  {
    icon: Shield,
    title: "Mehrkosten",
    description: "Zusätzliche Kosten zur Schadenminderung",
  },
];

const faqs = [
  {
    question: "Was ist eine Betriebsunterbrechungsversicherung?",
    answer: "Die Betriebsunterbrechungsversicherung (BU) sichert den fortlaufenden Ertrag Ihres Unternehmens, wenn der Betrieb aufgrund eines Sachschadens (z.B. Brand, Wasserschaden) stillsteht.",
  },
  {
    question: "Welche Kosten werden übernommen?",
    answer: "Die Versicherung übernimmt den entgangenen Gewinn sowie die weiterlaufenden Fixkosten wie Gehälter, Mieten, Kredite und Versicherungsbeiträge während der Unterbrechungszeit.",
  },
  {
    question: "Wie lange zahlt die Versicherung?",
    answer: "Die Haftzeit (maximale Leistungsdauer) kann individuell vereinbart werden – üblich sind 12 bis 24 Monate. Die Leistung wird so lange gezahlt, bis der Betrieb wieder normal läuft.",
  },
];

export default function Betriebsunterbrechung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Betriebsunterbrechungsversicherung",
    description: "Schutz bei Ertragsausfall und Übernahme laufender Kosten bei Betriebsstillstand.",
    url: "/betriebsunterbrechung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Betriebsunterbrechungsversicherung", url: "/betriebsunterbrechung" }
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
        icon={Flame}
        title="Betriebsunterbrechungsversicherung"
        description="Ein Betriebsstillstand kann existenzbedrohend sein. Die Betriebsunterbrechungsversicherung sichert Ihr Unternehmen gegen die finanziellen Folgen von Betriebsausfällen ab."
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
                Selbst wenn Ihre Gebäude und Maschinen versichert sind – was passiert 
                mit Ihrem Umsatz, wenn der Betrieb stillsteht? Die Betriebsunterbrechungsversicherung 
                schließt diese Lücke und sichert Ihr Unternehmen vor den wirtschaftlichen Folgen.
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
              <h2 className="text-2xl font-bold text-white mb-6">Leistungsumfang:</h2>
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
                Sichern Sie Ihre Existenz
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich beraten und finden Sie die richtige Absicherung für Ihr Unternehmen.
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
                Häufige Fragen zur Betriebsunterbrechung
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
