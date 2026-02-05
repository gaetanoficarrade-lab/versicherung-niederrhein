import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Startseite", href: "/" },
  {
    name: "Das Unternehmen",
    children: [
      { name: "Unsere Geschichte", href: "/geschichte" },
      { name: "Was uns besonders macht", href: "/besonderheiten" },
      { name: "Ihre Ansprechpartner", href: "/team" },
    ],
  },
  {
    name: "Versicherungen",
    children: [
      { name: "KFZ-Versicherung", href: "/kfz-versicherung" },
      { name: "Tierhalterhaftpflicht", href: "/tierhalterhaftpflicht" },
      { name: "Hausratversicherung", href: "/hausratversicherung" },
    ],
  },
  { name: "Service-Center", href: "/service" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Smits & Kollegen Logo" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground">Smits & Kollegen</span>
              <span className="block text-xs text-muted-foreground">Versicherungsmakler</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-1 text-muted-foreground hover:text-foreground">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link
                          to={child.href}
                          className={isActive(child.href) ? "text-primary" : ""}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant="ghost"
                    className={`${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button size="sm" className="gap-2 bg-primary hover:bg-accent text-primary-foreground">
                <Download className="h-4 w-4" />
                Impressum PDF
              </Button>
            </a>
            <a
              href="https://smits.insurgo.cloud/auth/anmelden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Kunden-Login
              </Button>
            </a>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-strong lg:hidden"
            >
              <div className="flex h-20 items-center justify-between px-6">
                <span className="text-lg font-semibold">Menü</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="px-6 py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.children ? (
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.name}
                        </span>
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 text-base ${
                                isActive(child.href)
                                  ? "text-primary font-medium"
                                  : "text-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-base ${
                          isActive(item.href)
                            ? "text-primary font-medium"
                            : "text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 text-muted-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Impressum als PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
