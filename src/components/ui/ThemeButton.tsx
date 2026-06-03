import Link from "next/link";

type ThemeButtonProps = {
  href: string;
  label: string;
  variant?: "default" | "dark";
  className?: string;
};

export function ThemeButton({
  href,
  label,
  variant = "default",
  className = "btn-style-one theme-btn",
}: ThemeButtonProps) {
  const variantClass = variant === "dark" ? " dark-bg" : "";

  return (
    <Link className={`${className}${variantClass}`} href={href}>
      <span className="header-theme-btn">{label}</span>
      <span className="header-btn-arrow-right">
        <i className="fa-regular fa-angle-right" />
      </span>
    </Link>
  );
}
