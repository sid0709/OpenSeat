import type { SVGProps } from "react";

/** Stroke paths on a 24×24 grid. Every glyph inherits `currentColor`. */
const PATHS = {
  chevronRight: "M9 6l6 6-6 6",
  chevronLeft: "M15 6l-6 6 6 6",
  chevronDown: "M6 9l6 6 6-6",
  chevronUp: "M6 15l6-6 6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  minus: "M6 12h12",
  close: "M6 6l12 12M18 6L6 18",
  clock: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  calendar: "M4 9h16M8 3v3M16 3v3M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
  arrowUp: "M12 19V5M6 11l6-6 6 6",
  arrowDown: "M12 5v14M6 13l6 6 6-6",
  sort: "M8 9l4-4 4 4M8 15l4 4 4-4",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  folderOpen: "M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v1M3 7v10a2 2 0 0 0 2 2h12l3.5-8H7l-4 8",
  file: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
  dot: "M12 12h.01",
} as const;

export type GlyphName = keyof typeof PATHS;

export interface GlyphProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: GlyphName;
  /** Rendered size in px. Defaults to 1em so the glyph tracks the text around it. */
  size?: number | string;
}

/** Small line icons used inside design-system controls. Decorative by default. */
export function Glyph({ name, size = "1em", className, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className={["os-glyph", className].filter(Boolean).join(" ")}
      {...props}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
