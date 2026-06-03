import { VariantStyles } from "@/components/layout/VariantStyles";

export default function AiCopywritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VariantStyles href="/css/style-3.css" />
      {children}
    </>
  );
}
