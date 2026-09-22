"use client";

import { Fragment, type JSX, type ReactNode, useState } from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

const HEADING_TAG = ["h1", "h1", "h2", "h3", "h3"] as const;
const HEADING_CLASS = ["display", "h1", "h2", "h3", "h3"] as const;

/** Semantic heading tag, sized by the type scale rather than the tag name. */
export function Heading({ level = 2, children, className = "" }: HeadingProps) {
  const Tag = HEADING_TAG[level] as keyof JSX.IntrinsicElements;
  return <Tag className={[HEADING_CLASS[level], className].filter(Boolean).join(" ")}>{children}</Tag>;
}

export interface TextProps {
  size?: "lg" | "md" | "sm";
  muted?: boolean;
  strong?: boolean;
  as?: "p" | "span";
  children: ReactNode;
  className?: string;
}

const TEXT_CLASS: Record<NonNullable<TextProps["size"]>, string> = {
  lg: "body-lg",
  md: "body",
  sm: "body-sm",
};

/** Body copy at one of the three reading sizes. */
export function Text({ size = "md", muted, strong, as = "p", children, className = "" }: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={[TEXT_CLASS[size], strong && "body-strong", muted && "text-ink-muted", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

export interface BlockquoteProps {
  children: ReactNode;
  cite?: string;
}

/** A quoted passage set off from surrounding copy. */
export function Blockquote({ children, cite }: BlockquoteProps) {
  return (
    <blockquote className="body-lg os-blockquote" cite={cite}>
      {children}
    </blockquote>
  );
}

export interface CitationProps {
  source: string;
  href?: string;
}

/** An attribution line for a Blockquote or referenced fact. */
export function Citation({ source, href }: CitationProps) {
  return (
    <cite className="body-sm os-citation">
      {"— "}
      {href ? (
        <a href={href} className="os-link">
          {source}
        </a>
      ) : (
        source
      )}
    </cite>
  );
}

/** Inline monospace fragment — for a filename, variable, or short snippet in a sentence. */
export function Code({ children }: { children: ReactNode }) {
  return <code className="os-code-inline">{children}</code>;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

/** A multi-line, copyable code sample. Used throughout these docs. */
export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };
  return (
    <div className="os-code-block-wrap">
      <div className="os-code-block-header">
        <span className="caption text-ink-muted">{filename ?? language ?? "code"}</span>
        <button type="button" className="os-icon-btn os-icon-btn-sm" onClick={onCopy} aria-label="Copy code">
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      <div className="os-code-block">
        <pre>{code}</pre>
      </div>
    </div>
  );
}

/** A keyboard key, for shortcuts like <Kbd>⌘</Kbd><Kbd>K</Kbd>. */
export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="os-kbd">{children}</kbd>;
}

export interface TimestampProps {
  date: string | Date;
  format?: "relative" | "absolute";
}

function relativeFrom(date: Date) {
  const diffMs = date.getTime() - Date.now();
  const diffMin = Math.round(diffMs / 60000);
  const abs = Math.abs(diffMin);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (abs < 60) return rtf.format(diffMin, "minute");
  if (abs < 60 * 24) return rtf.format(Math.round(diffMin / 60), "hour");
  return rtf.format(Math.round(diffMin / (60 * 24)), "day");
}

/** A point in time, shown relative ("2 hours ago") or absolute, with the full date always in the title. */
export function Timestamp({ date, format = "relative" }: TimestampProps) {
  const d = typeof date === "string" ? new Date(date) : date;
  const label = format === "relative" ? relativeFrom(d) : d.toLocaleString();
  return (
    <time className="caption os-timestamp" dateTime={d.toISOString()} title={d.toLocaleString()}>
      {label}
    </time>
  );
}

export interface TokenProps {
  label: string;
  onRemove?: () => void;
}

/** A removable unit of input — a filter, a tag, an item in a multi-select. */
export function Token({ label, onRemove }: TokenProps) {
  return (
    <span className="body-sm os-token">
      {label}
      {onRemove && (
        <button type="button" className="os-token-remove" onClick={onRemove} aria-label={`Remove ${label}`}>
          ✕
        </button>
      )}
    </span>
  );
}

export interface ThumbnailProps {
  src?: string;
  alt: string;
  size?: 32 | 48 | 64 | 96;
}

/** A small image preview with a placeholder while there is no src. */
export function Thumbnail({ src, alt, size = 48 }: ThumbnailProps) {
  return (
    <span className="os-thumbnail" style={{ width: size, height: size }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} />
      ) : (
        <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      )}
    </span>
  );
}

export interface IconProps {
  children: ReactNode;
  size?: number;
  label?: string;
}

/** A sizing wrapper around an inline SVG glyph. Pass `label` when the icon carries meaning on its own. */
export function Icon({ children, size = 16, label }: IconProps) {
  return (
    <span className="os-icon" style={{ width: size, height: size }} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {children}
    </span>
  );
}

/**
 * A minimal, safe Markdown renderer — paragraphs, **bold**, *italic*, and
 * `code`. Builds React nodes directly, never dangerouslySetInnerHTML.
 */
export function Markdown({ children }: { children: string }) {
  const paragraphs = children.trim().split(/\n{2,}/);
  return (
    <div className="body">
      {paragraphs.map((para, pi) => (
        <p key={pi} className={pi > 0 ? "mt-3" : undefined}>
          {inline(para).map((node, i) => (
            <Fragment key={i}>{node}</Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`") && part.endsWith("`")) return <Code key={i}>{part.slice(1, -1)}</Code>;
    return part;
  });
}
