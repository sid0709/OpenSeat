"use client";

import type { ReactNode } from "react";
import { Card, HStack, Stack, Text } from "@openseat/design-system";

export const SEARCH_ITEMS = [
  { id: "button", label: "Button" },
  { id: "dialog", label: "Dialog" },
  { id: "input", label: "Text Input" },
  { id: "table", label: "Table" },
];

export function Row({ children }: { children: ReactNode }) {
  return (
    <HStack gap={2} vAlign="center" wrap="wrap">
      {children}
    </HStack>
  );
}

export function Preview({
  label,
  description,
  align = "stretch",
  children,
}: {
  label: string;
  description?: string;
  /** start keeps controls at their natural width; stretch lets tables, toolbars, and cards fill. */
  align?: "start" | "stretch";
  children: ReactNode;
}) {
  return (
    <Card>
      <Stack gap={3} hAlign={align}>
        <Stack gap={0.5}>
          <Text type="label" color="secondary">
            {label}
          </Text>
          {description && (
            <Text type="supporting" color="secondary">
              {description}
            </Text>
          )}
        </Stack>
        {children}
      </Stack>
    </Card>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <Text type="supporting" color="secondary" display="block">
      {children}
    </Text>
  );
}

export function Examples({ children }: { children: ReactNode }) {
  return <Stack gap={5}>{children}</Stack>;
}
