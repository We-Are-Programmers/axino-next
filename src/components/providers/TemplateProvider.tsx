"use client";

import { useAos } from "@/hooks/useAos";
import { useStickyHeader } from "@/hooks/useStickyHeader";

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  useAos();
  useStickyHeader();
  return <>{children}</>;
}
