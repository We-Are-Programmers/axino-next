import { PageWrapper } from "@/components/layout/PageWrapper";
import {
  BannerSection,
  BenefitsSection,
  ClientsSection,
  CtaSection,
  FaqSection,
  FeaturesSection,
  FunfactSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <PageWrapper currentPath="/">
      <BannerSection />
      <ClientsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FunfactSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </PageWrapper>
  );
}
