import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CartTable } from "@/components/shop/CartTable";

export const metadata: Metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <PageWrapper currentPath="/shop" headerVariant="absolute">
      <PageBanner title="Cart" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <CartTable />
      <div className="container pb-100 text-end">
        <Link href="/shop/checkout" className="theme-btn btn-style-one">
          Proceed to Checkout
        </Link>
      </div>
    </PageWrapper>
  );
}
