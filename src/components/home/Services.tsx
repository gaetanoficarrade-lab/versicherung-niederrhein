import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
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
  Flame,
  ChevronLeft,
  ChevronRight
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
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Home,
    title: "Hausratversicherung",
    description: "Schütze dein gesamtes Eigentum gegen Wasserschäden und Einbruch.",
    href: "/hausratversicherung",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: PawPrint,
    title: "Tierhalterhaftpflicht",
    description: "Schütze dich vor finanziellen Risiken durch deinen Vierbeiner.",
    href: "/tierhalterhaftpflicht",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: HeartPulse,
    title: "Berufsunfähigkeit",
    description: "Deine Arbeitskraft ist dein wertvollstes Gut – sichere sie ab.",
    href: "/berufsunfaehigkeit",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Scale,
    title: "Rechtsschutz",
    description: "Bei Rechtsstreitigkeiten stehen wir an deiner Seite.",
    href: "/rechtsschutzversicherung",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Wallet,
    title: "Baufinanzierung",
    description: "Vergleich von über 200 Darlehensgebern für deine Immobilie.",
    href: "/baufinanzierung",
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const gewerbeServices = [
  {
    icon: Briefcase,
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter.",
    href: "/betriebshaftpflicht",
    color: "from-slate-400/30 to-slate-500/20",
  },
  {
    icon: Building2,
    title: "Gewerbliche Gebäude",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien.",
    href: "/gewerbliche-gebaeude",
    color: "from-slate-400/30 to-slate-500/20",
  },
  {
    icon: Truck,
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark.",
    href: "/fuhrparkversicherung",
    color: "from-slate-400/30 to-slate-500/20",
  },
  {
    icon: Flame,
    title: "Betriebsunterbrechung",
    description: "Sichern Sie sich gegen finanzielle Ausfälle ab.",
    href: "/betriebsunterbrechung",
    color: "from-slate-400/30 to-slate-500/20",
  },
  {
    icon: HardHat,
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige.",
    href: "/berufshaftpflicht",
    color: "from-slate-400/30 to-slate-500/20",
  },
  {
    icon: Scale,
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer gegen Haftungsrisiken.",
    href: "/do-versicherung",
    color: "from-slate-400/30 to-slate-500/20",
  },
];

