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

            {/* Modal – full iframe only, no header */}
            <motion.div
              className="relative w-[95vw] max-w-[1000px] h-[95vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Close button – positioned just above the iframe content */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-[60px] right-[10px] z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors text-foreground/70 hover:text-foreground shadow-md"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Loading indicator */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}

              <iframe
                src={BOOKING_URL}
                className="w-full h-full border-none"
                scrolling="no"
                title="Terminbuchung"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
