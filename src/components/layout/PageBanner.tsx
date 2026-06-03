import Link from "next/link";

type PageBannerProps = {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageBanner({ title, breadcrumbs = [{ label: "Home", href: "/" }, { label: title }] }: PageBannerProps) {
  return (
    <section className="page-title" style={{ backgroundImage: "url(/images/background/page-title2.png)" }}>
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{title}</h1>
          <ul className="page-breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`}>
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
