import { VariantStyles } from "@/components/layout/VariantStyles";

export default function AppLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VariantStyles href="/css/style-2.css" />
      {children}
    </>
  );
}
