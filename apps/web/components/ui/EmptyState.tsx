"use client";

import { Button } from "./Button";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/** Calm and specific — never cute. Always says what will fill this space. */
export function EmptyState({
  title = "No bids yet",
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="os-empty-wrap">
      <div className="os-empty">
        <div className="os-empty-icon">{ICON}</div>
        <p className="h3 os-empty-title">{title}</p>
        {description && <p className="body os-empty-desc">{description}</p>}
        {actionLabel && (
          <Button variant="secondary" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
