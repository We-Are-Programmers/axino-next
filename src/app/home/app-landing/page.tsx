import type { Metadata } from "next";
import { AppLandingHome } from "@/components/home/variants/AppLandingHome";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "App Landing",
  description: "Axino app landing — manage your business smarter and faster.",
};

export default function AppLandingPage() {
  return (
    <PageWrapper currentPath="/home/app-landing">
      <AppLandingHome />
    </PageWrapper>
  );
}
