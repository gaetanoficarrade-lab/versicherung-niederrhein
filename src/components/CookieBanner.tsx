import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Check, X } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_PREFERENCES_KEY = "cookie-preferences";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to not show immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/95 p-6 shadow-strong backdrop-blur-md">
            {!showSettings ? (
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      Wir nutzen Cookies
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung
                      auf unserer Website zu bieten. Einige sind notwendig,
                      andere helfen uns, unsere Dienste zu verbessern.{" "}
                      <a
                        href="/datenschutz"
                        className="text-primary underline hover:no-underline"
                      >
                        Mehr erfahren
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Einstellungen
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptNecessary}
                  >
                    Nur Notwendige
                  </Button>
                  <Button size="sm" onClick={acceptAll} className="gap-2">
                    <Check className="h-4 w-4" />
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">
                    Cookie-Einstellungen
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Notwendige Cookies
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Diese Cookies sind für das Funktionieren der Website
                        erforderlich.
                      </p>
                    </div>
                    <div className="rounded-md bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                      Immer aktiv
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <label className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/30">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Analyse-Cookies
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Helfen uns zu verstehen, wie Besucher unsere Website
                        nutzen.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: e.target.checked,
                        }))
                      }
                      className="h-5 w-5 rounded border-border accent-primary"
                    />
                  </label>

                  {/* Marketing Cookies */}
                  <label className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/30">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Marketing-Cookies
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Werden verwendet, um Werbung relevanter zu gestalten.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({
                          ...prev,
                          marketing: e.target.checked,
                        }))
                      }
                      className="h-5 w-5 rounded border-border accent-primary"
                    />
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptNecessary}
                  >
                    Nur Notwendige
                  </Button>
                  <Button size="sm" onClick={saveCustomPreferences}>
                    Auswahl speichern
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
