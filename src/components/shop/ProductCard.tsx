import Link from "next/link";
import type { Product } from "@/lib/data/shop";

function StarRating() {
  return (
    <span className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="fa fa-star" />
      ))}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-block all mix col-lg-3 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <Link href={`/shop/${product.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="content">
          <h4>
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h4>
          <span className="price">{product.price}</span>
          <StarRating />
        </div>
        <div className="icon-box">
          <Link href={`/shop/${product.slug}`} className="ui-btn like-btn">
            <i className="fa fa-heart" />
          </Link>
          <Link href="/shop/cart" className="ui-btn add-to-cart">
            <i className="fa fa-shopping-cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}
