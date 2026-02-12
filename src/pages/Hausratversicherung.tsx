import { motion } from "framer-motion";
import { Home, Check, ArrowRight, AlertTriangle, Flame, Droplets, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import NachlesenSidebar from "@/components/NachlesenSidebar";
import HausratRechner from "@/components/HausratRechner";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-hausrat.jpg";

const nachlesenLinks = [
  { title: "Hausratversicherung", url: "https://landingpage.vema-eg.de/maklerkalkar/hausrat/information" },
  { title: "Versicherte Gefahren", url: "https://landingpage.vema-eg.de/maklerkalkar/hausrat/gefahren" },
  { title: "Versicherungssumme", url: "https://landingpage.vema-eg.de/maklerkalkar/hausrat/versicherungssumme" },
  { title: "Leistungserweiterungen", url: "https://landingpage.vema-eg.de/maklerkalkar/hausrat/leistungserweiterungen" },
];

const gefahren = [
  {
    icon: Flame,
    title: "Feuer",
    description: "Brand, Blitzschlag, Explosion, Implosion",
  },
  {
    icon: Lock,
    title: "Einbruchdiebstahl",
    description: "Einbruch, Vandalismus nach Einbruch, Raub",
  },
  {
    icon: Droplets,
    title: "Leitungswasser",
    description: "Rohrbruch und austretendes Wasser",
  },
  {
    icon: Shield,
    title: "Sturm & Hagel",
    description: "Schäden durch Unwetter ab Windstärke 8",
  },
];

const leistungserweiterungen = [
  {
    title: "Elementarschäden",
    description: "Überschwemmung/Hochwasser, Schneelast, Lawinen, Erdbeben und Erdrutsch. Die häufigste Elementargefahr führt schnell zu hohen Kosten – nicht nur durch Sachschäden, sondern auch durch Auspumpen und Trockenlegung.",
  },
  {
    title: "Unbenannte Gefahren (All-Risk)",
    description: 'Die bestmögliche Abrundung: Zusammen mit den Grundgefahren und Elementarschäden als „All-Risk-Deckung" bekannt – jedes Schadenereignis ist versichert, das nicht ausdrücklich ausgeschlossen ist.',
  },
  {
    title: "Glasversicherung",
    description: "Eine Allgefahren-Versicherung für Glas: Jede Ursache des Glasbruchs ist versichert (außer Vorsatz). Ein Aufschub der Reparatur ist meistens nicht möglich.",
  },
  {
    title: "Fahrraddiebstahl",
    description: "Solange sich das Fahrrad im Haushalt befindet, gilt normaler Versicherungsschutz. Sobald du damit unterwegs bist, muss Diebstahl und Beschädigung extra mitversichert werden.",
  },
];

const schadenbeispiele = [
  {
    title: "Einbruchdiebstahl mit Vandalismus",
    description: "Einbrecher entwendeten Elektronik, zerschlugen Spiegel, schlitzten Matratzen auf und zündeten einen Schrank an. Das Feuer breitete sich aus – fast der gesamte Hausrat wurde vernichtet, darunter ein Bösendorfer Klavier.",
    amount: "119.000 €",
  },
  {
    title: "Sturmschäden 2022",
    description: 'Die drei Stürme „Ylenia", „Zeynep" und „Antonia" verursachten 1,4 Milliarden Euro Schaden – 900.000 beschädigte Häuser und 65.000 Kraftfahrzeugschäden.',
    amount: "1,4 Mrd. €",
  },
  {
    title: "Glasbruch beim Frühjahrsputz",
    description: "Beim Kehren stieß eine Hausfrau mit dem Besenstiel gegen das Küchenfenster. Die Scheibe brach und musste wegen der Witterung sofort ausgetauscht werden.",
    amount: "200 €",
  },
];

const faqs = [
  {
    question: "Was gehört zum versicherten Hausrat?",
    answer: "Alle Einrichtungs-, Gebrauchs- und Verbrauchsgegenstände sowie Wertsachen und Bargeld in der versicherten Wohnung. Auch Hausrat, der sich vorübergehend außerhalb der Wohnung befindet, zählt dazu.",
  },
  {
    question: "Was ist die Standarddeckung?",
    answer: "Brand, Blitzschlag, Explosion, Implosion, Einbruchdiebstahl, Vandalismus nach Einbruch, Raub, Leitungswasser sowie Sturm und Hagel. Auch Überspannungsschäden durch Blitz sind oft mitversichert.",
  },
  {
    question: "Was sind unbenannte Gefahren?",
    answer: "Die All-Risk-Deckung: Jedes Schadenereignis ist versichert, das nicht ausdrücklich in den Bedingungen ausgeschlossen wurde. Typische Ausschlüsse sind Krieg, Vorsatz und Kernenergie.",
  },
  {
    question: "Warum sollte ich die Elementarschadendeckung ergänzen?",
    answer: "Überschwemmungen führen am häufigsten zu Elementarschäden. Die Kosten umfassen nicht nur den Sachschaden, sondern auch Auspumpen, Reinigung und Trockenlegung. Den Aufwand sollte man nicht unterschätzen.",
  },
  {
    question: "Brauche ich eine separate Fahrradversicherung?",
    answer: "Im Haushalt ist dein Fahrrad über die Hausratversicherung geschützt. Sobald du damit unterwegs bist, brauchst du eine zusätzliche Fahrraddiebstahl-Deckung.",
  },
];

export default function Hausratversicherung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Hausratversicherung",
    description: "Schutz für Ihren Hausrat bei Einbruch, Feuer, Wasser und Sturm.",
    url: "/hausratversicherung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Hausratversicherung", url: "/hausratversicherung" }
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
        icon={Home}
        title="Hausratversicherung"
        description="Auch in der sichersten Wohnung sind Schäden durch Feuer, Leitungswasser, Sturm, Hagel oder Einbruchdiebstahl nicht vollkommen vermeidbar."
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
              <p className="text-lg text-foreground leading-relaxed mb-8">
                In der Hausratversicherung gilt der gesamte Haushalt der im
                Versicherungsschein bezeichneten Wohnung als versichert. Dazu gehören
                alle Einrichtungs-, Gebrauchs- und Verbrauchsgegenstände sowie Wertsachen
                und Bargeld. Auch Hausrat, der sich vorübergehend außerhalb der Wohnung
                befindet, zählt zu den versicherten Risiken.
              </p>

              {/* Versicherte Gefahren */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Versicherte Gefahren (Standarddeckung):</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {gefahren.map((gefahr, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                      <gefahr.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{gefahr.title}</h3>
                    <p className="text-xs text-muted-foreground">{gefahr.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leistungserweiterungen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Sinnvolle Leistungserweiterungen:</h2>
              <p className="text-muted-foreground mb-6">
                Die Basisdeckung bietet bereits guten Schutz – dennoch gibt es Lücken, deren Folgen du selbst tragen müsstest.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {leistungserweiterungen.map((item, index) => (
                  <div key={index} className="p-5 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Schadenbeispiele */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Schadenbeispiele aus der Praxis:</h2>
              <div className="space-y-4">
                {schadenbeispiele.map((schaden, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-muted/30 border border-border">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{schaden.title}</h3>
                        <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">{schaden.amount}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{schaden.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rechner */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Hausrat-Rechner
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Berechne eine empfohlene Versicherungssumme auf Basis von
                  Wohnfläche, Ausstattungsniveau und optionalen Wertgegenständen.
                </p>
              </div>

              <HausratRechner />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Finde die passende Hausratversicherung
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche jetzt verschiedene Angebote und finde den optimalen
                Schutz für deinen Hausrat.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=hausrat"
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
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen zur Hausratversicherung
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