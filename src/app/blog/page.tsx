import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PlaceholderPage title="Blog" currentPath="/blog" description="Blog grid page — extend from page-blog.html." />
  );
}
