"use client";

import { Heading } from "@astryxdesign/core/Heading";
import { Section } from "@astryxdesign/core/Section";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function SectionDemo() {
  return (
    <Examples>
      <Preview label="Titled block">
        <Section>
          <Stack gap={2}>
            <Heading level={3}>Proof of fit</Heading>
            <Text color="secondary">What this surface is asking for.</Text>
          </Stack>
        </Section>
      </Preview>
    </Examples>
  );
}
