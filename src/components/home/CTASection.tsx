import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/6QmhAF5iRMBBQIw7TsK5";

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-background blur-3xl" />
      </div>

      {/* Hidden preloaded iframe */}
      <iframe
        src={BOOKING_URL}
        className="hidden"
        onLoad={() => setIframeLoaded(true)}
        title="Terminbuchung Preload"
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
              onClick={() => setIsOpen(true)}
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

      {/* Booking Modal */}
      <AnimatePresence>
        {isOpen && (
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
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-background rounded-2xl shadow-2xl w-full max-w-[900px] h-[90vh] max-h-[750px] flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">Termin vereinbaren</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 relative">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                <iframe
                  src={BOOKING_URL}
                  className="w-full h-full border-none"
                  title="Terminbuchung"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
