"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "destructive" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "default" | "pill";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** `pill` is fully round. */
  shape?: ButtonShape;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "os-btn-primary",
  secondary: "os-btn-secondary",
  ghost: "os-btn-ghost",
  danger: "os-btn-danger",
  destructive: "os-btn-danger",
  outline: "os-btn-outline",
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
  ({ variant = "primary", size = "md", shape = "default", className = "", ...props }, ref) => {
    const classes = ["button", "os-btn", VARIANT_CLASS[variant], SIZE_CLASS[size], shape === "pill" ? "os-btn-pill" : "", className]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
