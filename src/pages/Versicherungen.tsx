import { useState } from "react";
import { Link } from "react-router-dom";
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
  Building
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

// Private insurance products
const privatInsurances = [
  {
    title: "KFZ-Versicherung",
    description: "Schütze dein Fahrzeug mit einer maßgeschneiderten Absicherung – von Haftpflicht bis Vollkasko.",
    icon: Car,
    href: "/kfz-versicherung",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "Tierhalterhaftpflicht",
    description: "Dein Vierbeiner ist Teil der Familie – sichere dich gegen unvorhergesehene Schäden ab.",
    icon: Dog,
    href: "/tierhalterhaftpflicht",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    title: "Hausratversicherung",
    description: "Alles, was dir wichtig ist, unter einem Dach geschützt – von Möbeln bis Elektronik.",
    icon: Home,
    href: "/hausratversicherung",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    title: "Privathaftpflicht",
    description: "Im Alltag kann schnell etwas passieren – mit der Privathaftpflicht bist du auf der sicheren Seite.",
    icon: Shield,
    href: "/kontakt",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    title: "Wohngebäudeversicherung",
    description: "Dein Zuhause verdient den besten Schutz – gegen Feuer, Sturm und Wasserschäden.",
    icon: Building2,
    href: "/kontakt",
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    title: "Rechtsschutzversicherung",
    description: "Wenn es um dein Recht geht, stehen wir an deiner Seite – mit kompetenter Absicherung.",
    icon: Scale,
    href: "/kontakt",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
];

// Business insurance products
const gewerbeInsurances = [
  {
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter im Geschäftsalltag.",
    icon: Briefcase,
    href: "/kontakt",
    color: "from-slate-500/20 to-slate-600/10",
  },
  {
    title: "Gewerbliche Gebäudeversicherung",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien gegen alle relevanten Risiken.",
    icon: Building2,
    href: "/kontakt",
    color: "from-zinc-500/20 to-zinc-600/10",
  },
  {
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark – flexibel und kosteneffizient.",
    icon: Truck,
    href: "/kontakt",
    color: "from-neutral-500/20 to-neutral-600/10",
  },
  {
    title: "Betriebsunterbrechung",
    description: "Sichern Sie Ihren Betrieb gegen finanzielle Ausfälle bei unvorhergesehenen Ereignissen ab.",
    icon: Flame,
    href: "/kontakt",
    color: "from-stone-500/20 to-stone-600/10",
  },
  {
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige bei beruflichen Risiken.",
    icon: HardHat,
    href: "/kontakt",
    color: "from-gray-500/20 to-gray-600/10",
  },
  {
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer und Vorstände gegen persönliche Haftungsrisiken.",
    icon: Scale,
    href: "/kontakt",
    color: "from-slate-600/20 to-slate-700/10",
  },
];

// Ken Burns animation for private section
const kenBurnsAnimation = {
  scale: [1, 1.15, 1.1, 1.2, 1],
  x: [0, 30, -20, 10, 0],
  y: [0, -20, 10, -10, 0],
};

export default function Versicherungen() {
  const [isGewerbe, setIsGewerbe] = useState(false);

  const insurances = isGewerbe ? gewerbeInsurances : privatInsurances;

  return (
    <Layout>
      {/* Hero Section with Ken Burns effect for Private, Business style for Gewerbe */}
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
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')] bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="section-container relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Toggle Switch */}
            <motion.div 
              className={cn(
                "mb-8 inline-flex items-center gap-2 p-1.5 rounded-full backdrop-blur-md border",
                isGewerbe 
                  ? "bg-slate-800/70 border-slate-600/50" 
                  : "bg-white/20 border-white/30"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setIsGewerbe(false)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300",
                  !isGewerbe 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-white hover:text-white/80 hover:bg-white/10"
                )}
              >
                <Users className="h-4 w-4" />
                Privatkunden
              </button>
              <button
                onClick={() => setIsGewerbe(true)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300",
                  isGewerbe 
                    ? "bg-white text-slate-900 shadow-lg" 
                    : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                )}
              >
                <Building className="h-4 w-4" />
                Gewerbekunden
              </button>
            </motion.div>

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
                  "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                  isGewerbe ? "text-white" : "text-foreground"
                )}>
                  {isGewerbe 
                    ? "Versicherungen für Ihr Unternehmen" 
                    : "Versicherungen für dein Leben"}
                </h1>
                <p className={cn(
                  "text-lg md:text-xl max-w-2xl",
                  isGewerbe ? "text-slate-300" : "text-muted-foreground"
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

      {/* Insurance Cards Section */}
      <section className={cn(
        "py-20 transition-colors duration-500",
        isGewerbe ? "bg-slate-900" : "bg-muted/30"
      )}>
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={isGewerbe ? "gewerbe-cards" : "privat-cards"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {insurances.map((insurance, index) => (
                <motion.div
                  key={insurance.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={insurance.href}
                    className="group block h-full"
                  >
                    <div className={cn(
                      "relative h-full rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl",
                      isGewerbe 
                        ? "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600" 
                        : "bg-card border border-border hover:border-primary/30 hover:shadow-primary/5"
                    )}>
                      {/* Gradient overlay */}
                      <div className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
                        insurance.color
                      )} />
                      
                      <div className="relative z-10">
                        <div className={cn(
                          "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-colors",
                          isGewerbe 
                            ? "bg-slate-700 text-slate-300 group-hover:bg-slate-600" 
                            : "bg-primary/10 text-primary group-hover:bg-primary/20"
                        )}>
                          <insurance.icon className="h-7 w-7" />
                        </div>
                        
                        <h3 className={cn(
                          "text-xl font-semibold mb-3",
                          isGewerbe ? "text-white" : "text-foreground"
                        )}>
                          {insurance.title}
                        </h3>
                        
                        <p className={cn(
                          "text-sm leading-relaxed mb-4",
                          isGewerbe ? "text-slate-400" : "text-muted-foreground"
                        )}>
                          {insurance.description}
                        </p>
                        
                        <div className={cn(
                          "inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3",
                          isGewerbe ? "text-slate-300" : "text-primary"
                        )}>
                          {isGewerbe ? "Mehr erfahren" : "Mehr erfahren"}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(
        "py-20 transition-colors duration-500",
        isGewerbe ? "bg-slate-800" : "bg-background"
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
              isGewerbe ? "text-slate-300" : "text-muted-foreground"
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
                    ? "bg-white text-slate-900 hover:bg-slate-100" 
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
