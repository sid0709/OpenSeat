"use client";

import { ProgressBar } from "@astryxdesign/core/ProgressBar";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function ProgressBarDemo() {
  return (
    <Examples>
      <Preview label="Determinate">
        <Stack width={280} gap={4}>
          <ProgressBar value={64} label="Uploading" hasValueLabel />
          <ProgressBar value={20} label="Scanning" />
          <ProgressBar value={100} label="Done" hasValueLabel />
        </Stack>
      </Preview>
    </Examples>
  );
}
