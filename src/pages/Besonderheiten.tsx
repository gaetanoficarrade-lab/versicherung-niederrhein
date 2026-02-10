import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, MessageCircle, Settings, Handshake, BadgeCheck, GraduationCap, LifeBuoy, Banknote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO, { createBreadcrumbSchema } from "@/components/SEO";

const vorteile = [
  {
    icon: ShieldCheck,
    title: "Unabhängigkeit statt Verkaufszwang",
    description: "Als Makler sind wir kein Vertreter einer Versicherung, sondern Ihr persönlicher Treuhänder. Wir scannen den Markt neutral und finden die Lösung, die wirklich zu Ihnen passt.",
  },
  {
    icon: UserCheck,
    title: "Sie geben den Takt vor",
    description: "Ob Sie eine einzelne Absicherung benötigen oder eine ganzheitliche Beratung für die gesamte Familie wünschen – Sie allein bestimmen den Umfang unserer Zusammenarbeit.",
  },
  {
    icon: MessageCircle,
    title: "Kommunikation auf Augenhöhe",
    description: "Persönlich im Büro, per Telefon, via E-Mail oder ganz modern in einer Online-Beratung – wir sind da, wo Sie uns brauchen.",
  },
  {
    icon: Settings,
    title: "Service nach Maß",
    description: 'Wir drängen uns nicht auf. Möchten Sie einen jährlichen Check-up? Gerne! Bevorzugen Sie Infos nur per Newsletter? Auch das ist okay. Wir sind Ihr Berater, kein \u201EStörenfried\u201C.',
  },
];

const vemaVorteile = [
  {
    icon: Handshake,
    title: "Sonderkonditionen",
    description: "Durch den Zusammenschluss von über 5.000 Maklerbetrieben profitieren Sie von Tarifen, die es so am freien Markt oft gar nicht gibt.",
  },
  {
    icon: BadgeCheck,
    title: "Geprüfte Qualität",
    description: "Als VEMA-Partner erfüllen wir strenge Kriterien an Berufserfahrung, wirtschaftliche Solidität und fachliche Kompetenz im Team.",
  },
  {
    icon: GraduationCap,
    title: "Aktuelles Expertenwissen",
    description: "Durch kontinuierliche Weiterbildung bleiben wir für Sie immer am Puls der Zeit.",
  },
];

export default function Besonderheiten() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Was uns besonders macht", url: "/besonderheiten" }
  ]);

  return (
    <Layout>
      <SEO structuredData={breadcrumbSchema} />
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
              Warum Sie bei uns in den besten Händen sind
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Versicherungen gibt es heute an jeder Ecke: bei der Bank, direkt beim Versicherer 
              oder mit zwei Klicks im Internet. Warum sollten Sie sich trotzdem für einen 
              Versicherungsmakler entscheiden – und warum genau für uns?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground leading-relaxed">
              Die Antwort ist simpel: <strong>Wir stehen auf Ihrer Seite.</strong> Während andere 
              oft nur ihre eigenen Interessen oder die ihrer Gesellschaft vertreten, sind wir 
              ausschließlich Ihrem Auftrag verpflichtet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ihre Vorteile */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-primary/5" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-primary/5" />
        </div>

        <div className="section-container relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center"
          >
            Ihre Vorteile auf einen Blick
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {vorteile.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-md transition-shadow group"
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VEMA Partnerschaften */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              VEMA eG
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Echte Mehrwerte durch starke Partnerschaften
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Um Ihnen maximale Qualität zu bieten, nutzen wir die Kraft der VEMA eG 
              (Deutschlands führende Genossenschaft für Versicherungsmakler). Das bedeutet für Sie:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vemaVorteile.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center group hover:shadow-md transition-shadow"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schadensfall + Kosten */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Schadensfall */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <LifeBuoy className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Wir lassen Sie nicht im Regen stehen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Arbeit zeigt ihren wahren Wert, wenn es darauf ankommt: im Schadensfall. 
                Wir begleiten die Regulierung von A bis Z und setzen uns dafür ein, dass Sie die 
                Leistung erhalten, die Ihnen zusteht. Versprochen!
              </p>
            </motion.div>

            {/* Kosten */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Banknote className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Was kostet Sie dieser Service?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Transparenz ist uns wichtig: Unsere Dienstleistung ist für Sie ohne zusätzliche 
                Kosten. Da wir den Versicherern Verwaltungs- und Vertriebsarbeit abnehmen, erhalten 
                wir eine branchenübliche Courtage, die bereits in den Versicherungsprämien enthalten 
                ist. Sie zahlen also keinen Cent extra für unsere umfassende Beratung und Betreuung.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
