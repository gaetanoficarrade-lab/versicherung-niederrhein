import { motion } from "framer-motion";
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
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Impressum
            </h1>
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
            <div className="p-6 rounded-xl bg-muted mb-8">
              <h2 className="text-xl font-bold text-foreground mt-0 mb-4">
                Smits Versicherungsmakler GmbH &amp; Co. KG
              </h2>
              <p className="text-foreground mb-0">
                Markt 3, 47546 Kalkar<br />
                Telefon: 02824 / 809293<br />
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
            <ul className="text-foreground">
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

            <h3 className="text-lg font-bold text-foreground">Beschwerdemanagement</h3>
            <p className="text-foreground">
              Beschwerden sind in Textform an die Geschäftsleitung zu richten und werden im Rahmen unseres Beschwerdemanagements unverzüglich bearbeitet.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Information zur Einbeziehung von Nachhaltigkeitsrisiken bei der Beratungstätigkeit (Art. 3 TVO)
            </h3>
            <p className="text-foreground">
              Um Nachhaltigkeitsrisiken bei der Beratung einzubeziehen, werden im Rahmen der Auswahl von Anbietern (Finanzmarktteilnehmern) und deren Finanzprodukten deren zur Verfügung gestellte Informationen berücksichtigt.
            </p>
            <p className="text-foreground">
              Anbieter, die erkennbar keine Strategie zur Einbeziehung von Nachhaltigkeitsrisiken in ihre Investitionsentscheidungen haben, werden ggf. nicht angeboten.
            </p>
            <p className="text-foreground">
              Im Rahmen der Beratung wird ggf. gesondert dargestellt, wenn die Berücksichtigung der Nachhaltigkeitsrisiken bei der Investmententscheidung erkennbare Vor- bzw. Nachteile für den Kunden bedeuten.
            </p>
            <p className="text-foreground">
              Über die Berücksichtigung von Nachhaltigkeitsrisiken bei Investitionsentscheidungen des jeweiligen Anbieters informiert dieser mit seinen vorvertraglichen Informationen. Fragen dazu kann der Kunde im Vorfeld eines möglichen Abschlusses ansprechen.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Information zur Berücksichtigung nachteiliger Auswirkungen auf Nachhaltigkeitsfaktoren (Art. 4 TVO in Verbindung mit Art. 11 der Ergänzung zur TVO vom 01. Januar 2023)
            </h3>
            <p className="text-foreground font-semibold">
              Erklärung über die Berücksichtigung der wichtigsten nachteiligen Auswirkungen auf Nachhaltigkeitsfaktoren bei der Anlage- und Versicherungsberatung
            </p>
            <p className="text-foreground">
              Bei der Beratung ist es unser Ziel, Ihnen ein geeignetes Anlage-/Versicherungsanlageprodukt empfehlen zu können. Dabei berücksichtigen wir auch Ihre Nachhaltigkeitspräferenzen, sofern Sie dies wünschen. Hierbei können Sie festlegen, ob bei Ihrer Anlage ökologische und/oder soziale Werte sowie Grundsätze guter Unternehmensführung und/oder die wichtigsten nachteiligen Auswirkungen von Investitionsentscheidungen auf Nachhaltigkeitsfaktoren berücksichtigt werden sollen. Der Gesetzgeber hat je nach Art des Anlageziels (Investition in Unternehmen, Staaten, Immobilien etc.) in folgenden Bereichen „Indikatoren" für die wichtigsten nachteiligen Auswirkungen ihrer Investitionsentscheidungen auf Nachhaltigkeitsfaktoren bestimmt:
            </p>
            <ul className="text-foreground">
              <li>Umwelt-, Sozial- und Arbeitnehmerbelange</li>
              <li>Die Achtung der Menschenrechte</li>
              <li>Die Bekämpfung von Korruption und Bestechung.</li>
            </ul>
            <p className="text-foreground">
              Die Produktanbieter sind gesetzlich verpflichtet, eine Erklärung zu veröffentlichen, welche Strategie sie in Bezug auf die Berücksichtigung der wichtigsten nachteiligen Auswirkungen und den Umgang damit verfolgen. Dies bezieht sich insbesondere auf Treibhausgasemissionen, Wasserverbrauch, Biodiversität, Abfall, Soziales und Arbeitnehmerbelange (einschließlich Menschenrechte und Korruption). Wenn Sie sich dazu entscheiden, dass die wichtigsten nachteiligen Auswirkungen Ihrer Investitionsentscheidungen auf Nachhaltigkeitsfaktoren bei der Produktauswahl berücksichtigt werden sollen, beachten wir im Rahmen des Auswahlprozesses die von den Produktanbietern bereitgestellten Informationen sowie die von den Produktanbietern dargelegten Strategien.
            </p>
            <p className="text-foreground">
              Eigene Einstufungs- und Auswahlmethoden zu den Informationen der Produktanbieter wenden wir nicht an. Es erfolgt keine gesonderte Prüfung der Angaben der Produktanbieter in Hinblick auf ihre Plausibilität.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Informationen zur Vergütungspolitik bei der Berücksichtigung von Nachhaltigkeitsrisiken (Art. 5 TVO)
            </h3>
            <p className="text-foreground">
              Die Vergütung für die Vermittlung von Finanzprodukten wird nicht von den jeweiligen Nachhaltigkeitsrisiken beeinflusst.
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