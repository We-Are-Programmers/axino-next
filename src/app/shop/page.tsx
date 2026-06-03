import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <PageWrapper currentPath="/shop" headerVariant="absolute">
      <PageBanner title="Shop" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <ProductGrid />
    </PageWrapper>
  );
}
