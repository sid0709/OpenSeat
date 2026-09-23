"use client";

import { useState } from "react";

import { Button } from "./Button";

type Theme = "dark" | "light";

const COLOR_GROUPS: { title: string; tokens: string[] }[] = [
  {
    title: "Canvas & surface",
    tokens: ["canvas", "surface", "surface-sunken", "surface-hover", "surface-selected"],
  },
  { title: "Border", tokens: ["border-subtle", "border-default", "border-strong", "border-focus"] },
  { title: "Ink", tokens: ["ink", "ink-muted", "ink-faint", "on-primary"] },
  {
    title: "Primary & link",
    tokens: ["primary", "primary-hover", "primary-active", "primary-bg", "link", "link-hover"],
  },
  {
    title: "Status",
    tokens: [
      "success",
      "success-bg",
      "warning",
      "warning-bg",
      "danger",
      "danger-hover",
      "danger-bg",
    ],
  },
  { title: "Overlay", tokens: ["overlay"] },
];

const RADII = ["radius-sm", "radius-md", "radius-lg", "radius-xl", "radius-pill", "radius-full"];
const ELEVATIONS = ["elevation-0", "elevation-1", "elevation-2", "elevation-3"];
const BORDER_WIDTHS = ["border-width-hairline", "border-width-thick"];
const OPACITIES = ["opacity-disabled", "opacity-overlay", "opacity-hover-scrim"];
const DURATIONS = ["duration-fast", "duration-normal", "duration-slow"];
const EASINGS = ["ease-standard", "ease-decelerate", "ease-accelerate"];
const TYPE_STYLES = [
  "display",
  "h1",
  "h2",
  "h3",
  "body-lg",
  "body",
  "body-strong",
  "body-sm",
  "label",
  "caption",
  "button",
];

const ALL_TOKENS = [
  ...COLOR_GROUPS.flatMap((g) => g.tokens),
  ...RADII,
  ...ELEVATIONS,
  ...BORDER_WIDTHS,
  ...OPACITIES,
  ...DURATIONS,
  ...EASINGS,
];

/** Reads every token's resolved value off <html> so the table shows what the
    active theme actually paints, not the source-file default. */
function readTokens(): Record<string, string> {
  const style = getComputedStyle(document.documentElement);
  const out: Record<string, string> = {};
  for (const t of ALL_TOKENS) out[t] = style.getPropertyValue(`--${t}`).trim();
  return out;
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="h3 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Value({ children }: { children: string }) {
  return <code className="caption block truncate text-ink-muted">{children || "—"}</code>;
}

/**
 * A toggleable, self-describing demo of every OpenSeat design token: a sample
 * rendered with the token beside its name and live resolved value. Includes a
 * dark/light switch because most values differ per theme.
 */
