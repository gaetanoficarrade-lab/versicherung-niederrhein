import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

export default function Kontakt() {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Bitte bestätige die Datenschutzbestimmungen",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Nachricht gesendet",
      description: "Wir melden uns schnellstmöglich bei dir.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hast du Fragen oder möchtest du einen Beratungstermin vereinbaren? 
              Wir sind gerne für dich da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                So erreichst du uns
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Smits Versicherungsmakler GmbH & Co. KG<br />
                      Markt 3<br />
                      47546 Kalkar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      Tel.: <a href="tel:02824809293" className="hover:text-primary">02824-809293</a><br />
                      Fax: 02824-809294
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@makler-kalkar.de" className="hover:text-primary">
                        info@makler-kalkar.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Bürozeiten</h3>
                    <p className="text-muted-foreground">
                      Mo-Fr: 9:00 - 12:30 Uhr<br />
                      Mo-Do: 15:00 - 17:30 Uhr<br />
                      oder nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Karte: Markt 3, 47546 Kalkar</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-premium p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Schreib uns
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Dein Name *
                    </label>
                    <Input placeholder="Max Mustermann" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deine E-Mail *
                    </label>
                    <Input type="email" placeholder="max@example.de" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deine Telefonnummer
                    </label>
                    <Input type="tel" placeholder="+49 123 456789" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Betreff *
                    </label>
                    <Input placeholder="Beratungsanfrage" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Deine Nachricht
                    </label>
                    <Textarea
                      placeholder="Wie können wir dir helfen?"
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                      Ich akzeptiere die{" "}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzbestimmungen
                      </a>{" "}
                      und willige ein, dass meine Angaben zur Kontaktaufnahme gespeichert werden.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-5 w-5" />
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
