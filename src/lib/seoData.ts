// SEO-Daten für alle Seiten der Website
// Jede Seite erhält individuelle, keyword-optimierte Meta-Beschreibungen

export const seoData = {
  // Startseite
  home: {
    title: "Versicherungsmakler Kalkar | Smits & Kollegen",
    description: "Ihr unabhängiger Versicherungsmakler in Kalkar am Niederrhein ✓ Über 6.000 zufriedene Kunden ✓ Persönliche Beratung ✓ KFZ, Hausrat, Gewerbe & mehr. Jetzt beraten lassen!",
    keywords: ["Versicherungsmakler Kalkar", "Versicherungen Niederrhein", "unabhängige Versicherungsberatung", "Smits Kollegen"],
    canonical: "/",
  },

  // Unternehmensseiten
  geschichte: {
    title: "Unsere Geschichte | Versicherungsmakler seit Jahren",
    description: "Erfahren Sie mehr über die Geschichte von Smits & Kollegen Versicherungsmakler in Kalkar. Seit Jahren Ihr vertrauensvoller Partner für Versicherungen am Niederrhein.",
    keywords: ["Versicherungsmakler Geschichte", "Smits Kollegen Kalkar", "Versicherungsagentur Niederrhein"],
    canonical: "/geschichte",
  },
  besonderheiten: {
    title: "Was uns besonders macht | Unabhängige Beratung",
    description: "Entdecken Sie, was Smits & Kollegen als Versicherungsmakler auszeichnet: Unabhängigkeit, persönliche Beratung und maßgeschneiderte Versicherungslösungen in Kalkar.",
    keywords: ["unabhängiger Makler", "Versicherungsberatung", "Vorteile Versicherungsmakler"],
    canonical: "/besonderheiten",
  },
  team: {
    title: "Unser Team | Ihre Ansprechpartner in Kalkar",
    description: "Lernen Sie das Team von Smits & Kollegen kennen. Erfahrene Versicherungsexperten beraten Sie persönlich zu allen Fragen rund um Ihre Absicherung.",
    keywords: ["Versicherungsberater Team", "Ansprechpartner Versicherung", "Experten Kalkar"],
    canonical: "/team",
  },

  // Privatversicherungen - Sachversicherungen
  kfzVersicherung: {
    title: "KFZ-Versicherung Kalkar | Autoversicherung vergleichen",
    description: "KFZ-Versicherung günstig abschließen ✓ Haftpflicht, Teilkasko & Vollkasko ✓ Über 50 Versicherer im Vergleich ✓ Persönliche Beratung in Kalkar. Jetzt Angebot anfordern!",
    keywords: ["KFZ Versicherung Kalkar", "Autoversicherung Niederrhein", "KFZ Haftpflicht", "Vollkasko", "Teilkasko"],
    canonical: "/kfz-versicherung",
  },
  tierhalterhaftpflicht: {
    title: "Tierhalterhaftpflicht | Hunde- & Pferdeversicherung",
    description: "Tierhalterhaftpflicht für Hunde und Pferde ✓ Schutz vor Schadenersatzforderungen ✓ Günstige Beiträge ✓ Beratung in Kalkar. Schützen Sie sich als Tierhalter!",
    keywords: ["Tierhalterhaftpflicht", "Hundehaftpflicht", "Pferdehaftpflicht", "Tierversicherung Kalkar"],
    canonical: "/tierhalterhaftpflicht",
  },
  hausratversicherung: {
    title: "Hausratversicherung Kalkar | Einbruch & Feuer absichern",
    description: "Hausratversicherung für Ihren Besitz ✓ Schutz bei Einbruch, Feuer, Wasser & Sturm ✓ Faire Prämien ✓ Beratung in Kalkar. Sichern Sie Ihr Hab und Gut!",
    keywords: ["Hausratversicherung Kalkar", "Einbruchschutz", "Hausrat versichern", "Wohnungsversicherung"],
    canonical: "/hausratversicherung",
  },
  rechtsschutzversicherung: {
    title: "Rechtsschutzversicherung | Ihr Recht durchsetzen",
    description: "Rechtsschutzversicherung für Privat & Beruf ✓ Verkehrsrechtsschutz ✓ Arbeitsrechtsschutz ✓ Mietrechtsschutz. Kämpfen Sie für Ihr Recht ohne Kostenrisiko!",
    keywords: ["Rechtsschutzversicherung", "Verkehrsrechtsschutz", "Arbeitsrechtsschutz", "Rechtsschutz Kalkar"],
    canonical: "/rechtsschutzversicherung",
  },
  privatHaftpflicht: {
    title: "Private Haftpflichtversicherung | Existenzschutz",
    description: "Private Haftpflichtversicherung ab günstigen Beiträgen ✓ Schutz vor Millionenschäden ✓ Für Singles, Paare & Familien. Die wichtigste Versicherung überhaupt!",
    keywords: ["Privathaftpflicht", "Haftpflichtversicherung", "Personenschäden", "Sachschäden"],
    canonical: "/privat-haftpflicht",
  },
  reiseversicherung: {
    title: "Reiseversicherung | Sorglos in den Urlaub",
    description: "Reiseversicherung für Ihren Urlaub ✓ Reiserücktritt ✓ Auslandskrankenversicherung ✓ Gepäckversicherung. Genießen Sie Ihren Urlaub ohne Sorgen!",
    keywords: ["Reiseversicherung", "Reiserücktrittsversicherung", "Auslandskrankenversicherung", "Urlaubsschutz"],
    canonical: "/reiseversicherung",
  },
  photovoltaikVersicherung: {
    title: "Photovoltaikversicherung | Solaranlage absichern",
    description: "Photovoltaikversicherung für Ihre Solaranlage ✓ Ertragsausfall ✓ Diebstahl ✓ Blitzschlag ✓ Sturm. Schützen Sie Ihre Investition in erneuerbare Energien!",
    keywords: ["Photovoltaikversicherung", "Solaranlagen Versicherung", "PV Versicherung", "Ertragsausfall"],
    canonical: "/photovoltaik-versicherung",
  },
  wohngebaeudeversicherung: {
    title: "Wohngebäudeversicherung | Haus richtig versichern",
    description: "Wohngebäudeversicherung für Ihr Eigenheim ✓ Feuer, Sturm, Hagel, Leitungswasser ✓ Elementarschutz ✓ Faire Prämien. Schützen Sie Ihr Zuhause!",
    keywords: ["Wohngebäudeversicherung", "Gebäudeversicherung", "Hausversicherung", "Elementarversicherung"],
    canonical: "/wohngebaeudeversicherung",
  },

  // Vorsorge & Gesundheit
  berufsunfaehigkeit: {
    title: "Berufsunfähigkeitsversicherung | Einkommen absichern",
    description: "Berufsunfähigkeitsversicherung: Sichern Sie Ihr Einkommen ✓ Bis zu 75% des Einkommens ✓ Alle Berufe ✓ Persönliche Beratung. Ihre Arbeitskraft ist Ihr größtes Kapital!",
    keywords: ["Berufsunfähigkeitsversicherung", "BU Versicherung", "Einkommensabsicherung", "Arbeitskraft versichern"],
    canonical: "/berufsunfaehigkeit",
  },
  unfallversicherung: {
    title: "Unfallversicherung | Schutz rund um die Uhr",
    description: "Private Unfallversicherung ✓ 24/7 Schutz weltweit ✓ Invaliditätsleistung ✓ Unfallrente. Sichern Sie sich bei Unfällen in Freizeit und Beruf ab!",
    keywords: ["Unfallversicherung", "private Unfallversicherung", "Invalidität", "Unfallschutz"],
    canonical: "/unfallversicherung",
  },
  krankenzusatz: {
    title: "Krankenzusatzversicherung | Besser versorgt",
    description: "Krankenzusatzversicherung für bessere Leistungen ✓ Zahnzusatz ✓ Brille ✓ Heilpraktiker ✓ Chefarzt. Ergänzen Sie Ihren Kassenschutz optimal!",
    keywords: ["Krankenzusatzversicherung", "Zahnzusatzversicherung", "Brillenversicherung", "Heilpraktiker"],
    canonical: "/krankenzusatz",
  },
  privateKrankenversicherung: {
    title: "Private Krankenversicherung | PKV Beratung",
    description: "Private Krankenversicherung (PKV) ✓ Für Selbstständige & Angestellte ✓ Bessere Leistungen ✓ Individuelle Tarife. Lassen Sie sich unabhängig beraten!",
    keywords: ["Private Krankenversicherung", "PKV", "Krankenversicherung Selbstständige", "PKV Vergleich"],
    canonical: "/private-krankenversicherung",
  },
  risikolebensversicherung: {
    title: "Risikolebensversicherung | Familie absichern",
    description: "Risikolebensversicherung: Schützen Sie Ihre Familie ✓ Günstige Beiträge ✓ Hohe Versicherungssummen ✓ Flexibel anpassbar. Für den Fall der Fälle vorsorgen!",
    keywords: ["Risikolebensversicherung", "Todesfallschutz", "Hinterbliebenenabsicherung", "Familie absichern"],
    canonical: "/risikolebensversicherung",
  },
  kapitallebensversicherung: {
    title: "Kapitallebensversicherung | Vorsorge & Vermögen",
    description: "Kapitallebensversicherung: Absicherung und Vermögensaufbau ✓ Garantierte Auszahlung ✓ Steuervorteile ✓ Todesfallschutz. Kombinieren Sie Vorsorge und Sparen!",
    keywords: ["Kapitallebensversicherung", "Lebensversicherung", "Vermögensaufbau", "Altersvorsorge"],
    canonical: "/kapitallebensversicherung",
  },
  rentenversicherung: {
    title: "Private Rentenversicherung | Altersvorsorge",
    description: "Private Rentenversicherung für Ihre Altersvorsorge ✓ Lebenslange Rente ✓ Flexible Einzahlung ✓ Steuervorteile. Sichern Sie Ihren Lebensstandard im Alter!",
    keywords: ["Rentenversicherung", "private Altersvorsorge", "Rente", "Vorsorge"],
    canonical: "/rentenversicherung",
  },
  kindervorsorge: {
    title: "Kindervorsorge | Zukunft der Kinder sichern",
    description: "Kindervorsorge: Sichern Sie die Zukunft Ihrer Kinder ✓ Ausbildungsversicherung ✓ Kinderunfallschutz ✓ Sparpläne. Investieren Sie in die Zukunft!",
    keywords: ["Kindervorsorge", "Ausbildungsversicherung", "Kinderversicherung", "Kindersparen"],
    canonical: "/kindervorsorge",
  },

  // Finanzierung
  baufinanzierung: {
    title: "Baufinanzierung Kalkar | Immobilienkredit Vergleich",
    description: "Baufinanzierung zu Top-Konditionen ✓ Über 400 Banken im Vergleich ✓ Persönliche Beratung ✓ Anschlussfinanzierung. Erfüllen Sie sich den Traum vom Eigenheim!",
    keywords: ["Baufinanzierung Kalkar", "Immobilienkredit", "Hypothek", "Hauskauf finanzieren"],
    canonical: "/baufinanzierung",
  },

  // Gewerbeversicherungen
  betriebshaftpflicht: {
    title: "Betriebshaftpflichtversicherung | Gewerbe absichern",
    description: "Betriebshaftpflichtversicherung für Ihr Unternehmen ✓ Personen- und Sachschäden ✓ Branchenlösungen ✓ Faire Prämien. Schützen Sie Ihren Betrieb!",
    keywords: ["Betriebshaftpflicht", "Gewerbeversicherung", "Firmenhaftpflicht", "Unternehmensversicherung"],
    canonical: "/betriebshaftpflicht",
  },
  berufshaftpflicht: {
    title: "Berufshaftpflichtversicherung | Freiberufler & Selbstständige",
    description: "Berufshaftpflichtversicherung für Freiberufler ✓ Architekten ✓ IT-Berater ✓ Steuerberater ✓ Vermögensschäden. Schützen Sie sich vor Berufsfehlern!",
    keywords: ["Berufshaftpflicht", "Vermögensschadenhaftpflicht", "Freiberufler Versicherung", "Selbstständige"],
    canonical: "/berufshaftpflicht",
  },
  gewerblicheGebaeude: {
    title: "Gewerbliche Gebäudeversicherung | Firmeneigentum",
    description: "Gewerbliche Gebäudeversicherung für Ihr Firmeneigentum ✓ Feuer, Sturm, Wasser ✓ Betriebsgebäude ✓ Lagerhallen. Schützen Sie Ihre Immobilien!",
    keywords: ["Gewerbliche Gebäudeversicherung", "Firmengebäude", "Betriebsgebäude versichern", "Gewerbeimmobilie"],
    canonical: "/gewerbliche-gebaeude",
  },
  betriebsunterbrechung: {
    title: "Betriebsunterbrechungsversicherung | Ertragsausfall",
    description: "Betriebsunterbrechungsversicherung: Schutz bei Ertragsausfall ✓ Fixkosten gedeckt ✓ Schnelle Hilfe im Schadenfall. Sichern Sie Ihre Existenz!",
    keywords: ["Betriebsunterbrechungsversicherung", "Ertragsausfallversicherung", "Betriebsausfall", "Geschäftsschutz"],
    canonical: "/betriebsunterbrechung",
  },
  doVersicherung: {
    title: "D&O Versicherung | Managerhaftpflicht",
    description: "D&O Versicherung (Directors and Officers) ✓ Schutz für Geschäftsführer ✓ Vorstände ✓ Aufsichtsräte. Schützen Sie Ihr Privatvermögen!",
    keywords: ["D&O Versicherung", "Managerhaftpflicht", "Geschäftsführerhaftung", "Organhaftpflicht"],
    canonical: "/do-versicherung",
  },
  fuhrparkversicherung: {
    title: "Fuhrparkversicherung | Firmenfahrzeuge absichern",
    description: "Fuhrparkversicherung für Ihre Firmenfahrzeuge ✓ Flottenrabatte ✓ Alle Fahrzeugtypen ✓ Individuelle Lösungen. Optimieren Sie Ihre Fuhrparkkosten!",
    keywords: ["Fuhrparkversicherung", "Flottenversicherung", "Firmenfahrzeuge", "Dienstwagenversicherung"],
    canonical: "/fuhrparkversicherung",
  },

  // Service & Rechtliches
  service: {
    title: "Service-Center | Schaden melden & Dokumente",
    description: "Service-Center von Smits & Kollegen ✓ Schaden melden ✓ Dokumente herunterladen ✓ Verträge verwalten. Schneller Service für unsere Kunden!",
    keywords: ["Versicherung Service", "Schaden melden", "Versicherungsdokumente", "Kundenservice"],
    canonical: "/service",
  },
  kontakt: {
    title: "Kontakt | Beratungstermin vereinbaren",
    description: "Kontaktieren Sie Smits & Kollegen in Kalkar ✓ Telefon: 02824-809293 ✓ Persönliche Beratung ✓ Terminvereinbarung. Wir freuen uns auf Sie!",
    keywords: ["Kontakt Versicherungsmakler", "Beratungstermin", "Versicherung Kalkar", "Anfahrt"],
    canonical: "/kontakt",
  },
  impressum: {
    title: "Impressum | Rechtliche Angaben",
    description: "Impressum der Smits Versicherungsmakler GmbH & Co. KG in Kalkar. Alle rechtlichen Informationen und Kontaktdaten.",
    keywords: ["Impressum", "rechtliche Angaben", "Smits Kollegen"],
    canonical: "/impressum",
  },
  datenschutz: {
    title: "Datenschutz | DSGVO Informationen",
    description: "Datenschutzerklärung von Smits & Kollegen. Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.",
    keywords: ["Datenschutz", "DSGVO", "Datenschutzerklärung"],
    canonical: "/datenschutz",
  },
  versicherungen: {
    title: "Alle Versicherungen im Überblick | Privat & Gewerbe",
    description: "Alle Versicherungsprodukte von Smits & Kollegen ✓ Privatversicherungen ✓ Gewerbeversicherungen ✓ Vorsorge. Finden Sie die passende Absicherung!",
    keywords: ["Versicherungen Überblick", "Versicherungsprodukte", "Privat Gewerbe Versicherung"],
    canonical: "/versicherungen",
  },
};

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
