import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { Avatar, AvatarStack } from "./Avatar";
import { Button } from "./Button";
import { Card } from "./Card";
import { EmptyState } from "./EmptyState";
import { Input } from "./Input";
import { Nav } from "./Nav";
import { Toast } from "./Toast";
import { TokenDemo } from "./TokenDemo";

describe("shared UI behavior", () => {
  it("renders avatar sizes, status, and stack overflow", () => {
    const { container } = render(
      <>
        <Avatar initials="AB" />
        <Avatar initials="CD" size={32} status />
        <AvatarStack people={[{ initials: "EF" }]} overflow={2} />
        <AvatarStack people={[]} />
      </>,
    );
    expect(screen.getByText("AB")).toHaveClass("os-avatar-24");
    expect(screen.getByText("CD")).toHaveClass("os-avatar-32");
    expect(container.querySelector(".os-status-dot")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("forwards button refs and respects disabled interaction", () => {
    const click = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    const { rerender } = render(
      <Button ref={ref} onClick={click}>
        Save
      </Button>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(click).toHaveBeenCalledOnce();
    expect(ref.current).toBe(screen.getByRole("button"));
    rerender(
      <Button disabled variant="danger" size="sm" onClick={click}>
        Save
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(click).toHaveBeenCalledOnce();
  });

  it("renders optional card content and a minimal card", () => {
    const { rerender } = render(
      <Card title="Job" meta="Open" footer="Details" interactive selected raised>
        Brief
      </Card>,
    );
    expect(screen.getByText("Job").parentElement).toHaveClass(
      "os-card-hover",
      "os-card-selected",
      "os-card-raised",
    );
    expect(screen.getByText("Details")).toBeInTheDocument();
    rerender(<Card>Only content</Card>);
    expect(screen.queryByText("Job")).not.toBeInTheDocument();
  });

  it("renders both field kinds and forwards edited values", () => {
    const change = vi.fn();
    const ref = createRef<HTMLInputElement>();
    const { rerender } = render(
      <Input ref={ref} label="Rate" aria-label="Rate" helper="Use dollars" onChange={change} />,
    );
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "40" } });
    expect(ref.current?.value).toBe("40");
    expect(change).toHaveBeenCalledOnce();
    rerender(<Input multiline aria-label="Brief" label="Brief" error helper="Required" />);
    expect(screen.getByRole("textbox")).toHaveClass("os-field-error");
    expect(screen.getByText("Required")).toHaveClass("os-field-helper-error");
    rerender(<Input aria-label="Plain" />);
    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });

  it("connects navigation and empty-state actions", () => {
    const action = vi.fn();
    const { rerender } = render(
      <Nav
        items={[{ label: "Jobs", href: "/jobs", active: true }, { label: "Inbox" }]}
        onCtaClick={action}
      />,
    );
    expect(screen.getByRole("link", { name: "Jobs" })).toHaveAttribute("href", "/jobs");
    fireEvent.click(screen.getByRole("button"));
    expect(action).toHaveBeenCalledOnce();
    rerender(<Nav />);
    expect(screen.getByText("OpenSeat")).toBeInTheDocument();
    rerender(<EmptyState description="Invite someone" actionLabel="Invite" onAction={action} />);
    fireEvent.click(screen.getByRole("button", { name: "Invite" }));
    expect(action).toHaveBeenCalledTimes(2);
    rerender(<EmptyState />);
    expect(screen.getByText("No bids yet")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("dismisses a toast only when a close action is provided", () => {
    const close = vi.fn();
    const { rerender } = render(<Toast message="Saved" onClose={close} />);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss" }));
    expect(close).toHaveBeenCalledOnce();
    rerender(<Toast message="Failed" tone="danger" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText("Failed")).toBeInTheDocument();
  });

  it("opens the token gallery, changes themes, animates, and closes", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.setProperty("--canvas", "#123456");
    render(<TokenDemo />);
    const toggle = screen.getByRole("checkbox");
    expect(toggle).not.toBeChecked();
    fireEvent.click(toggle);
    expect(screen.getByText("#123456")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Light" }));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    fireEvent.click(screen.getByRole("button", { name: "Dark" }));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    fireEvent.click(screen.getByRole("button", { name: /play/i }));
    fireEvent.click(toggle);
    expect(screen.queryByRole("group", { name: "Theme" })).not.toBeInTheDocument();
  });
});
