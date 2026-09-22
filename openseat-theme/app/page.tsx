"use client";

import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Stack } from "@astryxdesign/core/Stack";
import { OverviewDemos } from "@/components/Demos";

export default function ThemeHome() {
  return (
    <Stack gap={6}>
      <Stack gap={2}>
        <Heading level={1}>Browse the library</Heading>
        <Text color="secondary" display="block">
          Every component from @astryxdesign/core, using the default Neutral theme.
        </Text>
      </Stack>
      <OverviewDemos />
    </Stack>
  );
}
