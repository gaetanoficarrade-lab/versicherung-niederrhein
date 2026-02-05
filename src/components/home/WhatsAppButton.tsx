import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "4928248092930"; // German format without + 
  const message = encodeURIComponent("Hallo, ich habe eine Frage zu meiner Versicherung.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg hover:bg-[#20bd5a] transition-colors group"
      aria-label="Kontakt per WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="font-medium hidden sm:inline-block">
        WhatsApp
      </span>
      
      {/* Pulse animation */}
      <span className="absolute -z-10 inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
