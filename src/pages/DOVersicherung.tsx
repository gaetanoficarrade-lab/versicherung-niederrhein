import { motion } from "framer-motion";
import { Scale, Check, ArrowRight, Shield, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import BusinessInsuranceHero from "@/components/BusinessInsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-business-dno.jpg";

const benefits = [
  "Schutz des Privatvermögens",
  "Absicherung bei Managementfehlern",
  "Deckung von Abwehrkosten",
  "Weltweiter Versicherungsschutz",
];

const insuredPersons = [
  "Geschäftsführer",
  "Vorstände",
  "Aufsichtsräte",
  "Prokuristen",
  "Leitende Angestellte",
  "Compliance-Beauftragte",
];

const coverages = [
  {
    icon: Shield,
    title: "Innenhaftung",
    description: "Ansprüche der eigenen Gesellschaft",
  },
  {
    icon: Users,
    title: "Außenhaftung",
    description: "Ansprüche Dritter wie Gläubiger oder Behörden",
  },
  {
    icon: FileText,
    title: "Abwehrkosten",
    description: "Rechtsverteidigung und Gutachten",
  },
];

const faqs = [
  {
    question: "Was ist eine D&O-Versicherung?",
    answer: "D&O steht für Directors and Officers. Die Versicherung schützt Geschäftsführer, Vorstände und Aufsichtsräte vor persönlicher Haftung für Fehler bei der Unternehmensführung.",
  },
  {
    question: "Warum brauchen Geschäftsführer eine D&O?",
    answer: "Geschäftsführer haften mit ihrem gesamten Privatvermögen für Schäden, die durch Pflichtverletzungen entstehen. Die D&O-Versicherung schützt vor den oft existenzbedrohenden Folgen.",
  },
  {
    question: "Was ist der Selbstbehalt bei D&O?",
    answer: "Bei GmbH-Geschäftsführern ist ein Selbstbehalt von mindestens 10% des Schadens, maximal das 1,5-fache der Jahresvergütung, gesetzlich vorgeschrieben. Dieser kann separat versichert werden.",
  },
  {
    question: "Sind ehemalige Organe mitversichert?",
    answer: "Ja, in der Regel erstreckt sich der Versicherungsschutz auch auf ehemalige Organmitglieder für Handlungen während ihrer Amtszeit.",
  },
];

export default function DOVersicherung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "D&O Versicherung",
    description: "Managerhaftpflicht für Geschäftsführer, Vorstände und Aufsichtsräte.",
    url: "/do-versicherung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "D&O Versicherung", url: "/do-versicherung" }
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
        icon={Scale}
        title="D&O-Versicherung"
        description="Die D&O-Versicherung (Directors & Officers) schützt Geschäftsführer, Vorstände und Aufsichtsräte vor persönlicher Haftung – und damit vor dem Zugriff auf ihr Privatvermögen."
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
                Führungskräfte haften persönlich und unbegrenzt mit ihrem Privatvermögen 
                für Schäden, die sie dem Unternehmen oder Dritten zufügen. Die D&O-Versicherung 
                ist daher für jeden Geschäftsführer, Vorstand oder Aufsichtsrat unverzichtbar.
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

            {/* Insured Persons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Versicherte Personen:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {insuredPersons.map((person, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70 flex-shrink-0" />
                    <span className="text-white/80">{person}</span>
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
                Schützen Sie Ihr Privatvermögen
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Lassen Sie sich beraten und finden Sie die passende Absicherung für Ihre Führungsposition.
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
                Häufige Fragen zur D&O-Versicherung
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
