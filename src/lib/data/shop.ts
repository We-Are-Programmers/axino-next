export type ProductCategory = "all" | "cyber" | "digital" | "software" | "technology" | "development";

export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  categories: ProductCategory[];
  rating?: number;
};

export const shopFilters: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cyber", label: "Cyber" },
  { id: "digital", label: "Digital" },
  { id: "software", label: "Software" },
  { id: "technology", label: "Technology" },
  { id: "development", label: "Development" },
];

export const products: Product[] = [
  { slug: "show-piece", name: "Show Piece", price: "$32.00", image: "/images/resource/products/1.jpg", categories: ["all", "digital", "technology"] },
  { slug: "leather-belt", name: "Leather Belt", price: "$52.00", image: "/images/resource/products/2.jpg", categories: ["all", "cyber", "software", "technology"] },
  { slug: "sunglasses", name: "Sunglasses", price: "$42.00", image: "/images/resource/products/3.jpg", categories: ["all", "digital", "technology", "development"] },
  { slug: "backpack", name: "Backpack", price: "$22.00", image: "/images/resource/products/4.jpg", categories: ["all", "cyber", "software", "development"] },
  { slug: "hand-watch", name: "Hand Watch", price: "$34.00", image: "/images/resource/products/5.jpg", categories: ["all", "digital", "software", "technology"] },
  { slug: "party-bag", name: "Party Bag", price: "$25.00", image: "/images/resource/products/6.jpg", categories: ["all", "cyber", "digital"] },
  { slug: "coffee-mug", name: "Coffee Mug", price: "$20.00", image: "/images/resource/products/7.jpg", categories: ["all", "technology", "development"] },
  { slug: "smart-watch", name: "Smart Watch", price: "$40.00", image: "/images/resource/products/8.jpg", categories: ["all", "cyber", "digital", "software", "development"] },
];

export const cartItems = [
  { productSlug: "show-piece", name: "Winter Black Jacket", price: 36, qty: 1, size: "Medium", image: "/images/resource/products/1.jpg" },
  { productSlug: "leather-belt", name: "Swan Crop V-Neck Tee", price: 115, qty: 2, size: "Small", image: "/images/resource/products/2.jpg" },
  { productSlug: "sunglasses", name: "Blue Solid Casual Shirt", price: 68, qty: 3, size: "Large", image: "/images/resource/products/3.jpg" },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? products[0];
}
