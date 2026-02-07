import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight,
  Users,
  Building,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SegmentedToggle from "@/components/SegmentedToggle";

// Import hero images for backgrounds
import heroKfz from "@/assets/hero-kfz.jpg";
import carouselHausrat from "@/assets/carousel-hausrat.jpg";
import heroTier from "@/assets/hero-tierhalterhaftpflicht.jpg";
import heroBU from "@/assets/hero-berufsunfaehigkeit.jpg";
import carouselRechtsschutz from "@/assets/carousel-rechtsschutz.jpg";
import heroBaufi from "@/assets/hero-baufinanzierung.jpg";
import heroBetriebshaftpflicht from "@/assets/hero-business-betriebshaftpflicht.jpg";
import heroGebaeude from "@/assets/hero-business-gebaeude.jpg";
import heroFuhrpark from "@/assets/hero-business-fuhrpark.jpg";
import heroUnterbrechung from "@/assets/hero-business-unterbrechung.jpg";
import heroBerufshaftpflicht from "@/assets/hero-business-berufshaftpflicht.jpg";
import heroDNO from "@/assets/hero-business-dno.jpg";

const privatServices = [
  {
    title: "KFZ-Versicherung",
    description: "Sichere dein Fahrzeug mit dem optimalen Preis-Leistungsverhältnis.",
    href: "/kfz-versicherung",
    image: heroKfz,
  },
  {
    title: "Hausratversicherung",
    description: "Schütze dein gesamtes Eigentum gegen Wasserschäden und Einbruch.",
    href: "/hausratversicherung",
    image: carouselHausrat,
  },
  {
    title: "Tierhalterhaftpflicht",
    description: "Schütze dich vor finanziellen Risiken durch deinen Vierbeiner.",
    href: "/tierhalterhaftpflicht",
    image: heroTier,
  },
  {
    title: "Berufsunfähigkeit",
    description: "Deine Arbeitskraft ist dein wertvollstes Gut – sichere sie ab.",
    href: "/berufsunfaehigkeit",
    image: heroBU,
  },
  {
    title: "Rechtsschutz",
    description: "Bei Rechtsstreitigkeiten stehen wir an deiner Seite.",
    href: "/rechtsschutzversicherung",
    image: carouselRechtsschutz,
  },
  {
    title: "Baufinanzierung",
    description: "Vergleich von über 200 Darlehensgebern für deine Immobilie.",
    href: "/baufinanzierung",
    image: heroBaufi,
  },
];

const gewerbeServices = [
  {
    title: "Betriebshaftpflicht",
    description: "Schützen Sie Ihr Unternehmen vor Haftungsansprüchen Dritter.",
    href: "/betriebshaftpflicht",
    image: heroBetriebshaftpflicht,
  },
  {
    title: "Gewerbliche Gebäude",
    description: "Umfassender Schutz für Ihre Geschäftsimmobilien.",
    href: "/gewerbliche-gebaeude",
    image: heroGebaeude,
  },
  {
    title: "Fuhrparkversicherung",
    description: "Optimale Absicherung für Ihren gesamten Fuhrpark.",
    href: "/fuhrparkversicherung",
    image: heroFuhrpark,
  },
  {
    title: "Betriebsunterbrechung",
    description: "Sichern Sie sich gegen finanzielle Ausfälle ab.",
    href: "/betriebsunterbrechung",
    image: heroUnterbrechung,
  },
  {
    title: "Berufshaftpflicht",
    description: "Professioneller Schutz für Freiberufler und Selbstständige.",
    href: "/berufshaftpflicht",
    image: heroBerufshaftpflicht,
  },
  {
    title: "D&O-Versicherung",
    description: "Absicherung für Geschäftsführer gegen Haftungsrisiken.",
    href: "/do-versicherung",
    image: heroDNO,
  },
];

