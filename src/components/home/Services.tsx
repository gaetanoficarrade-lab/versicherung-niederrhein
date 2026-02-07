import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  PawPrint, 
  Home, 
  HeartPulse, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  Users,
  Building,
  Scale,
  Briefcase,
  Wallet,
  Plane,
  Sun,
  Truck,
  HardHat,
  Flame
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SegmentedToggle from "@/components/SegmentedToggle";

const privatServices = [
  {
    icon: Car,
    title: "KFZ-Versicherung",
    description: "Sichere dein Fahrzeug mit dem optimalen Preis-Leistungsverhältnis.",
    href: "/kfz-versicherung",
  },
  {
    icon: Home,
    title: "Hausratversicherung",
    description: "Schütze dein gesamtes Eigentum gegen Wasserschäden und Einbruch.",
    href: "/hausratversicherung",
  },
  {
    icon: PawPrint,
    title: "Tierhalterhaftpflicht",
    description: "Schütze dich vor finanziellen Risiken durch deinen Vierbeiner.",
    href: "/tierhalterhaftpflicht",
  },
  {
    icon: HeartPulse,
    title: "Berufsunfähigkeit",
    description: "Deine Arbeitskraft ist dein wertvollstes Gut – sichere sie ab.",
    href: "/berufsunfaehigkeit",
  },
  {
    icon: Scale,
    title: "Rechtsschutz",
    description: "Bei Rechtsstreitigkeiten stehen wir an deiner Seite.",
    href: "/rechtsschutzversicherung",
  },
  {
    icon: Wallet,
    title: "Baufinanzierung",
    description: "Vergleich von über 200 Darlehensgebern für deine Immobilie.",
    href: "/baufinanzierung",
  },
];

const gewerbeServices = [
  {
    icon: Briefcase,
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter.",
    href: "/kontakt",
  },
  {
    icon: Building2,
    title: "Gewerbliche Gebäude",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien.",
    href: "/kontakt",
  },
  {
    icon: Truck,
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark.",
    href: "/kontakt",
  },
  {
    icon: Flame,
    title: "Betriebsunterbrechung",
    description: "Sichern Sie sich gegen finanzielle Ausfälle ab.",
    href: "/kontakt",
  },
  {
    icon: HardHat,
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige.",
    href: "/kontakt",
  },
  {
    icon: Scale,
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer gegen Haftungsrisiken.",
    href: "/kontakt",
  },
];

export default function Services() {
  const [isGewerbe, setIsGewerbe] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = isGewerbe ? gewerbeServices : privatServices;

  return (
    <section className="py-24 bg-muted/30 pattern-dots overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Versicherungen für jeden Bedarf
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Egal ob du eine Absicherung für dein Alter, deine Gesundheit oder eine 
            Haftpflichtversicherung brauchst: Wir richten uns nach deinem Bedarf.
          </p>
          
          {/* Toggle Switch - prominently placed */}
          <SegmentedToggle
            options={[
              { id: "privat", label: "Privatkunden", icon: Users },
              { id: "gewerbe", label: "Gewerbekunden", icon: Building },
            ]}
            activeId={isGewerbe ? "gewerbe" : "privat"}
            onChange={(id) => setIsGewerbe(id === "gewerbe")}
            variant="light"
          />
        </motion.div>

        {/* Interactive Hexagon/Carousel Style Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isGewerbe ? "gewerbe" : "privat"}
            initial={{ opacity: 0, x: isGewerbe ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isGewerbe ? -50 : 50 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Interactive Cards with 3D effect */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="perspective-1000"
                  >
                    <Link to={service.href} className="block h-full">
                      <motion.div 
                        className={cn(
                          "relative h-full p-6 rounded-2xl border transition-all duration-500",
                          "bg-card hover:bg-card/80 border-border hover:border-primary/40",
                          "group overflow-hidden"
                        )}
                        animate={{
                          rotateY: isHovered ? 5 : 0,
                          rotateX: isHovered ? -5 : 0,
                          scale: isHovered ? 1.02 : 1,
                          z: isHovered ? 50 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        />
                        
                        {/* Floating particles effect on hover */}
                        {isHovered && (
                          <>
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-primary/30"
                                initial={{ 
                                  x: Math.random() * 100, 
                                  y: Math.random() * 100,
                                  opacity: 0 
                                }}
                                animate={{ 
                                  y: [null, -20, -40],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: i * 0.2,
                                  repeat: Infinity
                                }}
                              />
                            ))}
                          </>
                        )}
                        
                        {/* Icon with glow effect */}
                        <div className="relative z-10">
                          <motion.div 
                            className="relative inline-flex mb-5"
                            animate={{ 
                              y: isHovered ? -5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={cn(
                              "absolute inset-0 rounded-2xl blur-md transition-all duration-300",
                              isHovered 
                                ? "bg-gradient-to-br from-primary/40 to-accent/20" 
                                : "bg-gradient-to-br from-primary/20 to-primary/5"
                            )} />
                            <div className={cn(
                              "relative h-14 w-14 rounded-2xl bg-gradient-to-br border flex items-center justify-center transition-all duration-300",
                              isHovered
                                ? "from-primary/20 to-primary/10 border-primary/50 shadow-lg shadow-primary/20"
                                : "from-primary/10 to-transparent border-primary/20"
                            )}>
                              <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                            </div>
                          </motion.div>
                          
                          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                            {service.description}
                          </p>
                          
                          <motion.span 
                            className="inline-flex items-center gap-2 text-primary font-medium text-sm"
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Mehr erfahren
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/versicherungen">
            <Button size="lg" className="gap-2">
              Alle Versicherungen entdecken
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
