import { PageBanner } from "./PageBanner";
import { PageWrapper } from "./PageWrapper";

type PlaceholderPageProps = {
  title: string;
  currentPath: string;
  description: string;
};

export function PlaceholderPage({ title, currentPath, description }: PlaceholderPageProps) {
  return (
    <PageWrapper currentPath={currentPath} headerVariant="absolute">
      <PageBanner title={title} />
      <section className="pt-90 pb-90">
        <div className="container text-center">
          <h2>{title}</h2>
          <p className="mt-3">{description}</p>
          <p className="text-muted mt-2">
            This route is scaffolded. Copy content from the matching HTML file in the original template to complete
            the page.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
