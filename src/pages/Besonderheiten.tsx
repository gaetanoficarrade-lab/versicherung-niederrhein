import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    title: "Unabhängige Beratung",
    description: "Als Versicherungsmakler arbeiten wir im Gegensatz zum einfachen Versicherungsvertreter nicht im Auftrag einer Gesellschaft, sondern ausschließlich in Ihrem Auftrag.",
  },
  {
    title: "Marktübergreifende Suche",
    description: "Als Sachwalter suchen wir für Sie in den Bereichen Versicherungen, Finanzierungen und Geldanlagen die preiswertesten und leistungsstärksten Angebote ohne von einem Produktanbieter abhängig zu sein.",
  },
  {
    title: "Zugang zu allen Versicherern",
    description: "Wir können uns bei jedem Versicherer in Deutschland um Ihren Versicherungsschutz bemühen. Uns ist es ein besonderes Anliegen, immer ein optimales, individuelles und in Preis und Leistung ausgewogenes Angebot zu erarbeiten.",
  },
  {
    title: "Praktische Erfahrung",
    description: "Wir berücksichtigen auch unsere praktischen Erfahrungen innerhalb unserer langjährigen Tätigkeit wie z.B. Regulierungsverhalten, Kundenservice oder der Kompetenz der Ansprechpartner.",
  },
  {
    title: "Jahrzehntelange Erfahrung",
    description: "Durch jahrzehntelange Erfahrung und strikte Wahrung der Unabhängigkeit können wir Ihnen beste Qualität vermitteln und einen ausgezeichneten Service bieten.",
  },
];

export default function Besonderheiten() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Das Unternehmen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Was uns besonders macht
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wir sind als Versicherungsmakler Sachwalter unserer Kunden und bieten 
              Ihnen ein umfangreiches Dienstleistungspaket.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-foreground leading-relaxed">
              Dabei stehen Vertrauen, Individualität und Flexibilität immer im Vordergrund 
              unserer Arbeit. Ihre Anforderungen und Bedürfnisse sind der Maßstab für unsere 
              Arbeit. <strong>Wir agieren ausschließlich im Interesse unserer Kunden und stehen 
              Ihnen zur Seite.</strong>
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Das heißt für Sie:
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
