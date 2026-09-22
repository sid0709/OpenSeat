"use client";

import { Heading, PageBody, PageHero, PreviewGrid, Stack, Text } from "@openseat/design-system";
import { OverviewDemos } from "@/components/Demos";

export default function ThemeHome() {
  return (
    <PageBody>
      <PageHero>
        <Stack gap={12} align="center">
          <Heading level={1}>Browse the library</Heading>
          <Text muted>
            Every component, built on OpenSeat tokens — Meta’s Facebook blue, shared with the product.
          </Text>
        </Stack>
      </PageHero>
      <PreviewGrid>
        <OverviewDemos />
      </PreviewGrid>
    </PageBody>
  );
}
