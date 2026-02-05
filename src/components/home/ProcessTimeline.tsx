import { motion } from "framer-motion";
import { MessageCircle, Search, FileCheck, Handshake } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Erstgespräch",
    description: "Wir lernen Sie und Ihre Bedürfnisse kennen – unverbindlich und kostenlos.",
  },
  {
    icon: Search,
    title: "Analyse",
    description: "Wir analysieren Ihre aktuelle Situation und identifizieren Optimierungspotenzial.",
  },
  {
    icon: FileCheck,
    title: "Konzept",
    description: "Wir erstellen ein maßgeschneidertes Versicherungskonzept für Sie.",
  },
  {
    icon: Handshake,
    title: "Umsetzung",
    description: "Wir begleiten Sie bei der Umsetzung und stehen Ihnen dauerhaft zur Seite.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Unser Prozess
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            So kommen wir zusammen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In vier einfachen Schritten zu Ihrer optimalen Absicherung
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number and icon */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow - mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="h-8 w-0.5 bg-primary/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
