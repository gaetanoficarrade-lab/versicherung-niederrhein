import { motion } from "framer-motion";
import { PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";

const faqs = [
  {
    question: "Wer braucht eine Tierhalterhaftpflichtversicherung?",
    answer: "Jeder, der ein Tier besitzt. Als Tierhalter haften Sie auch ohne Ihr eigenes Verschulden.",
  },
  {
    question: "Wer ist versichert?",
    answer: "Der Versicherungsnehmer als Tierhalter und Personen die mit seinem Willen das Tier betreuen, beaufsichtigen oder führen.",
  },
  {
    question: "Was ist versichert?",
    answer: "Versichert sind Schäden die von den im Versicherungsschein genannten Tieren verursacht werden. Gedeckt sind Personen-, Sach- und Vermögensschäden.",
  },
  {
    question: "Wer ist nicht versichert?",
    answer: "Der Tierhalter selbst, Mitversicherte untereinander sowie Personen, die das Tier gewerbsmäßig hüten, beaufsichtigen oder führen.",
  },
];

export default function Tierhalterhaftpflicht() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-amber-50 to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
              <PawPrint className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tierhalterhaftpflicht
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Als Halter eines Tieres haften Sie für Schäden, die das Tier verursacht, 
              auch wenn Sie selbst keine Schuld trifft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200 mb-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Wichtig zu wissen
                </h2>
                <p className="text-foreground leading-relaxed">
                  Allein die Tatsache, dass Sie ein Tier besitzen genügt, damit Sie haftbar 
                  gemacht werden können. Dies fällt unter den Bestand der <strong>Gefährdungshaftung</strong>.
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                Die Tierhalterhaftpflicht ist für jeden privaten Tierbesitzer eine zwingende 
                Notwendigkeit, denn <strong>Sie haften in unbegrenzter Höhe</strong> für Ihr Tier.
              </p>

              <div className="text-center mb-12">
                <a
                  href="http://www.mr-money.de/module/tie/start.php?id=00102005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 bg-amber-600 hover:bg-amber-700">
                    Jetzt vergleichen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Häufige Fragen zur Tierhalterhaftpflicht
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-xl px-6 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
