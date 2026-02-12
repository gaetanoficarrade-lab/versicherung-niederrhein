import { motion } from "framer-motion";
import { Shield, Check, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-privathaftpflicht.jpg";

const aufgaben = [
  "Prüfung, ob und in welcher Höhe eine Verpflichtung zum Schadenersatz besteht",
  "Wiedergutmachung des Schadens durch Zahlung eines Geldbetrages bei berechtigten Ansprüchen",
  "Abwehr von unberechtigten oder überhöhten Schadenersatzansprüchen (passiver Rechtsschutz)",
];

const tarifvarianten = [
  {
    title: "Single",
    description: "Versicherungsschutz für eine einzelne Person. Alleinerziehende sollten beachten, dass die Mitversicherung des Kindes meist nur im Familien-Tarif möglich ist.",
  },
  {
    title: "Familie",
    description: "Schutz für Ehegatten, Lebenspartner und Kinder bis zu bestimmten Altersgrenzen. Besonderes Augenmerk bei Kindern unter 7 Jahren auf die Mitversicherung deliktunfähiger Kinder.",
  },
  {
    title: "Senioren",
    description: "Speziell auf die Bedürfnisse älterer Versicherungsnehmer zugeschnitten – mit allen wichtigen Leistungen.",
  },
];

const leistungserweiterungen = [
  {
    title: "Forderungsausfalldeckung",
    description: "Schützt dich, wenn ein Dritter dir Schaden zufügt, aber keine eigene Haftpflichtversicherung hat und zahlungsunfähig ist. Deine eigene Versicherung springt ein.",
  },
  {
    title: "Drohnen & Luftfahrzeuge",
    description: "Ferngesteuerte Luftfahrzeuge unterliegen der Versicherungspflicht. Premium-Tarife decken diese ab – achte auf Gewichts- und Antriebsbegrenzungen.",
  },
  {
    title: "Gefälligkeitshandlungen",
    description: "Beim Umzugshelfen fällt die Kiste mit teuren Erbstücken? Gute Tarife übernehmen auch Gefälligkeitsschäden, die sonst juristisch schwer einzufordern wären.",
  },
  {
    title: "Ehrenamt",
    description: "Wer sich ehrenamtlich engagiert, kann bei Sach- oder Personenschäden haftbar gemacht werden. Diese Erweiterung schützt dich bei Vereinstätigkeiten.",
  },
  {
    title: "Mietsachschäden",
    description: "Schäden an Parkett, Badewanne, Fliesen oder Einbauküche in der Mietwohnung – als Mieter bist du grundsätzlich schadenersatzpflichtig.",
  },
  {
    title: "Schlüsselverlust",
    description: "Bei Verlust von Schlüsseln für Mietwohnungen, Wohnanlagen oder die Firma können hohe Kosten für den Austausch kompletter Schließanlagen entstehen.",
  },
];

const schadenbeispiele = [
  {
    title: "Rotwein auf weißem Teppich",
    description: "Einem Gast entglitt beim Abendessen ein Glas Rotwein. Der weiße Teppich musste professionell gereinigt werden.",
    amount: "300 €",
  },
  {
    title: "Schulterklopfer mit Folgen",
    description: "Ein Bekannter schlug seinem Freund anerkennend auf die Schulter. Dieser kam aus dem Gleichgewicht, fiel eine Treppe hinunter und erlitt eine Schulterfraktur.",
    amount: "25.000 €",
  },
  {
    title: "Fußball im Garten",
    description: "Beim Fußballspielen mit den Kindern schoss der Vater den Ball durch die Scheibe des Nachbar-Gewächshauses.",
    amount: "400 €",
  },
  {
    title: "Waldbrand durch Zigarette",
    description: "Ein Mann warf eine brennende Zigarette achtlos weg. Es entstand ein Waldbrand, der eine Lagerhalle zerstörte. Zusätzlich Kosten für Wiederaufforstung.",
    amount: "über 500.000 €",
  },
];

const faqs = [
  {
    question: "Wer braucht eine Private Haftpflichtversicherung?",
    answer: "Jeder Erwachsene und jede Familie sollten über eine Haftpflichtversicherung verfügen. Sie schützt umfangreich vor den Gefahren des Alltags – denn schon kleine Unachtsamkeiten können große Schäden verursachen.",
  },
  {
    question: "Was sind die drei Hauptaufgaben der Privathaftpflicht?",
    answer: "Erstens: Prüfung, ob und in welcher Höhe eine Schadenersatzpflicht besteht. Zweitens: Zahlung bei berechtigten Ansprüchen. Drittens: Abwehr unberechtigter oder überhöhter Forderungen – inklusive Rechtsstreit auf Kosten des Versicherers.",
  },
  {
    question: "Wie hoch sollte die Deckungssumme sein?",
    answer: "Wir empfehlen eine Deckungssumme von mindestens 5 Millionen Euro für Personen-, Sach- und Vermögensschäden. Bei Personenschäden können schnell hohe Summen entstehen.",
  },
  {
    question: "Was ist bei Sachschäden zu beachten?",
    answer: "Bei Sachschäden wird der Zeitwert erstattet, nicht der Neupreis. Das bedeutet: Der Wert der beschädigten Sache zum Zeitpunkt des Schadens abzüglich Alter und Abnutzung.",
  },
  {
    question: "Was ist die Forderungsausfalldeckung?",
    answer: "Wird dir von einem Dritten ein Schaden zugefügt, der keine Haftpflichtversicherung hat und zahlungsunfähig ist, springt deine eigene Privathaftpflicht ein und zahlt den Schaden.",
  },
];

export default function PrivatHaftpflicht() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Private Haftpflichtversicherung",
    description: "Schutz vor Schadenersatzforderungen bei Personen-, Sach- und Vermögensschäden.",
    url: "/privat-haftpflicht"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Privathaftpflicht", url: "/privat-haftpflicht" }
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
        icon={Shield}
        title="Private Haftpflichtversicherung"
        description="Die wichtigste Versicherung für jeden Haushalt. Schützt dich vor finanziellen Folgen, wenn du anderen einen Schaden zufügst."
        heroImage={heroImage}
      />

      {/* Aufgaben */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Die Private Haftpflichtversicherung schützt dich vor finanziellen Folgen,
                wenn du einen Schaden bei einer anderen Person verursacht hast. Sie regelt
                die entstandenen Schäden und schützt dich vor unberechtigten Ansprüchen –
                im Zweifel auch vor Gericht. Grundsätzlich gelten alle Sach-, Personen-
                und Vermögensschäden, die du oder eine mitversicherte Person einem Dritten
                fahrlässig zugefügt hast, als Bestandteil des Versicherungsschutzes.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Die drei Hauptaufgaben:</h2>

              <div className="space-y-4 mb-12">
                {aufgaben.map((aufgabe, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{aufgabe}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tarifvarianten */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Tarifvarianten:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tarifvarianten.map((tarif, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{tarif.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tarif.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leistungserweiterungen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Wichtige Leistungserweiterungen:</h2>
              <p className="text-muted-foreground mb-6">
                Das Leistungsniveau in Premium-Tarifen ist hoch – dennoch fehlen oft wichtige Erweiterungen. Folgende Bausteine sollten enthalten sein:
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
              transition={{ duration: 0.6, delay: 0.25 }}
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
                        <span className="text-sm font-bold text-primary">{schaden.amount}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{schaden.description}</p>
                    </div>
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
                Finde die passende Haftpflichtversicherung
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Anbieter und spare bares Geld – bei gleichem oder besserem Schutz.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=privathaftpflicht"
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
                Häufige Fragen zur Privathaftpflicht
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