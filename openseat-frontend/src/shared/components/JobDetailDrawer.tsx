"use client";

import { Badge, Button, Card } from "@openseat/design-system";
import { JobRoomRecord } from "@/src/shared/types/job-room";

interface JobDetailDrawerProps { room: JobRoomRecord | null; onClose: () => void; onApply: (id: string) => void; }

export function JobDetailDrawer({ room, onClose, onApply }: JobDetailDrawerProps) {
  if (!room) return null;
  return (
    <div role="presentation" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,.45)" }}>
      <aside role="dialog" aria-modal="true" aria-label={`${room.title} details`} onClick={(event) => event.stopPropagation()} style={{ position: "absolute", inset: "0 0 0 auto", width: "min(620px, 100%)", overflowY: "auto", background: "var(--color-background-surface)", padding: "var(--spacing-8)", boxShadow: "var(--elevation-3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--spacing-4)", alignItems: "start" }}><div><span className="caption">{room.postedTimeText}</span><h1 className="h1">{room.title}</h1></div><Button variant="ghost" aria-label="Close job details" onClick={onClose}>Close</Button></div>
        <p className="body">{room.descriptionParagraph}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-2)", margin: "var(--spacing-4) 0" }}>{room.skillsTags.map((tag) => <Badge key={tag} label={tag} tone="neutral" />)}</div>
        <Card title="Engagement" meta="Project expectations"><p className="body">{room.budgetType}: {room.rateOrBudgetRangeText}</p><p className="body">{room.experienceLevelRequired} · {room.durationEstimateText} · {room.weeklyCommitmentText}</p><p className="body-sm text-ink-muted">{room.proposalsCountText} proposals · {room.clientLocationCode} · {room.clientTotalSpentText}</p></Card>
        <div style={{ display: "flex", gap: "var(--spacing-3)", marginTop: "var(--spacing-6)" }}><Button variant="primary" onClick={() => onApply(room.id)}>Submit a bid</Button><Button variant="secondary" onClick={onClose}>Keep browsing</Button></div>
      </aside>
    </div>
  );
}
