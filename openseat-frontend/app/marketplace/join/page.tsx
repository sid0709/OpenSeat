"use client";

import React, { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, ThemeToggle } from "@openseat/design-system";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

const emptySubscribe = () => () => {};

export default function MarketplaceJoinPage() {
  const router = useRouter();
  const { currentUser, assignRole } = useMockAuth();

  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const handleRoleSelection = (role: "Candidate" | "Client") => {
    assignRole(role);
    if (role === "Candidate") {
      router.push("/marketplace/candidate/profile");
    } else {
      router.push("/marketplace/client/dashboard");
    }
  };

  const userGreetingText = isClient && currentUser?.fullName ? `Welcome, ${currentUser.fullName}!` : "Welcome!";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--canvas)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-4, 16px)",
      }}
    >
      <div style={{ position: "absolute", top: "var(--spacing-4)", right: "var(--spacing-4)" }}><ThemeToggle /></div>
      <Card style={{ width: "100%", maxWidth: "580px", padding: "var(--space-6, 24px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)", textAlign: "center" }}>
          <div>
            <h2 className="h1" style={{ marginBottom: "var(--space-1, 4px)" }}>
              {userGreetingText}
            </h2>
            <p className="body text-ink-muted">
              Tell us how you would like to participate in the OpenSeat marketplace ecosystem.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-4, 16px)",
              marginTop: "var(--space-2, 8px)",
            }}
          >
            <Card
              interactive
              onClick={() => handleRoleSelection("Candidate")}
              style={{
                padding: "var(--space-4, 16px)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2, 8px)",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "32px", display: "block" }}>🙋‍♂️</span>
              <p className="body-strong" style={{ margin: 0 }}>
                Join as Candidate
              </p>
              <p className="caption text-ink-muted" style={{ margin: 0 }}>
                I am a freelancer or engineer looking to apply and place bids on sealed project rooms.
              </p>
            </Card>

            <Card
              interactive
              onClick={() => handleRoleSelection("Client")}
              style={{
                padding: "var(--space-4, 16px)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2, 8px)",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "32px", display: "block" }}>💼</span>
              <p className="body-strong" style={{ margin: 0 }}>
                Join as Client
              </p>
              <p className="caption text-ink-muted" style={{ margin: 0 }}>
                I am a project creator looking to source top engineering talent and host bidding loops.
              </p>
            </Card>
          </div>

          <div
            style={{
              marginTop: "var(--space-2, 8px)",
              borderTop: "var(--border-width-hairline, 1px) solid var(--border-subtle)",
              paddingTop: "var(--space-4, 16px)",
            }}
          >
            <Button variant="ghost" size="sm" onClick={() => router.push("/marketplace/login")}>
              ← Back to Sign In
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
