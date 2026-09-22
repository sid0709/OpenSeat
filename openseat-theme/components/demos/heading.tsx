"use client";

import { Heading } from "@astryxdesign/core/Heading";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function HeadingDemo() {
  return (
    <Examples>
      <Preview label="Levels">
        <Stack gap={2}>
          <Heading level={1}>Brand refresh brief</Heading>
          <Heading level={2}>Proof of fit</Heading>
          <Heading level={3}>Landing page copy</Heading>
          <Heading level={4}>Rate and timeline</Heading>
          <Heading level={5}>Notes</Heading>
          <Heading level={6}>Meta</Heading>
        </Stack>
      </Preview>
    </Examples>
  );
}
