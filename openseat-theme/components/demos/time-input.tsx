"use client";

import { useState } from "react";
import { TimeInput } from "@astryxdesign/core/TimeInput";
import { Examples, Preview } from "./shared";

export default function TimeInputDemo() {
  const [value, setValue] = useState("09:00");

  return (
    <Examples>
      <Preview label="Start time">
        <TimeInput
          width={180}
          label="Start time"
          value={value as never}
          onChange={setValue as never}
        />
      </Preview>
    </Examples>
  );
}
