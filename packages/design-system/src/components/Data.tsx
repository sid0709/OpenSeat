"use client";

import { ReactNode, useState } from "react";

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

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  rows,
}: {
  columns: TableColumn<T>[];
  rows: T[];
}) {
  return (
    <div className="os-table-wrap">
      <table className="os-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={String(c.key)} className="body-sm">
                  {c.render ? c.render(row) : String(row[c.key as keyof T] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

export function TreeList({
  items,
}: {
  items: { label: string; children?: { label: string }[] }[];
}) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.label}>
          <div className="body-sm os-tree-item">{item.label}</div>
          {item.children && (
            <div className="os-tree-nested">
              {item.children.map((c) => (
                <div key={c.label} className="body-sm os-tree-item">
                  {c.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function OverflowList({ items, max = 3 }: { items: string[]; max?: number }) {
  const shown = items.slice(0, max);
  const rest = items.length - shown.length;
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
      {shown.map((item) => (
        <span key={item} className="body-sm os-token">
          {item}
        </span>
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
