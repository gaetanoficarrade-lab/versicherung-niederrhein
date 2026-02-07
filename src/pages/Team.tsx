import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO, { createBreadcrumbSchema } from "@/components/SEO";

const teamMembers = [
  {
    name: "Martin Smits",
    role: "Versicherungsmakler/Inhaber",
    email: "martin.smits@makler-kalkar.de",
    phone: "02824-809293",
    fax: "02824-809294",
    calendar: "https://calendly.com/martin-smits",
    vcf: "https://www.versicherungen-niederrhein.de/?mitarbeiter=martin-smits&vcf=1",
  },
  {
    name: "Marc Hülsken",
    role: "Kooperationspartner / selbstständiger Versicherungsmakler",
    email: "marc.huelsken@makler-kalkar.de",
    phone: "02824-809293-9",
    fax: "02824-809294",
    calendar: "https://calendly.com/marc-huelsken",
    vcf: "https://www.versicherungen-niederrhein.de/?mitarbeiter=marc-huelsken&vcf=1",
  },
  {
    name: "Nina Hüster",
    role: "Versicherungsfachfrau (IHK)",
    email: "nina.huester@makler-kalkar.de",
    phone: "02824-809293-4",
    fax: "02824-809294",
    vcf: null,
    calendar: null,
  },
  {
    name: "Petra Hüster",
    role: "Büroassistenz",
    email: "petra.huester@makler-kalkar.de",
    phone: "02824-809293-0",
    fax: "02824-809294",
    vcf: null,
    calendar: null,
  },
];

export default function Team() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Unser Team", url: "/team" }
  ]);

  return (
    <Layout>
      <SEO structuredData={breadcrumbSchema} />
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Das Unternehmen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deine Ansprechpartner
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Auch der weiteste Weg beginnt mit einem ersten Schritt", sagt Konfuzius. 
              Sprich mit uns, wenn du Interesse an einer unabhängigen Beratung hast. 
              <strong> Wir sind gerne für dich da.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening hours */}
      <section className="py-8 bg-primary/5">
        <div className="section-container">
          <p className="text-center text-muted-foreground">
            <strong>Bürozeiten:</strong> Montag-Freitag 9:00-12:30 Uhr | Montag-Donnerstag 15:00-17:30 Uhr | oder nach Vereinbarung
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h2>
                  <p className="text-primary font-medium mb-6">
                    {member.role}
                  </p>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${member.phone.replace(/-/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Tel.: {member.phone}</span>
                    </a>
                    <p className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-5 w-5" />
                      <span>Fax: {member.fax}</span>
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{member.email}</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {member.calendar && (
                      <a href={member.calendar} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2">
                          <Calendar className="h-4 w-4" />
                          Termin vereinbaren
                        </Button>
                      </a>
                    )}
                    {member.vcf && (
                      <a href={member.vcf} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          VCF herunterladen
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
