import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SegmentedToggleProps {
  options: [ToggleOption, ToggleOption];
  activeId: string;
  onChange: (id: string) => void;
  variant?: "light" | "dark" | "glass";
  className?: string;
}

export default function SegmentedToggle({ 
  options, 
  activeId, 
  onChange, 
  variant = "light",
  className 
}: SegmentedToggleProps) {
  const isFirstActive = activeId === options[0].id;
  
  const containerStyles = {
    light: "bg-card border-2 border-primary/20 shadow-xl shadow-primary/10",
    dark: "bg-slate-800/80 border-2 border-slate-500/30 backdrop-blur-md",
    glass: "bg-white/30 border-2 border-white/40 backdrop-blur-md shadow-xl",
  };

  const inactiveStyles = {
    light: "text-foreground/70 hover:text-foreground hover:bg-muted/80 bg-muted/40",
    dark: "text-white/70 hover:text-white hover:bg-white/10 bg-white/5",
    glass: "text-foreground/70 hover:text-foreground hover:bg-white/20 bg-white/10",
  };

  return (
    <motion.div 
      className={cn(
        "relative inline-flex items-center p-1.5 rounded-full",
        containerStyles[variant],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background indicator */}
      <motion.div
        className={cn(
          "absolute top-1.5 bottom-1.5 rounded-full -z-0",
          variant === "dark" ? "bg-white" : "bg-primary"
        )}
        initial={false}
        animate={{
          left: isFirstActive ? "6px" : "calc(50% - 4px)",
          right: isFirstActive ? "calc(50% - 4px)" : "6px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Subtle pulse animation on the container to hint it's interactive */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/50 pointer-events-none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: [0, 0.5, 0],
          scale: [1, 1.05, 1.1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeOut"
        }}
      />

      {options.map((option) => {
        const Icon = option.icon;
        const isActive = activeId === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300",
              isActive 
                ? variant === "dark"
                  ? "text-slate-900"
                  : "text-primary-foreground"
                : inactiveStyles[variant]
            )}
          >
            <Icon className={cn(
              "h-4 w-4 transition-transform duration-300",
              isActive && "scale-110"
            )} />
            <span className="relative">
              {option.label}
              {/* Underline hint for inactive state */}
              {!isActive && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-current opacity-30 rounded-full" />
              )}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
