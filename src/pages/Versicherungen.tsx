import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import bgPrivat from "@/assets/bg-privat-versicherungen.jpg";
import bgGewerbe from "@/assets/bg-gewerbe-versicherungen.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  Dog, 
  Home, 
  Building2, 
  Briefcase, 
  Shield, 
  Truck, 
  HardHat,
  Scale,
  Flame,
  ArrowRight,
  Users,
  Building,
  Plane,
  Sun,
  Heart,
  Activity,
  Stethoscope,
  Wallet,
  Baby
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SegmentedToggle from "@/components/SegmentedToggle";
import { cn } from "@/lib/utils";
import SEO, { createBreadcrumbSchema } from "@/components/SEO";

// Sachversicherungen (Property Insurance)
const sachversicherungen = [
  {
    title: "KFZ-Versicherung",
    description: "Schütze dein Fahrzeug mit einer maßgeschneiderten Absicherung – von Haftpflicht bis Vollkasko.",
    icon: Car,
    href: "/kfz-versicherung",
  },
  {
    title: "Hausratversicherung",
    description: "Alles, was dir wichtig ist, unter einem Dach geschützt – von Möbeln bis Elektronik.",
    icon: Home,
    href: "/hausratversicherung",
  },
  {
    title: "Wohngebäudeversicherung",
    description: "Dein Zuhause verdient den besten Schutz – gegen Feuer, Sturm und Wasserschäden.",
    icon: Building2,
    href: "/wohngebaeudeversicherung",
  },
  {
    title: "Tierhalterhaftpflicht",
    description: "Dein Vierbeiner ist Teil der Familie – sichere dich gegen unvorhergesehene Schäden ab.",
    icon: Dog,
    href: "/tierhalterhaftpflicht",
  },
  {
    title: "Privathaftpflicht",
    description: "Im Alltag kann schnell etwas passieren – mit der Privathaftpflicht bist du auf der sicheren Seite.",
    icon: Shield,
    href: "/privat-haftpflicht",
  },
  {
    title: "Rechtsschutzversicherung",
    description: "Wenn es um dein Recht geht, stehen wir an deiner Seite – mit kompetenter Absicherung.",
    icon: Scale,
    href: "/rechtsschutzversicherung",
  },
  {
    title: "Reiseversicherungen",
    description: "Entspannt in den Urlaub – mit Schutz bei Stornierung, Abbruch und im Krankheitsfall.",
    icon: Plane,
    href: "/reiseversicherung",
  },
  {
    title: "Photovoltaik-Versicherung",
    description: "Schütze deine Investition in die Zukunft vor Schäden und Ertragsausfällen.",
    icon: Sun,
    href: "/photovoltaik-versicherung",
  },
];

// Vorsorge (Prevention & Life Insurance)
const vorsorgeversicherungen = [
  {
    title: "Berufsunfähigkeitsversicherung",
    description: "Deine Arbeitskraft ist dein wertvollstes Gut – sichere sie richtig ab.",
    icon: Briefcase,
    href: "/berufsunfaehigkeit",
  },
  {
    title: "Unfallversicherung",
    description: "Unfälle passieren schnell – sichere dich gegen die finanziellen Folgen ab.",
    icon: Activity,
    href: "/unfallversicherung",
  },
  {
    title: "Krankenzusatzversicherung",
    description: "Bessere Leistungen als die Kasse – von Zahnersatz bis Chefarztbehandlung.",
    icon: Heart,
    href: "/krankenzusatz",
  },
  {
    title: "Private Krankenversicherung",
    description: "Wechsle in die PKV und profitiere von besseren Leistungen und kürzeren Wartezeiten.",
    icon: Stethoscope,
    href: "/private-krankenversicherung",
  },
  {
    title: "Risikolebensversicherung",
    description: "Schütze deine Liebsten finanziell ab – für den Fall, dass dir etwas zustößt.",
    icon: Shield,
    href: "/risikolebensversicherung",
  },
  {
    title: "Rentenversicherung",
    description: "Sorge jetzt vor – für einen sorgenfreien Ruhestand mit ausreichend Einkommen.",
    icon: Wallet,
    href: "/rentenversicherung",
  },
  {
    title: "Kapitallebensversicherung",
    description: "Zwei Ziele mit einer Versicherung: Absicherung und Vermögensaufbau.",
    icon: Wallet,
    href: "/kapitallebensversicherung",
  },
  {
    title: "Kindervorsorge",
    description: "Das Beste für deinen Nachwuchs – optimale Absicherung von Geburt an.",
    icon: Baby,
    href: "/kindervorsorge",
  },
];

