import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PartnerSlider from "@/components/home/PartnerSlider";
import Services from "@/components/home/Services";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import TeamPreview from "@/components/home/TeamPreview";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import WhatsAppButton from "@/components/home/WhatsAppButton";
import SEO, { createFAQSchema } from "@/components/SEO";
import { homeFAQs } from "@/lib/seoData";

const Index = () => {
  return (
    <Layout>
      <SEO structuredData={createFAQSchema(homeFAQs)} />
      <Hero />
      <PartnerSlider />
      <Services />
      <ProcessTimeline />
      <AboutPreview />
      <Testimonials />
      <TeamPreview />
      <FAQ />
      <CTASection />
      <WhatsAppButton />
    </Layout>
  );
};

export default Index;