export function TokenDemo({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const [theme, setTheme] = useState<Theme>("dark");
  const [values, setValues] = useState<Record<string, string>>({});
  const [motionKey, setMotionKey] = useState(0);

  const show = (next: boolean) => {
    setOpen(next);
    if (!next) return;
    // Pick up whatever theme <html> currently carries, then snapshot values.
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
    setValues(readTokens());
  };

  const switchTheme = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    setValues(readTokens());
  };

  return (
    <div className="rounded-lg border border-border-subtle bg-surface p-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="accent-primary"
            checked={open}
            onChange={(e) => {
              show(e.target.checked);
            }}
          />
          <span className="body-strong">Show design token demo</span>
        </label>
        {open && (
          <>
            <span className="text-ink-faint">·</span>
            <div className="flex items-center gap-1" role="group" aria-label="Theme">
              <Button
                size="sm"
                variant={theme === "dark" ? "secondary" : "ghost"}
                onClick={() => {
                  switchTheme("dark");
                }}
              >
                Dark
              </Button>
              <Button
                size="sm"
                variant={theme === "light" ? "secondary" : "ghost"}
                onClick={() => {
                  switchTheme("light");
                }}
              >
                Light
              </Button>
            </div>
          </>
        )}
      </div>

      {open && (
        <div className="mt-6">
          <Group title="Color">
            {COLOR_GROUPS.map((g) => (
              <div key={g.title} className="mb-4">
                <p className="label mb-2 text-ink-muted">{g.title}</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {g.tokens.map((t) => (
                    <div
                      key={t}
                      className="overflow-hidden rounded-md border border-border-subtle bg-surface-sunken"
                    >
                      <div
                        className="h-10 border-b border-border-subtle"
                        style={{ background: `var(--${t})` }}
                      />
                      <div className="p-2">
                        <span className="caption block truncate text-ink">--{t}</span>
                        <Value>{values[t]}</Value>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Group>

          <Group title="Radius">
            <div className="flex flex-wrap gap-4">
              {RADII.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <div
                    className="h-16 w-16 border border-border-default bg-primary-bg"
                    style={{ borderRadius: `var(--${t})` }}
                  />
                  <span className="caption text-ink">--{t}</span>
                  <Value>{values[t]}</Value>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Elevation">
            <div className="flex flex-wrap gap-6 rounded-lg bg-canvas p-6">
              {ELEVATIONS.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <div
                    className="h-16 w-24 rounded-lg border border-border-subtle bg-surface"
                    style={{ boxShadow: `var(--${t})` }}
                  />
                  <span className="caption text-ink">--{t}</span>
                  <Value>{values[t]}</Value>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Border width">
            <div className="flex flex-wrap gap-6">
              {BORDER_WIDTHS.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <div
                    className="h-12 w-24 rounded-md border-border-strong bg-surface-sunken"
                    style={{ borderStyle: "solid", borderWidth: `var(--${t})` }}
                  />
                  <span className="caption text-ink">--{t}</span>
                  <Value>{values[t]}</Value>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Opacity">
            <div className="flex flex-wrap gap-6">
              {OPACITIES.map((t) => (
                <div key={t} className="flex flex-col items-center gap-2">
                  <div className="relative h-12 w-24 overflow-hidden rounded-md bg-primary">
                    <div className="absolute inset-0 bg-ink" style={{ opacity: `var(--${t})` }} />
                  </div>
                  <span className="caption text-ink">--{t}</span>
                  <Value>{values[t]}</Value>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Motion">
            <p className="body-sm mb-3 text-ink-muted">
              Each row pairs a duration with an easing. Press play to run them all.
            </p>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setMotionKey((k) => k + 1);
              }}
            >
              Play
            </Button>
            <div className="mt-4 flex flex-col gap-3">
              {DURATIONS.map((d, i) => {
                const e = EASINGS[i];
                return (
                  <div key={d} className="flex items-center gap-4">
                    <div className="w-56 shrink-0">
                      <span className="caption block text-ink">
                        --{d} / --{e}
                      </span>
                      <Value>{`${values[d]} · ${values[e]}`}</Value>
                    </div>
                    <div className="relative h-6 flex-1 rounded-pill bg-surface-sunken">
                      <div
                        key={motionKey}
                        className="absolute top-1 h-4 w-4 rounded-full bg-primary"
                        style={{
                          left: "4px",
                          animation:
                            motionKey > 0
                              ? `os-token-slide var(--${d}) var(--${e}) forwards`
                              : "none",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <style>{`@keyframes os-token-slide { to { left: calc(100% - 20px); } }`}</style>
          </Group>

          <Group title="Type styles">
            <div className="flex flex-col gap-2">
              {TYPE_STYLES.map((cls) => (
                <div
                  key={cls}
                  className="flex items-baseline gap-4 border-b border-border-subtle pb-2"
                >
                  <code className="caption w-24 shrink-0 text-ink-muted">.{cls}</code>
                  <span className={cls}>Sealed rooms, invited bidders.</span>
                </div>
              ))}
            </div>
          </Group>
        </div>
      )}
    </div>
  );
}
