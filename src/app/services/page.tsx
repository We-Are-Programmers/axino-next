import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PlaceholderPage
      title="Services"
      currentPath="/services"
      description="Services list page — extend from page-services.html."
    />
  );
}
