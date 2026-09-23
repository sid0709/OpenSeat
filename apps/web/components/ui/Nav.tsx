"use client";

import { Avatar } from "./Avatar";
import { Button } from "./Button";

export interface NavItem {
  label: string;
  active?: boolean;
  href?: string;
}

export interface NavProps {
  brand?: string;
  items?: NavItem[];
  cta?: string;
  onCtaClick?: () => void;
  initials?: string;
}

/** The 48px top-level product bar — calm infrastructure, never a second accent. */
export function Nav({
  brand = "OpenSeat",
  items = [],
  cta = "Post a sealed job",
  onCtaClick,
  initials = "JM",
}: NavProps) {
  return (
    <div className="os-nav">
      <span className="h3 os-nav-brand">{brand}</span>
      <div className="os-nav-items">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href ?? "#"}
            className={"label os-nav-item" + (it.active ? " os-nav-item-active" : "")}
          >
            {it.label}
          </a>
        ))}
      </div>
      <div className="os-nav-right">
        <Button variant="primary" size="sm" onClick={onCtaClick}>
          {cta}
        </Button>
        <Avatar initials={initials} size={24} />
      </div>
    </div>
  );
}