export default function Services() {
  const [isGewerbe, setIsGewerbe] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const services = isGewerbe ? gewerbeServices : privatServices;

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={cn(
      "py-24 overflow-hidden transition-colors duration-500",
      isGewerbe 
        ? "bg-gradient-to-b from-[hsl(178,45%,12%)] to-[hsl(178,45%,18%)]" 
        : "bg-muted/30"
    )}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={cn(
            "inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4",
            isGewerbe 
              ? "bg-white/10 text-white/80" 
              : "bg-secondary text-secondary-foreground"
          )}>
            Unsere Leistungen
          </span>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isGewerbe ? "text-white" : "text-foreground"
          )}>
            Versicherungen für jeden Bedarf
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto mb-8",
            isGewerbe ? "text-white/70" : "text-muted-foreground"
          )}>
            Egal ob du eine Absicherung für dein Alter, deine Gesundheit oder eine 
            Haftpflichtversicherung brauchst: Wir richten uns nach deinem Bedarf.
          </p>
          
          <SegmentedToggle
            options={[
              { id: "privat", label: "Privatkunden", icon: Users },
              { id: "gewerbe", label: "Gewerbekunden", icon: Building },
            ]}
            activeId={isGewerbe ? "gewerbe" : "privat"}
            onChange={(id) => {
              setIsGewerbe(id === "gewerbe");
              setActiveIndex(0);
            }}
            variant={isGewerbe ? "dark" : "light"}
          />
        </motion.div>

        {/* Desktop: Bento Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isGewerbe ? "gewerbe" : "privat"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-12 grid-rows-2 gap-4 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                // Bento grid layout: large, medium, small cards
                const isLarge = index === 0;
                const isMedium = index === 1 || index === 2;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={cn(
                      isLarge && "col-span-6 row-span-2",
                      isMedium && "col-span-6 row-span-1",
                      !isLarge && !isMedium && "col-span-4 row-span-1"
                    )}
                  >
                    <Link to={service.href} className="block h-full group">
                      <motion.div 
                        className={cn(
                          "relative h-full rounded-3xl border overflow-hidden transition-all duration-300",
                          isGewerbe 
                            ? "bg-white/5 border-white/10 hover:border-white/30" 
                            : "bg-card border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
                          isLarge ? "p-10" : "p-6"
                        )}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gradient background */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                          service.color
                        )} />
                        
                        {/* Decorative circle */}
                        <div className={cn(
                          "absolute -right-10 -bottom-10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity",
                          isLarge ? "w-64 h-64" : "w-32 h-32",
                          isGewerbe ? "bg-white" : "bg-primary"
                        )} />
                        
                        <div className="relative z-10 h-full flex flex-col">
                          {/* Icon */}
                          <motion.div 
                            className={cn(
                              "inline-flex rounded-2xl items-center justify-center mb-4 transition-all duration-300",
                              isGewerbe 
                                ? "bg-white/10 group-hover:bg-white/20" 
                                : "bg-primary/10 group-hover:bg-primary/20",
                              isLarge ? "h-20 w-20" : "h-14 w-14"
                            )}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={cn(
                              isGewerbe ? "text-white" : "text-primary",
                              isLarge ? "h-10 w-10" : "h-7 w-7"
                            )} strokeWidth={1.5} />
                          </motion.div>
                          
                          <h3 className={cn(
                            "font-semibold mb-3 group-hover:translate-x-1 transition-transform",
                            isGewerbe ? "text-white" : "text-foreground group-hover:text-primary",
                            isLarge ? "text-2xl" : "text-lg"
                          )}>
                            {service.title}
                          </h3>
                          
                          <p className={cn(
                            "leading-relaxed flex-1",
                            isGewerbe ? "text-white/60" : "text-muted-foreground",
                            isLarge ? "text-base" : "text-sm"
                          )}>
                            {service.description}
                          </p>
                          
                          <motion.div 
                            className={cn(
                              "inline-flex items-center gap-2 font-medium mt-4",
                              isGewerbe ? "text-white/80" : "text-primary",
                              isLarge ? "text-base" : "text-sm"
                            )}
                          >
                            <span>Mehr erfahren</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile & Tablet: Horizontal Scroll Cards */}
        <div className="lg:hidden relative">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <Link to={service.href} className="block h-full group">
                    <div className={cn(
                      "relative h-full rounded-2xl border p-6 transition-all duration-300",
                      isGewerbe 
                        ? "bg-white/5 border-white/10" 
                        : "bg-card border-border"
                    )}>
                      {/* Icon */}
                      <div className={cn(
                        "inline-flex h-14 w-14 rounded-xl items-center justify-center mb-4",
                        isGewerbe ? "bg-white/10" : "bg-primary/10"
                      )}>
                        <Icon className={cn(
                          "h-7 w-7",
                          isGewerbe ? "text-white" : "text-primary"
                        )} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className={cn(
                        "text-lg font-semibold mb-2",
                        isGewerbe ? "text-white" : "text-foreground"
                      )}>
                        {service.title}
                      </h3>
                      
                      <p className={cn(
                        "text-sm leading-relaxed mb-4",
                        isGewerbe ? "text-white/60" : "text-muted-foreground"
                      )}>
                        {service.description}
                      </p>
                      
                      <span className={cn(
                        "inline-flex items-center gap-2 text-sm font-medium",
                        isGewerbe ? "text-white/80" : "text-primary"
                      )}>
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => scrollTo('left')}
              className={cn(
                "p-2 rounded-full transition-colors",
                isGewerbe 
                  ? "bg-white/10 hover:bg-white/20 text-white" 
                  : "bg-primary/10 hover:bg-primary/20 text-primary"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className={cn(
                "p-2 rounded-full transition-colors",
                isGewerbe 
                  ? "bg-white/10 hover:bg-white/20 text-white" 
                  : "bg-primary/10 hover:bg-primary/20 text-primary"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={`/versicherungen?tab=${isGewerbe ? "gewerbe" : "privat"}`}>
            <Button 
              size="lg" 
              className={cn(
                "gap-2",
                isGewerbe && "bg-white text-[hsl(178,45%,20%)] hover:bg-white/90"
              )}
            >
              Alle Versicherungen entdecken
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
