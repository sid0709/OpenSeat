"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useMockAuth } from "@/src/shared/auth/MockAuthContext";

export default function MarketplaceRegisterPage() {
  const router = useRouter();
  const { registerUser } = useMockAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName || !email || !password) {
      setErrorMessage("Please complete all registry context credentials input blocks.");
      return;
    }

    const result = registerUser(fullName, email, password);

    if (result.success) {
      router.push("/marketplace/join");
    } else {
      setErrorMessage(result.error || "Registration validation error.");
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
      <Card style={{ width: "100%", maxWidth: "420px", padding: "var(--space-6, 24px)" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
          <div>
            <h2 className="h1" style={{ marginBottom: "var(--space-1, 4px)" }}>
              Create Account
            </h2>
            <p className="body text-ink-muted">Join the OpenSeat warm marketplace project rooms ecosystem.</p>
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
            <Input placeholder="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <Input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="Choose Secure Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" style={{ width: "100%" }}>
            Complete Setup
          </Button>

          <p className="caption text-ink-muted" style={{ textAlign: "center", margin: 0 }}>
            Already registered?{" "}
            <Link href="/marketplace/login" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
              Sign In
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
