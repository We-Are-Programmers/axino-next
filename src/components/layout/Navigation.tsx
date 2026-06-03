import Link from "next/link";
import type { NavItem } from "@/lib/navigation";

type NavigationProps = {
  items: NavItem[];
  currentPath?: string;
};

function NavLink({ item, currentPath }: { item: NavItem; currentPath?: string }) {
  const hasChildren = Boolean(item.children?.length);
  const isCurrent = item.href === currentPath;
  const liClass = [hasChildren ? "dropdown" : "", isCurrent ? "current" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={liClass || undefined}>
      {item.href ? (
        <Link href={item.href}>{item.label}</Link>
      ) : (
        <a href="#">{item.label}</a>
      )}
      {hasChildren ? (
        <ul>
          {item.children!.map((child) =>
            child.children?.length ? (
              <li key={child.label} className="dropdown">
                <a href="#">{child.label}</a>
                <ul>
                  {child.children.map((nested) => (
                    <li key={nested.label}>
                      <Link href={nested.href ?? "#"}>{nested.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={child.label}>
                <Link href={child.href ?? "#"}>{child.label}</Link>
              </li>
            ),
          )}
        </ul>
      ) : null}
    </li>
  );
}

export function Navigation({ items, currentPath = "/" }: NavigationProps) {
  return (
    <ul className="navigation">
      {items.map((item) => (
        <NavLink key={item.label} item={item} currentPath={currentPath} />
      ))}
    </ul>
  );
}
