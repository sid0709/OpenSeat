/** Public AvatarProps contract for the Avatar component. */
export interface AvatarProps {
  initials: string;
  size?: 20 | 24 | 32;
  /** adds a success status dot — always pair with adjacent text naming the state */
  status?: boolean;
}

const FILLS = ["os-avatar-fill-1", "os-avatar-fill-2", "os-avatar-fill-3", "os-avatar-fill-4"];

function fillFor(seed: string) {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return FILLS[sum % FILLS.length];
}

/** A fixed four-step palette rotation by initials — never a random hue. */
export function Avatar({ initials, size = 24, status }: AvatarProps) {
  const node = (
    <span className={`caption os-avatar os-avatar-${String(size)} ${fillFor(initials)}`}>
      {initials}
    </span>
  );
  if (!status) return node;
  return (
    <span className="os-avatar-dot-wrap">
      {node}
      <span className="os-status-dot" />
    </span>
  );
}

/** Public AvatarStackProps contract for the Avatar component. */
export interface AvatarStackProps {
  people: AvatarProps[];
  overflow?: number;
}

/** The invited-bidder / allowlist pattern — overlapping avatars with a surface ring. */
export function AvatarStack({ people, overflow }: AvatarStackProps) {
  return (
    <div className="os-avatar-stack">
      {people.map((p, i) => (
        <Avatar key={i} {...p} />
      ))}
      {overflow ? (
        <span className="caption os-avatar os-avatar-24 os-avatar-overflow">+{overflow}</span>
      ) : null}
    </div>
  );
}
