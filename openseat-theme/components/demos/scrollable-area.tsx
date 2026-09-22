"use client";

import { ScrollableArea } from "@astryxdesign/core/ScrollableArea";
import { Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function ScrollableAreaDemo() {
  return (
    <Examples>
      <Preview label="Overflow">
        <ScrollableArea label="Rows" height={160}>
          <Stack gap={2}>
            {Array.from({ length: 12 }, (_, i) => (
              <Text key={i} display="block">
                Row {i + 1}
              </Text>
            ))}
          </Stack>
        </ScrollableArea>
      </Preview>
    </Examples>
  );
}
