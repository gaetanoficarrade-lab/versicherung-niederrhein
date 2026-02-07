import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
