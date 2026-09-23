"use client";

import { ResizeHandle, useResizable } from "@astryxdesign/core/Resizable";
import { HStack, Stack } from "@astryxdesign/core/Stack";
import { Text } from "@astryxdesign/core/Text";
import { Examples, Preview } from "./shared";

export default function ResizeHandleDemo() {
  const pane = useResizable({ defaultSize: 160, minSize: 80, maxSize: 280 });

  return (
    <Examples>
      <Preview label="Two panes">
        <HStack height={140}>
          <Stack width={pane.size} height={140} padding={3}>
            <Text>Pane</Text>
          </Stack>
          <ResizeHandle resizable={pane.props} hasDivider />
          <Stack height={140} padding={3}>
            <Text>Content</Text>
          </Stack>
        </HStack>
      </Preview>
    </Examples>
  );
}
