import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";

const stats = [
  { icon: Shield, value: "27+", label: "Jahre Erfahrung" },
  { icon: Users, value: "6.000+", label: "Zufriedene Kunden" },
  { icon: Award, value: "100%", label: "Neutral" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Glückliche Familie im Wohnzimmer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Dein Versicherungsmakler am Niederrhein
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
          >
            Mit Sicherheit
            <br />
            <span className="text-primary-foreground">gut versichert</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed"
          >
            Wir prüfen alle verfügbaren Versicherungsprodukte und bieten dir 
            einen Versicherungsschutz, der genau zu dir passt. Qualität und 
            Preis-Leistung stehen dabei im Fokus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link to="/kontakt">
              <Button size="lg" className="gap-2 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Termin vereinbaren
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/besonderheiten">
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
              >
                Mehr erfahren
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/10 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-background" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-background">{stat.value}</div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
