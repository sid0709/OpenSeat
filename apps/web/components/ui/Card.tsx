"use client";

import type { HTMLAttributes, ReactNode } from "react";

/** Public CardProps contract for the Card component. */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  meta?: string;
  footer?: ReactNode;
  /** surface-hover fill + border-strong on hover, pointer cursor */
  interactive?: boolean;
  /** border-focus edge + primary-bg fill */
  selected?: boolean;
  /** adds elevation-1 — only for a card that overlaps content beneath it */
  raised?: boolean;
}

/** Groups related content with optional metadata and footer actions. */
export function Card({
  title,
  meta,
  footer,
  interactive,
  selected,
  raised,
  className = "",
  children,
  ...props
}: CardProps) {
  const classes = [
    "os-card",
    interactive && "os-card-hover",
    selected && "os-card-selected",
    raised && "os-card-raised",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {title && <p className="h3 os-card-title">{title}</p>}
      {meta && <p className="body-sm os-card-meta">{meta}</p>}
      {children}
      {footer && <div className="os-card-foot">{footer}</div>}
    </div>
  );
}
