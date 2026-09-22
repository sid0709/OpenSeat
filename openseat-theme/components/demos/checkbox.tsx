"use client";

import { useState } from "react";
import { CheckboxInput } from "@astryxdesign/core/CheckboxInput";
import { Stack } from "@astryxdesign/core/Stack";
import { Examples, Preview } from "./shared";

export default function CheckboxDemo() {
  const [notify, setNotify] = useState(true);
  const [digest, setDigest] = useState(false);

  return (
    <Examples>
      <Preview label="Unchecked and checked">
        <Stack gap={2}>
          <CheckboxInput label="Notify me" value={notify} onChange={setNotify} />
          <CheckboxInput label="Weekly digest" value={digest} onChange={setDigest} />
        </Stack>
      </Preview>
      <Preview label="Disabled">
        <CheckboxInput label="Required" value isDisabled />
      </Preview>
    </Examples>
  );
}
