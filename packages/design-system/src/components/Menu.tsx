"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export interface MenuItemDef {
  label: string;
  onSelect?: () => void;
  danger?: boolean;
  disabled?: boolean;
  /** renders a divider in this slot instead of an item */
  divider?: boolean;
}

export interface MenuProps {
  trigger: ReactNode;
  items: MenuItemDef[];
  align?: "start" | "end";
}

/**
 * A trigger-anchored list of actions. Closes on selection, outside click,
 * or Escape.
 */
export function Menu({ trigger, items, align = "start" }: MenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="os-menu-wrap" ref={ref}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className={`os-menu os-menu-align-${align}`} role="menu">
          {items.map((item, i) =>
            item.divider ? (
              <hr key={i} className="os-menu-divider" />
            ) : (
              <button
                key={item.label + i}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                className={"body-sm os-menu-item" + (item.danger ? " os-menu-item-danger" : "")}
                onClick={() => {
                  item.onSelect?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

/** Aliases — Astryx splits this anatomy into DropdownMenu and TopNavMenu by trigger context; same component. */
export const DropdownMenu = Menu;
export type DropdownMenuProps = MenuProps;
export const TopNavMenu = Menu;
export type TopNavMenuProps = MenuProps;

export interface MoreMenuProps extends Omit<MenuProps, "trigger"> {
  label?: string;
}

/** The overflow "···" trigger variant of Menu. */
export function MoreMenu({ label = "More options", ...props }: MoreMenuProps) {
  return (
    <Menu
      {...props}
      trigger={
        <button type="button" className="os-icon-btn" aria-label={label} title={label}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      }
    />
  );
}

export function ContextMenu({ items, children }: { items: MenuItemDef[]; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
      }}
    >
      {children}
      {open && (
        <div
          className="os-menu"
          role="menu"
          style={{ position: "fixed", top: pos.y, left: pos.x }}
        >
          {items.map((item, i) =>
            item.divider ? (
              <hr key={i} className="os-menu-divider" />
            ) : (
              <button
                key={item.label + i}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                className={"body-sm os-menu-item" + (item.danger ? " os-menu-item-danger" : "")}
                onClick={() => {
                  item.onSelect?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
