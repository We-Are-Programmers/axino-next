import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = { title: "Shop with Sidebar" };

export default function ShopSidebarPage() {
  return (
    <PageWrapper currentPath="/shop" headerVariant="absolute">
      <PageBanner title="Shop" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products with Sidebar" }]} />
      <div className="container pt-100 pb-100">
        <div className="row">
          <div className="col-lg-3">
            <aside className="shop-sidebar">
              <h5 className="widget-title">Categories</h5>
              <ul className="category-list">
                <li>All Products</li>
                <li>Cyber</li>
                <li>Digital</li>
                <li>Software</li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-9">
            <ProductGrid />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
