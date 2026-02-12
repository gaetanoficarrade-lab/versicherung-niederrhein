import { motion } from "framer-motion";
import { Scale, Check, ArrowRight, FileText, Briefcase, Car, Home, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import NachlesenSidebar from "@/components/NachlesenSidebar";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-rechtsschutz.jpg";

const nachlesenLinks = [
  { title: "Rechtsschutz Privat", url: "https://landingpage.vema-eg.de/download/pb/32/maklerkalkar/Rechtsschutz-Privat.pdf" },
  { title: "Erweiterter Straf-Rechtsschutz Privat", url: "https://landingpage.vema-eg.de/download/pb/109/maklerkalkar/Erweiterter-Straf-Rechtsschutz-Privat.pdf" },
  { title: "Verkehrsrechtsschutzversicherung", url: "https://landingpage.vema-eg.de/download/pb/37/maklerkalkar/Verkehrsrechtsschutzversicherung.pdf" },
  { title: "Wohnungs- und Grundstücks-Rechtsschutz", url: "https://landingpage.vema-eg.de/download/pb/112/maklerkalkar/Wohnungs-+und+Grundstuecks-RS.pdf" },
];

const kostenuebernahme = [
  "Kosten des Anwaltes nach dem Rechtsanwaltsvergütungsgesetz (RVG)",
  "Gerichtskosten einschließlich der Entschädigung für Zeugen und Sachverständige",
  "Kosten des Gegners, soweit du sie zu tragen hast",
  "Kosten eines Mediationsverfahrens",
];

const bausteine = [
  {
    icon: Home,
    title: "Privatrechtsschutz",
    description: "Schutz bei privatrechtlichen Streitigkeiten – von Kaufverträgen bis Nachbarschaftskonflikten. Der Grundbaustein für jeden Haushalt.",
  },
  {
    icon: Briefcase,
    title: "Berufsrechtsschutz",
    description: "Absicherung bei arbeitsrechtlichen Auseinandersetzungen mit dem Arbeitgeber – Kündigung, Abfindung, Zeugnis und mehr.",
  },
  {
    icon: Car,
    title: "Verkehrsrechtsschutz",
    description: "Schutz bei Unfällen und Streitigkeiten im Straßenverkehr. In der Regel ohne Wartezeit sofort aktiv.",
  },
  {
    icon: FileText,
    title: "Wohnungs-/Grundstücksrechtsschutz",
    description: "Unterstützung bei Mietstreitigkeiten, Nebenkostenabrechnungen und Konflikten mit dem Vermieter oder Nachbarn.",
  },
];

const faqs = [
  {
    question: "Warum brauche ich eine Rechtsschutzversicherung?",
    answer: "Auch im privaten Bereich kann der Weg zum Anwalt schneller notwendig werden, als einem lieb ist. Die meisten Bereiche des täglichen Lebens unterliegen gesetzlichen Regelungen. Da man im Zweifel auch die Kosten des Prozessgegners tragen muss, kann ein Rechtsstreit sehr teuer werden.",
  },
  {
    question: "Welche Kosten werden übernommen?",
    answer: "Der Versicherer zahlt Anwaltskosten nach RVG, Gerichtskosten, Zeugen- und Sachverständigenentschädigungen, Kosten der Gegenseite (wenn du sie tragen musst) und Mediationskosten – abzüglich der vereinbarten Selbstbeteiligung.",
  },
  {
    question: "Kann ich einzelne Bausteine wählen?",
    answer: "Ja, während einige Versicherer Kompletttarife anbieten, bieten andere ein Baukastenprinzip. Du kannst deinen Tarif aus einzelnen Bereichen zusammenstellen. Manche Bausteine können nur in Verbindung mit einem anderen abgeschlossen werden.",
  },
  {
    question: "Gibt es Wartezeiten?",
    answer: "Ja, für die meisten Bereiche gilt eine Wartezeit von 3 Monaten. Im Verkehrsrechtsschutz gibt es in der Regel keine Wartezeit. Bei Arbeitsrechtsschutz beträgt die Wartezeit oft 3-6 Monate.",
  },
  {
    question: "Wer ist mitversichert?",
    answer: "In Familientarifen sind Ehepartner/Lebenspartner und minderjährige Kinder mitversichert. Volljährige Kinder können unter bestimmten Voraussetzungen (z.B. Ausbildung) weiter mitversichert sein.",
  },
];

export default function Rechtsschutzversicherung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Rechtsschutzversicherung",
    description: "Kostenübernahme für Anwalt und Gericht bei Rechtsstreitigkeiten.",
    url: "/rechtsschutzversicherung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Rechtsschutzversicherung", url: "/rechtsschutzversicherung" }
  ]);

  return (
    <Layout>
      <SEO
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [faqSchema, serviceSchema, breadcrumbSchema]
        }}
      />
      <InsuranceHero
        icon={Scale}
        title="Rechtsschutzversicherung"
        description="Ein Rechtsstreit kostet immer Geld. Mit einer Rechtsschutzversicherung kannst du dein Recht durchsetzen – ohne Angst vor den Kosten."
        heroImage={heroImage}
      />

      <NachlesenSidebar links={nachlesenLinks} mode="inline" />

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Auch im privaten Bereich kann der Weg zum Anwalt schneller notwendig
                werden, als es einem vielleicht lieb ist. Die meisten Bereiche des täglichen
                Lebens unterliegen heutzutage gesetzlichen Regelungen. Aus einer
                Meinungsverschiedenheit kann so schnell ein Rechtsstreit werden.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Da man im Zweifel auch die Kosten des Prozessgegners zu tragen hat,
                kann es sehr teuer werden. Eine Rechtsschutzversicherung kann sämtliche
                Kosten für alle Rechtsstreitigkeiten abdecken, die du führen musst.
              </p>

              {/* Kostenübernahme */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Welche Kosten werden übernommen?</h2>
              <div className="space-y-3 mb-12">
                {kostenuebernahme.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bausteine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Bausteine der Rechtsschutzversicherung:</h2>
              <p className="text-muted-foreground mb-6">
                Während einige Versicherer Kompletttarife anbieten, bieten andere ein Baukastenprinzip – so kannst du deinen Tarif individuell zusammenstellen.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {bausteine.map((baustein, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <baustein.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{baustein.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{baustein.description}</p>
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