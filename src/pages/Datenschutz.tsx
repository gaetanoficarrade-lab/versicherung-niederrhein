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
              Datenschutz-Richtlinie
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
            <p className="text-sm text-muted-foreground">Revisions-Stand 2025-01</p>

            <div className="p-6 rounded-xl bg-muted mb-8">
              <p className="text-foreground mb-0">
                <strong>Smits Versicherungsmakler GmbH &amp; Co. KG</strong><br />
                Markt 3<br />
                47546 Kalkar<br />
                Telefon: 02824 / 809293<br />
                E-Mail:{" "}
                <a href="mailto:martin.smits@makler-kalkar.de" className="text-primary">
                  martin.smits(at)makler-kalkar.de
                </a>
              </p>
            </div>

            <p className="text-foreground">
              Nach Maßgabe der Art. 37 - 39 DS-GVO/ § 38 BDSGneu erreichen Sie unseren Datenschutzbeauftragten wie folgt:
            </p>
            <p className="text-foreground">
              <strong>Martin Smits</strong>, Markt 3, 47546 Kalkar,{" "}
              <a href="mailto:martin.smits@makler-kalkar.de" className="text-primary">
                martin.smits(at)makler-kalkar.de
              </a>
            </p>
            <p className="text-foreground">
              Dieser nimmt die ihm aus dieser Richtlinie zugewiesenen Aufgaben bei weisungsfreier Anwendung seiner Fachkunde wahr. Für Meldungen, Auskünfte etc. gegenüber den Datenschutzaufsichtsbehörden ist der DSB zuständig.
            </p>
            <p className="text-foreground">
              Die Unternehmensabteilungen stellen die hierfür erforderlichen Informationen, Unterlagen etc. zur Verfügung. Gleiches gilt für Anfragen, Beschwerden oder Auskunftsersuchen.
            </p>
            <p className="text-foreground">
              Jeder Mitarbeiter unseres Unternehmens kann sich unmittelbar mit Hinweisen, Anregungen oder Beschwerden an den DSB wenden, auf Wunsch wird absolute Vertraulichkeit gewahrt.
            </p>
            <p className="text-foreground">
              Sie haben Beschwerderecht bei der Aufsichtsbehörde, in deren Bundesland das Unternehmen seinen Sitz hat. Für unser Unternehmen ist dies:
            </p>
            <div className="p-6 rounded-xl bg-muted mb-8">
              <p className="text-foreground mb-0">
                <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong><br />
                Kavalleriestraße 2-4, 40213 Düsseldorf<br />
                Tel. 0211 38424-0<br />
                Fax 0211 38424-10<br />
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-primary">
                  https://www.ldi.nrw.de
                </a>
              </p>
            </div>

            <p className="text-foreground">
              Im Anhang zu dieser Richtlinie finden Sie eine Übersicht über die Geschäftspartner als auch der Versicherer mit denen wir in der Regel zusammenarbeiten. An diese findet eine Datenübermittlung zur Erfüllung unseres Auftrages oder gesetzlicher Verpflichtungen statt.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Geltungsbereich</h3>
            <p className="text-foreground">
              Diese Richtlinie regelt die datenschutzkonforme Informationsverarbeitung und die entsprechenden Verantwortlichkeiten beim obengenannten Unternehmen (und seiner/n Niederlassung/en) auf Basis der gesetzlichen Regelungen der Europäischen Datenschutz-Grundverordnung (DS-GVO) und Bundesdatenschutzgesetz (BDSGneu). Alle Mitarbeiter sind zur Einhaltung dieser Richtlinie verpflichtet.
            </p>
            <p className="text-foreground">Sie richtet sich insbesondere an:</p>
            <p className="text-foreground">
              Mitarbeiter, Kunden und Interessenten, Versicherer und Dienstleister.
            </p>
            <p className="text-foreground">Hierbei gelten folgende Grundsätze:</p>
            <ul className="text-foreground list-disc pl-6">
              <li>Wahrung der Persönlichkeitsrechte</li>
              <li>Zweckbindung personenbezogener Daten</li>
              <li>Transparenz</li>
              <li>Datenvermeidung und Datensparsamkeit</li>
              <li>Sachliche Richtigkeit/Aktualität der Daten</li>
              <li>Vertraulichkeit bei der Datenverarbeitung</li>
              <li>Sicherheit bei der Datenverarbeitung</li>
              <li>Löschung und Einschränkung der Verarbeitung von Daten auf Anforderung</li>
            </ul>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Begriffsdefinitionen (Art. 4 DS-GVO)</h3>
            <p className="text-foreground">
              <strong>Personenbezogene Daten</strong> sind Einzelangaben über persönliche oder sachliche Verhältnisse einer natürlichen Person (Betroffener). Beispiele: Name, Vorname, Geburtstag, Adressdaten, Vertragsdaten, E-Mail-Inhalte.
            </p>
            <p className="text-foreground">
              <strong>Besondere personenbezogene Daten</strong> sind Angaben über rassische, ethnische Herkunft, politische Meinungen, religiöse oder philosophische Überzeugungen, Gewerkschaftszugehörigkeit, Gesundheit oder Sexualleben, sowie wirtschaftliche Verhältnisse.
            </p>
            <p className="text-foreground">
              <strong>Verantwortliche Stelle</strong> ist jede Person oder Stelle, die personenbezogene Daten für sich selbst erhebt, verarbeitet oder nutzt oder dies durch andere im Auftrag vornehmen lässt.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Erheben, Verarbeiten und Speichern personenbezogener Daten (Art. 5 + 6 DS-GVO)</h3>
            <p className="text-foreground">
              Das Erheben, Verarbeiten und Speichern personenbezogener Daten in unserem Unternehmen geschieht auf Basis des von uns verwendeten Maklerauftrages und den mitgeltenden Dokumenten (wie z.B. Maklervollmacht, Einwilligung zur Datenverarbeitung, die separat unterzeichnet werden).
            </p>
            <p className="text-foreground">
              Ohne eine konkrete Beauftragung und eine datenschutzrechtliche Einwilligungserklärung durch unsere Kunden werden wir nicht tätig (bei Kindern und Jugendlichen wird die Einwilligung durch die Erziehungsberechtigten erteilt).
            </p>
            <p className="text-foreground">
              Wir dokumentieren unsere Tätigkeit umfänglich über unser Maklerverwaltungsprogramm und halten konkrete Verfahrensanweisungen für die Ausführung unserer Aufträge vor. Profiling findet in unserem Unternehmen nicht statt. Die Daten werden ausschließlich zu den vereinbarten Zwecken verarbeitet.
            </p>
            <p className="text-foreground">
              Die Daten unserer Kunden werden nach Kündigung des Maklervertrages nach den gesetzlichen Vorgaben, insbesondere der Bestimmungen zu gesetzlichen Aufbewahrungsfristen gelöscht. Die Fristen können zur Verteidigung von möglichen Rechtsansprüchen entsprechend verlängert werden. Anstelle der Löschung tritt die Einschränkung der Verarbeitung.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Verpflichtung auf Vertraulichkeit</h3>
            <p className="text-foreground">
              Alle Mitarbeiter werden bei der Aufnahme ihrer Tätigkeit zur Verschwiegenheit und der Einhaltung der Arbeitsanweisungen sowie dieser Richtlinie verpflichtet. Die Verpflichtung wird jährlich erneuert.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Verarbeitungsübersichten (Art. 30 DS-GVO)</h3>
            <p className="text-foreground">
              Mittels interner Verfahrensübersichten (Verzeichnis der Verarbeitungstätigkeiten) schaffen wir Transparenz innerhalb des Unternehmens und überprüfen, ob unsere Verfahren besondere Risiken für die Rechte und Freiheiten der Betroffenen aufweisen und damit einer Vorabkontrolle/ Datenschutz-Folgeabschätzung unterliegen. Es besteht die Verpflichtung, diese Übersichten vorzuhalten für eine Einsichtnahme durch die Behörden.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Beschaffung von Hard- und Software</h3>
            <p className="text-foreground">
              Sämtliche für unsere Arbeitsabläufe notwendige Hardware (Rechner, Bildschirme, Tastatur, Maus und Peripheriegeräte wie Scanner oder Drucker) wird nach internen Richtlinien gesteuert. Die Rechner werden für die Mitarbeiter bereits konfiguriert und mit den entsprechenden Programmen, die wir im Standard nutzen, ausgestattet. Weitere Software darf nur in Absprache mit der Geschäftsführung installiert werden.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Passwortrichtlinien</h3>
            <p className="text-foreground">
              Um die Zugriffe zu unseren Systemen sicher zu gestalten, ist eine individuelle Authentifizierung notwendig. Für diese wurden interne Regelungen getroffen, an die sich alle Beteiligten halten müssen.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Technische und organisatorische Maßnahmen</h3>
            <p className="text-foreground">
              Wir ergreifen alle uns möglichen Maßnahmen, die nach dem aktuellen Stand der Technik, sowie organisatorisch dazu geeignet sind, um Unbefugten keinen Zugriff auf die bei uns gespeicherten personenbezogenen Daten zu gewähren. Dazu führen wir separate Aufzeichnungen, um die Anforderungen an die Sicherheit der Datenverarbeitung zu dokumentieren.
            </p>
            <p className="text-foreground">
              Eine Übermittlung in Drittländer ist zum aktuellen Zeitpunkt nicht geplant.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Rechte von Betroffenen (Art. 12 -23 DS-GVO)</h3>
            <p className="text-foreground">
              Der Betroffene kann Auskunft darüber verlangen, welche personenbezogenen Daten welcher Herkunft über ihn zu welchem Zweck gespeichert sind. Falls im Arbeitsverhältnis nach dem jeweils anzuwendenden Arbeitsrecht weitergehende Einsichtsrechte in Unterlagen des Arbeitgebers (z.B. Personalakte) vorgesehen sind, so bleiben diese unberührt.
            </p>
            <p className="text-foreground">
              Werden personenbezogene Daten an Dritte übermittelt, muss auch über die Identität des Empfängers oder über die Kategorien von Empfängern Auskunft gegeben werden.
            </p>
            <p className="text-foreground">
              Sollten personenbezogene Daten unrichtig oder unvollständig sein, kann der Betroffene ihre Berichtigung oder Ergänzung verlangen.
            </p>
            <p className="text-foreground">
              Der Betroffene kann der Verarbeitung seiner personenbezogenen Daten zu Zwecken der Werbung oder der Markt- und Meinungsforschung widersprechen. Für diese Zwecke müssen die Daten für die Verarbeitung eingeschränkt (gesperrt) werden.
            </p>
            <p className="text-foreground">
              Der Betroffene ist berechtigt, die Löschung seiner Daten zu verlangen, wenn die Rechtsgrundlage für die Verarbeitung der Daten fehlt oder weggefallen ist. Gleiches gilt für den Fall, dass der Zweck der Datenverarbeitung durch Zeitablauf oder aus anderen Gründen entfallen ist. Bestehende Aufbewahrungspflichten und einer Löschung entgegenstehende schutzwürdige Interessen müssen beachtet werden.
            </p>
            <p className="text-foreground">
              Der Betroffene hat ein grundsätzliches Widerspruchsrecht gegen die Verarbeitung seiner Daten mit Wirkung auf die Zukunft, das zu berücksichtigen ist, wenn sein schutzwürdiges Interesse aufgrund einer besonderen persönlichen Situation das Interesse an der Verarbeitung überwiegt. Dies gilt nicht, wenn eine Rechtsvorschrift zur Durchführung der Verarbeitung verpflichtet.
            </p>
            <p className="text-foreground">
              Der Betroffene hat ein Recht auf Datenübertragbarkeit. Das bedeutet das Recht, die personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
            </p>
            <p className="text-foreground">
              Der Betroffene hat ein Beschwerderecht bei der Aufsichtsbehörde, in deren Bundesland das Unternehmen seinen Sitz hat. Die Kontaktdaten finden Sie zu Beginn der Beschreibung unserer Datenschutzorganisation.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Verfahren bei &quot;Datenpannen&quot; (Art. 33 DS-GVO)</h3>
            <p className="text-foreground">
              Jeder Mitarbeiter soll seinem jeweiligen Vorgesetzten, der Geschäftsführung oder dem DSB unverzüglich Fälle von Verstößen gegen diese Datenschutzrichtlinie oder andere Vorschriften zum Schutz personenbezogener Daten (Datenschutzvorfälle) melden. Die verantwortliche Führungskraft ist verpflichtet, den DSB umgehend über Datenschutzvorfälle zu unterrichten.
            </p>
            <p className="text-foreground">
              In Fällen von unrechtmäßiger Übermittlung personenbezogener Daten an Dritte, unrechtmäßigem Zugriff durch Dritte auf personenbezogene Daten, oder bei Verlust personenbezogener Daten sind die im Unternehmen vorgesehenen Meldungen unverzüglich vorzunehmen, damit nach staatlichem Recht bestehende Meldepflichten von Datenschutzvorfällen erfüllt werden können.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Erklärung zum Schutz Ihrer Daten beim Besuch unserer Homepage</h3>

            <h4 className="text-base font-bold text-foreground">Formulare</h4>
            <p className="text-foreground">
              Auf unserer Internetseite können Sie für die elektronische Kontaktaufnahme das Kontaktformular nutzen. Geben Sie Ihre persönlichen Daten wie beispielsweise Name, Geburtsdatum, Anschrift, Bankverbindung oder sonstige Daten z.B. zur Erstellung eines Angebots oder Meldung eines Schaden in ein Formular ein, werden diese von uns gespeichert und ausschließlich zu diesen Zwecken verarbeitet.
            </p>
            <p className="text-foreground">
              Persönliche Daten über Minderjährige erheben wir wissentlich nur bei Erziehungsberechtigten und nur, wenn und soweit die personenbezogene Verarbeitung und Nutzung zur Erfüllung eines Vertragsverhältnisses erforderlich ist.
            </p>

            <h4 className="text-base font-bold text-foreground">Einbindung und Verwendung von Inhalten Dritter</h4>
            <p className="text-foreground">
              In unserer Webseite können Inhalte von Dritten, insbesondere Angebotsprogramme, Vergleichsrechner und Produktangebote z. B. von Versicherern eingebunden sein. Diese Inhalte können im Design unseres Internetauftritts sein.
            </p>
            <p className="text-foreground">
              Für diese Inhalte gelten die Datenschutzerklärungen des Dritten, welche an der entsprechenden Stelle verlinkt sind, bzw. im Internetauftritt des Dritten ersichtlich sind.
            </p>

            <h4 className="text-base font-bold text-foreground">Cookies</h4>
            <p className="text-foreground">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            <p className="text-foreground">
              Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="text-foreground">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="text-foreground">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
            </p>

            <h4 className="text-base font-bold text-foreground">Server-Log-Dateien</h4>
            <p className="text-foreground">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-foreground list-disc pl-6">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-foreground">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="text-foreground">
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Hinweise zur Nutzung von Tarifrechnern</h3>

            <h4 className="text-base font-bold text-foreground">Beratung</h4>
            <p className="text-foreground">
              Als Versicherungsmakler sind wir verpflichtet bedarfsgerecht zu beraten. Wir bitten Sie deshalb, die Vergleichsplattform zunächst zur Vorabinformation zu nutzen und uns vor Vertragsabschluss zu kontaktieren, damit wir die Beratungsleistungen erbringen und dokumentieren können. Hierzu senden Sie uns bitten den Vergleich per Email mit dem Hinweis auf den gewünschten Anbieter an uns.
            </p>
            <p className="text-foreground">
              Bei Onlineabschluss ohne vorherige Beratung verzichten Sie auf eine Beratung und Dokumentierung. Sie erhalten nach Antragstellung eine entsprechende Verzichtserklärung mit der Bitte um Unterzeichnung.
            </p>

            <h4 className="text-base font-bold text-foreground">Datenschutz</h4>
            <p className="text-foreground">
              Ihre eingegebenen Daten werden im Rahmen der Auftragsverarbeitung für die für uns tätigen Unternehmen VEMA eG (
              <a href="https://www.vema-eg.de" target="_blank" rel="noopener noreferrer" className="text-primary">www.vema-eg.de</a>
              ) und Innosystems (
              <a href="https://www.innosystems.de" target="_blank" rel="noopener noreferrer" className="text-primary">www.innosystems.de</a>
              ) gespeichert und verarbeitet.
            </p>

            <h4 className="text-base font-bold text-foreground">Versichererauswahl</h4>
            <p className="text-foreground">
              Beachten Sie bitte, dass es keine Vergleichsplattform gibt, welche alle Versicherer beinhaltet. Die Betreiber von Vergleichsplattformen sind ebenfalls Versicherungsmakler wie wir. Es gibt Versicherer, die grundsätzlich nicht mit Versicherungsmaklern zusammenarbeiten oder es nicht gestatten ihre Tarife in Vergleichsplattformen einzustellen.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Verwendung von Cookies / Matomo (vorher Piwik)</h3>
            <p className="text-foreground">
              Unsere Website verwendet Matomo, dabei handelt es sich um einen sogenannten Webanalysedienst. Matomo verwendet sog. „Cookies", das sind Textdateien, die auf Ihrem Computer gespeichert werden und die unsererseits eine Analyse der Benutzung der Webseite ermöglichen. Zu diesem Zweck werden die durch das Cookie erzeugten Nutzungsinformationen (einschließlich Ihrer gekürzten IP-Adresse) an unseren Server übertragen und zu Nutzungsanalysezwecken gespeichert, was der Webseitenoptimierung unsererseits dient. Ihre IP-Adresse wird bei diesem Vorgang umgehend anonymisiert, so dass Sie als Nutzer für uns anonym bleiben. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden nicht an Dritte weitergegeben. Sie können die Verwendung der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern, es kann jedoch sein, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können.
            </p>
            <p className="text-foreground">
              Wenn Sie mit der Speicherung und Auswertung dieser Daten aus Ihrem Besuch nicht einverstanden sind, dann können Sie der Speicherung und Nutzung nachfolgend per Mausklick jederzeit widersprechen. In diesem Fall wird in Ihrem Browser ein sog. Opt-Out-Cookie abgelegt, was zur Folge hat, dass Matomo keinerlei Sitzungsdaten erhebt. Achtung: Wenn Sie Ihre Cookies löschen, so hat dies zur Folge, dass auch das Opt-Out-Cookie gelöscht wird und ggf. von Ihnen erneut aktiviert werden muss.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Google Web Fonts</h3>
            <p className="text-foreground">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="text-foreground">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p className="text-foreground">
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
            </p>
            <p className="text-foreground">
              Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary">
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a href="https://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-primary">
                https://www.google.com/policies/privacy
              </a>.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Einwilligungserklärung zur Datenverarbeitung und Kontaktaufnahme</h3>
            <p className="text-foreground">
              Um für Sie tätig werden zu können, müssen wir Daten von Ihnen erfassen, speichern und an Dritte weitergeben. Dies tun wir beispielsweise, wenn wir Ihre Risikosituation erfassen und diese Daten an verschiedene Versicherer weitergeben, um für Sie passende Angebote zu erhalten. Hierzu nutzen wir auch sogenannte Maklerdienstleister.
            </p>
            <p className="text-foreground">
              Oft ist es auch erforderlich, dass wir Sie betreffende Daten von Dritten anfordern. In erster Linie sind dies Versicherer, aber auch Daten von Ärzten, Steuerberatern oder Rechtsanwälten und Auskunfteien können beispielsweise erforderlich sein.
            </p>
            <p className="text-foreground">
              Gesundheitsdaten werden ausschließlich erhoben, soweit es für die Vermittlung von Lebens-, Kranken- oder Unfallversicherungen (Personenversicherungen) erforderlich ist, bzw. bei der Abwicklung von Leistungs- und Schadenfällen.
            </p>
            <p className="text-foreground">
              Sie können diese Einwilligungen jeweils einzeln erteilen und jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="text-foreground">
              Beachten Sie bitte, dass wir dann ggfs. nicht mehr für Sie tätig sein können.
            </p>
            <p className="text-foreground">
              Weiterreichende Informationen entnehmen Sie bitte unserer Datenschutzrichtlinie mit Geschäftspartnerliste.
            </p>

            <h4 className="text-base font-bold text-foreground">Einwilligung zur Erfassung und Anforderung von Daten</h4>
            <p className="text-foreground">
              Sie willigen ein, dass wir Daten von Ihnen erheben und von Dritten anfordern. Sofern wir Gesundheitsdaten von Ärzten anfordern, werden wir Sie zuvor darüber informieren.
            </p>

            <h4 className="text-base font-bold text-foreground">Einwilligung zur Speicherung von Daten</h4>
            <p className="text-foreground">
              Sie willigen ein, dass wir die erfassten und angeforderten Daten im erforderlichen Umfang speichern und verarbeiten bzw. von berechtigten Dritten speichern und verarbeiten lassen.
            </p>

            <h4 className="text-base font-bold text-foreground">Einwilligung zur Weitergabe von Daten</h4>
            <p className="text-foreground">
              Sie willigen ein, dass wir Daten im erforderlichen Rahmen unserer Maklertätigkeit an Dritte weitergeben. Dritte sind hier beispielsweise Versicherer, Maklerdienstleister, Werkstätten, Gutachter oder sonstige Dienstleister. Eine Übersicht potenzieller Empfänger können Sie der Geschäftspartnerübersicht entnehmen. Auf Anfrage erhalten Sie selbstverständlich auch Auskunft, an wen tatsächlich Sie betreffende Daten von uns übermittelt wurden.
            </p>

            <h4 className="text-base font-bold text-foreground">Einwilligung zur Kontaktaufnahme</h4>
            <p className="text-foreground">
              Kundeninformation ist ein Bestandteil unserer Arbeit. Sie haben die Möglichkeit der elektronischen Kontaktaufnahme über die Formulare genutzt und erwarten eine Rückmeldung zu Ihrer Anfrage, wozu wir die übermittelten Kontaktdaten nutzen werden. Deshalb benötigen wir Ihr Einverständnis, um unsere Tätigkeit ausüben zu können.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Änderungen innerhalb der Datenschutz-Richtlinie</h3>
            <p className="text-foreground">
              Wir behalten uns vor, die Datenschutz-Richtlinie bei Bedarf anzupassen, damit diese den aktuellen rechtlichen und technischen Anforderungen entspricht. Diese gelten dann bei einem erneuten Besuch. Auf eine Änderung weisen wir durch den Revisionsstand hin.
            </p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Anhang</h3>
            <p className="text-foreground">Geschäftspartnerliste</p>
            <p className="text-foreground">Versichererliste</p>

            <hr className="my-8" />

            <h3 className="text-lg font-bold text-foreground">Haben Sie Fragen?</h3>
            <p className="text-foreground">Wir sind gerne für Sie da:</p>
            <div className="p-6 rounded-xl bg-muted">
              <p className="text-foreground mb-0">
                <a href="tel:02824809293" className="text-primary">02824 / 809293</a><br />
                <a href="mailto:martin.smits@makler-kalkar.de" className="text-primary">
                  martin.smits(at)makler-kalkar.de
                </a>
              </p>
            </div>

            <p className="text-foreground mt-8">
              Link zur Seite:{" "}
              <a
                href="https://landingpage.vema-eg.de/maklerkalkar/newsletter/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                https://landingpage.vema-eg.de/maklerkalkar/newsletter/datenschutz
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}