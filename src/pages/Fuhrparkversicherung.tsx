import { motion } from "framer-motion";
import { Truck, Check, ArrowRight, Car, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-fuhrpark.jpg";

const benefits = [
  "Einheitliche Versicherungslösung für alle Fahrzeuge",
  "Flexible Anpassung an Ihre Flottengröße",
  "Günstige Konditionen durch Mengenrabatte",
  "Zentrale Verwaltung und einfaches Handling",
];

const coverages = [
  {
    icon: Shield,
    title: "Haftpflicht",
    description: "Gesetzliche Mindestabsicherung für alle Fahrzeuge",
  },
  {
    icon: Car,
    title: "Kasko",
    description: "Teil- und Vollkasko nach Ihrem Bedarf",
  },
  {
    icon: Settings,
    title: "Erweiterungen",
    description: "GAP-Deckung, Schutzbrief und mehr",
  },
];

const faqs = [
  {
    question: "Ab wann lohnt sich eine Fuhrparkversicherung?",
    answer: "Eine Fuhrparkversicherung lohnt sich in der Regel ab 3-5 Fahrzeugen. Ab dieser Größe profitieren Sie von günstigeren Konditionen und vereinfachter Verwaltung.",
  },
  {
    question: "Welche Fahrzeuge können versichert werden?",
    answer: "Grundsätzlich alle gewerblich genutzten Fahrzeuge: PKW, Transporter, LKW, Baumaschinen, Anhänger und Spezialfahrzeuge. Die genauen Konditionen hängen vom Fahrzeugtyp ab.",
  },
  {
    question: "Kann ich Fahrzeuge flexibel hinzufügen oder entfernen?",
    answer: "Ja, bei einer Fuhrparkversicherung können Sie Fahrzeuge flexibel ein- und ausgliedern. Die Beiträge werden entsprechend angepasst.",
  },
];

export default function Fuhrparkversicherung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Fuhrparkversicherung",
    description: "Einheitliche Versicherungslösung für alle Firmenfahrzeuge mit Flottenrabatten.",
    url: "/fuhrparkversicherung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Fuhrparkversicherung", url: "/fuhrparkversicherung" }
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
        icon={Truck}
        title="Fuhrparkversicherung"
        description="Ob Lieferwagen, LKW oder Firmen-PKW – mit einer Fuhrparkversicherung sichern Sie Ihren gesamten Fahrzeugbestand optimal ab und profitieren von attraktiven Konditionen."
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
                Ein Fuhrpark ist für viele Unternehmen unverzichtbar. Die Versicherung 
                einzelner Fahrzeuge kann jedoch schnell unübersichtlich und teuer werden. 
                Mit einer Fuhrparkversicherung bündeln Sie alle Fahrzeuge in einem Vertrag 
                und profitieren von zahlreichen Vorteilen.
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
              <h2 className="text-2xl font-bold text-white mb-6">Leistungsbausteine:</h2>
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
                Optimieren Sie Ihre Fuhrparkversicherung
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich ein individuelles Angebot erstellen – abgestimmt auf Ihre Flotte.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="gap-2 bg-white text-[hsl(178,45%,20%)] hover:bg-white/90">
                  Angebot anfordern
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
                Häufige Fragen zur Fuhrparkversicherung
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
