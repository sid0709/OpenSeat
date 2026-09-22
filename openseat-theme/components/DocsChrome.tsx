"use client";

import { usePathname } from "next/navigation";
import { AppShell, SideNav, ThemeToggle, type SideNavEntry } from "@openseat/design-system";
import { CATALOG } from "@/lib/catalog";

const Brand = (
  <a href="/" className="h3 os-nav-brand">
    <span className="os-brand-mark" />
    OpenSeat
  </a>
);

export function DocsChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const items: SideNavEntry[] = [
    { label: "Overview", href: "/", active: path === "/" },
    ...CATALOG.map((group) => ({
      label: group.category,
      children: group.items.map((item) => {
        const href = item.slug === "tokens" ? "/tokens" : `/components/${item.slug}`;
        return {
          label: item.title,
          href,
          active: path === href,
        };
      }),
    })),
  ];

  return (
    <AppShell
      nav={{
        brand: Brand,
        items: [
          { label: "Components", href: "/", active: path === "/" || path.startsWith("/components") },
          { label: "Tokens", href: "/tokens", active: path === "/tokens" },
        ],
        trailing: <ThemeToggle />,
      }}
      sidebar={<SideNav items={items} />}
    >
      {children}
    </AppShell>
  );
}
