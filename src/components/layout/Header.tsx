import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-new.png";

const navigation = [
  {
    name: "Das Unternehmen",
    children: [
      { name: "Unsere Geschichte", href: "/geschichte" },
      { name: "Was uns besonders macht", href: "/besonderheiten" },
    ],
  },
  { name: "Versicherungen", href: "/versicherungen" },
  { name: "Service-Center", href: "/service" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Smits & Kollegen Logo"
              className="h-20 w-20 object-contain"
            />
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

      {/* Mobile Menu - Simple overlay, no animation library */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] lg:hidden"
          style={{ backgroundColor: '#3a8a8c' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 24px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ color: 'white', fontSize: '20px', fontWeight: 600 }}>Menü</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <div style={{ padding: '24px' }}>
            {navigation.map((item) => (
              <div key={item.name} style={{ marginBottom: '8px' }}>
                {item.children ? (
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                      {item.name}
                    </span>
                    <div style={{ marginTop: '8px', marginLeft: '16px' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: isActive(child.href) ? 700 : 400,
                            textDecoration: 'none',
                          }}
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
                    style={{
                      display: 'block',
                      padding: '14px 0',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: isActive(item.href) ? 700 : 400,
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <a
                href="https://www.versicherungen-niederrhein.de/kontakt/anbieterkennung/?page_as_pdf=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 0', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '16px' }}
              >
                <Download className="h-5 w-5" />
                Impressum als PDF
              </a>
              <a
                href="https://smits.insurgo.cloud/auth/anmelden"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 0', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '16px' }}
              >
                <User className="h-5 w-5" />
                Kunden-Login
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
