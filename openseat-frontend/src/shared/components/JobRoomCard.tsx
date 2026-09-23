"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobRoomRecord } from "@/src/shared/types/job-room";

interface JobRoomCardProps {
  room: JobRoomRecord;
  onBidAction?: (id: string) => void;
  showBidButton?: boolean;
}

export function JobRoomCard({ room, onBidAction, showBidButton = true }: JobRoomCardProps) {
  return (
    <Card interactive className="os-card-raised">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3, 12px)" }}>
        <div>
          <span className="caption text-ink-muted" style={{ display: "block", marginBottom: "var(--space-1, 4px)" }}>
            {room.postedTimeText}
          </span>
          <h3 className="h2 os-card-title">{room.title}</h3>
        </div>

        <div
          className="body-sm text-ink-muted"
          style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4, 16px)", alignItems: "center" }}
        >
          <span>{room.isPaymentVerified ? "⚡ Payment verified" : "⚪ Payment unverified"}</span>
          {room.clientRating && <span>⭐ {room.clientRating}</span>}
          <span>{room.clientTotalSpentText}</span>
          <span>📍 {room.clientLocationCode}</span>
        </div>

        <div className="body-strong text-ink">
          {room.budgetType}: {room.rateOrBudgetRangeText} &middot; {room.experienceLevelRequired} &middot; Est.
          Time: {room.durationEstimateText}, {room.weeklyCommitmentText}
        </div>

        <p className="body text-ink" style={{ margin: 0 }}>
          {room.descriptionParagraph}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1, 4px)" }}>
          {room.skillsTags.map((tag) => (
            <Badge key={tag} label={tag} tone="neutral" />
          ))}
        </div>

        <div
          className="os-card-foot"
          style={{ margin: 0, padding: 0, border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span className="caption text-ink-muted">
            Proposals: <span className="text-ink">{room.proposalsCountText}</span>
          </span>
          {showBidButton && onBidAction && (
            <Button size="sm" variant="primary" onClick={() => onBidAction(room.id)}>
              Place Room Bid
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
