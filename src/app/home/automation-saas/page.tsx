import type { Metadata } from "next";
import { AutomationSaasHome } from "@/components/home/variants/AutomationSaasHome";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Automation SaaS",
};

export default function AutomationSaasPage() {
  return (
    <PageWrapper currentPath="/home/automation-saas">
      <AutomationSaasHome />
    </PageWrapper>
  );
}
