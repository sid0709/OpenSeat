"use client";

import { Badge } from "@astryxdesign/core/Badge";
import { OverflowList } from "@astryxdesign/core/OverflowList";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function OverflowListDemo() {
  return (
    <Examples>
      <Preview label="Remainder">
        <Stack width={220}>
          <OverflowList maxVisibleItems={3}>
            <Badge label="Design" />
            <Badge label="Copy" />
            <Badge label="Motion" />
            <Badge label="Research" />
            <Badge label="Brand" />
          </OverflowList>
        </Stack>
      </Preview>
    </Examples>
  );
}
