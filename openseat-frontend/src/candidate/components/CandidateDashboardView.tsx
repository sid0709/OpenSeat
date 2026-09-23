"use client";

import React, { useSyncExternalStore } from "react";
import { Nav } from "@/components/ui/Nav";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FilterSidebar } from "@/src/candidate/components/FilterSidebar";
import { JobRoomCard } from "@/src/shared/components/JobRoomCard";
import { useCandidateDashboard } from "@/src/candidate/hooks/useCandidateDashboard";

const emptySubscribe = () => () => {};

export function CandidateDashboardView() {
  const { rooms, filters, updateFilters, handleApplyToJob, currentUser, profile, logoutUser } =
    useCandidateDashboard();

  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const greetingText =
    isClient && currentUser?.fullName ? `Welcome back, ${currentUser.fullName}!` : "Welcome back, Candidate!";

  const profileSubtext = isClient ? `(${profile.title} · ${profile.hourlyRate}/hr)` : "";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
      <Nav
        brand="OpenSeat Marketplace"
        items={[
          { label: "Find Work", active: true },
          { label: "My Active Bids" },
        ]}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "var(--space-6, 24px) var(--space-4, 16px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-4, 16px)",
          }}
        >
          <div>
            <span className="body-strong">{greetingText} </span>
            {isClient && profileSubtext && <span className="label text-ink-muted">{profileSubtext}</span>}
          </div>
          <Button variant="secondary" size="sm" onClick={logoutUser}>
            Log Out
          </Button>
        </div>

        <div style={{ marginBottom: "var(--space-6, 24px)" }}>
          <Input
            placeholder="Search open project rooms (e.g. WooCommerce, CMO, Marketing)"
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "var(--space-6, 24px)",
            alignItems: "start",
          }}
        >
          <aside style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
            <FilterSidebar filters={filters} onFilterChange={updateFilters} />
            <div
              style={{
                borderTop: "var(--border-width-hairline, 1px) solid var(--border-subtle)",
                paddingTop: "var(--space-4, 16px)",
              }}
            >
              <p className="caption text-ink-muted" style={{ margin: 0 }}>
                Active Session Role
              </p>
              <p className="body-strong" style={{ margin: "var(--space-1, 4px) 0" }}>
                {isClient ? "Candidate" : "Loading..."}
              </p>
            </div>
          </aside>

          <main>
            <div style={{ marginBottom: "var(--space-4, 16px)" }}>
              <span className="label text-ink-muted">
                Showing {rooms.length} available project rooms matching search parameters
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
              {rooms.map((room) => (
                <JobRoomCard key={room.id} room={room} onBidAction={handleApplyToJob} />
              ))}
            </div>

            {rooms.length === 0 && (
              <div style={{ textAlign: "center", padding: "var(--space-8, 32px) 0" }}>
                <p className="h3 text-ink-muted">No active job rooms match your selected configuration filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
