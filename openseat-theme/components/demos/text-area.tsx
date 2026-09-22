"use client";

import { useState } from "react";
import { TextArea } from "@astryxdesign/core/TextArea";
import { Examples, Preview } from "./shared";

export default function TextAreaDemo() {
  const [value, setValue] = useState("");

  return (
    <Examples>
      <Preview label="Brief">
        <TextArea width={320} label="Brief" value={value} onChange={setValue} placeholder="What do you need?" />
      </Preview>
      <Preview label="Error">
        <TextArea
          width={320}
          label="Brief"
          value="Too short"
          onChange={() => undefined}
          status={{ type: "error", message: "Add more detail." }}
        />
      </Preview>
    </Examples>
  );
}
