import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-background blur-3xl" />
      </div>

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
            <Link to="/kontakt">
              <Button
                size="lg"
                className="gap-2 bg-background text-primary hover:bg-background/90 px-8"
              >
                <Calendar className="h-5 w-5" />
                Termin vereinbaren
              </Button>
            </Link>
            <a href="tel:02824809293">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                <Phone className="h-5 w-5" />
                02824-809293
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Oder schreiben Sie uns: info@makler-kalkar.de
          </p>
        </motion.div>
      </div>
    </section>
  );
}
