import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, AlertTriangle, Heart, Smile, Baby, TrendingUp, Clock, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ZahnzusatzFormModal from "@/components/ZahnzusatzFormModal";
import heroImage from "@/assets/hero-zahnzusatz.jpg";

const costComparison = [
  { treatment: "Zahnkrone (Keramik)", total: "500–1.000 €", selfPay: "250–600 €", withInsurance: "0–100 €" },
  { treatment: "Implantat (pro Zahn)", total: "2.000–4.000 €", selfPay: "1.500–3.000 €", withInsurance: "0–400 €" },
  { treatment: "Brücke (3-gliedrig)", total: "1.500–3.000 €", selfPay: "800–2.000 €", withInsurance: "0–300 €" },
  { treatment: "Inlay (Keramik)", total: "400–800 €", selfPay: "300–700 €", withInsurance: "0–80 €" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Hohe Kostenersparnis bei Zahnersatz",
    description: "Die gesetzliche Kasse zahlt nur 50–60 % der Regelversorgung. Bei hochwertigen Lösungen bleibst du auf mehreren tausend Euro Eigenanteil sitzen.",
    highlight: "Mehrere tausend Euro Eigenanteil vermeiden.",
  },
  {
    icon: Sparkles,
    title: "Implantate werden bezahlbar",
    description: "Ein Implantat kostet schnell 2.000–4.000 € pro Zahn. Mit einer Zahnzusatzversicherung kannst du dir die medizinisch beste Lösung leisten – statt die billigste nehmen zu müssen.",
    highlight: "Die beste Lösung statt der billigsten.",
  },
  {
    icon: Smile,
    title: "Hochwertige Materialien statt Kassenstandard",
    description: "Die gesetzliche Kasse zahlt nur die sogenannte Regelversorgung – oft sichtbare Metallkronen oder einfache Lösungen. Mit Zusatzversicherung bekommst du Keramik, Vollkeramik und ästhetischen Zahnersatz.",
    highlight: "Ästhetik und Selbstbewusstsein inklusive.",
  },
  {
    icon: Stethoscope,
    title: "Freie Zahnarztwahl und bessere Behandlung",
    description: "Ohne Zusatzversicherung entscheidet indirekt dein Budget über die Behandlung. Mit Zusatzversicherung entscheidest du selbst über die beste medizinische Versorgung.",
    highlight: "Medizinische Freiheit statt Budgetzwang.",
  },
  {
    icon: CheckCircle2,
    title: "Professionelle Zahnreinigung inklusive",
    description: "Eine PZR kostet 80–150 € und wird 1–2x jährlich empfohlen. Allein dadurch kann sich die Versicherung rechnerisch bereits lohnen. Das ist dein No-Brainer-Benefit.",
    highlight: "Allein die Zahnreinigung macht sich bezahlt.",
  },
  {
    icon: Heart,
    title: "Vorsorge statt Reparatur",
    description: "Die Zusatzversicherung zahlt nicht nur, wenn etwas kaputt ist: Zahnreinigung, Prophylaxe und Früherkennung werden übernommen. Gesundheitsprävention, nicht nur Kostenübernahme.",
    highlight: "Gesunde Zähne ein Leben lang.",
  },
  {
    icon: Shield,
    title: "Schutz vor plötzlich hohen Rechnungen",
    description: "Zahnkosten sind unplanbar, sofort fällig und hoch. Eine 3.000 €-Rechnung kommt ohne Vorwarnung. Genau dafür brauchst du den Schutz.",
    highlight: "Ein kaputter Zahn darf kein finanzielles Problem werden.",
  },
  {
    icon: Baby,
    title: "Auch für Kinder und Kieferorthopädie",
    description: "Zahnspangen, Zusatzleistungen bei KFO und bessere Brackets – viele Eltern wissen nicht, dass eine Zahnzusatzversicherung auch hier hilft. Ideal für Familien.",
    highlight: "Zahnspange ohne finanzielle Sorgen.",
  },
  {
    icon: TrendingUp,
    title: "Kalkulierbare Kosten statt böser Überraschungen",
    description: "Zahnmedizin wird jedes Jahr teurer. Tausche unkalkulierbare Einzelkosten gegen einen festen monatlichen Betrag. Planungssicherheit für dich und deine Familie.",
    highlight: "Planungssicherheit statt Kostenschock.",
  },
  {
    icon: Clock,
    title: "Jetzt abschließen – solange du versicherbar bist",
    description: "Zahnzusatzversicherungen prüfen deinen aktuellen Zahnstatus. Wenn bereits Behandlungen angeraten oder begonnen wurden, wird abgelehnt oder ausgeschlossen.",
    highlight: "Versicherbar sind nur gesunde Zähne – am besten bevor etwas passiert.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Zahnzusatzversicherung() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Layout>
      <SEO />
      <ZahnzusatzFormModal open={formOpen} onOpenChange={setFormOpen} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Strahlend lächelnde Frau – Zahnzusatzversicherung"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>

        <div className="relative section-container py-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6"
            >
              <Shield className="h-4 w-4" />
              Zahnzusatzversicherung
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
            >
              Was kostet dich ein
              <br />
              <span className="text-primary-foreground">kaputter Zahn?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-background/80 mb-4 leading-relaxed"
            >
              Ein Implantat: bis zu 4.000 €. Eine Krone: bis zu 1.000 €.
              <br />
              <strong className="text-background">Die Kasse zahlt davon nur einen Bruchteil.</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-background/70 mb-8"
            >
              Mit einer Zahnzusatzversicherung vermeidest du hohe Eigenanteile und sicherst dir die beste Behandlung – bevor es zu spät ist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => setFormOpen(true)} className="gap-2 px-8 bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Jetzt Angebot berechnen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Was zahlst du wirklich <span className="gradient-text">ohne Zahnzusatz?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Die gesetzliche Kasse übernimmt nur die Regelversorgung. 
              Alles, was medizinisch oder ästhetisch besser ist, zahlst du komplett selbst.
            </p>
          </motion.div>

          {/* Cost Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Behandlung</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Gesamtkosten</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-destructive">Dein Eigenanteil</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-primary">Mit Zahnzusatz</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, i) => (
                    <motion.tr
                      key={item.treatment}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="border-b border-border hover:bg-secondary/50 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium text-foreground">{item.treatment}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{item.total}</td>
                      <td className="py-4 px-4 text-center font-semibold text-destructive">{item.selfPay}</td>
                      <td className="py-4 px-4 text-center font-bold text-primary">{item.withInsurance}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Richtwerte. Tatsächliche Erstattung abhängig vom gewählten Tarif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 hero-gradient">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          >
            <AlertTriangle className="h-10 w-10 text-primary-foreground flex-shrink-0" />
            <div>
              <p className="text-xl md:text-2xl font-bold text-primary-foreground">
                Versicherbar sind nur gesunde Zähne.
              </p>
              <p className="text-primary-foreground/80 mt-1">
                Warte nicht, bis der Zahnarzt eine Behandlung anrät – dann ist es oft zu spät für den Abschluss.
              </p>
            </div>
            <Button size="lg" onClick={() => setFormOpen(true)} className="bg-background text-foreground hover:bg-background/90 gap-2 flex-shrink-0">
              Jetzt Angebot berechnen
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              10 Gründe, warum sich eine Zahnzusatzversicherung <span className="gradient-text">für dich lohnt</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-premium p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{benefit.description}</p>
                    <p className="text-sm font-semibold text-primary">→ {benefit.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Warum über uns abschließen?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {[
                { value: "27+", label: "Jahre Erfahrung", icon: Shield },
                { value: "6.000+", label: "zufriedene Kunden", icon: Heart },
                { value: "100%", label: "unabhängig", icon: CheckCircle2 },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-12 leading-relaxed">
              Wir vergleichen alle relevanten Tarife und finden den, der wirklich zu dir passt – 
              unabhängig, persönlich und ohne versteckte Kosten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lass dich jetzt <span className="gradient-text">kostenlos beraten</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Du willst wissen, was ein kaputter Zahn dich kosten würde?
              <br />
              Was du ohne Versicherung selbst zahlst?
              <br />
              Und wie du das vermeidest?
            </p>
            <p className="text-lg font-medium text-foreground mb-8">
              Dann melde dich bei uns – die Beratung ist kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setFormOpen(true)} className="gap-2 px-10 bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Jetzt Angebot berechnen
                <ArrowRight className="h-5 w-5" />
              </Button>
              <a href="tel:02824809293">
                <Button size="lg" variant="outline" className="gap-2 px-8 text-base">
                  02824-809293 anrufen
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
