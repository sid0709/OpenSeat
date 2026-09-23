"use client";

import { useState } from "react";
import { Field } from "@astryxdesign/core/Field";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Examples, Preview } from "./shared";

export default function FieldDemo() {
  const [value, setValue] = useState("");

  return (
    <Examples>
      <Preview label="Label above">
        <Field label="When can you start" inputID="start-field">
          <TextInput
            width={240}
            label="When can you start"
            isLabelHidden
            value={value}
            onChange={setValue}
            placeholder="e.g. Next Monday"
          />
        </Field>
      </Preview>
    </Examples>
  );
}
