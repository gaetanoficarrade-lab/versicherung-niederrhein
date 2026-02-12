import { motion } from "framer-motion";
import { Building2, Check, ArrowRight, Flame, Shield, Droplets, CloudRain, AlertTriangle, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import NachlesenSidebar from "@/components/NachlesenSidebar";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-wohngebaeude.jpg";

const nachlesenLinks = [
  { title: "Wohngebäudeversicherung", url: "https://landingpage.vema-eg.de/maklerkalkar/wohngebaeude/information" },
  { title: "Versicherte Gefahren", url: "https://landingpage.vema-eg.de/maklerkalkar/wohngebaeude/gefahren" },
  { title: "Leistungserweiterungen", url: "https://landingpage.vema-eg.de/maklerkalkar/wohngebaeude/leistungserweiterungen" },
  { title: "Versicherungssumme", url: "https://landingpage.vema-eg.de/maklerkalkar/wohngebaeude/versicherungssumme" },
];

const gefahren = [
  {
    icon: Flame,
    title: "Feuer",
    description: "Brand, Blitzschlag, Explosion",
  },
  {
    icon: Droplets,
    title: "Leitungswasser",
    description: "Rohrbruch, Frostschäden an Rohren",
  },
  {
    icon: Shield,
    title: "Sturm & Hagel",
    description: "Sturmschäden ab Windstärke 8",
  },
];

const leistungserweiterungen = [
  {
    title: "Elementarschäden",
    description: "Überschwemmung/Hochwasser ist die häufigste Elementargefahr. Schnell entstehen Kosten in mittlerer fünfstelliger Höhe – oft nicht durch Gebäudeschäden, sondern durch Auspumpen, Reinigung und Trockenlegung. Angesichts des Klimawandels empfehlen wir diese Deckung dringend.",
  },
  {
    title: "Unbenannte Gefahren",
    description: "Die bestmögliche Abrundung: Hier wird der umgekehrte Weg gegangen – statt versicherte Gefahren aufzulisten, werden nur bestimmte Ereignisse ausgeschlossen (z.B. Krieg, Vorsatz, Kernenergie). Alles andere ist versichert.",
  },
  {
    title: "Glasversicherung",
    description: "Bei größeren Glasflächen oder Wintergärten sinnvoll. Glasschäden an Mietobjekten sind nicht über die Mietsachschadendeckung der Haftpflicht abgedeckt. Für relativ geringe Prämien erhältlich.",
  },
  {
    title: "Rechtsschutz für Haus- und Grundbesitzer",
    description: "Streitigkeiten rund ums Haus sind keine Seltenheit. Nachbarschaftsstreitigkeiten, Steuerthemen oder Ordnungswidrigkeiten – dieser Baustein sichert Gerichtskosten ab.",
  },
  {
    title: "Mietnomaden-Schutz",
    description: "Für Vermieter: Kommt innerhalb bestimmter Maximalgrenzen für Mietausfall und Sachschäden auf, wenn der Mieter nicht mehr zahlt oder Schäden verursacht.",
  },
  {
    title: "Photovoltaikanlage",
    description: "Sensible Technik, die Stürmen, Hagel, Bedienungsfehlern oder Diebstahl ausgesetzt ist. Ertragsausfälle und Reparaturkosten können die errechnete Rentabilität verschieben.",
  },
];

const schadenbeispiele = [
  {
    title: "Sturmschaden",
    description: "Orkan Kyrill (2007) mit bis zu 150 km/h: Eine 20 m hohe Linde wurde entwurzelt, streifte ein Wohnhaus und beschädigte Balkon und Markise erheblich.",
    amount: "7.000 €",
  },
  {
    title: "Feuerschaden durch Blitzeinschlag",
    description: "Ein Blitz schlug in den Dachstuhl ein. Das Feuer breitete sich aufs Dachgeschoss aus. Durch das Löschwasser musste das gesamte Gebäude abgerissen und neu aufgebaut werden.",
    amount: "350.000 €",
  },
  {
    title: "Rohrbruch",
    description: "Dunkle Flecken an der Küchenwand. Die komplette Küche musste abgebaut, die Wand aufgeschlagen und 9 Tage getrocknet werden. Parkettboden wurde ausgetauscht.",
    amount: "2.400 €",
  },
  {
    title: "Überschwemmung",
    description: "160 Liter Regen pro Quadratmeter in 6 Stunden. Über 1.000 Häuser und Keller überflutet.",
    amount: "100 Mio. € (Region)",
  },
];

const faqs = [
  {
    question: "Was ist in der Standarddeckung versichert?",
    answer: "Die Standarddeckung umfasst Feuer (Brand, Blitzschlag, Explosion), Leitungswasser (Rohrbruch, Frostschäden) und Sturm/Hagel. Versichert ist das Wohngebäude samt Zubehör, das sich im oder am Gebäude befindet.",
  },
  {
    question: "Sind Nebengebäude und Garagen mitversichert?",
    answer: "Nebengebäude und Garagen sind versicherbar, müssen aber in der Regel separat in der Police angegeben werden.",
  },
  {
    question: "Warum ist eine Elementarschadenversicherung wichtig?",
    answer: "Der Klimawandel führt zu immer mehr Wetterextremen. Überschwemmungen, Starkregen und Erdrutsche können extreme Kosten verursachen, die ohne Elementarschutz selbst getragen werden müssen.",
  },
  {
    question: "Was sind unbenannte Gefahren?",
    answer: "Bei der Deckung unbenannter Gefahren wird alles versichert, was nicht ausdrücklich ausgeschlossen ist (z.B. Krieg, Vorsatz). Dies bietet den umfassendsten Versicherungsschutz für Ihr Gebäude.",
  },
];

export default function Wohngebaeudeversicherung() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Wohngebäudeversicherung",
    description: "Umfassender Schutz für Ihr Eigenheim gegen Feuer, Sturm, Leitungswasser und Elementargefahren.",
    url: "/wohngebaeudeversicherung"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Wohngebäudeversicherung", url: "/wohngebaeudeversicherung" }
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
        icon={Building2}
        title="Wohngebäudeversicherung"
        description="Dein Zuhause verdient den besten Schutz. Sichere dein Eigenheim gegen die wichtigsten Risiken ab."
        heroImage={heroImage}
      />

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Versichert ist das Wohngebäude samt Zubehör, das der Instandhaltung des
                Gebäudes oder dessen Nutzung zu Wohnzwecken dient – soweit es sich im
                versicherten Gebäude befindet oder außen angebracht ist. Nebengebäude
                und Garagen sind versicherbar, müssen aber separat angegeben werden.
              </p>

              {/* Versicherte Gefahren */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Versicherte Gefahren (Standarddeckung):</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {gefahren.map((gefahr, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-muted/50 border border-border text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <gefahr.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{gefahr.title}</h3>
                    <p className="text-sm text-muted-foreground">{gefahr.description}</p>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Sinnvolle Leistungserweiterungen:</h2>
              <p className="text-muted-foreground mb-6">
                Die drei Grundrisiken hat fast jeder Hauseigentümer abgesichert. Dennoch bietet diese Deckung noch viele Angriffspunkte für Schäden, deren Folgen du selbst tragen müsstest.
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
                        <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">{schaden.amount}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{schaden.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Nachlesen - vor dem CTA */}
            <NachlesenSidebar links={nachlesenLinks} mode="mobile" />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Schütze dein Eigenheim
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Lass dich beraten und finde die optimale Absicherung für dein Zuhause – inklusive Elementarschutz.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://landingpage.vema-eg.de/?z=bewertung&m=maklerkalkar&p=wohngebaeude"
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
                Häufige Fragen zur Wohngebäudeversicherung
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

            <NachlesenSidebar links={nachlesenLinks} mode="desktop" />
          </div>
        </div>
      </section>
    </Layout>
  );
}