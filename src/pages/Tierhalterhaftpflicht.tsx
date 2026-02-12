import { motion } from "framer-motion";
import { PawPrint, ArrowRight, Check, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import InsuranceHero from "@/components/InsuranceHero";
import { Link } from "react-router-dom";
import SEO, { createFAQSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-tierhalterhaftpflicht.jpg";

const versichert = [
  "Personen-, Sach- und Vermögensschäden von Dritten durch das versicherte Tier",
  "Mietsachschäden, Tierhüterrisiko, Flurschäden",
  "Hundehalterhaftpflicht: Welpen mitversicherbar",
  "Pferdehalterhaftpflicht: Fohlen, Deckschäden, private Kutschfahrten, Reitbeteiligungen, unentgeltlicher Verleih",
];

const nichtVersichert = [
  "Vorsätzlich herbeigeführte Schäden",
  "Kernenergie, Krieg, innere Unruhen, Streik",
  "Gewerbliche Nutzung (z.B. entgeltlicher Verleih, Reitunterricht, berufliche Turniere)",
  "Reine Vermögensschäden ohne vorherigen Sach- oder Personenschaden",
  "Bestimmte Hunderassen (z.B. Rottweiler, Dobermann, Pitbull) sind anfragepflichtig",
];

const schadenbeispiele = [
  {
    title: "Freilaufender Hund",
    description: "Ein nicht angeleinter Hund lief auf ein Kind zu. Das Kind wich erschrocken zurück, stürzte und verletzte sich am Kopf. Die Eltern nahmen den Hundebesitzer wegen Schmerzensgeld und Behandlungskosten in Anspruch.",
    amount: "2.000 €",
  },
  {
    title: "Pferd schlägt aus",
    description: "Beim Ausführen erschrak eine Stute und schlug mit dem Huf aus. Ein Passant wurde an der Brust getroffen – zwei gebrochene Rippen. Schmerzensgeld, Verdienstausfall und Behandlungskosten.",
    amount: "5.000 €",
  },
  {
    title: "Hund verursacht Fahrradsturz",
    description: "Bei einem Spaziergang lief ein Hund vor ein Fahrrad. Der Radfahrer konnte nicht mehr bremsen, stürzte und erlitt erhebliche Verletzungen.",
    amount: "15.000 €",
  },
];

const faqs = [
  {
    question: "Wer braucht eine Tierhalterhaftpflichtversicherung?",
    answer: "Jeder Tierhalter – denn nach § 833 BGB kann er auf Schadenersatz in Anspruch genommen werden, sobald sein Tier einen Dritten schädigt. Das gilt selbst dann, wenn ihn kein Verschulden trifft (Gefährdungshaftung)!",
  },
  {
    question: "Was ist versichert?",
    answer: "Die gesetzliche Haftpflicht als Halter von Hunden bzw. Pferden zu privaten Zwecken. Der Versicherungsschutz besteht nur für die im Vertrag bezeichneten Tiere. Gedeckt sind Personen-, Sach- und Vermögensschäden.",
  },
  {
    question: "Wer ist mitversichert?",
    answer: "Der Versicherungsnehmer als Tierhalter und Personen, die mit seinem Willen das Tier betreuen, beaufsichtigen oder führen.",
  },
  {
    question: "Was passiert im Schadenfall?",
    answer: "Die Tierhalterhaftpflicht prüft zunächst, ob die Schadenersatzansprüche berechtigt sind. Sind sie nicht gerechtfertigt, wehrt sie unberechtigte Ansprüche ab. Sämtliche Kosten bis hin zu einem Rechtsstreit werden übernommen.",
  },
  {
    question: "Sind bestimmte Hunderassen problematisch?",
    answer: "Bestimmte Hunderassen wie Rottweiler, Dobermann oder Pitbull sind anfragepflichtig. Das bedeutet, der Versicherer prüft individuell, ob und zu welchen Konditionen Versicherungsschutz gewährt wird.",
  },
];

export default function Tierhalterhaftpflicht() {
  const faqSchema = createFAQSchema(faqs);
  const serviceSchema = createServiceSchema({
    name: "Tierhalterhaftpflichtversicherung",
    description: "Haftpflichtschutz für Hunde- und Pferdehalter gegen Schadenersatzforderungen.",
    url: "/tierhalterhaftpflicht"
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" },
    { name: "Tierhalterhaftpflicht", url: "/tierhalterhaftpflicht" }
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
        icon={PawPrint}
        title="Tierhalterhaftpflicht"
        description="Als Halter eines Tieres haftest du für Schäden, die das Tier verursacht – auch wenn dich selbst keine Schuld trifft (§ 833 BGB)."
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
              {/* Wichtig-Box */}
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Wichtig zu wissen
                </h2>
                <p className="text-foreground leading-relaxed">
                  Jeder Tierhalter kann auf Schadenersatz in Anspruch genommen werden,
                  sobald sein Tier einen Dritten schädigt. Das gilt selbst dann, wenn ihn
                  kein Verschulden trifft (<strong>Gefährdungshaftung nach § 833 BGB</strong>).
                  Gerade bei Personenschäden können extreme Kosten entstehen. Du haftest
                  <strong> in unbegrenzter Höhe</strong> für dein Tier.
                </p>
              </div>

              {/* Was ist versichert */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Was ist versichert?</h2>
              <div className="space-y-3 mb-12">
                {versichert.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nicht versichert */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Was ist nicht versichert?</h2>
              <div className="space-y-3">
                {nichtVersichert.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                      <XCircle className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-8 rounded-2xl bg-primary/5 text-center mb-12"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Schütze dich als Tierhalter
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vergleiche verschiedene Tarife und finde den optimalen Schutz für dich und deinen Vierbeiner.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="http://www.mr-money.de/module/tie/start.php?id=00102005"
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen zur Tierhalterhaftpflicht
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