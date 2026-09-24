"use client";

import { ReactNode, useState } from "react";
import { Token } from "./Content";
import { Tree, type TreeNode } from "./Tree";

export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="os-collapse">
      <button type="button" className="h3 os-collapse-trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className="os-sidenav-chevron">{open ? "▾" : "▸"}</span>
      </button>
      {open && <div className="body os-collapse-body">{children}</div>}
    </div>
  );
}

export function CollapsibleGroup({ children }: { children: ReactNode }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>;
}

export interface ListItemDef {
  title: string;
  description?: string;
  meta?: ReactNode;
  leading?: ReactNode;
}

export function List({ items }: { items: ListItemDef[] }) {
  return (
    <div className="os-list">
      {items.map((item) => (
        <div key={item.title} className="os-list-item">
          {item.leading}
          <div className="os-list-item-body">
            <p className="body-strong" style={{ margin: 0 }}>
              {item.title}
            </p>
            {item.description && (
              <p className="body-sm text-ink-muted" style={{ margin: 0 }}>
                {item.description}
              </p>
            )}
          </div>
          {item.meta}
        </div>
      ))}
    </div>
  );
}

export function MetadataList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="os-meta-list">
      {items.map((item) => (
        <div key={item.label} style={{ display: "contents" }}>
          <dt className="body-sm os-meta-key">{item.label}</dt>
          <dd className="body-sm os-meta-val" style={{ margin: 0 }}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** The two-level shorthand for Tree — every branch starts open. */
export function TreeList({
  items,
}: {
  items: { label: string; children?: { label: string }[] }[];
}) {
  const nodes: TreeNode[] = items.map((item) => ({
    id: item.label,
    label: item.label,
    children: item.children?.map((child) => ({ id: `${item.label}/${child.label}`, label: child.label })),
  }));
  return <Tree nodes={nodes} variant="guides" defaultExpanded={nodes.map((node) => node.id)} />;
}

export function OverflowList({ items, max = 3 }: { items: string[]; max?: number }) {
  const shown = items.slice(0, max);
  const rest = items.length - shown.length;
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
      {shown.map((item) => (
        <Token key={item} label={item} size="sm" />
      ))}
      {rest > 0 && <span className="caption text-ink-muted">+{rest}</span>}
    </div>
  );
}

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="os-visually-hidden">{children}</span>;
}

export function PageBody({ children }: { children: ReactNode }) {
  return <div className="os-page-body">{children}</div>;
}

export function PageHero({ children }: { children: ReactNode }) {
  return <div className="os-page-hero">{children}</div>;
}

export function Preview({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="os-preview">
      <div className="os-preview-stage">{children}</div>
      {label && <p className="caption os-preview-label">{label}</p>}
    </div>
  );
}

export function PreviewGrid({ children }: { children: ReactNode }) {
  return <div className="os-preview-grid">{children}</div>;
}
