"use client";

import { CSSProperties, ReactNode, useCallback, useRef } from "react";
import type { NavProps } from "./Nav";
import { Nav } from "./Nav";

export interface LayoutProps {
  direction?: "row" | "column";
  gap?: number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  padding?: number;
  children: ReactNode;
  className?: string;
}

/** The general flex primitive every other layout component in this file is built from. */
export function Layout({
  direction = "row",
  gap = 0,
  align,
  justify,
  wrap,
  padding,
  children,
  className = "",
}: LayoutProps) {
  return (
    <div
      className={className || undefined}
      style={{
        display: "flex",
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : undefined,
        padding,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export interface StackProps extends Omit<LayoutProps, "direction"> {
  direction?: "row" | "column";
}

/** A Layout defaulting to a vertical, gapped column — the most common arrangement. */
export function Stack({ direction = "column", gap = 12, ...props }: StackProps) {
  return <Layout direction={direction} gap={gap} {...props} />;
}

export interface GridProps {
  columns?: number;
  gap?: number;
  children: ReactNode;
}

/** A fixed-column grid — for card walls, swatch tables, token demos. */
export function Grid({ columns = 2, gap = 12, children }: GridProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap }}>
      {children}
    </div>
  );
}

/** Page grid. Twelve tracks, gutters from the spacing scale. */
export const GRID_COLUMNS = 12;

export interface GridSystemProps {
  children: ReactNode;
  /** Gutter on the spacing scale: 2 = 8px, 3 = 12px, 4 = 16px. */
  gap?: 2 | 3 | 4 | 6;
}

export function GridSystem({ children, gap = 4 }: GridSystemProps) {
  return (
    <div className="os-grid" style={{ gap: `var(--spacing-${gap})` }}>
      {children}
    </div>
  );
}

export interface GridColumnProps {
  /** Tracks on a narrow container. Defaults to 12 so columns stack. */
  span?: number;
  /** Tracks once the grid is at least 28rem wide. */
  md?: number;
  /** Tracks once the grid is at least 44rem wide. */
  lg?: number;
  /** 1-based track where the column starts. Not responsive. */
  start?: number;
  children: ReactNode;
}

function tracks(span: number) {
  return Math.min(GRID_COLUMNS, Math.max(1, span));
}

export function GridColumn({ span = GRID_COLUMNS, md, lg, start, children }: GridColumnProps) {
  const base = tracks(span);
  if (start) {
    return (
      <div className="os-grid-col" style={{ gridColumn: `${start} / span ${base}` }}>
        {children}
      </div>
    );
  }
  return (
    <div
      className="os-grid-col"
      data-md={md != null ? "" : undefined}
      data-lg={lg != null ? "" : undefined}
      style={
        {
          "--os-span": base,
          "--os-span-md": md != null ? tracks(md) : undefined,
          "--os-span-lg": lg != null ? tracks(lg) : undefined,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}

/** A titled block of content — the unit docs pages and settings screens are built from. */
export function Section({ title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="os-section">
      <h2 className="h2 os-section-title">{title}</h2>
      {description && <p className="body-sm os-section-desc">{description}</p>}
      <div className="os-section-body">{children}</div>
    </section>
  );
}

export interface AspectRatioProps {
  ratio?: number;
  children: ReactNode;
}

/** Keeps its child at a fixed width-to-height ratio as its container resizes. */
export function AspectRatio({ ratio = 16 / 9, children }: AspectRatioProps) {
  return (
    <div className="os-aspect-ratio" style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
}

export function Divider({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  return <div className={`os-divider os-divider-${orientation}`} role="separator" />;
}

/** A vertical stack of Fields with the spacing every form in the product should share. */
export function FormLayout({ children }: { children: ReactNode }) {
  return <Stack gap={16}>{children}</Stack>;
}

export interface AppShellProps {
  nav: NavProps;
  sidebar?: ReactNode;
  children: ReactNode;
}

/** The top-level page frame — Nav across the top, an optional rail on the left, content filling the rest. */
export function AppShell({ nav, sidebar, children }: AppShellProps) {
  return (
    <div className="os-app-shell">
      <Nav {...nav} />
      <div className="os-app-shell-body">
        {sidebar && <div className="os-app-shell-sidebar">{sidebar}</div>}
        <div className="os-app-shell-content">{children}</div>
      </div>
    </div>
  );
}

export function ScrollableArea({ maxHeight = 320, children }: { maxHeight?: number; children: ReactNode }) {
  return (
    <div className="os-scrollable" style={{ maxHeight }}>
      {children}
    </div>
  );
}

export interface ResizeHandleProps {
  orientation?: "horizontal" | "vertical";
  onResize?: (deltaPx: number) => void;
}

/** A draggable divider between two panes. Reports the pointer delta; the caller owns the actual size. */
export function ResizeHandle({ orientation = "vertical", onResize }: ResizeHandleProps) {
  const last = useRef<number | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      last.current = orientation === "vertical" ? e.clientX : e.clientY;
    },
    [orientation]
  );
  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (last.current === null) return;
      const pos = orientation === "vertical" ? e.clientX : e.clientY;
      onResize?.(pos - last.current);
      last.current = pos;
    },
    [orientation, onResize]
  );
  const onPointerUp = useCallback(() => {
    last.current = null;
  }, []);

  return (
    <div
      className={`os-resize-handle os-resize-handle-${orientation}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="separator"
      aria-orientation={orientation}
    />
  );
}
