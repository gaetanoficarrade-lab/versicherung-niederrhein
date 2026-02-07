import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  Car, 
  PawPrint, 
  Home, 
  HeartPulse, 
  ArrowRight,
  Users,
  Building,
  Scale,
  Briefcase,
  Wallet,
  Truck,
  HardHat,
  Flame,
  Building2,
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
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Home,
    title: "Hausratversicherung",
    description: "Schütze dein gesamtes Eigentum gegen Wasserschäden und Einbruch.",
    href: "/hausratversicherung",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: PawPrint,
    title: "Tierhalterhaftpflicht",
    description: "Schütze dich vor finanziellen Risiken durch deinen Vierbeiner.",
    href: "/tierhalterhaftpflicht",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    icon: HeartPulse,
    title: "Berufsunfähigkeit",
    description: "Deine Arbeitskraft ist dein wertvollstes Gut – sichere sie ab.",
    href: "/berufsunfaehigkeit",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: Scale,
    title: "Rechtsschutz",
    description: "Bei Rechtsstreitigkeiten stehen wir an deiner Seite.",
    href: "/rechtsschutzversicherung",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Wallet,
    title: "Baufinanzierung",
    description: "Vergleich von über 200 Darlehensgebern für deine Immobilie.",
    href: "/baufinanzierung",
    gradient: "from-teal-500 to-cyan-400",
  },
];

const gewerbeServices = [
  {
    icon: Briefcase,
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter.",
    href: "/betriebshaftpflicht",
    gradient: "from-slate-400 to-slate-300",
  },
  {
    icon: Building2,
    title: "Gewerbliche Gebäude",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien.",
    href: "/gewerbliche-gebaeude",
    gradient: "from-slate-400 to-slate-300",
  },
  {
    icon: Truck,
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark.",
    href: "/fuhrparkversicherung",
    gradient: "from-slate-400 to-slate-300",
  },
  {
    icon: Flame,
    title: "Betriebsunterbrechung",
    description: "Sichern Sie sich gegen finanzielle Ausfälle ab.",
    href: "/betriebsunterbrechung",
    gradient: "from-slate-400 to-slate-300",
  },
  {
    icon: HardHat,
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige.",
    href: "/berufshaftpflicht",
    gradient: "from-slate-400 to-slate-300",
  },
  {
    icon: Scale,
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer gegen Haftungsrisiken.",
    href: "/do-versicherung",
    gradient: "from-slate-400 to-slate-300",
  },
];

export default function Services() {
  const [isGewerbe, setIsGewerbe] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const services = isGewerbe ? gewerbeServices : privatServices;
  const totalItems = services.length;

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalItems);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, totalItems]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  // Calculate position for each card in 3D space
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + totalItems) % totalItems);
    const adjustedDiff = normalizedDiff > totalItems / 2 ? normalizedDiff - totalItems : normalizedDiff;
    
    const absDistance = Math.abs(adjustedDiff);
    const isActive = absDistance === 0;
    const isAdjacent = absDistance === 1;
    const isVisible = absDistance <= 2;
    
    // Calculate transforms
    const translateX = adjustedDiff * 280;
    const translateZ = isActive ? 100 : isAdjacent ? 0 : -100;
    const scale = isActive ? 1.1 : isAdjacent ? 0.85 : 0.7;
    const rotateY = adjustedDiff * -15;
    const opacity = isActive ? 1 : isAdjacent ? 0.7 : 0.4;
    const zIndex = isActive ? 30 : isAdjacent ? 20 : 10;

    return {
      translateX,
      translateZ,
      scale,
      rotateY,
      opacity: isVisible ? opacity : 0,
      zIndex,
      isActive,
      isVisible,
    };
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

        {/* 3D Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isGewerbe ? "gewerbe" : "privat"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div 
              className="relative h-[420px] md:h-[480px] perspective-1000"
              style={{ perspective: "1200px" }}
            >
              {/* Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const style = getCardStyle(index);
                  
                  if (!style.isVisible) return null;
                  
                  return (
                    <motion.div
                      key={service.title}
                      className="absolute"
                      initial={false}
                      animate={{
                        x: style.translateX,
                        z: style.translateZ,
                        scale: style.scale,
                        rotateY: style.rotateY,
                        opacity: style.opacity,
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                      style={{ 
                        zIndex: style.zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      onClick={() => {
                        if (!style.isActive) {
                          handleDotClick(index);
                        }
                      }}
                    >
                      <div 
                        className={cn(
                          "w-[280px] md:w-[320px] rounded-3xl overflow-hidden transition-all duration-300",
                          style.isActive 
                            ? "shadow-2xl cursor-default" 
                            : "cursor-pointer hover:scale-105",
                          isGewerbe
                            ? "bg-white/10 backdrop-blur-sm border border-white/20"
                            : "bg-card border border-border shadow-xl"
                        )}
                      >
                        {/* Gradient Header */}
                        <div className={cn(
                          "h-32 md:h-40 bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                          service.gradient
                        )}>
                          {/* Animated background pattern */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
                          </div>
                          
                          {/* Floating particles for active card */}
                          {style.isActive && (
                            <>
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 rounded-full bg-white/40"
                                  initial={{ 
                                    x: Math.random() * 200 - 100, 
                                    y: 100,
                                    opacity: 0 
                                  }}
                                  animate={{ 
                                    y: -50,
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{ 
                                    duration: 2 + Math.random(), 
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                            </>
                          )}
                          
                          <motion.div
                            animate={style.isActive ? { 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                          >
                            <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                              <Icon className="h-10 w-10 md:h-12 md:w-12 text-white" strokeWidth={1.5} />
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h3 className={cn(
                            "text-xl font-bold mb-2",
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
                          
                          {style.isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Link to={service.href}>
                                <Button 
                                  className={cn(
                                    "w-full gap-2",
                                    isGewerbe && "bg-white text-[hsl(178,45%,20%)] hover:bg-white/90"
                                  )}
                                >
                                  Mehr erfahren
                                  <ArrowRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className={cn(
                  "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110",
                  isGewerbe 
                    ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" 
                    : "bg-card hover:bg-muted text-foreground shadow-lg border border-border"
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110",
                  isGewerbe 
                    ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm" 
                    : "bg-card hover:bg-muted text-foreground shadow-lg border border-border"
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    index === activeIndex 
                      ? cn(
                          "w-8 h-3",
                          isGewerbe ? "bg-white" : "bg-primary"
                        )
                      : cn(
                          "w-3 h-3 hover:scale-125",
                          isGewerbe ? "bg-white/30 hover:bg-white/50" : "bg-primary/30 hover:bg-primary/50"
                        )
                  )}
                />
              ))}
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
