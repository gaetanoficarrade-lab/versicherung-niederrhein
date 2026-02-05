import { motion } from "framer-motion";
import { FileText, ClipboardList, Car, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: ClipboardList,
    title: "Datenänderung",
    description: "Wenn sich Ihre Lebensumstände ändern (z.B. Änderung der Kontoverbindung, Heirat, Nachwuchs, Ortswechsel, beruflicher Auslandsaufenthalt, Scheidung, Selbstständigkeit), können Sie uns dies einfach über unser Online-Formular mitteilen.",
    link: "https://www.versicherungen-niederrhein.de/downloadcenter/datenanderung/",
  },
  {
    icon: FileText,
    title: "Schaden melden",
    description: "Einen Schaden können Sie über unser Online-Formular melden. Füllen Sie schnell und unkompliziert alle nötigen Felder des Formulars aus. Wir melden uns dann bei Ihnen, um den Schaden schnellstmöglich aus der Welt zu schaffen.",
    link: "https://www.versicherungen-niederrhein.de/downloadcenter/schaden-melden/",
  },
  {
    icon: Car,
    title: "Versicherungsunterlagen anfordern",
    description: "Sie möchten ein neues Fahrzeug zulassen und benötigen eine elektronische Versicherungsbestätigung? Sie brauchen eine Internationale Versicherungskarte (Grüne Karte)? Fordern Sie diese Unterlagen einfach online bei uns an.",
    link: "https://www.versicherungen-niederrhein.de/downloadcenter/versicherungsunterlagen-anfordern/",
  },
  {
    icon: Calendar,
    title: "Beratungstermin vereinbaren",
    description: "Vereinbaren Sie einen unverbindlichen Beratungstermin mit uns. Wir nehmen uns Zeit für Ihre Fragen und finden gemeinsam die optimale Absicherung für Ihre Bedürfnisse.",
    link: "/kontakt",
    internal: true,
  },
];

export default function Service() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Service-Center
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In unserem Service-Center bieten wir Ihnen die Möglichkeit, uns Änderungen 
              Ihrer persönlichen Lebensumstände mitzuteilen. Ferner können Sie uns unkompliziert 
              einen Schaden melden, Unterlagen anfordern oder einen unverbindlichen Beratungstermin 
              vereinbaren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.internal ? (
                  <Link to={service.link}>
                    <Button className="gap-2">
                      Weiter
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2">
                      Weiter
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
