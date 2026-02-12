import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Geschichte from "./pages/Geschichte";
import Besonderheiten from "./pages/Besonderheiten";

import Versicherungen from "./pages/Versicherungen";
import KfzVersicherung from "./pages/KfzVersicherung";
import Tierhalterhaftpflicht from "./pages/Tierhalterhaftpflicht";
import Hausratversicherung from "./pages/Hausratversicherung";
import Rechtsschutzversicherung from "./pages/Rechtsschutzversicherung";
import PrivatHaftpflicht from "./pages/PrivatHaftpflicht";
import Reiseversicherung from "./pages/Reiseversicherung";
import PhotovoltaikVersicherung from "./pages/PhotovoltaikVersicherung";
import Wohngebaeudeversicherung from "./pages/Wohngebaeudeversicherung";
import Baufinanzierung from "./pages/Baufinanzierung";
import Berufsunfaehigkeit from "./pages/Berufsunfaehigkeit";
import Unfallversicherung from "./pages/Unfallversicherung";
import Krankenzusatz from "./pages/Krankenzusatz";
import PrivateKrankenversicherung from "./pages/PrivateKrankenversicherung";
import Risikolebensversicherung from "./pages/Risikolebensversicherung";
import Kapitallebensversicherung from "./pages/Kapitallebensversicherung";
import Rentenversicherung from "./pages/Rentenversicherung";
import Kindervorsorge from "./pages/Kindervorsorge";
import Service from "./pages/Service";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Erstinformation from "./pages/Erstinformation";
import NotFound from "./pages/NotFound";
// Gewerbeversicherungen
import Betriebshaftpflicht from "./pages/Betriebshaftpflicht";
import GewerblicheGebaeude from "./pages/GewerblicheGebaeude";
import Fuhrparkversicherung from "./pages/Fuhrparkversicherung";
import Betriebsunterbrechung from "./pages/Betriebsunterbrechung";
import Berufshaftpflicht from "./pages/Berufshaftpflicht";
import DOVersicherung from "./pages/DOVersicherung";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/geschichte" element={<Geschichte />} />
            <Route path="/besonderheiten" element={<Besonderheiten />} />
            
            <Route path="/versicherungen" element={<Versicherungen />} />
            {/* Sachversicherungen */}
            <Route path="/kfz-versicherung" element={<KfzVersicherung />} />
            <Route path="/tierhalterhaftpflicht" element={<Tierhalterhaftpflicht />} />
            <Route path="/hausratversicherung" element={<Hausratversicherung />} />
            <Route path="/rechtsschutzversicherung" element={<Rechtsschutzversicherung />} />
            <Route path="/privat-haftpflicht" element={<PrivatHaftpflicht />} />
            <Route path="/reiseversicherung" element={<Reiseversicherung />} />
            <Route path="/photovoltaik-versicherung" element={<PhotovoltaikVersicherung />} />
            <Route path="/wohngebaeudeversicherung" element={<Wohngebaeudeversicherung />} />
            {/* Vorsorge */}
            <Route path="/berufsunfaehigkeit" element={<Berufsunfaehigkeit />} />
            <Route path="/unfallversicherung" element={<Unfallversicherung />} />
            <Route path="/krankenzusatz" element={<Krankenzusatz />} />
            <Route path="/private-krankenversicherung" element={<PrivateKrankenversicherung />} />
            <Route path="/risikolebensversicherung" element={<Risikolebensversicherung />} />
            <Route path="/kapitallebensversicherung" element={<Kapitallebensversicherung />} />
            <Route path="/rentenversicherung" element={<Rentenversicherung />} />
            <Route path="/kindervorsorge" element={<Kindervorsorge />} />
            {/* Finanzierung */}
            <Route path="/baufinanzierung" element={<Baufinanzierung />} />
            {/* Gewerbeversicherungen */}
            <Route path="/betriebshaftpflicht" element={<Betriebshaftpflicht />} />
            <Route path="/gewerbliche-gebaeude" element={<GewerblicheGebaeude />} />
            <Route path="/fuhrparkversicherung" element={<Fuhrparkversicherung />} />
            <Route path="/betriebsunterbrechung" element={<Betriebsunterbrechung />} />
            <Route path="/berufshaftpflicht" element={<Berufshaftpflicht />} />
            <Route path="/do-versicherung" element={<DOVersicherung />} />
            {/* Service & Legal */}
            <Route path="/service" element={<Service />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/erstinformation" element={<Erstinformation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
