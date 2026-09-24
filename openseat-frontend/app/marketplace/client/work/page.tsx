"use client";

import { Card } from "@openseat/design-system";

export default function ClientWorkPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--canvas)", padding: "var(--spacing-8)" }}>
      <Card title="Managed work" meta="Review active hires, milestones, and delivery status.">
        <p className="body text-ink-muted">Client delivery management is scaffolded for the next API-backed iteration.</p>
      </Card>
    </main>
  );
}