// Finanzierung
const finanzierung = [
  {
    title: "Baufinanzierung",
    description: "Vergleich von über 200 Darlehensgebern – für die optimale Finanzierung deiner Immobilie.",
    icon: Building2,
    href: "/baufinanzierung",
  },
];

// Business insurance products
const gewerbeInsurances = [
  {
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter im Geschäftsalltag.",
    icon: Briefcase,
    href: "/betriebshaftpflicht",
  },
  {
    title: "Gewerbliche Gebäudeversicherung",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien gegen alle relevanten Risiken.",
    icon: Building2,
    href: "/gewerbliche-gebaeude",
  },
  {
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark – flexibel und kosteneffizient.",
    icon: Truck,
    href: "/fuhrparkversicherung",
  },
  {
    title: "Betriebsunterbrechung",
    description: "Sichern Sie Ihren Betrieb gegen finanzielle Ausfälle bei unvorhergesehenen Ereignissen ab.",
    icon: Flame,
    href: "/betriebsunterbrechung",
  },
  {
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige bei beruflichen Risiken.",
    icon: HardHat,
    href: "/berufshaftpflicht",
  },
  {
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer und Vorstände gegen persönliche Haftungsrisiken.",
    icon: Scale,
    href: "/do-versicherung",
  },
];

// Ken Burns animation for private section
const kenBurnsAnimation = {
  scale: [1, 1.15, 1.1, 1.2, 1],
  x: [0, 30, -20, 10, 0],
  y: [0, -20, 10, -10, 0],
};

interface InsuranceCardProps {
  insurance: {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
  };
  index: number;
  isGewerbe: boolean;
}

