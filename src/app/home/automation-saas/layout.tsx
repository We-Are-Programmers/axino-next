import { VariantStyles } from "@/components/layout/VariantStyles";

export default function AutomationSaasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VariantStyles href="/css/style-4.css" />
      {children}
    </>
  );
}
