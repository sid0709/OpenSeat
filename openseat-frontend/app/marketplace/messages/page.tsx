"use client";

import { Card } from "@openseat/design-system";

export default function MessagesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--canvas)", padding: "var(--spacing-8)" }}>
      <Card title="Messages" meta="Conversations are organized by job and participant.">
        <p className="body text-ink-muted">The shared conversation inbox is ready for threaded chat integration.</p>
      </Card>
    </main>
  );
}
