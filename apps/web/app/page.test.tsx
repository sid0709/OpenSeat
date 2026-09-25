import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Home from "./page";
import StyleGuide from "./style-guide/page";

it("offers onboarding and design token links on the landing page", () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: "Design tokens" })).toHaveAttribute(
    "href",
    "/style-guide#tokens",
  );
});

it("renders the design system reference gallery", () => {
  render(<StyleGuide />);
  expect(screen.getByRole("heading", { name: "OpenSeat style guide" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Toasts" })).toBeInTheDocument();
});
