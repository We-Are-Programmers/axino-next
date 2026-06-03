import { TemplateProvider } from "@/components/providers/TemplateProvider";
import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Preloader } from "./Preloader";

type PageWrapperProps = {
  children: React.ReactNode;
  currentPath?: string;
  headerVariant?: "default" | "absolute";
};

export function PageWrapper({
  children,
  currentPath = "/",
  headerVariant = "default",
}: PageWrapperProps) {
  return (
    <TemplateProvider>
      <div className="page-wrapper">
        <Preloader />
        <BackToTop />
        <Header currentPath={currentPath} variant={headerVariant} />
        {children}
        <Footer />
      </div>
    </TemplateProvider>
  );
}
