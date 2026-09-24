"use client";

import { useState } from "react";
import { Badge, Button, Input, Nav } from "@openseat/design-system";
import { JobRoomCard } from "@/src/shared/components/JobRoomCard";
import { JobDetailDrawer } from "@/src/shared/components/JobDetailDrawer";
import { useJobRoomsContext } from "@/src/shared/job-rooms/JobRoomsContext";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";
import { JobRoomRecord } from "@/src/shared/types/job-room";

export default function MarketplaceJobsPage() {
  const { rooms, filters, updateFilters, applyToJob } = useJobRoomsContext();
  const { currentUser, profile } = useMockAuth();
  const [selected, setSelected] = useState<JobRoomRecord | null>(null);
  const [notice, setNotice] = useState("");
  const apply = (id: string) => { applyToJob(id, { ...profile, fullName: currentUser?.fullName }); setNotice("Your bid was submitted. Open Messages when the client responds."); };

  return <div style={{ minHeight: "100vh", background: "var(--canvas)" }}>
    <Nav brand="OpenSeat" items={[{ label: "Find work", active: true }, { label: "My bids" }, { label: "Messages" }]} />
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "var(--spacing-8) var(--spacing-4)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "var(--spacing-4)", marginBottom: "var(--spacing-6)" }}><div><span className="label text-primary">MARKETPLACE</span><h1 className="display">Find your next contract</h1><p className="body text-ink-muted">Browse jobs, inspect the brief, and submit a focused bid.</p></div><Badge label={`${rooms.length} open jobs`} tone="neutral" /></div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: "var(--spacing-6)", marginBottom: "var(--spacing-6)" }}><Input placeholder="Search jobs, skills, or outcomes" value={filters.searchQuery} onChange={(event) => updateFilters({ searchQuery: event.target.value })} /><Button variant="secondary" onClick={() => updateFilters({ searchQuery: "" })}>Clear filters</Button></div>
      {notice && <p className="body-sm" style={{ color: "var(--color-success)", marginBottom: "var(--spacing-4)" }}>{notice}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 360px", gap: "var(--spacing-6)", alignItems: "start" }}><section style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>{rooms.map((room) => <div key={room.id} onClick={() => setSelected(room)} style={{ cursor: "pointer" }}><JobRoomCard room={room} onBidAction={apply} /></div>)}{!rooms.length && <p className="body text-ink-muted">No jobs match your search.</p>}</section><aside><div className="h3">How bidding works</div><p className="body text-ink-muted">Open a job, understand the scope, submit your rate and cover letter, then continue the discussion in Messages.</p><ol className="body text-ink-muted"><li>Review the brief</li><li>Submit your bid</li><li>Discuss milestones</li><li>Start work after approval</li></ol></aside></div>
    </main><JobDetailDrawer room={selected} onClose={() => setSelected(null)} onApply={(id) => { apply(id); setSelected(null); }} />
  </div>;
}
