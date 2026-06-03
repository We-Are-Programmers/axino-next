import type { Metadata } from "next";
import { FaqSection } from "@/components/home/FaqSection";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <PageWrapper currentPath="/faq" headerVariant="absolute">
      <PageBanner title="FAQ" />
      <FaqSection />
    </PageWrapper>
  );
}
