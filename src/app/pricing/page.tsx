import type { Metadata } from "next";
import { PricingSection } from "@/components/home/PricingSection";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <PageWrapper currentPath="/pricing" headerVariant="absolute">
      <PageBanner title="Pricing Plan" />
      <PricingSection />
    </PageWrapper>
  );
}
