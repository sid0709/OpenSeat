export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger" | "outline";

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
}

/** A status label. Always pairs a color with a word — never rely on tone alone. */
export function Badge({ label, tone = "neutral" }: BadgeProps) {
  return <span className={`caption os-badge os-badge-${tone}`}>{label}</span>;
}
