"use client";

import { ReactNode, useEffect, useId, useState } from "react";

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
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
    <div className="os-modal-overlay os-sheet-overlay" onClick={onClose}>
      <div className="os-sheet" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="os-sheet-handle" />
        {title && (
          <div className="os-sheet-header">
            <p className="h3">{title}</p>
            <button type="button" className="os-modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}
        <div className="os-sheet-body">{children}</div>
      </div>
    </div>
  );
}

export function Overlay({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="os-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="os-menu-wrap"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="caption os-tooltip" role="tooltip" style={{ bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" }}>
          {label}
        </span>
      )}
    </span>
  );
}

export function Popover({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="os-menu-wrap">
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className="os-popover" role="dialog">
          {children}
        </div>
      )}
    </div>
  );
}

export const HoverCard = Popover;

export function Lightbox({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="os-overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export interface CommandItem {
  label: string;
  hint?: string;
  onSelect?: () => void;
}

export function CommandPalette({
  open,
  onClose,
  items,
  placeholder = "Type a command…",
}: {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="os-overlay" onClick={onClose}>
      <div className="os-command" role="dialog" aria-modal="true" aria-labelledby={id} onClick={(e) => e.stopPropagation()}>
        <input
          id={id}
          className="body os-command-input"
          placeholder={placeholder}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
        />
        <div className="os-command-list">
          {filtered.length === 0 && <p className="body-sm text-ink-muted" style={{ padding: 12 }}>No results</p>}
          {filtered.map((item) => (
            <button
              key={item.label}
              type="button"
              className="body-sm os-command-item"
              onClick={() => {
                item.onSelect?.();
                onClose();
              }}
            >
              <span>{item.label}</span>
              {item.hint && <span className="caption text-ink-faint">{item.hint}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
