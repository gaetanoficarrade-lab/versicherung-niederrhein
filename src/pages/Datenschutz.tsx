import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Datenschutz() {
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
              Datenschutzerklärung
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
            <h2 className="text-2xl font-bold text-foreground">Inhaltsangabe</h2>
            <ol className="text-foreground">
              <li><a href="#allgemeine-hinweise" className="text-primary">Allgemeine Hinweise</a></li>
              <li><a href="#wer-verarbeitet" className="text-primary">Wer verarbeitet Ihre Daten</a></li>
              <li><a href="#cookies" className="text-primary">Welche Datenverarbeitung wird durchgeführt / Cookies</a></li>
              <li><a href="#newsletter" className="text-primary">Datenverarbeitung bei Newsletter-Versand</a></li>
              <li><a href="#social-media" className="text-primary">Social Media</a></li>
              <li><a href="#sonstige" className="text-primary">Sonstige Datenverarbeitungen</a></li>
              <li><a href="#ihre-rechte" className="text-primary">Ihre Rechte</a></li>
            </ol>

            <hr className="my-8" />

            <h2 id="allgemeine-hinweise" className="text-2xl font-bold text-foreground">
              a. Allgemeine Hinweise
            </h2>
            <p className="text-foreground">
              Jede Verarbeitung Ihrer Daten soll so erfolgen, dass sie für Sie verständlich 
              und nachvollziehbar sind. Daher geben wir Ihnen hier einen Überblick über alle 
              wesentlichen Umstände, die die Verarbeitung Ihrer Daten betreffen.
            </p>
            <p className="text-foreground">
              Wir haben diese Information mit dem Ziel der bestmöglichen Verständlichkeit 
              erstellt. Sollten Sie dennoch Verständnisfragen haben, kommen Sie bitte auf uns zu.
            </p>
            <p className="text-foreground">
              Das trifft auch auf alle anderen Fragen zu, die die Verarbeitung Ihrer Daten 
              betreffen. Alle Gesetze und Vorschriften, auf die in dieser Information verwiesen 
              wird, können Sie unter{" "}
              <a href="https://www.gesetze-im-internet.de/" target="_blank" rel="noopener noreferrer" className="text-primary">
                https://www.gesetze-im-internet.de/
              </a>{" "}
              kostenfrei nachlesen.
            </p>

            <hr className="my-8" />

            <h2 id="wer-verarbeitet" className="text-2xl font-bold text-foreground">
              b. Wer verarbeitet Ihre Daten
            </h2>
            <p className="text-foreground">
              Verantwortlich für die Datenverarbeitung und Ihr Ansprechpartner ist:
            </p>
            <div className="p-6 rounded-xl bg-muted">
              <p className="text-foreground mb-0">
                <strong>Smits Versicherungsmakler GmbH & Co. KG</strong><br />
                Markt 3<br />
                47546 Kalkar<br />
                Telefon: 02824-809293<br />
                E-Mail: info@makler-kalkar.de
              </p>
            </div>

            <hr className="my-8" />

            <h2 id="cookies" className="text-2xl font-bold text-foreground">
              c. Welche Datenverarbeitung wird durchgeführt / Cookies
            </h2>
            <p className="text-foreground">
              Diese Website verwendet Cookies. Dazu zählen Cookies, die essentiell für den 
              Betrieb der Website notwendig sind, sowie solche, die lediglich zu anonymen 
              Statistikzwecken, für Komforteinstellungen oder zur Anzeige personalisierter 
              Inhalte genutzt werden.
            </p>
            <p className="text-foreground">
              Bitte beachten Sie, dass auf Basis Ihrer Einstellungen evtl. nicht mehr alle 
              Funktionalitäten zur Verfügung stehen.
            </p>

            <hr className="my-8" />

            <h2 id="ihre-rechte" className="text-2xl font-bold text-foreground">
              g. Ihre Rechte
            </h2>
            <p className="text-foreground">
              Sie haben das Recht auf Auskunft über die Sie betreffenden personenbezogenen 
              Daten. Sie können sich für eine Auskunft jederzeit an uns wenden.
            </p>
            <p className="text-foreground">
              Bei einer Auskunftsanfrage, die nicht schriftlich erfolgt, bitten wir um 
              Verständnis dafür, dass wir ggf. Nachweise von Ihnen verlangen, die belegen, 
              dass Sie die Person sind, für die Sie sich ausgeben.
            </p>
            <p className="text-foreground">
              Ferner haben Sie ein Recht auf Berichtigung oder Löschung oder auf Einschränkung 
              der Verarbeitung, soweit Ihnen dies gesetzlich zusteht. Schließlich haben Sie 
              ein Widerspruchsrecht gegen die Verarbeitung im Rahmen der gesetzlichen Vorgaben.
            </p>
            <p className="text-foreground">
              Ein Recht auf Datenübertragbarkeit besteht ebenfalls im Rahmen der 
              datenschutzrechtlichen Vorgaben.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Beschwerderecht</h3>
            <p className="text-foreground">
              Sie haben das Recht, sich über die Verarbeitung personenbezogener Daten durch 
              uns bei einer Aufsichtsbehörde für den Datenschutz zu beschweren.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
