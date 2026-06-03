"use client";

import { useMemo, useState } from "react";
import type { ProductCategory } from "@/lib/data/shop";
import { products, shopFilters } from "@/lib/data/shop";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [filter, setFilter] = useState<ProductCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section className="featured-products">
      <div className="auto-container">
        <div className="mixitup-gallery">
          <div className="filters clearfix">
            <ul className="filter-tabs filter-btns clearfix">
              {shopFilters.map((tab) => (
                <li
                  key={tab.id}
                  className={`filter${filter === tab.id ? " active" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setFilter(tab.id)}
                  onKeyDown={(e) => e.key === "Enter" && setFilter(tab.id)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-list row">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
