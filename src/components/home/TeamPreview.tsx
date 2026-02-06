import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import teamMartin from "@/assets/team-martin.jpg";
import teamMarc from "@/assets/team-marc.jpg";
import teamNina from "@/assets/team-nina.jpg";

const teamMembers = [
  {
    name: "Martin Smits",
    role: "Versicherungsmakler/Inhaber",
    email: "martin.smits@makler-kalkar.de",
    phone: "02824-809293",
    image: teamMartin,
  },
  {
    name: "Marc Hülsken",
    role: "Kooperationspartner",
    email: "marc.huelsken@makler-kalkar.de",
    phone: "02824-809293-9",
    image: teamMarc,
  },
  {
    name: "Nina Hüster",
    role: "Versicherungsfachfrau (IHK)",
    email: "nina.huester@makler-kalkar.de",
    phone: "02824-809293-4",
    image: teamNina,
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
            Deine Ansprechpartner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Persönlich, kompetent und immer für dich da. Lerne unser Team kennen.
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
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
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
