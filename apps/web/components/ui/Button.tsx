"use client";

import { forwardRef } from "react";

import type { ButtonHTMLAttributes } from "react";

/** Public ButtonVariant contract for the Button component. */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
/** Public ButtonSize contract for the Button component. */
export type ButtonSize = "sm" | "md" | "lg";

/** Public ButtonProps contract for the Button component. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "os-btn-primary",
  secondary: "os-btn-secondary",
  ghost: "os-btn-ghost",
  danger: "os-btn-danger",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "os-btn-sm",
  md: "",
  lg: "os-btn-lg",
};

/**
 * The single-action control. Exactly one `variant="primary"` Button per
 * screen — see the OpenSeat Design System README for the full rule set.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    const classes = ["button", "os-btn", VARIANT_CLASS[variant], SIZE_CLASS[size], className]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={classes} {...props} />;
  },
);
Button.displayName = "Button";
