import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    title: "Unabhängige Beratung",
    description: "Als Versicherungsmakler arbeiten wir im Gegensatz zum einfachen Versicherungsvertreter nicht im Auftrag einer Gesellschaft, sondern ausschließlich in deinem Auftrag.",
  },
  {
    title: "Marktübergreifende Suche",
    description: "Als Sachwalter suchen wir für dich in den Bereichen Versicherungen, Finanzierungen und Geldanlagen die preiswertesten und leistungsstärksten Angebote ohne von einem Produktanbieter abhängig zu sein.",
  },
  {
    title: "Zugang zu allen Versicherern",
    description: "Wir können uns bei jedem Versicherer in Deutschland um deinen Versicherungsschutz bemühen. Uns ist es ein besonderes Anliegen, immer ein optimales, individuelles und in Preis und Leistung ausgewogenes Angebot zu erarbeiten.",
  },
  {
    title: "Praktische Erfahrung",
    description: "Wir berücksichtigen auch unsere praktischen Erfahrungen innerhalb unserer langjährigen Tätigkeit wie z.B. Regulierungsverhalten, Kundenservice oder der Kompetenz der Ansprechpartner.",
  },
  {
    title: "Jahrzehntelange Erfahrung",
    description: "Durch jahrzehntelange Erfahrung und strikte Wahrung der Unabhängigkeit können wir dir beste Qualität vermitteln und einen ausgezeichneten Service bieten.",
  },
];

export default function Besonderheiten() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-64 h-64 opacity-[0.04]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,0 100,100 0,100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-[20%] w-48 h-48 opacity-[0.04]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-[5%] w-32 h-32 opacity-[0.04]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
        </div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-[0.025]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="special-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#special-dots)" />
          </svg>
        </div>

        <div className="section-container relative">
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
              dir ein umfangreiches Dienstleistungspaket.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-primary/5" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.02]" />
        </div>

        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-foreground leading-relaxed">
              Dabei stehen Vertrauen, Individualität und Flexibilität immer im Vordergrund 
              unserer Arbeit. Deine Anforderungen und Bedürfnisse sind der Maßstab für unsere 
              Arbeit. <strong>Wir agieren ausschließlich im Interesse unserer Kunden und stehen 
              dir zur Seite.</strong>
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Das heißt für dich:
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors relative overflow-hidden group"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex-shrink-0 relative">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="relative">
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
