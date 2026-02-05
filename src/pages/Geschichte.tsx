import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Geschichte() {
  return (
    <Layout>
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
              Unsere Geschichte
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unser Unternehmen. Damals und heute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="section-container">
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
              
              <div className="my-12 p-8 rounded-2xl bg-secondary">
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
                  <div key={index} className="p-6 rounded-xl bg-muted text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
