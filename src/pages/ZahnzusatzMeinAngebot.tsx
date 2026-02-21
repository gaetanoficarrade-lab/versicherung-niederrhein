import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight, Gift } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import logoImg from "@/assets/logo-new.png";

// Webhook URL for Zapier/Make – replace with your actual webhook URL
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/0E6iNh49LTwzGNAFFdno/webhook-trigger/c6b80d91-8ae2-475a-9d1e-35ee9758a069";

export default function ZahnzusatzMeinAngebot() {
  const navigate = useNavigate();
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [datenschutz, setDatenschutz] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!vorname.trim()) e.vorname = "Bitte Vorname eingeben";
    if (!nachname.trim()) e.nachname = "Bitte Nachname eingeben";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Bitte gültige E-Mail eingeben";
    if (!geburtsdatum) e.geburtsdatum = "Bitte Geburtsdatum angeben";
    if (!datenschutz) e.datenschutz = "Bitte Datenschutzbestimmungen akzeptieren";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const leadData = {
      vorname: vorname.trim(),
      nachname: nachname.trim(),
      email: email.trim(),
      geburtsdatum: geburtsdatum!.toISOString(),
    };

    sessionStorage.setItem("zahnzusatz_lead", JSON.stringify(leadData));

    // Send data to webhook (Zapier/Make → GHL)
    if (WEBHOOK_URL) {
      try {
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify({
            first_name: leadData.vorname,
            last_name: leadData.nachname,
            email: leadData.email,
            date_of_birth: format(geburtsdatum!, "yyyy-MM-dd"),
            datenschutz_akzeptiert: true,
            source: "zahnzusatz-angebot",
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook submission error:", err);
      }
    }

    navigate("/zahnzusatzversicherung/angebote");
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO />

      {/* Simple Header with Logo */}
      <header className="py-6 border-b border-border">
        <div className="section-container flex justify-center">
          <img src={logoImg} alt="Smits Versicherungsmakler" className="h-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center py-16">
        <div className="section-container">
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Gift className="h-4 w-4" />
                Persönlich für dich vorbereitet
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dein persönliches Angebot wartet
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wie besprochen haben wir exklusive Tarife für dich zusammengestellt. 
                Bitte bestätige kurz deine Daten, um dein Angebot einzusehen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Identitätsbestätigung</p>
                  <p className="text-xs text-muted-foreground">Deine Daten werden vertraulich behandelt</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vorname">Vorname</Label>
                    <Input
                      id="vorname"
                      value={vorname}
                      onChange={(e) => setVorname(e.target.value)}
                      placeholder="Max"
                      className={errors.vorname ? "border-destructive" : ""}
                    />
                    {errors.vorname && <p className="text-xs text-destructive">{errors.vorname}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachname">Nachname</Label>
                    <Input
                      id="nachname"
                      value={nachname}
                      onChange={(e) => setNachname(e.target.value)}
                      placeholder="Mustermann"
                      className={errors.nachname ? "border-destructive" : ""}
                    />
                    {errors.nachname && <p className="text-xs text-destructive">{errors.nachname}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="max@beispiel.de"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Geburtsdatum</Label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !geburtsdatum && "text-muted-foreground",
                          errors.geburtsdatum && "border-destructive"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {geburtsdatum
                          ? format(geburtsdatum, "dd.MM.yyyy", { locale: de })
                          : "Geburtsdatum wählen"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={geburtsdatum}
                        onSelect={(date) => {
                          setGeburtsdatum(date);
                          setCalendarOpen(false);
                        }}
                        locale={de}
                        captionLayout="dropdown-buttons"
                        fromYear={1920}
                        toYear={new Date().getFullYear()}
                        defaultMonth={geburtsdatum || new Date(1990, 0)}
                        disabled={(date) => date > new Date() || date < new Date("1920-01-01")}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                        classNames={{
                          caption: "flex justify-center pt-1 relative items-center gap-1",
                          caption_label: "hidden",
                          caption_dropdowns: "flex items-center gap-2",
                          dropdown_month: "relative",
                          dropdown_year: "relative",
                          dropdown: "appearance-none bg-background border border-border rounded-md px-2 py-1 text-sm font-medium text-foreground cursor-pointer hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30",
                          vhidden: "sr-only",
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.geburtsdatum && <p className="text-xs text-destructive">{errors.geburtsdatum}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="datenschutz"
                      checked={datenschutz}
                      onCheckedChange={(checked) => setDatenschutz(checked === true)}
                      className={errors.datenschutz ? "border-destructive" : ""}
                    />
                    <Label htmlFor="datenschutz" className="text-sm font-normal leading-snug cursor-pointer">
                      Ich habe die{" "}
                      <Link to="/datenschutz" target="_blank" className="text-primary underline hover:no-underline">
                        Datenschutzbestimmungen
                      </Link>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
                    </Label>
                  </div>
                  {errors.datenschutz && <p className="text-xs text-destructive">{errors.datenschutz}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                  Mein Angebot ansehen
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Deine Daten werden ausschließlich zur Angebotserstellung verwendet und nicht an Dritte weitergegeben.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground"
            >
              <Shield className="h-4 w-4" />
              <span>SSL-verschlüsselt & DSGVO-konform</span>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-foreground text-background">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Smits Versicherungsmakler GmbH & Co. KG
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/impressum" className="opacity-40 hover:opacity-100 transition-opacity">Impressum</Link>
              <Link to="/datenschutz" className="opacity-40 hover:opacity-100 transition-opacity">Datenschutz</Link>
              <Link to="/erstinformation" className="opacity-40 hover:opacity-100 transition-opacity">Erstinformation</Link>
            </div>
          </div>
          {/* 
            =====================================================================
            WICHTIG / IMPORTANT - NICHT ENTFERNEN / DO NOT REMOVE
            =====================================================================
          */}
          <p className="text-[10px] opacity-30 text-center mt-3">
            Created by{" "}
            <a 
              href="https://gaetanoficarra.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              Gaetano Ficarra
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