function InsuranceCard({ insurance, index, isGewerbe }: InsuranceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link 
        to={insurance.href}
        className="group block h-full"
      >
        <div className={cn(
          "relative h-full rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl",
          isGewerbe 
            ? "bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/15" 
            : "bg-card border border-border hover:border-primary/30 hover:shadow-primary/5"
        )}>
          {/* Gradient overlay */}
          <div className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
            isGewerbe ? "from-white/10 to-transparent" : "from-primary/10 to-transparent"
          )} />
          
          <div className="relative z-10">
            {/* Premium icon container with gradient border - matching homepage style */}
            <div className="relative inline-flex mb-5">
              <div className={cn(
                "absolute inset-0 rounded-2xl blur-sm group-hover:blur-md transition-all",
                isGewerbe 
                  ? "bg-gradient-to-br from-white/20 to-white/5" 
                  : "bg-gradient-to-br from-primary/20 to-primary/5"
              )} />
              <div className={cn(
                "relative h-14 w-14 rounded-2xl bg-gradient-to-br border flex items-center justify-center transition-all",
                isGewerbe 
                  ? "from-white/10 to-transparent border-white/20 group-hover:border-white/40 group-hover:from-white/20" 
                  : "from-primary/10 to-transparent border-primary/20 group-hover:border-primary/40 group-hover:from-primary/20"
              )}>
                <insurance.icon className={cn(
                  "h-7 w-7",
                  isGewerbe ? "text-white" : "text-primary"
                )} strokeWidth={1.5} />
              </div>
            </div>
            
            <h3 className={cn(
              "text-lg font-semibold mb-3 transition-colors leading-tight line-clamp-2",
              isGewerbe 
                ? "text-white group-hover:text-white" 
                : "text-foreground group-hover:text-primary"
            )}>
              {insurance.title}
            </h3>
            
            <p className={cn(
              "text-sm leading-relaxed mb-4",
              isGewerbe ? "text-white/70" : "text-muted-foreground"
            )}>
              {insurance.description}
            </p>
            
            <div className={cn(
              "inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3",
              isGewerbe ? "text-white/90" : "text-primary"
            )}>
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Versicherungen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [isGewerbe, setIsGewerbe] = useState(tabParam === "gewerbe");

  // Sync URL parameter with state
  useEffect(() => {
    if (tabParam === "gewerbe") {
      setIsGewerbe(true);
    } else if (tabParam === "privat") {
      setIsGewerbe(false);
    }
  }, [tabParam]);

  const handleToggleChange = (id: string) => {
    const newIsGewerbe = id === "gewerbe";
    setIsGewerbe(newIsGewerbe);
    setSearchParams({ tab: newIsGewerbe ? "gewerbe" : "privat" });
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Versicherungen", url: "/versicherungen" }
  ]);

  return (
    <Layout>
      <SEO structuredData={breadcrumbSchema} />
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background - Ken Burns effect for both modes */}
        <AnimatePresence mode="wait">
          {!isGewerbe ? (
            <motion.div
              key="private-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={kenBurnsAnimation}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgPrivat})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </motion.div>
          ) : (
            <motion.div
              key="business-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={kenBurnsAnimation}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(178,45%,15%)]/95 via-[hsl(178,45%,20%)]/75 to-[hsl(178,45%,25%)]/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(178,45%,15%)] via-[hsl(178,45%,20%)]/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="section-container relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Toggle Switch */}
            <SegmentedToggle
              options={[
                { id: "privat", label: "Privatkunden", icon: Users },
                { id: "gewerbe", label: "Gewerbekunden", icon: Building },
              ]}
              activeId={isGewerbe ? "gewerbe" : "privat"}
              onChange={handleToggleChange}
              variant={isGewerbe ? "dark" : "glass"}
              className="mb-8"
            />

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isGewerbe ? "gewerbe" : "privat"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
                  isGewerbe ? "text-white" : "text-primary"
                )}>
                  {isGewerbe 
                    ? "Versicherungen für Ihr Unternehmen" 
                    : "Versicherungen für dein Leben"}
                </h1>
                <p className={cn(
                  "text-lg md:text-xl max-w-2xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.3)]",
                  isGewerbe ? "text-white/90" : "text-foreground/80"
                )}>
                  {isGewerbe 
                    ? "Maßgeschneiderte Absicherung für Gewerbetreibende. Wir analysieren Ihre Risiken und finden die optimale Lösung für Ihren Betrieb." 
                    : "Finde die perfekte Absicherung für dich und deine Familie. Wir beraten dich persönlich und finden gemeinsam die beste Lösung."}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Insurance Cards Sections */}
      <AnimatePresence mode="wait">
        {!isGewerbe ? (
          <motion.div
            key="privat-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sachversicherungen */}
            <section className="py-16 bg-muted/30">
              <div className="section-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-2">Sachversicherungen</h2>
                  <p className="text-muted-foreground">Schütze dein Eigentum und sichere dich ab</p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {sachversicherungen.map((insurance, index) => (
                    <InsuranceCard 
                      key={insurance.title} 
                      insurance={insurance} 
                      index={index}
                      isGewerbe={false}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Vorsorge */}
            <section className="py-16 bg-background">
              <div className="section-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-2">Vorsorge & Gesundheit</h2>
                  <p className="text-muted-foreground">Sichere deine Zukunft und Gesundheit ab</p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {vorsorgeversicherungen.map((insurance, index) => (
                    <InsuranceCard 
                      key={insurance.title} 
                      insurance={insurance} 
                      index={index}
                      isGewerbe={false}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Finanzierung */}
            <section className="py-16 bg-muted/30">
              <div className="section-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-2">Finanzierung</h2>
                  <p className="text-muted-foreground">Wir finden die beste Finanzierung für dein Projekt</p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {finanzierung.map((insurance, index) => (
                    <InsuranceCard 
                      key={insurance.title} 
                      insurance={insurance} 
                      index={index}
                      isGewerbe={false}
                    />
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="gewerbe-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <section className="py-20 bg-[hsl(178,45%,20%)]">
              <div className="section-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">Gewerbliche Versicherungen</h2>
                  <p className="text-white/70">Umfassender Schutz für Ihr Unternehmen</p>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {gewerbeInsurances.map((insurance, index) => (
                    <InsuranceCard 
                      key={insurance.title} 
                      insurance={insurance} 
                      index={index}
                      isGewerbe={true}
                    />
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className={cn(
        "py-20 transition-colors duration-500",
        isGewerbe ? "bg-[hsl(178,45%,15%)]" : "bg-background"
      )}>
        <div className="section-container">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              isGewerbe ? "text-white" : "text-foreground"
            )}>
              {isGewerbe 
                ? "Individuelle Beratung für Ihr Unternehmen" 
                : "Lass uns gemeinsam die beste Lösung finden"}
            </h2>
            <p className={cn(
              "text-lg mb-8",
              isGewerbe ? "text-white/70" : "text-muted-foreground"
            )}>
              {isGewerbe 
                ? "Vereinbaren Sie ein unverbindliches Beratungsgespräch. Wir analysieren Ihre Risiken und erstellen ein maßgeschneidertes Konzept." 
                : "Vereinbare einen Termin für eine persönliche Beratung. Wir nehmen uns Zeit für dich und deine Fragen."}
            </p>
            <Link to="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all",
                  isGewerbe 
                    ? "bg-white text-primary hover:bg-white/90" 
                    : "bg-primary text-primary-foreground hover:bg-accent"
                )}
              >
                {isGewerbe ? "Beratungstermin anfragen" : "Termin vereinbaren"}
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
