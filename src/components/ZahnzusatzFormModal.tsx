import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { CalendarIcon, ArrowRight, Shield, Hourglass } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  vorname: z.string().trim().min(1, "Bitte Vorname eingeben").max(100),
  nachname: z.string().trim().min(1, "Bitte Nachname eingeben").max(100),
  email: z.string().trim().email("Bitte gültige E-Mail eingeben").max(255),
  geburtsdatum: z.date({ required_error: "Bitte Geburtsdatum wählen" }),
  datenschutz: z.literal(true, { errorMap: () => ({ message: "Bitte Datenschutzerklärung akzeptieren" }) }),
});

interface ZahnzusatzFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ZahnzusatzFormModal({ open, onOpenChange }: ZahnzusatzFormModalProps) {
  const navigate = useNavigate();
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState<Date>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [datenschutz, setDatenschutz] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse({ vorname, nachname, email, geburtsdatum, datenschutz: datenschutz ? true : undefined });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Store data for the offers page
    const formData = {
      vorname: result.data.vorname,
      nachname: result.data.nachname,
      email: result.data.email,
      geburtsdatum: result.data.geburtsdatum.toISOString(),
    };
    sessionStorage.setItem("zahnzusatz_lead", JSON.stringify(formData));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      navigate("/zahnzusatzversicherung/angebote");
    }, 5000);
  };

  return (
    <Dialog open={open} onOpenChange={loading ? undefined : onOpenChange}>
      <DialogContent className="sm:max-w-md" onInteractOutside={loading ? (e) => e.preventDefault() : undefined}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-16 gap-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Hourglass className="h-16 w-16 text-primary" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Einen Moment bitte...</h3>
                <p className="text-muted-foreground">
                  Wir suchen das passende Angebot für dich raus.
                </p>
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2.5 w-2.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle className="text-xl">Dein persönliches Angebot</DialogTitle>
          </div>
          <DialogDescription>
            Fülle das Formular aus und erhalte sofort 3 passende Tarifvorschläge.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Vorname *</label>
            <Input
              placeholder="Max"
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
              className={errors.vorname ? "border-destructive" : ""}
            />
            {errors.vorname && <p className="text-sm text-destructive mt-1">{errors.vorname}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Nachname *</label>
            <Input
              placeholder="Mustermann"
              value={nachname}
              onChange={(e) => setNachname(e.target.value)}
              className={errors.nachname ? "border-destructive" : ""}
            />
            {errors.nachname && <p className="text-sm text-destructive mt-1">{errors.nachname}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">E-Mail *</label>
            <Input
              type="email"
              placeholder="max@beispiel.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Geburtsdatum *</label>
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
                  {geburtsdatum ? format(geburtsdatum, "dd.MM.yyyy", { locale: de }) : "Datum wählen"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  locale={de}
                  mode="single"
                  selected={geburtsdatum}
                  onSelect={(date) => {
                    setGeburtsdatum(date);
                    setCalendarOpen(false);
                  }}
                  disabled={(date) => date > new Date() || date < new Date("1920-01-01")}
                  defaultMonth={new Date(1990, 0)}
                  captionLayout="dropdown-buttons"
                  fromYear={1920}
                  toYear={new Date().getFullYear()}
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
            {errors.geburtsdatum && <p className="text-sm text-destructive mt-1">{errors.geburtsdatum}</p>}
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="datenschutz"
              checked={datenschutz}
              onCheckedChange={(checked) => setDatenschutz(checked === true)}
              className={errors.datenschutz ? "border-destructive" : ""}
            />
            <label htmlFor="datenschutz" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              Ich habe die{" "}
              <Link to="/datenschutz" target="_blank" className="text-primary underline hover:text-primary/80">
                Datenschutzerklärung
              </Link>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zur Angebotserstellung zu. *
            </label>
          </div>
          {errors.datenschutz && <p className="text-sm text-destructive">{errors.datenschutz}</p>}

          <Button type="submit" size="lg" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground mt-6">
            Angebote anzeigen
            <ArrowRight className="h-5 w-5" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Kostenlos und unverbindlich. Deine Daten werden vertraulich behandelt.
          </p>
        </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