export default function Services() {
  const [isGewerbe, setIsGewerbe] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  
  const services = isGewerbe ? gewerbeServices : privatServices;
  const totalItems = services.length;
  const AUTO_PLAY_DURATION = 7000; // 7 seconds per slide for smoother effect
  const PROGRESS_INTERVAL = 30; // Update progress every 30ms for smoother animation

  // Smooth auto-play with progress
  useEffect(() => {
    setProgress(0);
    
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (AUTO_PLAY_DURATION / PROGRESS_INTERVAL));
        if (next >= 100) {
          return 0;
        }
        return next;
      });
    }, PROGRESS_INTERVAL);

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
      setProgress(0);
    }, AUTO_PLAY_DURATION);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [totalItems, isGewerbe]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setProgress(0);
    resetAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
    setProgress(0);
    resetAutoPlay();
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (AUTO_PLAY_DURATION / PROGRESS_INTERVAL));
        if (next >= 100) return 0;
        return next;
      });
    }, PROGRESS_INTERVAL);

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
      setProgress(0);
    }, AUTO_PLAY_DURATION);
  };

  // Calculate position for each card with smooth, flowing scaling
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + totalItems) % totalItems);
    const adjustedDiff = normalizedDiff > totalItems / 2 ? normalizedDiff - totalItems : normalizedDiff;
    
    const absDistance = Math.abs(adjustedDiff);
    const isActive = absDistance === 0;
    const isAdjacent = absDistance === 1;
    const isVisible = absDistance <= 2;
    
    // Flowing scale animation: active card grows then shrinks as progress advances
    // When progress is 0-50%, active card is at max size
    // When progress is 50-100%, active card shrinks while next card grows
    const progressNormalized = progress / 100;
    
    // Active card: starts big, shrinks toward end
    // Next card (adjustedDiff === 1): starts small, grows toward end
    let dynamicScale = 1;
    if (isActive) {
      // Active card: max at 0%, shrinks to base at 100%
      dynamicScale = 1.25 - (progressNormalized * 0.05);
    } else if (adjustedDiff === 1) {
      // Next card: grows as we approach transition
      dynamicScale = 0.82 + (progressNormalized * 0.08);
    } else if (adjustedDiff === -1) {
      // Previous card
      dynamicScale = 0.82;
    } else {
      dynamicScale = 0.65;
    }
    
    // Calculate transforms
    const translateX = adjustedDiff * 320;
    const translateZ = isActive ? 120 : isAdjacent ? -30 : -100;
    const rotateY = adjustedDiff * -10;
    const opacity = isActive ? 1 : isAdjacent ? 0.7 : 0.3;
    const zIndex = isActive ? 30 : isAdjacent ? 20 : 10;

    return {
      translateX,
      translateZ,
      scale: dynamicScale,
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
            {isGewerbe 
              ? "Ob Betriebshaftpflicht, Gebäudeversicherung oder Fuhrparkschutz: Wir finden die optimale Absicherung für Ihr Unternehmen."
              : "Egal ob du eine Absicherung für dein Alter, deine Gesundheit oder eine Haftpflichtversicherung brauchst: Wir richten uns nach deinem Bedarf."
            }
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
              setProgress(0);
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
              className="relative h-[420px] md:h-[480px]"
              style={{ perspective: "1400px" }}
            >
              {/* Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
              {services.map((service, index) => {
                  const style = getCardStyle(index);
                  
                  if (!style.isVisible) return null;
                  
                  return (
                    <motion.div
                      key={service.title}
                      className="absolute"
                      animate={{
                        x: style.translateX,
                        z: style.translateZ,
                        scale: style.scale,
                        rotateY: style.rotateY,
                        opacity: style.opacity,
                      }}
                      transition={{ 
                        type: "tween",
                        duration: 0.15,
                        ease: "easeOut"
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
                          "w-[280px] md:w-[360px] rounded-2xl overflow-hidden transition-shadow duration-300",
                          style.isActive 
                            ? "shadow-2xl cursor-default" 
                            : "cursor-pointer",
                          isGewerbe
                            ? "border border-white/10"
                            : "border border-border"
                        )}
                      >
                        {/* Image Header with Overlay and Zoom Effect */}
                        <div className="h-44 md:h-52 relative overflow-hidden">
                          <motion.img 
                            src={service.image} 
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            animate={{
                              scale: style.isActive ? 1.1 : 1.0,
                            }}
                            transition={{
                              duration: 7,
                              ease: "easeOut"
                            }}
                          />
                          {/* Dark gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                          
                          {/* Title on image */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className={cn(
                          "p-5 transition-colors duration-300",
                          isGewerbe 
                            ? "bg-[hsl(178,45%,15%)]" 
                            : "bg-card"
                        )}>
                          <p className={cn(
                            "text-sm leading-relaxed mb-4",
                            isGewerbe ? "text-white/60" : "text-muted-foreground"
                          )}>
                            {service.description}
                          </p>
                          
                          <Link to={service.href}>
                            <Button 
                              variant={style.isActive ? "default" : "outline"}
                              className={cn(
                                "w-full gap-2 transition-all duration-300",
                                isGewerbe && style.isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
                                isGewerbe && !style.isActive && "border-white/20 text-white/70 hover:bg-white/10"
                              )}
                            >
                              Mehr erfahren
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
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
            
            {/* Progress Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="relative group"
                >
                  <div className={cn(
                    "w-10 h-1.5 rounded-full overflow-hidden transition-all duration-300",
                    index === activeIndex 
                      ? isGewerbe ? "bg-white/20" : "bg-primary/20"
                      : isGewerbe ? "bg-white/10 hover:bg-white/20" : "bg-primary/10 hover:bg-primary/20"
                  )}>
                    {index === activeIndex && (
                      <motion.div 
                        className={cn(
                          "h-full rounded-full",
                          isGewerbe ? "bg-white" : "bg-primary"
                        )}
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.05 }}
                      />
                    )}
                  </div>
                </button>
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
