import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Martin Smits",
    role: "Versicherungsmakler/Inhaber",
    email: "martin.smits@makler-kalkar.de",
    phone: "02824-809293",
    image: null, // Placeholder
  },
  {
    name: "Marc Hülsken",
    role: "Kooperationspartner",
    email: "marc.huelsken@makler-kalkar.de",
    phone: "02824-809293-9",
    image: null, // Placeholder
  },
  {
    name: "Nina Hüster",
    role: "Versicherungsfachfrau (IHK)",
    email: "nina.huester@makler-kalkar.de",
    phone: "02824-809293-4",
    image: null, // Placeholder
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Unser Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ihre Ansprechpartner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Persönlich, kompetent und immer für Sie da. Lernen Sie unser Team kennen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {member.role}
                </p>
                
                <div className="space-y-2">
                  <a
                    href={`tel:${member.phone.replace(/-/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/team">
            <Button variant="outline" size="lg" className="gap-2">
              Alle Ansprechpartner
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
