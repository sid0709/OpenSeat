"use client";

import { ReactNode } from "react";

export type StatusTone = "neutral" | "primary" | "success" | "warning" | "danger";

export interface BannerProps {
  tone?: StatusTone;
  title: string;
  description?: string;
  actions?: ReactNode;
  onDismiss?: () => void;
}

/** A page- or section-level message — never for a single field's error, use Input's `helper` for that. */
export function Banner({ tone = "neutral", title, description, actions, onDismiss }: BannerProps) {
  return (
    <div className={`os-banner os-banner-${tone}`} role={tone === "danger" ? "alert" : "status"}>
      <div className="os-banner-body">
        <p className="body-strong os-banner-title">{title}</p>
        {description && <p className="body-sm os-banner-desc">{description}</p>}
        {actions && <div className="os-banner-actions">{actions}</div>}
      </div>
      {onDismiss && (
        <button type="button" className="os-modal-close" onClick={onDismiss} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
}

/** Determinate progress for a known-length task, like an upload. */
export function ProgressBar({ value, max = 100, label }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div>
      {label && <p className="body-sm mb-1 text-ink-muted">{label}</p>}
      <div className="os-progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="os-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
}

/** A loading placeholder shaped like the content it stands in for. */
export function Skeleton({ width = "100%", height = 16, circle }: SkeletonProps) {
  return (
    <div
      className={"os-skeleton" + (circle ? " os-skeleton-circle" : "")}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

/** An indeterminate loading indicator — pair with a label for screen readers. */
export function Spinner({ size = 16, label = "Loading" }: { size?: number; label?: string }) {
  return (
    <svg
      className="os-spinner"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label={label}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** A standalone colored dot for a status legend or list row — see Avatar's `status` prop for the avatar-corner variant. */
export function StatusDot({ tone = "neutral" }: { tone?: StatusTone }) {
  return <span className={`os-status-indicator os-status-indicator-${tone}`} />;
}
