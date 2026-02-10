import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import appMockup from "@/assets/app-mockup.png";

export default function AppSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/30 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={appMockup}
                alt="Smits & Kollegen Versicherungsapp auf einem Smartphone"
                className="relative z-10 w-72 md:w-80 drop-shadow-2xl"
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-lg"
            >
              <Smartphone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">Deine Versicherungen – immer dabei</span>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Versicherungsapp
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alles in einer App
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Verwalte deine Verträge, melde Schäden und erreiche uns direkt – 
              alles bequem über unsere Kunden-App. Schreib uns und wir richten 
              dir deinen Zugang ein.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-6 rounded-2xl bg-primary/10 border border-primary/20"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-medium">
                  Vielen Dank! Wir melden uns in Kürze bei dir.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                    className="bg-card border-border"
                  />
                  <Input
                    type="email"
                    placeholder="Deine E-Mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                    className="bg-card border-border"
                  />
                </div>
                <Textarea
                  placeholder="Deine Nachricht (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  rows={4}
                  className="bg-card border-border resize-none"
                />
                <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
