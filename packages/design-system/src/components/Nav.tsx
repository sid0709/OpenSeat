"use client";

import { ReactNode } from "react";
import { Button } from "./Action";
import { Avatar } from "./Content";

export interface NavItem {
  label: string;
  active?: boolean;
  href?: string;
}

export interface NavProps {
  brand?: ReactNode;
  items?: NavItem[];
  cta?: string;
  onCtaClick?: () => void;
  /** The signed-in person; the avatar derives initials from it. */
  userName?: string;
  trailing?: ReactNode;
  showAvatar?: boolean;
}

/** The 48px top-level product bar — calm infrastructure, never a second accent. */
export function Nav({
  brand = "OpenSeat",
  items = [],
  cta,
  onCtaClick,
  userName = "Jordan Miles",
  trailing,
  showAvatar = false,
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
        {cta && (
          <Button label={cta} variant="primary" size="sm" onClick={onCtaClick} />
        )}
        {trailing}
        {showAvatar && <Avatar name={userName} size="sm" />}
      </div>
    </div>
  );
}

