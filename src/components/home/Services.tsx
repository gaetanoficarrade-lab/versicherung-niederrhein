import { motion } from "framer-motion";
import { Car, PawPrint, Home, Heart, Briefcase, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "KFZ-Versicherung",
    description: "Sichern Sie Ihr Fahrzeug mit dem optimalen Preis-Leistungsverhältnis. Wir vergleichen zahlreiche Anbieter für Sie.",
    href: "/kfz-versicherung",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: PawPrint,
    title: "Tierhalterhaftpflicht",
    description: "Als Tierhalter haften Sie unbegrenzt. Schützen Sie sich vor finanziellen Risiken durch Ihren Vierbeiner.",
    href: "/tierhalterhaftpflicht",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Home,
    title: "Hausratversicherung",
    description: "Schützen Sie Ihr gesamtes Eigentum gegen Wasserschäden, Einbruch und mehr mit individuellem Schutz.",
    href: "/hausratversicherung",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Heart,
    title: "Gesundheit & Vorsorge",
    description: "Von Krankenversicherung bis Altersvorsorge – wir finden die passende Absicherung für Ihre Zukunft.",
    href: "/kontakt",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Briefcase,
    title: "Gewerbeversicherungen",
    description: "Maßgeschneiderte Lösungen für Unternehmen und Selbstständige – von Haftpflicht bis Betriebsunterbrechung.",
    href: "/kontakt",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Shield,
    title: "Weitere Versicherungen",
    description: "Wir beraten Sie zu allen Versicherungsfragen. Sprechen Sie uns an für eine individuelle Beratung.",
    href: "/kontakt",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-muted/30 pattern-dots">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Versicherungen für jeden Bedarf
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Egal ob Sie eine Absicherung für Ihr Alter, Ihre Gesundheit oder eine 
            Haftpflichtversicherung brauchen: Wir richten uns nach Ihrem Bedarf.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.href} className="block h-full">
                <div className="card-premium h-full p-6 group">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color} mb-5`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/kontakt">
            <Button size="lg" className="gap-2">
              Jetzt beraten lassen
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
