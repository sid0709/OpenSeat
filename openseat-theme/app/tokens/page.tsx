"use client";

import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";

const TOKEN_GROUPS: { title: string; tokens: string[] }[] = [
  {
    title: "Color",
    tokens: [
      "--color-accent",
      "--color-background-body",
      "--color-background-surface",
      "--color-background-card",
      "--color-background-muted",
      "--color-text-primary",
      "--color-text-secondary",
      "--color-text-disabled",
      "--color-border",
      "--color-success",
      "--color-error",
      "--color-warning",
    ],
  },
  {
    title: "Radius",
    tokens: ["--radius-element", "--radius-container", "--radius-inner", "--radius-page"],
  },
  {
    title: "Space",
    tokens: ["--spacing-1", "--spacing-2", "--spacing-3", "--spacing-4", "--spacing-6", "--spacing-8"],
  },
  {
    title: "Type",
    tokens: ["--font-family-body", "--font-family-heading", "--font-size-base", "--text-body-size"],
  },
];

function Swatch({ token }: { token: string }) {
  const isColor = token.startsWith("--color");
  return (
    <Card>
      <Stack gap={2}>
        {isColor ? (
          <div
            style={{
              height: 48,
              borderRadius: 12,
              background: `var(${token})`,
              border: "1px solid var(--color-border)",
            }}
          />
        ) : null}
        <Text type="code" display="block">
          {token}
        </Text>
      </Stack>
    </Card>
  );
}

export default function TokensPage() {
  return (
    <Stack gap={6}>
      <Stack gap={2}>
        <Heading level={1}>Tokens</Heading>
        <Text color="secondary" display="block">
          Neutral theme tokens from @astryxdesign/theme-neutral. Color is unchanged from Astryx.
        </Text>
      </Stack>
      {TOKEN_GROUPS.map((group) => (
        <Stack key={group.title} gap={3}>
          <Heading level={2}>{group.title}</Heading>
          <Grid columns={{ minWidth: 180 }} gap={3}>
            {group.tokens.map((token) => (
              <Swatch key={token} token={token} />
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
}
