"use client";

import { useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppShell } from "@astryxdesign/core/AppShell";
import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import { SideNav, SideNavHeading, SideNavItem, SideNavSection } from "@astryxdesign/core/SideNav";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Icon } from "@astryxdesign/core/Icon";
import { TextInput } from "@astryxdesign/core/TextInput";
import { CATALOG, itemHref } from "@/lib/catalog";
import { useColorMode } from "@/components/Providers";

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function DocsChrome({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { mode, setMode } = useColorMode();
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATALOG;
    return CATALOG.map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
      ),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <AppShell
      variant="elevated"
      contentPadding={6}
      topNav={
        <TopNav
          label="Documentation"
          heading={<TopNavHeading heading="Astryx" headingHref="/" />}
          startContent={
            <>
              <TopNavItem
                label="Components"
                href="/"
                isSelected={path === "/" || path.startsWith("/components")}
              />
              <TopNavItem label="Tokens" href="/tokens" isSelected={path === "/tokens"} />
            </>
          }
          endContent={
            <IconButton
              label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              variant="ghost"
              icon={mode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            />
          }
        />
      }
      sideNav={
        <SideNav header={<SideNavHeading heading="Astryx" headingHref="/" />}>
          <TextInput
            label="Search"
            isLabelHidden
            placeholder="Search"
            startIcon={<Icon icon="search" />}
            value={query}
            onChange={(value) => setQuery(value)}
            hasClear
          />
          <SideNavItem label="Overview" href="/" isSelected={path === "/"} />
          {groups.map((group) => (
            <SideNavSection key={group.category} title={group.category}>
              {group.items.map((item) => {
                const href = itemHref(item.slug);
                return (
                  <SideNavItem
                    key={item.slug}
                    label={item.title}
                    href={href}
                    isSelected={path === href}
                  />
                );
              })}
            </SideNavSection>
          ))}
        </SideNav>
      }
    >
      {children}
    </AppShell>
  );
}
