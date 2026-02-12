import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Barrierefreiheit() {
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
              Erklärung zur Barrierefreiheit
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
            <p className="text-foreground">
              Wir bemühen uns, unsere Website in Übereinstimmung mit den geltenden gesetzlichen Bestimmungen zur Barrierefreiheit nutzbar zu machen.
            </p>

            <p className="text-foreground">Diese Erklärung zur Barrierefreiheit gilt für</p>

            <div className="p-6 rounded-xl bg-muted mb-8">
              <p className="text-foreground mb-0">
                <strong>Smits Versicherungsmakler GmbH &amp; Co. KG</strong><br />
                Markt 3, 47546 Kalkar<br />
                <a
                  href="https://landingpage.vema-eg.de/MWUxN3w%3D/newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  https://landingpage.vema-eg.de/MWUxN3w%3D/newsletter
                </a>
              </p>
            </div>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Stand der Vereinbarkeit mit den Anforderungen
            </h3>
            <p className="text-foreground">
              Die nachstehend aufgeführten Inhalte sind nicht vollständig barrierefrei:
            </p>
            <h4 className="text-base font-bold text-foreground">
              Inhalte von Bilddateien beschreiben
            </h4>
            <p className="text-foreground">
              Fotos, Bilder, Grafiken, Videos dienen überwiegend dem Design und der Illustration. Sie bieten keine zusätzlichen Informationswert zu den Textinhalten. Wir sind bemüht Bilddateien welche zusätzliche Informationen erhalten lesbar zu gestalten.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Unvereinbarkeit mit den Rechtsvorschriften zur Barrierefreiheit
            </h3>
            <p className="text-foreground">
              Die nachstehend aufgeführten Inhalte sind nicht mit den einschlägigen gesetzlichen Vorschriften zur Barrierefreiheit vereinbar:
            </p>
            <h4 className="text-base font-bold text-foreground">Einfache Sprache</h4>
            <p className="text-foreground">
              Versicherungsprodukte sind erklärungsbedürftig und nicht in einfacher Sprache darstellbar. Nicht umsonst hat der Gesetzgeber eine Beratungspflicht für die Vermittlung von Versicherungsprodukten vorgeschrieben. Wir beraten gerne auf Anforderung.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">
              Erstellung dieser Erklärung zur Barrierefreiheit
            </h3>
            <p className="text-foreground">
              Diese Erklärung wurde am 14.02.2025 erstellt.<br />
              Die Erklärung wurde zuletzt am 14.02.2025 überprüft.<br />
              Die Bewertung der Barrierefreiheit erfolgte durch eine Selbstbewertung
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Feedback und Kontakt</h3>
            <p className="text-foreground">
              Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten auf unserer Website aufgefallen oder haben Sie Anmerkungen sowie Fragen zum barrierefreien Zugang? Melden Sie sich gerne bei uns unter:
            </p>
            <div className="p-6 rounded-xl bg-muted mb-8">
              <p className="text-foreground mb-0">
                <strong>Smits Versicherungsmakler GmbH &amp; Co. KG</strong><br />
                Markt 3, 47546 Kalkar<br />
                02824 / 809293<br />
                <a href="mailto:martin.smits@makler-kalkar.de" className="text-primary">
                  martin.smits(at)makler-kalkar.de
                </a>
              </p>
            </div>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Durchsetzungsverfahren</h3>
            <p className="text-foreground">
              Sollten Sie der Ansicht sein, dass Sie durch eine nicht ausreichende barrierefreie Gestaltung unserer Website benachteiligt sind, können Sie sich an die zuständige Durchsetzungsstelle wenden.
            </p>
            <p className="text-foreground">Diese erreichen Sie unter:</p>

            <h4 className="text-base font-bold text-foreground">Bund</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:info@schlichtungsstelle-bgg.de" className="text-primary">info@schlichtungsstelle-bgg.de</a><br />
              <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Schlichtungsstelle des Bundes</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Baden-Württemberg</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:schlichtung@barrierefreiheit.bwl.de" className="text-primary">schlichtung@barrierefreiheit.bwl.de</a><br />
              <a href="https://www.barrierefreiheit.bwl.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Baden-Württemberg</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Bayern</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:bitv@bayern.de" className="text-primary">bitv@bayern.de</a><br />
              <a href="https://www.bitv.bayern.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Bayern</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Berlin</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:landesbeauftragte-digitale-barrierefreiheit@senatskanzlei.berlin.de" className="text-primary">landesbeauftragte-digitale-barrierefreiheit@senatskanzlei.berlin.de</a><br />
              <a href="https://www.berlin.de/sen/inneres/barrierefreiheit/" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Berlin</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Brandenburg</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:durchsetzung.BIT@msgiv.brandenburg.de" className="text-primary">durchsetzung.BIT@msgiv.brandenburg.de</a><br />
              <a href="https://msgiv.brandenburg.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Brandenburg</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Bremen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:schlichtungsstelle@lbb.bremen.de" className="text-primary">schlichtungsstelle@lbb.bremen.de</a><br />
              <a href="https://www.lbb.bremen.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Schlichtungsstelle Bremen</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Schlichtungsstelle Hamburg</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:schlichtungsstelle-hmbbgg@soziales.hamburg.de" className="text-primary">schlichtungsstelle-hmbbgg@soziales.hamburg.de</a><br />
              <a href="https://www.hamburg.de/schlichtungsstelle" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Schlichtungsstelle Hamburg</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Hessen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:lbit@rpgi.hessen.de" className="text-primary">lbit@rpgi.hessen.de</a><br />
              <a href="https://rp-giessen.hessen.de/lbit" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Hessen</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Überwachungsstelle Mecklenburg-Vorpommern</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:ueberwachungsstelle@sm.mv-regierung.de" className="text-primary">ueberwachungsstelle@sm.mv-regierung.de</a><br />
              <a href="https://www.regierung-mv.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Überwachungsstelle Mecklenburg-Vorpommern</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Schlichtungsstelle Niedersachsen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:schlichtungsstelle@ms.niedersachsen.de" className="text-primary">schlichtungsstelle@ms.niedersachsen.de</a><br />
              <a href="https://www.ms.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Schlichtungsstelle Niedersachsen</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Ombudsstelle Nordrhein-Westfalen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:ombudsstelle-barrierefreie-it@mags.nrw.de" className="text-primary">ombudsstelle-barrierefreie-it@mags.nrw.de</a><br />
              <a href="https://www.mags.nrw" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Ombudsstelle Nordrhein-Westfalen</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Rheinland-Pfalz</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:durchsetzungsstelle@mastd.rlp.de" className="text-primary">durchsetzungsstelle@mastd.rlp.de</a><br />
              <a href="https://mastd.rlp.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Rheinland-Pfalz</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Schlichtungsstelle Saarland</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:inklusion@soziales.saarland.de" className="text-primary">inklusion@soziales.saarland.de</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Ombudsstelle Sachsen-Anhalt</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:ombudsstelle@ukst.de" className="text-primary">ombudsstelle@ukst.de</a><br />
              <a href="https://www.ukst.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Ombudsstelle Sachsen-Anhalt</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Sachsen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:durchsetzungsstelle@sk.sachsen.de" className="text-primary">durchsetzungsstelle@sk.sachsen.de</a><br />
              <a href="https://www.sk.sachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Sachsen</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Beschwerdestelle Schleswig-Holstein</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:bbit@landtag.ltsh.de" className="text-primary">bbit@landtag.ltsh.de</a><br />
              <a href="https://www.landtag.ltsh.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Beschwerdestelle Schleswig-Holstein</a>
            </p>

            <h4 className="text-base font-bold text-foreground">Durchsetzungsstelle Thüringen</h4>
            <p className="text-foreground">
              E-Mail: <a href="mailto:kontakt@tlmb.thueringen.de" className="text-primary">kontakt@tlmb.thueringen.de</a><br />
              <a href="https://www.tlmb.thueringen.de" target="_blank" rel="noopener noreferrer" className="text-primary">Link zur Durchsetzungsstelle Thüringen</a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}