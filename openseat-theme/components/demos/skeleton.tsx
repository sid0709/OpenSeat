"use client";

import { Skeleton } from "@astryxdesign/core/Skeleton";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function SkeletonDemo() {
  return (
    <Examples>
      <Preview label="Content placeholder">
        <Stack width={240} gap={2}>
          <Skeleton height={16} />
          <Skeleton height={16} width="70%" />
          <Skeleton height={16} width="40%" />
          <Skeleton height={32} width={32} radius="rounded" />
        </Stack>
      </Preview>
    </Examples>
  );
}
