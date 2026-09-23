"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { JobRoomRecord, RoomApplicationsMap } from "@/src/shared/types/job-room";

interface ClientApplicationsManagerProps {
  rooms: JobRoomRecord[];
  registry: RoomApplicationsMap;
  onSendMessage: (roomId: string, candidateId: string, role: "Client", text: string) => void;
  onApprove: (roomId: string, candidateId: string) => void;
}

export function ClientApplicationsManager({
  rooms,
  registry,
  onSendMessage,
  onApprove,
}: ClientApplicationsManagerProps) {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [activeCandidateId, setActiveCandidateId] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState("");

  const activeRoomData = selectedRoomId ? registry[selectedRoomId] : null;
  const currentProposals = activeRoomData?.proposals || [];
  const activeProposal = currentProposals.find((p) => p.id === activeCandidateId);
  const activeChats =
    selectedRoomId && activeCandidateId ? activeRoomData?.chatHistory[activeCandidateId] || [] : [];

  const handleDispatchMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRoomId || !activeCandidateId || !chatInput.trim()) return;
    onSendMessage(selectedRoomId, activeCandidateId, "Client", chatInput);
    setChatInput("");
  };

  return (
    <Card style={{ padding: "var(--space-6, 24px)", marginTop: "var(--space-4)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <h2 className="h1" style={{ marginBottom: "var(--space-1)" }}>
            Bids & Applicant Management
          </h2>
          <p className="body text-ink-muted">
            Review incoming room entries, coordinate requirements, and approve matching engineers.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--space-4)", minHeight: "360px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              borderRight: "1px solid var(--border-subtle)",
              paddingRight: "var(--space-3)",
            }}
          >
            <span className="caption text-ink-muted">Select Room Thread</span>
            {rooms.map((room) => {
              const applicantsCount = registry[room.id]?.proposals.length || 0;
              return (
                <div
                  key={room.id}
                  onClick={() => {
                    setSelectedRoomId(room.id);
                    setActiveCandidateId(null);
                  }}
                  style={{
                    padding: "var(--space-2)",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: selectedRoomId === room.id ? "var(--surface-sunken)" : "transparent",
                    cursor: "pointer",
                    border: "1px solid " + (selectedRoomId === room.id ? "var(--border-default)" : "transparent"),
                  }}
                >
                  <p
                    className="body-strong"
                    style={{ fontSize: "14px", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    {room.title}
                  </p>
                  <span className="caption text-ink-muted">{applicantsCount} incoming entries</span>
                </div>
              );
            })}
          </div>

          <div>
            {!selectedRoomId ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <p className="body text-ink-muted">Select a room thread to start reviewing candidate entries.</p>
              </div>
            ) : currentProposals.length === 0 ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <p className="body text-ink-muted">No entries submitted to this job room yet.</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "var(--space-4)", height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-2)",
                    borderRight: "1px solid var(--border-subtle)",
                    paddingRight: "var(--space-2)",
                  }}
                >
                  <span className="caption text-ink-muted">Applicants</span>
                  {currentProposals.map((proposal) => (
                    <div
                      key={proposal.id}
                      onClick={() => setActiveCandidateId(proposal.id)}
                      style={{
                        padding: "var(--space-2)",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: activeCandidateId === proposal.id ? "var(--surface-sunken)" : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <p className="body-strong" style={{ fontSize: "13px", margin: 0 }}>
                        {proposal.candidateName}
                      </p>
                      <span
                        className="caption"
                        style={{ color: proposal.status === "Approved" ? "var(--success, #2E7D32)" : "var(--primary)" }}
                      >
                        {proposal.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {!activeCandidateId ? (
                    <p className="body text-ink-muted" style={{ padding: "var(--space-4)" }}>
                      Select an applicant to open their cover letter and access messaging.
                    </p>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", height: "100%" }}>
                      <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "var(--space-2)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h4 className="body-strong" style={{ fontSize: "16px", margin: 0 }}>
                            {activeProposal?.candidateName}
                          </h4>
                          <span className="body-strong" style={{ color: "var(--primary)" }}>
                            {activeProposal?.candidateRate}
                          </span>
                        </div>
                        <p className="caption text-ink-muted" style={{ margin: "4px 0" }}>
                          {activeProposal?.candidateTitle}
                        </p>
                        <p
                          className="body-sm"
                          style={{
                            fontStyle: "italic",
                            background: "var(--surface-sunken)",
                            padding: "var(--space-2)",
                            borderRadius: "var(--radius-sm)",
                            margin: "4px 0",
                          }}
                        >
                          &ldquo;{activeProposal?.coverLetterText}&rdquo;
                        </p>
                      </div>

                      <div
                        style={{
                          flexGrow: 1,
                          overflowY: "auto",
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--space-2)",
                          background: "var(--surface-sunken)",
                          borderRadius: "var(--radius-md)",
                          padding: "var(--space-3)",
                          maxHeight: "160px",
                        }}
                      >
                        {activeChats.map((msg, index) => (
                          <div
                            key={index}
                            style={{
                              alignSelf: msg.senderRole === "Client" ? "flex-end" : "flex-start",
                              backgroundColor: msg.senderRole === "Client" ? "var(--primary)" : "var(--border-default)",
                              color: msg.senderRole === "Client" ? "var(--on-primary, #FFF)" : "var(--ink)",
                              padding: "var(--space-2)",
                              borderRadius: "var(--radius-sm)",
                              maxWidth: "80%",
                            }}
                          >
                            <p className="body-sm" style={{ margin: 0 }}>
                              {msg.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleDispatchMsg} style={{ display: "flex", gap: "var(--space-2)" }}>
                        <div style={{ flexGrow: 1 }}>
                          <Input
                            placeholder="Type message response..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                          />
                        </div>
                        <Button type="submit" variant="secondary" size="sm">
                          Send
                        </Button>
                        {activeProposal?.status !== "Approved" ? (
                          <Button
                            type="button"
                            variant="primary"
                            size="sm"
                            onClick={() => onApprove(selectedRoomId!, activeCandidateId)}
                          >
                            Approve & Hire
                          </Button>
                        ) : (
                          <Button type="button" variant="ghost" size="sm" disabled>
                            ✓ Approved Slot
                          </Button>
                        )}
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
