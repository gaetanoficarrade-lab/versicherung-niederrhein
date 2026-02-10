import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Smartphone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import appMockup from "@/assets/vema-app-mockup-enhanced.png";

const AppSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Bitte füllen Sie mindestens Name und E-Mail aus.");
      return;
    }
    setSubmitted(true);
    toast.success("Ihre Anfrage wurde erfolgreich gesendet!");
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Digitaler Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Versicherungsapp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Alle Ihre Verträge, Dokumente und Schadensmeldungen – jederzeit griffbereit in einer App.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Zugang anfordern
              </h3>
              <p className="text-muted-foreground mb-8">
                Fordern Sie Ihren persönlichen Zugang zur Versicherungsapp an – kostenlos und unverbindlich.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Vielen Dank!
                  </h4>
                  <p className="text-muted-foreground">
                    Wir melden uns in Kürze bei Ihnen mit Ihren Zugangsdaten.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="app-name">Name *</Label>
                      <Input
                        id="app-name"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="app-email">E-Mail *</Label>
                      <Input
                        id="app-email"
                        type="email"
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-phone">Telefon</Label>
                    <Input
                      id="app-phone"
                      type="tel"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      maxLength={30}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-message">Nachricht (optional)</Label>
                    <Textarea
                      id="app-message"
                      placeholder="Haben Sie besondere Wünsche oder Fragen?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      maxLength={1000}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 text-base"
                  >
                    <Send className="w-4 h-4" />
                    Zugang anfordern
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right: App Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={appMockup}
                alt="Versicherungsapp auf dem Smartphone – Verträge und Dokumente immer dabei"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
