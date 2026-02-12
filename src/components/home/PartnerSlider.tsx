import { motion } from "framer-motion";

import partnerKravag from "@/assets/partner-kravag.png";
import partnerAig from "@/assets/partner-aig.png";
import partnerAxa from "@/assets/partner-axa.png";
import partnerRv from "@/assets/partner-rv.png";
import partnerAlteLeipziger from "@/assets/partner-alte-leipziger.png";
import partnerVhv from "@/assets/partner-vhv.png";
import partnerTk from "@/assets/partner-tk.png";
import partnerDbv from "@/assets/partner-dbv.png";
import partnerStuttgarter from "@/assets/partner-stuttgarter.png";

const partners = [
  { name: "KRAVAG", logo: partnerKravag },
  { name: "AIG", logo: partnerAig },
  { name: "AXA", logo: partnerAxa },
  { name: "R+V", logo: partnerRv },
  { name: "Alte Leipziger", logo: partnerAlteLeipziger },
  { name: "VHV", logo: partnerVhv },
  { name: "Die Techniker", logo: partnerTk },
  { name: "DBV", logo: partnerDbv },
  { name: "Die Stuttgarter", logo: partnerStuttgarter },
];

export default function PartnerSlider() {
  return (
    <section className="py-12 bg-muted/50 overflow-hidden">
      <div className="section-container mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Eine Auswahl unserer Partner
        </p>
      </div>
      
      <div className="relative overflow-hidden">
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
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-40 px-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
