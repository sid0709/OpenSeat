"use client";

import { Button } from "@astryxdesign/core/Button";
import { Stack, HStack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function StackDemo() {
  return (
    <Examples>
      <Preview label="Vertical">
        <Stack gap={2}>
          <Button label="First" variant="secondary" size="sm" />
          <Button label="Second" variant="secondary" size="sm" />
          <Button label="Third" variant="secondary" size="sm" />
        </Stack>
      </Preview>
      <Preview label="Horizontal">
        <HStack gap={2}>
          <Text>One</Text>
          <Text>Two</Text>
          <Text>Three</Text>
        </HStack>
      </Preview>
    </Examples>
  );
}
