import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "Wir arbeiten ausschließlich in Ihrem Auftrag, nicht für Versicherungsgesellschaften",
  "Wir prüfen Angebote aller Versicherer in Deutschland",
  "Jahrzehntelange Erfahrung und strikte Wahrung der Unabhängigkeit",
  "Optimales Preis-Leistungsverhältnis durch umfassenden Marktvergleich",
  "Persönliche Betreuung und langfristige Partnerschaft",
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Was uns besonders macht
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Als Versicherungsmakler sind wir Sachwalter unserer Kunden. Vertrauen, 
              Individualität und Flexibilität stehen immer im Vordergrund unserer Arbeit. 
              Ihre Anforderungen und Bedürfnisse sind der Maßstab.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/besonderheiten">
                <Button size="lg" className="gap-2">
                  Mehr erfahren
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/geschichte">
                <Button variant="outline" size="lg">
                  Unsere Geschichte
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="h-40 w-40 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">30+</span>
                </div>
                <p className="text-xl font-medium text-foreground">Jahre Erfahrung</p>
                <p className="text-muted-foreground">am Niederrhein</p>
              </div>
            </div>
            
            {/* Decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-strong p-6 max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Standort</p>
              <p className="font-semibold text-foreground">Markt 3, 47546 Kalkar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
