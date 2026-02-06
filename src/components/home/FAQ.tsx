import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen einem Versicherungsmakler und einem Versicherungsvertreter?",
    answer: "Ein Versicherungsmakler arbeitet unabhängig und vertritt deine Interessen als Kunde. Wir sind nicht an eine bestimmte Versicherungsgesellschaft gebunden und können aus dem gesamten Markt die für dich beste Lösung auswählen. Ein Versicherungsvertreter hingegen arbeitet für eine oder mehrere bestimmte Versicherungsgesellschaften und vertritt deren Interessen."
  },
  {
    question: "Kostet die Beratung durch einen Versicherungsmakler extra?",
    answer: "Nein, unsere Beratung ist für dich kostenlos. Als Versicherungsmakler erhalten wir unsere Vergütung in Form von Courtagen direkt von den Versicherungsgesellschaften. Der Beitrag, den du für deine Versicherung zahlst, ist der gleiche wie bei einem Direktabschluss."
  },
  {
    question: "Wie schnell könnt ihr im Schadenfall helfen?",
    answer: "Im Schadenfall sind wir dein erster Ansprechpartner. Wir nehmen deine Schadenmeldung entgegen, prüfen deinen Versicherungsschutz und setzen uns direkt mit der Versicherungsgesellschaft in Verbindung. In dringenden Fällen erreichst du uns auch außerhalb der Geschäftszeiten über unsere Notfall-Hotline."
  },
  {
    question: "Könnt ihr auch bestehende Versicherungen übernehmen?",
    answer: "Ja, selbstverständlich. Wir können deine bestehenden Versicherungsverträge als Makler übernehmen, ohne dass sich an den Verträgen selbst etwas ändert. So profitierst du von unserer unabhängigen Beratung und persönlichen Betreuung, ohne deine bewährten Verträge kündigen zu müssen."
  },
  {
    question: "Welche Versicherungen brauche ich wirklich?",
    answer: "Das hängt von deiner individuellen Lebenssituation ab. In einem persönlichen Beratungsgespräch analysieren wir deine Situation und erstellen ein maßgeschneidertes Konzept. Grundsätzlich empfehlen wir jedem eine Privathaftpflichtversicherung, da diese vor existenzbedrohenden Schadenersatzforderungen schützt."
  },
  {
    question: "Wie oft sollte ich meine Versicherungen überprüfen lassen?",
    answer: "Wir empfehlen mindestens einmal jährlich einen Versicherungs-Check. Besonders wichtig ist eine Überprüfung bei Veränderungen in deinem Leben – etwa bei Heirat, Geburt eines Kindes, Hauskauf oder Berufswechsel. So stellen wir sicher, dass dein Versicherungsschutz immer optimal zu deiner aktuellen Situation passt."
  },
  {
    question: "Betreut ihr auch Firmenkunden?",
    answer: "Ja, wir betreuen sowohl Privat- als auch Firmenkunden. Für Unternehmen bieten wir maßgeschneiderte Lösungen in den Bereichen Betriebshaftpflicht, Inhaltsversicherung, Rechtsschutz, Firmenfahrzeuge und betriebliche Altersvorsorge. Unsere Erfahrung reicht vom Handwerksbetrieb bis zum mittelständischen Unternehmen."
  },
  {
    question: "Wie erreiche ich euch am besten?",
    answer: "Du kannst uns telefonisch unter 02824-809293 erreichen, per E-Mail an info@makler-kalkar.de schreiben oder uns über WhatsApp kontaktieren. Für ein persönliches Gespräch besuch uns gerne in unserem Büro am Markt 3 in Kalkar. Terminvereinbarungen sind auch außerhalb der regulären Öffnungszeiten möglich."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <HelpCircle className="h-4 w-4" />
            Häufig gestellte Fragen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deine Fragen – unsere Antworten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier findest du Antworten auf die häufigsten Fragen rund um 
            Versicherungen und unsere Dienstleistungen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Hast du weitere Fragen?{" "}
            <a href="/kontakt" className="text-primary font-medium hover:underline">
              Kontaktiere uns
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
