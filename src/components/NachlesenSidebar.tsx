import { FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface NachlesenLink {
  title: string;
  url: string;
}

interface NachlesenSidebarProps {
  links: NachlesenLink[];
}

function NachlesenContent({ links }: { links: NachlesenLink[] }) {
  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 group p-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex-shrink-0 mt-0.5">
            <FileText className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
          </div>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
            {link.title}
          </span>
        </a>
      ))}
    </div>
  );
}

export default function NachlesenSidebar({ links }: NachlesenSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!links.length) return null;

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden lg:block"
      >
        <div className="sticky top-28 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Zum Nachlesen
            </h3>
            <NachlesenContent links={links} />
          </div>
        </div>
      </motion.aside>

      {/* Mobile: collapsible section below content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden mt-8"
      >
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full rounded-2xl border border-border bg-card p-4 shadow-sm flex items-center justify-between"
        >
          <span className="font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Zum Nachlesen
          </span>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
        {mobileOpen && (
          <div className="rounded-b-2xl border border-t-0 border-border bg-card px-4 pb-4 pt-2">
            <NachlesenContent links={links} />
          </div>
        )}
      </motion.div>
    </>
  );
}
