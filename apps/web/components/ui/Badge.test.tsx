import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders the provided label", () => {
    render(<Badge label="Available" />);

    expect(screen.getByText("Available")).toBeInTheDocument();
  });

  it("uses the neutral tone by default", () => {
    render(<Badge label="Available" />);

    const badge = screen.getByText("Available");

    expect(badge).toHaveClass("caption");
    expect(badge).toHaveClass("os-badge");
    expect(badge).toHaveClass("os-badge-neutral");
  });

  it("uses the provided tone", () => {
    render(<Badge label="Warning" tone="warning" />);

    expect(screen.getByText("Warning")).toHaveClass("os-badge-warning");
  });
});
