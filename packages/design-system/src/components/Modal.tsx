"use client";

import { ReactNode, useEffect } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

/**
 * A focused, blocking overlay for a single decision or short task. Always
 * give it a way out: the X, Escape, or a footer action.
 */
export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="os-modal-overlay" onClick={onClose}>
      <div
        className="os-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="os-modal-header">
            <p className="h3 os-modal-title">{title}</p>
            <button type="button" className="os-modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}
        <div className="os-modal-body">{children}</div>
        {footer && <div className="os-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

/** Alias — OpenSeat names this pattern Dialog; same component. */
export const Dialog = Modal;
export type DialogProps = ModalProps;
