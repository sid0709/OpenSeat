"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Input, Button, ThemeToggle } from "@openseat/design-system";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export default function MarketplaceLoginPage() {
  const router = useRouter();
  const { loginUser } = useMockAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage("Please complete all required input credentials fields.");
      return;
    }

    const result = loginUser(email, password);

    if (result.success) {
      router.push("/marketplace");
    } else {
      setErrorMessage(result.error || "Authentication error occurred.");
    }
  };

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
      <Card style={{ width: "100%", maxWidth: "420px", padding: "var(--space-6, 24px)" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
          <div>
            <h2 className="h1" style={{ marginBottom: "var(--space-1, 4px)" }}>
              Welcome Back
            </h2>
            <p className="body text-ink-muted">Sign in to your OpenSeat bidding terminal.</p>
          </div>

          {errorMessage && (
            <div
              className="body-sm"
              style={{
                color: "var(--danger, #D32F2F)",
                backgroundColor: "var(--danger-bg, #FFEBEE)",
                padding: "var(--space-2, 8px) var(--space-3, 12px)",
                borderRadius: "var(--radius-sm, 6px)",
                border: "var(--border-width-hairline, 1px) solid var(--danger)",
              }}
            >
              ⚠️ {errorMessage}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3, 12px)" }}>
            <Input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" style={{ width: "100%" }}>
            Log In to Workspace
          </Button>

          <p className="caption text-ink-muted" style={{ textAlign: "center", margin: 0 }}>
            Don&apos;t have an account?{" "}
            <Link href="/marketplace/register" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
              Register Here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
