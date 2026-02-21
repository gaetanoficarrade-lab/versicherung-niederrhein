// SEO-Daten für alle Seiten der Website
// Keys sind die Route-Pfade für einfache Zuordnung via location.pathname

export interface SEOPageData {
  title: string;
  description: string;
  ogImage?: string; // Optional: individuelles OG-Image pro Seite
}

export const seoDataByPath: Record<string, SEOPageData> = {
  // Startseite
  "/": {
    title: "Versicherungsmakler Kalkar | Smits & Kollegen",
    description: "Ihr unabhängiger Versicherungsmakler in Kalkar am Niederrhein ✓ Über 6.000 zufriedene Kunden ✓ Persönliche Beratung ✓ KFZ, Hausrat, Gewerbe & mehr. Jetzt beraten lassen!",
  },

  // Unternehmensseiten
  "/geschichte": {
    title: "Unsere Geschichte | Versicherungsmakler seit Jahren",
    description: "Erfahren Sie mehr über die Geschichte von Smits & Kollegen Versicherungsmakler in Kalkar. Seit Jahren Ihr vertrauensvoller Partner für Versicherungen am Niederrhein.",
  },
  "/besonderheiten": {
    title: "Was uns besonders macht | Unabhängige Beratung",
    description: "Entdecken Sie, was Smits & Kollegen als Versicherungsmakler auszeichnet: Unabhängigkeit, persönliche Beratung und maßgeschneiderte Versicherungslösungen in Kalkar.",
  },
  "/team": {
    title: "Unser Team | Ihre Ansprechpartner in Kalkar",
    description: "Lernen Sie das Team von Smits & Kollegen kennen. Erfahrene Versicherungsexperten beraten Sie persönlich zu allen Fragen rund um Ihre Absicherung.",
  },

  // Privatversicherungen - Sachversicherungen
  "/kfz-versicherung": {
    title: "KFZ-Versicherung Kalkar | Autoversicherung vergleichen",
    description: "KFZ-Versicherung günstig abschließen ✓ Haftpflicht, Teilkasko & Vollkasko ✓ Über 50 Versicherer im Vergleich ✓ Persönliche Beratung in Kalkar. Jetzt Angebot anfordern!",
  },
  "/tierhalterhaftpflicht": {
    title: "Tierhalterhaftpflicht | Hunde- & Pferdeversicherung",
    description: "Tierhalterhaftpflicht für Hunde und Pferde ✓ Schutz vor Schadenersatzforderungen ✓ Günstige Beiträge ✓ Beratung in Kalkar. Schützen Sie sich als Tierhalter!",
  },
  "/hausratversicherung": {
    title: "Hausratversicherung Kalkar | Einbruch & Feuer absichern",
    description: "Hausratversicherung für Ihren Besitz ✓ Schutz bei Einbruch, Feuer, Wasser & Sturm ✓ Faire Prämien ✓ Beratung in Kalkar. Sichern Sie Ihr Hab und Gut!",
  },
  "/rechtsschutzversicherung": {
    title: "Rechtsschutzversicherung | Ihr Recht durchsetzen",
    description: "Rechtsschutzversicherung für Privat & Beruf ✓ Verkehrsrechtsschutz ✓ Arbeitsrechtsschutz ✓ Mietrechtsschutz. Kämpfen Sie für Ihr Recht ohne Kostenrisiko!",
  },
  "/privat-haftpflicht": {
    title: "Private Haftpflichtversicherung | Existenzschutz",
    description: "Private Haftpflichtversicherung ab günstigen Beiträgen ✓ Schutz vor Millionenschäden ✓ Für Singles, Paare & Familien. Die wichtigste Versicherung überhaupt!",
  },
  "/reiseversicherung": {
    title: "Reiseversicherung | Sorglos in den Urlaub",
    description: "Reiseversicherung für Ihren Urlaub ✓ Reiserücktritt ✓ Auslandskrankenversicherung ✓ Gepäckversicherung. Genießen Sie Ihren Urlaub ohne Sorgen!",
  },
  "/photovoltaik-versicherung": {
    title: "Photovoltaikversicherung | Solaranlage absichern",
    description: "Photovoltaikversicherung für Ihre Solaranlage ✓ Ertragsausfall ✓ Diebstahl ✓ Blitzschlag ✓ Sturm. Schützen Sie Ihre Investition in erneuerbare Energien!",
  },
  "/wohngebaeudeversicherung": {
    title: "Wohngebäudeversicherung | Haus richtig versichern",
    description: "Wohngebäudeversicherung für Ihr Eigenheim ✓ Feuer, Sturm, Hagel, Leitungswasser ✓ Elementarschutz ✓ Faire Prämien. Schützen Sie Ihr Zuhause!",
  },

  // Vorsorge & Gesundheit
  "/berufsunfaehigkeit": {
    title: "Berufsunfähigkeitsversicherung | Einkommen absichern",
    description: "Berufsunfähigkeitsversicherung: Sichern Sie Ihr Einkommen ✓ Bis zu 75% des Einkommens ✓ Alle Berufe ✓ Persönliche Beratung. Ihre Arbeitskraft ist Ihr größtes Kapital!",
  },
  "/unfallversicherung": {
    title: "Unfallversicherung | Schutz rund um die Uhr",
    description: "Private Unfallversicherung ✓ 24/7 Schutz weltweit ✓ Invaliditätsleistung ✓ Unfallrente. Sichern Sie sich bei Unfällen in Freizeit und Beruf ab!",
  },
  "/krankenzusatz": {
    title: "Krankenzusatzversicherung | Besser versorgt",
    description: "Krankenzusatzversicherung für bessere Leistungen ✓ Zahnzusatz ✓ Brille ✓ Heilpraktiker ✓ Chefarzt. Ergänzen Sie Ihren Kassenschutz optimal!",
  },
  "/private-krankenversicherung": {
    title: "Private Krankenversicherung | PKV Beratung",
    description: "Private Krankenversicherung (PKV) ✓ Für Selbstständige & Angestellte ✓ Bessere Leistungen ✓ Individuelle Tarife. Lassen Sie sich unabhängig beraten!",
  },
  "/risikolebensversicherung": {
    title: "Risikolebensversicherung | Familie absichern",
    description: "Risikolebensversicherung: Schützen Sie Ihre Familie ✓ Günstige Beiträge ✓ Hohe Versicherungssummen ✓ Flexibel anpassbar. Für den Fall der Fälle vorsorgen!",
  },
  "/kapitallebensversicherung": {
    title: "Kapitallebensversicherung | Vorsorge & Vermögen",
    description: "Kapitallebensversicherung: Absicherung und Vermögensaufbau ✓ Garantierte Auszahlung ✓ Steuervorteile ✓ Todesfallschutz. Kombinieren Sie Vorsorge und Sparen!",
  },
  "/rentenversicherung": {
    title: "Private Rentenversicherung | Altersvorsorge",
    description: "Private Rentenversicherung für Ihre Altersvorsorge ✓ Lebenslange Rente ✓ Flexible Einzahlung ✓ Steuervorteile. Sichern Sie Ihren Lebensstandard im Alter!",
  },
  "/kindervorsorge": {
    title: "Kindervorsorge | Zukunft der Kinder sichern",
    description: "Kindervorsorge: Sichern Sie die Zukunft Ihrer Kinder ✓ Ausbildungsversicherung ✓ Kinderunfallschutz ✓ Sparpläne. Investieren Sie in die Zukunft!",
  },

  // Finanzierung
  "/baufinanzierung": {
    title: "Baufinanzierung Kalkar | Immobilienkredit Vergleich",
    description: "Baufinanzierung zu Top-Konditionen ✓ Über 400 Banken im Vergleich ✓ Persönliche Beratung ✓ Anschlussfinanzierung. Erfüllen Sie sich den Traum vom Eigenheim!",
  },

  // Gewerbeversicherungen
  "/betriebshaftpflicht": {
    title: "Betriebshaftpflichtversicherung | Gewerbe absichern",
    description: "Betriebshaftpflichtversicherung für Ihr Unternehmen ✓ Personen- und Sachschäden ✓ Branchenlösungen ✓ Faire Prämien. Schützen Sie Ihren Betrieb!",
  },
  "/berufshaftpflicht": {
    title: "Berufshaftpflichtversicherung | Freiberufler & Selbstständige",
    description: "Berufshaftpflichtversicherung für Freiberufler ✓ Architekten ✓ IT-Berater ✓ Steuerberater ✓ Vermögensschäden. Schützen Sie sich vor Berufsfehlern!",
  },
  "/gewerbliche-gebaeude": {
    title: "Gewerbliche Gebäudeversicherung | Firmeneigentum",
    description: "Gewerbliche Gebäudeversicherung für Ihr Firmeneigentum ✓ Feuer, Sturm, Wasser ✓ Betriebsgebäude ✓ Lagerhallen. Schützen Sie Ihre Immobilien!",
  },
  "/betriebsunterbrechung": {
    title: "Betriebsunterbrechungsversicherung | Ertragsausfall",
    description: "Betriebsunterbrechungsversicherung: Schutz bei Ertragsausfall ✓ Fixkosten gedeckt ✓ Schnelle Hilfe im Schadenfall. Sichern Sie Ihre Existenz!",
  },
  "/do-versicherung": {
    title: "D&O Versicherung | Managerhaftpflicht",
    description: "D&O Versicherung (Directors and Officers) ✓ Schutz für Geschäftsführer ✓ Vorstände ✓ Aufsichtsräte. Schützen Sie Ihr Privatvermögen!",
  },
  "/fuhrparkversicherung": {
    title: "Fuhrparkversicherung | Firmenfahrzeuge absichern",
    description: "Fuhrparkversicherung für Ihre Firmenfahrzeuge ✓ Flottenrabatte ✓ Alle Fahrzeugtypen ✓ Individuelle Lösungen. Optimieren Sie Ihre Fuhrparkkosten!",
  },

  // Service & Rechtliches
  "/service": {
    title: "Service-Center | Schaden melden & Dokumente",
    description: "Service-Center von Smits & Kollegen ✓ Schaden melden ✓ Dokumente herunterladen ✓ Verträge verwalten. Schneller Service für unsere Kunden!",
  },
  "/kontakt": {
    title: "Kontakt | Beratungstermin vereinbaren",
    description: "Kontaktieren Sie Smits & Kollegen in Kalkar ✓ Telefon: 02824-809293 ✓ Persönliche Beratung ✓ Terminvereinbarung. Wir freuen uns auf Sie!",
  },
  "/impressum": {
    title: "Impressum | Rechtliche Angaben",
    description: "Impressum der Smits Versicherungsmakler GmbH & Co. KG in Kalkar. Alle rechtlichen Informationen und Kontaktdaten.",
  },
  "/datenschutz": {
    title: "Datenschutz | DSGVO Informationen",
    description: "Datenschutzerklärung von Smits & Kollegen. Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.",
  },
  "/zahnzusatzversicherung": {
    title: "Zahnzusatzversicherung | Kosten sparen beim Zahnarzt",
    description: "Zahnzusatzversicherung abschließen ✓ Implantate bezahlbar ✓ Zahnreinigung inklusive ✓ Bis zu 100% Erstattung ✓ Kostenlose Beratung in Kalkar. Jetzt vergleichen!",
  },
  "/versicherungen": {
    title: "Alle Versicherungen im Überblick | Privat & Gewerbe",
    description: "Alle Versicherungsprodukte von Smits & Kollegen ✓ Privatversicherungen ✓ Gewerbeversicherungen ✓ Vorsorge. Finden Sie die passende Absicherung!",
  },
};

