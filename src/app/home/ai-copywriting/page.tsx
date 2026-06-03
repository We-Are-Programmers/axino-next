import type { Metadata } from "next";
import { AiCopywritingHome } from "@/components/home/variants/AiCopywritingHome";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "AI-Powered Copywriting",
};

export default function AiCopywritingPage() {
  return (
    <PageWrapper currentPath="/home/ai-copywriting">
      <AiCopywritingHome />
    </PageWrapper>
  );
}
