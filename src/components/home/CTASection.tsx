import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, X, Loader2, Car, Building2, ShieldCheck, PiggyBank, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL_KFZ = "https://api.leadconnectorhq.com/widget/booking/6QmhAF5iRMBBQIw7TsK5";
const BOOKING_URL_OTHER = "https://api.leadconnectorhq.com/widget/booking/nfUk88aUcWx4RkOWAzdX";

type ModalStep = "closed" | "selection" | "calendar";

const categories = [
  {
    id: "kfz",
    icon: Car,
    title: "Kfz & Private Sachversicherungen",
    subtitle: "Schaden melden oder Absicherung prüfen",
    description: "Sie haben einen neuen Wagen, möchten Ihre Privathaftpflicht optimieren oder einen Schaden unkompliziert melden?",
    calendarUrl: BOOKING_URL_KFZ,
  },
  {
    id: "gewerbe",
    icon: Building2,
    title: "Gewerbe & Industrie",
    subtitle: "Risikomanagement für Ihr Unternehmen",
    description: "Betriebliche Risiken erfordern eine detaillierte Analyse und individuelle Konzepte. Ob Haftung, Inhaltsversicherung oder Flottenmanagement.",
    calendarUrl: BOOKING_URL_OTHER,
  },
  {
    id: "biometrie",
    icon: ShieldCheck,
    title: "Biometrie & Existenzsicherung",
    subtitle: "Einkommensschutz & Berufsunfähigkeit",
    description: "Ihre Arbeitskraft ist Ihr wertvollstes Gut. Da die Absicherung gegen Berufsunfähigkeit oder schwere Krankheiten Maßarbeit ist, wird dieses Thema bei uns direkt durch die Geschäftsleitung betreut.",
    calendarUrl: BOOKING_URL_OTHER,
  },
  {
    id: "altersvorsorge",
    icon: PiggyBank,
    title: "Altersvorsorge & Investment",
    subtitle: "Ruhestandsplanung & Vermögensaufbau",
    description: "Damit im Alter die Lebensqualität bleibt, braucht es einen Plan mit Weitblick. Wir unterstützen Sie bei der Auswahl renditestarker und steueroptimierter Konzepte.",
    calendarUrl: BOOKING_URL_OTHER,
  },
];

export default function CTASection() {
  const [step, setStep] = useState<ModalStep>("closed");
  const [selectedCalendarUrl, setSelectedCalendarUrl] = useState<string>("");
  const [iframeLoadedKfz, setIframeLoadedKfz] = useState(false);
  const [iframeLoadedOther, setIframeLoadedOther] = useState(false);

  const handleSelect = (calendarUrl: string) => {
    setSelectedCalendarUrl(calendarUrl);
    setStep("calendar");
  };

  const handleClose = () => {
    setStep("closed");
    setSelectedCalendarUrl("");
  };

  const isCalendarLoaded = selectedCalendarUrl === BOOKING_URL_KFZ ? iframeLoadedKfz : iframeLoadedOther;

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-background blur-3xl" />
      </div>

      {/* Hidden preloaded iframes */}
      <iframe
        src={BOOKING_URL_KFZ}
        className="hidden"
        onLoad={() => setIframeLoadedKfz(true)}
        title="Terminbuchung KFZ Preload"
      />
      <iframe
        src={BOOKING_URL_OTHER}
        className="hidden"
        onLoad={() => setIframeLoadedOther(true)}
        title="Terminbuchung Sonstige Preload"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Bereit für Ihre persönliche Beratung?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin und lassen 
            Sie uns gemeinsam Ihre optimale Absicherung finden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-background text-primary hover:bg-background/90 px-8"
              onClick={() => setStep("selection")}
            >
              <Calendar className="h-5 w-5" />
              Termin vereinbaren
            </Button>
            <a href="tel:02824809293">
              <Button
                size="lg"
                className="gap-2 bg-background/20 backdrop-blur-sm border-2 border-white text-white hover:bg-background/30 px-8"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">02824-809293</span>
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Oder schreiben Sie uns: info@makler-kalkar.de
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

            <AnimatePresence mode="wait">
              {/* Step 1: Selection */}
              {step === "selection" && (
                <motion.div
                  key="selection"
                  className="relative w-[95vw] max-w-[700px] max-h-[95vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <Calendar className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        Ihr direkter Weg zum Experten
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                        Wählen Sie Ihr Anliegen, damit wir Sie mit dem passenden Spezialisten verbinden können.
                      </p>
                    </div>

                    {/* Category cards */}
                    <div className="grid gap-3">
                      {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                          <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.07, duration: 0.3 }}
                            onClick={() => handleSelect(cat.calendarUrl)}
                            className="group w-full text-left p-4 sm:p-5 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all duration-200"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                                    {cat.title}
                                  </h4>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-primary mt-0.5">
                                  {cat.subtitle}
                                </p>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                                  {cat.description}
                                </p>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Calendar */}
              {step === "calendar" && (
                <motion.div
                  key="calendar"
                  className="relative w-[95vw] max-w-[1000px] h-[95vh] overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-[60px] right-[10px] z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors text-foreground/70 hover:text-foreground shadow-md"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Loading indicator */}
                  {!isCalendarLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  )}

                  <iframe
                    src={selectedCalendarUrl}
                    className="w-full h-full border-none"
                    scrolling="no"
                    title="Terminbuchung"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