// Helper-Funktion: SEO-Daten für aktuelle Route holen
export function getSEOData(pathname: string): SEOPageData {
  return seoDataByPath[pathname] || seoDataByPath["/"];
}

// FAQ-Daten für Homepage
export const homeFAQs = [
  {
    question: "Was ist der Unterschied zwischen einem Versicherungsmakler und einem Versicherungsvertreter?",
    answer: "Ein Versicherungsmakler arbeitet unabhängig und vertritt die Interessen des Kunden. Wir sind nicht an eine bestimmte Versicherungsgesellschaft gebunden und können aus dem gesamten Markt die beste Lösung auswählen. Ein Versicherungsvertreter hingegen arbeitet für eine oder mehrere bestimmte Versicherungsgesellschaften und vertritt deren Interessen."
  },
  {
    question: "Kostet die Beratung durch einen Versicherungsmakler extra?",
    answer: "Nein, unsere Beratung ist kostenlos. Als Versicherungsmakler erhalten wir unsere Vergütung in Form von Courtagen direkt von den Versicherungsgesellschaften. Der Beitrag für die Versicherung ist der gleiche wie bei einem Direktabschluss."
  },
  {
    question: "Wie schnell könnt ihr im Schadenfall helfen?",
    answer: "Im Schadenfall sind wir der erste Ansprechpartner. Wir nehmen die Schadenmeldung entgegen, prüfen den Versicherungsschutz und setzen uns direkt mit der Versicherungsgesellschaft in Verbindung. In dringenden Fällen erreichen Sie uns auch außerhalb der Geschäftszeiten."
  },
  {
    question: "Könnt ihr auch bestehende Versicherungen übernehmen?",
    answer: "Ja, selbstverständlich. Wir können bestehende Versicherungsverträge als Makler übernehmen, ohne dass sich an den Verträgen selbst etwas ändert. So profitieren Sie von unserer unabhängigen Beratung und persönlichen Betreuung."
  },
  {
    question: "Welche Versicherungen brauche ich wirklich?",
    answer: "Das hängt von der individuellen Lebenssituation ab. In einem persönlichen Beratungsgespräch analysieren wir die Situation und erstellen ein maßgeschneidertes Konzept. Grundsätzlich empfehlen wir jedem eine Privathaftpflichtversicherung, da diese vor existenzbedrohenden Schadenersatzforderungen schützt."
  },
  {
    question: "Wie oft sollte ich meine Versicherungen überprüfen lassen?",
    answer: "Wir empfehlen mindestens einmal jährlich einen Versicherungs-Check. Besonders wichtig ist eine Überprüfung bei Veränderungen im Leben – etwa bei Heirat, Geburt eines Kindes, Hauskauf oder Berufswechsel."
  },
  {
    question: "Betreut ihr auch Firmenkunden?",
    answer: "Ja, wir betreuen sowohl Privat- als auch Firmenkunden. Für Unternehmen bieten wir maßgeschneiderte Lösungen in den Bereichen Betriebshaftpflicht, Inhaltsversicherung, Rechtsschutz, Firmenfahrzeuge und betriebliche Altersvorsorge."
  },
  {
    question: "Wie erreiche ich euch am besten?",
    answer: "Sie können uns telefonisch unter 02824-809293 erreichen, per E-Mail an info@makler-kalkar.de schreiben oder über WhatsApp kontaktieren. Für ein persönliches Gespräch besuchen Sie uns gerne in unserem Büro am Markt 3 in Kalkar."
  }
];