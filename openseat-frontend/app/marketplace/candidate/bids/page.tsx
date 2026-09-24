"use client";

import { Card } from "@openseat/design-system";

export default function CandidateBidsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--canvas)", padding: "var(--spacing-8)" }}>
      <Card title="My bids" meta="Track proposals, conversations, and awarded work.">
        <p className="body text-ink-muted">Bid pipeline demo: submitted, in discussion, approved, and active.</p>
      </Card>
    </main>
  );
}
