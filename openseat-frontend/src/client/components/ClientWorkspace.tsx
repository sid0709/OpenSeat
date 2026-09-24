"use client";

import React, { useState } from "react";
import { Card, Input, Button } from "@openseat/design-system";
import { ClientJobPost } from "@/src/client/types";

interface ClientWorkspaceProps {
  onPostJob: (job: ClientJobPost) => void;
}

export function ClientWorkspace({ onPostJob }: ClientWorkspaceProps) {
  const [title, setTitle] = useState("");
  const [budgetType, setBudgetType] = useState<"Hourly" | "Fixed-Price">("Hourly");
  const [budgetRange, setBudgetRange] = useState("");
  const [experience, setExperience] = useState<"Entry Level" | "Intermediate" | "Expert">("Intermediate");
  const [description, setDescription] = useState("");
  const [skillsText, setSkillsText] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !budgetRange) return;

    onPostJob({
      title,
      budgetType,
      rateOrBudgetRangeText: budgetRange,
      experienceLevelRequired: experience,
      durationEstimateText: "1 to 3 months",
      weeklyCommitmentText: "30+ hrs/week",
      descriptionParagraph: description,
      skillsTags: skillsText.split(",").map((s) => s.trim()).filter(Boolean),
    });

    setSuccess(true);
    setTitle("");
    setDescription("");
    setBudgetRange("");
    setSkillsText("");
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Card style={{ padding: "var(--space-6, 24px)" }}>
      <form onSubmit={handleSubmitPost} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
        <div>
          <h2 className="h1" style={{ marginBottom: "var(--space-1, 4px)" }}>
            Post a New Job Room
          </h2>
          <p className="body text-ink-muted">Host a custom sealed job room to invite elite engineering talent.</p>
        </div>

        {success && (
          <div
            className="body-sm"
            style={{
              color: "var(--success, #2E7D32)",
              backgroundColor: "var(--success-bg, #E8F5E9)",
              padding: "var(--space-2, 8px)",
              border: "1px solid var(--success)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            ✓ Job room broadcasted onto the OpenSeat marketplace network!
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3, 12px)" }}>
          <Input
            placeholder="Job Title (e.g. Next.js Architecture Expert Needed)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4, 16px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <span className="caption text-ink-muted">Budget Type</span>
              <select
                className="body"
                style={{
                  height: "40px",
                  backgroundColor: "var(--surface-sunken, #F5F2EB)",
                  color: "var(--ink)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-md)",
                  padding: "0 var(--space-2)",
                }}
                value={budgetType}
                onChange={(e) => setBudgetType(e.target.value as "Hourly" | "Fixed-Price")}
              >
                <option value="Hourly">Hourly Rate</option>
                <option value="Fixed-Price">Fixed-Price Project</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <span className="caption text-ink-muted">Rate or Budget Estimate Range</span>
              <Input placeholder="e.g. $45.00 - $70.00" value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <span className="caption text-ink-muted">Target Skill Badges (Comma-separated)</span>
            <Input
              placeholder="Next.js, TypeScript, TailWind CSS, Rust"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
            />
          </div>

          <textarea
            className="body text-ink"
            style={{
              width: "100%",
              height: "120px",
              backgroundColor: "var(--surface-sunken)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-3)",
              resize: "vertical",
              fontFamily: "inherit",
              outline: "none",
            }}
            placeholder="Provide explicit project milestones and operational parameters details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button type="submit" variant="primary">
          Launch Sealed Room
        </Button>
      </form>
    </Card>
  );
}
