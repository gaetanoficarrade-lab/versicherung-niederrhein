import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, RotateCcw, Shield, Bike, Home, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const AUSSTATTUNG_WERTE: Record<string, number> = {
  basis: 550,
  standard: 650,
  premium: 800,
};

export default function HausratRechner() {
  const [wohnflaeche, setWohnflaeche] = useState("");
  const [ausstattung, setAusstattung] = useState("standard");
  const [wertgegenstaende, setWertgegenstaende] = useState("");
  const [sicherheitszuschlag, setSicherheitszuschlag] = useState("10");
  const [fahrradSchutz, setFahrradSchutz] = useState(false);
  const [fahrradwert, setFahrradwert] = useState("");
  const [haushaltsgroesse, setHaushaltsgroesse] = useState("");
  const [ergebnis, setErgebnis] = useState<{
    gesamt: number;
    wohnflaecheWert: number;
    wertgegenstaendeWert: number;
    fahrradWert: number;
    zuschlagWert: number;
  } | null>(null);

  const berechnen = () => {
    const flaeche = parseFloat(wohnflaeche) || 0;
    const richtwert = AUSSTATTUNG_WERTE[ausstattung] || 650;
    const wertgeg = parseFloat(wertgegenstaende) || 0;
    const zuschlagProzent = parseFloat(sicherheitszuschlag) || 0;
    const fahrrad = fahrradSchutz ? parseFloat(fahrradwert) || 0 : 0;

    const wohnflaecheWert = flaeche * richtwert;
    const zwischensumme = wohnflaecheWert + wertgeg + fahrrad;
    const zuschlagWert = zwischensumme * (zuschlagProzent / 100);
    const gesamt = zwischensumme + zuschlagWert;

    setErgebnis({
      gesamt: Math.round(gesamt),
      wohnflaecheWert: Math.round(wohnflaecheWert),
      wertgegenstaendeWert: Math.round(wertgeg),
      fahrradWert: Math.round(fahrrad),
      zuschlagWert: Math.round(zuschlagWert),
    });
  };

  const zuruecksetzen = () => {
    setWohnflaeche("");
    setAusstattung("standard");
    setWertgegenstaende("");
    setSicherheitszuschlag("10");
    setFahrradSchutz(false);
    setFahrradwert("");
    setHaushaltsgroesse("");
    setErgebnis(null);
  };

  const formatEuro = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div className="p-4 rounded-xl bg-accent/50 border border-accent text-accent-foreground">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
          <p className="text-sm leading-relaxed">
            <strong>Hinweis:</strong> Dieser Rechner dient ausschließlich zur Orientierung. 
            Die ermittelten Werte ersetzen keine individuelle Beratung. Versicherungsbedingungen 
            wie Wertsachenlimits, Fahrradklauseln oder Unterversicherungsverzicht unterscheiden 
            sich je nach Tarif.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Eingabe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-card border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Deine Angaben</h3>
          </div>

          <div className="space-y-5">
            {/* Wohnfläche & Ausstattung */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wohnflaeche" className="text-sm text-muted-foreground">
                  Wohnfläche (m²)
                </Label>
                <Input
                  id="wohnflaeche"
                  type="number"
                  placeholder="z.B. 85"
                  value={wohnflaeche}
                  onChange={(e) => setWohnflaeche(e.target.value)}
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">
                  Inkl. ausgebauter Nebenräume mit Hausrat.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ausstattung" className="text-sm text-muted-foreground">
                  Ausstattung / Lebensstil
                </Label>
                <Select value={ausstattung} onValueChange={setAusstattung}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basis">Basis (einfach) – 550 €/m²</SelectItem>
                    <SelectItem value="standard">Standard – 650 €/m²</SelectItem>
                    <SelectItem value="premium">Premium (hochwertig) – 800 €/m²</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Wertgegenstände & Sicherheitszuschlag */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wertgegenstaende" className="text-sm text-muted-foreground">
                  Wertgegenstände gesamt (€)
                </Label>
                <Input
                  id="wertgegenstaende"
                  type="number"
                  placeholder="z.B. 5000"
                  value={wertgegenstaende}
                  onChange={(e) => setWertgegenstaende(e.target.value)}
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">
                  Schmuck, Uhren, Kamera, Tech etc.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zuschlag" className="text-sm text-muted-foreground">
                  Sicherheitszuschlag
                </Label>
                <Select value={sicherheitszuschlag} onValueChange={setSicherheitszuschlag}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0% (ohne)</SelectItem>
                    <SelectItem value="10">10% (empfohlen)</SelectItem>
                    <SelectItem value="15">15%</SelectItem>
                    <SelectItem value="20">20%</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Für Neuanschaffungen.
                </p>
              </div>
            </div>

            {/* Fahrrad-Schutz */}
            <div className="p-4 rounded-xl border border-dashed border-border bg-muted/30">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Bike className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm text-foreground">Fahrrad-Schutz</p>
                    <p className="text-xs text-muted-foreground">Fahrradwert berücksichtigen</p>
                  </div>
                </div>
                <Checkbox
                  checked={fahrradSchutz}
                  onCheckedChange={(checked) => setFahrradSchutz(checked as boolean)}
                />
              </div>
            </div>

            {/* Fahrradwert & Haushaltsgröße */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fahrradwert" className="text-sm text-muted-foreground">
                  Fahrradwert (€)
                </Label>
                <Input
                  id="fahrradwert"
                  type="number"
                  placeholder="z.B. 2500"
                  value={fahrradwert}
                  onChange={(e) => setFahrradwert(e.target.value)}
                  disabled={!fahrradSchutz}
                  className="bg-background disabled:opacity-50"
                />
                <p className="text-xs text-muted-foreground">
                  Gesamtwert aller Räder.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="haushaltsgroesse" className="text-sm text-muted-foreground">
                  Haushaltsgröße (optional)
                </Label>
                <Input
                  id="haushaltsgroesse"
                  type="number"
                  placeholder="z.B. 3"
                  value={haushaltsgroesse}
                  onChange={(e) => setHaushaltsgroesse(e.target.value)}
                  className="bg-background"
                />
                <p className="text-xs text-muted-foreground">
                  Nur als Plausibilitäts-Hinweis.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button onClick={berechnen} className="gap-2">
                <Calculator className="h-4 w-4" />
                Summe berechnen
              </Button>
              <Button variant="outline" onClick={zuruecksetzen} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Zurücksetzen
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Ergebnis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-6 rounded-2xl bg-card border border-border shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Ergebnis</h3>
          </div>

          {ergebnis ? (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-3">
                  <Home className="h-4 w-4" />
                  Empfehlung auf Basis deiner Angaben
                </div>
                <p className="text-4xl font-bold text-foreground">
                  {formatEuro(ergebnis.gesamt)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Empfohlene Versicherungssumme für deinen Hausrat.
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Wohnfläche × Richtwert</span>
                  <span className="font-medium text-foreground">{formatEuro(ergebnis.wohnflaecheWert)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Wertgegenstände</span>
                  <span className="font-medium text-foreground">{formatEuro(ergebnis.wertgegenstaendeWert)}</span>
                </div>
                {fahrradSchutz && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fahrradwert</span>
                    <span className="font-medium text-foreground">{formatEuro(ergebnis.fahrradWert)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sicherheitszuschlag ({sicherheitszuschlag}%)</span>
                  <span className="font-medium text-foreground">{formatEuro(ergebnis.zuschlagWert)}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground font-medium mb-2">
                  Lass uns prüfen, welche Versicherung für dich in Frage kommt.
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Unsere Experten beraten dich individuell und finden den passenden Tarif für deine Bedürfnisse.
                </p>
                <Link to="/kontakt">
                  <Button size="sm" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Termin vereinbaren
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="text-muted-foreground">
                Gib deine Daten ein und klicke auf "Summe berechnen".
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
