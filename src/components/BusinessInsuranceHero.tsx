import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BusinessInsuranceHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  heroImage?: string;
}

export default function BusinessInsuranceHero({ icon: Icon, title, description, heroImage }: BusinessInsuranceHeroProps) {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Dark business background with hero image on right */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(178,45%,32%)] to-[hsl(178,45%,38%)]">
        {heroImage && (
          <>
            {/* Desktop: Image on the right */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-full"
              >
                <img 
                  src={heroImage} 
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(178,45%,32%)] via-[hsl(178,45%,32%)]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(178,45%,38%)]/80 via-transparent to-transparent" />
              </motion.div>
            </div>
            
            {/* Mobile/Tablet: Image as subtle background */}
            <div className="lg:hidden absolute inset-0">
              <img 
                src={heroImage} 
                alt={title}
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(178,45%,15%)]/90 via-[hsl(178,45%,17%)]/80 to-[hsl(178,45%,20%)]" />
            </div>
          </>
        )}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Premium icon container - business style */}
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-sm" />
            <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-white/80 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
