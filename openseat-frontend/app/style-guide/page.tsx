import type { ReactNode } from "react";
import {
  Button,
  Input,
  Card,
  Badge,
  Avatar,
  AvatarStack,
  Nav,
  EmptyState,
  Toast,
  TokenDemo,
} from "@/components/ui";

const SWATCHES = [
  "canvas",
  "surface",
  "surface-sunken",
  "surface-hover",
  "surface-selected",
  "border-subtle",
  "border-default",
  "border-strong",
  "border-focus",
  "ink",
  "ink-muted",
  "ink-faint",
  "primary",
  "primary-hover",
  "primary-active",
  "primary-bg",
  "success",
  "success-bg",
  "warning",
  "warning-bg",
  "danger",
  "danger-bg",
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="h2 mb-1">{title}</h2>
      {description && <p className="body-sm text-ink-muted mb-4">{description}</p>}
      {children}
    </section>
  );
}

export const metadata = {
  title: "Style guide — OpenSeat",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-canvas px-6 py-8 md:px-12">
      <h1 className="h1 mb-8">OpenSeat style guide</h1>

      <Section
        id="tokens"
        title="Design tokens"
        description="Every token rendered as a sample beside its live value. Toggle it on and switch themes to compare."
      >
        <TokenDemo />
      </Section>

      <Section
        title="Color"
        description='Semantic tokens, reading live from the active theme (data-theme="dark" on <html>).'
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {SWATCHES.map((name) => (
            <div
              key={name}
              className="overflow-hidden rounded-lg border border-border-subtle bg-surface"
            >
              <div className="h-11 border-b border-border-subtle" style={{ background: `var(--${name})` }} />
              <div className="p-2">
                <span className="caption block text-ink">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography" description="One family — Inter — separated by size, weight and tracking.">
        <div className="flex flex-col gap-3">
          <p className="display">Sealed rooms, invited bidders.</p>
          <p className="h1">Brand refresh brief</p>
          <p className="h2">Proof of fit</p>
          <p className="h3">Landing page copy</p>
          <p className="body-lg text-ink-muted">
            Scope: a full identity refresh across the marketing site and product UI.
          </p>
          <p className="body">
            Invited bidders can see this room and will show up here once they respond.
          </p>
          <p className="label text-ink-muted">When can you start</p>
          <p className="caption text-ink-muted">Posted 2 days ago</p>
        </div>
      </Section>

      <Section title="Buttons" description="32px by default, 28px in dense rows, 40px for a hero CTA.">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Post a sealed job</Button>
          <Button variant="secondary">Save as draft</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Close this room</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section title="Inputs">
        <div className="flex max-w-sm flex-col gap-4">
          <Input label="When can you start" placeholder="e.g. Next Monday" />
          <Input label="Your rate" defaultValue="0" error helper="Enter an amount greater than $0" />
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge label="Invited" tone="neutral" />
          <Badge label="Selected" tone="primary" />
          <Badge label="Bid submitted" tone="success" />
          <Badge label="Pending review" tone="warning" />
          <Badge label="Revoked" tone="danger" />
          <Badge label="Viewed" tone="outline" />
        </div>
      </Section>

      <Section title="Avatars">
        <div className="flex flex-wrap items-center gap-3">
          <Avatar initials="JM" size={20} />
          <Avatar initials="AR" size={24} />
          <Avatar initials="DK" size={32} />
          <Avatar initials="RS" size={32} status />
          <AvatarStack
            people={[
              { initials: "JM", size: 24 },
              { initials: "AR", size: 24 },
              { initials: "DK", size: 24 },
            ]}
            overflow={3}
          />
        </div>
      </Section>

      <Section title="Cards">
        <div className="flex flex-wrap gap-3">
          <Card title="Brand refresh brief" meta="Fixed · $2,400" footer="Posted 2 days ago" className="w-52" />
          <Card title="Landing page copy" meta="Hourly · $65/hr" interactive className="w-52" />
          <Card title="Selected bid" meta="Chosen for this room" selected className="w-52" />
        </div>
      </Section>

      <Section title="Nav">
        <Nav
          brand="OpenSeat"
          items={[{ label: "Dashboard", active: true }, { label: "Job rooms" }, { label: "Messages" }]}
          cta="Post a sealed job"
          showAvatar
        />
      </Section>

      <Section title="Empty state">
        <EmptyState
          title="No bids yet"
          description="Invited bidders can see this room and will show up here once they respond."
          actionLabel="Invite a bidder"
        />
      </Section>

      <Section title="Toasts">
        <div className="flex flex-col items-start gap-2">
          <Toast message="Invite sent to 2 bidders" tone="success" />
          <Toast message="This invite expires in 24 hours" tone="warning" />
          <Toast message="Failed to send — try again" tone="danger" />
        </div>
      </Section>
    </div>
  );
}
