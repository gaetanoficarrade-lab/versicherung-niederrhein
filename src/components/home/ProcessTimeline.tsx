import { motion } from "framer-motion";
import { MessageCircle, Search, FileCheck, Handshake } from "lucide-react";
import { useState } from "react";

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
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Unser Prozess
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            So kommen wir zusammen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In vier einfachen Schritten zu Ihrer optimalen Absicherung
          </p>
        </motion.div>

        {/* Desktop Zigzag Timeline */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-[calc(50%-3rem)] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-border/50 hover:border-primary/30 ${
                      activeStep === index ? "ring-2 ring-primary/20" : ""
                    }`}
                  >
                    {/* Step number badge */}
                    <div
                      className={`absolute top-4 ${
                        isLeft ? "left-4" : "right-4"
                      } text-xs font-semibold text-primary/60 uppercase tracking-wider`}
                    >
                      Schritt {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon and title row */}
                    <div
                      className={`flex items-center gap-3 mt-6 mb-3 ${
                        isLeft ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className={`text-muted-foreground leading-relaxed ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div
                      className={`absolute bottom-0 ${
                        isLeft ? "right-0 rounded-tl-2xl" : "left-0 rounded-tr-2xl"
                      } w-16 h-1 bg-gradient-to-r from-primary/40 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </motion.div>

                {/* Center node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  animate={{
                    scale: activeStep === index ? 1.3 : 1,
                    backgroundColor:
                      activeStep === index
                        ? "hsl(var(--primary))"
                        : "hsl(var(--background))",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-primary transition-colors ${
                      activeStep === index ? "bg-primary" : "bg-background"
                    }`}
                  />
                </motion.div>

                {/* Connecting line to card */}
                <div
                  className={`absolute top-1/2 ${
                    isLeft ? "left-[calc(50%+0.5rem)] w-[2.5rem]" : "right-[calc(50%+0.5rem)] w-[2.5rem]"
                  } h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 transform -translate-y-1/2`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-primary bg-background transform -translate-x-1/2" />

                  {/* Card */}
                  <div className="group bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <div className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-3">
                      Schritt {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
