"use client";

import { Card } from "@openseat/design-system";

export default function CandidateWorkPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--canvas)", padding: "var(--spacing-8)" }}>
      <Card title="Active work" meta="Awarded jobs become contracts with milestones and submissions.">
        <p className="body text-ink-muted">Work tracking is scaffolded for the contract and milestone workflow.</p>
      </Card>
    </main>
  );
}
