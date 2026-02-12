import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

export default function Erstinformation() {
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
              Erst-/Statusinformation
            </h1>
            <a
              href="https://landingpage.vema-eg.de/download/document/erstinformation/MWUxN3w%3D/erstinformation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Als PDF downloaden
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
              gemäß § 15 der Verordnung über die Versicherungsvermittlung und -beratung
            </p>

            <p className="text-foreground">von</p>

            <div className="p-6 rounded-xl bg-muted mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Smits Versicherungsmakler GmbH &amp; Co. KG
              </h2>
              <p className="text-foreground mb-0">
                Markt 3, 47546 Kalkar<br />
                Telefon: 02824 / 809293<br />
                Fax: 02824 / 809294<br />
                Internet:{" "}
                <a href="https://www.makler-kalkar.de" target="_blank" rel="noopener noreferrer" className="text-primary">
                  www.makler-kalkar.de
                </a><br />
                E-Mail:{" "}
                <a href="mailto:martin.smits@makler-kalkar.de" className="text-primary">
                  martin.smits(at)makler-kalkar.de
                </a>
              </p>
            </div>

            <h3 className="text-lg font-bold text-foreground">
              Persönlich haftender Gesellschafter (Komplementär):
            </h3>
            <p className="text-foreground">
              <strong>Smits Verwaltungs-GmbH</strong><br />
              (Anschrift siehe oben)<br />
              Amtsgericht Kleve HRB 8384
            </p>

            <p className="text-foreground">
              vertreten durch den Geschäftsführer Herrn Martin Smits
            </p>

            <p className="text-foreground">
              <strong>Handelsregisternummer:</strong> HRA 3101, Amtsgericht Kleve
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">§34d GewO</h3>

            <p className="text-foreground">
              <strong>Berufsbezeichnung:</strong><br />
              Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 Gewerbeordnung, Bundesrepublik Deutschland
            </p>

            <p className="text-foreground">
              <strong>Registernummer:</strong> D-78KN-J9ZHF-72
            </p>

            <h3 className="text-lg font-bold text-foreground">
              Aufsichtsbehörde und zuständige Behörde für die Erlaubnis:
            </h3>
            <p className="text-foreground">
              Niederrheinische IHK<br />
              Mercatorstr. 22-24<br />
              47051 Duisburg<br />
              Deutschland<br />
              <a href="https://www.ihk-niederrhein.de/" target="_blank" rel="noopener noreferrer" className="text-primary">
                https://www.ihk-niederrhein.de/
              </a>
            </p>

            <h3 className="text-lg font-bold text-foreground">
              Die Eintragung kann wie folgt überprüft werden:
            </h3>
            <p className="text-foreground">
              DIHK | Deutsche Industrie- und Handelskammer<br />
              Breite Straße 29, 10178 Berlin<br />
              Telefon 0180-600-585-0 *<br />
              <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary">
                www.vermittlerregister.info
              </a><br />
              <span className="text-sm text-muted-foreground">* 0,20 €/Anruf</span>
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Schlichtungsstellen</h3>
            <p className="text-foreground">
              Gemäß § 36 VSBG und § 17 Abs. 4 VersVermV teilen wir mit, dass wir verpflichtet und bereit sind an einem Streitbeilegungsverfahren teilzunehmen. Folgende Schlichtungsstellen können angerufen werden:
            </p>

            <p className="text-foreground">
              <strong>Versicherungsombudsmann e.V.</strong><br />
              Postfach 08 06 32, 10006 Berlin<br />
              <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-primary">
                www.versicherungsombudsmann.de
              </a>
            </p>

            <p className="text-foreground">
              <strong>Ombudsmann Private Kranken- und Pflegeversicherung</strong><br />
              Postfach 06 02 22, 10052 Berlin<br />
              <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-primary">
                www.pkv-ombudsmann.de
              </a>
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Berufsrechtliche Regelungen sind insbesondere:
            </h3>
            <ul className="text-foreground list-disc pl-6">
              <li>§ 34 d Gewerbeordnung</li>
              <li>§§ 59 - 68 VVG</li>
              <li>VersVermV</li>
            </ul>

            <p className="text-foreground">
              Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebenen Homepage{" "}
              <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="text-primary">
                www.gesetze-im-internet.de
              </a>{" "}
              eingesehen und abgerufen werden.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Berufsrechtliche Regelungen:</h3>
            <p className="text-foreground">
              Unsere Tätigkeit beinhaltet auch Beratung.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Art und Quelle der Vergütung</h3>
            <p className="text-foreground">
              Die Vergütung unserer Tätigkeit erfolgt als:
            </p>
            <ul className="text-foreground list-disc pl-6">
              <li>in der Versicherungsprämie enthaltene Courtage, die vom jeweiligen Versicherungsunternehmen ausgezahlt wird oder als</li>
              <li>konkret vereinbarte Zahlung durch den Kunden oder als</li>
              <li>Kombination aus beidem.</li>
            </ul>
            <p className="text-foreground">
              Dies ist abhängig von den Wünschen und Bedürfnissen des Kunden und den Versicherungsprodukten, welche eventuell vermittelt werden.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Beschwerdemanagement</h3>
            <p className="text-foreground">
              Beschwerden sind in Textform an die Geschäftsleitung zu richten und werden im Rahmen unseres Beschwerdemanagements unverzüglich bearbeitet.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Revisions-Stand 25-07
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}