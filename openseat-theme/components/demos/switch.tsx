"use client";

import { useState } from "react";
import { Switch } from "@astryxdesign/core/Switch";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function SwitchDemo() {
  const [completed, setCompleted] = useState(true);
  const [digest, setDigest] = useState(false);

  return (
    <Examples>
      <Preview label="Settings">
        <Stack gap={3}>
          <Switch label="Show completed" value={completed} onChange={setCompleted} />
          <Switch label="Email digest" value={digest} onChange={setDigest} />
        </Stack>
      </Preview>
      <Preview label="Disabled">
        <Switch label="Locked" value isDisabled />
      </Preview>
    </Examples>
  );
}
