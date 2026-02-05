import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function Impressum() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Impressum
            </h1>
            <a
              href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Als PDF herunterladen
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <p className="text-muted-foreground mb-8">
              Für diese Website verantwortlicher Anbieter gemäß § 5 DDG sowie 
              Informationspflichten gemäß § 15 VersVermV und § 18 Abs. 2 MStV:
            </p>

            <div className="p-6 rounded-xl bg-muted mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Smits Versicherungsmakler GmbH & Co. KG
              </h2>
              <p className="text-foreground mb-0">
                Markt 3<br />
                47546 Kalkar
              </p>
            </div>

            <p className="text-foreground">
              <strong>vertreten durch den Geschäftsführer:</strong> Martin Smits
            </p>

            <p className="text-foreground">
              <strong>Telefon:</strong> 02824-809293<br />
              <strong>Telefax:</strong> 02824-809294<br />
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@makler-kalkar.de" className="text-primary">
                info@makler-kalkar.de
              </a>
            </p>

            <p className="text-foreground">
              <strong>Registriert beim Amtsgericht in:</strong> Kleve<br />
              <strong>Handelsregisternummer:</strong> HRA 3101
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Die Smits Versicherungsmakler GmbH & Co. KG wird vertreten durch die 
              persönlich haftende Gesellschafterin:
            </h3>

            <p className="text-foreground">
              <strong>Smits Verwaltungs-GmbH</strong><br />
              Markt 3<br />
              47546 Kalkar
            </p>

            <p className="text-foreground">
              <strong>Telefon:</strong> 02824-809293<br />
              <strong>Telefax:</strong> 02824-809294<br />
              <strong>Registriert beim Amtsgericht in:</strong> Kleve<br />
              <strong>Handelsregisternummer:</strong> HRB 8384<br />
              <strong>vertreten durch den Geschäftsführer:</strong> Martin Smits<br />
              <strong>Steuernummer:</strong> 116/5768/1134
            </p>

            <p className="text-foreground">
              <strong>Branche / Tätigkeit:</strong> Versicherungs- und Finanzmakler<br />
              <strong>Staat, der die Berufsbezeichnung verliehen hat:</strong> Deutschland
            </p>

            <p className="text-foreground">
              <strong>Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:</strong> Martin Smits
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Zuständiges Finanzamt:</h3>
            <p className="text-foreground">
              Finanzamt Kleve<br />
              Emmericher Str. 182<br />
              47533 Kleve<br />
              Telefon: 02821-803-1020<br />
              Fax: 02821-803-1201
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Behörde für die Erlaubnis nach § 34d Abs. 1 Z. 2 GewO:
            </h3>
            <p className="text-foreground">
              IHK Duisburg<br />
              Mercatorstr. 22-24<br />
              47051 Duisburg<br />
              Telefon: 0203-2821-0<br />
              Fax: 0203-26533
            </p>

            <p className="text-foreground">
              <strong>Registernummer:</strong> D-8OKW-XT3P1-49
            </p>

            <p className="text-foreground">
              Ob der Gewerbetreibende bei der zuständigen IHK gemeldet und eingetragen 
              ist, können Sie über folgenden Link überprüfen:{" "}
              <a
                href="https://www.vermittlerregister.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                www.vermittlerregister.info
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
