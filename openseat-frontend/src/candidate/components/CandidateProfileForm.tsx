"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/ui/Nav";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export function CandidateProfileForm() {
  const router = useRouter();
  const { currentUser, profile, updateProfile } = useMockAuth();

  const [title, setTitle] = useState(profile.title);
  const [hourlyRate, setHourlyRate] = useState(profile.hourlyRate);
  const [bio, setBio] = useState(profile.bio);
  const [successBanner, setSuccessBanner] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ title, hourlyRate, bio });
    setSuccessBanner(true);
    setTimeout(() => {
      router.push("/marketplace/candidate/dashboard");
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
      <Nav
        brand="OpenSeat Setup"
        items={[
          { label: "Find Work" },
          { label: "Profile Builder", active: true },
        ]}
      />

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "var(--space-6, 24px) var(--space-4, 16px)" }}>
        <Button
          variant="secondary"
          style={{ marginBottom: "var(--space-4, 16px)" }}
          onClick={() => router.push("/marketplace/candidate/dashboard")}
        >
          ← Skip to Dashboard
        </Button>

        <Card style={{ padding: "var(--space-6, 24px)" }}>
          <form onSubmit={handleSaveProfile} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
            <div>
              <h2 className="h1" style={{ marginBottom: "var(--space-1, 4px)" }}>
                Set Up Your Bidder Profile
              </h2>
              <p className="body text-ink-muted">
                Configure your professional details to look standout to potential clients.
              </p>
            </div>

            {successBanner && (
              <div
                className="body-sm"
                style={{
                  color: "var(--success, #2E7D32)",
                  backgroundColor: "var(--success-bg, #E8F5E9)",
                  padding: "var(--space-2, 8px) var(--space-3, 12px)",
                  borderRadius: "var(--radius-sm, 6px)",
                  border: "1px solid var(--success)",
                }}
              >
                ✓ Profile saved! Forwarding to dashboard...
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3, 12px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1, 4px)" }}>
                <span className="caption text-ink-muted">Account Holder</span>
                <Input value={currentUser?.fullName || "Alex Miller"} disabled style={{ opacity: 0.6, cursor: "not-allowed" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1, 4px)" }}>
                <span className="caption text-ink-muted">Professional Title</span>
                <Input
                  placeholder="e.g. Senior Frontend Next.js Engineer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1, 4px)" }}>
                <span className="caption text-ink-muted">Hourly Rate</span>
                <Input placeholder="e.g. $50.00" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1, 4px)" }}>
                <span className="caption text-ink-muted">Professional Biography</span>
                <textarea
                  className="body text-ink"
                  style={{
                    width: "100%",
                    height: "140px",
                    backgroundColor: "var(--surface-sunken, #F5F2EB)",
                    border: "var(--border-width-hairline, 1px) solid var(--border-default)",
                    borderRadius: "var(--radius-md, 12px)",
                    padding: "var(--space-3, 12px)",
                    resize: "vertical",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                  placeholder="Describe your engineering expertise, background accomplishments, and project goals..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Save Profile & Access Marketplace
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
