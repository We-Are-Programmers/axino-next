import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getProduct, products } from "@/lib/data/shop";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getProduct(slug).name };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  return (
    <PageWrapper currentPath="/shop" headerVariant="absolute">
      <PageBanner title={product.name} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.name }]} />
      <section className="product-details pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="col-lg-6">
              <h2>{product.name}</h2>
              <p className="price">{product.price}</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="d-flex gap-3 mt-4">
                <Link href="/shop/cart" className="theme-btn">
                  Add to Cart
                </Link>
                <Link href="/shop" className="theme-btn dark-bg">
                  Back to Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
