"use client";

import type { ReactNode } from "react";

export type ToastTone = "neutral" | "success" | "warning" | "danger";

export interface ToastProps {
  message: string;
  tone?: ToastTone;
  onClose?: () => void;
}

const ICONS: Record<ToastTone, ReactNode> = {
  neutral: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  ),
  danger: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  ),
};

/** A brief confirmation of an action just taken — never for a decision. */
export function Toast({ message, tone = "neutral", onClose }: ToastProps) {
  return (
    <div className={`os-toast os-toast-tone-${tone}`}>
      {ICONS[tone]}
      <span className="body os-toast-msg">{message}</span>
      {onClose && (
        <button type="button" className="os-toast-close" onClick={onClose} aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}
