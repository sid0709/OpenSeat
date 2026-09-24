"use client";

import { ReactNode, useMemo, useState } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="os-breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label + i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {i > 0 && <span className="os-breadcrumb-sep">/</span>}
            {item.href && !last ? (
              <a href={item.href} className="body-sm os-breadcrumb">
                {item.label}
              </a>
            ) : (
              <span className={"body-sm " + (last ? "os-breadcrumb-current" : "os-breadcrumb")}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export interface TabItem {
  label: string;
  value: string;
}

export function TabList({
  tabs,
  value,
  onChange,
}: {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="os-tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.value}
          type="button"
          role="tab"
          aria-selected={t.value === value}
          className={"label os-tab" + (t.value === value ? " os-tab-active" : "")}
          onClick={() => onChange(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function Pagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <div className="os-pagination" role="navigation" aria-label="Pagination">
      <button type="button" className="os-page" disabled={page <= 1} onClick={() => onChange(page - 1)}>
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={"label os-page" + (p === page ? " os-page-active" : "")}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button type="button" className="os-page" disabled={page >= pageCount} onClick={() => onChange(page + 1)}>
        ›
      </button>
    </div>
  );
}

export interface StepDef {
  label: string;
}

export function Stepper({ steps, current }: { steps: StepDef[]; current: number }) {
  return (
    <div className="os-stepper">
      {steps.map((s, i) => (
        <div key={s.label} className={"body-sm os-step" + (i === current ? " os-step-active" : i < current ? " os-step-done" : "")} style={{ flex: i < steps.length - 1 ? 1 : undefined }}>
          <span className="os-step-index">{i + 1}</span>
          <span>{s.label}</span>
          {i < steps.length - 1 && <span className="os-step-rule" />}
        </div>
      ))}
    </div>
  );
}

export function Outline({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="os-sidenav-list" aria-label="On this page">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="body-sm os-sidenav-item">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
