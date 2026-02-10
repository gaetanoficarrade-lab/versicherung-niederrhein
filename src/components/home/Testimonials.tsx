import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, StarHalf, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number; // 4, 4.5, or 5
}

const testimonials: Testimonial[] = [
  {
    name: "Familie Müller",
    role: "Privatkunde seit 2018",
    content: "Herr Smits hat uns bei der kompletten Absicherung unserer Familie geholfen. Die Beratung war ehrlich, kompetent und ohne Verkaufsdruck. Wir fühlen uns bestens aufgehoben!",
    rating: 5,
  },
  {
    name: "Thomas Bergmann",
    role: "Geschäftskunde seit 2015",
    content: "Als Unternehmer schätze ich die professionelle und individuelle Betreuung. Die Schadensabwicklung läuft immer reibungslos und schnell. Absolute Empfehlung!",
    rating: 5,
  },
  {
    name: "Sandra Koch",
    role: "Privatkundin seit 2020",
    content: "Nach Jahren bei großen Versicherungen endlich eine persönliche Betreuung. Die Analyse meiner bestehenden Verträge hat mir viel Geld gespart.",
    rating: 4.5,
  },
  {
    name: "Ehepaar van den Berg",
    role: "Privatkunden seit 2019",
    content: "Kompetent, freundlich und immer erreichbar. Bei unserem Wasserschaden wurde alles schnell und unkompliziert geregelt. Vielen Dank!",
    rating: 5,
  },
  {
    name: "Michael Jansen",
    role: "Privatkunde seit 2021",
    content: "Sehr gute Beratung zur KFZ-Versicherung. Faire Preise und top Service. Kleine Abzüge nur weil die Terminvergabe manchmal etwas dauert.",
    rating: 4,
  },
  {
    name: "Dr. Anna Hoffmann",
    role: "Geschäftskundin seit 2017",
    content: "Für meine Praxis habe ich endlich den richtigen Partner gefunden. Herr Hülsken kennt sich bestens mit Berufshaftpflicht aus. Sehr zufrieden!",
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-amber-400 text-amber-400"
        />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="h-5 w-5 text-amber-400/30" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="h-5 w-5 text-amber-400/30"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vertrauen ist die Basis unserer Arbeit – und unsere Kunden bestätigen das
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full">
            <div className="min-h-[320px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
                    {/* Quote icon */}
                    <div className="absolute -top-6 left-8 md:left-12">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Quote className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="pt-4">
                      {/* Stars */}
                      <div className="mb-6">
                        <StarRating rating={testimonials[currentIndex].rating} />
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {testimonials[currentIndex].name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Zur Bewertung ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
