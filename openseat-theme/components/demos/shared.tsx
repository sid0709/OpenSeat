"use client";

import type { ReactNode } from "react";
import { Card } from "@astryxdesign/core/Card";
import { Stack, HStack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";

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

export function Preview({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Card>
      <Stack gap={3}>
        <Text type="label" color="secondary">
          {label}
        </Text>
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
