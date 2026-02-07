import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO, { createBreadcrumbSchema } from "@/components/SEO";

export default function Geschichte() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Unsere Geschichte", url: "/geschichte" }
  ]);

  return (
    <Layout>
      <SEO structuredData={breadcrumbSchema} />
      {/* Hero */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="history-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-foreground" />
                <path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#history-pattern)" />
          </svg>
        </div>
        
        {/* Decorative timeline element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] hidden lg:block">
          <svg viewBox="0 0 200 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <path d="M100 0 L100 400" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <circle cx="100" cy="80" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <circle cx="100" cy="180" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <circle cx="100" cy="280" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <circle cx="100" cy="80" r="6" fill="currentColor" className="text-primary" />
            <circle cx="100" cy="180" r="6" fill="currentColor" className="text-primary" />
            <circle cx="100" cy="280" r="6" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        <div className="section-container relative">
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
              Unsere Geschichte
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unser Unternehmen. Damals und heute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full border-[40px] border-primary" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full border-[30px] border-primary" />
        </div>

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Welche rasante und komplexe Entwicklung der Versicherungsmarkt im Allgemeinen 
                und der eigene Betrieb im Besonderen vor sich hatten, ahnte wohl niemand als 
                der Grundstein zum heutigen Unternehmen gelegt wurde.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Bereits bei der Gründung wurde großer Wert auf die langfristige und umfangreiche 
                Betreuung der Mandanten gelegt. Heute sind wir ein Unternehmen, in dem Werte wie 
                Qualität in der Beratung, Offenheit und freundschaftlicher Umgang miteinander 
                erfolgreich fortgesetzt werden.
              </p>
              
              <div className="my-12 p-8 rounded-2xl bg-secondary relative">
                <div className="absolute -left-4 top-8 w-8 h-1 bg-primary rounded-full" />
                <blockquote className="text-xl italic text-foreground border-l-4 border-primary pl-6">
                  "Unser Unternehmen steht für maßgeschneiderte Absicherungskonzepte, 
                  Schnelligkeit und Flexibilität bei Berücksichtigung der individuellen Anforderungen."
                </blockquote>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                Unsere Werte
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: "Qualität", desc: "Höchste Standards in der Beratung" },
                  { title: "Offenheit", desc: "Transparente Kommunikation" },
                  { title: "Partnerschaft", desc: "Freundschaftlicher Umgang" },
                ].map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-xl bg-muted text-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-lg font-semibold text-foreground mb-2 relative">{value.title}</h3>
                    <p className="text-sm text-muted-foreground relative">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
