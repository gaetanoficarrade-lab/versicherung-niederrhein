import { motion } from "framer-motion";

// Partner logos - placeholders for now
const partners = [
  { name: "Allianz", id: 1 },
  { name: "AXA", id: 2 },
  { name: "ERGO", id: 3 },
  { name: "Generali", id: 4 },
  { name: "HDI", id: 5 },
  { name: "Zurich", id: 6 },
  { name: "VHV", id: 7 },
  { name: "R+V", id: 8 },
];

export default function PartnerSlider() {
  return (
    <section className="py-12 bg-muted/50 overflow-hidden">
      <div className="section-container mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Eine Auswahl unserer Partner
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-32 rounded-lg bg-background shadow-soft px-4"
            >
              <span className="text-lg font-semibold text-muted-foreground/60">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
