import type { ControlSize } from "./Input";

export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger" | "outline";

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  size?: ControlSize;
}

/** A status label. Always pairs a color with a word — never rely on tone alone. */
export function Badge({ label, tone = "neutral", size = "md" }: BadgeProps) {
  return <span className={`caption os-badge os-badge-${tone} os-badge-${size}`}>{label}</span>;
}
