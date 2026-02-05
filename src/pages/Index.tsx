import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PartnerSlider from "@/components/home/PartnerSlider";
import Services from "@/components/home/Services";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import AboutPreview from "@/components/home/AboutPreview";
import TeamPreview from "@/components/home/TeamPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PartnerSlider />
      <Services />
      <ProcessTimeline />
      <AboutPreview />
      <TeamPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
