"use client";

import React, { useSyncExternalStore } from "react";
import { Nav, Button } from "@openseat/design-system";
import { ClientWorkspace } from "@/src/client/components/ClientWorkspace";
import { ClientApplicationsManager } from "@/src/client/components/ClientApplicationsManager";
import { JobRoomCard } from "@/src/shared/components/JobRoomCard";
import { useClientDashboard } from "@/src/client/hooks/useClientDashboard";

const emptySubscribe = () => () => {};

export function ClientDashboardView() {
  const {
    clientRooms,
    postedRooms,
    applicationsRegistry,
    handlePostJob,
    handleSendChatMessage,
    handleApproveProposal,
    currentUser,
    logoutUser,
  } = useClientDashboard();

  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const greetingText =
    isClient && currentUser?.fullName ? `Welcome back, ${currentUser.fullName}!` : "Welcome back, Client!";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
      <Nav
        brand="OpenSeat Marketplace"
        items={[
          { label: "Post Jobs", active: true },
          { label: "Manage Applicants" },
        ]}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "var(--space-6, 24px) var(--space-4, 16px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-6, 24px)",
          }}
        >
          <div>
            <span className="body-strong">{greetingText}</span>
            <span className="label text-ink-muted" style={{ marginLeft: "var(--space-2, 8px)" }}>
              Client workspace
            </span>
          </div>
          <Button variant="secondary" size="sm" onClick={logoutUser}>
            Log Out
          </Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6, 24px)" }}>
          <ClientWorkspace onPostJob={handlePostJob} />

          <ClientApplicationsManager
            rooms={clientRooms}
            registry={applicationsRegistry}
            onSendMessage={handleSendChatMessage}
            onApprove={handleApproveProposal}
          />

          <div>
            <h3 className="h2" style={{ marginBottom: "var(--space-3, 12px)" }}>
              Your Active Room Postings
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
              {postedRooms.map((room) => (
                <JobRoomCard key={room.id} room={room} showBidButton={false} />
              ))}
              {postedRooms.length === 0 && (
                <p className="body text-ink-muted">You haven&apos;t broadcasted any project rooms yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
