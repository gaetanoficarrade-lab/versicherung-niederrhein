import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Geschichte from "./pages/Geschichte";
import Besonderheiten from "./pages/Besonderheiten";
import Team from "./pages/Team";
import KfzVersicherung from "./pages/KfzVersicherung";
import Tierhalterhaftpflicht from "./pages/Tierhalterhaftpflicht";
import Hausratversicherung from "./pages/Hausratversicherung";
import Service from "./pages/Service";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/geschichte" element={<Geschichte />} />
          <Route path="/besonderheiten" element={<Besonderheiten />} />
          <Route path="/team" element={<Team />} />
          <Route path="/kfz-versicherung" element={<KfzVersicherung />} />
          <Route path="/tierhalterhaftpflicht" element={<Tierhalterhaftpflicht />} />
          <Route path="/hausratversicherung" element={<Hausratversicherung />} />
          <Route path="/service" element={<Service />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
